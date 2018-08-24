<?php
class Manage extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '开始调用User->__construct');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/User/');
		log_message('debug', '调用User->__construct结束');
	}

	
	public function getCurrUserInfo()
	{
		log_message('debug', '=====开始调用User->getCurrUserInfo接口=====');
		$this->returnData['data']['name'] = $this->session->userdata('name');
		$this->returnJson();
		log_message('debug', '=====调用User->getCurrUserInfo接口结束=====');
	}
        
	
	public function checkPassword()
	{
		log_message('debug', '=====开始调用User->checkPassword接口=====');
	
		try{
			$sql = "
				select
					`userId`
				from
					`t_data_user`
				where
					`password` = md5('123456')
					and
					`userId` = '{$this->currUserId}'
			";
				
			if( ($row = $this->gmDatabase->getRow($sql)) === false ) {
				$this->returnData['data']['defaultPassword'] = false;
			}
			else {
				$this->returnData['data']['defaultPassword'] = true;
			}
		}
	
		catch(MY_Mysql_Exception $e) {
			$this->setErrorCode(1);
		}
	
		$this->returnJson();
		log_message('debug', '=====调用User->checkPassword接口结束=====');
	}
	
	
	public function login()
	{
		log_message('debug', '=====开始调用User->login接口=====');
	
		try {
			$username = $this->param->getParam('username', array('method' => 'string', 'maxLength' => 16, 'emptyErrorCode' => 1001, 'invalidErrorCode' => 1002));
			$password = $this->param->getParam('password', array('method' => 'string', 'emptyErrorCode' => 1003, 'invalidErrorCode' => 1004));
			$password = md5($password);
			$sql = "
				select
					`userId`,
					`password`,
					`name`,
					`status`
				from
					`t_data_user`
				where
					`username` = '{$username}'
			";
				
			if( ($row = $this->gmDatabase->getRow($sql)) === false ) {
				throw new Exception('用户不存在', 1005);
			}
			else {
				if( !($password === $row['password']) ) {
					throw new Exception('密码错误', 1006);
				}
	
				if( !($row['status'] === '1') ) {
					throw new Exception('用户已禁用', 1007);
				}
	
				$this->session->set_userdata('userId', $row['userId']);
				$this->session->set_userdata('name', $row['name']);
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
		log_message('debug', '=====调用User->login接口结束=====');
	}
	
	
	public function logout()
	{
		log_message('debug', '=====开始调用User->logout接口=====');
		$this->session->set_userdata('userId', 0);
		$this->returnJson();
		log_message('debug', '=====调用User->logout接口结束=====');
	}
	
        public function select()
	{
		log_message('debug', '=====开始调用User->select接口=====');
	
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int',  'emptyErrorCode' => 1001, 'invalidErrorCode' => 1002));
			$gameAreaId = $this->param->getParam('gameAreaId', array('method' => 'string', 'emptyErrorCode' => 1003, 'invalidErrorCode' => 1004));
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
		
				
	
                        $this->session->set_userdata('operatorId', $operatorId);
                        $this->session->set_userdata('gameAreaId', $gameAreaId);
                        $this->session->set_userdata('startDate', $startDate);
                        $this->session->set_userdata('endDate', $endDate);
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
		log_message('debug', '=====调用User->select接口结束=====');
	}
	
        public function getCurrSelectInfo()
	{
		log_message('debug', '=====开始调用User->getCurrSelectInfo接口=====');
		$this->returnData['data']['operatorId'] = $this->session->userdata('operatorId');
                $this->returnData['data']['gameAreaId'] = $this->session->userdata('gameAreaId');
                $this->returnData['data']['startDate'] = $this->session->userdata('startDate');
                $this->returnData['data']['endDate'] = $this->session->userdata('endDate');
                
		$this->returnJson();
		log_message('debug', '=====调用User->getCurrSelectInfo接口结束=====');
	}
        
	public function modifyPassword()
	{
		log_message('debug', '=====开始调用User->modifyPassword接口=====');
	
		try {
			$password = $this->param->getParam('password', array('method' => 'string', 'emptyErrorCode' => 1003, 'invalidErrorCode' => 1004));
			$newPassword = $this->param->getParam('newPassword', array('method' => 'string', 'emptyErrorCode' => 1008, 'invalidErrorCode' => 1009));
			$confirmPassword = $this->param->getParam('confirmPassword', array('method' => 'string', 'emptyErrorCode' => 1010, 'invalidErrorCode' => 1011));
	
			if( !($newPassword === $confirmPassword) ) {
				throw new Exception('新密码和确认密码不符', 1012);
			}
	
			$password = md5($password);
			$newPassword = md5($newPassword);
			$sql = "
				select
					`userId`
				from
					`t_data_user`
				where
					`password` = '{$password}'
					and
					`userId` = '{$this->currUserId}'
			";
	
			if( ($this->gmDatabase->getRow($sql) === false) ) {
				throw new Exception('密码错误', 1006);
			}
	
			$sql = "
				update
					`t_data_user`
				set
					`password` = '{$newPassword}'
				where
					`userId` = '{$this->currUserId}'
			";
			$this->gmDatabase->query($sql);
			$this->session->set_userdata('userId', 0);
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
		log_message('debug', '=====调用User->modifyPassword接口结束=====');
	}
	
	public function showView()
	{
		$this->load->view('module/User/manage.htm');
	}
	
	public function getListData()
	{
		log_message('debug', '=====开始调用User->getListData接口=====');
		$this->verifyPrivilege();
	
		try {
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$sql = "
				select
					<selectColumns>
				from
					`t_data_user`
				where
					`userId` > 1
			";
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "`userId`,`username`,`name`,`status`", $sql);
			
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
		log_message('debug', '=====调用User->getListData接口结束=====');
	}
	
	public function add()
	{
		log_message('debug', '=====开始调用User->Manage->add接口=====');
		$this->verifyPrivilege();
	
		try {
			$username = $this->param->getParam('username', array('method' => 'string', 'maxLength' => 16, 'emptyErrorCode' => 1001, 'invalidErrorCode' => 1002));
			$name = $this->param->getParam('name', array('method' => 'string', 'emptyErrorCode' => 1013, 'invalidErrorCode' => 1014));
			$sql = "
				insert into
					`t_data_user`
				(
					`username`,
					`password`,
					`name`,
					`status`
				)
				value
				(
					'{$username}',
					md5('123456'),
					'{$name}',
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
				$this->setErrorCode(1015);
			}
			else {
				$this->setErrorCode(1);
			}
		}
	
		catch(Exception $e) {
			$this->setErrorCode($e->getCode());
		}
	
		$this->returnJson();
		log_message('debug', '=====调用User->Manage->add接口结束=====');
	}
	
	public function modify() {
		log_message('debug', '=====开始调用User->Manage->modify接口=====');
		$this->verifyPrivilege();
	
		try {
			$userId = $this->param->getParam('userId', array('method' => 'int', 'min' => 2, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$username = $this->param->getParam('username', array('method' => 'string', 'maxLength' => 16, 'emptyErrorCode' => 1001, 'invalidErrorCode' => 1002));
			$name = $this->param->getParam('name', array('method' => 'string', 'emptyErrorCode' => 1013, 'invalidErrorCode' => 1014));
			$status = $this->param->getParam('status', array('method' => 'int', 'min' => 1, 'max' => 2, 'emptyErrorCode' => 1016, 'invalidErrorCode' => 1017));
	
			$sql = "
				update
					`t_data_user`
				set
					`username` = '{$username}',
					`name` = '{$name}',
					`status` = '{$status}'
				where
					`userId` = '{$userId}'
			";
			$this->gmDatabase->query($sql);
		}
	
		catch(MY_Param_Exception $e) {
			$this->setErrorCode($e->getCode());
		}
	
		catch(MY_Mysql_Exception $e) {
			$errorCode = $e->getCode();
				
			if($errorCode === 1062) {
				$this->setErrorCode(1015);
			}
			else {
				$this->setErrorCode(1);
			}
		}
	
		catch(Exception $e) {
			$this->setErrorCode($e->getCode());
		}
	
		$this->returnJson();
		log_message('debug', '=====调用User->Manage->modify接口结束=====');
	}
	
	public function resetPassword() {
		log_message('debug', '=====开始调用User->resetPassword接口=====');
		$this->verifyPrivilege();
	
		try {
			$userId = $this->param->getParam('userId', array('method' => 'int', 'min' => 2, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
				
			$sql = "
				update
					`t_data_user`
				set
					`password` = md5('123456')
				where
					`userId` = '{$userId}'
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
		log_message('debug', '=====调用User->resetPassword接口结束=====');
	}
}