<?php
/*
 * Version 1.0.0
 * @author mickey
 */

class Zw_Log
{
	//日志文件
	private $logFile;
	
	//日志级别
	private $currLogLevel = 1;
	
	//日志级别类型配置数组
	private $logLevelConfig = array(
		'ERROR'		=>	1,
		'WARNING'	=>	2,
		'DEBUG'		=>	3
	);
	
	
	
	
	
	function getCurrLogLevel()
	{
		return array_search($this->currLogLevel, $this->logLevelConfig);
	}
	
	
	
	
	
	function setCurrLogLevel($logLevel)
	{
		if(array_key_exists($logLevel, $this->logLevelConfig)) {
			$this->currLogLevel = $this->logLevelConfig[$logLevel];
		}
	}
	
	
	
	
	
	function setLogFile($logFile)
	{
		$this->logFile = $logFile;
	}
	
	
	
	
	
	function write($message, $logLevel = 'ERROR')
	{
		if( array_key_exists($logLevel, $this->logLevelConfig) && $this->logLevelConfig[$logLevel] <= $this->currLogLevel ) {
			$logMessage = date('[Y-m-d H:i:s]-')."[{$logLevel}]-";
			$logMessage .= "{$message}\n";
			file_put_contents($this->logFile, $logMessage, FILE_APPEND);
		}
	}
}