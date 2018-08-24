<?php
class Shop extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Statistics->Shop->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Statistics/');
		log_message('debug', '=====调用Statistics->Shop->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Statistics/shop.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Statistics->Shop->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
            $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1), 'post', true);
            $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1), 'post', true);
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);

			 // $sql="
    //                             select
    //                                     b.`item{$this->currLanguage}Name` as `itemName`,b.`itemId`
    //                             from
                                        
    //                                     `t_cfg_item` b
    //                             where
    //                                     b.`itemType` = 1
                                        
                                        
    //                         ";           
    //             $item = $this->gmDatabase->getArray($sql);
                
    //             foreach ($item as $key=>$val){
    //                 $itemName[$val['itemId']] = $val['itemName'];
    //                 // $itemId[$val['itemId']] = $val['itemName'];
                    
    //             }

                $sql="
                        select
                                a.`param`,b.`item{$this->currLanguage}Name` as `itemName`,b.`price`
                        from
                                `t_cfg_mysticalshop_param` a
                        left join
                                `t_cfg_item` b
                        on
                                a.`itemType` = b.`itemType`
                                and
                                a.`itemId` = b.`itemId`
                    ";
                $item = $this->gmDatabase->getArray($sql);
                foreach ($item as $key=>$val){
                    $itemName[$val['param']] = $val['itemName'];
                    // $itemPrice[$val['param']] = $val['price']; 
                }
			
						
            $sql = "
                select
					<selectColumns>
				from
					`log_gold_change`
				where
					`opway` =2074 and `value`<0
				
			";
                        
			if($startDate) {
				$sql .= "
					and
					FROM_UNIXTIME(`time`) >= '{$startDate} 00:00:00'
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					FROM_UNIXTIME(`time`) <= '{$endDate} 23:59:59'
				";
			}
                        
            $sql.='group by `param`';
           
            $getDataSql =str_replace('<selectColumns>', "from_unixtime(`time`) as `days`,`param` as `itemName`, abs(`value`) as `gold`,count(*) as `time`,count(distinct(`cid`)) as `amount`,`opway`,abs(`value`*count(*)) as `sum`", $sql);

            $getTotalSql = "select count(*) from ({$getDataSql}) e";

            if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
                        
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
            $this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);

            foreach ($this->returnData['data']['rows'] as $key => $val) {

                if(isset($itemName[$this->returnData['data']['rows'][$key]['itemName']])){
                   $this->returnData['data']['rows'][$key]['itemName'] = $itemName[$this->returnData['data']['rows'][$key]['itemName']];
                }else{
                    $this->returnData['data']['rows'][$key]['itemName']=$this->returnData['data']['rows'][$key]['itemName'];
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
		log_message('debug', '=====调用Statistics->Shop->getListData接口结束=====');
	}
    public function export() {
		log_message('debug', '=====开始调用Statistics->Shop->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "shop.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
            $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1),'get',true);
            $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1),'get',true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			 $sql="
                        select
                                a.`param`,b.`item{$this->currLanguage}Name` as `itemName`,b.`price`
                        from
                                `t_cfg_mysticalshop_param` a
                        left join
                                `t_cfg_item` b
                        on
                                a.`itemType` = b.`itemType`
                                and
                                a.`itemId` = b.`itemId`
                    ";
                $item = $this->gmDatabase->getArray($sql);
                foreach ($item as $key=>$val){
                    $itemName[$val['param']] = $val['itemName'];
                    // $itemPrice[$val['param']] = $val['price']; 
                }
			
						
            $sql = "
                select
					<selectColumns>
				from
					`log_gold_change`
				where
					`opway` =2074 and `value`<0
				
			";
                        
			if($startDate) {
				$sql .= "
					and
					FROM_UNIXTIME(`time`) >= '{$startDate} 00:00:00'
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					FROM_UNIXTIME(`time`) <= '{$endDate} 23:59:59'
				";
			}
                        
            $sql.='group by `param`';
           
            $getDataSql =str_replace('<selectColumns>', "from_unixtime(`time`) as `days`,`param` as `itemName`, abs(`value`) as `gold`,count(*) as `time`,count(distinct(`cid`)) as `amount`,`opway`,abs(`value`*count(*)) as `sum`", $sql);

			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);

			foreach ($this->returnData['data']['rows'] as $key => $val) {

                if(isset($itemName[$this->returnData['data']['rows'][$key]['itemName']])){
                   $this->returnData['data']['rows'][$key]['itemName'] = $itemName[$this->returnData['data']['rows'][$key]['itemName']];
                }else{
                    $this->returnData['data']['rows'][$key]['itemName']=$this->returnData['data']['rows'][$key]['itemName'];
                } 
            }
                        
            echo "物品名称\t购买次数\t购买人数\t消耗钻石\t购买消耗钻石占比\t"."\n";
            foreach ($this->returnData['data']['rows'] as $key => $value) {
                echo "{$value['itemName']}\t{$value['time']}\t{$value['amount']}\t{$value['sum']}\t\n";
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
		
		log_message('debug', '=====调用Statistics->Shop->export接口结束=====');
	}
}