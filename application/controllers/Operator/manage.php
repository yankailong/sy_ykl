<?php
class Manage extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '开始调用Operator->Manage->__construct');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Operator/');
		log_message('debug', '调用Operator->Manage->__construct结束');
	}
	
	public function showView()
	{
		$this->load->view('module/Operator/manage.htm');
	}


	public function getListData()
	{
		log_message('debug', '=====开始调用Operator->getListData接口=====');
		$this->verifyPrivilege();

		try {
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			// $userId = $this->param->getParam('userId', array('method' => 'int', 'min' => 2, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			
			/*$sql = "
				select
					<selectColumns>
				from
					`t_data_operator`
				where
					1 = 1
			";*/
			$sql = "
				select
					<selectColumns>
				from
					`t_data_operator` a
				left join
					`t_data_user_operator_privilege` b
				on
					a.`operatorId` = b.`operatorId`
				and					
					b.`userId` = '{$this->currUserId}'
				where
					b.`privilegeValue` = 1
				and
					1 = 1
			";
			// b.`userid` = '{$userId}'
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "a.`operatorId`, a.`operatorName`, a.`operatorFlag`, a.`status`", $sql);
			// $getDataSql = str_replace('<selectColumns>', "`operatorId`, `operatorName`, `operatorFlag`, `status`", $sql);
		
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
		log_message('debug', '=====调用Operator->getData接口结束=====');
	}


	public function add() {
		log_message('debug', '=====开始调用Operator->add接口=====');
		$this->verifyPrivilege();

		try {
			$operatorName = $this->param->getParam('operatorName', array('method' => 'string', 'emptyErrorCode' => 2001, 'invalidErrorCode' => 2002));
			$operatorFlag = $this->param->getParam('operatorFlag', array('method' => 'string', 'emptyErrorCode' => 2003, 'invalidErrorCode' => 2004));
		
			$sql = "
				insert into
					`t_data_operator`
				(
					`operatorName`,
					`operatorFlag`,
					`status`
				)
				value
				(
					'{$operatorName}',
					'{$operatorFlag}',
					'1'
				)
			";
			$this->gmDatabase->query($sql);
		}

		catch(MY_Param_Exception $e) {
			$this->setErrorCode($e->getCode());
		}
	
		catch(MY_Mysql_Exception $e) {
			$errorCode = $e->getCode();
	
			if($errorCode === 1062) {
				$this->setErrorCode(2005);
			}
			else {
				$this->setErrorCode(1);
			}
		}
	
		catch(Exception $e) {
			$this->setErrorCode($e->getCode());
		}
	
		$this->returnJson();
		log_message('debug', '=====调用Operator->add接口结束=====');
	}


	public function modify() {
		log_message('debug', '=====开始调用Operator->modify接口=====');
		$this->verifyPrivilege();

		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$operatorName = $this->param->getParam('operatorName', array('method' => 'string', 'emptyErrorCode' => 2001, 'invalidErrorCode' => 2002));
			$operatorFlag = $this->param->getParam('operatorFlag', array('method' => 'string', 'emptyErrorCode' => 2003, 'invalidErrorCode' => 2004));
			$status = $this->param->getParam('status', array('method' => 'int', 'min' => 1, 'max' => 2, 'emptyErrorCode' => 2006, 'invalidErrorCode' => 1));
		
			$sql = "
				update
					`t_data_operator`
				set
					`operatorName` = '{$operatorName}',
					`operatorFlag` = '{$operatorFlag}',
					`status` = '{$status}'
				where
					`operatorId` = '{$operatorId}'
			";
			$this->gmDatabase->query($sql);
				
		}

		catch(MY_Param_Exception $e) {
			$this->setErrorCode($e->getCode());
		}

		catch(MY_Mysql_Exception $e) {
			$errorCode = $e->getCode();

			if($errorCode === 1062) {
				$this->setErrorCode(2005);
			}
			else {
				$this->setErrorCode(1);
			}
		}

		catch(Exception $e) {
			$this->setErrorCode($e->getCode());
		}

		$this->returnJson();
		log_message('debug', '=====调用Operator->modify接口结束=====');
	}
	
	public function getUserPrivilege() {
		log_message('debug', '=====开始调用Operator->Manage->getUserPrivilege接口=====');
	
		try {
			// $userId = $this->param->getParam('userId', array('method' => 'int', 'min' => 2, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
	
			$sql = "
				select
					<selectColumns>
				from
					`t_data_operator` a
				left join
					`t_data_user_operator_privilege` b
				on
					a.`operatorId` = b.`operatorId`
				and
					b.`userid` = '{$this->currUserId}'
				order by
					a.`operatorId`
			";
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "a.`operatorId`, a.`operatorName`, b.`privilegeValue`", $sql);
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
		log_message('debug', '=====调用Operator->Manage->getUserPrivilege接口结束=====');
	}
	
	
	public function setUserPrivilege() {
		log_message('debug', '=====开始调用Operator->Manage->setUserPrivilege接口=====');
		$this->verifyPrivilege();
	
		try {
			$userId = $this->param->getParam('userId', array('method' => 'int', 'min' => 2, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$operatorIdString = $this->param->getParam('operatorIdString', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$operatorIdArray = explode(',', $operatorIdString);
				
			$sql = "
				update
					`t_data_user_operator_privilege`
				set
					`privilegeValue` = 0
				where
					`userId` = '{$userId}'
			";
			$this->gmDatabase->query($sql);
	
			foreach($operatorIdArray as $operatorId) {
				$sql = "
					insert into
						`t_data_user_operator_privilege`
					(
						`userId`,
						`operatorId`,
						`privilegeValue`
					)
					value
					(
						'{$userId}',
						'{$operatorId}',
						'1'
					)
					on duplicate key update
						`privilegeValue` = '1'
				";
				$this->gmDatabase->query($sql);
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
	
		$this->returnJson();
		log_message('debug', '=====调用Operator->Manage->setUserPrivilege接口结束=====');
	}
}