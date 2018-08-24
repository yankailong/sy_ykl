<?php
set_time_limit(0);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');


define('LOCK_FILE', dirname(__FILE__).'/lock/gameClearDataDaemon.lock');
define('LOG_LEVEL', 'DEBUG');

$LogFile = dirname(__FILE__).'/log/gameClearDataDaemon'.date('Y.m.d').'.log';

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
	$LogFile = dirname(__FILE__).'/log/gameClearDataDaemon'.date('Y.m.d').'.log';
	$Log->setLogFile($LogFile);
	
	try {
		$sql = "
			select
				`queueId`,
				`gameAreaId`
			from
				`t_data_game_clearData_queue`
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
		$gameAreaId = $row['gameAreaId'];
		$Log->write("queueId:{$queueId}", 'DEBUG');
		$Log->write("gameAreaId:{$gameAreaId}", 'DEBUG');
			
		$sql = "
			update
				`t_data_game_clearData_queue`
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
				a.`operatorId`,
				b.`operatorFlag`,
				a.`areaNum`,
				e.`ipAddress`
			from
				`t_data_game_area` a
			left join
				`t_data_operator` b
			on
				a.`operatorId` = b.`operatorId`
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
				a.`gameAreaId` = '{$gameAreaId}'
				and
				a.`status` in (2, 3)
		";
		
		if ( ($row = $GmDb->getRow($sql)) === false ) {
			throw new Exception('获取游戏区信息失败', 1);
		}
		
		$operatorId = $row['operatorId'];
		$operatorFlag = $row['operatorFlag'];
		$areaNum = $row['areaNum'];
		$ipAddress = $row['ipAddress'];
		$Log->write("operatorId:{$operatorId}", 'DEBUG');
		$Log->write("operatorFlag:{$operatorFlag}", 'DEBUG');
		$Log->write("areaNum:{$areaNum}", 'DEBUG');
		$Log->write("ipAddress:{$ipAddress}", 'DEBUG');
		
		$command = "/home/styx/script/clearGameServerData.sh --operatorId={$operatorId} --operatorFlag='{$operatorFlag}' --areaNum={$areaNum} --gameServerIp='{$ipAddress}' 2>&1";
		$Log->write("command: {$command}", 'DEBUG');
		
		exec($command, $result, $status);
		
		$logMsg = '';
		
		foreach ($result as $v) {
			$v = addslashes($v);
			$logMsg .= "{$v}</br>";
		}
		
		if( !($status === 0) ) {
			throw new Exception('执行安装脚本失败', 4);
		}
		
		$sql = "
			update
				`t_data_game_clearData_queue`
			set
				`status` = '3',
				`log` = '{$logMsg}'
			where
				`queueId` = '{$queueId}'
		";
		$GmDb->query($sql);
		
		$sql = "
			update
				`t_data_game_area`
			set
				`status` = 3
			where
				`gameAreaId` = '{$gameAreaId}'
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
					`t_data_game_clearData_queue`
				set
					`status` = '4',
					`log` = '{$logMsg}'
				where
					`queueId` = '{$queueId}'
			";
			$GmDb->query($sql);
		}
	}
	
	unset($result);
	sleep(30);
}