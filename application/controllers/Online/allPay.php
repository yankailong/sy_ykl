<?php
class AllPay extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Online->AllPay->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Online/');
		log_message('debug', '=====调用Online->AllPay->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Online/allPay.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Online->AllPay->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
                            
                            $sql = "
                                    select
                                            a.`gameAreaId`,a.`areaNum`,a.`operatorId`,e.`operatorName`
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
                                    left join
                                            `t_data_operator` e
                                    on
                                            e.`operatorId` = a.`operatorId`
                                    where
                                            d.`isDefault` = 1
                                            and
                                            a.`openDatetime` <now()
                                            and
                                            a.`areaNum`< 9000
                                            and
                                            a.`status` = 4
                                            and 
                                            a.`operatorId` = 8
                                    group by a.`operatorId`,a.`databaseName`
                            ";
                            // and     a.`operatorId`= 1
                            $gameAreaIdArray = $this->gmDatabase->getArray($sql);
                            $allOperatorData = array();
                            foreach ($gameAreaIdArray as $val){
                              $this->initGameAreaInfo($val['operatorId'],$val['gameAreaId']);
                              $sql = "
                                      select
                                              '{$val['operatorName']}' as `operator`,count(distinct (`cid`)) as `pay_player`,(sum(`amount`)) as `pay_count`,count(`oid`) as `pay_times`,'1' as `ARPU`,(sum(`amount`)/100) as `money`
                                      from
                                              `pay_log` 
                                      where
                                              FROM_UNIXTIME(`time`) >= '{$startDate} 00:00:00'
                                              and
                                              FROM_UNIXTIME(`time`) <= '{$endDate} 23:59:59'
                                              and
                                              `oid` not like '%test%'
                              ";
                              
                               $singleOperatorData = $this->gameDatabase->getRow($sql);  //getRow   getArray
                               $this->gameDatabase->close();
                                if($singleOperatorData){
                                    array_push($allOperatorData, $singleOperatorData);
                                }
                            }
                            $result = array();
                            foreach($allOperatorData as $key=>$v1){
                                  if(!isset($result[$v1['operator']])){
                                      $result[$v1['operator']]=$v1;
                                  }else{
                                      $result[$v1['operator']]['pay_player']+=$v1['pay_player'];
                                      $result[$v1['operator']]['pay_count']+=$v1['pay_count'];
                                      $result[$v1['operator']]['pay_times']+=$v1['pay_times'];
                                      $result[$v1['operator']]['money']+=$v1['money'];
                                  }
                            }
                            $tem = array();
                            foreach($result as $k=>$v){
                                      if(!isset($tem['pay_player'])){
                                          $tem['pay_player']=$v['pay_player'];
                                      }else{
                                          $tem['pay_player']+=$v['pay_player'];
                                      }
                                      if(!isset($tem['money'])){
                                          $tem['money']=$v['money'];
                                      }else{
                                          $tem['money']+=$v['money'];
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
                            shuffle($result);
                            $tem['ARPU'] = round($tem['pay_count']/$tem['pay_player'],2);
                            $this->returnData['data']['total'] = count($result);
                            foreach($result as $key1=>$value){
                                if ($result[$key1]['pay_player']!=0) {
                                    $result[$key1]['ARPU'] = round($result[$key1]['pay_count']/$result[$key1]['pay_player'],2);
                                } else{
                                    $result[$key1]['ARPU'] = 0;
                                }                              
                            }
                            
                            $this->returnData['data']['rows'] = $result;
                            $this->returnData['data']['footer'] = array($tem);
                        
			
				
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
		log_message('debug', '=====调用Online->AllPay->getListData接口结束=====');
	}
    public function export() {
		log_message('debug', '=====开始调用Online->AllPay->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
                        
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get');
			$endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get');
                        $fileName = "operatorPay"."$startDate"."-"."$endDate".".txt";
                        header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
                        $sql = "
                                select
                                        a.`gameAreaId`,a.`areaNum`,a.`operatorId`,e.`operatorName`
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
                                left join
                                        `t_data_operator` e
                                on
                                        e.`operatorId` = a.`operatorId`
                                where
                                        d.`isDefault` = 1
                                        and
                                        a.`openDatetime` <now()
                                        and
                                        a.`areaNum`< 9000
                                        and
                                            a.`status` = 4
                                group by a.`operatorId`,a.`databaseName`
                        ";
                        $gameAreaIdArray = $this->gmDatabase->getArray($sql);
                        $allOperatorData = array();
                        foreach ($gameAreaIdArray as $val){
                          $this->initGameAreaInfo($val['operatorId'],$val['gameAreaId']);
                          $sql = "
                                  select
                                          '{$val['operatorName']}' as `operator`,count(distinct (`cid`)) as `pay_player`,(sum(`amount`)) as `pay_count`,count(`oid`) as `pay_times`,'1' as `ARPU`,(sum(`amount`)/100) as `money`
                                  from
                                          `pay_log` 
                                  where
                                          FROM_UNIXTIME(`time`) >= '{$startDate} 00:00:00'
                                          and
                                          FROM_UNIXTIME(`time`) <= '{$endDate} 23:59:59'
                                          and
                                          `oid` not like '%test%'
                          ";

                           $singleOperatorData = $this->gameDatabase->getRow($sql);
                           $this->gameDatabase->close();
                            if($singleOperatorData){
                              array_push($allOperatorData, $singleOperatorData);
                           }
                        }
                        $result = array();
                        foreach($allOperatorData as $key=>$v1){
                              if(!isset($result[$v1['operator']])){
                                  $result[$v1['operator']]=$v1;
                              }else{
                                  $result[$v1['operator']]['pay_player']+=$v1['pay_player'];
                                  $result[$v1['operator']]['pay_count']+=$v1['pay_count'];
                                  $result[$v1['operator']]['pay_times']+=$v1['pay_times'];
                                  $result[$v1['operator']]['money']+=$v1['money'];
                              }
                        }
                        shuffle($result);
                        foreach($result as $key1=>$value){
                            if ($result[$key1]['pay_player']!=0) {
                                $result[$key1]['ARPU'] = round($result[$key1]['pay_count']/$result[$key1]['pay_player'],2);
                            } else{
                                $result[$key1]['ARPU'] = 0;
                            }
                        }
                        $this->returnData['data']['rows'] = $result;
                        echo "平台\t充值钻石\t充值人数\tAPRU\t折后充值\t充值次数\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['operator']}\t{$value['pay_count']}\t{$value['pay_player']}\t{$value['ARPU']}\t{$value['money']}\t{$value['pay_times']}\t\n";
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
		
		log_message('debug', '=====调用Online->AllPay->export接口结束=====');
	}
}