<?php
class Manage extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Version->Manage->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Version/');
		log_message('debug', '=====调用Version->Manage->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Version/manage.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Version->Manage->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			
			$sql = "
				select
					<selectColumns>
				from
					`t_data_game_version`
				order by
					`majorVersion` desc,
					`minorVersion` desc,
					`teenyVersion` desc,
					`releaseVersion` desc
			";
			
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "`id`, `version`, `haveClient`, `haveInterface`, `haveServer`, `status`", $sql);
			
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
		log_message('debug', '=====调用Version->Manage->getListData接口结束=====');
	}
	
	public function add() {
		log_message('debug', '=====开始调用Version->Manage->add接口=====');
		$this->verifyPrivilege();
		
		try {
			$version = $this->param->getParam('version', array('method' => 'string', 'maxLength' => 64, 'emptyErrorCode' => 405001, 'invalidErrorCode' => 405002));
			
			if(! preg_match('/^[0-9]+\.[0-9]+\.[0-9]+_(CN|TW|VN|EU|GH)_[0-9]+$/', $version)) {
				throw new Exception('', 405007);
			}
			
			$tmp = explode('_', $version);
			$releaseVersion = (int)$tmp[2];
			$tmp = explode('.', $tmp[0]);
			$majorVersion = (int)$tmp[0];
			$minorVersion = (int)$tmp[1];
			$teenyVersion = (int)$tmp[2];
			
			$sql = "
				insert into
					`t_data_game_version`
				set
					`version` = '{$version}',
					`majorVersion` = '{$majorVersion}',
					`minorVersion` = '{$minorVersion}',
					`teenyVersion` = '{$teenyVersion}',
					`releaseVersion` = '{$releaseVersion}',
					`status` = 2
			";
			$this->gmDatabase->query($sql);
		}
		
		catch(MY_Param_Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		catch(MY_Mysql_Exception $e) {
			$errorCode = $e->getCode();
			
			if($errorCode === 1062) {
				$this->setErrorCode(405006);
			}
			else {
				$this->setErrorCode(1);
			}
		}
		
		catch(Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		$this->returnJson();
		log_message('debug', '=====调用Version->Manage->add接口结束=====');
	}
	
	public function modify() {
		log_message('debug', '=====开始调用Version->Manage->modify接口=====');
		$this->verifyPrivilege();
		
		try{
			$id = $this->param->getParam('id', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$version = $this->param->getParam('version', array('method' => 'string', 'maxLength' => 64, 'emptyErrorCode' => 405001, 'invalidErrorCode' => 405002));
			
			$sql = "
				update
					`t_data_game_version`
				set
					`version` = '{$version}'
				where
					`id` = '{$id}'
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
		log_message('debug', '=====调用Version->Manage->modify接口结束=====');
	}
	
	public function mergeToInstall() {
		log_message('debug', '=====开始调用Version->Manage->mergeToInstall=====');
		$this->verifyPrivilege();
		
		try {
			$id = $this->param->getParam('id', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			
			$sql = "
				update
					`t_data_game_version`
				set
					`status` = 6
				where
					`id` = '${id}'
					and
					`status` in (4, 9)
			";
			$this->gmDatabase->query($sql);
			
			if($this->gmDatabase->getAffectedRow() <= 0) {
				throw new Exception('', 405008);
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
		log_message('debug', '=====调用Version->Manage->mergeToInstall结束=====');
	}
}