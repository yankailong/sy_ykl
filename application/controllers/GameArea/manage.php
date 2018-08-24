<?php
class Manage extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '开始调用GameArea->Manage->__construct接口');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/GameArea/');
		log_message('debug', '调用GameArea->Manage->__construct接口结束');
	}
	
	
	public function showView()
	{
		$this->load->view('module/GameArea/manage.htm');
	}
	
	
	public function getListData()
	{
		log_message('debug', '=====开始调用GameArea->Manage->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$checkPrivilege = $this->param->getParam('checkPrivilege', array('method' => 'int', 'min' => 0, 'max' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
            $operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5001, 'invalidErrorCode' => 1), 'post', true);
            $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'int','min' =>1,'emptyErrorCode' => 5002, 'invalidErrorCode' => 1), 'post', true);
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			
			$sql = "
				select
					<selectColumns>
				from
					`t_data_game_area` a
				left join
					`t_data_operator` b
				on
					a.`operatorId` = b.`operatorId`
				left join
					`t_data_server` c
				on
					a.`serverId` = c.`serverId`
				left join
						`t_data_user_operator_privilege` e
					on
						a.`operatorId` = e.`operatorId`
						and
						e.`userId` = {$this->currUserId}
					where
						e.`privilegeValue` = 1
			";
			
			/*if($checkPrivilege === '1') {
				$sql .= "
					left join
						`t_data_user_operator_privilege` e
					on
						a.`operatorId` = e.`operatorId`
						and
						e.`userId` = {$this->currUserId}
					where
						e.`privilegeValue` = 1
                                                
				";
			}
			else {
				$sql .= "
					where
                        1 = 1
				";
			}*/
            if($operatorId){
                $sql.="and a.`operatorId` = '{$operatorId}'";
            }
            if($gameAreaId) {
				$sql .= " and find_in_set(a.`gameAreaId`,'{$gameAreaId}' ) ";
			}
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "a.`gameAreaId`, a.`operatorId`, b.`operatorName`, a.`areaNum`, if(a.`serverId` = 0, '', a.`serverId`) as `serverId`, c.`serverName`,  a.`databaseName`, a.`status`, a.`openDatetime`, a.`mergeDatetime`, a.`mergeDestAreaNum`, a.`closeDatetime`, concat(b.`operatorName`, '-S', a.`areaNum`) as gameAreaName", $sql);
			$getDataSql .= " order by a.`areaNum` asc";
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
		log_message('debug', '=====调用GameArea->Manage->getListData接口结束=====');
	}
	
	
	public function add(){
		log_message('debug', '=====开始调用GameArea->add接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5001, 'invalidErrorCode' => 1));
			$areaNum = $this->param->getParam('areaNum', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5002, 'invalidErrorCode' => 5003));
			$serverId = $this->param->getParam('serverId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5004, 'invalidErrorCode' => 1));
			$database = $this->param->getParam('databaseName', array('method' => 'string', 'emptyErrorCode' => 5011, 'invalidErrorCode' => 5012));
			$openDatetime = $this->param->getParam('openDatetime', array('method' => 'string', 'emptyErrorCode' => 5013, 'invalidErrorCode' => 1));
			
			
			$sql = "
				insert into
					`t_data_game_area`
				set
					`operatorId` = '{$operatorId}',
					`areaNum` = '{$areaNum}',
					`serverId` = '{$serverId}',
					`databaseName` = '{$database}',
					`status` = '1',
					`openDatetime` = '{$openDatetime}'
			";
			$this->gmDatabase->query($sql);
		}
		
		catch(MY_Param_Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		catch(MY_Mysql_Exception $e) {
			$errorCode = $e->getCode();
		
			if($errorCode === 1062) {
				$this->setErrorCode(5014);
			}
			else {
				$this->setErrorCode(1);
			}
		}
		
		catch(Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		$this->returnJson();
		log_message('debug', '=====调用GameArea->add接口结束=====');
	}	
	
	public function modify() {
		log_message('debug', '=====开始调用GameArea->modify接口=====');
		$this->verifyPrivilege();
		
		try {
			$gameAreaId = $this->param->getParam('gameAreaId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5001, 'invalidErrorCode' => 1));
			$areaNum = $this->param->getParam('areaNum', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5002, 'invalidErrorCode' => 5003));
			$serverId = $this->param->getParam('serverId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5004, 'invalidErrorCode' => 1), 'post', true);
			$databaseName = $this->param->getParam('databaseName', array('method' => 'string', 'emptyErrorCode' => 5011, 'invalidErrorCode' => 5012));
			$status = $this->param->getParam('status', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5015, 'invalidErrorCode' => 1));
			$openDatetime = $this->param->getParam('openDatetime', array('method' => 'string', 'emptyErrorCode' => 5013, 'invalidErrorCode' => 1));

			$sql = "
				update
					`t_data_game_area`
				set
					`operatorId` = '{$operatorId}',
					`areaNum` = '{$areaNum}',
					`serverId` = '{$serverId}',
					`databaseName` = '{$databaseName}',
					`status` = '{$status}',
					`openDatetime` = '{$openDatetime}'
			";
			
			$sql .= "
				where
					`gameAreaId` = '{$gameAreaId}'
			";
			$this->gmDatabase->query($sql);
		}
		
		catch(MY_Param_Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		catch(MY_Mysql_Exception $e) {
			$errorCode = $e->getCode();
		
			if($errorCode === 1062) {
				$this->setErrorCode(5014);
			}
			else {
				$this->setErrorCode(1);
			}
		}
		
		catch(Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		$this->returnJson();
		log_message('debug', '=====调用GameArea->modify接口结束=====');
	}
	
	public function install() {
		log_message('debug', '=====开始调用GameArea->Manage->install=====');
		$this->verifyPrivilege();
		
		try {
			$gameAreaId = $this->param->getParam('gameAreaId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			
			$sql = "
				select
					`status`
				from
					`t_data_game_area`
				where
					`gameAreaId` = '{$gameAreaId}'
			";
			
			$status = $this->gmDatabase->getColumn($sql);
			
			if($status === false) {
				throw new Exception('', 1);
			}
			
			if($status != 1) {
				throw new Exception('', 5024);
			}
			
			$sql = "
				select
					count(*)
				from
					`t_data_game_install_queue`
				where
					`gameAreaId` = '{$gameAreaId}'
					and
					`status` <= 2
			";
			
			if($this->gmDatabase->getColumn($sql) > 0) {
				throw new Exception('', 5024);
			}
			
			$sql = "
				insert into
					`t_data_game_install_queue`
				set
					`gameAreaId` = '{$gameAreaId}',
					`operateUserId` = '{$this->currUserId}',
					`operateDatetime` = now(),
					`status` = 1
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
		log_message('debug', '=====调用GameArea->Manage->install结束=====');
	}
	
	public function clearData() {
		log_message('debug', '=====开始调用GameArea->Manage->clearData=====');
		$this->verifyPrivilege();
		
		try {
			$gameAreaId = $this->param->getParam('gameAreaId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
				
			$sql = "
				select
					`status`
				from
					`t_data_game_area`
				where
					`gameAreaId` = '{$gameAreaId}'
			";
				
			$status = $this->gmDatabase->getColumn($sql);
				
			if($status === false) {
				throw new Exception('', 1);
			}
				
			if( $status != 2 && $status != 3 ) {
				throw new Exception('', 5028);
			}
			
			$sql = "
				select
					count(*)
				from
					`t_data_game_clearData_queue`
				where
					`gameAreaId` = '{$gameAreaId}'
				and
					`status` <= 2
			";
				
			if($this->gmDatabase->getColumn($sql) > 0) {
				throw new Exception('', 5029);
			}
			
			$sql = "
				insert into
					`t_data_game_clearData_queue`
				set
					`gameAreaId` = '{$gameAreaId}',
					`operateUserId` = '{$this->currUserId}',
					`operateDatetime` = now(),
					`status` = 1
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
		log_message('debug', '=====调用GameArea->Manage->clearData结束=====');
	}
	
	
}