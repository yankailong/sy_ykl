<?php
class Month extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Online->Month->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Online/');
		log_message('debug', '=====调用Online->Month->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Online/month.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Online->Month->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
            $gameAreaId = $this->param->getParam('gameAreaIdString', array('method' => 'string', 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
                        
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
                        order by a.`areaNum` asc
                ";
                $gameAreaIdArray = $this->gmDatabase->getArray($sql);
                $allOperatorData = array();
                foreach ($gameAreaIdArray as $val){
                    $this->initGameAreaInfo($operatorId,$val['gameAreaId']);
                    $sql = "
                            select
                                    `sid`,count(distinct (`cid`)) as `pay_player`,(sum(`amount`)/100) as `pay_count`,count(`oid`) as `pay_times`,(sum(`amount`)/100/count(distinct (`cid`))) as `ARPU`
                            from
                                    `pay_log` 
                            where
                                    FROM_UNIXTIME(`time`) >= '{$startDate} 00:00:00'
                                    and
                                    FROM_UNIXTIME(`time`) <= '{$endDate} 23:59:59'
                                    and
                                    `oid` not like '%test%'
                                    and
                                    `sid` = '{$val['areaNum']}'
                    ";
                  
                    $singleOperatorData = $this->gameDatabase->getRow($sql);
                    // var_dump($singleOperatorData['pay_player']);
                    // pay_player,充值玩家数量不为0
                    if($singleOperatorData && $singleOperatorData['pay_player']!='0'){
                        array_push($allOperatorData, $singleOperatorData);
                    }
                }
                // print_r($allOperatorData);
                
                $tem = array();
                foreach($allOperatorData as $k=>$v){
                    if(!isset($tem['pay_player'])){
                        $tem['pay_player']=$v['pay_player'];
                    }else{
                        $tem['pay_player']+=$v['pay_player'];
                    }
                    if(!isset($tem['pay_count'])){
                        $tem['pay_count']=$v['pay_count'];
                    }else{
                        $tem['pay_count']+=$v['pay_count'];
                    }
                    if(!isset($tem['pay_times'])){
                        $tem['pay_times']=$v['pay_times'];
                    }else{
                        $tem['pay_times']+=$v['pay_times'];
                    }
                }
                /*if ($tem['pay_player']!=0) {
                    $tem['ARPU'] = round($tem['pay_count']/$tem['pay_player'],2);
                    $this->returnData['data']['total'] = count($allOperatorData);
                    $this->returnData['data']['rows'] = $allOperatorData;
                    $this->returnData['data']['footer'] = array($tem);
                }*/
                $tem['ARPU'] = round($tem['pay_count']/$tem['pay_player'],2);
                $this->returnData['data']['total'] = count($allOperatorData);
                $this->returnData['data']['rows'] = $allOperatorData;
                $this->returnData['data']['footer'] = array($tem);
            }else{
                $this->initGameAreaInfo($operatorId,$gameAreaId);
                $sql = "
                        select
                                `sid`,count(distinct (`cid`)) as `pay_player`,(sum(`amount`)/100) as `pay_count`,count(`oid`) as `pay_times`,(sum(`amount`)/100/count(distinct (`cid`))) as `ARPU`
                        from
                                `pay_log` 
                        where
                                FROM_UNIXTIME(`time`) >= '{$startDate} 00:00:00'
                                and
                                FROM_UNIXTIME(`time`) <= '{$endDate} 23:59:59'
                                and
                                `oid` not like '%test%'
                                and
                                `sid` = '{$val['areaNum']}'
                ";
                $result = $this->gameDatabase->getArray($sql);
                $this->returnData['data']['rows'] = $result;
                $this->returnData['data']['total'] = count($result);
                // $this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
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
		log_message('debug', '=====调用Online->Month->getListData接口结束=====');
	}
    public function export() {
		log_message('debug', '=====开始调用Online->Month->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
                        
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get');
            $gameAreaId = $this->param->getParam('gameAreaIdString', array('method' => 'string', 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get', true);
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get');
			$endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get');
            $fileName = "monthPay"."$startDate"."-"."$endDate".".txt";
            header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
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
                        order by a.`areaNum` asc
                ";
                $gameAreaIdArray = $this->gmDatabase->getArray($sql);
                $allOperatorData = array();
                foreach ($gameAreaIdArray as $val){
                    $this->initGameAreaInfo($operatorId,$val['gameAreaId']);
                    $sql = "
                            select
                                    `sid`,count(distinct (`cid`)) as `pay_player`,(sum(`amount`)/10) as `pay_count`,count(`oid`) as `pay_times`,(sum(`amount`)/10/count(distinct (`cid`))) as `ARPU`
                            from
                                    `pay_log` 
                            where
                                    FROM_UNIXTIME(`time`) >= '{$startDate} 00:00:00'
                                    and
                                    FROM_UNIXTIME(`time`) <= '{$endDate} 23:59:59'
                                    and
                                    `oid` not like '%test%'
                                    and
                                    `sid` = '{$val['areaNum']}'
                    ";
                    $singleOperatorData = $this->gameDatabase->getRow($sql);
                    if($singleOperatorData){
                        array_push($allOperatorData, $singleOperatorData);
                    }
                }
                $tem = array();
                foreach($allOperatorData as $k=>$v){
                    if(!isset($tem['pay_player'])){
                        $tem['pay_player']=$v['pay_player'];
                    }else{
                        $tem['pay_player']+=$v['pay_player'];
                    }
                    if(!isset($tem['pay_count'])){
                        $tem['pay_count']=$v['pay_count'];
                    }else{
                        $tem['pay_count']+=$v['pay_count'];
                    }
                    if(!isset($tem['pay_times'])){
                        $tem['pay_times']=$v['pay_times'];
                    }else{
                        $tem['pay_times']+=$v['pay_times'];
                    }
                }
                $tem['ARPU'] = round($tem['pay_count']/$tem['pay_player'],2);
                $this->returnData['data']['total'] = count($allOperatorData);
                $this->returnData['data']['rows'] = $allOperatorData;
                $this->returnData['data']['footer'] = array($tem);
            }else{
              $this->initGameAreaInfo($operatorId,$gameAreaId);
                $sql = "
                        select
                                `sid`,count(distinct (`cid`)) as `pay_player`,(sum(`amount`)/10) as `pay_count`,count(`oid`) as `pay_times`,(sum(`amount`)/10/count(distinct (`cid`))) as `ARPU`
                        from
                                `pay_log` 
                        where
                                FROM_UNIXTIME(`time`) >= '{$startDate} 00:00:00'
                                and
                                FROM_UNIXTIME(`time`) <= '{$endDate} 23:59:59'
                                and
                                `oid` not like '%test%'
                                and
                                `sid` = '{$val['areaNum']}'
                ";
                $result = $this->gameDatabase->getArray($sql);
                $this->returnData['data']['rows'] = $result;
                $this->returnData['data']['total'] = count($result);
            }
            echo "区服\t充值\t充值人数\tAPRU\t充值次数\t"."\n";
            foreach ($this->returnData['data']['rows'] as $key => $value) {
                echo "{$value['sid']}\t{$value['pay_count']}\t{$value['pay_player']}\t{$value['ARPU']}\t{$value['pay_times']}\t\n";
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
		
		log_message('debug', '=====调用Online->Month->export接口结束=====');
	}
}