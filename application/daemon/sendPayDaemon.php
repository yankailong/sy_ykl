<?php
set_time_limit(0);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');


define('LOCK_FILE', dirname(__FILE__).'/lock/sendPayDaemon.lock');
define('LOG_LEVEL', 'DEBUG');

$LogFile = dirname(__FILE__).'/log/sendPayDaemon'.date('Y.m.d').'.log';

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


while (1) {
	$LogFile = dirname(__FILE__).'/log/sendPayDaemon'.date('Y.m.d').'.log';
	$Log->setLogFile($LogFile);
	
	try {
		$sql = "
			select
                                a.`cid`,
				a.`money`,
                                a.`applyId`,
				a.`days`,
				a.`status`,
                                b.`databaseName`,
                                e.`ipAddress`
			from
				`t_data_pay_apply` a
			left join
				`t_data_game_area` b
			on
				a.`gameAreaId` = b.`gameAreaId`
			left join
				`t_data_operator` c
			on
				b.`operatorId` = c.`operatorId`
                        left join
				`t_data_server_ip` d
			on
				b.`serverId` = d.`serverId`
			left join
				`t_data_ip` e
			on
				d.`ipId` = e.`ipId`
			where
				a.`status` = 0
		";
		
		$payArray = $GmDb->getArray($sql);
		$GameDb = new Zw_Mysql();
                $GameDb->setLog($Log);
                foreach ($payArray as $v) {
                    $GameDb->connect($v['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $v['databaseName']);
                    $sql = "
                            select 
                                    count(*)
                            from
                                    `gmt_recharge`
                            where
                                    `cid` = '{$v['cid']}'
                                    and
                                    `gold` = '{$v['money']}'
                                    and
                                    `start_time` = '{$v['approvalDatetime']}'
                                    and
                                    `end_time` = ('{$v['days']}'*86400 + '{$v['approvalDatetime']}')
                    ";
                    $GameDb->getColumn($sql);
                    if( $GameDb->getColumn($sql) === '0'){
                        $sql = "
                                        insert into
                                                `gmt_recharge`
                                        (
                                                `cid`,
                                                `gold`,
                                                `start_time`,
                                                `end_time`,
                                                `flag`
                                        )
                                        value
                                        (
                                                '{$v['cid']}',
                                                '{$v['money']}',
                                                '{$v['approvalDatetime']}',
                                                ('{$v['days']}'*86400 + '{$v['approvalDatetime']}'),
                                                '0'
                                        )
                        ";
                        
                        $GameDb->query($sql);
                    }else{
                        $GameDb->close();
                    }
                }
		unset($payArray);
		
		
        $sql = "
                select
                        a.`cid`,
                        a.`applyId`,
                        a.`money`,
                        a.`days`,
                        a.`status`,
                        b.`databaseName`,
                        e.`ipAddress`,
                        UNIX_TIMESTAMP(a.`applyDatetime`) as `applyDatetime`,
                        UNIX_TIMESTAMP(a.`approvalDatetime`) as `approvalDatetime`
                from
                        `t_data_pay_apply` a
                left join
                        `t_data_game_area` b
                on
                        a.`gameAreaId` = b.`gameAreaId`
                left join
                        `t_data_operator` c
                on
                        b.`operatorId` = c.`operatorId`
                left join
                        `t_data_server_ip` d
                on
                        b.`serverId` = d.`serverId`
                left join
                        `t_data_ip` e
                on
                        d.`ipId` = e.`ipId`
                where
                        a.`status` = 2
        ";
		
		$payArray = $GmDb->getArray($sql);
		foreach ($payArray as $v) {
                $GameDb->connect($v['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $v['databaseName']);
   
                    $sql = "
                            update
                                    `gmt_recharge`
                            set
                                    `flag` = '1',                                  
                                    `start_time` = '{$v['approvalDatetime']}',                                  
                                    `end_time` = ('{$v['days']}'*86400 + '{$v['approvalDatetime']}')
                            where
                                    `cid` = '{$v['cid']}'
                                    and
                                    `gold` = '{$v['money']}'                                 
                                    and
                                    `flag` = '0'                                     
                    ";
                    // 204行
                    // and 
                    //     `index` = '{$v['index']}'

                    $GameDb->query($sql);             
                    $GameDb->close();
                    
               
        }
                unset($payArray);
	}
	
	catch(Exception $e) {
		
	}
	
	sleep(30);
}