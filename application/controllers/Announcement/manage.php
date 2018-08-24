<?php
class Manage extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Announcement->Manage->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Announcement/');
		log_message('debug', '=====调用Announcement->Manage->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Announcement/manage.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Announcement->Manage->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
                        
			
			$sql = "
				select
					<selectColumns>
				from
					`t_data_announcement_task` a
				left join
					`t_data_user` b
				on
					a.`operatorUserId` = b.`userId`
				where
					1 = 1
			";
                       
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
                        $getDataSql = str_replace('<selectColumns>', "a.`content`, a.`startDatetime`, a.`endDatetime`, a.`timeInterval`, a.`type` as `typeName`,b.`username` as `operatorUserName`, a.`operatorDatetime`", $sql);			
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
		log_message('debug', '=====调用Announcement->Manage->getListData接口结束=====');
	}
	
	public function add() {
		log_message('debug', '=====开始调用Announcement->Manage->add接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
			$startDatetime = $this->param->getParam('startDatetime', array('method' => 'string', 'emptyErrorCode' => 501003, 'invalidErrorCode' => 1));
			$endDatetime = $this->param->getParam('endDatetime', array('method' => 'string', 'emptyErrorCode' => 501004, 'invalidErrorCode' => 1));
                        $typeId = $this->param->getParam('typeId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 501005, 'invalidErrorCode' => 1));
			$timeInterval = $this->param->getParam('timeInterval', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 501001, 'invalidErrorCode' => 501002));
			$content = $this->param->getParam('content', array('method' => 'string', 'maxLength' => 256, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$this->gmDatabase->closeAutoCommit();
			$sql = "
				insert into
					`t_data_announcement_task` 
				set
					`taskType` = 1,
					`content` = '{$content}',
					`startDateTime` = '{$startDatetime}',
                                        `endDateTime` = '{$endDatetime}',
					`timeInterval` = '{$timeInterval}',
					`operatorUserId` = '{$this->currUserId}',
                                        `type` = '{$typeId}',
					`operatorDateTime` = now()
			";
			$this->gmDatabase->query($sql);
			$taskId = $this->gmDatabase->getLastInsertId();
			$gameAreaIdArray = explode(',', $gameAreaId);
			
			foreach ($gameAreaIdArray as $gameAreaIdValue) {
				$sql = "
					insert into
						`t_data_announcement_task_info`
					set
						`taskId` = '{$taskId}',
						`gameAreaId` = '{$gameAreaIdValue}',
						`status` = 1
				";
				$this->gmDatabase->query($sql);
			}
			
			$this->gmDatabase->commit();
			$this->gmDatabase->openAutoCommit();
		}
		
		catch(MY_Param_Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		catch(MY_Mysql_Exception $e) {
			$this->gmDatabase->rollback();
			$this->setErrorCode(1);
		}
		
		catch(Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		$this->returnJson();
		log_message('debug', '=====调用Announcement->Manage->add接口结束=====');
	}
}