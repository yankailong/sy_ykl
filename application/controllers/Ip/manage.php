<?php
class Manage extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '开始调用Ip->Manage->__construct接口');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Ip/');
		log_message('debug', '调用Ip->Manage->__construct接口结束');
	}
	
	public function showView()
	{
		$this->load->view('module/Ip/manage.htm');
	}
	
	
	public function getListData() {
		log_message('debug', '=====开始调用Ip->getData接口=====');
		$this->verifyPrivilege();
		
		try {
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$startRow = ($page - 1) * $rows;
			$sql = "
				select
					<selectColumns>
				from
					`t_data_ip` a
				left join
					`t_cfg_ip_type` b
				on
					a.`ipTypeId` = b.`ipTypeId`
			";
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "a.`ipId`, a.`ipAddress`, a.`ipTypeId`, b.`ipType{$this->currLanguage}Name` as `ipTypeName`", $sql);
			$getDataSql .= " limit {$startRow}, {$rows}";
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
		log_message('debug', '=====调用Ip->getData接口结束=====');
	}
	
	
	public function add() {
		log_message('debug', '=====开始调用Ip->add接口=====');
		$this->verifyPrivilege();
		
		try {
			$ipAddress = $this->param->getParam('ipAddress', array('method' => 'ip', 'emptyErrorCode' => 3001, 'invalidErrorCode' => 3002));
			$ipTypeId = $this->param->getParam('ipTypeId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 3003, 'invalidErrorCode' => 1));
			
			$sql = "
				insert into
					`t_data_ip`
				(
					`ipAddress`,
					`ipTypeId`
				)
				value
				(
					'{$ipAddress}',
					'{$ipTypeId}'
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
				$this->setErrorCode(3004);
			}
			else {
				$this->setErrorCode(1);
			}
		}
		
		catch(Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		$this->returnJson();
		log_message('debug', '=====调用Ip->add接口结束=====');
	}
	
	
	public function modify() {
		log_message('debug', '=====开始调用Ip->Modify接口=====');
		$this->verifyPrivilege();
		
		try {
			$ipId = $this->param->getParam('ipId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$ipAddress = $this->param->getParam('ipAddress', array('method' => 'ip', 'emptyErrorCode' => 3001, 'invalidErrorCode' => 3002));
			$ipTypeId = $this->param->getParam('ipTypeId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 3003, 'invalidErrorCode' => 1));
			
			$sql = "
				update
					`t_data_ip`
				set
					`ipAddress` = '{$ipAddress}',
					`ipTypeId` = '{$ipTypeId}'
				where
					`ipId` = '{$ipId}'
			";
			$this->gmDatabase->query($sql);
		}
		
		catch(MY_Param_Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		catch(MY_Mysql_Exception $e) {
			$errorCode = $e->getCode();
		
			if($errorCode === 1062) {
				$this->setErrorCode(3004);
			}
			else {
				$this->setErrorCode(1);
			}
		}
		
		$this->returnJson();
		log_message('debug', '=====调用Ip->modify接口结束=====');
	}
}