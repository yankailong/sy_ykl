<?php
class Apply extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Card->Apply->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Card/');
		log_message('debug', '=====调用Card->Apply->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Card/apply.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Card->Apply->getListData接口=====');
		$this->verifyPrivilege();
	
		try{
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
				
			$sql = "
				select
					<selectColumns>
				from
					`t_data_card_apply` a
				left join
					`t_data_operator` b
				on
					a.`operatorId` = b.`operatorId`
				left join
					`t_data_user_operator_privilege` c
				on
					a.`operatorId` = c.`operatorId`
					and
					c.`userId` = '{$this->currUserId}'
				left join
					`t_data_user` d
				on
					a.`applyUserId` = d.`userId`
				left join
					`t_data_user` e
				on
					a.`approvalUserId` = e.`userId`
				left join
					`t_data_card` f
				on
					a.`cardId` = f.`cardId`
				where
					c.`privilegeValue` = 1
			";
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "a.`id` as `applyId`, b.`operatorName`, f.`cardName`, a.`count`, d.`name` as `applyUserName`, a.`applyDatetime`, e.`name` as `approvalUserName`, a.`approvalDatetime`, a.`status`", $sql);
		
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
				
			$this->returnData['data']['rows'] = $this->gmDatabase->getArray($getDataSql);
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
		log_message('debug', '=====调用Card->Apply->getListData接口结束=====');
	}
	
	public function add() {
		log_message('debug', '=====开始调用Card->Apply->add接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 301005, 'invalidErrorCode' => 1));
			$cardId = $this->param->getParam('cardId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 301006, 'invalidErrorCode' => 1));
			$count = $this->param->getParam('count', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 301007, 'invalidErrorCode' => 1));
				
			$sql = "
				insert into
					`t_data_card_apply`
				(
					`operatorId`,
					`cardId`,
					`count`,
					`applyUserId`,
					`applyDatetime`,
					`status`
				)
				value
				(
					'{$operatorId}',
					'{$cardId}',
					'{$count}',
					'{$this->currUserId}',
					now(),
					'1'
				)
			";
			$this->gmDatabase->query($sql);
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
		log_message('debug', '=====调用Card->Apply->add接口结束=====');
	}
	
	public function approval() {
		log_message('debug', '=====开始调用Card->Apply->approval接口=====');
		$this->verifyPrivilege();
	
		try {
			$applyId = $this->param->getParam('applyId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$status = $this->param->getParam('status', array('method' => 'int', 'min' => 2, 'max' => 3, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
				
			$sql = "
				update
					`t_data_card_apply` a
				left join
					`t_data_operator` b
				on
					a.`operatorId` = b.`operatorId`
				left join
					`t_data_user_operator_privilege` c
				on
					a.`operatorId` = c.`operatorId`
					and
					c.`userId` = '{$this->currUserId}'
				set
					a.`status` = '{$status}',
					a.`approvalUserId` = '{$this->currUserId}',
					a.`approvalDateTime` = now()
				where
					a.`id` in ({$applyId})
					and
					a.`status` in (1,3)
					and
					c.`privilegeValue` = 1
			";
			$this->gmDatabase->query($sql);
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
		log_message('debug', '=====调用Card->Apply->approval接口结束=====');
	}
	
	public function export() {
		log_message('debug', '=====开始调用Card->Apply->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
	
		try {
			$applyId = $this->param->getParam('applyId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get');
			$fileName = "{$applyId}.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:text/plain');
			header("Content-Disposition:attachment;filename={$fileName}");
				
			$sql = "
				select
					count(*)
				from
					`t_data_card_apply` a
				left join
					`t_data_operator` b
				on
					a.`operatorId` = b.`operatorId`
				left join
					`t_data_user_operator_privilege` c
				on
					a.`operatorId` = c.`operatorId`
					and
					c.`userId` = '{$this->currUserId}'
				where
					a.`id` = '{$applyId}'
					and
					c.`privilegeValue` = 1
			";
				
			if($this->gmDatabase->getColumn($sql) === '0') {
				throw new Exception('', 1);
			}
			
			$sql = "
				select
					`cardSerial`
				from
					`t_data_serial`
				where
					`applyId` = '{$applyId}'
			";
			$cardInfoArray = $this->gmDatabase->getArray($sql);
					
			foreach ($cardInfoArray as $cardInfo) {
				echo "{$cardInfo['cardSerial']}\n";
			}
			
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
	}
}