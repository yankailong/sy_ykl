<?php
set_time_limit(0);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');

define('LOCK_FILE', dirname(__FILE__).'/lock/sendMailDaemon.lock');
define('LOG_LEVEL', 'DEBUG');

$LogFile = dirname(__FILE__).'/log/sendMailDaemon'.date('Y.m.d').'.log';

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
	$LogFile = dirname(__FILE__).'/log/sendMailDaemon'.date('Y.m.d').'.log';
  	$Log->setLogFile($LogFile);
	try {
		$sql = " 
			select
				a.`id`,
				a.`applyId`,
				e.`ipAddress`,
				c.`databaseName`,
                                c.`areaNum`,
				b.`roleName`,
				b.`senderName`,
                                b.`sendDatetime`,
				b.`title`,
				b.`content`
			from
				`t_data_send_mail_game_area` a
			left join
				`t_data_send_mail` b
			on
				a.`applyId` = b.`applyId` 
			left join
				`t_data_game_area` c
			on
				a.`gameAreaId` = c.`gameAreaId`
			left join
				`t_data_server_ip` d
			on
				c.`serverId` = d.`serverId`
			left join
				`t_data_ip` e
			on
				d.`ipId` = e.`ipId`
			left join
				`t_cfg_ip_type` f
			on
				e.`ipTypeId` = f.`ipTypeId`
			where
				b.`status` = 0
				and
                a.`status` = 0
                and
				b.`sendDatetime` <= now()
				and
				f.`isDefault` = 1
                and 
                c.`status` = 4
		";
		$sendMailArray = $GmDb->getArray($sql);
                $GameDb = new Zw_Mysql();
                $GameDb->setLog($Log); 
                
		foreach ($sendMailArray as $k1 => $v1) {
			$GameDb->connect($v1['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $v1['databaseName']);
			
			
			
			$sql = "
				select
					`itemType`,
					`itemId`,
                    `itemCount`,
					`type`
				from
					`t_data_send_mail_attachment` 
				where
					`applyId` = '{$v1['applyId']}'
			";
			
			$itemArray = $GmDb->getArray($sql);
                        
                        if(strpos($v1['roleName'], ",")===false && $v1['roleName']!='全服' ){
                          $whereCondition = " `name` = '{$v1['roleName']}'";
                        }else if(strpos($v1['roleName'], ",")){
                            $roleNameArray = explode(",", $v1['roleName']);
                            $whereCondition ="`name` is null ";
                            for($i=0;$i<count($roleNameArray);$i++){
                               $whereCondition.=" or `name` = '{$roleNameArray[$i]}'";
                            }
                           
                        }else{
                          $whereCondition = "`sid` = '{$v1['areaNum']}' "; 
                        }
                        if( count($itemArray) === 0 ) {
                          $sql = "
                                  insert into
                                          `mem_mail`
                                  (
                                          `SysMailId`,
                                          `SenderName`,
                                          `ReceiveId`,
                                          `ReceiveName`,
                                          `MailTitle`,
                                          `MailContent`,
                                          `reason`,
                                          `SendTime`,
                                          `DelFlag`
                                  )
                                  select
                                          '-{$v1['applyId']}',
                                          '{$v1['senderName']}',
                                          `cid`,
                                          `name`,
                                          '{$v1['title']}',
                                          '{$v1['content']}',
                                          '2',
                                           UNIX_TIMESTAMP('{$v1['sendDatetime']}'),
                                          '0'
                                  from
                                          `mem_character` 
                                  where
                                          {$whereCondition}
                          ";
                          $GameDb->query($sql);
                        }else {
                              for($i = 0; $i < count($itemArray); $i = $i + 6 ) {
                                      $columns = "`SysMailId`,`SenderName`,`ReceiveId`, `ReceiveName`, `MailTitle`, `MailContent`,`Extract`, `reason`,`SendTime`, `DelFlag`";
                                      $values = "'-{$v1['applyId']}','{$v1['senderName']}', `cid`, `name`,'{$v1['title']}', '{$v1['content']}', '1','2', UNIX_TIMESTAMP('{$v1['sendDatetime']}'), '0'";

                                      for($j = 1; $j <= 6; $j++) {
                                              $columns .= ",`Item{$j}`";
                                              $values .= ",'{$itemArray[$i+$j-1]['itemId']}:{$itemArray[$i+$j-1]['itemType']}:{$itemArray[$i+$j-1]['itemCount']}:{$itemArray[$i+$j-1]['type']}:0:0'";
  
                                              if($i + $j == count($itemArray)) {
                                                      break; 
                                              }
                                      }

                                      $sql = "
                                              insert into
                                                    `mem_mail`
                                            (
                                                    {$columns}
                                            )
                                            select
                                                    {$values}
                                            from
                                                    `mem_character`
                                            where
                                                    {$whereCondition}
                                      ";
                                      $GameDb->query($sql);
                              }
                        }
                        $GameDb->close();
                        $sql = "
                                update 
                                       `t_data_send_mail_game_area`
                                set 
                                        `status` = 1
                                where
                                        `applyId` = '{$v1['applyId']}'
                        ";
                        $GmDb->query($sql);
		}
                $sql = "
                     select
				a.`id`,
				a.`applyId`,
				e.`ipAddress`,
				c.`databaseName`,
                c.`areaNum`,
				b.`roleName`,
                b.`sendDatetime`,
				b.`senderName`,
				b.`title`,
				b.`content`
			from
				`t_data_send_mail_game_area` a
			left join
				`t_data_send_mail` b
			on
				a.`applyId` = b.`applyId`
			left join
				`t_data_game_area` c
			on
				a.`gameAreaId` = c.`gameAreaId`
			left join
				`t_data_server_ip` d
			on
				c.`serverId` = d.`serverId`
			left join
				`t_data_ip` e
			on
				d.`ipId` = e.`ipId`
			left join
				`t_cfg_ip_type` f
			on
				e.`ipTypeId` = f.`ipTypeId`
			where
				b.`status` = 0
                and
                a.`status` = 0
				and
				b.`sendDatetime` <= now()
				and
				f.`isDefault` = 1
                ";
                //223行，判断服务器是否开启，4为开启
                // and 
                // c.`status` = 4
                $delMailArray = $GmDb->getArray($sql);
                foreach ($delMailArray as $k2 => $v2) {
                  $GameDb->connect($v2['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $v2['databaseName']);
                      $sql = "

                                select 
                                       count(*)
                                from 
                                        mem_mail
                                where
                                        `SysMailId` = '-{$v2['applyId']}'
                                        and
                                        `DelFlag` = 0
                        ";
                      if($GameDb->getColumn($sql)==='0'){
                        $GameDb->close(); 
                      }else{
                      
                        $sql = "

                                update 
                                       `mem_mail`
                                set 
                                        `DelFlag` = 1,
                                        `DelTime` = unix_timestamp()
                                where
                                        `SysMailId` = '-{$v2['applyId']}'
                        ";
                            $GameDb->query($sql);
                            $GameDb->close(); 
                      }
                      $sql = "

                                update 
                                       `t_data_send_mail`
                                set 
                                        `status` = 2
                                where
                                        `applyId` = '{$v2['applyId']}'
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
	
	sleep(30);
}