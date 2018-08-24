<?php
class Limit extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Statistics->Limit->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Statistics/');
		log_message('debug', '=====调用Statistics->Limit->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Statistics/limit.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Statistics->Limit->getListData接口=====');
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
                                      unix_timestamp(date_format(`openDatetime`,'%Y-%m-%d'))
                                from 
                                      `t_data_game_area`
                                where
                                      `gameAreaId` = '{$gameAreaId}'
			";
			$openTime = $this->gmDatabase->getColumn($sql);
			
                        $sql = "
                                select 
                                      <selectColumns>
                                from 
                                      `log_gold_change`
                                where
                                      `opway` = 2125
                                      and
                                      (`value` = -1588 or `value` = -8888 or `value` = -26888)
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
                        
                        $sql.='group by `days`,`value`';
                        $getDataSql =str_replace('<selectColumns>', "'{$openTime}' as `openTime`,count(distinct(`cid`)) as `count`,from_unixtime(`time`,'%y-%m-%d') as days, unix_timestamp(from_unixtime(`time`,'%y-%m-%d')) as `time`,`value` as `gift`", $sql);
                        if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
                        
			$this->returnData['data']['total'] = 21;
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
		log_message('debug', '=====调用Statistics->Limit->getListData接口结束=====');
	}
        
}