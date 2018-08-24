<?php
set_time_limit(0);
include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');


define('LOCK_FILE', dirname(__FILE__).'/lock/announcementDaemon.lock');
define('LOG_LEVEL', 'DEBUG');

$LogFile = dirname(__FILE__).'/log/announcementDaemon'.date('Y.m.d').'.log';

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
// $GmDb->connect($gmDatabaseHost.":".$gmDatabasePort, $gmDatabaseUsername, $gmDatabasePassword, $gmDatabaseName);
// $GmDb->connect('127.0.0.1:3306', 'root', 'root', 'syz_admin');
$GmDb->connect('123.59.119.187:51888', 'gameop_admin', 'Dlr0GjuCKH', 'syz_admin');
while (1){
	$LogFile = dirname(__FILE__).'/log/announcementDaemon'.date('Y.m.d').'.log';
	$Log->setLogFile($LogFile);
	
        

	$sql = "
		select
			`id`,
			`taskId`,
			`gameAreaId`,
			`status`
		from
			`t_data_announcement_task_info`
		where
			`status` = 1
	";
	$taskInfoArray = $GmDb->getArray($sql);
	
	foreach ($taskInfoArray as $taskInfo){
		$sql = "
			select
				c.`ipAddress`,
				a.`databaseName` as `database`
			from
				`t_data_game_area` a
			left join
				`t_data_server_ip` b
			on
				a.`serverId` = b.`serverId`
			left join
				`t_data_ip` c
			on
				b.`ipId` = c.`ipId`
			left join
				`t_cfg_ip_type` d
			on
				c.`ipTypeId` = d.`ipTypeId`
			where
				a.`gameAreaId` = '{$taskInfo['gameAreaId']}'
				and
				d.`isDefault` = 1
		";
		$serverInfo = $GmDb->getRow($sql);
		
        
		$gameDb = new Zw_Mysql();
		$gameDb->setLog($Log);
		$gameDb->connect($serverInfo['ipAddress'].":".$gameDatabasePort , $gameDatabaseUsername , $gameDatabasePassword, $serverInfo['database'] );
		
		$sql = "
			select
				`flag`
			from
				`gmt_broadcast`
			where
				`flag` = 1
		";
                
		if( $gameDb->getColumn($sql) === '0' ){
                    continue;
		}
		
		$sql = "
			select
				`taskType`,
				`content`,
				`startDateTime`,
				`endDateTime`,
				`timeInterval`,
                                `operatorUserid`,
                                `operatorDateTime`,
                                `username`,
                                `type`
			from
				`t_data_announcement_task` a
                        left join
					`t_data_user` b
				on
					a.`operatorUserId` = b.`userId`
			where
				`taskId` = '{$taskInfo['taskId']}'
		";
		
		$task = $GmDb->getRow($sql);
		
                
		if($task['taskType'] === '1' || $task['taskType'] === '2'){
			$startTimeStamp = strtotime($task['startDateTime']);
                        $operatorTimeStamp = strtotime($task['operatorDateTime']);
                        $endTimeStamp = strtotime($task['endDateTime']);
			$currentTimestamp = time();
                        for ( $i = $startTimeStamp ; $i <= $endTimeStamp ; $i = $i+$task['timeInterval']*60 ){
				if($currentTimestamp < $i) {
					$announcementDateTime = date('Y-m-d H:i:s', $i);
					$cppAnnouncementDateTime = getCppDateTime($announcementDateTime);
					$sql = "
						insert into
							`gmt_broadcast`
						(
							`text`,
							`start_time`,
                                                        `type`,
                                                        `times`,
							`interval`,
                                                        `creater`,
                                                        `create_time`
						)
						value
						(
                                                        '".addslashes($task['content'])."',
							'".addslashes($startTimeStamp)."',
                                                        '".addslashes($task['type'])."',
                                                        '".addslashes(($endTimeStamp-$startTimeStamp)/$task['timeInterval'])."',
                                                        '".addslashes($task['timeInterval'])."',
                                                        '".addslashes($task['username'])."',
                                                        '".addslashes($operatorTimeStamp)."'
						)
					";
					$gameDb->query($sql);
				}
			}
		}
		if($task['taskType'] === '3'){
			$sql = "
				truncate 
					`gmt_broadcast`
			";
			$gameDb->query($sql);
		}
		$sql = "
			update
				`t_data_announcement_task_info`
			set
				`status` = 2
			where
				`id` = '{$taskInfo['id']}'
		";
		$GmDb->query($sql);
	
        }
	sleep(5);

}

function getCppDateTime($dateTime){
	$explodeTime = explode('-', $dateTime);

	if( substr($explodeTime[1],0,1) == 1 && $explodeTime[1] != 10 )
	{
		$explodeTime[1] = $explodeTime[1]-1;
	}
	else
	{
		$explodeTime[1] = '0'.($explodeTime[1]-1);
	}

	$tmp_time = $explodeTime[0]."-".$explodeTime[1]."-".$explodeTime[2];

	return $tmp_time;
}