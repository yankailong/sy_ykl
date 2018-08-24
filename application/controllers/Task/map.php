<?php
class Map extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Task->Map->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Task/');
		log_message('debug', '=====调用Task->Map->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Task/map.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Task->Map->getListData接口=====');
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
                                          count(distinct(`cid`)) as `player`,from_unixtime(`time`,'%y-%m-%d') as days,count(`cid`) as `count`,`id`
                                    from 
                                          `log_item_change`
                                    where
                                          `reason` = 41
                                          and
                                          `class` = 1
                                          and
                                          (`id` = 567 or `id` = 568 or `id` = 570)
                                    group by `days`,`id`      
                                ) a
                                where 
                                    1 = 1
                                       
			";
                        
                        if($startDate) {
				$sql .= "
					and
					unix_timestamp(a.`days`) >= unix_timestamp('{$startDate}')
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					unix_timestamp(a.`days`) <= unix_timestamp('{$endDate}')
				";
			}
                        
                        $sql.='group by a.`days`';
                        $getDataSql =str_replace('<selectColumns>', "a.`days` as `date`,
                                        max(case when a.`id`='567'  then a.`player` end) as `primaryPlayer`,
                                        max(case when a.`id`='568'   then a.`player` end) as `seniorPlayer`,
                                        max(case when a.`id`='570'   then a.`player` end) as `countryPlayer`,
                                        max(case when a.`id`='567'  then a.`count` end) as `primaryCount`,
                                        max(case when a.`id`='568'   then a.`count` end) as `seniorCount`,
                                        max(case when a.`id`='570'   then a.`count` end) as `countryCount`,
                                        round(max(case when a.`id`='567'  then a.`count` end)/max(case when a.`id`='567'  then a.`player` end),2) as `primaryAve`,
                                        round(max(case when a.`id`='568'   then a.`count` end)/max(case when a.`id`='568'   then a.`player` end),2) as `seniorAve`,
                                        round(max(case when a.`id`='570'   then a.`count` end)/max(case when a.`id`='570'   then a.`player` end),2) as `countryAve`,
                                        sum(a.`player`) as `allPlayer`,sum(a.`count`) as `allCount`,round(sum(a.`player`)/sum(a.`count`),2) as `allAve`", $sql);
                        $getTotalSql = "select count(*) from ({$getDataSql}) b";
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
		log_message('debug', '=====调用Task->Map->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Task->Map->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "map.txt";
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
                                          count(distinct(`cid`)) as `player`,from_unixtime(`time`,'%y-%m-%d') as days,count(`cid`) as `count`,`id`
                                    from 
                                          `log_item_change`
                                    where
                                          `reason` = 41
                                          and
                                          `class` = 1
                                          and
                                          (`id` = 567 or `id` = 568 or `id` = 570)
                                    group by `days`,`id`      
                                ) a
                                where 
                                    1 = 1
                                       
			";
                        
                        if($startDate) {
				$sql .= "
					and
					unix_timestamp(a.`days`) >= unix_timestamp('{$startDate}')
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					unix_timestamp(a.`days`) <= unix_timestamp('{$endDate}')
				";
			}
                        $sql.='group by a.`days`';
                        $getDataSql =str_replace('<selectColumns>', "a.`days` as `date`,
                                        max(case when a.`id`='567'  then a.`player` end) as `primaryPlayer`,
                                        max(case when a.`id`='568'   then a.`player` end) as `seniorPlayer`,
                                        max(case when a.`id`='570'   then a.`player` end) as `countryPlayer`,
                                        max(case when a.`id`='567'  then a.`count` end) as `primaryCount`,
                                        max(case when a.`id`='568'   then a.`count` end) as `seniorCount`,
                                        max(case when a.`id`='570'   then a.`count` end) as `countryCount`,
                                        round(max(case when a.`id`='567'  then a.`count` end)/max(case when a.`id`='567'  then a.`player` end),2) as `primaryAve`,
                                        round(max(case when a.`id`='568'   then a.`count` end)/max(case when a.`id`='568'   then a.`player` end),2) as `seniorAve`,
                                        round(max(case when a.`id`='570'   then a.`count` end)/max(case when a.`id`='570'   then a.`player` end),2) as `countryAve`,
                                        sum(a.`player`) as `allPlayer`,sum(a.`count`) as `allCount`,round(sum(a.`player`)/sum(a.`count`),2) as `allAve`", $sql);
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        
                        
                        
			
                        
                        echo "时间\t初级使用人数\t初级使用次数\t初级使用人均\t高级使用人数\t高级使用次数\t高级使用人均\t江山如画使用人数\t江山如画使用次数\t江山如画使用人均\t总使用人数\t总使用次数\t总使用人均\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['date']}\t{$value['primaryPlayer']}\t{$value['primaryCount']}\t{$value['primaryAve']}\t{$value['seniorPlayer']}\t{$value['seniorCount']}\t{$value['seniorAve']}\t{$value['countryPlayer']}\t{$value['countryCount']}\t{$value['countryAve']}\t{$value['allPlayer']}\t{$value['allCount']}\t{$value['allAve']}\t\n";
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
		
		log_message('debug', '=====调用Task->Map->export接口结束=====');
	}
}