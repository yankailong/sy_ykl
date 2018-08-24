<?php
set_time_limit(0);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');

define('LOCK_FILE', dirname(__FILE__).'/lock/payTemDaemon.lock');
define('LOG_LEVEL', 'DEBUG');

$LogFile = dirname(__FILE__).'/log/payTemDaemon'.date('Y.m.d').'.log';

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

$LogFile = dirname(__FILE__).'/log/payTemDaemon'.date('Y.m.d').'.log';
$Log->setLogFile($LogFile);
try {
        $sql = "
                select
                        c.`ipAddress`,
                        a.`databaseName`
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
                        d.`isDefault` = 1
                        and
                        a.`openDatetime` <now()
                        and
                        a.`areaNum` >= 120
                        and
                        a.`gameAreaId` > 1
                        and
                        a.`operatorId` = 1
        ";
        $serverArray = $GmDb->getArray($sql);
        $GameDb = new Zw_Mysql();
        $GameDb->setLog($Log);
        foreach ($serverArray as $k1 => $v1) {
                $GameDb->connect($v1['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $v1['databaseName']);

                $sql = "

                        select 
                               b.`passport`,a.`oid`,a.`sid`,a.`amount`,a.`time` 
                        from 
                               `pay_log` a
                        left join
                               `sys_user` b
                        on
                                a.`uid` = b.`uid`
                        where
                              a.`time` >= unix_timestamp('2017-11-21 00:00:00')
                              and
                              a.`time` < unix_timestamp('2017-12-1 00:00:00')
                              

                ";
                $allpayInfo = $GameDb->getArray($sql);
                foreach ($allpayInfo as $val){
                      $sql = "
                                insert into
                                        `all_pay`
                                set
                                        `uid` = '{$val['passport']}',
                                        `orderid` = '{$val['oid']}',
                                        `gkey` = 'wujin',
                                        `pkey` = 'wan',
                                        `skey` = 'S{$val['sid']}',
                                        `money` = '{$val['amount']}',
                                        `paytime` = '{$val['time']}'
                      ";
                      $GmDb->query($sql);
                }
                $sql = "

                        select 
                               c.`passport`,a.`cid`,a.`sid`,a.`amount`,a.`time`,b.`family_id`,if(b.`enter_time` = 0,d.`create_time`,b.enter_time) as `enter_time`,b.`leave_time`,a.`oid`
                        from 
                               `pay_log` a
                        left join
                               `mem_chr_family` b
                        on
                               a.`cid` = b.`cid`
                        left join
                               `sys_user` c
                        on
                                a.`uid` = c.`uid`
                        left join
                                `mem_family` d
                                on
                                b.`family_id` = d.`id`
                        where
                              a.`time` >= unix_timestamp('2017-11-21 00:00:00')
                              and
                              a.`time` < unix_timestamp('2017-12-1 00:00:00')
                              

                ";
                $familypayInfo = $GameDb->getArray($sql);
                $GameDb->close();   
                foreach ($familypayInfo as $v){
                    $sql = "
                              insert into
                                      `family_pay`
                              set
                                      `uid` = '{$v['passport']}',
                                      `roleid` = '{$v['cid']}',
                                      `orderid` = '{$v['oid']}',
                                      `gkey` = 'wujin',
                                      `dept` = 38,
                                      `pkey` = 'wan',
                                      `skey` = 'S{$v['sid']}',
                                      `legion` = '{$v['family_id']}',
                                      `money` = '{$v['amount']}',
                                      `amount` = '{$v['amount']}'/10,
                                      `paytime` = '{$v['time']}',
                                      `enter_time` = '{$v['enter_time']}',
                                      `leave_time` = '{$v['leave_time']}',
                                      `oldskey` = 'S{$v['sid']}'
                    ";
                    $GmDb->query($sql);
                }
                
                
        }

}

catch(Zw_Mysql_Exception $e) {
        $Log->write($e->getMessage(), 'ERROR');
        $Log->write('数据库错误', 'ERROR');
}
catch(Exception $e) {
        $Log->write('系统错误', 'ERROR');
}