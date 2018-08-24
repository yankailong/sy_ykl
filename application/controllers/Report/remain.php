<?php
class Remain extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Report->Remain->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Report/');
		log_message('debug', '=====调用Report->Remain->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Report/remain.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Report->Remain->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 2040001, 'invalidErrorCode' => 1));
                        $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 2040001, 'invalidErrorCode' => 1));
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			
			$sql = "
				select
					<selectColumns>
				from
					`log_online_time` a
                                where
                                        `time` >= UNIX_TIMESTAMP('{$startDate}')
                                        and
                                        `time` <= UNIX_TIMESTAMP('{$endDate}')
                                group by 
                                a.`time`
			";
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
			
			$getDataSql = str_replace('<selectColumns>', "substr(from_unixtime(a.`time`), 1, 10) as time, sum(a.`online`<=300) as `5min`,sum(a.`online`<=600)-sum(a.`online`<=300) as `10min` ,sum(a.`online`<=1800)-sum(a.`online`<=600) as `30min`,sum(a.`online`<=3600)-sum(a.`online`<=1800) as `1h`,sum(a.`online`<=7200)-sum(a.`online`<=3600) as `2h`,sum(a.`online`<=14400)-sum(a.`online`<=7200) as `4h`,sum(a.`online`<=21600)-sum(a.`online`<=14400) as `6h`,sum(a.`online`<=28800)-sum(a.`online`<=21600) as `8h`,sum(a.`online`>28800) as `over8h`", $sql);
			
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
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
		log_message('debug', '=====调用Report->Remain->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Report->Remain->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "remain.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
                        
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 2040001, 'invalidErrorCode' => 1),'get');
                        $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 2040001, 'invalidErrorCode' => 1),'get');
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			
			$sql = "
				select
					<selectColumns>
				from
					`log_online_time` a
                                where
                                        `time` >= UNIX_TIMESTAMP('{$startDate}')
                                        and
                                        `time` <= UNIX_TIMESTAMP('{$endDate}')
                                group by 
                                a.`time`
			";
			$getDataSql = str_replace('<selectColumns>', "substr(from_unixtime(a.`time`), 1, 10) as time, sum(a.`online`<=300) as `5min`,sum(a.`online`<=600)-sum(a.`online`<=300) as `10min` ,sum(a.`online`<=1800)-sum(a.`online`<=600) as `30min`,sum(a.`online`<=3600)-sum(a.`online`<=1800) as `1h`,sum(a.`online`<=7200)-sum(a.`online`<=3600) as `2h`,sum(a.`online`<=14400)-sum(a.`online`<=7200) as `4h`,sum(a.`online`<=21600)-sum(a.`online`<=14400) as `6h`,sum(a.`online`<=28800)-sum(a.`online`<=21600) as `8h`,sum(a.`online`>28800) as `over8h`", $sql);
			
			
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        echo "日期\t<=5分钟\t<=10分钟\t<=30分钟\t<=1小时\t<=2小时\t<=4小时\t<=6小时\t<=8小时\t>8小时\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['time']}\t{$value['5min']}\t{$value['10min']}\t{$value['30min']}\t{$value['1h']}\t{$value['2h']}\t{$value['4h']}\t{$value['6h']}\t{$value['8h']}\t{$value['over8h']}\t\n";
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
		
		log_message('debug', '=====调用Report->Remain->export接口结束=====');
	}
}