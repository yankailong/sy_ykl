<?php
class PayRank extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Pay->PayRank->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Pay/');
		log_message('debug', '=====调用Pay->PayRank->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Pay/payRank.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Pay->PayRank->getListData接口=====');
		$this->verifyPrivilege();
		
		try{
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1)); 
            $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);

			$startDateTime = $this->param->getParam('startDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$endDateTime = $this->param->getParam('endDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
	
			$this->initGameAreaInfo($operatorId,$gameAreaId);

			$sql ="
                set @i := 0; 
        	";

            $this->gameDatabase->query($sql);                 
			$sql = "
				select
					<selectColumns>

					from        
						`pay_log` 
					
			";
			
			if($startDateTime) {
				$sql .= " and `time` >= unix_timestamp('{$startDateTime}')";
			}
			
			if($endDateTime) {
				$sql .= " and `time` <= unix_timestamp('{$endDateTime}')"; 
			}
			$sql.='group by `cid` order by sum(amount) desc';
                            
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			// $this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "
					@i := @i + 1 as `rank`,`cid`,`name`,sum(amount) as `gold`,`level`", $sql);

			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			
			// $this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
			
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
            $this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        
		}
		
		catch(MY_Param_Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		catch(MY_Mysql_Exception $e) {
			$this->setErrorCode(1);
		}
		
		catch(Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		$this->returnJson();
		log_message('debug', '=====调用Pay->PayRank->getListData接口结束=====');
	}
    public function export() {
		log_message('debug', '=====开始调用Pay->PayRank->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
                
		try {
            $fileName = "payRank.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
                        
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get');
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get', true);
			$account = $this->param->getParam('account', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get', true);
			$roleName = $this->param->getParam('roleName', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get', true);
			$startDateTime = $this->param->getParam('startDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get', true);
			$endDateTime = $this->param->getParam('endDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get', true);
                        $orderId= $this->param->getParam('orderId', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get', true);
                        
			$this->initGameAreaInfo($operatorId,$gameAreaId);      
			$sql = "
				select
					<selectColumns>
				from
					`pay_log`
				where
					`oid` not like '%test%'
			";
			if($account) {
				$sql .= " and `cid` = '{$account}'";
			}
			if($roleName) {
				$sql .= " and `name` = '{$roleName}'";
			}
			if($startDateTime) {
				$sql .= " and `time` >= unix_timestamp('{$startDateTime}')";
			}
			
			if($endDateTime) {
				$sql .= " and `time` <= unix_timestamp('{$endDateTime}')";
			}
			if($orderId) {
				$sql .= " and `oid` = '{$orderId}'";
			}
			
			
			$getTotalAmountSql = str_replace('<selectColumns>', "count(distinct(`name`))as `name`,sum(`amount`)/100 as `amount`,sum(`amount`) as `gold`", $sql);
                        $total = $this->gameDatabase->getRow($getTotalAmountSql);
                        
                        $sql .= " group by  `name` order by `amount` desc ";
                        
			$getDataSql = str_replace('<selectColumns>', "`cid`,`name`,`oid` as `orderId`, sum(`amount`)/100 as `amount`, sum(`amount`) as `gold`, from_unixtime(`time`) as `time`", $sql);
                      
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        
                        
                        echo "角色ID\t角色名\t订单号\t充值金额\t充值元宝\t充值时间\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['cid']}\t{$value['name']}\t{$value['orderId']}\t{$value['amount']}\t{$value['gold']}\t{$value['time']}\t\n";
                        }
                        echo "合计\t{$total['name']}\t\t{$total['amount']}\t{$total['gold']}\t";
		}
		
		catch(MY_Param_Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		catch(MY_Mysql_Exception $e) {
			$this->setErrorCode(1);
		}
		
		catch(Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		log_message('debug', '=====调用Pay->PayRank->export接口结束=====');
	}
}