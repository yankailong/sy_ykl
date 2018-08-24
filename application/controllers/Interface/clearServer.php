<?php
class ClearServer extends MY_Controller
{
	public function manage() {
                
                $errno = 0;
		try {
                        $key = 'hAnZawXZ75PHR4BkiG0vLAKHoBGpiFIP';
                        $operatorFlag = $this->param->getParam('pkey', array('method' => 'string','emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get');
			$sid = $this->param->getParam('sid',  array('method' => 'int', 'min' => 1,'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get');
                        $sign = $this->param->getParam('sign', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get');
                        $localSign = md5("{$operatorFlag}{$sid}{$key}");
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
                                update
                                        `t_data_game_area`
                                set
                                        `status` = 7,
                                        `openDatetime` = '2030-12-31 00:00:00'
                                where
                                        `operatorId` = '{$operatorId}'
                                        and
                                        `areaNum` = '{$sid}'
                        ";
                        $this->gmDatabase->query($sql);
                        
		}
		
		catch(My_Mysql_Exception $e) {
                        $errno = 1;
                        log_message('debug', $e->getMessage());
                }
                catch(MY_Param_Exception $e) {
                        $errno = 1;
                        log_message('debug', $e->getMessage());
                }
		catch(Exception $e) {
			$errno =1;
                        log_message('debug', $e->getMessage());
		}
                echo $errno;
	}
}