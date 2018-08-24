<?php
class Combined extends MY_Controller
{
	public function manage() {
                
                $errno = 0;
		try {
                        $key = 'hAnZawXZ75PHR4BkiG0vLAKHoBGpiFIP';
                        $operatorFlag = $this->param->getParam('pkey', array('method' => 'string','emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get');
			$sid = $this->param->getParam('sid',  array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get');
                        $target = $this->param->getParam('target',  array('method' => 'int', 'min' => 1,'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get');
                        $sign = $this->param->getParam('sign', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get');
                        $localSign = md5("{$operatorFlag}{$sid}{$target}{$key}");
			$this->gmDatabase->closeAutoCommit();
			if($sign <> $localSign) {
				throw new Exception('校验签名错误',1);
			}
			$time = time();
                        //运营商是否存在
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
                        //目标服信息
                        $sidArray = explode(",", $sid);
                        foreach($sidArray as $k=>$val){
                          if($val == $target){
                            unset($sidArray[$k]);  
                          }
                        }
                        
                        $sidArray = array_values($sidArray);
                        //从sid里删除target
                        $sql = "
                                select
                                      `serverId`,`databaseName`
                                from
                                      `t_data_game_area` 
                                where
                                      `areaNum` = '{$target}' 
                                       and
                                      `operatorId` = '{$operatorId}'
                        ";
                        $targetInfo = $this->gmDatabase->getRow($sql);
                        //修改被合并服信息
                        for ($i=0; $i<count($sidArray);$i++){
                            $sql = "
                                    select
                                          `databaseName`
                                    from
                                          `t_data_game_area` 
                                    where
                                          `areaNum` = '{$sidArray[$i]}' 
                                           and
                                          `operatorId` = '{$operatorId}'
                            ";
                            $databaseName =   $this->gmDatabase->getColumn($sql);
                            $sql = "
                                    select
                                          `areaNum`
                                    from
                                          `t_data_game_area` 
                                    where
                                          `databaseName` = '{$databaseName}' 
                                           and
                                          `operatorId` = '{$operatorId}'
                            ";
                            $ishefu =  $this->gmDatabase->getArray($sql);
                            if(count($ishefu) == 1){
                                  $sql="
                                        update
                                                `t_data_game_area`
                                        set
                                                `serverId` = '{$targetInfo['serverId']}',
                                                `databaseName` = '{$targetInfo['databaseName']}',
                                                `mergeDatetime` = from_unixtime('{$time}')
                                        where
                                                `areaNum` = '{$sidArray[$i]}'    
                                                and
                                                `operatorId` = '{$operatorId}'
                                  ";      
                                  $this->gmDatabase->query($sql);    
                            }else{
                                for($j = 0;$j<count($ishefu);$j++){
                                    $sql="
                                          update
                                                  `t_data_game_area`
                                          set
                                                  `serverId` = '{$targetInfo['serverId']}',
                                                  `databaseName` = '{$targetInfo['databaseName']}',
                                                  `mergeDatetime` = from_unixtime('{$time}')
                                          where
                                                  `areaNum` = '{$ishefu[$j]['areaNum']}'    
                                                  and
                                                  `operatorId` = '{$operatorId}'
                                    ";      
                                    $this->gmDatabase->query($sql);    
                                    $sid = $sid.",".$ishefu[$j]['areaNum'];
                                }
                            }
                        }
                        log_message('debug', $sid);
                        $sidArray = explode(",", $sid);
                        $sidArray = array_unique($sidArray);
                        $sidArray = array_values($sidArray);
                        //修改inc文件
			if(!file_exists("../interface/config/{$operatorFlag}")) {
                            mkdir ("../interface/config/{$operatorFlag}",0755,true);
                        }
                        for ($i=0; $i<count($sidArray);$i++){
                            if($sidArray[$i] != $target){
                                $file = "../interface/config/{$operatorFlag}/{$sidArray[$i]}.inc"; 
                                $result = @unlink ($file); 
                                $fileTarget = "../interface/config/{$operatorFlag}/{$target}.inc"; 
                                $newfile = "../interface/config/{$operatorFlag}/{$sidArray[$i]}.inc"; 
                                $result = copy($fileTarget, $newfile); 
                            }
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