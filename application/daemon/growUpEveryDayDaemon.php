<?php
set_time_limit(0);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');

define('LOCK_FILE', dirname(__FILE__).'/lock/growUpEveryDayDaemon.lock');
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
          $LogFile = dirname(__FILE__).'/log/growUpEveryDayDaemon'.date('Y.m.d').'.log';
          $Log->setLogFile($LogFile);
          try {
                  $statDate = date('Y-m-d', time() - 86400);
                  $sql = "
                          select
                                  count(*)
                          from
                                  `t_log_ave` 
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
                                              a.`cid`,b.`name`,a.`level`
                                      from
                                              `mem_char_jue_wei`  a
                                      left join
                                              `mem_character` b
                                      on
                                              a.`cid` = b.`cid`
                                      order by
                                              a.`level` desc
                                      limit 0,20
                                ";
                                $jueWeiArray = $GameDb->getArray($sql);
                                $sql = "
                                      select 
                                           avg(a.`level`)
                                      from
                                          (
                                              select
                                                      *
                                              from
                                                      `mem_char_jue_wei`  
                                              order by
                                                      `level` desc
                                              limit 0,20
                                          ) a
                                ";
                                $jueWeiAvg = $GameDb->getColumn($sql);
                                $sql = "
                                      select
                                              a.`cid`,b.`name`,a.`level`
                                      from
                                              `mem_char_wing` a
                                      left join
                                              `mem_character` b
                                      on
                                              a.`cid` = b.`cid`
                                      order by
                                              a.`level` desc
                                      limit 0,20
                                ";
                                $wingArray = $GameDb->getArray($sql);
                                $sql = "
                                      select 
                                           avg(a.`level`)
                                      from
                                          (
                                              select
                                                      `cid`,`level`
                                              from
                                                      `mem_char_wing`  
                                              order by
                                                      `level` desc
                                              limit 0,20
                                          ) a
                                ";
                                $wingAvg = $GameDb->getColumn($sql);
                                $sql = "
                                      select
                                              a.`cid`,b.`name`,a.`honor`
                                      from
                                              `mem_char_currency`  a
                                      left join
                                              `mem_character` b
                                      on
                                              a.`cid` = b.`cid`
                                      order by
                                              a.`honor` desc
                                      limit 0,20
                                ";
                                $honorArray = $GameDb->getArray($sql);
                                $sql = "
                                      select 
                                           avg(a.`honor`)
                                      from
                                          (
                                              select
                                                      `cid`,`honor`
                                              from
                                                      `mem_char_currency`  
                                              order by
                                                      `honor` desc
                                              limit 0,20
                                          ) a
                                ";
                                $honorAvg = $GameDb->getColumn($sql);
                                $sql = "
                                      select
                                              a.`cid`,a.`LimitCount`,b.`name`
                                      from
                                              `mem_char_operate_limit` a
                                      left join
                                              `mem_character` b
                                      on
                                              a.`cid` = b.`cid`
                                      where
                                              a.`LimitId` = 1147
                                      order by
                                              a.`LimitCount` desc
                                      limit 0,20
                                ";
                                $starArray = $GameDb->getArray($sql);
                                $sql = "
                                      select 
                                           avg(a.`LimitCount`)
                                      from
                                          (
                                              select
                                                      `cid`,`LimitCount`
                                              from
                                                      `mem_char_operate_limit` 
                                              where
                                                      `LimitId` = 1147
                                              order by
                                                      `LimitCount` desc
                                              limit 0,20
                                          ) a
                                ";
                                $starAvg = $GameDb->getColumn($sql);
                                $sql = "
                                      select
                                              a.`cid`,a.`LimitCount`,b.`name`
                                      from
                                              `mem_char_operate_limit` a
                                      left join
                                              `mem_character` b
                                      on
                                              a.`cid` = b.`cid`
                                      where
                                              a.`LimitId` = 1148
                                      order by
                                              a.`LimitCount` desc
                                      limit 0,20
                                ";
                                $skyArray = $GameDb->getArray($sql);
                                $sql = "
                                      select 
                                           avg(a.`LimitCount`)
                                      from
                                          (
                                              select
                                                      `cid`,`LimitCount`
                                              from
                                                      `mem_char_operate_limit` 
                                              where
                                                      `LimitId` = 1148
                                              order by
                                                      `LimitCount` desc
                                              limit 0,20
                                          ) a
                                ";
                                $skyAvg = $GameDb->getColumn($sql);
                                $sql = "
                                      select
                                              a.`cid`,a.`LimitCount`,b.`name`
                                      from
                                              `mem_char_operate_limit` a
                                      left join
                                              `mem_character` b
                                      on
                                              a.`cid` = b.`cid`
                                      where
                                              a.`LimitId` = 1150
                                      order by
                                              a.`LimitCount` desc
                                      limit 0,20
                                ";
                                $damnationArray = $GameDb->getArray($sql);
                                $sql = "
                                      select 
                                           avg(a.`LimitCount`)
                                      from
                                          (
                                              select
                                                      `cid`,`LimitCount`
                                              from
                                                      `mem_char_operate_limit` 
                                              where
                                                      `LimitId` = 1150
                                              order by
                                                      `LimitCount` desc
                                              limit 0,20
                                          ) a
                                ";
                                $damnationAvg = $GameDb->getColumn($sql);
                                $sql = "
                                      select
                                              `cid`,`name`,`battle`
                                      from
                                              `mem_character`
                                      order by
                                              `battle` desc
                                      limit 0,20
                                ";
                                $battleArray = $GameDb->getArray($sql);
                                $sql = "
                                      select
                                              `cid`,`name`,`level`
                                      from
                                              `mem_character`
                                      order by
                                              `level` desc
                                      limit 0,20
                                ";
                                $levelArray = $GameDb->getArray($sql);
                                $sql = "
                                      select 
                                           avg(a.`battle`)
                                      from
                                          (
                                              select
                                                      `cid`,`battle`
                                              from
                                                      `mem_character`
                                              order by
                                                      `battle` desc
                                              limit 0,20
                                          ) a
                                ";
                                $battleAvg = $GameDb->getColumn($sql);
                                $sql = "
                                      select 
                                           avg(a.`level`)
                                      from
                                          (
                                              select
                                                      `cid`,`level`
                                              from
                                                      `mem_character`
                                              order by
                                                      `battle` desc
                                              limit 0,20
                                          ) a
                                ";
                                $levelAvg = $GameDb->getColumn($sql);
                                $GameDb->close();
                                $sql = "
                                      select
                                              count(*) as `count`,min(`time`) as `time`,max(`time`) as `max`
                                      from
                                              `t_log_ave`   
                                      where
                                              `operatorId` = '{$v1['operatorId']}'
                                              and
                                              `areaNum` = '{$v1['areaNum']}'
                                ";
                                $num = $GmDb->getRow($sql);     
                                $sql = "
                                      select
                                              `aveBattle`,`aveLevel`
                                      from
                                              `t_log_ave`   
                                      where
                                              `operatorId` = '{$v1['operatorId']}'
                                              and
                                              `areaNum` = '{$v1['areaNum']}'
                                              and
                                              `time` = '{$num['max']}'
                                ";
                                $yesAvg = $GmDb->getRow($sql);     
                                if($num['count'] == 30){
                                      $sql = "
                                            delete  from
                                                    `t_log_ave`   
                                            where
                                                    `operatorId` = '{$v1['operatorId']}'
                                                    and
                                                    `areaNum` = '{$v1['areaNum']}'
                                                    and
                                                    `time`  = '{$num['time']}'
                                      ";
                                      $GmDb->query($sql);              
                                }
                                $sql = "
                                      select
                                               count(distinct(`time`)) as `count`,min(`time`) as `time`
                                      from
                                              `t_log_order_battle_level`   
                                      where
                                              `operatorId` = '{$v1['operatorId']}'
                                              and
                                              `areaNum` = '{$v1['areaNum']}'
                                ";
                                $num = $GmDb->getRow($sql);     
                                
                                if($num['count'] == 30){
                                      $sql = "
                                            delete  from
                                                    `t_log_order_battle_level`   
                                            where
                                                    `operatorId` = '{$v1['operatorId']}'
                                                    and
                                                    `areaNum` = '{$v1['areaNum']}'
                                                    and
                                                    `time`  = '{$num['time']}'
                                      ";
                                      $GmDb->query($sql);              
                                }
                                $sql = "
                                      select
                                               count(distinct(`time`)) as `count`,min(`time`) as `time`
                                      from
                                              `t_log_order_item_one`   
                                      where
                                              `operatorId` = '{$v1['operatorId']}'
                                              and
                                              `areaNum` = '{$v1['areaNum']}'
                                ";
                                $num = $GmDb->getRow($sql);     
                                if($num['count'] == 30){
                                      $sql = "
                                            delete  from
                                                    `t_log_order_item_one`   
                                            where
                                                    `operatorId` = '{$v1['operatorId']}'
                                                    and
                                                    `areaNum` = '{$v1['areaNum']}'
                                                    and
                                                    `time`  = '{$num['time']}'
                                      ";
                                      $GmDb->query($sql);              
                                }
                                $sql = "
                                      select
                                               count(distinct(`time`)) as `count`,min(`time`) as `time`
                                      from
                                              `t_log_order_item_two`  
                                      where
                                              `operatorId` = '{$v1['operatorId']}'
                                              and
                                              `areaNum` = '{$v1['areaNum']}'
                                ";
                                $num = $GmDb->getRow($sql);     
                                if($num['count'] == 30){
                                      $sql = "
                                            delete  from
                                                    `t_log_order_item_two`   
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
                                                      `t_log_ave`
                                              set
                                                      `time` = unix_timestamp('{$statDate}'),
                                                      `operatorId` = '{$v1['operatorId']}',
                                                      `areaNum` = '{$v1['areaNum']}',
                                                      `aveBattle` = '{$battleAvg}',
                                                      `growBattle` = '{$battleAvg}'-'{$yesAvg['aveBattle']}',
                                                      `aveLevel` = '{$levelAvg}',
                                                      `growLevel` = '{$levelAvg}'-'{$yesAvg['aveLevel']}',
                                                      `jueWei` = '{$jueWeiAvg}',
                                                      `star` = '{$starAvg}',
                                                      `sky` = '{$skyAvg}',
                                                      `damnation`= '{$damnationAvg}',
                                                      `honor` = '{$honorAvg}',
                                                      `wing`= '{$wingAvg}'
                                      ";

                                      $GmDb->query($sql);
                                      foreach($battleArray as $key=>$val){
                                          $sql = "
                                                  insert into
                                                          `t_log_order_battle_level`
                                                  set
                                                          `time` = unix_timestamp('{$statDate}'),
                                                          `operatorId` = '{$v1['operatorId']}',
                                                          `areaNum` = '{$v1['areaNum']}',
                                                          `order` = '{$key}'+1,
                                                          `cid1` = '{$val['cid']}',
                                                          `name1` = '{$val['name']}',
                                                          `battle` = '{$val['battle']}'
                                          ";

                                          $GmDb->query($sql);
                                      }
                                      foreach($levelArray as $key=>$val){
                                          $sql = "
                                                  update
                                                          `t_log_order_battle_level`
                                                  set
                                                          `cid2` = '{$val['cid']}',
                                                          `name2` = '{$val['name']}',
                                                          `level` = '{$val['level']}'
                                                  where
                                                          `time` = unix_timestamp('{$statDate}')
                                                          and
                                                          `operatorId` = '{$v1['operatorId']}'
                                                          and
                                                          `areaNum` = '{$v1['areaNum']}'
                                                          and
                                                          `order` = '{$key}'+1
                                          ";

                                          $GmDb->query($sql);
                                      }
                                      foreach ($jueWeiArray as $key=>$val){
                                            $sql = "
                                                    insert into
                                                            `t_log_order_item_one`
                                                    set
                                                            `time` = unix_timestamp('{$statDate}'),
                                                            `operatorId` = '{$v1['operatorId']}',
                                                            `areaNum` = '{$v1['areaNum']}',
                                                            `order` = '{$key}'+1,
                                                            `cid5` = '{$val['cid']}',
                                                            `name5` = '{$val['name']}',
                                                            `jueWei` = '{$val['level']}'
                                                          
                                            ";

                                            $GmDb->query($sql);
                                      }
                                      foreach ($starArray as $key=>$val){
                                            $sql = "
                                                    update
                                                            `t_log_order_item_one`
                                                    set
                                                            `cid6` = '{$val['cid']}',
                                                            `name6` = '{$val['name']}',
                                                            `star` = '{$val['LimitCount']}'
                                                    where
                                                          `time` = unix_timestamp('{$statDate}')
                                                          and
                                                          `operatorId` = '{$v1['operatorId']}'
                                                          and
                                                          `areaNum` = '{$v1['areaNum']}'
                                                          and
                                                          `order` = '{$key}'+1
                                            ";

                                            $GmDb->query($sql);
                                      }
                                      foreach ($skyArray as $key=>$val){
                                            $sql = "
                                                    insert into
                                                            `t_log_order_item_two`
                                                    set
                                                            `time` = unix_timestamp('{$statDate}'),
                                                            `operatorId` = '{$v1['operatorId']}',
                                                            `areaNum` = '{$v1['areaNum']}',
                                                            `order` = '{$key}'+1,
                                                            `cid1` = '{$val['cid']}',
                                                            `name1` = '{$val['name']}',
                                                            `sky` = '{$val['LimitCount']}'
                                            ";

                                            $GmDb->query($sql);
                                      }
                                      foreach ($damnationArray as $key=>$val){
                                            $sql = "
                                                    update
                                                            `t_log_order_item_two`
                                                    set
                                                            `cid2` = '{$val['cid']}',
                                                            `name2` = '{$val['name']}',
                                                            `damnation` = '{$val['LimitCount']}'
                                                     where
                                                          `time` = unix_timestamp('{$statDate}')
                                                          and
                                                          `operatorId` = '{$v1['operatorId']}'
                                                          and
                                                          `areaNum` = '{$v1['areaNum']}'
                                                          and
                                                          `order` = '{$key}'+1
                                            ";

                                            $GmDb->query($sql);
                                      }
                                      foreach ($honorArray as $key=>$val){
                                            $sql = "
                                                    update
                                                            `t_log_order_item_two`
                                                    set
                                                            `cid3` = '{$val['cid']}',
                                                            `name3` = '{$val['name']}',
                                                            `honor` = '{$val['honor']}'
                                                    where
                                                          `time` = unix_timestamp('{$statDate}')
                                                          and
                                                          `operatorId` = '{$v1['operatorId']}'
                                                          and
                                                          `areaNum` = '{$v1['areaNum']}'
                                                          and
                                                          `order` = '{$key}'+1
                                            ";

                                            $GmDb->query($sql);
                                      }
                                      foreach ($wingArray as $key=>$val){
                                            $sql = "
                                                    update
                                                            `t_log_order_item_two`
                                                    set
                                                            `cid4` = '{$val['cid']}',
                                                            `name4` = '{$val['name']}',
                                                            `wing` = '{$val['level']}'
                                                    where
                                                          `time` = unix_timestamp('{$statDate}')
                                                          and
                                                          `operatorId` = '{$v1['operatorId']}'
                                                          and
                                                          `areaNum` = '{$v1['areaNum']}'
                                                          and
                                                          `order` = '{$key}'+1
                                            ";

                                            $GmDb->query($sql);
                                      }
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