<?php
class CreateProcess extends MY_Controller
{
	public function logInfo () {
                $errorCode = 0;
		try {
			$key = '2CE9BD751DE6A67C';
			$uid =  $this->param->getParam('uid', array('method' => 'string',  'emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
            $operatorFlag =  $this->param->getParam('platform',  array('method' => 'string','emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
            $sid = $this->param->getParam('sid',  array('method' => 'string','emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
            $isWeiDuan = $this->param->getParam('isWeiDuan',  array('method' => 'int','min' => 0,'emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
            $process = $this->param->getParam('process',  array('method' => 'int','min' => 1,'emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
            $flag = $this->param->getParam('flag', array('method' => 'string','maxLength' => 64,'emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
            
           
            $localSign = "{$uid}{$sid}{$key}";
            log_message( 'debug',"加密前localSign：{$localSign}");
            $localSign =md5($localSign);
            log_message( 'debug',"加密后localSign：{$localSign}");
			if($localSign <> $flag) {
                  throw new Exception("签名错误",3);
            }
            $sql="
                    select
                            a.`gameAreaId`,a.`operatorId`
                    from
                            `t_data_game_area` a
                    left join
                            `t_data_operator`b
                    on
                            a.`operatorId` = b.`operatorId`
                    where
                            b.`operatorFlag` = '{$operatorFlag}'
                            and
                            a.`areaNum` = '{$sid}'
            ";
            $gameAreaId = $this->gmDatabase->getRow($sql);
            $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
			$sql="
                    insert into 
                          `log_create_process` 
                    (
                          `uid`,
                          `process`,
                          `isWeiduan`,
                          `time`
                    ) 
                    values 
                    (
                          '{$uid}',
                          '{$process}',
                          '{$isWeiDuan}',
                          unix_timestamp(now())
                    )
            ";
            $this->gameDatabase->query($sql);
 
        }
        catch(MY_Mysql_Exception $e) {
                $errorCode = 4;
                log_message('debug', $e->getMessage());
        }
        catch(MY_Param_Exception $e) {
                $errorCode = 3;
                log_message('debug', $e->getMessage());
        }
		catch(Exception $e) {
			$errorCode = $e->getCode();
            log_message('debug', $e->getMessage());
		}
	}
}


	
	
	
        
