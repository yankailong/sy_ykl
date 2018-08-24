<?php
class Manage extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Card->Manage->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Card/');
		log_message('debug', '=====调用Card->Manage->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Card/manage.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Card->Manage->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			
			$sql = "
				select
					<selectColumns>
				from
					`t_data_card`
			";
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "`cardId`, `cardName`,`useLimit`", $sql);
				
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			
			$this->returnData['data']['rows'] = $this->gmDatabase->getArray($getDataSql);
			
			foreach ($this->returnData['data']['rows'] as $key => $val) {
				$sql = "
					select
						a.`itemId`,
						b.`item{$this->currLanguage}Name` as `itemName`,
						a.`count`
					from
						`t_data_card_content` a
					left join
						`t_cfg_item` b
					on
						a.`itemId` = b.`id`
					where
						a.`cardId` = '{$val['cardId']}'
				";
				$itemArray = $this->gmDatabase->getArray($sql);
				$this->returnData['data']['rows'][$key]['cardContent'] =json_encode($itemArray);
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
		log_message('debug', '=====调用Card->Manage->getListData接口失败=====');
	}
	
	public function add() {
		log_message('debug', '=====开始调用Card->Manage->add接口=====');
		$this->verifyPrivilege();
		
		try {
			$cardName = $this->param->getParam('cardName', array('method' => 'string', 'maxLength' => 64, 'emptyErrorCode' => 301001, 'invalidErrorCode' => 301002));
			$useLimit = $this->param->getParam('useLimit', array('method' => 'int', 'min' => 1, 'max' => 3, 'emptyErrorCode' => 301003, 'invalidErrorCode' => 1));
			
			$sql = "
				insert into
					`t_data_card`
				set
					`cardName` = '{$cardName}',
					`useLimit` = '{$useLimit}'
			";
			$this->gmDatabase->query($sql);
		}
		
		catch(MY_Param_Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		catch(MY_Mysql_Exception $e) {
			$errorCode = $e->getCode();
			
			if($errorCode === 1062) {
				$this->setErrorCode(301004);
			}
			else {
				$this->setErrorCode(1);
			}
		}
		
		catch(Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		$this->returnJson();
		log_message('debug', '=====调用Card->Manage->add接口结束=====');
	}
	
	public function modify() {
		log_message('debug', '=====开始调用Card->Manage->modify接口=====');
		$this->verifyPrivilege();
		
		try {
			$cardId = $this->param->getParam('cardId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$cardName = $this->param->getParam('cardName', array('method' => 'string', 'maxLength' => 64, 'emptyErrorCode' => 301001, 'invalidErrorCode' => 301002));
			$useLimit = $this->param->getParam('useLimit', array('method' => 'int', 'min' => 1, 'max' => 3, 'emptyErrorCode' => 301003, 'invalidErrorCode' => 1));
				
			$sql = "
				update
					`t_data_card`
				set
					`cardName` = '{$cardName}',
					`useLimit` = '{$useLimit}'
				where
					`cardId` = '{$cardId}'
			";
			$this->gmDatabase->query($sql);
		}
		
		catch(MY_Param_Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		catch(MY_Mysql_Exception $e) {
			$errorCode = $e->getCode();
				
			if($errorCode === 1062) {
				$this->setErrorCode(301004);
			}
			else {
				$this->setErrorCode(1);
			}
		}
		
		catch(Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		$this->returnJson();
		log_message('debug', '=====调用Card->Manage->modify接口结束=====');
	}
	
	public function assignItem() {
		log_message('debug', '=====开始调用Card->Manage->assignItem接口=====');
		$this->verifyPrivilege();
		
		try {
			$cardId = $this->param->getParam('cardId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$itemString = $this->param->getParam('itemString', array(), 'post', true);
			
			$sql = "
				delete	from
					`t_data_card_content`
				where
					`cardId` = '{$cardId}'
			";
			$this->gmDatabase->query($sql);
			
			if($itemString) {
				$itemArray = json_decode($itemString, true);
				
				foreach ($itemArray as $item) {
					$sql = "
						insert into
							`t_data_card_content`
						set
							`cardId` = '{$cardId}',
							`itemId` = '{$item['id']}',
							`count` = '{$item['count']}'
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
		log_message('debug', '=====调用Card->Manage->assignItem接口结束=====');
	}
}