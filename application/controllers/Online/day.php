<?php
class Day extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Online->Day->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Online/');
		log_message('debug', '=====调用Online->Day->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Online/day.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Online->Day->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaIdString', array('method' => 'string', 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			
			
			$sql = "
				select
					<selectColumns>
				from
					`log_report_daily` a
                                where
                                        1 = 1
			";
			
			if($startDate) {
				$sql .= "
					and
					FROM_UNIXTIME(a.`time`) >= '{$startDate} 00:00:00'
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					FROM_UNIXTIME(a.`time`) <= '{$endDate} 23:59:59'
				";
			}
			
			$sql .= "
				order by
					FROM_UNIXTIME(a.`time`) 
			";

			$getTotalAmountSql = str_replace('<selectColumns>', "sum(`pay_count`) as `pay_count`", $sql);
            $this->returnData['data']['footer'] = $this->gameDatabase->getArray($getTotalAmountSql);
			
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "FROM_UNIXTIME(a.`time`) as `time`, a.`regist_new`, a.`enter_new`, round(a.`enter_new`/a.`regist_new`*100,2) as `rate`,a.`login_count`,a.`login_player`,a.`online_max`,a.`online_min`,a.`online_avg`,round(a.`pay_count`,2) as `pay_count` ,a.`pay_player`,round(a.`pay_count`/a.`pay_player`,2) as `ARPU`,round(a.`pay_player`/a.`login_player`*100,2) as `pay_rate`", $sql);
				
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
				
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        foreach ($this->returnData['data']['rows'] as $key =>$value){
                            if(isset($this->returnData['data']['rows'][$key]['rate'])){
                                $this->returnData['data']['rows'][$key]['rate'] =$this->returnData['data']['rows'][$key]['rate']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['rate'] = $this->returnData['data']['rows'][$key]['rate'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['pay_raterate'])){
                                $this->returnData['data']['rows'][$key]['pay_raterate'] =$this->returnData['data']['rows'][$key]['rate']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['pay_raterate'] = $this->returnData['data']['rows'][$key]['rate'];
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
		log_message('debug', '=====调用Online->Day->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Online->Day->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "day.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
                        
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get');
                        $gameAreaId = $this->param->getParam('gameAreaIdString', array('method' => 'string', 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get');
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get', true);
			$endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get', true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			
			
			$sql = "
				select
					<selectColumns>
				from
					`log_report_daily` a


                                where
                                        1 = 1
			";
			
			if($startDate) {
				$sql .= "
					and
					FROM_UNIXTIME(a.`time`) >= '{$startDate} 00:00:00'
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					FROM_UNIXTIME(a.`time`) <= '{$endDate} 23:59:59'
				";
			}
			
			$sql .= "
				order by
					FROM_UNIXTIME(a.`time`)
			";

			// a.`pay_count` =  round(a.`pay_count`/10,2) as `pay_count`  b.count(`cid`) as `count`,
			$getDataSql = str_replace('<selectColumns>', "FROM_UNIXTIME((a.`time`-86400),'%y-%m-%d') as `time`, a.`regist_new`, a.`enter_new`, round(a.`enter_new`/a.`regist_new`*100,2) as `rate`,a.`login_count`,a.`login_player`,a.`online_max`,a.`online_min`,a.`online_avg`,round(a.`pay_count`,2) as `pay_count` ,`count` as `pay_player`,round(a.`pay_count`/a.`pay_player`,2) as `ARPU`,round(a.`pay_player`/a.`login_player`*100,2) as `pay_rate`", $sql);
				
				
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        foreach ($this->returnData['data']['rows'] as $key =>$value){
                            if(isset($this->returnData['data']['rows'][$key]['rate'])){
                                $this->returnData['data']['rows'][$key]['rate'] =$this->returnData['data']['rows'][$key]['rate']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['rate'] = $this->returnData['data']['rows'][$key]['rate'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['pay_raterate'])){
                                $this->returnData['data']['rows'][$key]['pay_raterate'] =$this->returnData['data']['rows'][$key]['rate']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['pay_raterate'] = $this->returnData['data']['rows'][$key]['rate'];
                            }
                        }
                        echo "日期\t注册\t进入\t激活率\t登录次数\t登录总人数\t最高在线\t最低在线\t平均在线\t充值\t充值人数\tARPU\t付费率\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['time']}\t{$value['regist_new']}\t{$value['enter_new']}\t{$value['rate']}\t{$value['login_count']}\t{$value['login_player']}\t{$value['online_max']}\t{$value['online_min']}\t{$value['online_avg']}\t{$value['pay_count']}\t{$value['pay_player']}\t{$value['ARPU']}\t{$value['pay_rate']}\t\n";
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
		
		log_message('debug', '=====调用Online->Day->export接口结束=====');
	}
}
