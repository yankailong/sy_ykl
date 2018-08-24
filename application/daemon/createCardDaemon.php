<?php
set_time_limit(0);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');


define('LOCK_FILE', dirname(__FILE__).'/lock/createCardDaemon.lock');
define('LOG_LEVEL', 'DEBUG');

$LogFile = dirname(__FILE__).'/log/createCardDaemon'.date('Y.m.d').'.log';

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

while(1)
{
	$LogFile = dirname(__FILE__).'/log/createCardDaemon'.date('Y.m.d').'.log';
	$Log->setLogFile($LogFile);
	try{
            $sql = "
                    select
                            `cardId`,
                            `count`,
                            `bit`
                    from
                            `t_data_card_apply`
                    where
                            `status` = 1
                    limit
                            1
            ";

            if(!(($row = $GmDb->getRow($sql)) === false)){
                    $cardApplyId = $row['cardId'];
                    $cardNum = $row['count'];
                    $cardSerialLength = $row['bit'];
                    $cardSerialArray = array();

                    unset($row);

                    $Log->write("开始处理{$cardApplyId}号申请", 'DEBUG');
                    $Log->write("卡片数量：{$cardNum}", 'DEBUG');



                    for($i = 0 ; $i < $cardNum ; $i++)
                    {
                      try{
                              $cardSerial = genCardSerial($cardSerialLength);
                              if($cardSerial =='AEkPJBHkkzr06Xal' || $cardSerial =='tEHwV3VJnDgB4WaO' || $cardSerial == 'lQg5mm4gbgFg6rPc'){
                                  $cardNum++;
                                  continue;
                              }else{
                                    $sql = "
                                            insert  into
                                                    `t_data_game_code`
                                            (
                                                    `code`,
                                                    `cardId`,
                                                    `flag`
                                            )
                                            value
                                            (
                                                    '{$cardSerial}',
                                                    '{$cardApplyId}',
                                                    '1'
                                            )
                                    ";
                                    $GmDb->query($sql);
                              }
                      }
                      catch(Zw_Mysql_Exception $e){
                          if($e->getCode()===1062){
                              $cardNum++;
                              continue;
                          }
                      }
                    }

                    $sql = "
                            update
                                    `t_data_card_apply`
                            set
                                    `status` = '2'
                            where
                                    `cardId` = '{$cardApplyId}'
                            ";

                    $GmDb->query($sql);
            }
        }
        catch(Zw_Mysql_Exception $e) {
                $Log->write($e->getMessage(), 'ERROR');
		$Log->write('数据库错误', 'ERROR');
	}
	catch(Exception $e) {
		$Log->write('系统错误', 'ERROR');
	}
	sleep(5);
}




function genCardSerial($cardSerialLength){
	$cardSerial = '';
	$baseString = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz';
	
	for($i = 0 ; $i < $cardSerialLength ; $i++){
		$cardSerial .= substr($baseString, rand(0, strlen($baseString)-1), 1);
	}
	
	return $cardSerial;
}