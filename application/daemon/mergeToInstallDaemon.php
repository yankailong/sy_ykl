<?php
set_time_limit(0);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');


define('LOCK_FILE', dirname(__FILE__).'/lock/mergeToInstallDaemon.lock');
define('LOG_LEVEL', 'DEBUG');

$LogFile = dirname(__FILE__).'/log/mergeToInstallDaemon'.date('Y.m.d').'.log';

$Log = new Zw_Log();
$Log->setCurrLogLevel(LOG_LEVEL);
$Log->setLogFile($LogFile);

$handle = fopen(LOCK_FILE, 'w+');
if(!flock($handle, LOCK_EX|LOCK_NB)){
	$Log->write('进程已经启动，请不要重复启动');
	exit();
}

$GmDb = new Zw_Mysql();
$GmDb->setLog($Log);
$GmDb->connect($gmDatabaseHost, $gmDatabaseUsername, $gmDatabasePassword, $gmDatabaseName);

while (1) {
	$LogFile = dirname(__FILE__).'/log/mergeToInstallDaemon'.date('Y.m.d').'.log';
	$Log->setLogFile($LogFile);
	
	try {
		$sql = "
			select
				`version`,
				`majorVersion`,
				`minorVersion`,
				`teenyVersion`,
				`releaseVersion`
			from
				`t_data_game_version`
			where
				`status` = 6
			order by
				((majorVersion * 1000 + minorVersion) * 1000 + teenyVersion) * 1000 + releaseVersion
			limit 1
		";
		
		if( !(($row = $GmDb->getRow($sql)) === false) ) {
			$currentVersion = $row['version'];
			$majorVersion = $row['majorVersion'];
			$minorVersion = $row['minorVersion'];
			$teenyVersion = $row['teenyVersion'];
			$releaseVersion = $row['releaseVersion'];
			
			$sql = "
				select
					`status`
				from
					`t_data_game_version`
				where
					((majorVersion * 1000 + minorVersion) * 1000 + teenyVersion) * 1000 + releaseVersion < (({$majorVersion} * 1000 + {$minorVersion}) * 1000 + {$teenyVersion}) * 1000 + {$releaseVersion}
				order by
					((majorVersion * 1000 + minorVersion) * 1000 + teenyVersion) * 1000 + releaseVersion desc
				limit 1
			";
			
			if( ($lastVersionStatus = $GmDb->getColumn($sql)) === false ) {
				$lastInterfaceVersion = '';
				$lastServerVersion = '';
			}
			else {
				if($lastVersionStatus === '8') {
					$sql = "
						select
							`version`
						from
							`t_data_game_version`
						where
							((majorVersion * 1000 + minorVersion) * 1000 + teenyVersion) * 1000 + releaseVersion < (({$majorVersion} * 1000 + {$minorVersion}) * 1000 + {$teenyVersion}) * 1000 + {$releaseVersion}
							and
							(
								`haveClient` = 1
								or
								`haveInterface` = 1
							)
						order by
							((majorVersion * 1000 + minorVersion) * 1000 + teenyVersion) * 1000 + releaseVersion desc
						limit 1
					";
					$lastInterfaceVersion = $GmDb->getColumn($sql);
					
					if($lastInterfaceVersion === false) {
						throw new Exception('lastInterfaceVersion错误');
					}
					
					$sql = "
						select
							`version`
						from
							`t_data_game_version`
						where
							((majorVersion * 1000 + minorVersion) * 1000 + teenyVersion) * 1000 + releaseVersion < (({$majorVersion} * 1000 + {$minorVersion}) * 1000 + {$teenyVersion}) * 1000 + {$releaseVersion}
							and
							`haveServer` = 1
						order by
							((majorVersion * 1000 + minorVersion) * 1000 + teenyVersion) * 1000 + releaseVersion desc
						limit 1
					";
					$lastServerVersion = $GmDb->getColumn($sql);
					
					if($lastServerVersion === false) {
						throw new Exception('lastServerVersion错误');
					}
				}
				else {
					throw new Exception('上一个版本还未合并');
				}
			}
			
			$sql = "
				update
					`t_data_game_version`
				set
					`status` = 7
				where
					`version` = '{$currentVersion}'
			";
			$GmDb->query($sql);
			
			if($GmDb->getAffectedRow() > 0) {
				$command="
					echo '开始合并interface'
					
					if [ -d /home/styx/rsyncd/patch/interface/{$majorVersion}.{$minorVersion}/{$currentVersion} ]
					then
					  cd /home/styx/rsyncd/patch/interface/{$majorVersion}.{$minorVersion}/{$currentVersion}
					  ./update_to_install_package.sh {$lastInterfaceVersion}
					  
					  if [ $? -ne 0 ]
					  then
					    exit 1
					  fi
					fi
					
					echo '合并成功'
					
					echo '开始合并server'
					
					if [ -d /home/styx/rsyncd/patch/server/{$majorVersion}.{$minorVersion}/{$currentVersion} ]
					then
					  cd /home/styx/rsyncd/patch/server/{$majorVersion}.{$minorVersion}/{$currentVersion}
					  ./update_to_install_package.sh {$lastServerVersion}
					  
					  if [ $? -ne 0 ]
					  then
					    exit 1
					  fi
					fi
					
					echo '合并成功'
				";
				exec($command, $result, $status);
				
				if($status === 0) {
					$status = 8;
				}
				else {
					$status = 9;
				}
				
				$logMsg = '';
				
				foreach ($result as $v) {
					$logMsg .= "{$v}</br>";
				}
				
				$sql = "
					update
						`t_data_game_version`
					set
						`status` = {$status},
						`log` = '{$logMsg}'
					where
						`version` = '{$currentVersion}'
				";
				$GmDb->query($sql);
				
				unset($result);
			}
		}
	}
	
	catch(Exception $e) {
		$Log->write($e->getMessage());
		$sql = "
			update
				`t_data_game_version`
			set
				`status` = 9
			where
				`version` = '{$currentVersion}'
		";
		$GmDb->query($sql);
	}
	
	sleep(30);
}