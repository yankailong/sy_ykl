<?php
class Goldtype extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Currency->Goldtype->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Currency/');
		log_message('debug', '=====调用Currency->Goldtype->__construct接口结束=====');
	}
	
	
	public function showView()
	{
		$this->load->view('module/Currency/goldtype.htm');
	}
	
	public function getListData()
	{
		log_message('debug', '=====开始调用Currency->Goldtype->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1));
                        $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1));
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
                        $sort = $this->param->getParam('sort', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$order = $this->param->getParam('order', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			
                         $sql="
                                select
                                        `functionId`,`function{$this->currLanguage}Name` as `opwayName`
                                from
                                        `t_cfg_currency_function`
                            ";
                        $way = $this->gmDatabase->getArray($sql);
                        $wayArray = array();
                        
                        foreach ($way as  $value){
                            $wayArray[$value['functionId']] = $value['opwayName'];
                        }
                        if(!$gameAreaId){
                              $sql = "
                                      select
                                              a.`gameAreaId`,a.`areaNum`
                                      from
                                              `t_data_game_area` a
                                      left join
                                              `t_data_server_ip` b
                                      on
                                              a.`serverId` = b.`serverId`
                                      left join
                                              `t_data_ip` c
                                      on
                                              b.`ipId` = c.`ipId`
                                      left join
                                              `t_cfg_ip_type` d
                                      on
                                              c.`ipTypeId` = d.`ipTypeId`
                                      where
                                              d.`isDefault` = 1
                                              and
                                              a.`openDatetime` <now()
                                              and
                                              a.`gameAreaId` > 1
                                              and
                                              a.`operatorId` = '{$operatorId}'
                                      group by a.`serverId`
                                      order by a.`areaNum` asc
                              ";
                              $gameAreaIdArray = $this->gmDatabase->getArray($sql);
                              $allOperatorData = array();
                              foreach ($gameAreaIdArray as $val){
                                    $this->initGameAreaInfo($operatorId,$val['gameAreaId']);
                                    $sql = "
                                            select
                                                    abs(sum(`value`))
                                            from
                                                    `log_gold_change` 
                                            where
                                                    `value`<0
                                                    and
                                                    FROM_UNIXTIME(`time`) >= '{$startDate}'
                                                    and 
                                                    FROM_UNIXTIME(`time`) <= '{$endDate}'
                                    ";
                                    $costSingle = $this->gameDatabase->getColumn($sql); 
                                    $sql = "
                                            
                                              select 
                                                  <selectColumns>
                                              from 
                                                  `log_gold_change` 
                                              where
                                                  `value`<0
                                                  and
                                                  FROM_UNIXTIME(`time`) >= '{$startDate}'
                                                  and 
                                                  FROM_UNIXTIME(`time`) <= '{$endDate}'
                                              group by
                                                  `opway`
                                                          
                                    ";

                                    
                                    $getDataSql = str_replace('<selectColumns>', "abs(sum(`value`)) as `allPrice`,count(distinct(`cid`)) as `roleNum`, COUNT(`cid`) as `costNum`,`opway`,'{$costSingle}' as `rate`", $sql);
                                    $singleOperatorData =  $this->gameDatabase->getArray($getDataSql);
                                    if($singleOperatorData){
                                        array_push($allOperatorData, $singleOperatorData);
                                    }
                              }
                              
                              $tem = array();
                              for($i = 0;$i<count($allOperatorData); $i++){
                                foreach ($allOperatorData[$i] as $val){
                                        if(!isset($tem[$val['opway']])){
                                            $tem[$val['opway']]=array();
                                            $tem[$val['opway']]['roleNum']=$val['roleNum'];
                                            $tem[$val['opway']]['costNum']=$val['costNum'];
                                            $tem[$val['opway']]['allPrice']=$val['allPrice'];
                                            $tem[$val['opway']]['rate']=$val['rate'];
                                        }else{
                                            if(!isset($tem[$val['opway']]['roleNum'])){
                                                $tem[$val['opway']]['roleNum']=$val['roleNum'];
                                            }else{
                                                $tem[$val['opway']]['roleNum']+=$val['roleNum'];
                                            }
                                            if(!isset($tem[$val['opway']]['costNum'])){
                                                $tem[$val['opway']]['costNum']=$val['costNum'];
                                            }else{
                                                $tem[$val['opway']]['costNum']+=$val['costNum'];
                                            }
                                            if(!isset($tem[$val['opway']]['allPrice'])){
                                                $tem[$val['opway']]['allPrice']=$val['allPrice'];
                                            }else{
                                                $tem[$val['opway']]['allPrice']+=$val['allPrice'];
                                            }
                                            if(!isset($tem[$val['opway']]['rate'])){
                                                $tem[$val['opway']]['rate']=$val['rate'];
                                            }else{
                                                $tem[$val['opway']]['rate']+=$val['rate'];
                                            }
                                        }
                                }      
                              }
                              
                              foreach($tem as $k=>$v){
                                        if(isset($tem[$k]['rate'])){
                                            $tem[$k]['rate'] = sprintf("%.2f", $tem[$k]['allPrice']/$tem[$k]['rate']*100)."%";
                                        }
                                        foreach ($v as $value){
                                          $tem[$k]['opway'] = $k;
                                          $tem[$k]['opway'] = $wayArray[$tem[$k]['opway']];
                                        }
                              }
                              sort($tem);
                        }else{
                          $this->initGameAreaInfo($operatorId,$gameAreaId);
                          $sql = "
                                    select
                                            abs(sum(`value`))
                                    from
                                            `log_gold_change` 
                                    where
                                            `value`<0
                                            and
                                            FROM_UNIXTIME(`time`) >= '{$startDate}'
                                            and 
                                            FROM_UNIXTIME(`time`) <= '{$endDate}'
                            ";
                            $costSingle = $this->gameDatabase->getColumn($sql); 
                            $sql = "
                                    select 
                                        <selectColumns>
                                    from 
                                        `log_gold_change` 
                                    where
                                        `value`<0
                                        and
                                        FROM_UNIXTIME(`time`) >= '{$startDate}'
                                        and 
                                        FROM_UNIXTIME(`time`) <= '{$endDate}'
                                    group by
                                        `opway`
                            ";
                            $getDataSql = str_replace('<selectColumns>', "abs(sum(`value`)) as `allPrice`,count(distinct(`cid`)) as `roleNum`, COUNT(`cid`) as `costNum`,`opway`,round(abs(sum(`value`))/'{$costSingle}'*100,2) as `rate`", $sql);
                            if($sort && $order) {
				$getDataSql .= " order by {$sort} {$order}";
                            }
                            if($page && $rows) {
                                    $startRow = ($page - 1) * $rows;
                                    $getDataSql .= " limit {$startRow}, {$rows}";
                            }
                            $tem = $this->gameDatabase->getArray($getDataSql); 
                            foreach ($tem as $key => $val) {
                                if(isset($wayArray[$tem[$key]['opway']])){
                                   $tem[$key]['opway'] = $wayArray[$tem[$key]['opway']];
                                }else{
                                   $tem[$key]['opway']=$tem[$key]['opway'];
                                }
                                if(isset($tem[$key]['rate'])){
                                    $tem[$key]['rate'] =$tem[$key]['rate']."%";
                                }else{
                                    $tem[$key]['rate'] = $tem[$key]['rate'];
                                }
                            }
                        }
			
			
			
                        
                        
                        $this->returnData['data']['total'] = count($tem);
			$this->returnData['data']['rows'] = $tem;	
                        
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
		log_message('debug', '=====调用Currency->Goldtype->getListData接口结束=====');
	}
        public function export()
	{
		log_message('debug', '=====开始调用Currency->Goldtype->export接口=====');
                $this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "goldtype.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get',true);
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1),'get');
                        $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1),'get');
                        
                         $sql="
                                select
                                        `functionId`,`function{$this->currLanguage}Name` as `opwayName`
                                from
                                        `t_cfg_currency_function`
                            ";
                        $way = $this->gmDatabase->getArray($sql);
                        $wayArray = array();
                        
                        foreach ($way as  $value){
                            $wayArray[$value['functionId']] = $value['opwayName'];
                        }
			if(!$gameAreaId){
                              $sql = "
                                      select
                                              a.`gameAreaId`,a.`areaNum`
                                      from
                                              `t_data_game_area` a
                                      left join
                                              `t_data_server_ip` b
                                      on
                                              a.`serverId` = b.`serverId`
                                      left join
                                              `t_data_ip` c
                                      on
                                              b.`ipId` = c.`ipId`
                                      left join
                                              `t_cfg_ip_type` d
                                      on
                                              c.`ipTypeId` = d.`ipTypeId`
                                      where
                                              d.`isDefault` = 1
                                              and
                                              a.`openDatetime` <now()
                                              and
                                              a.`gameAreaId` > 1
                                              and
                                              a.`operatorId` = '{$operatorId}'
                                      group by a.`serverId`
                                      order by a.`areaNum` asc
                              ";
                              $gameAreaIdArray = $this->gmDatabase->getArray($sql);
                              $allOperatorData = array();
                              foreach ($gameAreaIdArray as $val){
                                    $this->initGameAreaInfo($operatorId,$val['gameAreaId']);
                                    $sql = "
                                            select
                                                    abs(sum(`value`))
                                            from
                                                    `log_gold_change` 
                                            where
                                                    `value`<0
                                                    and
                                                    FROM_UNIXTIME(`time`) >= '{$startDate}'
                                                    and 
                                                    FROM_UNIXTIME(`time`) <= '{$endDate}'
                                    ";
                                    $costSingle = $this->gameDatabase->getColumn($sql); 
                                    $sql = "
                                            select 
                                                <selectColumns>
                                            from 
                                                `log_gold_change` 
                                            where
                                                `value`<0
                                                and
                                                FROM_UNIXTIME(`time`) >= '{$startDate}'
                                                and 
                                                FROM_UNIXTIME(`time`) <= '{$endDate}'
                                            group by
                                                `opway`
                                    ";

                                    
                                    $getDataSql = str_replace('<selectColumns>', "abs(sum(`value`)) as `allPrice`,count(distinct(`cid`)) as `roleNum`, COUNT(`cid`) as `costNum`,`opway`,'{$costSingle}' as `rate`", $sql);
                                    $singleOperatorData =  $this->gameDatabase->getArray($getDataSql);
                                    if($singleOperatorData){
                                        array_push($allOperatorData, $singleOperatorData);
                                    }
                              }
                              
                              $tem = array();
                              for($i = 0;$i<count($allOperatorData); $i++){
                                foreach ($allOperatorData[$i] as $val){
                                        if(!isset($tem[$val['opway']])){
                                            $tem[$val['opway']]=array();
                                            $tem[$val['opway']]['roleNum']=$val['roleNum'];
                                            $tem[$val['opway']]['costNum']=$val['costNum'];
                                            $tem[$val['opway']]['allPrice']=$val['allPrice'];
                                            $tem[$val['opway']]['rate']=$val['rate'];
                                        }else{
                                            if(!isset($tem[$val['opway']]['roleNum'])){
                                                $tem[$val['opway']]['roleNum']=$val['roleNum'];
                                            }else{
                                                $tem[$val['opway']]['roleNum']+=$val['roleNum'];
                                            }
                                            if(!isset($tem[$val['opway']]['costNum'])){
                                                $tem[$val['opway']]['costNum']=$val['costNum'];
                                            }else{
                                                $tem[$val['opway']]['costNum']+=$val['costNum'];
                                            }
                                            if(!isset($tem[$val['opway']]['allPrice'])){
                                                $tem[$val['opway']]['allPrice']=$val['allPrice'];
                                            }else{
                                                $tem[$val['opway']]['allPrice']+=$val['allPrice'];
                                            }
                                            if(!isset($tem[$val['opway']]['rate'])){
                                                $tem[$val['opway']]['rate']=$val['rate'];
                                            }else{
                                                $tem[$val['opway']]['rate']+=$val['rate'];
                                            }
                                        }
                                }      
                              }
                              
                              foreach($tem as $k=>$v){
                                        if(isset($tem[$k]['rate'])){
                                            $tem[$k]['rate'] = sprintf("%.2f", $tem[$k]['allPrice']/$tem[$k]['rate']*100)."%";
                                        }
                                        foreach ($v as $value){
                                          $tem[$k]['opway'] = $k;
                                          $tem[$k]['opway'] = $wayArray[$tem[$k]['opway']];
                                        }
                              }
                              sort($tem);
                        }else{
                          $this->initGameAreaInfo($operatorId,$gameAreaId);
                          $sql = "
                                    select
                                            abs(sum(`value`))
                                    from
                                            `log_gold_change` 
                                    where
                                            `value`<0
                                            and
                                            FROM_UNIXTIME(`time`) >= '{$startDate}'
                                            and 
                                            FROM_UNIXTIME(`time`) <= '{$endDate}'
                            ";
                            $costSingle = $this->gameDatabase->getColumn($sql); 
                            $sql = "
                                    select 
                                        <selectColumns>
                                    from 
                                        `log_gold_change` 
                                    where
                                        `value`<0
                                        and
                                        FROM_UNIXTIME(`time`) >= '{$startDate}'
                                        and 
                                        FROM_UNIXTIME(`time`) <= '{$endDate}'
                                    group by
                                        `opway`
                            ";
                            $getDataSql = str_replace('<selectColumns>', "abs(sum(`value`)) as `allPrice`,count(distinct(`cid`)) as `roleNum`, COUNT(`cid`) as `costNum`,`opway`,round(abs(sum(`value`))/'{$costSingle}'*100,2) as `rate`", $sql);
                            
                            $tem = $this->gameDatabase->getArray($getDataSql); 
                            foreach ($tem as $key => $val) {
                                if(isset($wayArray[$tem[$key]['opway']])){
                                   $tem[$key]['opway'] = $wayArray[$tem[$key]['opway']];
                                }else{
                                   $tem[$key]['opway']=$tem[$key]['opway'];
                                }
                                if(isset($tem[$key]['rate'])){
                                    $tem[$key]['rate'] =$tem[$key]['rate']."%";
                                }else{
                                    $tem[$key]['rate'] = $tem[$key]['rate'];
                                }
                            }
                        }
			
			
			
                        
                        
			$this->returnData['data']['rows'] = $tem;	
                        echo "消费类型\t消费人数\t消费次数\t消费总额\t消费占比\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['opway']}\t{$value['roleNum']}\t{$value['costNum']}\t{$value['allPrice']}\t{$value['rate']}\t\n";
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
		
		log_message('debug', '=====调用Currency->Goldtype->export接口结束=====');
	}
}