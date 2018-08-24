<?php
class MY_Mysql
{
	private $con;
	
	public function connect($dbServer, $dbUser, $dbPassword, $dbName)
	{
		log_message('debug', '=====开始调用MY_Mysql->connect接口=====');
		log_message('debug', "数据库地址：{$dbServer}");
		log_message('debug', "数据库帐号：{$dbUser}");
		log_message('debug', "数据库密码：{$dbPassword}");
		log_message('debug', "数据库名称：{$dbName}");
	
		if(! $this->con = mysql_connect($dbServer, $dbUser, $dbPassword))
		{
			throw new My_Mysql_Exception('连接数据库失败', mysql_errno());
		}
	
		if(! mysql_select_db($dbName, $this->con))
		{
			throw new My_Mysql_Exception('选择数据库失败', mysql_errno());
		}
	
		$this->query('set names utf8');
		log_message('debug', '=====调用MY_Mysql->connect接口结束=====');
	}
	
	function close()
	{
		log_message('debug', '=====开始调用MY_Mysql->close接口=====');
	
		if(! mysql_close($this->con))
		{
			log_message('error', '关闭数据库失败');
		}
		else
		{
			log_message('debug', '关闭数据库成功');
		}
		
		log_message('debug', '=====调用MY_Mysql->close接口结束=====');
	}
	
	function query($sql)
	{
		log_message('debug', '=====开始调用MY_Mysql->query接口=====');
		log_message('debug', "{$sql}");
		$result = mysql_query($sql, $this->con);
	
		if(mysql_errno($this->con))
		{
			log_message('error', '查询数据库失败'.mysql_error($this->con));
			throw new MY_Mysql_Exception('查询数据库失败', mysql_errno($this->con));
		}
		
		log_message('debug', '=====调用MY_Mysql->query接口结束=====');
		return $result;
	}
	
	function getRow($sql) {
		log_message('debug', '=====开始调用MY_Mysql->getRow接口=====');
		$result = $this->query($sql);
		return mysql_fetch_assoc($result);
		log_message('debug', '=====调用MY_Mysql->getRow接口结束=====');
	}
	
	function getArray($sql) {
		log_message('debug', '=====开始调用MY_Mysql->getArray接口=====');
		$returnData = array();
		$result = $this->query($sql);
		
		while( !($row = mysql_fetch_assoc($result)) === false ) {
			$returnData[] = $row;
		}
		
		return $returnData;
		log_message('debug', '=====调用MY_Mysql->getArray接口结束=====');
	}
	
	function getColumn($sql, $index = 0) {
		log_message('debug', '=====开始调用MY_Mysql->getColumn接口=====');
		$result = $this->query($sql);
		if( ($row = mysql_fetch_array($result)) === false ) {
			return false;
		}
		else {
			return $row[$index];
		}
		log_message('debug', '=====调用MY_Mysql->getColumn接口结束=====');
	}
	
	function getLastInsertId() {
		return mysql_insert_id($this->con);
	}
	
	function getAffectedRow() {
		return mysql_affected_rows($this->con);
	}
	
	function openAutoCommit() {
		$sql = "set autocommit = 1";
		$this->query($sql);
	}
	
	function closeAutoCommit() {
		$sql = "set autocommit = 0";
		$this->query($sql);
	}
	
	function commit() {
		$sql = "commit";
		$this->query($sql);
	}
	
	function rollback() {
		$sql = "rollback";
		$this->query($sql);
	}
}