<?php
class First extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Currency->First->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Currency/');
		log_message('debug', '=====调用Currency->First->__construct接口结束=====');
	}
	
	
	public function showView()
	{
		$this->load->view('module/Currency/first.htm');
	}
	
	public function getListData()
	{
		log_message('debug', '=====开始调用Currency->First->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 2040001, 'invalidErrorCode' => 1));
                        $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 2040001, 'invalidErrorCode' => 1));
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
                        $sort = $this->param->getParam('sort', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$order = $this->param->getParam('order', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
                         $sql="
                                select
                                        a.`param`,b.`item{$this->currLanguage}Name` as `itemName`,b.`price`
                                from
                                        `t_cfg_itemshop_param` a
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
                            $itemPrice[$val['param']] = $val['price'];
                        }
			$sql = "
                                select
                                        <selectColumns>
                                from
                                        (
                                        select
                                                *
                                        from
                                                (
                                                        select
                                                                *
                                                        from
                                                                `log_gold_change` a
                                                        where
                                                                a.`opway` = 2032
                                                        union all
                                                                select
                                                                        *
                                                                from
                                                                        `log_currency` b
                                                                where
                                                                        b.`opway` = 1002
                                                                and b.`type` = 2
                                                ) c
                                        group by
                                                c.`name`
                                        order by
                                                c.`time` ASC
                                                ) d
                                         where
                                                    1 = 1
			";
			
			if($startDate) {
				$sql .= " and FROM_UNIXTIME(d.`time`) >= '{$startDate}' ";
			}
			
			if($endDate) {
				$sql .= " and FROM_UNIXTIME(d.`time`) <= '{$endDate}' ";
			}
                       
                        
			
                        $getSumSql = str_replace('<selectColumns>', "abs(sum(d.`value`))", $sql);
                        $this->gameDatabase->getColumn($getSumSql);
			
			$getDataSql = str_replace('<selectColumns>', "COUNT(d.`name`) as `roleNum`,d.`param` as `itemName`,d.`param` as `price`,abs(sum(d.`value`)) as `allPrice`,d.`time`,round(abs(sum(d.`value`))/'{$this->gameDatabase->getColumn($getSumSql)}'*100,2) as `rate`", $sql);
                        $dataSql = $getDataSql .=" group by d.`param` ";
                        $getTotalSql = "select count(*) from ({$dataSql}) as f";
                        $this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
                        if($sort && $order) {
				$dataSql .= " order by {$sort} {$order}";
			}
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$dataSql .= " limit {$startRow}, {$rows}";
			}
                        
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($dataSql);	
                        foreach ($this->returnData['data']['rows'] as $key => $val) {
                            if(isset($itemName[$this->returnData['data']['rows'][$key]['itemName']])){
                               $this->returnData['data']['rows'][$key]['itemName'] = $itemName[$this->returnData['data']['rows'][$key]['itemName']];
                            }else{
                                $this->returnData['data']['rows'][$key]['itemName']=$this->returnData['data']['rows'][$key]['itemName'];
                            }
                            if(isset($itemPrice[$this->returnData['data']['rows'][$key]['price']])){
                               $this->returnData['data']['rows'][$key]['price'] = $itemPrice[$this->returnData['data']['rows'][$key]['price']];
                            }else{
                                $this->returnData['data']['rows'][$key]['price']=$this->returnData['data']['rows'][$key]['price'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['price'])){
                               $this->returnData['data']['rows'][$key]['itemNum'] = $this->returnData['data']['rows'][$key]['allPrice']/$this->returnData['data']['rows'][$key]['price'];
                            }else{
                                $this->returnData['data']['rows'][$key]['itemNum']='';
                            }
                            if(isset($this->returnData['data']['rows'][$key]['rate'])){
                                $this->returnData['data']['rows'][$key]['rate'] =$this->returnData['data']['rows'][$key]['rate']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['rate'] = $this->returnData['data']['rows'][$key]['rate'];
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
		log_message('debug', '=====调用Currency->First->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Currency->First->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "first.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
//				
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 2040001, 'invalidErrorCode' => 1),'get');
                        $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 2040001, 'invalidErrorCode' => 1),'get');
				
			$this->initGameAreaInfo($operatorId,$gameAreaId);
                         $sql="
                                select
                                        a.`param`,b.`item{$this->currLanguage}Name` as `itemName`,b.`price`
                                from
                                        `t_cfg_itemshop_param` a
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
                            $itemPrice[$val['param']] = $val['price'];
                        }
			$sql = "
                                select
                                        <selectColumns>
                                from
                                        (
                                        select
                                                *
                                        from
                                                (
                                                        select
                                                                *
                                                        from
                                                                `log_gold_change` a
                                                        where
                                                                a.`opway` = 2032
                                                        union all
                                                                select
                                                                        *
                                                                from
                                                                        `log_currency` b
                                                                where
                                                                        b.`opway` = 1002
                                                                and b.`type` = 2
                                                ) c
                                        group by
                                                c.`name`
                                        order by
                                                c.`time` ASC
                                                ) d
                                         where
                                                    1 = 1
			";
			
			if($startDate) {
				$sql .= " and FROM_UNIXTIME(d.`time`) >= '{$startDate}' ";
			}
			
			if($endDate) {
				$sql .= " and FROM_UNIXTIME(d.`time`) <= '{$endDate}' ";
			}
                       
                        
			
                        $getSumSql = str_replace('<selectColumns>', "abs(sum(d.`value`))", $sql);
                        $this->gameDatabase->getColumn($getSumSql);
			
			$getDataSql = str_replace('<selectColumns>', "COUNT(d.`name`) as `roleNum`,d.`param` as `itemName`,d.`param` as `price`,abs(sum(d.`value`)) as `allPrice`,d.`time`,round(abs(sum(d.`value`))/'{$this->gameDatabase->getColumn($getSumSql)}'*100,2) as `rate`", $sql);
                        $dataSql = $getDataSql .=" group by d.`param` ";
                        
                        
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($dataSql);	
                        foreach ($this->returnData['data']['rows'] as $key => $val) {
                            if(isset($itemName[$this->returnData['data']['rows'][$key]['itemName']])){
                               $this->returnData['data']['rows'][$key]['itemName'] = $itemName[$this->returnData['data']['rows'][$key]['itemName']];
                            }else{
                                $this->returnData['data']['rows'][$key]['itemName']=$this->returnData['data']['rows'][$key]['itemName'];
                            }
                            if(isset($itemPrice[$this->returnData['data']['rows'][$key]['price']])){
                               $this->returnData['data']['rows'][$key]['price'] = $itemPrice[$this->returnData['data']['rows'][$key]['price']];
                            }else{
                                $this->returnData['data']['rows'][$key]['price']=$this->returnData['data']['rows'][$key]['price'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['price'])){
                               $this->returnData['data']['rows'][$key]['itemNum'] = $this->returnData['data']['rows'][$key]['allPrice']/$this->returnData['data']['rows'][$key]['price'];
                            }else{
                                $this->returnData['data']['rows'][$key]['itemNum']='';
                            }
                            if(isset($this->returnData['data']['rows'][$key]['rate'])){
                                $this->returnData['data']['rows'][$key]['rate'] =$this->returnData['data']['rows'][$key]['rate']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['rate'] = $this->returnData['data']['rows'][$key]['rate'];
                            }
			}
                        echo "道具名称\t购买人数\t总价值\t占比率%\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['itemName']}\t{$value['roleNum']}\t{$value['allPrice']}\t{$value['rate']}\t\n";
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
	}
}