<?php
class Gm extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Announcement->Gm->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Announcement/');
		log_message('debug', '=====调用Announcement->Gm->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Announcement/gm.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Announcement->Gm->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
                        $page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
                        
			$sql = "
				select
					<selectColumns>
				from
					`sys_user` a
                                left join
                                        `mem_character` b
                                on
                                        a.`uid` = b.`uid`
                                where
                                        a.`type` <> 0
			";
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "a.`uid`,b.`cid`, b.`name` as `roleName`,b.`level` as `roleLevel`,a.`type` as `gmLevel`,'{$operatorId}' as `operatorId`", $sql);
				
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
			
//			foreach ($this->returnData['data']['rows'] as $key => $val) {
//				$sql = "
//					select
//						a.`itemId`,
//						b.`item{$this->currLanguage}Name` as `itemName`,
//						a.`count`
//					from
//						`t_data_card_content` a
//					left join
//						`t_cfg_item` b
//					on
//						a.`itemId` = b.`id`
//					where
//						a.`cardId` = '{$val['cardId']}'
//				";
//				$itemArray = $this->gmDatabase->getArray($sql);
//				$this->returnData['data']['rows'][$key]['cardContent'] =json_encode($itemArray);
//			}
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
		log_message('debug', '=====调用Announcement->Gm->getListData接口失败=====');
	}
	
	public function add() {
		log_message('debug', '=====开始调用Announcement->Gm->add接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
                        $roleName = $this->param->getParam('roleName', array('method' => 'string', 'maxLength' => 64, 'emptyErrorCode' => 501006, 'invalidErrorCode' => 301002));
			$level = $this->param->getParam('level', array('method' => 'int', 'min' => 1, 'max' => 3, 'emptyErrorCode' => 501007, 'invalidErrorCode' => 1));
			$this->initGameAreaInfo($operatorId,$gameAreaId,$this->currUserId);
                        $sql = "
                                
                                    select
                                            a.`uid`,a.`type`
                                    from
                                            `sys_user` a
                                    left join
                                            `mem_character` b
                                    on
                                            a.`uid` = b.`uid`
                                    where 
                                            b.`name` = '{$roleName}'
                                
			";
                        $rowArray = $this->gameDatabase->getArray($sql);
                        foreach ($rowArray as $value){
                            $uid = $value['uid'];
                            $type = $value['type'];
                        }
                        $sql = "
                                
                                    update
                                           `sys_user`
                                    set
                                            `type` = '{$level}'
                                    where
                                            `uid`  = '{$uid}'
                                        
                                
			";
                        $this->gameDatabase->query($sql);
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
		log_message('debug', '=====调用Announcement->Gm->add接口结束=====');
	}
	
	public function modify() {
		log_message('debug', '=====开始调用Announcement->Gm->modify接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
                        $uid = $this->param->getParam('uid', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$roleName = $this->param->getParam('roleName', array('method' => 'string', 'maxLength' => 64, 'emptyErrorCode' => 501006, 'invalidErrorCode' => 301002));
			$level = $this->param->getParam('levelId', array('method' => 'int', 'min' => 0, 'max' => 3, 'emptyErrorCode' => 501007, 'invalidErrorCode' => 1));
			$this->initGameAreaInfo($operatorId,$gameAreaId,$this->currUserId);	
			$sql = "
				update
					`sys_user`
				set
					`type` = '{$level}'
				where
					`uid` = '{$uid}'
			";
			$this->gameDatabase->query($sql);
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
		log_message('debug', '=====调用Announcement->Gm->modify接口结束=====');
	}

}