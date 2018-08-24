<?php
set_time_limit(0);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');

define('LOCK_FILE', dirname(__FILE__).'/lock/moneyEveryDay.lock');
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
          $LogFile = dirname(__FILE__).'/log/moneyEveryDay'.date('Y.m.d').'.log';
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
                                $GameDb->connect($v1['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $v1['databaseName']);
                                $sql = "
                                      select
                                              sum(`value`)
                                      from
                                              `log_gold_change`  
                                      where
                                              `time` >= unix_timestamp('{$statDate}')
                                              and
                                              `time` < unix_timestamp('{$statDate}')+86400
                                              and
                                              `value` > 0 
                                              and
                                              `opway` != 2019
                                              and
                                              `opway` != 2038
                                ";
                                $goldGet = $GameDb->getColumn($sql);
                                $sql = "
                                      select
                                              abs(sum(`value`))
                                      from
                                              `log_gold_change`  
                                      where
                                              `time` >= unix_timestamp('{$statDate}')
                                              and
                                              `time` < unix_timestamp('{$statDate}')+86400
                                              and
                                              `value` < 0 
                                              and
                                              `opway` != 2020
                                              and
                                              `opway` != 2037
                                ";
                                $goldCost = $GameDb->getColumn($sql);
                                $sql = "
                                      select
                                              sum(`amount`) as `payGold`,count(distinct(`cid`)) as `payCount`
                                      from
                                              `pay_log`  
                                      where
                                              `time` >= unix_timestamp('{$statDate}')
                                              and
                                              `time` < unix_timestamp('{$statDate}')+86400
                                ";
                                $pay = $GameDb->getRow($sql);
                                $sql = "
                                      select
                                              `login_player`
                                      from
                                              `log_report_daily`   
                                      where
                                              `time` = unix_timestamp('{$statDate}')
                                ";
                                $login = $GameDb->getColumn($sql);
                                $sql = "
                                      select
                                              sum(`money`) as `money`,sum(`gold`) as `gold`,sum(`bind_money`) as `bind_money`
                                      from
                                              `mem_char_currency`   
                                ";
                                $curr = $GameDb->getRow($sql);
                                $sql = "
                                      select
                                              sum(`value`) as sum
                                      from
                                              `log_currency`  
                                      where
                                              `time` >= unix_timestamp('{$statDate}')
                                              and
                                              `time` < unix_timestamp('{$statDate}')+86400
                                              and
                                              (`type` = 0
                                              or
                                              `type` = 6)
                                              and
                                              `value` > 0
                                              and
                                              `opway` != 2019
                                              and
                                              `opway` != 2038
                                      group by 
                                              `type`
                                ";
                                $moneyGet = $GameDb->getArray($sql);
                                $sql = "
                                      select
                                              sum(`value`) 
                                      from
                                              `log_currency`  
                                      where
                                              `time` >= unix_timestamp('{$statDate}')
                                              and
                                              `time` < unix_timestamp('{$statDate}')+86400
                                              and
                                              (`type` = 0
                                              or
                                              `type` = 6)
                                              and
                                              `value` < 0
                                              and
                                              `opway` != 2020
                                              and
                                              `opway` != 2037
                                ";
                                $moneyCost = $GameDb->getColumn($sql);
                                $GameDb->close();
                                $sql = "
                                      select
                                              count(*) as `count`,min(`time`) as `time`
                                      from
                                              `t_log_gold`   
                                      where
                                              `operatorId` = '{$v1['operatorId']}'
                                              and
                                              `areaNum` = '{$v1['areaNum']}'
                                ";
                                $num = $GmDb->getRow($sql);     
                                if($num['count'] == 30){
                                      $sql = "
                                            delete  from
                                                    `t_log_gold`   
                                            where
                                                    `operatorId` = '{$v1['operatorId']}'
                                                    and
                                                    `areaNum` = '{$v1['areaNum']}'
                                                    and
                                                    `time`  = '{$num['time']}'
                                      ";
                                      $GmDb->query($sql);              
                                }
                                try{
                                      $sql = "
                                              insert into
                                                      `t_log_gold`
                                              set
                                                      `time` = unix_timestamp('{$statDate}'),
                                                      `operatorId` = '{$v1['operatorId']}',
                                                      `areaNum` = '{$v1['areaNum']}',
                                                      `payGold` = '{$pay['payGold']}',
                                                      `payCount` = '{$pay['payCount']}',
                                                      `goldGet` = '{$goldGet}',
                                                      `goldCost` = '{$goldCost}',
                                                      `goldAll` = '{$curr['gold']}',
                                                      `login` = '{$login}',
                                                      `moneyGet` = '{$moneyGet[0]['sum']}',
                                                      `bindMoneyGet`= '{$moneyGet[1]['sum']}',
                                                      `moneyCost` = '{$moneyCost}',
                                                      `moneyAll`= '{$curr['money']}',
                                                      `bindMoneyAll`= '{$curr['bind_money']}'
                                      ";

                                      $GmDb->query($sql);
                                }
                                catch(Zw_Mysql_Exception $e){
                                    if($e->getCode()===1062){
                                        $Log->write($v1['operatorId'].":".$v1['areaNum'].$statDate.'统计失败', 'ERROR');
                                        continue;
                                    }
                                }
                                
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