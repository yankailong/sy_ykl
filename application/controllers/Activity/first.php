<?php
class First extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Activity->First->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Activity/');
		log_message('debug', '=====调用Activity->First->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Activity/first.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Activity->First->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1), 'post', true);
                        $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1), 'post', true);
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			
			
			
                        $sql = "
                                select
                                        <selectColumns>
                                from 
                                        (
                                            select 
                                                  count(distinct(`cid`)) as `count`,from_unixtime(`time`,'%y-%m-%d') as `day` 
                                            from 
                                                  `log_activity`  
                                            where 
                                                  `acttype`= 13 
                                                  and 
                                                  `actid` = 6 
                                            group by `day`
                                        ) a
                                left join 
                                        (
                                          select 
                                              b.`day`,max(b.`online_max`) as `maxOnline1` 
                                          from 
                                              (
                                                  select 
                                                      `online_max`,
                                                      from_unixtime(`time`,'%y-%m-%d') as `day`,
                                                      hour(from_unixtime(`time`)) as `hour`,
                                                      minute(from_unixtime(`time`)) as `minute`
                                                  from 
                                                      `log_report_minutly` 
                                              ) b
                                          where 
                                              b.`hour`= 15
                                              and 
                                              b.`minute` >=1 
                                              and 
                                              b.`minute` <=31
                                          group by b.`day`
                                        ) c
                                on 
                                        c.`day` = a.`day`
                                where
                                        1 = 1
			";
                        
                        if($startDate) {
				$sql .= "
					and
					unix_timestamp(a.`day`) >= unix_timestamp('{$startDate}')
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					unix_timestamp(a.`day`) <= unix_timestamp('{$endDate}')
				";
			}
                        
                        $sql.="group by a.`day`";
                        $getDataSql =str_replace('<selectColumns>', "a.`day` as `date`,
                                        a.`count`  as `join1`,
                                        c.`maxOnline1`,
                                        concat(round(a.`count`/c.`maxOnline1`*100,2),'%') as `rate1`", $sql);
                        $getTotalSql = "select count(*) from ({$getDataSql}) e";
                        if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
                        
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
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
		log_message('debug', '=====调用Activity->First->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Activity->First->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "first.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1),'get',true);
                        $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1),'get',true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			$sql = "
                                select
                                        <selectColumns>
                                from 
                                        (
                                            select 
                                                  count(distinct(`cid`)) as `count`,from_unixtime(`time`,'%y-%m-%d') as `day` 
                                            from 
                                                  `log_activity`  
                                            where 
                                                  `acttype`= 13 
                                                  and 
                                                  `actid` = 6 
                                            group by `day`
                                        ) a
                                left join 
                                        (
                                          select 
                                              b.`day`,max(b.`online_max`) as `maxOnline1` 
                                          from 
                                              (
                                                  select 
                                                      `online_max`,
                                                      from_unixtime(`time`,'%y-%m-%d') as `day`,
                                                      hour(from_unixtime(`time`)) as `hour`,
                                                      minute(from_unixtime(`time`)) as `minute`
                                                  from 
                                                      `log_report_minutly` 
                                              ) b
                                          where 
                                              b.`hour`= 15
                                              and 
                                              b.`minute` >=6 
                                              and 
                                              b.`minute` <=31
                                          group by b.`day`
                                        ) c
                                on 
                                        c.`day` = a.`day`
                                where
                                        1 = 1
			";
                        
                        if($startDate) {
				$sql .= "
					and
					unix_timestamp(a.`day`) >= unix_timestamp('{$startDate}')
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					unix_timestamp(a.`day`) <= unix_timestamp('{$endDate}')
				";
			}
                        $sql.="group by a.`day`";
                        $getDataSql =str_replace('<selectColumns>', "a.`day` as `date`,
                                        a.`count`  as `join1`,
                                        c.`maxOnline1`,
                                        concat(round(a.`count`/c.`maxOnline1`*100,2),'%') as `rate1`", $sql);
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        
                        
                        
			
                        
                        echo "时间\t时段在线峰值1\t参与人数1\t参与率1\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['date']}\t{$value['maxOnline1']}\t{$value['join1']}\t{$value['rate1']}\t\n";
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
		
		log_message('debug', '=====调用Activity->First->export接口结束=====');
	}
}