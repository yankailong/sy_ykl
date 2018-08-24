<?php
set_time_limit(0);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');


define('LOCK_FILE', dirname(__FILE__).'/lock/battleServerInstallDaemon.lock');
define('LOG_LEVEL', 'DEBUG');

$LogFile = dirname(__FILE__).'/log/battleServerInstallDaemon'.date('Y.m.d').'.log';

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
	$LogFile = dirname(__FILE__).'/log/battleServerInstallDaemon'.date('Y.m.d').'.log';
	$Log->setLogFile($LogFile);
	
	try {
		$sql = "
			select
				`queueId`,
				`battleServerId`
			from
				`t_data_battle_server_install_queue`
			where
				`status` = 1
			order by
				`operateDatetime`
			limit 1
		";
		
		if( ($row = $GmDb->getRow($sql)) === false ) {
			throw new Exception('没有任务', 0);
		}
		
		$queueId = $row['queueId'];
		$battleServerId = $row['battleServerId'];
		$Log->write("queueId:{$queueId}", 'DEBUG');
		$Log->write("battleServerId:{$battleServerId}", 'DEBUG');
		
		$sql = "
			update
				`t_data_battle_server_install_queue`
			set
				`status` = 2
			where
				`queueId` = '{$queueId}'
				and
				`status` = 1
		";
		$GmDb->query($sql);
			
		if( $GmDb->getAffectedRow() != 1 ) {
			throw new Exception('修改任务状态失败', 0);
		}
		
		$sql = "
			select
				b.`operatorFlag`,
				a.`areaNum`,
				a.`portGroup`,
				c.`majorVersion`,
				c.`minorVersion`,
				c.`teenyVersion`,
				c.`releaseVersion`,
				e.`ipAddress`
			from
				`t_data_battle_server` a
			left join
				`t_data_operator` b
			on
				a.`operatorId` = b.`operatorId`
			left join
				`t_data_game_version` c
			on
				a.`versionId` = c.`id`
			left join
				`t_data_server_ip` d
			on
				a.`serverId` = d.`serverId`
			left join
				`t_data_ip` e
			on
				d.`ipId` = e.`ipId`
			left join
				`t_cfg_ip_type` f
			on
				e.`ipTypeId` = f.`ipTypeId`
				and
				f.`isDefault` = 1
			where
				a.`battleServerId` = '{$battleServerId}'
				and
				a.`status` = 1
		";
		
		if ( ($row = $GmDb->getRow($sql)) === false ) {
			throw new Exception('获取跨服服务器信息失败', 1);
		}
		
		$operatorFlag = $row['operatorFlag'];
		$areaNum = $row['areaNum'];
		$portGroup = $row['portGroup'];
		$majorVersion = $row['majorVersion'];
		$minorVersion = $row['minorVersion'];
		$teenyVersion = $row['teenyVersion'];
		$releaseVersion = $row['releaseVersion'];
		$ipAddress = $row['ipAddress'];
		$Log->write("operatorFlag:{$operatorFlag}", 'DEBUG');
		$Log->write("areaNum:{$areaNum}", 'DEBUG');
		$Log->write("portGroup:{$portGroup}", 'DEBUG');
		$Log->write("majorVersion:{$majorVersion}", 'DEBUG');
		$Log->write("minorVersion:{$minorVersion}", 'DEBUG');
		$Log->write("teenyVersion:{$teenyVersion}", 'DEBUG');
		$Log->write("releaseVersion:{$releaseVersion}", 'DEBUG');
		$Log->write("ipAddress:{$ipAddress}", 'DEBUG');
		
		$sql = "
			select
				`version`
			from
				`t_data_game_version`
			where
				`haveServer` = 1
				and
				((majorVersion * 1000 + minorVersion) * 1000 + teenyVersion) * 1000 + releaseVersion <= (({$majorVersion} * 1000 + {$minorVersion}) * 1000 + {$teenyVersion}) * 1000 + {$releaseVersion}
			order by
				`majorVersion` desc,
				`minorVersion` desc,
				`teenyVersion` desc,
				`releaseVersion` desc
			limit 1
		";
		$serverVersion = $GmDb->getColumn($sql);
		
		if($serverVersion === false) {
			throw new Exception('获取server版本号失败', 3);
		}
		
		$Log->write("serverVersion:{$serverVersion}", 'DEBUG');
		
		$command = "/home/styx/script/installBattleServer.sh --operatorFlag='{$operatorFlag}' --areaNum={$areaNum} --portGroup={$portGroup} --version='{$serverVersion}' --ipAddress='{$ipAddress}' 2>&1";
		$Log->write("command: {$command}", 'DEBUG');
		exec($command, $exec_result, $exec_status);
		$logMsg = '';
		
		foreach ($exec_result as $v) {
			$v = addslashes($v);
			$logMsg .= "{$v}</br>";
		}
		
		if( !($exec_status === 0) ) {
			throw new Exception('执行安装脚本失败', 4);
		}
		
		$sql = "
			update
				`t_data_battle_server_install_queue`
			set
				`status` = '3',
				`log` = '{$logMsg}'
			where
				`queueId` = '{$queueId}'
		";
		$GmDb->query($sql);
		
		$sql = "
			update
				`t_data_battle_server`
			set
				`status` = 2
			where
				`battleServerId` = '{$battleServerId}'
		";
		$GmDb->query($sql);
	}
	
	catch(Exception $e) {
		$errorCode = $e->getCode();
		$errorMessage = $e->getMessage();
	
		if($errorCode > 0) {
			$Log->write("{$errorMessage}");
			$sql = "
				update
					`t_data_battle_server_install_queue`
				set
					`status` = '4',
					`log` = '{$logMsg}'
				where
					`queueId` = '{$queueId}'
			";
			$GmDb->query($sql);
		}
	}
	
	unset($exec_result);
	sleep(30);
}