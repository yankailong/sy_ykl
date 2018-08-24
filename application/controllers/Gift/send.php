<?php
class Send extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Gift->Send->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Gift/');
		log_message('debug', '=====调用Gift->Send->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Gift/send.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Gift->Send->getListData接口=====');
		$this->verifyPrivilege();
		
		try{
            $page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			
                       
            $sql = "
				select
					<selectColumns>
				from
					`t_data_gift` a
                left join
                        `t_data_user` b
                on
                        a.`applyUserId` = b.`userId`
                order by
                		a.`time` desc
			";
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "a.`giftId`, a.`giftName` as `title`,from_unixtime(a.`time`) as `createTime` ,b.`name` as `operator`,   a.`flag` as `status`", $sql);
				
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			
			$tmpArray = $this->gmDatabase->getArray($getDataSql);
			
			foreach ($tmpArray as $key => $val) {
				$sql = "
					select
						`item{$this->currLanguage}Name` as itemName,
						sum(`count`) as `itemCount`
					from
						`t_data_gift_item` a
					left join
						`t_cfg_item` b
					on
						a.`itemId` = b.`itemId`
                                                and
                                                a.`itemType` = b.`itemType`
					where
						a.`giftId` = '{$val['giftId']}'
					group by
						b.`id`
						
				";
				$itemArray = $this->gmDatabase->getArray($sql);
				
				$itemString = '';
				
				foreach ($itemArray as $k => $v) {
					$itemString .= "{$v['itemName']} * {$v['itemCount']}</br>";
				}
				
				$tmpArray[$key]['item'] = $itemString;
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
		log_message('debug', '=====调用Gift->Send->getListData接口结束=====');
	}
	
	public function getList() {
		log_message('debug', '=====开始调用Gift->Send->getList接口=====');
		$this->verifyPrivilege();
		
		try{
			$sql = "
				select
					<selectColumns>
				from
					`t_data_gift`
                                where
                                        `flag` = 1
			";
			
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
			
			$getDataSql = str_replace('<selectColumns>', "`giftId`, `giftName`", $sql);
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
		log_message('debug', '=====调用Gift->Send->getList接口结束=====');
	}
	
	public function applyAll() {
		log_message('debug', '=====开始调用Gift->Send->applyAll接口=====');
		$this->verifyPrivilege();
		
		try{
			$giftName = $this->param->getParam('title', array('method' => 'string', 'maxLength' => 2048, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$itemString = $this->param->getParam('itemString', array());
                        if(!$itemString){
                            throw new Exception("请选择物品",1);
                        }
                        $sql = "
				insert into
					`t_data_gift`
				(
					`giftName`,
                                        `applyUserId`,
                                        `time`,
					`flag`
				)
				value
				(
					'{$giftName}',
                                        '{$this->currUserId}',
                                        unix_timestamp(now()),
					'1'
				)
			";
                        $this->gmDatabase->query($sql); 
                        $giftId = $this->gmDatabase->getLastInsertId();
                        
			
			
			if($itemString) {
				$itemArray = json_decode($itemString, true);
				
				foreach($itemArray as $item) {
					$itemId = $item['id'];
                                        $sql = "
                                                select
                                                        `itemId`,`itemType`
                                                from
                                                        `t_cfg_item`
                                                where
                                                       `id` = '{$itemId}' 
                                        ";
                                        $iteminfo = $this->gmDatabase->getRow($sql);
					$itemCount = $item['count'];
					
					
                                        $sql = "
                                                insert into
                                                        `t_data_gift_item`
                                                (
                                                        `giftId`,
                                                        `itemId`,
                                                        `itemType`,
                                                        `count`
                                                )
                                                value
                                                (
                                                        '{$giftId}',
                                                        '{$iteminfo['itemId']}',
                                                        '{$iteminfo['itemType']}',
                                                        '{$itemCount}'
                                                )
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
		log_message('debug', '=====调用Gift->Send->applyAll接口结束=====');
	}
//	
	public function del() {
		log_message('debug', '=====开始调用Gift->Send->approval接口=====');
		
		try {
			$giftId = $this->param->getParam('giftId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'post',true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			
			$sql = "
				update
                                       `t_data_gift`
                                set
                                       `flag` = 2
				where
                                       `giftId` = '{$giftId}'
			";
			$this->gmDatabase->query($sql);
			
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
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
		log_message('debug', '=====调用Gift->Send->approval接口结束=====');
	}
}