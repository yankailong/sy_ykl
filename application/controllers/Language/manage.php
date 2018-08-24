<?php
class Manage extends MY_Controller
{
	public function getCurrLanguage()
	{
		log_message('debug', '=====开始调用Language->getCurrLanguage=====');
		$this->returnData['data']['languageFlag'] = $this->currLanguage;
		$this->returnJson();
		log_message('debug', '=====调用Language->getCurrLanguage结束=====');
	}
	
	
	public function setCurrLanguage()
	{
		log_message('debug', '=====开始调用Language->setCurrLanguage=====');
		
		try {
			$languageFlag = $this->param->getParam('languageFlag', array('method' => 'list', 'list' => 'chinese|english|vietnamese', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$this->session->set_userdata('language', $languageFlag);
		}
		catch (MY_Param_Exception $e) {
			$errorCode = $e->getCode();
			$this->setErrorCode(1);
		}
		
		$this->returnJson();
		log_message('debug', '=====调用Language->setCurrLanguage结束=====');
	}
}