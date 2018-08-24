<?php
class Star extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Resource->Star->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Resource/');
		log_message('debug', '=====调用Resource->Star->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Resource/star.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Resource->Star->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1), 'post', true);
                        $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1), 'post', true);
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			
			
			
                        $sql = "
                                select
                                        <selectColumns>
                                from 
                                        `t_log_ave`  a
                                left join
                                        `t_data_game_area` b
                                on
                                        a.`operatorId` = b.`operatorId`
                                        and
                                        a.`areaNum` = b.`areaNum`
                                where
                                        a.`operatorId` = '{$operatorId}'
                                        and
                                        b.`gameAreaId` = '{$gameAreaId}'
			";
                        
                        if($startDate) {
				$sql .= "
					and
					a.`time` >= unix_timestamp('{$startDate}')
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					a.`time` <= unix_timestamp('{$endDate}')
				";
			}
                        $getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
                        $getDataSql =str_replace('<selectColumns>', "from_unixtime(a.`time`,'%y-%m-%d') as `date`,((a.`time`-unix_timestamp(date_format(b.`openDatetime`,'%Y-%m-%d')))/86400)+1 as `days`,a.`star` as `ave`", $sql);
                        
                        if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
                        
                        $this->returnData['data']['rows'] = $this->gmDatabase->getArray($getDataSql);
                        
                        
                        
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
		log_message('debug', '=====调用Resource->Star->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Resource->Star->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "star.txt";
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
                                        `t_log_ave`  a
                                left join
                                        `t_data_game_area` b
                                on
                                        a.`operatorId` = b.`operatorId`
                                        and
                                        a.`areaNum` = b.`areaNum`
                                where
                                        a.`operatorId` = '{$operatorId}'
                                        and
                                        b.`gameAreaId` = '{$gameAreaId}'
			";
                        
                        if($startDate) {
				$sql .= "
					and
					a.`time` >= unix_timestamp('{$startDate}')
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					a.`time` <= unix_timestamp('{$endDate}')
				";
			}
                        $getDataSql =str_replace('<selectColumns>', "from_unixtime(a.`time`,'%y-%m-%d') as `date`,((a.`time`-unix_timestamp(date_format(b.`openDatetime`,'%Y-%m-%d')))/86400)+1 as `days`,a.`star`", $sql);
                        
			$this->returnData['data']['rows'] = $this->gmDatabase->getArray($getDataSql);
                        
                        
                        
			
                        
                        echo "时间\t开服天数\t平均星脉等级\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['date']}\t{$value['days']}\t{$value['star']}\t\n";
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
		
		log_message('debug', '=====调用Resource->Star->export接口结束=====');
	}
        public function player() {
		log_message('debug', '=====开始调用Resource->Star->player接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$time = $this->param->getParam('time', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1));
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			
			
			
                        $sql = "
                                select
                                        <selectColumns>
                                from 
                                        `t_log_order_item_one`  a
                                left join
                                        `t_data_game_area` b
                                on
                                        a.`operatorId` = b.`operatorId`
                                        and
                                        a.`areaNum` = b.`areaNum`
                                where
                                        a.`operatorId` = '{$operatorId}'
                                        and
                                        b.`gameAreaId` = '{$gameAreaId}'
                                        and
                                        a.`time` = unix_timestamp('{$time}')
                                order by
                                        a.`order` asc
                                     
			";
                        
                        
                        $getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
                        $getDataSql =str_replace('<selectColumns>', "((a.`time`-unix_timestamp(date_format(b.`openDatetime`,'%Y-%m-%d')))/86400)+1 as `days`,a.`cid6` as `cid`,a.`name6` as `name`,a.`star`,a.`order`", $sql);
                        
                        if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
                        
                        $this->returnData['data']['rows'] = $this->gmDatabase->getArray($getDataSql);
                        
                        
                        
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
		log_message('debug', '=====调用Resource->Star->player接口结束=====');
	}
}