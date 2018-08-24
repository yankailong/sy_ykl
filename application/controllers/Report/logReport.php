<?php
class LogReport extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Report->LogReport->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Report/');
		log_message('debug', '=====调用Report->LogReport->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Report/logReport.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Report->LogReport->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId', array('method' => 'string', 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
                        $pfId = $this->param->getParam('pfId', array('method' => 'int', 'min' => 1, 'max' => 3, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			
			
			$sql = "
				select
					<selectColumns>
				from
					`qq_report_log` a
                                where
                                        1 = 1
			";
                        if($pfId == 1){
                                $sql .= "
					and
					`pf` = 'qzone'
				";
                        }else if($pfId == 2){
                                $sql .= "
					and
					`pf` = 'qqgame'
				";
                        }
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
			
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "FROM_UNIXTIME(a.`time`) as `time`, a.`pf`, a.`sid`, a.`regist_new`,a.`login_new`,a.`create_new`,a.`pay_count`,a.`pay_amount`", $sql);
				
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
		log_message('debug', '=====调用Report->LogReport->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Report->LogReport->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			
                        $fileName = "logReport.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get');
                        $gameAreaId = $this->param->getParam('gameAreaId', array('method' => 'string', 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get');
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get', true);
			$endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get', true);
                        $pfId = $this->param->getParam('pfId', array('method' => 'int', 'min' => 1, 'max' => 3, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get');
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			$sql = "
				select
					<selectColumns>
				from
					`qq_report_log` a
                                where
                                        1 = 1
			";
                        if($pfId == 1){
                                $sql .= "
					and
					`pf` = 'qzone'
				";
                        }else if($pfId == 2){
                                $sql .= "
					and
					`pf` = 'qqgame'
				";
                        }
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
			
			$getDataSql = str_replace('<selectColumns>', "FROM_UNIXTIME(a.`time`) as `time`, a.`pf`, a.`sid`, a.`regist_new`,a.`login_new`,a.`create_new`,a.`pay_count`,a.`pay_amount`", $sql);
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        echo "时间\t渠道\t区服\t注册人数\t登录人数\t创建人数\t充值人数\t充值总金额"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['time']}\t{$value['pf']}\t{$value['sid']}\t{$value['regist_new']}\t{$value['login_new']}\t{$value['create_new']}\t{$value['pay_count']}\t{$value['pay_amount']}\t\n";
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
		
		log_message('debug', '=====调用Report->LogReport->export接口结束=====');
	}
}