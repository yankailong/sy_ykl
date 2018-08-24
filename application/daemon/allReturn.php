<?php
set_time_limit(0);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');

define('LOCK_FILE', dirname(__FILE__).'/lock/allReturn.lock');
define('LOG_LEVEL', 'DEBUG');

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
          $LogFile = dirname(__FILE__).'/log/allReturn'.date('Y.m.d').'.log';
          $Log->setLogFile($LogFile);
          try {
                  $statDate = date('Y-m-d', time() - 86400);
                  $sql = "
                          select
                                  count(*)
                          from
                                  `t_log_gold` 
                          where
                                  `time` = unix_timestamp('{$statDate}')
                  ";


                  if($GmDb->getColumn($sql)<1){
                        $sql = "
                                select
                                        c.`ipAddress`,
                                        a.`databaseName`,
                                        a.`operatorId`,
                                        a.`areaNum`
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
                                        a.`areaNum`<9000
                                group by 
                                        a.operatorId,a.`databaseName`
                        ";

                        $serverArray = $GmDb->getArray($sql);

                        $GameDb = new Zw_Mysql();
                        $GameDb->setLog($Log);

                        foreach ($serverArray as $k1 => $v1) {
                                // $GameDb->connect('s9000.w360.syz.ate.cn:51888', 'gameop_dev', 'eM1oMokz1TQQD3afWuRs', 'syz_game9000');
                                $GameDb->connect($v1['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $v1['databaseName']);
                                
                                // $sql =" 
                                //     insert  into
                                //             `cross_server`
                                //     set
                                //             `id` = '2',
                                //             `platform` = '2',
                                //             `sid` = '2,
                                //             `db_host` = '2',
                                //             `db_port` = '2',
                                //             `gate_host` = '2',
                                //             `gate_port` = '2'

                                // ";
                                // $GameDb->query($sql);
                                $sql = "
                                      select
                                              `login_player`
                                      from
                                              `log_report_daily`   
                                      where
                                              `time` = unix_timestamp('{$statDate}')
                                ";
                                $login = $GameDb->getColumn($sql);
                                // $goldGet = $GameDb->getColumn($sql);

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
          sleep(3600);
}