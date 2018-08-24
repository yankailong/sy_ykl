<?php
class Experience extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Statistics->Experience->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Statistics/');
		log_message('debug', '=====调用Statistics->Experience->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Statistics/experience.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Statistics->Experience->getListData接口=====');
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
                                          `opway` = 2122
                                          and
                                          (`value` = -888 or `value` = -1888 or `value` = -3888 or `value` = -5888 or `value` = -8888)
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
                            max(case when a.`value`='-888'  then a.`count` end) as `one`,
                            max(case when a.`value`='-1888'   then a.`count` end) as `two`,
                            max(case when a.`value`='-3888'   then a.`count` end) as `three`,
                            max(case when a.`value`='-5888'  then a.`count` end) as `four`,
                            max(case when a.`value`='-8888'   then a.`count` end) as `five`,
                            sum(a.`count`) as `sum`", $sql);
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
                              if(!isset($tem['one'])){
                                  $tem['one']=$v['one'];
                              }else{
                                  $tem['one']+=$v['one'];
                              }
                              if(!isset($tem['two'])){
                                  $tem['two']=$v['two'];
                              }else{
                                  $tem['two']+=$v['two'];
                              }
                              if(!isset($tem['three'])){
                                  $tem['three']=$v['three'];
                              }else{
                                  $tem['three']+=$v['three'];
                              }
                              if(!isset($tem['four'])){
                                  $tem['four']=$v['four'];
                              }else{
                                  $tem['four']+=$v['four'];
                              }
                              if(!isset($tem['five'])){
                                  $tem['five']=$v['five'];
                              }else{
                                  $tem['five']+=$v['five'];
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
		log_message('debug', '=====调用Statistics->Experience->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Statistics->Experience->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "experience.txt";
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
                                          `opway` = 2122
                                          and
                                          (`value` = -888 or `value` = -1888 or `value` = -3888 or `value` = -5888 or `value` = -8888)
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
                                        max(case when a.`value`='-888'  then a.`count` end) as `one`,
                                        max(case when a.`value`='-1888'   then a.`count` end) as `two`,
                                        max(case when a.`value`='-3888'   then a.`count` end) as `three`,
                                        max(case when a.`value`='-5888'  then a.`count` end) as `four`,
                                        max(case when a.`value`='-8888'   then a.`count` end) as `five`,
                                        sum(a.`count`) as `sum`", $sql);
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        
                        
                        
			
                        
                        echo "时间\t第一次\t第二次\t第三次\t第四次\t第五次\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['date']}\t{$value['one']}\t{$value['two']}\t{$value['three']}\t{$value['four']}\t{$value['five']}\t{$value['sum']}\t\n";
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
		
		log_message('debug', '=====调用Statistics->Experience->export接口结束=====');
	}
}