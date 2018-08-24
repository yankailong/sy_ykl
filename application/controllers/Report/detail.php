<?php
class Detail extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Report->Detail->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Report/');
		log_message('debug', '=====调用Report->Detail->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Report/detail.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Report->Detail->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaIdString', array('method' => 'string', 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$reportTypeId = $this->param->getParam('reportTypeId', array('method' => 'int', 'min' => 1, 'max' => 2, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			switch ($reportTypeId) {
				case 1:
					$tableName = 'log_report_hourly';
					break;
					
				case 2:
					$tableName = 'log_report_daily';
					break;
			}
			
			$sql = "
				select
					<selectColumns>
				from
					`{$tableName}` a
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
			
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "FROM_UNIXTIME(a.`time`) as `time`, a.`register`, a.`create`, a.`login`, a.`create_rate`, a.`loginP`, a.`online_max`, a.`online_avg`, a.`money`, a.`money_people`, a.`arpu`", $sql);
				
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
		log_message('debug', '=====调用Report->Detail->getListData接口结束=====');
	}
}