<?php
class Manage extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '开始调用Server->Manage->__construct接口');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Server/');
		log_message('debug', '调用Server->Manage->__construct接口结束');
	}
	
	public function showView()
	{
		$this->load->view('module/Server/manage.htm');
	}
	
	public function getListData()
	{
		log_message('debug', '=====开始调用Server-Manage->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$serverTypeId = $this->param->getParam('serverTypeId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$maxGameAreaNum = $this->maxGameAreaNum();
			
			$sql = "
				select
					<selectColumns>
				from
					`t_data_server` a
				left join
					`t_cfg_server_type` b
				on
					a.`serverTypeId` = b.`serverTypeId`
				where
					1 = 1
			";
			
			if($serverTypeId <> '') {
				$sql .= " and b.`serverTypeId` = '{$serverTypeId}'";
			}
			
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "a.`serverId`, a.`serverName`, a.`serverTypeId`, b.`serverType{$this->currLanguage}Name` as `serverTypeName`, a.`status`, a.`maxGameAreaNum`, a.`memo`", $sql);
			
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			
			$tmpArray = $this->gmDatabase->getArray($getDataSql);
			
			foreach ($tmpArray as $key => $val) {
				$ipAddress = '';
				$sql = "
					select
						c.`ipType{$this->currLanguage}Name` as `ipTypeName`,
						b.`ipAddress`
					from
						`t_data_server_ip` a
					left join
						`t_data_ip` b
					on
						a.`ipId` = b.`ipId`
					left join 
						`t_cfg_ip_type` c
					on
						b.`ipTypeId` = c.`ipTypeId`
					where
						a.`serverId` = '{$val['serverId']}'
				";
				$ipInfoArray = $this->gmDatabase->getArray($sql);
				
				foreach ($ipInfoArray as $ipInfo) {
					$ipAddress .= "{$ipInfo['ipTypeName']}：{$ipInfo['ipAddress']}<br />";
				}
				
				$tmpArray[$key]['ipAddress'] = $ipAddress;
				
				
				
				
			}
			
			$this->returnData['data']['rows'] = $tmpArray;
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
		log_message('debug', '=====调用Server-Manage->getListData接口结束=====');
	}
	
	
	public function add()
	{
		log_message('debug', '=====开始调用Server->Manage->add接口=====');
		$this->verifyPrivilege();
		
		try {
			$serverName = $this->param->getParam('serverName', array('method' => 'string', 'emptyErrorCode' => 4001, 'invalidErrorCode' => 4002));
			$serverTypeId = $this->param->getParam('serverTypeId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 4003, 'invalidErrorCode' => 1));
			$maxGameAreaNum = $this->param->getParam('maxGameAreaNum', array('method' => 'int', 'min' => 0, 'emptyErrorCode' => 4005, 'invalidErrorCode' => 1));
			$memo = $this->param->getParam('memo', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$sql = "
				insert into
					`t_data_server`
				(
					`serverName`,
					`serverTypeId`,
					`maxGameAreaNum`,
					`status`,
					`memo`
				)
				value
				(
					'{$serverName}',
					'{$serverTypeId}',
					'{$maxGameAreaNum}',
					'1',
					'{$memo}'
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
				$this->setErrorCode(4004);
			}
			else {
				$this->setErrorCode(1);
			}
		}
		
		catch(Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		$this->returnJson();
		log_message('debug', '=====调用Server->Manage->add接口结束=====');
	}
	
	public function modify()
	{
		log_message('debug', '=====开始调用Server->Manage->modify接口=====');
		$this->verifyPrivilege();
		
		try {
			$serverId = $this->param->getParam('serverId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$serverName = $this->param->getParam('serverName', array('method' => 'string', 'emptyErrorCode' => 4001, 'invalidErrorCode' => 4002));
			$serverTypeId = $this->param->getParam('serverTypeId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 4003, 'invalidErrorCode' => 1));
			$maxGameAreaNum = $this->param->getParam('maxGameAreaNum', array('method' => 'int', 'min' => 0, 'emptyErrorCode' => 4005, 'invalidErrorCode' => 1));
			$status = $this->param->getParam('status', array('method' => 'int', 'min' => 1, 'max' => 2, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$memo = $this->param->getParam('memo', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			
			$sql = "
				select
					count(*)
				from
					`t_data_game_area`
				where
					`portGroup` > '{$maxGameAreaNum}'
					and
					`serverId` = '{$serverId}'
			";
			
			if($this->gmDatabase->getColumn($sql) > 0) {
				throw new Exception('', 4006);
			}
			
			$sql = "
				update
					`t_data_server`
				set
					`serverName` = '{$serverName}',
					`serverTypeId` = '{$serverTypeId}',
					`maxGameAreaNum` = '{$maxGameAreaNum}',
					`status` = '{$status}',
					`memo` = '{$memo}'
				where
					`serverId` = '{$serverId}'
			";
			$this->gmDatabase->query($sql);
		}
		
		catch(MY_Param_Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		catch(MY_Mysql_Exception $e) {
			$errorCode = $e->getCode();
		
			if($errorCode === 1062) {
				$this->setErrorCode(4004);
			}
			else {
				$this->setErrorCode(1);
			}
		}
		
		catch(Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		$this->returnJson();
		log_message('debug', '=====调用Server->Manage->modify接口结束=====');
	}
	
	
	public function getServerIp()
	{
		log_message('debug', '=====开始调用Server->Manage->getServerIp接口=====');
		
		try {
			$serverId = $this->param->getParam('serverId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			
			$sql = "
				select
					a.`ipId`,
					c.`ipType{$this->currLanguage}Name` as `ipTypeName`,
					a.`ipAddress`,
					b.`serverId`
				from
					`t_data_ip` a
				left join
					`t_data_server_ip` b
				on
					a.`ipId` = b.`ipId`
				left join
					`t_cfg_ip_type` c
				on
					a.ipTypeId = c.ipTypeId
				where
					serverid = '{$serverId}'
					or
					serverId is null
			";
			$this->returnData['data']['rows'] = $this->gmDatabase->getArray($sql);
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
		log_message('debug', '=====调用Server->Manage->getServerIp接口结束=====');
	}
	
	public function setServerIp()
	{
		log_message('debug', '=====开始调用Server->Manage->setServerIp接口=====');
		$this->verifyPrivilege();
		
		try {
			$serverId = $this->param->getParam('serverId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$ipIdString = $this->param->getParam('ipIdString', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			
			$sql = "
				update
					`t_data_server_ip`
				set
					`serverId` = NULL
				where
					`serverId` = '{$serverId}'
			";
			$this->gmDatabase->query($sql);
			
			if($ipIdString) {
				$ipIdArray = explode(',', $ipIdString);
				foreach ($ipIdArray as $ipId) {
					$sql = "
						insert into
							`t_data_server_ip`
						(
							`serverId`,
							`ipId`
						)
						value
						(
							'{$serverId}',
							'{$ipId}'
						)
						on duplicate key update
							`serverId` = '{$serverId}'
					";
					$this->gmDatabase->query($sql);
				}
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
		log_message('debug', '=====调用Server->Manage->setServerIp接口结束=====');
	}
	
	public function getMaxGameAreaNum() {
		log_message('debug', '=====开始调用Server->Manage->getMaxGameAreaNum接口=====');
		
		try {
			$this->returnData['data']['maxGameAreaNum'] = $this->maxGameAreaNum();
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
		log_message('debug', '=====调用Server->Manage->getMaxGameAreaNum接口结束=====');
	}
	
	public function setPortGroupStatus() {
		log_message('debug', '=====开始调用Server->Manage->setPortGroupStatus接口=====');
		$this->verifyPrivilege();
		
		try {
			$serverId = $this->param->getParam('serverId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$data = $this->param->getParam('data', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			
			$this->gmDatabase->closeAutoCommit();
			
			if($data) {
				$dataArray = json_decode($data, true);
				
				$sql = "
					select
						`maxGameAreaNum`
					from
						`t_data_server`
					where
						`serverId` = '{$serverId}'
				";
				
				$maxPortGroupNum = $this->gmDatabase->getColumn($sql);
				
				if($maxPortGroupNum) {
					foreach ($dataArray as $v) {
						if($v['portGroup'] <= $maxPortGroupNum) {
							if($v['status'] === 2) {
								$sql = "
									select
										count(*)
									from
										`t_data_game_area`
									where
										`serverId` = '{$serverId}'
										and
										`portGroup` = '{$v['portGroup']}'
										and
										`status` <= 5
								";
								
								if($this->gmDatabase->getColumn($sql) > 0) {
									throw new Exception('', 4007);
								}
							}
							
							$sql = "
								insert into
									`t_data_server_portGroup`
								set
									`serverId` = '{$serverId}',
									`portGroup` = '{$v['portGroup']}',
									`status` = '{$v['status']}'
								on duplicate key update
									`status` = '{$v['status']}'
							";
							$this->gmDatabase->query($sql);
						}
					}
				}
			}
			
			$this->gmDatabase->commit();
		}
		
		catch(MY_Param_Exception $e) {
			$this->gmDatabase->rollback();
			$this->setErrorCode($e->getCode());
		}
		
		catch(MY_Mysql_Exception $e) {
			$this->gmDatabase->rollback();
			$this->setErrorCode(1);
		}
		
		catch(Exception $e) {
			$this->gmDatabase->rollback();
			$this->setErrorCode($e->getCode());
		}
		
		
		$this->gmDatabase->openAutoCommit();
		$this->returnJson();
		log_message('debug', '=====调用Server->Manage->setPortGroupStatus接口结束=====');
	}
	
	protected function maxGameAreaNum() {
		$sql = "
			select
				max(`maxGameAreaNum`) as `maxGameAreaNum`
			from
				`t_data_server`
			where
				`serverTypeId` in (3)
		";
			
		$maxGameAreaNum = $this->gmDatabase->getColumn($sql);
		return $maxGameAreaNum;
	}
}