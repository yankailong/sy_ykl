<?php
//set_time_limit(0);

$gameDatabaseHost = '172.16.1.28';
$gameDatabasePort = 3306;
$gameDatabaseUsername = 'wj';
$gameDatabasePassword = 'pptWJ8#8';
$gameDatabaseName = 'dark';


include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');

define('LOCK_FILE', dirname(__FILE__).'/lock/itemReturn.lock');
define('LOG_LEVEL', 'DEBUG');

$LogFile = dirname(__FILE__).'/log/itemReturn'.date('Y.m.d').'.log';

$Log = new Zw_Log();
$Log->setCurrLogLevel(LOG_LEVEL);
$Log->setLogFile($LogFile);

$handle = fopen(LOCK_FILE, 'w+');
if(!flock($handle, LOCK_EX|LOCK_NB)){
  $Log->write('进程已经启动，请不要重复启动');
  exit();
}

$fabao1Config = array();
$handle1 = fopen("fabao1.txt", 'r');
while (!feof($handle1))
{
  $line = fgets($handle1);
  $tmp = explode(":", $line);
  $fabao1Config[$tmp[0]]["item"] = $tmp[1];
  $fabao1Config[$tmp[0]]["number"] = $tmp[2];
}
fclose($handle1);

$fabao3Config = array();
$handle1 = fopen("fabao2.txt", 'r');
while (!feof($handle1))
{
  $line = fgets($handle1);
  $tmp = explode(":", $line);
  $fabao3Config[$tmp[0]]["item"] = $tmp[1];
  $fabao3Config[$tmp[0]]["number"] = $tmp[2];
}
fclose($handle1);

$wingConfig = array();
$handle1 = fopen("fly.txt", 'r');
while (!feof($handle1))
{
  $line = fgets($handle1);
  $tmp = explode(":", $line);
  $wingConfig[$tmp[0]]["item"] = $tmp[1];
  $wingConfig[$tmp[0]]["number"] = $tmp[2];
}
fclose($handle1);

$bookConfig = array();
$handle1 = fopen("book.txt", 'r');
while (!feof($handle1))
{
  $line = fgets($handle1);
  $tmp = explode(":", $line);
  $bookConfig[$tmp[0]]["item"] = $tmp[1];
  $bookConfig[$tmp[0]]["number"] = $tmp[2];
}
fclose($handle1);

$petConfig = array();
$handle1 = fopen("yb.txt", 'r');
while (!feof($handle1))
{
  $line = fgets($handle1);
  $tmp = explode(":", $line);
  $petConfig[$tmp[0]]["item"] = $tmp[1];
  $petConfig[$tmp[0]]["number"] = $tmp[2];
}
fclose($handle1);

