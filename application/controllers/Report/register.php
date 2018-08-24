<?php
class Register extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Report->Register->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Report/');
		log_message('debug', '=====调用Report->Register->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Report/register.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Report->Register->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaIdString', array('method' => 'string', 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$reportTypeId = $this->param->getParam('reportTypeId', array('method' => 'int', 'min' => 1, 'max' => 3, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			switch ($reportTypeId) {
                                case 1:
					$tableName = 'log_report_minutly';
					break;
				case 2:
					$tableName = 'log_report_hourly';
					break;
					
				case 3:
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
			$getDataSql = str_replace('<selectColumns>', "FROM_UNIXTIME(a.`time`) as `time`, a.`regist_new`, a.`create_new`, a.`login_new`,a.`enter_new`,round(a.`create_new`/a.`regist_new`*100,2) as `rate`", $sql);
				
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
		log_message('debug', '=====调用Report->Register->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Report->Register->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			
                        
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get');
                        $gameAreaId = $this->param->getParam('gameAreaId', array('method' => 'string', 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get');
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get', true);
			$endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get', true);
			$reportTypeId = $this->param->getParam('reportTypeId', array('method' => 'int', 'min' => 1, 'max' => 3, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get');
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			switch ($reportTypeId) {
                                case 1:
					$tableName = 'log_report_minutly';
                                        $file = '5分钟';
					break;
				case 2:
					$tableName = 'log_report_hourly';
                                        $file = '时报';
					break;
					
				case 3:
					$tableName = 'log_report_daily';
                                        $file = '日报';
					break;
			}
                        $fileName = "register"."{$file}."."txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
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
			
			$getDataSql = str_replace('<selectColumns>', "FROM_UNIXTIME(a.`time`) as `time`, a.`regist_new`, a.`create_new`, a.`login_new`,a.`enter_new`,round(a.`create_new`/a.`regist_new`*100,2) as `rate`", $sql);
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        foreach ($this->returnData['data']['rows'] as $key =>$value){
                            if(isset($this->returnData['data']['rows'][$key]['rate'])){
                                $this->returnData['data']['rows'][$key]['rate'] =$this->returnData['data']['rows'][$key]['rate']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['rate'] = $this->returnData['data']['rows'][$key]['rate'];
                            }
                        }
                        echo "时间\t注册\t登录次数\t创角\t进入\t激活率\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['time']}\t{$value['regist_new']}\t{$value['create_new']}\t{$value['login_new']}\t{$value['enter_new']}\t{$value['rate']}\t\n";
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
		
		log_message('debug', '=====调用Report->Register->export接口结束=====');
	}
}