<?php
class Login extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '开始调用Role->Login->__construct接口');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Role/');
		log_message('debug', '调用Role->Login->__construct接口结束');
	}
	
	public function showView()
	{
		$this->load->view('module/Role/login.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Role->login->getListData接口=====');
		$this->verifyPrivilege();
	
		try {
			$gameAreaId = $this->param->getParam('gameAreaId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$account = $this->param->getParam('account', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$roleName = $this->param->getParam('roleName', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$startDateTime = $this->param->getParam('startDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$endDateTime = $this->param->getParam('endDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			
			if( !$account && !$roleName ) {
				throw new Exception('', 202);
			}
	
			$this->initGameAreaInfo($gameAreaId);
	
			$sql = "
				select
					`userId`,
					`account`,
					`roleName`
				from
					`t_data_game_account`
				where
					(
						`account` = '{$account}'
						or
						`roleName` = '{$roleName}'
					)
					and
					`gameAreaId` = '{$gameAreaId}'
			";
			
			if( ($row = $this->gmDatabase->getRow($sql)) === false) {
				throw new Exception('', 204);
			}
			
			$userId = $row['userId'];
			$account = $row['account'];
			$roleName = $row['roleName'];
					
			$sql = "
				select
					<selectColumns>
				from
					`t_data_game_account_login`
				where
					`userId` = '{$userId}'
			";
			
			if($startDateTime) {
				$sql .= " and a.`loginDateTime` >= '{$startDateTime}'";
			}
	
			if($endDateTime) {
				$sql .= " and a.`loginDateTime` <= '{$endDateTime}'";
			}
							
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
	
			$getDataSql = str_replace('<selectColumns>', "'{$account}' as `account`, '{$roleName}' as `roleName`, `loginDatetime`, `loginIpAddress`", $sql);

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
		log_message('debug', '=====调用Gold->getListData接口结束=====');
	}
}