$GameDb = new Zw_Mysql();
$GameDb->setLog($Log);
$GameDb->connect($gameDatabaseHost.":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $gameDatabaseName);

try{
$sql = "select `cid`,`FaBaoLevel` from `mem_chr_fabao` ";
$userFabaoInfo = $GameDb->getArray($sql);




foreach ($userFabaoInfo as $v) {
  $tmp = explode(":", $v['FaBaoLevel']);
  $fabaoId1 = $tmp[0];
  $fabaoId3 = $tmp[2];
  $GameDb->writeLog(json_encode($v), 'ERROR');
  if($fabaoId1!=0){
    $returnItemId = $fabao1Config[$fabaoId1]["item"];
    $returnItemNumber = $fabao1Config[$fabaoId1]["number"];
  }
  while($returnItemNumber > 0) {
    if($returnItemNumber > 999 * 5) {
      $sql = "
        insert into
          mem_mail
        set
        `SysMailId` = '-200000',
        `SenderName` = '系统',
        `ReceiveId` = {$v['cid']},
        `ReceiveName` = '',
        `MailTitle` = '系统调整补偿',
        `MailContent` = '系统调整补偿',
        Extract = 1,
        reason = 2,
        SendTime = UNIX_TIMESTAMP(now()),
        DelFlag = 0,
        Item1 = '$returnItemId:1:999:1:0:0',
        Item2 = '$returnItemId:1:999:1:0:0',
        Item3 = '$returnItemId:1:999:1:0:0',
        Item4 = '$returnItemId:1:999:1:0:0',
        Item5 = '$returnItemId:1:999:1:0:0'
      ";
       $GameDb->query($sql);
       $returnItemNumber =$returnItemNumber - 999 * 5;
    }
    else if($returnItemNumber > 999 * 4 && $returnItemNumber <= 999 * 5) {
      $lastItemNumber = $returnItemNumber - 999 * 4;
      $sql = "
        insert into
          mem_mail
        set
        `SysMailId` = '-200000',
        `SenderName` = '系统',
        `ReceiveId` = {$v['cid']},
        `ReceiveName` = '',
        `MailTitle` = '系统调整补偿',
        `MailContent` = '系统调整补偿',
        Extract = 1,
        reason = 2,
        SendTime = UNIX_TIMESTAMP(now()),
        DelFlag = 0,
        Item1 = '$returnItemId:1:999:1:0:0',
        Item2 = '$returnItemId:1:999:1:0:0',
        Item3 = '$returnItemId:1:999:1:0:0',
        Item4 = '$returnItemId:1:999:1:0:0',
        Item5 = '$returnItemId:1:$lastItemNumber:1:0:0'
      ";
      $GameDb->query($sql);
      $returnItemNumber = $returnItemNumber - 999 * 4-$lastItemNumber;
    }
    else if($returnItemNumber > 999 * 3 && $returnItemNumber <= 999 * 4) {
      $lastItemNumber = $returnItemNumber - 999 * 3;
      $sql = "
        insert into
          mem_mail
        set
        `SysMailId` = '-200000',
        `SenderName` = '系统',
        `ReceiveId` = {$v['cid']},
        `ReceiveName` = '',
        `MailTitle` = '系统调整补偿',
        `MailContent` = '系统调整补偿',
        Extract = 1,
        reason = 2,
        SendTime = UNIX_TIMESTAMP(now()),
        DelFlag = 0,
        Item1 = '$returnItemId:1:999:1:0:0',
        Item2 = '$returnItemId:1:999:1:0:0',
        Item3 = '$returnItemId:1:999:1:0:0',
        Item4 = '$returnItemId:1:$lastItemNumber:1:0:0'
      ";
      $GameDb->query($sql);
      $returnItemNumber = $returnItemNumber - 999 * 3-$lastItemNumber;
    }
    else if($returnItemNumber > 999 * 2 && $returnItemNumber <= 999 * 3) {
      $lastItemNumber = $returnItemNumber - 999 * 2;
      $sql = "
        insert into
          mem_mail
        set
        `SysMailId` = '-200000',
        `SenderName` = '系统',
        `ReceiveId` = {$v['cid']},
        `ReceiveName` = '',
        `MailTitle` = '系统调整补偿',
        `MailContent` = '系统调整补偿',
        Extract = 1,
        reason = 2,
        SendTime = UNIX_TIMESTAMP(now()),
        DelFlag = 0,
        Item1 = '$returnItemId:1:999:1:0:0',
        Item2 = '$returnItemId:1:999:1:0:0',
        Item3 = '$returnItemId:1:$lastItemNumber:1:0:0'
      ";
      $GameDb->query($sql);
      $returnItemNumber = $returnItemNumber - 999 * 2-$lastItemNumber;
    }
    else if($returnItemNumber > 999 * 1 && $returnItemNumber <= 999 * 2) {
      $lastItemNumber = $returnItemNumber - 999 * 1;
      $sql = "
        insert into
          mem_mail
        set
        `SysMailId` = '-200000',
        `SenderName` = '系统',
        `ReceiveId` = {$v['cid']},
        `ReceiveName` = '',
        `MailTitle` = '系统调整补偿',
        `MailContent` = '系统调整补偿',
        Extract = 1,
        reason = 2,
        SendTime = UNIX_TIMESTAMP(now()),
        DelFlag = 0,
        Item1 = '$returnItemId:1:999:1:0:0',
        Item2 = '$returnItemId:1:$lastItemNumber:1:0:0'
      ";
      $GameDb->query($sql);
      $returnItemNumber =$returnItemNumber - 999 * 1-$lastItemNumber;
    }
    else if($returnItemNumber > 999 * 0 && $returnItemNumber <= 999 * 1) {
       $lastItemNumber = $returnItemNumber - 999 * 0;
      $sql = "
        insert into
          mem_mail
        set
        `SysMailId` = '-200000',
        `SenderName` = '系统',
        `ReceiveId` = {$v['cid']},
        `ReceiveName` = '',
        `MailTitle` = '系统调整补偿',
        `MailContent` = '系统调整补偿',
        Extract = 1,
        reason = 2,
        SendTime = UNIX_TIMESTAMP(now()),
        DelFlag = 0,
        Item1 = '$returnItemId:1:{$lastItemNumber}:1:0:0'
      ";
      $GameDb->query($sql);
      $returnItemNumber =$returnItemNumber -$lastItemNumber;
    }
  }
  
  if($fabaoId3!=0){
    $returnItemId = $fabao3Config[$fabaoId3]["item"];
    $returnItemNumber = $fabao3Config[$fabaoId3]["number"];
  }
  while($returnItemNumber > 0) {
    if($returnItemNumber > 999 * 5) {
      $sql = "
        insert into
          mem_mail
        set
        `SysMailId` = '-200000',
        `SenderName` = '系统',
        `ReceiveId` = {$v['cid']},
        `ReceiveName` = '',
        `MailTitle` = '系统调整补偿',
        `MailContent` = '系统调整补偿',
        Extract = 1,
        reason = 2,
        SendTime = UNIX_TIMESTAMP(now()),
        DelFlag = 0,
        Item1 = '$returnItemId:1:999:1:0:0',
        Item2 = '$returnItemId:1:999:1:0:0',
        Item3 = '$returnItemId:1:999:1:0:0',
        Item4 = '$returnItemId:1:999:1:0:0',
        Item5 = '$returnItemId:1:999:1:0:0'
      ";
       $GameDb->query($sql);
       $returnItemNumber =$returnItemNumber - 999 * 5;
    }
    else if($returnItemNumber > 999 * 4 && $returnItemNumber <= 999 * 5) {
      $lastItemNumber = $returnItemNumber - 999 * 4;
      $sql = "
        insert into
          mem_mail
        set
        `SysMailId` = '-200000',
        `SenderName` = '系统',
        `ReceiveId` = {$v['cid']},
        `ReceiveName` = '',
        `MailTitle` = '系统调整补偿',
        `MailContent` = '系统调整补偿',
        Extract = 1,
        reason = 2,
        SendTime = UNIX_TIMESTAMP(now()),
        DelFlag = 0,
        Item1 = '$returnItemId:1:999:1:0:0',
        Item2 = '$returnItemId:1:999:1:0:0',
        Item3 = '$returnItemId:1:999:1:0:0',
        Item4 = '$returnItemId:1:999:1:0:0',
        Item5 = '$returnItemId:1:$lastItemNumber:1:0:0'
      ";
      $GameDb->query($sql);
      $returnItemNumber =$returnItemNumber - 999 * 4-$lastItemNumber;
    }
    else if($returnItemNumber > 999 * 3 && $returnItemNumber <= 999 * 4) {
      $lastItemNumber = $returnItemNumber - 999 * 3;
      $sql = "
        insert into
          mem_mail
        set
        `SysMailId` = '-200000',
        `SenderName` = '系统',
        `ReceiveId` = {$v['cid']},
        `ReceiveName` = '',
        `MailTitle` = '系统调整补偿',
        `MailContent` = '系统调整补偿',
        Extract = 1,
        reason = 2,
        SendTime = UNIX_TIMESTAMP(now()),
        DelFlag = 0,
        Item1 = '$returnItemId:1:999:1:0:0',
        Item2 = '$returnItemId:1:999:1:0:0',
        Item3 = '$returnItemId:1:999:1:0:0',
        Item4 = '$returnItemId:1:$lastItemNumber:1:0:0'
      ";
      $GameDb->query($sql);
      $returnItemNumber =$returnItemNumber - 999 * 3-$lastItemNumber;
    }
    else if($returnItemNumber > 999 * 2 && $returnItemNumber <= 999 * 3) {
      $lastItemNumber = $returnItemNumber - 999 * 2;
      $sql = "
        insert into
          mem_mail
        set
        `SysMailId` = '-200000',
        `SenderName` = '系统',
        `ReceiveId` = {$v['cid']},
        `ReceiveName` = '',
        `MailTitle` = '系统调整补偿',
        `MailContent` = '系统调整补偿',
        Extract = 1,
        reason = 2,
        SendTime = UNIX_TIMESTAMP(now()),
        DelFlag = 0,
        Item1 = '$returnItemId:1:999:1:0:0',
        Item2 = '$returnItemId:1:999:1:0:0',
        Item3 = '$returnItemId:1:$lastItemNumber:1:0:0'
      ";
      $GameDb->query($sql);
      $returnItemNumber =$returnItemNumber - 999 * 2-$lastItemNumber;
    }
    else if($returnItemNumber > 999 * 1 && $returnItemNumber <= 999 * 2) {
      $lastItemNumber = $returnItemNumber - 999 * 1;
      $sql = "
        insert into
          mem_mail
        set
        `SysMailId` = '-200000',
        `SenderName` = '系统',
        `ReceiveId` = {$v['cid']},
        `ReceiveName` = '',
        `MailTitle` = '系统调整补偿',
        `MailContent` = '系统调整补偿',
        Extract = 1,
        reason = 2,
        SendTime = UNIX_TIMESTAMP(now()),
        DelFlag = 0,
        Item1 = '$returnItemId:1:999:1:0:0',
        Item2 = '$returnItemId:1:$lastItemNumber:1:0:0'
      ";
      $GameDb->query($sql);
      $returnItemNumber =$returnItemNumber - 999 * 1-$lastItemNumber;
    }
    else if($returnItemNumber > 999 * 0 && $returnItemNumber <= 999 * 1) {
      $lastItemNumber = $returnItemNumber - 999 * 0;
      $sql = "
        insert into
          mem_mail
        set
        `SysMailId` = '-200000',
        `SenderName` = '系统',
        `ReceiveId` = {$v['cid']},
        `ReceiveName` = '',
        `MailTitle` = '系统调整补偿',
        `MailContent` = '系统调整补偿',
        Extract = 1,
        reason = 2,
        SendTime = UNIX_TIMESTAMP(now()),
        DelFlag = 0,
        Item1 = '$returnItemId:1:{$lastItemNumber}:1:0:0'
      ";
      $GameDb->query($sql);
      $returnItemNumber =$returnItemNumber -$lastItemNumber;
    }
  }
}


$sql = "select `cid`,`smith` from `mem_char_wing` ";
$userWingInfo = $GameDb->getArray($sql);

foreach ($userWingInfo as $v) {
  $tmp = explode("|", $v['smith']);
  $GameDb->writeLog(json_encode($v), 'ERROR');
  foreach($tmp as $v1){
        $val = strstr($v1, ':', TRUE);
        if($val!= 0){
          $returnItemId = $wingConfig[$v]["item"];
          $returnItemNumber =  $wingConfig[$v]["number"];
        }
        while($returnItemNumber > 0) {
          if($returnItemNumber > 999 * 5) {
            $sql = "
              insert into
                mem_mail
              set
              `SysMailId` = '-200000',
              `SenderName` = '系统',
              `ReceiveId` = {$v['cid']},
              `ReceiveName` = '',
              `MailTitle` = '系统调整补偿',
              `MailContent` = '系统调整补偿',
              Extract = 1,
              reason = 2,
              SendTime = UNIX_TIMESTAMP(now()),
              DelFlag = 0,
              Item1 = '$returnItemId:1:999:1:0:0',
              Item2 = '$returnItemId:1:999:1:0:0',
              Item3 = '$returnItemId:1:999:1:0:0',
              Item4 = '$returnItemId:1:999:1:0:0',
              Item5 = '$returnItemId:1:999:1:0:0'
            ";
             $GameDb->query($sql);
             $returnItemNumber =$returnItemNumber - 999 * 5;
          }
          else if($returnItemNumber > 999 * 4 && $returnItemNumber <= 999 * 5) {
            $lastItemNumber = $returnItemNumber - 999 * 4;
            $sql = "
              insert into
                mem_mail
              set
              `SysMailId` = '-200000',
              `SenderName` = '系统',
              `ReceiveId` = {$v['cid']},
              `ReceiveName` = '',
              `MailTitle` = '系统调整补偿',
              `MailContent` = '系统调整补偿',
              Extract = 1,
              reason = 2,
              SendTime = UNIX_TIMESTAMP(now()),
              DelFlag = 0,
              Item1 = '$returnItemId:1:999:1:0:0',
              Item2 = '$returnItemId:1:999:1:0:0',
              Item3 = '$returnItemId:1:999:1:0:0',
              Item4 = '$returnItemId:1:999:1:0:0',
              Item5 = '$returnItemId:1:$lastItemNumber:1:0:0'
            ";
            $GameDb->query($sql);
            $returnItemNumber =$returnItemNumber - 999 * 4-$lastItemNumber;
          }
          else if($returnItemNumber > 999 * 3 && $returnItemNumber <= 999 * 4) {
            $lastItemNumber = $returnItemNumber - 999 * 3;
            $sql = "
              insert into
                mem_mail
              set
              `SysMailId` = '-200000',
              `SenderName` = '系统',
              `ReceiveId` = {$v['cid']},
              `ReceiveName` = '',
              `MailTitle` = '系统调整补偿',
              `MailContent` = '系统调整补偿',
              Extract = 1,
              reason = 2,
              SendTime = UNIX_TIMESTAMP(now()),
              DelFlag = 0,
              Item1 = '$returnItemId:1:999:1:0:0',
              Item2 = '$returnItemId:1:999:1:0:0',
              Item3 = '$returnItemId:1:999:1:0:0',
              Item4 = '$returnItemId:1:$lastItemNumber:1:0:0'
            ";
            $GameDb->query($sql);
            $returnItemNumber =$returnItemNumber - 999 * 3-$lastItemNumber;
          }
          else if($returnItemNumber > 999 * 2 && $returnItemNumber <= 999 * 3) {
            $lastItemNumber = $returnItemNumber - 999 * 2;
            $sql = "
              insert into
                mem_mail
              set
              `SysMailId` = '-200000',
              `SenderName` = '系统',
              `ReceiveId` = {$v['cid']},
              `ReceiveName` = '',
              `MailTitle` = '系统调整补偿',
              `MailContent` = '系统调整补偿',
              Extract = 1,
              reason = 2,
              SendTime = UNIX_TIMESTAMP(now()),
              DelFlag = 0,
              Item1 = '$returnItemId:1:999:1:0:0',
              Item2 = '$returnItemId:1:999:1:0:0',
              Item3 = '$returnItemId:1:$lastItemNumber:1:0:0'
            ";
            $GameDb->query($sql);
            $returnItemNumber =$returnItemNumber - 999 * 2-$lastItemNumber;
          }
          else if($returnItemNumber > 999 * 1 && $returnItemNumber <= 999 * 2) {
            $lastItemNumber = $returnItemNumber - 999 * 1;
            $sql = "
              insert into
                mem_mail
              set
              `SysMailId` = '-200000',
              `SenderName` = '系统',
              `ReceiveId` = {$v['cid']},
              `ReceiveName` = '',
              `MailTitle` = '系统调整补偿',
              `MailContent` = '系统调整补偿',
              Extract = 1,
              reason = 2,
              SendTime = UNIX_TIMESTAMP(now()),
              DelFlag = 0,
              Item1 = '$returnItemId:1:999:1:0:0',
              Item2 = '$returnItemId:1:$lastItemNumber:1:0:0'
            ";
            $GameDb->query($sql);
            $returnItemNumber =$returnItemNumber - 999 * 1-$lastItemNumber;
          }
          else if($returnItemNumber > 999 * 0 && $returnItemNumber <= 999 * 1) {
            $lastItemNumber = $returnItemNumber - 999 * 0;
            $sql = "
              insert into
                mem_mail
              set
              `SysMailId` = '-200000',
              `SenderName` = '系统',
              `ReceiveId` = {$v['cid']},
              `ReceiveName` = '',
              `MailTitle` = '系统调整补偿',
              `MailContent` = '系统调整补偿',
              Extract = 1,
              reason = 2,
              SendTime = UNIX_TIMESTAMP(now()),
              DelFlag = 0,
              Item1 = '$returnItemId:1:{$lastItemNumber}:1:0:0'
            ";
            $GameDb->query($sql);
           $returnItemNumber = $returnItemNumber -$lastItemNumber;
          }
    }
  }
 
  
  
  
  
}


$sql = "select `cid`,`level` from `mem_chr_magic_book` where `level` >0 ";
$userBookInfo = $GameDb->getArray($sql);

foreach ($userBookInfo as $v) {
        $GameDb->writeLog(json_encode($v), 'ERROR');
        $returnItemId = $bookConfig[$v['level']]["item"];
        $returnItemNumber =  $bookConfig[$v['level']]["number"];
        while($returnItemNumber > 0) {
          if($returnItemNumber > 999 * 5) {
            $sql = "
                select
                        `MailId`
                from
                        `mem_mail` 
                where
                       `SysMailId` = '-200000'
                       and
                       `ReceiveId` = {$v['cid']}
                         and
                         Item1 = '$returnItemId:1:999:1:0:0'
                         and
                        Item2 = '$returnItemId:1:999:1:0:0'
                        and
                        Item3 = '$returnItemId:1:999:1:0:0'
                        and
                        Item4 = '$returnItemId:1:999:1:0:0'
                        and
                        Item5 = '$returnItemId:1:999:1:0:0'
            ";
            if($GameDb->getColumn($sql)>0){
                $returnItemNumber =$returnItemNumber - 999 * 5;
            }else{
                  $sql = "
                    insert into
                      mem_mail
                    set
                    `SysMailId` = '-200000',
                    `SenderName` = '系统',
                    `ReceiveId` = {$v['cid']},
                    `ReceiveName` = '',
                    `MailTitle` = '系统调整补偿',
                    `MailContent` = '系统调整补偿',
                    Extract = 1,
                    reason = 2,
                    SendTime = UNIX_TIMESTAMP(now()),
                    DelFlag = 0,
                    Item1 = '$returnItemId:1:999:1:0:0',
                    Item2 = '$returnItemId:1:999:1:0:0',
                    Item3 = '$returnItemId:1:999:1:0:0',
                    Item4 = '$returnItemId:1:999:1:0:0',
                    Item5 = '$returnItemId:1:999:1:0:0'
                  ";
                   $GameDb->query($sql);
                   $returnItemNumber =$returnItemNumber - 999 * 5;
            }
          }
          else if($returnItemNumber > 999 * 4 && $returnItemNumber <= 999 * 5) {
            $lastItemNumber = $returnItemNumber - 999 * 4;
             $sql = "
                select
                        `MailId`
                from
                        `mem_mail` 
                where
                       `SysMailId` = '-200000'
                       and
                       `ReceiveId` = {$v['cid']}
                         and
                         Item1 = '$returnItemId:1:999:1:0:0'
                         and
                        Item2 = '$returnItemId:1:999:1:0:0'
                        and
                        Item3 = '$returnItemId:1:999:1:0:0'
                        and
                        Item4 = '$returnItemId:1:999:1:0:0'
                        and
                        Item5 = '$returnItemId:1:$lastItemNumber:1:0:0'
            ";
            if($GameDb->getColumn($sql)>0){
                $returnItemNumber =$returnItemNumber - 999 * 4-$lastItemNumber;
            }else{
                $sql = "
                  insert into
                    mem_mail
                  set
                  `SysMailId` = '-200000',
                  `SenderName` = '系统',
                  `ReceiveId` = {$v['cid']},
                  `ReceiveName` = '',
                  `MailTitle` = '系统调整补偿',
                  `MailContent` = '系统调整补偿',
                  Extract = 1,
                  reason = 2,
                  SendTime = UNIX_TIMESTAMP(now()),
                  DelFlag = 0,
                  Item1 = '$returnItemId:1:999:1:0:0',
                  Item2 = '$returnItemId:1:999:1:0:0',
                  Item3 = '$returnItemId:1:999:1:0:0',
                  Item4 = '$returnItemId:1:999:1:0:0',
                  Item5 = '$returnItemId:1:$lastItemNumber:1:0:0'
                ";
                $GameDb->query($sql);
                $returnItemNumber =$returnItemNumber - 999 * 4-$lastItemNumber;
            }    
          }
          else if($returnItemNumber > 999 * 3 && $returnItemNumber <= 999 * 4) {
            $lastItemNumber = $returnItemNumber - 999 * 3;
            $sql = "
                select
                        `MailId`
                from
                        `mem_mail` 
                where
                       `SysMailId` = '-200000'
                       and
                       `ReceiveId` = {$v['cid']}
                         and
                         Item1 = '$returnItemId:1:999:1:0:0'
                         and
                        Item2 = '$returnItemId:1:999:1:0:0'
                        and
                        Item3 = '$returnItemId:1:999:1:0:0'
                        and
                        Item4 = '$returnItemId:1:$lastItemNumber:1:0:0'
            ";
            if($GameDb->getColumn($sql)>0){
                $returnItemNumber =$returnItemNumber - 999 * 3-$lastItemNumber;
            }else{
                    $sql = "
                      insert into
                        mem_mail
                      set
                      `SysMailId` = '-200000',
                      `SenderName` = '系统',
                      `ReceiveId` = {$v['cid']},
                      `ReceiveName` = '',
                      `MailTitle` = '系统调整补偿',
                      `MailContent` = '系统调整补偿',
                      Extract = 1,
                      reason = 2,
                      SendTime = UNIX_TIMESTAMP(now()),
                      DelFlag = 0,
                      Item1 = '$returnItemId:1:999:1:0:0',
                      Item2 = '$returnItemId:1:999:1:0:0',
                      Item3 = '$returnItemId:1:999:1:0:0',
                      Item4 = '$returnItemId:1:$lastItemNumber:1:0:0'
                    ";
                    $GameDb->query($sql);
                    $returnItemNumber =$returnItemNumber - 999 * 3-$lastItemNumber;
            }
          }
          else if($returnItemNumber > 999 * 2 && $returnItemNumber <= 999 * 3) {
            $lastItemNumber = $returnItemNumber - 999 * 2;
            $sql = "
                select
                        `MailId`
                from
                        `mem_mail` 
                where
                       `SysMailId` = '-200000'
                       and
                       `ReceiveId` = {$v['cid']}
                         and
                         Item1 = '$returnItemId:1:999:1:0:0'
                         and
                        Item2 = '$returnItemId:1:999:1:0:0'
                        and
                        Item3 = '$returnItemId:1:$lastItemNumber:1:0:0'
            ";
            if($GameDb->getColumn($sql)>0){
                $returnItemNumber =$returnItemNumber - 999 * 2-$lastItemNumber;
            }else{
                  $sql = "
                    insert into
                      mem_mail
                    set
                    `SysMailId` = '-200000',
                    `SenderName` = '系统',
                    `ReceiveId` = {$v['cid']},
                    `ReceiveName` = '',
                    `MailTitle` = '系统调整补偿',
                    `MailContent` = '系统调整补偿',
                    Extract = 1,
                    reason = 2,
                    SendTime = UNIX_TIMESTAMP(now()),
                    DelFlag = 0,
                    Item1 = '$returnItemId:1:999:1:0:0',
                    Item2 = '$returnItemId:1:999:1:0:0',
                    Item3 = '$returnItemId:1:$lastItemNumber:1:0:0'
                  ";
                  $GameDb->query($sql);
                  $returnItemNumber =$returnItemNumber - 999 * 2-$lastItemNumber;
            }
          }
          else if($returnItemNumber > 999 * 1 && $returnItemNumber <= 999 * 2) {
            $lastItemNumber = $returnItemNumber - 999 * 1;
            $sql = "
                select
                        `MailId`
                from
                        `mem_mail` 
                where
                       `SysMailId` = '-200000'
                       and
                       `ReceiveId` = {$v['cid']}
                         and
                         Item1 = '$returnItemId:1:999:1:0:0'
                         and
                         Item2 = '$returnItemId:1:$lastItemNumber:1:0:0'
            ";
            if($GameDb->getColumn($sql)>0){
               $returnItemNumber =$returnItemNumber - 999 * 1-$lastItemNumber;
            }else{
                $sql = "
                  insert into
                    mem_mail
                  set
                  `SysMailId` = '-200000',
                  `SenderName` = '系统',
                  `ReceiveId` = {$v['cid']},
                  `ReceiveName` = '',
                  `MailTitle` = '系统调整补偿',
                  `MailContent` = '系统调整补偿',
                  Extract = 1,
                  reason = 2,
                  SendTime = UNIX_TIMESTAMP(now()),
                  DelFlag = 0,
                  Item1 = '$returnItemId:1:999:1:0:0',
                  Item2 = '$returnItemId:1:$lastItemNumber:1:0:0'
                ";
                $GameDb->query($sql);
                $returnItemNumber =$returnItemNumber - 999 * 1-$lastItemNumber;
            }
          }
          else if($returnItemNumber > 999 * 0 && $returnItemNumber <= 999 * 1) {
            $lastItemNumber = $returnItemNumber - 999 * 0;
            $sql = "
                select
                        `MailId`
                from
                        `mem_mail` 
                where
                       `SysMailId` = '-200000'
                       and
                       `ReceiveId` = {$v['cid']}
                         and
                         Item1 = '$returnItemId:1:{$lastItemNumber}:1:0:0'
            ";
            if($GameDb->getColumn($sql)>0){
               $returnItemNumber =$returnItemNumber -$returnItemNumber;
            }else{
                $sql = "
                  insert into
                    mem_mail
                  set
                  `SysMailId` = '-200000',
                  `SenderName` = '系统',
                  `ReceiveId` = {$v['cid']},
                  `ReceiveName` = '',
                  `MailTitle` = '系统调整补偿',
                  `MailContent` = '系统调整补偿',
                  Extract = 1,
                  reason = 2,
                  SendTime = UNIX_TIMESTAMP(now()),
                  DelFlag = 0,
                  Item1 = '$returnItemId:1:{$lastItemNumber}:1:0:0'
                ";
                $GameDb->query($sql);
                $returnItemNumber =$returnItemNumber -$returnItemNumber;
            }
          }
    }
  }
 
 
$sql = "select `cid`,`star` from `mem_chr_pet` where `star`>0";
$userPetInfo = $GameDb->getArray($sql); 

foreach ($userPetInfo as $v) {
        $GameDb->writeLog(json_encode($v), 'ERROR');
        
        $returnItemId = $petConfig[$v['star']]["item"];
        $returnItemNumber =  $petConfig[$v['star']]["number"];
        while($returnItemNumber > 0) {
          if($returnItemNumber > 999 * 5) {
            $sql = "
                select
                        `MailId`
                from
                        `mem_mail` 
                where
                       `SysMailId` = '-200000'
                       and
                       `ReceiveId` = {$v['cid']}
                         and
                         Item1 = '$returnItemId:1:999:1:0:0'
                         and
                        Item2 = '$returnItemId:1:999:1:0:0'
                        and
                        Item3 = '$returnItemId:1:999:1:0:0'
                        and
                        Item4 = '$returnItemId:1:999:1:0:0'
                        and
                        Item5 = '$returnItemId:1:999:1:0:0'
            ";
            if($GameDb->getColumn($sql)>0){
                $returnItemNumber =$returnItemNumber - 999 * 5;
            }else{
                $sql = "
                  insert into
                    mem_mail
                  set
                  `SysMailId` = '-200000',
                  `SenderName` = '系统',
                  `ReceiveId` = {$v['cid']},
                  `ReceiveName` = '',
                  `MailTitle` = '系统调整补偿',
                  `MailContent` = '系统调整补偿',
                  Extract = 1,
                  reason = 2,
                  SendTime = UNIX_TIMESTAMP(now()),
                  DelFlag = 0,
                  Item1 = '$returnItemId:1:999:1:0:0',
                  Item2 = '$returnItemId:1:999:1:0:0',
                  Item3 = '$returnItemId:1:999:1:0:0',
                  Item4 = '$returnItemId:1:999:1:0:0',
                  Item5 = '$returnItemId:1:999:1:0:0'
                ";
                 $GameDb->query($sql);
                 $returnItemNumber =$returnItemNumber - 999 * 5;
            }
          }
          else if($returnItemNumber > 999 * 4 && $returnItemNumber <= 999 * 5) {
            $lastItemNumber = $returnItemNumber - 999 * 4;
            $sql = "
               select
                        `MailId`
                from
                        `mem_mail` 
                where
                       `SysMailId` = '-200000'
                       and
                       `ReceiveId` = {$v['cid']}
                         and
                         Item1 = '$returnItemId:1:999:1:0:0'
                         and
                        Item2 = '$returnItemId:1:999:1:0:0'
                        and
                        Item3 = '$returnItemId:1:999:1:0:0'
                        and
                        Item4 = '$returnItemId:1:999:1:0:0'
                        and
                        Item5 = '$returnItemId:1:$lastItemNumber:1:0:0'
            ";
            if($GameDb->getColumn($sql)>0){
                 $returnItemNumber =$returnItemNumber - 999 * 4-$lastItemNumber;
            }else{
                $sql = "
                  insert into
                    mem_mail
                  set
                  `SysMailId` = '-200000',
                  `SenderName` = '系统',
                  `ReceiveId` = {$v['cid']},
                  `ReceiveName` = '',
                  `MailTitle` = '系统调整补偿',
                  `MailContent` = '系统调整补偿',
                  Extract = 1,
                  reason = 2,
                  SendTime = UNIX_TIMESTAMP(now()),
                  DelFlag = 0,
                  Item1 = '$returnItemId:1:999:1:0:0',
                  Item2 = '$returnItemId:1:999:1:0:0',
                  Item3 = '$returnItemId:1:999:1:0:0',
                  Item4 = '$returnItemId:1:999:1:0:0',
                  Item5 = '$returnItemId:1:$lastItemNumber:1:0:0'
                ";
                $GameDb->query($sql);
                $returnItemNumber =$returnItemNumber - 999 * 4-$lastItemNumber;
            }
          }
          else if($returnItemNumber > 999 * 3 && $returnItemNumber <= 999 * 4) {
            $lastItemNumber = $returnItemNumber - 999 * 3;
            $sql = "
                select
                        `MailId`
                from
                        `mem_mail` 
                where
                       `SysMailId` = '-200000'
                       and
                       `ReceiveId` = {$v['cid']}
                         and
                         Item1 = '$returnItemId:1:999:1:0:0'
                         and
                        Item2 = '$returnItemId:1:999:1:0:0'
                        and
                        Item3 = '$returnItemId:1:999:1:0:0'
                        and
                        Item4 = '$returnItemId:1:$lastItemNumber:1:0:0'
            ";
            if($GameDb->getColumn($sql)>0){
                 $returnItemNumber =$returnItemNumber - 999 * 3-$lastItemNumber;
            }else{
                  $sql = "
                    insert into
                      mem_mail
                    set
                    `SysMailId` = '-200000',
                    `SenderName` = '系统',
                    `ReceiveId` = {$v['cid']},
                    `ReceiveName` = '',
                    `MailTitle` = '系统调整补偿',
                    `MailContent` = '系统调整补偿',
                    Extract = 1,
                    reason = 2,
                    SendTime = UNIX_TIMESTAMP(now()),
                    DelFlag = 0,
                    Item1 = '$returnItemId:1:999:1:0:0',
                    Item2 = '$returnItemId:1:999:1:0:0',
                    Item3 = '$returnItemId:1:999:1:0:0',
                    Item4 = '$returnItemId:1:$lastItemNumber:1:0:0'
                  ";
                  $GameDb->query($sql);
                  $returnItemNumber =$returnItemNumber - 999 * 3-$lastItemNumber;
            }
          }
          else if($returnItemNumber > 999 * 2 && $returnItemNumber <= 999 * 3) {
            $lastItemNumber = $returnItemNumber - 999 * 2;
            $sql = "
                select
                        `MailId`
                from
                        `mem_mail` 
                where
                       `SysMailId` = '-200000'
                       and
                       `ReceiveId` = {$v['cid']}
                         and
                         Item1 = '$returnItemId:1:999:1:0:0'
                         and
                        Item2 = '$returnItemId:1:999:1:0:0'
                        and
                        Item3 = '$returnItemId:1:$lastItemNumber:1:0:0'
            ";
            if($GameDb->getColumn($sql)>0){
                $returnItemNumber =$returnItemNumber - 999 * 2-$lastItemNumber;
            }else{
                $sql = "
                  insert into
                    mem_mail
                  set
                  `SysMailId` = '-200000',
                  `SenderName` = '系统',
                  `ReceiveId` = {$v['cid']},
                  `ReceiveName` = '',
                  `MailTitle` = '系统调整补偿',
                  `MailContent` = '系统调整补偿',
                  Extract = 1,
                  reason = 2,
                  SendTime = UNIX_TIMESTAMP(now()),
                  DelFlag = 0,
                  Item1 = '$returnItemId:1:999:1:0:0',
                  Item2 = '$returnItemId:1:999:1:0:0',
                  Item3 = '$returnItemId:1:$lastItemNumber:1:0:0'
                ";
                $GameDb->query($sql);
                $returnItemNumber =$returnItemNumber - 999 * 2-$lastItemNumber;
            }
          }
          else if($returnItemNumber > 999 * 1 && $returnItemNumber <= 999 * 2) {
            $lastItemNumber = $returnItemNumber - 999 * 1;
            $sql = "
                select
                        `MailId`
                from
                        `mem_mail` 
                where
                       `SysMailId` = '-200000'
                       and
                       `ReceiveId` = {$v['cid']}
                         and
                         Item1 = '$returnItemId:1:999:1:0:0'
                         and
                        Item2 = '$returnItemId:1:$lastItemNumber:1:0:0'
            ";
            if($GameDb->getColumn($sql)>0){
                $returnItemNumber =$returnItemNumber - 999 * 1-$lastItemNumber;
            }else{
                $sql = "
                  insert into
                    mem_mail
                  set
                  `SysMailId` = '-200000',
                  `SenderName` = '系统',
                  `ReceiveId` = {$v['cid']},
                  `ReceiveName` = '',
                  `MailTitle` = '系统调整补偿',
                  `MailContent` = '系统调整补偿',
                  Extract = 1,
                  reason = 2,
                  SendTime = UNIX_TIMESTAMP(now()),
                  DelFlag = 0,
                  Item1 = '$returnItemId:1:999:1:0:0',
                  Item2 = '$returnItemId:1:$lastItemNumber:1:0:0'
                ";
                $GameDb->query($sql);
                $returnItemNumber =$returnItemNumber - 999 * 1-$lastItemNumber;
            }
          }
          else if($returnItemNumber > 999 * 0 && $returnItemNumber <= 999 * 1) {
             $lastItemNumber = $returnItemNumber - 999 * 0;
            $sql = "
                select
                        `MailId`
                from
                        `mem_mail` 
                where
                       `SysMailId` = '-200000'
                       and
                       `ReceiveId` = {$v['cid']}
                         and
                         Item1 = '$returnItemId:1:{$lastItemNumber}:1:0:0'
            ";
            if($GameDb->getColumn($sql)>0){
                $returnItemNumber =$returnItemNumber -$returnItemNumber;
            }else{
                  $sql = "
                    insert into
                      mem_mail
                    set
                    `SysMailId` = '-200000',
                    `SenderName` = '系统',
                    `ReceiveId` = {$v['cid']},
                    `ReceiveName` = '',
                    `MailTitle` = '系统调整补偿',
                    `MailContent` = '系统调整补偿',
                    Extract = 1,
                    reason = 2,
                    SendTime = UNIX_TIMESTAMP(now()),
                    DelFlag = 0,
                    Item1 = '$returnItemId:1:{$lastItemNumber}:1:0:0'
                  ";
                  $GameDb->query($sql);
                  $returnItemNumber =$returnItemNumber -$lastItemNumber;
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
	
//	sleep(30);
//}