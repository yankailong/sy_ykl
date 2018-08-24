<?php
class Money extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Resource->Money->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Resource/');
		log_message('debug', '=====调用Resource->Money->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Resource/money.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Resource->Money->getListData接口=====');
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
                                        `t_log_gold`  a
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
                        $getDataSql =str_replace('<selectColumns>', "from_unixtime(a.`time`,'%y-%m-%d') as `date`,a.`moneyGet`,a.`bindMoneyGet`,a.`moneyCost`,(a.`moneyGet`+a.`bindMoneyGet`-a.`moneyCost`) as `profit`,a.`moneyAll`,a.`bindMoneyAll`,(a.`moneyAll`+a.`bindMoneyAll`) as `all`,a.`login`", $sql);
                        
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
		log_message('debug', '=====调用Resource->Money->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Resource->Money->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "money.txt";
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
                                        `t_log_gold`  a
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
                        $getDataSql =str_replace('<selectColumns>', "from_unixtime(a.`time`,'%y-%m-%d') as `date`,a.`moneyGet`,a.`bindMoneyGet`,a.`moneyCost`,(a.`moneyGet`+a.`bindMoneyGet`-a.`moneyCost`) as `profit`,a.`moneyAll`,a.`bindMoneyAll`,(a.`moneyAll`+a.`bindMoneyAll`) as `all`,a.`login`", $sql);
                        
			$this->returnData['data']['rows'] = $this->gmDatabase->getArray($getDataSql);
                        
                        
                        
			
                        
                        echo "时间\t元宝获得\t绑元获得\t元宝&绑元消耗\t当日元宝&绑元盈亏\t元宝总余量\t绑元总余量\t元宝&绑元总余量\t登录人数\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['date']}\t{$value['moneyGet']}\t{$value['bindMoneyGet']}\t{$value['moneyCost']}\t{$value['profit']}\t{$value['moneyAll']}\t{$value['bindMoneyAll']}\t{$value['all']}\t{$value['login']}\t\n";
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
		
		log_message('debug', '=====调用Resource->Money->export接口结束=====');
	}
}