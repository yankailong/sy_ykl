<?php
class King extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Statistics->King->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Statistics/');
		log_message('debug', '=====调用Statistics->King->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Statistics/king.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Statistics->King->getListData接口=====');
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
                    	sum(a.`cishu`) as `time` ,sum(a.`roleNum`) as `roleNum`,sum(a.`amount`) as `amount`,a.`days` as `date`
				from

					(select 
							from_unixtime(`time`,'%y-%m-%d') as `days`,count(`cid`) as `cishu`,count(distinct(`cid`)) as `roleNum`,sum(`count`)*200 as `amount`
						from 
								`log_item_change`
						where
								`reason` = 191
					group by  `days`

					union all

					select
						from_unixtime(`time`,'%y-%m-%d') as days,count(`cid`) as `cishu`,count(distinct(`cid`)) as `roleNum`,abs(sum(`value`)) as `amount`
						from
						log_gold_change 
						where
								`opway`=2039 and `value`<0
					group by
					`days`) a
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
           
            $getDataSql =str_replace('<selectColumns>', "sum(a.`cishu`) as `time` ,sum(a.`roleNum`) as `roleNum`,sum(a.`amount`) as `amount`,a.`days` as `date`", $sql);

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
		log_message('debug', '=====调用Statistics->King->getListData接口结束=====');
	}
    public function export() {
		log_message('debug', '=====开始调用Statistics->King->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "king.txt";
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

					(select 
							from_unixtime(`time`,'%y-%m-%d') as `days`,count(`cid`) as `cishu`,count(distinct(`cid`)) as `roleNum`,sum(`count`)*200 as `amount`
						from 
								`log_item_change`
						where
								`reason` = 191
					group by  `days`

					union all

					select
						from_unixtime(`time`,'%y-%m-%d') as days,count(`cid`) as `cishu`,count(distinct(`cid`)) as `roleNum`,abs(sum(`value`)) as `amount`
						from
						log_gold_change 
						where
								`opway`=2039 and `value`<0
					group by
					`days`) a
				where
						1 = 1
			";
                        
            /*if($startDate) {
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
			}*/
            // $sql.="group by from_unixtime(a.`submit_time`,'%y-%m-%d')";
           
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
           
            $getDataSql =str_replace('<selectColumns>', "sum(a.`cishu`) as `time` ,sum(a.`roleNum`) as `roleNum`,sum(a.`amount`) as `amount`,a.`days` as `date`", $sql);
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        
            echo "日期\t寻宝人数\t寻宝次数\t消耗钻石量\t"."\n";
            foreach ($this->returnData['data']['rows'] as $key => $value) {
                echo "{$value['date']}\t{$value['roleNum']}\t{$value['time']}\t{$value['amount']}\t\n";
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
		
		log_message('debug', '=====调用Statistics->King->export接口结束=====');
	}
}