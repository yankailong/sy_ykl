<?php
class Pet extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Statistics->Pet->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Statistics/');
		log_message('debug', '=====调用Statistics->Pet->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Statistics/pet.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Statistics->Pet->getListData接口=====');
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
                                          count(distinct(`cid`)) as `count`,from_unixtime(`time`,'%y-%m-%d') as days,`value`
                                    from 
                                          `log_gold_change`
                                    where
                                          `opway` = 2126
                                          and
                                          (`value` = -888 or `value` = -8888 or `value` = -18888)
                                          
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
                        
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
                        $sql.='group by a.`days`';
                        $getDataSql =str_replace('<selectColumns>', "a.`days` as `date`,
                                        max(case when a.`value`='-888'  then a.`count` end) as `green`,
                                        max(case when a.`value`='-8888'   then a.`count` end) as `blue`,
                                        max(case when a.`value`='-18888'   then a.`count` end) as `orange`", $sql);
                        if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
                        
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
                        $this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        
                        $sql = "
                                select
                                        count(distinct(`cid`))
                                from
                                        `mem_chr_vip`
                                where 
                                        `level` > 0
			";
                        $vipCount = $this->gameDatabase->getColumn($sql);
                        $tem = array();
                        $tem['date'] = "总VIP人数：".$vipCount;
                        foreach($this->returnData['data']['rows'] as $k => $v){
                              if(!isset($tem['green'])){
                                  $tem['green']=$v['green'];
                              }else{
                                  $tem['green']+=$v['green'];
                              }
                              if(!isset($tem['blue'])){
                                  $tem['blue']=$v['blue'];
                              }else{
                                  $tem['blue']+=$v['blue'];
                              }
                              if(!isset($tem['orange'])){
                                  $tem['orange']=$v['orange'];
                              }else{
                                  $tem['orange']+=$v['orange'];
                              }
                              
                        }    
                        $this->returnData['data']['footer'] =array($tem);
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
		log_message('debug', '=====调用Statistics->Pet->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Statistics->Pet->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "pet.txt";
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
                                          count(distinct(`cid`)) as `count`,from_unixtime(`time`,'%y-%m-%d') as days,`value`
                                    from 
                                          `log_gold_change`
                                    where
                                          `opway` = 2126
                                          and
                                          (`value` = -888 or `value` = -8888 or `value` = -18888)
                                          
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
                        $sql.='group by a.`days`';
                        $getDataSql =str_replace('<selectColumns>', "a.`days` as `date`,
                                        max(case when a.`value`='-888'  then a.`count` end) as `green`,
                                        max(case when a.`value`='-8888'   then a.`count` end) as `blue`,
                                        max(case when a.`value`='-18888'   then a.`count` end) as `orange`", $sql);
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        
                        
                        
			
                        
                        echo "时间\t绿色契约\t蓝色契约\t橙色契约\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['date']}\t{$value['green']}\t{$value['blue']}\t{$value['orange']}\t\n";
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
		
		log_message('debug', '=====调用Statistics->Pet->export接口结束=====');
	}
}