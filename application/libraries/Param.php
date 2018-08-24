<?php
/*
 * 1-内部错误
 */

class MY_Param
{
	public function getParam($paramName, $checkInfo = array(), $method = 'post', $allowEmpty = false)
	{
		log_message('debug', '=====开始调用MY_Param->getParam=====');
		log_message('debug', "paramName：{$paramName}");
		log_message('debug', '检查方式：'.serialize($checkInfo));
		log_message('debug', "接收方式：{$method}");
	
		if( $method === 'post' && isset($_POST[$paramName]) ) {
			$paramValue = $_POST[$paramName];
		}
		elseif ( $method === 'get' && isset($_GET[$paramName]) ) {
			$paramValue = $_GET[$paramName];
		}
		else {
			$paramValue = '';
		}
		
		log_message('debug', "参数值：{$paramValue}");
	
		if( empty($checkInfo) || $this->checkParam($paramValue, $checkInfo, $allowEmpty) === true ) {
			log_message('debug', '调用MY_Param->getParam结束');
			return $paramValue;
		}
		else {
			log_message('error', '校验参数失败');
			log_message('debug', '=====调用MY_Param->getParam结束=====');
			if($paramValue === '') {
				throw new MY_Param_Exception("参数非法", $checkInfo['emptyErrorCode']);
			}
			else {
				throw new MY_Param_Exception("参数为空", $checkInfo['invalidErrorCode']);
			}
		}
	}
	
	
	
	
	/*
	 * 内部错误号
	 * 1-checkInfo配置错误
	 * 101-不是int型号
	 * 102-int型大于最大值
	 * 103-int型小于最小值
	 * 201-不是string型
	 * 202-string型超过最大长度
	 * 203-string型不足最小长度
	 * 301-不在列表中
	 * 401-不是ip地址
	 */
	public function checkParam($paramValue, $checkInfo, $allowEmpty = false)
	{
		try {
			log_message('debug', '=====开始调用MY_Param->checkParam=====');
			log_message('debug', "参数值：{$paramValue}");
			log_message('debug', '校验方式：'.serialize($checkInfo));
			
			if( !is_array($checkInfo) || !key_exists('method', $checkInfo) || !key_exists('emptyErrorCode', $checkInfo) || !key_exists('invalidErrorCode', $checkInfo)) {
				throw new Exception('checkInfo配置错误', 1);
			}
			
		
			if($allowEmpty === true && $paramValue === '') {
				log_message('debug', '允许为空值');
			}
			else {
				if($paramValue === '') {
					throw new Exception('参数值不能为空', 100);
				}
				
				switch ($checkInfo['method']) {
					case 'int':
						log_message('debug', 'int型检查');
						
						if( preg_match('/^(0|((-|)[1-9][0-9]*))$/', $paramValue) )
						{
							if( isset($checkInfo['max']) && $paramValue > $checkInfo['max'] ) {
								throw new Exception('int型大于最大值', 102);
							}
							
							if( isset($checkInfo['min']) && $paramValue < $checkInfo['min'] ) {
								throw new Exception('int型小于最小值', 103);
							}
						}
						else {
							throw new Exception('不是int类型', 101);
						}
						
						break;
	
					case 'string':
						log_message('debug', 'string型检查');
						
						if(! preg_match("/[\\\']/u", $paramValue) ) {
							if( isset($checkInfo['maxLength']) && strlen($paramValue) > $checkInfo['maxLength'] ) {
								throw new Exception('string型超过最大长度', 202);
							}
							
							if( isset($checkInfo['minLength']) && strlen($paramValue) < $checkInfo['minLength'] ) {
								throw new Exception('string型不足最小长度', 203);
							}
						}
						else {
							throw new Exception('不是string类型', 201);
						}
						
						break;
				
					case 'list':
						log_message('debug', 'list型检查');
						
						$tmpArray = explode('|', $checkInfo['list']);
						if ( !in_array($paramValue, $tmpArray) ) {
							throw new Exception('不在列表中', 301);
						}
						
						break;
						
					case 'ip':
						log_message('debug', 'ip型检查');
						
						if( !preg_match('/((25[0-5])|(2[0-4][0-9])|(1[0-9][0-9])|([1-9][0-9])|[0-9])(\.((25[0-5])|(2[0-4][0-9])|(1[0-9][0-9])|([1-9][0-9])|[0-9])){3}/', $paramValue) ) {
							throw new Exception('不是ip地址', 401);
						}
						
						break;
			
					default:
						throw new Exception('checkInfo配置错误', 1);
				}
			}
		}
		catch (Exception $e) {
			$errorMessage = $e->getMessage();
			$errorCode = $e->getCode();
			if($errorCode >= 1 && $errorCode <100) {
				log_message('error', $errorMessage);
				log_message('debug', '=====调用MY_Param->checkParam结束=====');
				throw new MY_Param_Exception('内部错误', 1);
			}
			else {
				log_message('debug', $errorMessage);
				log_message('debug', '=====调用MY_Param->checkParam结束=====');
				return false;
			}
		}

		log_message('debug', '=====调用MY_Param->checkParam结束=====');
		return true;
	}
}