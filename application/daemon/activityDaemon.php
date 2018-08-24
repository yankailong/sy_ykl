<?php
set_time_limit(0);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');

define('LOCK_FILE', dirname(__FILE__).'/lock/activityDaemon.lock');
define('LOG_LEVEL', 'DEBUG');

$LogFile = dirname(__FILE__).'/log/activityDaemon'.date('Y.m.d').'.log';

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

while (1){
          $time = date('i');
          if($time == 25 || $time == 55){
                $LogFile = dirname(__FILE__).'/log/activityDaemon'.date('Y.m.d').'.log';
                $Log->setLogFile($LogFile);
                try {
                        $now = date('Y-m-d H:i:s');
                        $Log->write("当前时间：{$now}", 'ERROR');
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
                                        a.`gameAreaId` = 1
                        ";
                        $server9998Array = $GmDb->getRow($sql);
                        $GameDb = new Zw_Mysql();
                        $GameDb->setLog($Log);
                        $GameDb->connect($server9998Array['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $server9998Array['databaseName']);
                        $sql = "

                                update 
                                       `mem_month_server_data`
                                set 
                                       `server_value` = `local_value`
                                where
                                        `type` = `type`


                        ";
                        $GameDb->query($sql);
                        $GameDb->close();
                        
                        
                        
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
                                        a.`gameAreaId` > 1
                        ";
                        $serverArray = $GmDb->getArray($sql);
                        $allServerNumArray = array();
                        foreach ($serverArray as $k1 => $v1) {
                                $GameDb->connect($v1['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $v1['databaseName']);

                                $sql = "

                                        select 
                                               `type`,`local_value`
                                        from 
                                               `mem_month_server_data`

                                ";
                                $singleServerNumArray = $GameDb->getArray($sql);
                                $GameDb->close();
                                array_push($allServerNumArray, $singleServerNumArray);
                        }
                        $tem = array();
                        foreach($allServerNumArray as $k=>$v){
                            foreach($v as $val){
                              if(!isset($tem[$val['type']])){
                                  $tem[$val['type']]=$val;
                              }else{
                                  $tem[$val['type']]['local_value']+=$val['local_value'];
                              }
                            }
                        }
                        $logString = json_encode($tem);
                        $Log->write("全服活动人数{$logString}", 'ERROR');
                        foreach ($serverArray as $k2 => $v2) {
                                $GameDb->connect($v2['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $v2['databaseName']);
                                foreach($tem as $k3 => $v3){
                                    $sql = "

                                            update 
                                                   `mem_month_server_data`
                                            set 
                                                   `server_value` = '{$v3['local_value']}'
                                            where
                                                    `type` = '{$v3['type']}'


                                    ";
                                    $GameDb->query($sql);
                                }
                                $GameDb->close();
                        }
                        
                }

                catch(Zw_Mysql_Exception $e) {
                        $Log->write($e->getMessage(), 'ERROR');
                        $Log->write('数据库错误', 'ERROR');
                }
                catch(Exception $e) {
                        $Log->write('系统错误', 'ERROR');
                }
          }
          sleep(60);
}