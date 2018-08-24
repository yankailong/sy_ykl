<?php
class Family extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '开始调用Online->Family->__construct接口');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Online/');
		log_message('debug', '调用Online->Family->__construct接口结束');
	}
	
	public function showView() {
		$this->load->view('module/Online/family.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Online->Family->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
				
			
			
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			$sql = "
                                select
					a.`leader_cid`,c.`name`
                                from
					`mem_family` a 
                                LEFT JOIN
                                       
                                        `mem_character` c
                                ON
                                        a.`leader_cid` = c.`cid` 
																	
			";
                        $nameArray = $this->gameDatabase->getArray($sql);
                        
                        foreach ($nameArray as  $value){
                            $nameArray[$value['leader_cid']] = $value['name'];
                        }
			$sql = "
				select
					<selectColumns>
				from
					`mem_family` a 
                                LEFT JOIN
                                        `mem_chr_family` b
                                ON
                                        a.`id` = b.`family_id`
                                LEFT JOIN
                                        `mem_character` c
                                ON
                                        b.`cid` = c.`cid` 
                                WHERE
                                        a.`delflag` =0
                                GROUP BY
                                        a.`id`
			"; 
                                        	
			
			
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "a.`id`,a.`name`,a.`leader_cid` as `leaderName`,a.`leader_cid`,FROM_UNIXTIME(a.`create_time`) as `create_time`,a.`count`, SUM(c.`battle`) as `sumBattle`, COUNT(IF(c.`last_login_time` > c.`last_logout_time`,TRUE,NULL)) as `onlineNum`", $sql);
			
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
			foreach ($this->returnData['data']['rows'] as $key =>$value){
                            if(isset($this->returnData['data']['rows'][$key]['leaderName'])){
                                $this->returnData['data']['rows'][$key]['leaderName'] = $nameArray[$this->returnData['data']['rows'][$key]['leaderName']];
                            }else{
                                $this->returnData['data']['rows'][$key]['leaderName'] = $this->returnData['data']['rows'][$key]['leaderName'];
                            }
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
		
		$this->returnJson();
		log_message('debug', '=====调用Online->Family->getListData接口结束=====');
	}
        public function player() {
		log_message('debug', '=====开始调用Online->Family->player接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
                        $id = $this->param->getParam('id',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post');
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
				
			
			
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			$sql = "
                                select
					<selectColumns>
                                from
                                        `mem_chr_family` a
                                left join
                                        `mem_character` b
                                on
                                        a.`cid` = b.`cid`
                                where
                                        `family_id` = '{$id}'
                                
																	
			";
                        
			
			
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "a.`cid`,b.`name`", $sql);
			
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
		log_message('debug', '=====调用Online->Family->player接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Online->Family->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "family.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
                        
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get');
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get', true);
				
			
			
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			$sql = "
                                select
					a.`leader_cid`,c.`name`
                                from
					`mem_family` a 
                                LEFT JOIN
                                       
                                        `mem_character` c
                                ON
                                        a.`leader_cid` = c.`cid` 
																	
			";
                        $nameArray = $this->gameDatabase->getArray($sql);
                        
                        foreach ($nameArray as  $value){
                            $nameArray[$value['leader_cid']] = $value['name'];
                        }
			$sql = "
				select
					<selectColumns>
				from
					`mem_family` a 
                                LEFT JOIN
                                        `mem_chr_family` b
                                ON
                                        a.`id` = b.`family_id`
                                LEFT JOIN
                                        `mem_character` c
                                ON
                                        b.`cid` = c.`cid` 
                                WHERE
                                        a.`delflag` =0
                                GROUP BY
                                        a.`id`
			"; 
                                        	
			
			
			$getDataSql = str_replace('<selectColumns>', "a.`id`,a.`name`,a.`leader_cid` as `leaderName`,a.`leader_cid`,FROM_UNIXTIME(a.`create_time`) as `create_time`,a.`count`, SUM(c.`battle`) as `sumBattle`, COUNT(IF(c.`last_login_time` > c.`last_logout_time`,TRUE,NULL)) as `onlineNum`", $sql);
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
			foreach ($this->returnData['data']['rows'] as $key =>$value){
                            if(isset($this->returnData['data']['rows'][$key]['leaderName'])){
                                $this->returnData['data']['rows'][$key]['leaderName'] = $nameArray[$this->returnData['data']['rows'][$key]['leaderName']];
                            }else{
                                $this->returnData['data']['rows'][$key]['leaderName'] = $this->returnData['data']['rows'][$key]['leaderName'];
                            }
                        }
			echo "公会id\t公会名称\t会长id\t会长名字\t创建日期\t成员数量\t在线数量\t总战斗力\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "'{$value['id']}'\t{$value['name']}\t'{$value['leader_cid']}'\t{$value['leaderName']}\t{$value['create_time']}\t{$value['count']}\t{$value['onlineNum']}\t{$value['sumBattle']}\t\n";
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
		
		log_message('debug', '=====调用Online->Family->export接口结束=====');
	}
}