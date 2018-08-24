<?php
class SpaceTime extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Task->SpaceTime->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Task/');
		log_message('debug', '=====调用Task->SpaceTime->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Task/spaceTime.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Task->SpaceTime->getListData接口=====');
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
                                          `log_dungeon` a
                                left join 
                                        (
                                          select  
                                              count(b.`cid`) as `allClearance`,b.`date` 
                                          from (
                                                  select 
                                                        `cid`,count(`cid`) as `count`,from_unixtime(`finish_time`,'%y-%m-%d') as `date` 
                                                  from 
                                                        `log_dungeon` 
                                                  where 
                                                        `did` = 2014 
                                                        and
                                                        `finish_time` > 0 
                                                  group by 
                                                        `date`,`cid`
                                                ) b
                                          where 
                                              `count` >= 5
                                          group by 
                                              b.`date`
                                        ) c
                                on 
                                        c.`date` = from_unixtime(a.`finish_time`,'%y-%m-%d')
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
                                        d.`date` = from_unixtime(a.`finish_time`,'%y-%m-%d')
                                left join 
                                        (
                                          select 
                                                count(`cid`) as `join`,from_unixtime(`start_time`,'%y-%m-%d') as `date` 
                                          from 
                                                `log_dungeon` 
                                          where 
                                                `did` = 2014 
                                                and
                                                `start_time` > 0 
                                          group by 
                                                `date`
                                        ) e
                                on 
                                        e.`date` = from_unixtime(a.`finish_time`,'%y-%m-%d')
                                left join 
                                        (
                                          select 
                                                count(`cid`) as `clearance`,from_unixtime(`finish_time`,'%y-%m-%d') as `date` 
                                          from 
                                                `log_dungeon` 
                                          where 
                                                `did` = 2014 
                                                and
                                                `finish_time` > 0 
                                          group by 
                                                `date`
                                        ) f
                                on 
                                        f.`date` = from_unixtime(a.`finish_time`,'%y-%m-%d')
                                where
                                      a.`did` = 2014 
                                      
			";
                        if($startDate) {
				$sql .= "
					and
					a.`finish_time` >= unix_timestamp('{$startDate}')
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					a.`finish_time` <= unix_timestamp('{$endDate}')
				";
			}
                        
                        
                        $sql.="group by from_unixtime(a.`finish_time`,'%y-%m-%d')";
                        $getDataSql =str_replace('<selectColumns>', "e.`join`,e.`join` as `enter`, f.`clearance`,from_unixtime(a.`finish_time`,'%y-%m-%d') as `date`,d.`login`,concat(round(f.`clearance`/e.`join`*100,2),'%') as `clearanceRate`,c.`allClearance`,concat(round(c.`allClearance`/e.`join`*100,2),'%') as `allClearanceRate`,concat(round(e.`join`/d.`login`*100,2),'%') as `rate`", $sql);
                        
                        $getTotalSql = "select count(*) from ({$getDataSql}) g";
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
		log_message('debug', '=====调用Task->SpaceTime->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Task->SpaceTime->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "spaceTime.txt";
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
                                          `log_dungeon` a
                                left join 
                                        (
                                          select  
                                              count(b.`cid`) as `allClearance`,b.`date` 
                                          from (
                                                  select 
                                                        `cid`,count(`cid`) as `count`,from_unixtime(`finish_time`,'%y-%m-%d') as `date` 
                                                  from 
                                                        `log_dungeon` 
                                                  where 
                                                        `did` = 2014 
                                                        and
                                                        `finish_time` > 0 
                                                  group by 
                                                        `date`,`cid`
                                                ) b
                                          where 
                                              `count` >= 5
                                          group by 
                                              b.`date`
                                        ) c
                                on 
                                        c.`date` = from_unixtime(a.`finish_time`,'%y-%m-%d')
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
                                        d.`date` = from_unixtime(a.`finish_time`,'%y-%m-%d')
                                left join 
                                        (
                                          select 
                                                count(`cid`) as `join`,from_unixtime(`start_time`,'%y-%m-%d') as `date` 
                                          from 
                                                `log_dungeon` 
                                          where 
                                                `did` = 2014 
                                                and
                                                `start_time` > 0 
                                          group by 
                                                `date`
                                        ) e
                                on 
                                        e.`date` = from_unixtime(a.`finish_time`,'%y-%m-%d')
                                left join 
                                        (
                                          select 
                                                count(`cid`) as `clearance`,from_unixtime(`finish_time`,'%y-%m-%d') as `date` 
                                          from 
                                                `log_dungeon` 
                                          where 
                                                `did` = 2014 
                                                and
                                                `finish_time` > 0 
                                          group by 
                                                `date`
                                        ) f
                                on 
                                        f.`date` = from_unixtime(a.`finish_time`,'%y-%m-%d')
                                where
                                      a.`did` = 2014 
                                      
			";
                        if($startDate) {
				$sql .= "
					and
					a.`finish_time` >= unix_timestamp('{$startDate}')
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					a.`finish_time` <= unix_timestamp('{$endDate}')
				";
			}
                        $sql.="group by from_unixtime(a.`finish_time`,'%y-%m-%d')";
                        $getDataSql =str_replace('<selectColumns>', "e.`join`,e.`join` as `enter`, f.`clearance`,from_unixtime(a.`finish_time`,'%y-%m-%d') as `date`,d.`login`,concat(round(e.`join`/f.`clearance`*100,2),'%') as `clearanceRate`,c.`allClearance`,concat(round(c.`allClearance`/e.`join`*100,2),'%') as `allClearanceRate`,concat(round(e.`join`/d.`login`*100,2),'%') as `rate`", $sql);
                        
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        
                        
                        
			
                        
                        echo "时间\t进入人次\t通关人次\t通关率\t参与人数\t全部通关人数\全部通关率\t登录人数\t副本参与率\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['date']}\t{$value['enter']}\t{$value['clearance']}\t{$value['clearanceRate']}\t{$value['join']}\t{$value['allClearance']}\t{$value['allClearanceRate']}\t{$value['login']}\t{$value['rate']}\t\n";
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
		
		log_message('debug', '=====调用Task->SpaceTime->export接口结束=====');
	}
}