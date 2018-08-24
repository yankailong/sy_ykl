<?php
class Type extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Currency->Type->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Currency/');
		log_message('debug', '=====调用Currency->Type->__construct接口结束=====');
	}
	
	
	public function showView()
	{
		$this->load->view('module/Currency/type.htm');
	}
	
	
	public function getListData() {
		log_message('debug', '=====开始调用Currency->Type->getListData接口=====');
		
		try {
			$sql = "
				select
					`id` as `currencyTypeId`,
					`{$this->currLanguage}Value` as `currencyTypeValue`
				from
					`t_cfg_currency_type`
                                
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
		log_message('debug', '=====调用Currency->Type->getListData接口结束=====');
	}
}