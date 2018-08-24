<?php
class Apply extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Pay->Apply->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Pay/');
		log_message('debug', '=====调用Pay->Apply->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Pay/apply.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Pay->Apply->getListData=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
                        $page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			
			$sql = "
				select
					<selectColumns>
				from
					`t_data_pay_apply` a
				left join
					`t_data_game_area` b
				on
					a.`gameAreaId` = b.`gameAreaId`
				left join
					`t_data_operator` c
				on
					b.`operatorId` = c.`operatorId`
				left join
					`t_data_user` d
				on
					a.`applyUserId` = d.`userId`
                                left join
					`t_data_user` e
				on
					a.`approvalUserId` = e.`userId`
				where
					a.`operatorId` = '{$operatorId}'
                                        and
                                         find_in_set(a.`gameAreaId`,'{$gameAreaId}' )
			";
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
			
			
			$getDataSql = str_replace('<selectColumns>', "a.`applyId`,a.`days`, c.`operatorName`, b.`areaNum`, a.`cid`, a.`roleName`, a.`money`, d.`userName` as `applyUserName`, a.`applyDatetime`,e.`userName` as `approvalUserName`, a.`status`", $sql);
			
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
		log_message('debug', '=====调用Pay->Apply->getListData结束=====');
	}
	
	public function add() {
		log_message('debug', '=====开始调用Pay->Apply->add=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5001, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId', array('method' => 'string',  'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$roleName = $this->param->getParam('roleName', array('method' => 'string', 'maxLength' => 64, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$money = $this->param->getParam('money', array('method' => 'int', 'min' => 1,  'emptyErrorCode' => 208001, 'invalidErrorCode' => 1));
			$day = $this->param->getParam('day', array('method' => 'int', 'min' =>0,  'emptyErrorCode' => 208002, 'invalidErrorCode' => 208003));
			
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			
			if( $roleName === '') {
				throw new Exception('', 202);
			}
			$sql = "
				select
                                        `cid`,`name`
                                from
                                        `mem_character`
                                where
                                        `name` = '{$roleName}'
			";
			
			if( ($row = $this->gameDatabase->getRow($sql)) === false ) {
				throw new Exception('', 204);
			}
			
			$sql = "
				insert into
					`t_data_pay_apply`
				set
					`operatorId` = '{$operatorId}',
                                        `gameAreaId` = '{$gameAreaId}',
                                        `cid` = '{$row['cid']}',
					`roleName` = '{$row['name']}',
					`money` = '{$money}' ,
                                        `days` = '{$day}',
					`applyUserId` = '{$this->currUserId}',
					`applyDatetime` = now(),
					`status` = '0'
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
		log_message('debug', '=====调用Pay->Apply->add结束=====');
	}
	
	public function approval() {
		log_message('debug', '=====开始调用Pay->Apply->approval=====');
		$this->verifyPrivilege();
		
		try {
			$applyId = $this->param->getParam('applyId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$status = $this->param->getParam('status', array('method' => 'int', 'min' => 0, 'max' => 3, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			
			$sql = "
				update
					`t_data_pay_apply`
				set
					`status` = '{$status}',
					`approvalUserId` = '{$this->currUserId}',
                                        `approvalDatetime` = now()
				where
					`applyId` = '{$applyId}'
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
		log_message('debug', '=====调用Pay->Apply->approval结束=====');
	}
}