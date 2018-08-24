<?php
class Task extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Report->Task->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Report/');
		log_message('debug', '=====调用Report->Task->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Report/task.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Report->Task->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 2040001, 'invalidErrorCode' => 1));
                        $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 2040001, 'invalidErrorCode' => 1));
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
                        $sort = $this->param->getParam('sort', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$order = $this->param->getParam('order', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			
                        $sql = "
				select
					*
				from
					`t_cfg_task`
				
			";
                        $taskInfo = $this->gmDatabase->getArray($sql);
                        $tem = array();
                        foreach($taskInfo as $val){
                            $tem[$val['taskId']] = array('taskName'=>$val['name'],'level'=>$val['level'],'target'=>$val['target']);
                        }
                        
			$sql = "
				select
					<selectColumns>
				from
					`mem_character`
				
			";
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
                        $sql = "
                               select
                                       <selectColumns>
                                from
                                        (
                                                select
                                                        *
                                                from
                                                        (
                                                                select
                                                                        *
                                                                from
                                                                        `log_task`
                                                                where
                                                                        `state` = 0
                                                                and 
                                                                        `type` = 1
                                                                and
                                                                        `receive_time`> UNIX_TIMESTAMP('{$startDate}')
                                                                and
                                                                        `receive_time`<UNIX_TIMESTAMP('{$endDate}')
                                                                order by
                                                                        `receive_time` desc
                                                        ) as b
                                                group by
                                                        b.`cid`
                                                order by
                                                        b.`receive_time` asc
                                        ) as c
                                group by
                                        c.`tid`
				
			";
			$getDataSql = str_replace('<selectColumns>', "c.`tid`, count(c.`cid`) as `roleNum`, round(count(c.`cid`)/'{$this->returnData['data']['total']}'*100,2) as `rate`,'1' as `taskName`,'1' as `level`,'1' as `target`", $sql);
			if($sort && $order) {
				$getDataSql .= " order by {$sort} {$order}";
			}
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        
                        foreach ($this->returnData['data']['rows'] as $key =>$value){
                            if(isset($this->returnData['data']['rows'][$key]['rate'])){
                                $this->returnData['data']['rows'][$key]['rate'] =$this->returnData['data']['rows'][$key]['rate']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['rate'] = $this->returnData['data']['rows'][$key]['rate'];
                            }
                            if(isset($tem[$this->returnData['data']['rows'][$key]['tid']])){
                                  $this->returnData['data']['rows'][$key]['taskName'] = $tem[$this->returnData['data']['rows'][$key]['tid']]['taskName'];
                                  $this->returnData['data']['rows'][$key]['level'] = $tem[$this->returnData['data']['rows'][$key]['tid']]['level'];
                                  $this->returnData['data']['rows'][$key]['target'] = $tem[$this->returnData['data']['rows'][$key]['tid']]['target'];
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
		log_message('debug', '=====调用Report->Task->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Report->Task->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "task.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
                        
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' =>2040001, 'invalidErrorCode' => 1),'get');
                        $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 2040001, 'invalidErrorCode' => 1),'get');
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			
                        $sql = "
				select
					*
				from
					`t_cfg_task`
				
			";
                        $taskInfo = $this->gmDatabase->getArray($sql);
                        $tem = array();
                        foreach($taskInfo as $val){
                            $tem[$val['taskId']] = array('taskName'=>$val['name'],'level'=>$val['level'],'target'=>$val['target']);
                        }
			$sql = "
				select
					<selectColumns>
				from
					`mem_character`
				
			";
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
                        $sql = "
                               select
                                       <selectColumns>
                                from
                                        (
                                                select
                                                        *
                                                from
                                                        (
                                                                select
                                                                        *
                                                                from
                                                                        `log_task`
                                                                where
                                                                        `state` = 0
                                                                and 
                                                                        `type` = 1
                                                                and
                                                                        `receive_time`> UNIX_TIMESTAMP('{$startDate}')
                                                                and
                                                                        `receive_time`<UNIX_TIMESTAMP('{$endDate}')
                                                                order by
                                                                        `receive_time` desc
                                                        ) as b
                                                group by
                                                        b.`cid`
                                                order by
                                                        b.`receive_time` asc
                                        ) as c
                                group by
                                        c.`tid`
				
			";
			$getDataSql = str_replace('<selectColumns>', "c.`tid`, count(c.`cid`) as `roleNum`, round(count(c.`cid`)/'{$this->returnData['data']['total']}'*100,2) as `rate`", $sql);
			
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        foreach ($this->returnData['data']['rows'] as $key =>$value){
                            if(isset($this->returnData['data']['rows'][$key]['rate'])){
                                $this->returnData['data']['rows'][$key]['rate'] =$this->returnData['data']['rows'][$key]['rate']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['rate'] = $this->returnData['data']['rows'][$key]['rate'];
                            }
                            if(isset($tem[$this->returnData['data']['rows'][$key]['tid']])){
                                  $this->returnData['data']['rows'][$key]['taskName'] = $tem[$this->returnData['data']['rows'][$key]['tid']]['taskName'];
                                  $this->returnData['data']['rows'][$key]['level'] = $tem[$this->returnData['data']['rows'][$key]['tid']]['level'];
                                  $this->returnData['data']['rows'][$key]['target'] = $tem[$this->returnData['data']['rows'][$key]['tid']]['target'];
                            }
                        }
                        echo "任务id\t停留任务人数\t停留占比\t任务名称\t等级\t任务目标\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['tid']}\t{$value['roleNum']}\t{$value['rate']}\t{$value['taskName']}\t{$value['level']}\t{$value['target']}\t\n";
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
		
		log_message('debug', '=====调用Report->Task->export接口结束=====');
	}
}