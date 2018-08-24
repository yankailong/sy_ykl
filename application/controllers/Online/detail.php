<?php
class Detail extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Online->Detail->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Online/');
		log_message('debug', '=====调用Online->Detail->__construct接口结束=====');
	}
	
	
	public function showView()
	{
		$this->load->view('module/Online/detail.htm');
	}
	
	
	public function getListData()
	{
		log_message('debug', '=====开始调用Online->Detail->getListData接口=====');
		$this->verifyPrivilege();
	
		try {
			$gameAreaId = $this->param->getParam('gameAreaId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$date = $this->param->getParam('date', array('method' => 'string', 'emptyErrorCode' => '20201001', 'invalidErrorCode' => 1));
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			$sql = "
				select
					`statDateTime` as dateTime,
					`onlineRoleNum`
				from
					`t_data_game_online`
				where
					`statDateTime` like '{$date} %'
					and
					`gameAreaId` = '{$this->gameAreaId}'
				order by
					`statDateTime` desc
			";
					
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
		log_message('debug', '=====调用Online->Detail->getListData接口结束=====');
	}
}