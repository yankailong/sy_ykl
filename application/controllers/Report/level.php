<?php
class Level extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Report->Level->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Report/');
		log_message('debug', '=====调用Report->Level->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Report/level.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Report->Level->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1));
                        $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1));
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
                        $sort = $this->param->getParam('sort', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$order = $this->param->getParam('order', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			
			$sql = "
				select
					<selectColumns>
				from
					`mem_character`
                                where
                                        `create_time`< unix_timestamp('{$endDate}')
				
			";
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
                        $sql = "
                                select
                                        <selectColumns>
                                from
                                    (
                                        select
                                               max(`level`) as `max`
                                        from
                                               
                                              `log_player_level`  
                                        where 
                                            `time`<UNIX_TIMESTAMP('{$endDate}')
                                        group by 
                                                `cid`
                                    ) a
                                group by 
                                            a.`max` 
				
			";
			$getDataSql = str_replace('<selectColumns>', "a.`max` as `level`, count(a.`max`) as `roleNum`, round(count(a.`max`)/'{$this->returnData['data']['total']}'*100,2) as `rate`", $sql);
			if($sort && $order) {
				$getDataSql .= " order by {$sort} {$order}";
			}
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			$sql = "
				select
					`level`,count(`cid`) as `roleNum`,round(count(`cid`)/'{$this->returnData['data']['total']}'*100,2) as `rate`
				from
					`mem_character`
                                where
                                        `level` = 1
                                        and
                                        `create_time`<UNIX_TIMESTAMP('{$endDate}')
				
			";
			$level1=$this->gameDatabase->getRow($sql);
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        array_unshift($this->returnData['data']['rows'],$level1);
                        foreach ($this->returnData['data']['rows'] as $key =>$value){
                            if(isset($this->returnData['data']['rows'][$key]['rate'])){
                                $this->returnData['data']['rows'][$key]['rate'] =$this->returnData['data']['rows'][$key]['rate']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['rate'] = $this->returnData['data']['rows'][$key]['rate'];
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
		log_message('debug', '=====调用Report->Level->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Report->Level->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "level.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1),'get');
                        $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1),'get');
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			$sql = "
				select
					<selectColumns>
				from
					`mem_character`
				where
                                        `create_time`< unix_timestamp('{$endDate}')
			";
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
                        $sql = "
                                select
                                        <selectColumns>
                                from
                                    (
                                        select
                                               max(`level`) as `max`
                                        from
                                               
                                              `log_player_level` 
                                        where 
                                            `time`<UNIX_TIMESTAMP('{$endDate}')
                                        group by 
                                                `cid`
                                    ) a
                                    group by 
                                            a.`max` 
				
			";
			$getDataSql = str_replace('<selectColumns>', "a.`max` as `level`, count(a.`max`) as `roleNum`, round(count(a.`max`)/'{$this->returnData['data']['total']}'*100,2) as `rate`", $sql);
			$sql = "
				select
					`level`,count(`cid`) as `roleNum`,round(count(`cid`)/'{$this->returnData['data']['total']}'*100,2) as `rate`
				from
					`mem_character`
                                where
                                        `level` = 1
                                        and
                                        `create_time`<UNIX_TIMESTAMP('{$endDate}')
				
			";
			$level1=$this->gameDatabase->getRow($sql);
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        array_unshift($this->returnData['data']['rows'],$level1);
                        foreach ($this->returnData['data']['rows'] as $key =>$value){
                            if(isset($this->returnData['data']['rows'][$key]['rate'])){
                                $this->returnData['data']['rows'][$key]['rate'] =$this->returnData['data']['rows'][$key]['rate']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['rate'] = $this->returnData['data']['rows'][$key]['rate'];
                            }
                        }
                        echo "等级\t玩家数量\t等级占比\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['level']}\t{$value['roleNum']}\t{$value['rate']}\t\n";
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
		
		log_message('debug', '=====调用Report->Level->export接口结束=====');
	}
}