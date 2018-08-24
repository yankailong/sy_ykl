<?php
set_time_limit(0);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');

define('LOCK_FILE', dirname(__FILE__).'/lock/payReturnDaemon.lock');
define('LOG_LEVEL', 'DEBUG');

$LogFile = dirname(__FILE__).'/log/payReturnDaemon'.date('Y.m.d').'.log';

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

$LogFile = dirname(__FILE__).'/log/payReturnDaemon'.date('Y.m.d').'.log';
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
                        a.`areaNum` < 9000
                group by
                        a.`databaseName`
        ";
        
        $serverArray = $GmDb->getArray($sql);
        
        $GameDb = new Zw_Mysql();
        $GameDb->setLog($Log);
        
        foreach ($serverArray as $k1 => $v1) {
                $GameDb->connect($v1['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $v1['databaseName']);
                $sql = "


                          delete from 
                          `mem_mail` 
                          where  
                          `MailTitle` = '首充奖励补发'
                          and
                          `MailId` not in (
                            select a.`id` from (
                              select 
                                    min(`MailId`) as `id`
                              from
                                    `mem_mail` 
                              where  
                              `MailTitle` = '首充奖励补发'
                              group by
                              `ReceiveId`) a)


                  ";
                   $GameDb->query($sql);
        }
       

}

catch(Zw_Mysql_Exception $e) {
        $Log->write($e->getMessage(), 'ERROR');
        $Log->write('数据库错误', 'ERROR');
}
catch(Exception $e) {
        $Log->write('系统错误', 'ERROR');
}