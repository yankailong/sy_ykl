<?php
class Detail extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Pay->Detail->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Pay/');
		log_message('debug', '=====调用Pay->Detail->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Pay/detail.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Pay->Detail->getListData接口=====');
		$this->verifyPrivilege();
		
		try{
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
            $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
			$account = $this->param->getParam('account', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$roleName = $this->param->getParam('roleName', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$startDateTime = $this->param->getParam('startDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$endDateTime = $this->param->getParam('endDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$orderId= $this->param->getParam('orderId', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$sort = $this->param->getParam('sort', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$order = $this->param->getParam('order', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
	
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
				$sql .= " and `time` >= unix_timestamp('{$startDateTime} 00:00:00')";
			}
			
			if($endDateTime) {
				$sql .= " and `time` <= unix_timestamp('{$endDateTime} 23:59:59')";
			}

			// if($startDate) {
   //                  $sql .= "
   //                      and
   //                      FROM_UNIXTIME(`time`) >= '{$startDate} 00:00:00'
   //                  ";
   //              }
                
   //              if($endDate) {
   //                  $sql .= "
   //                      and
   //                      FROM_UNIXTIME(`time`) <= '{$endDate} 23:59:59' 
   //                  ";
   //              }

			if($orderId) {
				$sql .= " and `oid` = '{$orderId}'"; 
			}
            $getTotalAmountSql = str_replace('<selectColumns>', "count(distinct(`name`))as `name`,sum(`amount`)/100 as `amount`,sum(`amount`) as `gold`", $sql);
            $this->returnData['data']['footer'] = $this->gameDatabase->getArray($getTotalAmountSql);
                        
                        
			/*$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "`cid`,`name`,`oid` as `orderId`, `amount`/10 as `amount`, `amount` as `gold`, from_unixtime(`time`) as `time`,`money`,`pf`", $sql);*/
                        
                // 修改  bug      
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "`cid`,`name`,`oid` as `orderId`, `amount`/100 as `amount`, `amount` as `gold`, from_unixtime(`time`) as `time`", $sql);



			if($sort && $order) {
				$getDataSql .= " order by {$sort} {$order}"; 
			}
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			
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
		log_message('debug', '=====调用Pay->Detail->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Pay->Detail->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
                
		try {
            $fileName = "pay.txt";
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
            $sort = $this->param->getParam('sort', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$order = $this->param->getParam('order', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
                        
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
				$sql .= " and `time` >= unix_timestamp('{$startDateTime} 00:00:00')";
			}
			
			if($endDateTime) {
				$sql .= " and `time` <= unix_timestamp('{$endDateTime} 23:59:59')";
			}
			if($orderId) {
				$sql .= " and `oid` = '{$orderId}'"; 
			}


            /*$getTotalAmountSql = str_replace('<selectColumns>', "count(distinct(`name`))as `name`,sum(`amount`)/10 as `amount`,sum(`amount`) as `gold`", $sql);
            $this->returnData['data']['footer'] = $this->gameDatabase->getArray($getTotalAmountSql);
                            
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "`cid`,`name`,`oid` as `orderId`, `amount`/10 as `amount`, `amount` as `gold`, from_unixtime(`time`) as `time`", $sql);


			if($sort && $order) {
				$getDataSql .= " order by {$sort} {$order}"; 
			}
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);*/


            if($sort && $order) {
				$getDataSql .= " order by {$sort} {$order}"; 
			} 
			$getDataSql = str_replace('<selectColumns>', "`cid`,`name`,`oid` as `orderId`, `amount`/100 as `amount`, `amount` as `gold`, from_unixtime(`time`) as `time`", $sql);
		         
			// $getDataSql = str_replace('<selectColumns>', "`cid`,`name`,`oid` as `orderId`, sum(`amount`)/100 as `amount`, sum(`amount`) as `gold`, from_unixtime(`time`) as `time`", $sql);
                                
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                                               
                echo "角色ID\t角色名\t订单号\t充值钻石\t充值金额\t充值时间\t"."\n";
                foreach ($this->returnData['data']['rows'] as $key => $value) {
                    echo "{$value['cid']}\t{$value['name']}\t{$value['orderId']}\t{$value['gold']}\t{$value['amount']}\t{$value['time']}\t\n";
                }
                // echo "合计\t{$total['name']}\t{$total['amount']}\t{$total['gold']}\t";
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
		
		log_message('debug', '=====调用Pay->Detail->export接口结束=====');
	}
}