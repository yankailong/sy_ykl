<?php
class FlashSale extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Statistics->FlashSale->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Statistics/');
		log_message('debug', '=====调用Statistics->FlashSale->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Statistics/flashSale.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Statistics->FlashSale->getListData接口=====');
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
						`log_gold_change`
					where
						`opway` =2089 
					
			";
                        
            if($startDate) {
				$sql .= "
					and
					`time` >= unix_timestamp('{$startDate}')
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					`time` <= unix_timestamp('{$endDate} 23:59:59')
				";
			}
                        
            $sql.='group by `value`,`date` order by `date`';
           
            $getDataSql =str_replace('<selectColumns>', "
							            	(case `value`
													when '-1600' then '1'
													when '-2400' then '2'
													when '-4800' then '3'
											else '4' end) as `type`,
					from_unixtime(`time`,'%y-%m-%d') as `date`,count(*) as `time`,`value`,count(distinct(`cid`)) as `amount`,abs(count(*)*`value`) as `gold`", $sql);

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
		log_message('debug', '=====调用Statistics->FlashSale->getListData接口结束=====');
	}
    public function export() {
		log_message('debug', '=====开始调用Statistics->FlashSale->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "FlashSale.txt";
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
						`log_gold_change`
					where
						`opway` =2089 
					
			";
                        
            if($startDate) {
				$sql .= "
					and
					`time` >= unix_timestamp('{$startDate}')
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					`time` <= unix_timestamp('{$endDate} 23:59:59')
				";
			}
                        
            $sql.='group by `value`,`date` order by `date`';

           
            $getDataSql =str_replace('<selectColumns>', "
							            	(case `value`
													when '-1600' then '1'
													when '-2400' then '2'
													when '-4800' then '3'
											else '4' end) as `type`,
					from_unixtime(`time`,'%y-%m-%d') as `date`,count(*) as `time`,`value`,count(distinct(`cid`)) as `amount`,abs(count(*)*`value`) as `gold`", $sql);
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        
            echo "日期\t物品类型\t购买次数\t购买人数\t物品售价\t消耗钻石\t"."\n";
            foreach ($this->returnData['data']['rows'] as $key => $value) {
                echo "{$value['date']}\t{$value['type']}\t{$value['time']}\t{$value['amount']}\t{$value['value']}\t{$value['gold']}\t\n";
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
		
		log_message('debug', '=====调用Statistics->FlashSale->export接口结束=====');
	}
}