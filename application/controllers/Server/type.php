<?php
class Type extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '开始调用Server->Type->__construct接口');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Server/');
		log_message('debug', '调用Server->Type->__construct接口结束');
	}
	
	public function getListData()
	{
		log_message('debug', '=====开始调用Server->Type->getListData接口=====');
	
		try {
			$sql = "
				select
					`serverTypeId`,
					`serverType{$this->currLanguage}Name` as `serverTypeName`
				from
					`t_cfg_server_type`
			";
			$this->returnData['data'] = $this->gmDatabase->getArray($sql);
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
		log_message('debug', '=====调用Server->Type->getListData接口结束=====');
	}
}