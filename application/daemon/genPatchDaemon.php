<?php
set_time_limit(0);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');


define('LOCK_FILE', dirname(__FILE__).'/lock/genPatchDaemon.lock');
define('LOG_LEVEL', 'ERROR');

$LogFile = dirname(__FILE__).'/log/genPatchDaemon'.date('Y.m.d').'.log';

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

while (1){
	$LogFile = dirname(__FILE__).'/log/genPatchDaemon'.date('Y.m.d').'.log';
	$Log->setLogFile($LogFile);
	
	$sql = "
		select
			`version`
		from
			`t_data_game_version`
		where
			`status` = 2
		order by
			((majorVersion * 1000 + minorVersion) * 1000 + teenyVersion) * 1000 + releaseVersion
		limit 1
	";
	$version = $GmDb->getColumn($sql);
	
	if($version) {
		$sql = "
			update
				`t_data_game_version`
			set
				`status` = 3
			where
				`version` = '{$version}'
		";
		$GmDb->query($sql);
		
		if($GmDb->getAffectedRow() > 0) {
			$command = "
				cd /home/styx/package/patch;
				./genPatch.sh {$version}
			";
			
			exec($command, $result, $status);
			
			if($status === 0) {
				$status = 4;
			}
			else {
				$status = 5;
			}
	
			$logMsg = '';
	
			foreach ($result as $v) {
				$logMsg .= "{$v}</br>";
			}
			
			$sql = "
				update
					`t_data_game_version`
				set
					`status` = '{$status}',
					`log` = '{$logMsg}'
				where
					`version` = '{$version}'
			";
			$GmDb->query($sql);
			
			unset($result);
		}
	}
	
	sleep(5);
}