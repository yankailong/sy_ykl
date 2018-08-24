<?php
class Server extends MY_Controller
{
	public function manage() {
                
                $errno = 0;
		try {
                        $key = 'hAnZawXZ75PHR4BkiG0vLAKHoBGpiFIP';
                        $operatorFlag = $this->param->getParam('pkey', array('method' => 'string','emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get');
			$sid = $this->param->getParam('sid',  array('method' => 'int', 'min' => 1,'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get');
                        $serverIp = $this->param->getParam('serverIp',  array('method' => 'string','emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get');
                        $sign = $this->param->getParam('sign', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get');
                        $localSign = md5("{$operatorFlag}{$sid}{$serverIp}{$key}");
			$this->gmDatabase->closeAutoCommit();
			if($sign <> $localSign) {
				throw new Exception('校验签名错误',1);
			}

                        $sql="
                            select
                                  `operatorId`
                            from
                                  `t_data_operator`
                            where
                                  `operatorFlag` = '{$operatorFlag}'      
                        ";
                        $operatorId = $this->gmDatabase->getColumn($sql);
                        if($operatorId === false){
                                throw new Exception("运营商不存在", 1);
                        }

                        $sql = "
                                insert into
                                        `t_data_ip`
                                (
                                        `ipAddress`,
                                        `ipTypeId`
                                )
                                value
                                (
                                        '{$serverIp}',
                                        '2'
                                )
                                on duplicate key update
                                        `ipTypeId` = 2
                        ";
                        $this->gmDatabase->query($sql);
                        $ipId = $this->gmDatabase->getLastInsertId();
                        
                        if($ipId) {
                                $sql = "
                                        insert into
                                                `t_data_server`
                                        (
                                                `serverName`,
                                                `serverTypeId`,
                                                `maxGameAreaNum`,
                                                `status`
                                        )
                                        value
                                        (
                                                '{$serverIp}',
                                                '3',
                                                '5',
                                                '1'
                                        )
                                ";
                                $this->gmDatabase->query($sql);
                                $serverId = $this->gmDatabase->getLastInsertId();

                                $sql = "
                                        insert into
                                                `t_data_server_ip`
                                        (
                                                `serverId`,
                                                `ipId`
                                        )
                                        value
                                        (
                                                '{$serverId}',
                                                '{$ipId}'
                                        )
                                ";
                                $this->gmDatabase->query($sql);
                        }else{
                                $sql="
                                        select
                                              `serverId`
                                        from
                                              `t_data_server`
                                        where
                                              `serverName` = '{$serverIp}'      
                                ";
                                $serverId = $this->gmDatabase->getColumn($sql);    
                        }
                        $dbName = "syz_game".substr(strval($sid+10000),1,4);
			$sql="
                                insert into
					`t_data_game_area`
                                set
					`operatorId` = '{$operatorId}',
					`areaNum` = '{$sid}',
					`serverId` = '{$serverId}',
					`databaseName` = '{$dbName}',
					`status` = '4',
					`openDatetime` = '2030-12-31 00:00:00'
                                on duplicate key update
                                        `databaseName` = '{$dbName}',
                                        `serverId` = '{$serverId}' 
                        ";
                        if(($this->gmDatabase->query($sql)===false)){
                          throw new Exception("插入游戏区信息失败",1);
                        }
                        $loginServerPort =8000+$sid;
                        if($operatorFlag=='w360' && $sid==9998){
                          $txt = '<?php'."\n".'$operatorId ='."{$operatorId};\n".'$loginServerAddress ='."\"{$serverIp}\";\n".'$loginServerPort ='."\"{$loginServerPort}\";\n".'$environment ="test";'."\n\n".'$dbPort =51888;'."\n".'$dbServer ='.'"{$loginServerAddress}:{$dbPort}";'."\n".'$dbUsername ="gameop_dev";'."\n".'$dbPassword ="eM1oMokz1TQQD3afWuRs";'."\n".'$dbName ='."\"{$dbName}\";";
                        }else if($operatorFlag=='w360' && $sid !=9998){
                          $txt = '<?php'."\n".'$operatorId ='."{$operatorId};\n".'$loginServerAddress ='."\"{$serverIp}\";\n".'$loginServerPort ='."\"{$loginServerPort}\";\n".'$environment ="w360";'."\n\n".'$dbPort =51888;'."\n".'$dbServer ='.'"{$loginServerAddress}:{$dbPort}";'."\n".'$dbUsername ="gameop_dev";'."\n".'$dbPassword ="eM1oMokz1TQQD3afWuRs";'."\n".'$dbName ='."\"{$dbName}\";";
                        }else if($operatorFlag=='youxi'){
                          $txt = '<?php'."\n".'$operatorId ='."{$operatorId};\n".'$loginServerAddress ='."\"{$serverIp}\";\n".'$loginServerPort ='."\"{$loginServerPort}\";\n".'$environment ="w360";'."\n\n".'$dbPort =51888;'."\n".'$dbServer ='.'"{$loginServerAddress}:{$dbPort}";'."\n".'$dbUsername ="gameop_dev";'."\n".'$dbPassword ="eM1oMokz1TQQD3afWuRs";'."\n".'$dbName ='."\"{$dbName}\";";
                        }else if($operatorFlag=='191game'){
                          $txt = '<?php'."\n".'$operatorId ='."{$operatorId};\n".'$loginServerAddress ='."\"{$serverIp}\";\n".'$loginServerPort ='."\"{$loginServerPort}\";\n".'$environment ="191game";'."\n\n".'$dbPort =51888;'."\n".'$dbServer ='.'"{$loginServerAddress}:{$dbPort}";'."\n".'$dbUsername ="gameop_dev";'."\n".'$dbPassword ="eM1oMokz1TQQD3afWuRs";'."\n".'$dbName ='."\"{$dbName}\";";
                        }else{
                          $txt = '<?php'."\n".'$operatorId ='."{$operatorId};\n".'$loginServerAddress ='."\"{$serverIp}\";\n".'$loginServerPort ='."\"{$loginServerPort}\";\n".'$environment ="wbly";'."\n\n".'$dbPort =51888;'."\n".'$dbServer ='.'"{$loginServerAddress}:{$dbPort}";'."\n".'$dbUsername ="gameop_dev";'."\n".'$dbPassword ="eM1oMokz1TQQD3afWuRs";'."\n".'$dbName ='."\"{$dbName}\";";
                        }
			if(!file_exists("../interface/config/{$operatorFlag}")) {
                            mkdir ("../interface/config/{$operatorFlag}",0755,true);
                        }
                        $myfile = fopen("../interface/config/{$operatorFlag}/{$sid}.inc", "w");
                        if($myfile){
                              fwrite($myfile, $txt);
                              fclose($myfile);
                        }else{
                              throw new Exception("写inc文件失败",1);
                        }
                        $this->gmDatabase->commit();
		}
		
		catch(My_Mysql_Exception $e) {
                        $errno = 1;
                        $this->gmDatabase->rollback();
                        log_message('debug', $e->getMessage());
                }
                catch(MY_Param_Exception $e) {
                        $errno = 1;
                        log_message('debug', $e->getMessage());
                }
		catch(Exception $e) {
			$errno =1;
                        $this->gmDatabase->rollback();
                        log_message('debug', $e->getMessage());
		}
                $this->gmDatabase->openAutoCommit();
                echo $errno;
	}
}