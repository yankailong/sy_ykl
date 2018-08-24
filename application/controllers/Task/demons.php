<?php
class Demons extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Task->Demons->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Task/');
		log_message('debug', '=====调用Task->Demons->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Task/demons.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Task->Demons->getListData接口=====');
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
                                          `log_task` a
                                left join 
                                        (
                                          select  
                                              count(b.`cid`) as `finishCount`,b.`date` 
                                          from (
                                                  select 
                                                        `cid`,count(`cid`) as `count`,from_unixtime(`submit_time`,'%y-%m-%d') as `date` 
                                                  from 
                                                        `log_task` 
                                                  where 
                                                        `type` = 7 
                                                        and
                                                        `submit_time` > 0 
                                                  group by 
                                                        `date`,`cid`
                                                ) b
                                          where 
                                              `count` = 10
                                          group by 
                                              b.`date`
                                        ) c
                                on 
                                        c.`date` = from_unixtime(a.`submit_time`,'%y-%m-%d')
                                left join 
                                        (
                                          select 
                                              sum(`login_player`) as `login`,from_unixtime(`time`,'%y-%m-%d') as `date` 
                                          from 
                                              `log_report_minutly` 
                                          group by 
                                              from_unixtime(`time`,'%y-%m-%d')
                                        ) d
                                on 
                                        d.`date` = from_unixtime(a.`submit_time`,'%y-%m-%d')
                                where
                                      a.`type` = 7 
                                      and
                                      a.`submit_time` > 0
			";
                        
                        if($startDate) {
				$sql .= "
					and
					a.`submit_time` >= unix_timestamp('{$startDate}')
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					a.`submit_time` <= unix_timestamp('{$endDate}')
				";
			}
                        
                        $sql.="group by from_unixtime(a.`submit_time`,'%y-%m-%d')";
                        $getDataSql =str_replace('<selectColumns>', "count((a.`cid`)) as `taskCount`,from_unixtime(a.`submit_time`,'%y-%m-%d') as `date`,count(distinct(a.`cid`)) as `join`,c.`finishCount`,d.`login`,concat(round(count(distinct(a.`cid`))/d.`login`*100,2),'%') as `joinRate`,concat(round(c.`finishCount`/count(distinct(a.`cid`))*100,2),'%') as `rate`", $sql);
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
		log_message('debug', '=====调用Task->Demons->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Task->Demons->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "demons.txt";
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
                                          `log_task` a
                                left join 
                                        (
                                          select  
                                              count(b.`cid`) as `finishCount`,b.`date` 
                                          from (
                                                  select 
                                                        `cid`,count(`cid`) as `count`,from_unixtime(`submit_time`,'%y-%m-%d') as `date` 
                                                  from 
                                                        `log_task` 
                                                  where 
                                                        `type` = 7 
                                                        and
                                                        `submit_time` > 0 
                                                  group by 
                                                        `date`,`cid`
                                                ) b
                                          where 
                                              `count` = 10
                                          group by 
                                                b.`date`
                                        ) c
                                on 
                                        c.`date` = from_unixtime(a.`submit_time`,'%y-%m-%d')
                                left join 
                                        (
                                          select 
                                              sum(`login_player`) as `login`,from_unixtime(`time`,'%y-%m-%d') as `date` 
                                          from 
                                              `log_report_minutly` 
                                          group by 
                                              from_unixtime(`time`,'%y-%m-%d')
                                        ) d
                                on 
                                        d.`date` = from_unixtime(a.`submit_time`,'%y-%m-%d')
                                where
                                      a.`type` = 7 
                                      and
                                      a.`submit_time` > 0
			";
                        
                        if($startDate) {
				$sql .= "
					and
					a.`submit_time` >= unix_timestamp('{$startDate}')
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					a.`submit_time` <= unix_timestamp('{$endDate}')
				";
			}
                        $sql.="group by from_unixtime(a.`submit_time`,'%y-%m-%d')";
                        $getDataSql =str_replace('<selectColumns>', "count((a.`cid`)) as `taskCount`,from_unixtime(a.`submit_time`,'%y-%m-%d') as `date`,count(distinct(a.`cid`)) as `join`,c.`finishCount`,d.`login`,concat(round(count(distinct(a.`cid`))/d.`login`*100,2),'%') as `joinRate`,concat(round(c.`finishCount`/count(distinct(a.`cid`))*100,2),'%') as `rate`", $sql);
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        
                        
                        
			
                        
                        echo "时间\t任务完成次数\t登录人数\t任务参与人数\t任务参与率\t任务全部完成人数\t全部完成参与率\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['date']}\t{$value['taskCount']}\t{$value['login']}\t{$value['join']}\t{$value['joinRate']}\t{$value['finishCount']}\t{$value['rate']}\t\n";
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
		
		log_message('debug', '=====调用Task->Demons->export接口结束=====');
	}
}