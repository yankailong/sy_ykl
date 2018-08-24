<?php
set_time_limit(0);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');

define('LOCK_FILE', dirname(__FILE__).'/lock/unbannedDaemon.lock');
define('LOG_LEVEL', 'DEBUG');

$LogFile = dirname(__FILE__).'/log/unbannedDaemon'.date('Y.m.d').'.log';

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
$GmDb->connect($gmDatabaseHost.":".$gmDatabasePort, $gmDatabaseUsername, $gmDatabasePassword, $gmDatabaseName);

$GameDb = new Zw_Mysql();
$GameDb->setLog($Log);

while (1){
	$LogFile = dirname(__FILE__).'/log/unbannedDaemon'.date('Y.m.d').'.log';
	$Log->setLogFile($LogFile);
	
	try {
		// 封号
		$sql = "
			select
				a.`id`,
				a.`userId`,
                a.`unbannedDateTime`,
                a.`reason`,
                a.`operatorDateTime`,
                g.`username`,
                e.`ipAddress`,
				c.`databaseName`
			from
				`t_log_banned_role` a
			left join
				`t_data_game_area` b
			on
				a.`gameAreaId` = b.`gameAreaId`
                and
                a.`operatorId` = b.`operatorId`
			left join
				`t_data_game_area` c
			on
				a.`gameAreaId` = c.`gameAreaId`
			left join
				`t_data_server_ip` d
			on
				c.`serverId` = d.`serverId`
			left join
				`t_data_ip` e
			on
				d.`ipId` = e.`ipId`
			left join
				`t_cfg_ip_type` f
			on
				e.`ipTypeId` = f.`ipTypeId`
                        left join
                                `t_data_user` g
                        on
                                a.`operatorUserId` = g.`userId`
			where
				a.`type` = 1
				and
				a.`status` = 1
				and
				a.`unbannedDateTime` >= now()
		";
		$unbannedInfoArray = $GmDb->getArray($sql);
		
		foreach ($unbannedInfoArray as $v) {
			$GameDb->connect($v['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $v['databaseName']);
			$sql = "
                            
                                select
                                       count(*) 
                                from
                                    `gmt_seal`
                                where
                                     `cid` =  '{$v['userId']}'
                        ";
                         $GameDb->getColumn($sql);
                        if( $GameDb->getColumn($sql) === '0'){
                            $sql = "
                                    insert into
                                            `gmt_seal`
                                    (
                                            `cid`,
                                            `expire_time`,
                                            `operator`,
                                            `reason`,
                                            `op_time`,
                                            `flag`,
                                            `seal_type`,
                                            `type`
                                    )
                                    value
                                    (
                                            '{$v['userId']}',
                                            unix_timestamp('{$v['unbannedDateTime']}'),
                                            '{$v['username']}',
                                            '{$v['reason']}',
                                            unix_timestamp('{$v['operatorDateTime']}'),
                                            '0',
                                            '1',
                                            '1'
                                    )
                            ";
                            $GameDb->query($sql);
                        }else{
                            $sql = "
				update
					`gmt_seal`
                                set
                                        `expire_time` = unix_timestamp('{$v['unbannedDateTime']}'),
                                        `flag` = 0,
                                        `seal_type` = 1,
                                        `type` = 1
                                where
                                        `cid` = '{$v['userId']}'
			";
			$GameDb->query($sql);
                        }
			$GameDb->close();
		}
	

		// 解除封号
		unset($unbannedInfoArray);
		$sql = "
			select
				a.`id`,
				a.`userId`,
                a.`unbannedDateTime`,
                a.`reason`,
                a.`operatorDateTime`,
                g.`username`,
                e.`ipAddress`,
				c.`databaseName`
			from
				`t_log_banned_role` a
			left join
				`t_data_game_area` b
			on
				a.`gameAreaId` = b.`gameAreaId`
                and
                a.`operatorId` = b.`operatorId`
			left join
				`t_data_game_area` c
			on
				a.`gameAreaId` = c.`gameAreaId`
			left join
				`t_data_server_ip` d
			on
				c.`serverId` = d.`serverId`
			left join
				`t_data_ip` e
			on
				d.`ipId` = e.`ipId`
			left join
				`t_cfg_ip_type` f
			on
				e.`ipTypeId` = f.`ipTypeId`
            left join
                    `t_data_user` g
            on
                    a.`operatorUserId` = g.`userId`
			where
				a.`type` = 2
				and
				a.`status` = 2
				and
				a.`unbannedDateTime` <= now()
		";
                $unbannedInfoArray = $GmDb->getArray($sql);
		
		foreach ($unbannedInfoArray as $v) {
			
			$GameDb->connect($v['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $v['databaseName']);
            $sql = "
				update
					`gmt_seal`
                set
                        `expire_time` = unix_timestamp('{$v['unbannedDateTime']}'),
                        `flag` = 0,
                        `seal_type` = 0,
                        `type` = 0
                where
                        `cid` = '{$v['userId']}'
			";
			$GameDb->query($sql);
			$GameDb->close();
        }



       

        unset($unbannedInfoArray);
        // 禁言
		$sql = "
			select
				a.`id`,
				a.`userId`,
                                a.`unbannedDateTime`,
                                a.`reason`,
                                a.`operatorDateTime`,
                                g.`username`,
                                e.`ipAddress`,
				c.`databaseName`
			from
				`t_log_banned_chat` a
			left join
				`t_data_game_area` b
			on
				a.`gameAreaId` = b.`gameAreaId`
                                and
                                a.`operatorId` = b.`operatorId`
			left join
				`t_data_game_area` c
			on
				a.`gameAreaId` = c.`gameAreaId`
			left join
				`t_data_server_ip` d
			on
				c.`serverId` = d.`serverId`
			left join
				`t_data_ip` e
			on
				d.`ipId` = e.`ipId`
			left join
				`t_cfg_ip_type` f
			on
				e.`ipTypeId` = f.`ipTypeId`
                        left join
                                `t_data_user` g
                        on
                                a.`operatorUserId` = g.`userId`
			where
				a.`type` = 1
				and
				a.`status` = 1
				and
				a.`unbannedDateTime` >= now()
		";
		$unbannedInfoArray = $GmDb->getArray($sql);
		
		foreach ($unbannedInfoArray as $v) {
			$GameDb->connect($v['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $v['databaseName']);

			// select
                                //        count(*) 
                                // from
                                //     `gmt_seal`
                                // where
                                //      `cid` =  '{$v['userId']}'
			$sql = "
                             
                                select
                                       count(*) 
                                from
                                    `gmt_ban_chat`
                                where
                                     `cid` =  '{$v['userId']}'
                        ";
                         $GameDb->getColumn($sql);	
			
			if( $GameDb->getColumn($sql) === '0'){	
                                $sql = "
                                        insert into
                                                `gmt_ban_chat`
                                        (
                                                `cid`,
                                                `expire_time`,
                                                `operator`,
                                                `reason`,
                                                `op_time`,
                                                `flag`
                                        )
                                        value
                                        (
                                                '{$v['userId']}',
                                                unix_timestamp('{$v['unbannedDateTime']}'),
                                                '{$v['username']}',
                                                '{$v['reason']}',
                                                unix_timestamp('{$v['operatorDateTime']}'),
                                                '0'
                                        )
                                ";
                                $GameDb->query($sql);
                        }else{
                            $sql = "
				update
					`gmt_ban_chat`
                                set
                                        `expire_time` = unix_timestamp('{$v['operatorDateTime']}'),
                                        `flag` = 0
                                where
                                        `cid` = '{$v['userId']}'
			";
			$GameDb->query($sql);
                        }
			$GameDb->close();
		}

		// 解除禁言
		
		unset($unbannedInfoArray);
        $sql = "
			select
				a.`id`,
				a.`userId`,
                                a.`unbannedDateTime`,
                                a.`reason`,
                                a.`operatorDateTime`,
                                g.`username`,
                                e.`ipAddress`,
				c.`databaseName`
			from
				`t_log_banned_role` a
			left join
				`t_data_game_area` b
			on
				a.`gameAreaId` = b.`gameAreaId`
                                and
                                a.`operatorId` = b.`operatorId`
			left join
				`t_data_game_area` c
			on
				a.`gameAreaId` = c.`gameAreaId`
			left join
				`t_data_server_ip` d
			on
				c.`serverId` = d.`serverId`
			left join
				`t_data_ip` e
			on
				d.`ipId` = e.`ipId`
			left join
				`t_cfg_ip_type` f
			on
				e.`ipTypeId` = f.`ipTypeId`
                        left join
                                `t_data_user` g
                        on
                                a.`operatorUserId` = g.`userId`
			where
				a.`type` = 2
				and
				a.`status` = 2
				and
				a.`unbannedDateTime` <= now()
		";
		$unbannedInfoArray = $GmDb->getArray($sql); 
		
		foreach ($unbannedInfoArray as $v) {
			$GameDb->connect($v['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $v['databaseName']);
                        $sql = "
				update
					`gmt_ban_chat`
                                set
                                        `expire_time` = unix_timestamp('{$v['unbannedDateTime']}'),
                                        `flag` = 0
                                where
                                        `cid` = '{$v['userId']}'


			";
			// update
			// 		`gmt_seal`
                                // set
                                //         `expire_time` = unix_timestamp('{$v['unbannedDateTime']}'),
                                //         `flag` = 0,
                                //         `seal_type` = 0,
                                //         `type` = 0
                                // where
                                //         `cid` = '{$v['userId']}'
			$GameDb->query($sql);
			$GameDb->close();
                }
		
		unset($unbannedInfoArray);
	}
	
	catch(Zw_Mysql_Exception $e) {
		$Log->write('数据库错误', 'ERROR');
	}
	catch(Exception $e) {
		$Log->write('系统错误', 'ERROR');
	}
	
	sleep(30); 
}