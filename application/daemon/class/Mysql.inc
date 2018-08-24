<?php
/*
 * Version 1.0.0
* @author mickey
* error code
* 		2001-operatorConfigArray参数非法
*/

class Zw_Mysql
{
	private $Log = false;
	
	private $con;
	
	
	
	
	
	public function setLog($Log)
	{
		$this->Log = $Log;
	}
	
	
	
	
	
	public function writeLog($message, $level = 'ERROR')
	{
		if( is_a($this->Log, 'Zw_Log') ) {
			$this->Log->write($message, $level);
		}
	}
	
	
	
	
	
	public function connect($dbServer, $dbUser, $dbPassword, $dbName)
	{
		$this->writeLog('开始连接数据库', 'DEBUG');
		$this->writeLog("数据库地址：{$dbServer}", 'DEBUG');
		$this->writeLog("数据库用户名：{$dbUser}", 'DEBUG');
		$this->writeLog("数据库密码：{$dbPassword}", 'DEBUG');
		$this->writeLog("数据库名称：{$dbName}", 'DEBUG');
	
		if(! $this->con = mysql_connect($dbServer, $dbUser, $dbPassword))
		{
			throw new Zw_Mysql_Exception('连接数据库失败', 3001);
		}
	
		if(! mysql_select_db($dbName, $this->con))
		{
			throw new Zw_Mysql_Exception('选择数据库失败');
		}
	
		$this->query('set names utf8');
	}
	
	
	
	
	
	function close()
	{
		$this->writeLog('开始关闭数据库', 'DEBUG');
	
		if(! mysql_close($this->con))
		{
			$this->writeLog("关闭数据库失败");
		}
		else
		{
			$this->writeLog("关闭数据库成功", 'DEBUG');
		}
	}
	
	
	
	
	
	function query($sql)
	{
		$this->writeLog("执行sql语句", 'DEBUG');
		$this->writeLog("{$sql}",'DEBUG');
	
		$result = mysql_query($sql, $this->con);
	
		if(mysql_errno($this->con))
		{
			$this->writeLog(mysql_errno($this->con).'-'.mysql_error($this->con));
			throw new Zw_Mysql_Exception('查询数据库失败', mysql_errno($this->con));
		}
	
		return $result;
	}
	
	
	
	
	
	function getRow($sql)
	{
		$result = $this->query($sql);
		return mysql_fetch_array($result, MYSQL_ASSOC);
	}
	
	
	function getArray($sql) {
		$returnData = array();
		$result = $this->query($sql);
	
		while( !($row = mysql_fetch_assoc($result)) === false ) {
			$returnData[] = $row;
		}
	
		return $returnData;
	}
	
	
	function getColumn($sql, $index = 0) {
		$result = $this->query($sql);
		
		if( ($row = mysql_fetch_array($result)) === false ) {
			return false;
		}
		else {
			return $row[$index];
		}
	}
	
	function getAffectedRow() {
		return mysql_affected_rows($this->con);
	}
	
	function setAutoCommitOn() {
		$sql = "set autocommit=on";
		
		$this->query($sql);
	}
	
	
	function setAutoCommitOff() {
		$sql = "set autocommit=off";
		
		$this->query($sql);
	}
	
	function commit() {
		$this->query('commit');
	}
	
	function rollback() {
		$this->query('rollback');
	}
}