<?php
class Special extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Statistics->Special->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Statistics/');
		log_message('debug', '=====调用Statistics->Special->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Statistics/special.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Statistics->Special->getListData接口====='); 
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
                        from_unixtime(`time`,'%y-%m-%d') as `days`, count(`cid`) as `time`, count(distinct(`cid`)) as `amount`,`value`,abs((`value`)*(count(`cid`))) as `sum`
                    from 
                          `log_gold_change`
                    where
                          

                          `opway` = 8009
                           and
                           (`value` = -1888 or `value` = -3888 or `value` = -8888)


                    group by `days`,`value`       
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
                        
            $sql.='group by a.`days`,a.`value`';
           // a.`value` as `level`,
            $getDataSql =str_replace('<selectColumns>', 
			            	"a.`time` as `time` ,a.`sum` as `sum`,a.`amount` as `amount`,a.`days` as `date`,
			            	(case a.`value`
								when  -1888 then 1
								when  -3888 then 2
								when  -8888 then 3
								else '其他' end) as `level`", $sql);

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
		log_message('debug', '=====调用Statistics->Special->getListData接口结束=====');
	}
    public function export() {
		log_message('debug', '=====开始调用Statistics->Special->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "special.txt";
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
                        from_unixtime(`time`,'%y-%m-%d') as `days`, count(`cid`) as `time`, count(distinct(`cid`)) as `amount`,`value`,abs((`value`)*(count(`cid`))) as `sum`
                    from 
                          `log_gold_change`
                    where
                          

                          `opway` = 8009
                           and
                           (`value` = -1888 or `value` = -3888 or `value` = -8888)


                    group by `days`,`value`       
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
                        
          	$sql.='group by a.`days`,a.`value`';

            // $sql.='group by a.`days`';
           
            $getDataSql =str_replace('<selectColumns>', 
			            	"a.`time` as `time` ,a.`sum` as `sum`,a.`amount` as `amount`,a.`days` as `date`,
			            	(case a.`value`
								when  -1888 then 1
								when  -3888 then 2
								when  -8888 then 3
								else '其他' end) as `level`", $sql);
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        
            echo "日期\t档位\t购买次数\t购买人数\t累计消耗钻石\t"."\n";
            foreach ($this->returnData['data']['rows'] as $key => $value) {
                echo "{$value['date']}\t{$value['level']}\t{$value['time']}\t{$value['amount']}\t{$value['sum']}\t\n";
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
		
		log_message('debug', '=====调用Statistics->Special->export接口结束=====');
	}
}