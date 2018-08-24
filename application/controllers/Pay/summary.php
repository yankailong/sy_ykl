<?php
class summary extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Pay->Summary->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Pay/');
		log_message('debug', '=====调用Pay->Summary->__construct接口结束=====');
	}
	
	public function showView()
	{
		$this->load->view('module/Pay/summary.htm');
	}
	
	public function getListData()
	{
		log_message('debug', '=====开始调用Pay->Summary->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$gameAreaIdString = $this->param->getParam('gameAreaIdString', array('method' => 'string', 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$paySummaryTypeId = $this->param->getParam('paySummaryTypeId', array('method' => 'int', 'min' => 1, 'max' => 2, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			
			$sql = "
				select
					a.`date`,
					c.`operatorName`,
					sum(a.`money`) as `money`
				from
					`t_data_pay_summary` a
				left join
					`t_data_game_area` b
				on
					a.`gameAreaId` = b.`gameAreaId`
				left join
					`t_data_operator` c
				on
					b.`operatorId` = c.`operatorId`
				where
					b.`gameAreaId` in ($gameAreaIdString)
			";
			
			if($startDate) {
				$sql .= "
					and
					`date` >= '{$startDate}'
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					`date` <= '{$endDate}'
				";
			}
			
			if($paySummaryTypeId === '1') {
				$sql .= "
					group by
						a.`date`
				";
			}
			else if($paySummaryTypeId === '2') {
				$sql .= "
					group by
						c.`operatorName`
				";
			}
			$this->returnData['data']['rows'] = $this->gmDatabase->getArray($sql);
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
		log_message('debug', '=====调用Pay->Summary->getListData接口结束=====');
	}
}