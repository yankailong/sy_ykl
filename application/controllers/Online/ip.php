<?php
class Ip extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '开始调用Online->Ip->__construct接口');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Online/');
		log_message('debug', '调用Online->Ip->__construct接口结束');
	}
	
	public function showView() {
		$this->load->view('module/Online/ip.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Online->Ip->getListData接口====='); 
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
				
			
			// last_login_time：上次登陆时间,大于号改成小于号	a.`last_login_time`<a.`last_logout_time`
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			$sql = "
                                SELECT
                                        <selectColumns>
                                FROM
                                        `sys_user` a
                                LEFT JOIN
                                        `mem_character` b
                                ON
                                        a.`uid` = b.`uid`
                                WHERE                                       
                                        a.`last_login_time`> a.`last_logout_time`
                                GROUP BY
                                        a.`last_login_ip`
                                ORDER BY
                                		COUNT(b.`cid`) DESC
			"; 
                                        	
			
			
			$getTotalSql = str_replace('<selectColumns>', "a.`last_login_ip`", $sql);
                        $getCountSql = "
                                SELECT
                                        count(*)
                                FROM
                                        ($getTotalSql) c
                        ";
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getCountSql);
			$getDataSql = str_replace('<selectColumns>', "a.`last_login_ip` as `ip`,GROUP_CONCAT(b.`cid`) as `cid` , GROUP_CONCAT(b.`name`) as `name`,GROUP_CONCAT(b.`level`) as `level`,COUNT(b.`cid`) as `count`", $sql);
			
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
			
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
		log_message('debug', '=====调用Online->Ip->getListData接口结束=====');
	}
        public function getInfoData() {
		log_message('debug', '=====开始调用Online->Ip->getInfoData接口=====');
		$this->verifyPrivilege();
		
		try {
                        $operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
			$ip = $this->param->getParam('ip', array('method' => 'string',  'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
				
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			
			
			$sql = "
                                SELECT
                                        <selectColumns>
                                FROM
                                        `sys_user` a
                                LEFT JOIN
                                        `mem_character` b
                                ON
                                        a.`uid` = b.`uid`
                                WHERE
                                        a.`last_login_time`> a.`last_logout_time`
                                        and
                                        a.`last_login_ip` = '{$ip}'
			"; 
                                        	
			
			
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "a.`last_login_ip` as `ip`,b.`cid` , b.`name` ,b.`level`", $sql);
			
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
			
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
		log_message('debug', '=====调用Online->Ip->getInfoData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Online->Ip->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "ip.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
                        
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get');
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get', true);
				
			
			
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			$sql = "
                                SELECT
                                        <selectColumns>
                                FROM
                                        `sys_user` a
                                LEFT JOIN
                                        `mem_character` b
                                ON
                                        a.`uid` = b.`uid`
                                WHERE
                                        a.`last_login_time`> a.`last_logout_time`
                                GROUP BY
                                        a.`last_login_ip`
                                ORDER BY
                                		COUNT(b.`cid`) DESC
			"; 
                                        	
			
			
			$getDataSql = str_replace('<selectColumns>', "a.`last_login_ip` as `ip`,GROUP_CONCAT(b.`cid`) as `cid` , GROUP_CONCAT(b.`name`) as `name`,GROUP_CONCAT(b.`level`) as `level`,COUNT(b.`cid`) as `count`", $sql);
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
			echo "ip\t角色id\t角色名称\t等级\t人数\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "'{$value['ip']}'\t'{$value['cid']}'\t{$value['name']}\t{$value['level']}\t{$value['count']}\t\n";
                        }
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
		
		log_message('debug', '=====调用Online->Ip->export接口结束=====');
	}
}