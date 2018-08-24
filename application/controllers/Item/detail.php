<?php
class Detail extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '开始调用Item->Detail->__construct接口');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Item/');
		log_message('debug', '调用Item->Detail->__construct接口结束');
	}
	
	public function showView() {
		$this->load->view('module/Item/detail.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Item->Detail->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
			$account = $this->param->getParam('account', array('method' => 'string',   'emptyErrorCode' => 1,'invalidErrorCode' => 1), 'post', true);
			$roleName = $this->param->getParam('roleName', array('method' => 'string',  'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
                        $getTypeId = $this->param->getParam('getTypeId', array('method' => 'int','min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'post', true);
                        $itemType = $this->param->getParam('itemType', array('method' => 'int','min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'post', true);
                        $itemId = $this->param->getParam('itemId', array('method' => 'int','min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'post', true);
			$startDateTime = $this->param->getParam('startDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$endDateTime = $this->param->getParam('endDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$id = $this->param->getParam('id', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
				
			
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			$sql = "
				select
					`itemType`,
					`itemId`,
					`item{$this->currLanguage}Name` as `itemName`
				from
					`t_cfg_item`
			";
			$itemArray = $this->gmDatabase->getArray($sql);
                        foreach($itemArray as $key => $value){
                            $iteminfo["{$value['itemType']}_{$value['itemId']}"] =$value['itemName'] ;
                        }
                        
			if($id) {
				$sql = "
					select
						`itemType`,
						`itemId`
					from
						`t_cfg_item`
					where
						`id` = '{$id}'
				";
				
				if( ( $row = $this->gmDatabase->getRow($sql) ) === false ) {
					throw new Exception('', 205);
				}
				else {
					$itemType1 = $row['itemType'];
					$itemId1 = $row['itemId'];
				}
			}
                        
                        $sql="
                                select
                                        `functionId`,`function{$this->currLanguage}Name` as `functionName`
                                from
                                        `t_cfg_item_function`
                            ";
                        $way = $this->gmDatabase->getArray($sql);
                        $wayArray = array();
                        
                        foreach ($way as  $value){
                            $wayArray[$value['functionId']] = $value['functionName'];
                        }
			$sql = "
				select
					<selectColumns>
				from
					`log_item_change` a
                                left join
                                        `mem_character` b
                                on
                                        a.`cid` = b.`cid`
                                 where
                                        1=1
			"; 
                                        	
			if($startDateTime) {
				$sql .= " and FROM_UNIXTIME(a.`time`) >= '{$startDateTime}'";
			}
			
			if($endDateTime) {
				$sql .= "  and FROM_UNIXTIME(a.`time`) <= '{$endDateTime}'";
			}
                        if($getTypeId){
                                $sql .=" and a.`flag` ='{$getTypeId}'";
                        }
                        if($account) {
				$sql .= " and a.`cid` = '{$account}'";
			}
			
			if($roleName) {
				$sql .= " and a.`name` = '{$roleName}'";
			}
			if($id) {
				$sql .= " and a.`class` = '{$itemType1}'";
				$sql .= " and a.`id` = '{$itemId1}'";
			}
			if($itemType && $itemId) {
				$sql .= " and a.`class` = '{$itemType}'";
				$sql .= " and a.`id` = '{$itemId}'";
			}
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "a.`cid`, a.`name`, a.`id` as `itemName`, a.`class` as `itemType`,a.`flag`, FROM_UNIXTIME(a.`time`) as `time`, a.`count`,a.`reason`,a.`srcid`", $sql);
			
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
			
			foreach ($this->returnData['data']['rows'] as $key => $val) {
                            if(isset($wayArray[$this->returnData['data']['rows'][$key]['reason']])){
                                $this->returnData['data']['rows'][$key]['reason'] = $wayArray[$this->returnData['data']['rows'][$key]['reason']];
                            }else{
                                $this->returnData['data']['rows'][$key]['reason']=$this->returnData['data']['rows'][$key]['reason'];
                            }
                            if(isset($iteminfo["{$this->returnData['data']['rows'][$key]['itemType']}_{$this->returnData['data']['rows'][$key]['itemName']}"]) ) {
                                 $this->returnData['data']['rows'][$key]['itemName'] =$iteminfo["{$this->returnData['data']['rows'][$key]['itemType']}_{$this->returnData['data']['rows'][$key]['itemName']}"];
			    }
		            else {
				 $this->returnData['data']['rows'][$key]['itemName'] =$this->returnData['data']['rows'][$key]['itemName'] ;
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
		log_message('debug', '=====调用Item->Detail->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Item->Detail->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "item.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
                        
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
			$account = $this->param->getParam('account', array('method' => 'string',   'emptyErrorCode' => 1,'invalidErrorCode' => 1),'get',true);
			$roleName = $this->param->getParam('roleName', array('method' => 'string',  'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get',true);
                        $itemType = $this->param->getParam('itemType', array('method' => 'int','min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get', true);
                        $itemId = $this->param->getParam('itemId',array('method' => 'int','min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get', true);
                        $getTypeId = $this->param->getParam('getTypeId', array('method' => 'int','min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get',true);
			$startDateTime = $this->param->getParam('startDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get',true);
			$endDateTime = $this->param->getParam('endDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get',true);
			$id = $this->param->getParam('id', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get',true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			$sql = "
				select
					`itemType`,
					`itemId`,
					`item{$this->currLanguage}Name` as `itemName`
				from
					`t_cfg_item`
			";
			$itemArray = $this->gmDatabase->getArray($sql);
                        foreach($itemArray as $key => $value){
                            $iteminfo["{$value['itemType']}_{$value['itemId']}"] =$value['itemName'] ;
                        }
                        
			if($id) {
				$sql = "
					select
						`itemType`,
						`itemId`
					from
						`t_cfg_item`
					where
						`id` = '{$id}'
				";
				
				if( ( $row = $this->gmDatabase->getRow($sql) ) === false ) {
					throw new Exception('', 205);
				}
				else {
					$itemType1 = $row['itemType'];
					$itemId1 = $row['itemId'];
				}
			}
                        
                        $sql="
                                select
                                        `functionId`,`function{$this->currLanguage}Name` as `functionName`
                                from
                                        `t_cfg_item_function`
                            ";
                        $way = $this->gmDatabase->getArray($sql);
                        $wayArray = array();
                        
                        foreach ($way as  $value){
                            $wayArray[$value['functionId']] = $value['functionName'];
                        }
			$sql = "
				select
					<selectColumns>
				from
					`log_item_change` a
                                left join
                                        `mem_character` b
                                on
                                        a.`cid` = b.`cid`
                                 where
                                        1=1
			"; 
                                        	
			if($startDateTime) {
				$sql .= " and FROM_UNIXTIME(a.`time`) >= '{$startDateTime}'";
			}
			
			if($endDateTime) {
				$sql .= "  and FROM_UNIXTIME(a.`time`) <= '{$endDateTime}'";
			}
                        if($getTypeId){
                                $sql .=" and a.`flag` ='{$getTypeId}'";
                        }
                        if($account) {
				$sql .= " and a.`cid` = '{$account}'";
			}
			
			if($roleName) {
				$sql .= " and a.`name` = '{$roleName}'";
			}
			if($id) {
				$sql .= " and a.`class` = '{$itemType1}'";
				$sql .= " and a.`id` = '{$itemId1}'";
			}
			if($itemType && $itemId) {
				$sql .= " and a.`class` = '{$itemType}'";
				$sql .= " and a.`id` = '{$itemId}'";
			}
			$getDataSql = str_replace('<selectColumns>', "a.`cid`, a.`name`, a.`id` as `itemName`, a.`class` as `itemType`,a.`flag`, FROM_UNIXTIME(a.`time`) as `time`, a.`count`,a.`reason`,a.`srcid`", $sql);
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
			
			foreach ($this->returnData['data']['rows'] as $key => $val) {
                            if(isset($wayArray[$this->returnData['data']['rows'][$key]['reason']])){
                                $this->returnData['data']['rows'][$key]['reason'] = $wayArray[$this->returnData['data']['rows'][$key]['reason']];
                            }else{
                                $this->returnData['data']['rows'][$key]['reason']=$this->returnData['data']['rows'][$key]['reason'];
                            }
                            if(isset($iteminfo["{$this->returnData['data']['rows'][$key]['itemType']}_{$this->returnData['data']['rows'][$key]['itemName']}"]) ) {
                                 $this->returnData['data']['rows'][$key]['itemName'] =$iteminfo["{$this->returnData['data']['rows'][$key]['itemType']}_{$this->returnData['data']['rows'][$key]['itemName']}"];
			    }
		            else {
				 $this->returnData['data']['rows'][$key]['itemName'] =$this->returnData['data']['rows'][$key]['itemName'] ;
                            }
                            if($this->returnData['data']['rows'][$key]['flag'] == 1 ) {
                                 $this->returnData['data']['rows'][$key]['flag'] = '获得';
			    }
		            else {
				 $this->returnData['data']['rows'][$key]['flag'] ='失去' ;
                            }
                            if($this->returnData['data']['rows'][$key]['itemType'] == 1 ) {
                                 $this->returnData['data']['rows'][$key]['itemType'] = '普通道具';
			    }
		            else if($this->returnData['data']['rows'][$key]['itemType'] == 2){
				 $this->returnData['data']['rows'][$key]['itemType'] ='装备' ;
                            }
                            else if($this->returnData['data']['rows'][$key]['itemType'] == 3){
				 $this->returnData['data']['rows'][$key]['itemType'] ='宝石' ;
                            }
                            else if($this->returnData['data']['rows'][$key]['itemType'] == 4){
				 $this->returnData['data']['rows'][$key]['itemType'] ='货币' ;
                            }
                            else if($this->returnData['data']['rows'][$key]['itemType'] == 5){
				 $this->returnData['data']['rows'][$key]['itemType'] ='符文' ;
                            }
                            else if($this->returnData['data']['rows'][$key]['itemType'] == 6){
				 $this->returnData['data']['rows'][$key]['itemType'] ='宠物' ;
                            }
                            else if($this->returnData['data']['rows'][$key]['itemType'] == 7){
				 $this->returnData['data']['rows'][$key]['itemType'] ='幻兽装备' ;
                            }
                            else if($this->returnData['data']['rows'][$key]['itemType'] == 8){
				 $this->returnData['data']['rows'][$key]['itemType'] ='护身符' ;
                            }
			}
                        echo "角色id\t角色名\t物品名称\t物品类型\t收支类型\t数量\t消费原因\t时间"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['cid']}\t{$value['name']}\t{$value['itemName']}\t{$value['itemType']}\t{$value['flag']}\t{$value['count']}\t{$value['reason']}\t{$value['time']}\t\n";
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
		
		log_message('debug', '=====调用Item->Detail->export接口结束=====');
	}
}