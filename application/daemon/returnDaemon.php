<?php
//set_time_limit(0);


include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');

define('LOCK_FILE', dirname(__FILE__).'/lock/costReturnDaemon.lock');
define('LOG_LEVEL', 'DEBUG');


$LogFile = dirname(__FILE__).'/log/returnDaemon'.date('Y.m.d').'.log';

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

try{
        $sql = "
               select
                       `cid`,`return`,`sid`
               from
                       `tem` 
       ";
       $returnInfoArray =  $GmDb->getArray($sql);
       
       $GameDb = new Zw_Mysql();
       $GameDb->setLog($Log);
       foreach ($returnInfoArray as $v){
          $sql = "
               select
                       c.`ipAddress`,
                       a.`databaseName`,
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
                       a.`areaNum` = '{$v['sid']}'
          ";
          $serverArray =  $GmDb->getRow($sql);
          $GameDb->connect($serverArray['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $serverArray['databaseName']);
          while($v['return'] > 0) {
                if($v['return'] > 999 * 5){
                 $sql = "
                    insert into
                      mem_mail
                    set
                    `SysMailId` = '-200000',
                    `SenderName` = '系统',
                    `ReceiveId` = '{$v['cid']}',
                    `ReceiveName` = '',
                    `MailTitle` = '部位锤炼调整补偿',
                    `MailContent` = '',
                    Extract = 1,
                    reason = 2,
                    SendTime = UNIX_TIMESTAMP(now()),
                    DelFlag = 0,
                    Item1 = '100102:1:999:1:0:0',
                    Item2 = '100102:1:999:1:0:0',
                    Item3 = '100102:1:999:1:0:0',
                    Item4 = '100102:1:999:1:0:0',
                    Item5 = '100102:1:999:1:0:0'
                  ";
                   $GameDb->query($sql);
                   $v['return'] =$v['return'] - 999 * 5;
                }else if($v['return'] > 999 * 4 && $v['return'] <= 999 * 5) {
                      $lastItemNumber = $v['return'] - 999 * 4;
                      $sql = "
                        insert into
                          mem_mail
                        set
                        `SysMailId` = '-200000',
                        `SenderName` = '系统',
                        `ReceiveId` = '{$v['cid']}',
                        `ReceiveName` = '',
                        `MailTitle` = '部位锤炼调整补偿',
                        `MailContent` = '',
                        Extract = 1,
                        reason = 2,
                        SendTime = UNIX_TIMESTAMP(now()),
                        DelFlag = 0,
                        Item1 = '100102:1:999:1:0:0',
                        Item2 = '100102:1:999:1:0:0',
                        Item3 = '100102:1:999:1:0:0',
                        Item4 = '100102:1:999:1:0:0',
                        Item5 = '100102:1:$lastItemNumber:1:0:0'
                      ";
                      $GameDb->query($sql);
                      $v['return'] = $v['return'] - 999 * 4-$lastItemNumber;
                }else if($v['return'] > 999 * 3 && $v['return'] <= 999 * 4) {
                  $lastItemNumber = $v['return'] - 999 * 3;
                  $sql = "
                    insert into
                      mem_mail
                    set
                    `SysMailId` = '-200000',
                    `SenderName` = '系统',
                    `ReceiveId` = '{$v['cid']}',
                    `ReceiveName` = '',
                    `MailTitle` = '部位锤炼调整补偿',
                    `MailContent` = '',
                    Extract = 1,
                    reason = 2,
                    SendTime = UNIX_TIMESTAMP(now()),
                    DelFlag = 0,
                    Item1 = '100102:1:999:1:0:0',
                    Item2 = '100102:1:999:1:0:0',
                    Item3 = '100102:1:999:1:0:0',
                    Item4 = '100102:1:$lastItemNumber:1:0:0'
                  ";
                  $GameDb->query($sql);
                  $v['return'] = $v['return'] - 999 * 3-$lastItemNumber;
                }else if($v['return'] > 999 * 2 && $v['return'] <= 999 * 3) {
                  $lastItemNumber = $v['return'] - 999 * 2;
                  $sql = "
                    insert into
                      mem_mail
                    set
                    `SysMailId` = '-200000',
                    `SenderName` = '系统',
                    `ReceiveId` = '{$v['cid']}',
                    `ReceiveName` = '',
                    `MailTitle` = '部位锤炼调整补偿',
                    `MailContent` = '',
                    Extract = 1,
                    reason = 2,
                    SendTime = UNIX_TIMESTAMP(now()),
                    DelFlag = 0,
                    Item1 = '100102:1:999:1:0:0',
                    Item2 = '100102:1:999:1:0:0',
                    Item3 = '100102:1:$lastItemNumber:1:0:0'
                  ";
                  $GameDb->query($sql);
                  $v['return'] = $v['return'] - 999 * 2-$lastItemNumber;
                }else if( $v['return'] > 999 * 1 &&  $v['return'] <= 999 * 2) {
                  $lastItemNumber =  $v['return'] - 999 * 1;
                  $sql = "
                    insert into
                      mem_mail
                    set
                    `SysMailId` = '-200000',
                    `SenderName` = '系统',
                    `ReceiveId` = '{$v['cid']}',
                    `ReceiveName` = '',
                    `MailTitle` = '部位锤炼调整补偿',
                    `MailContent` = '',
                    Extract = 1,
                    reason = 2,
                    SendTime = UNIX_TIMESTAMP(now()),
                    DelFlag = 0,
                    Item1 = '100102:1:999:1:0:0',
                    Item2 = '100102:1:$lastItemNumber:1:0:0'
                  ";
                  $GameDb->query($sql);
                   $v['return'] = $v['return'] - 999 * 1-$lastItemNumber;
                }
                else if( $v['return'] > 999 * 0 &&  $v['return'] <= 999 * 1) {
                   $lastItemNumber =  $v['return'] - 999 * 0;
                  $sql = "
                    insert into
                      mem_mail
                    set
                    `SysMailId` = '-200000',
                    `SenderName` = '系统',
                    `ReceiveId` = '{$v['cid']}',
                    `ReceiveName` = '',
                    `MailTitle` = '部位锤炼调整补偿',
                    `MailContent` = '',
                    Extract = 1,
                    reason = 2,
                    SendTime = UNIX_TIMESTAMP(now()),
                    DelFlag = 0,
                    Item1 = '100102:1:{$lastItemNumber}:1:0:0'
                  ";
                  $GameDb->query($sql);
                   $v['return'] = $v['return'] -$lastItemNumber;
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
	
//	sleep(30);
//}