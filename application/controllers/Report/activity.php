<?php
class Activity extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Report->Activity->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Report/');
		log_message('debug', '=====调用Report->Activity->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Report/activity.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Report->Activity->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1), 'post', true);
                        $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1), 'post', true);
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			
			
			
                        $sql = "
                                select 
                                      <selectColumns>
                               from 
                                      (
                                          select 
                                                *,date_format( from_unixtime(`time`), \"%Y-%m-%d \" )as `date`,count(distinct (`cid`)) as `count`  
                                          from 
                                                `log_activity`  
                                          group by 
                                                `actid`,`acttype`,`date` 
                                         order by `date`
                                      ) a 
				where
                                    1 =1
			";
                        if($startDate) {
				$sql .= "
					and
					a.`time` >= unix_timestamp('{$startDate}')
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					a.`time` <= unix_timestamp('{$endDate}')
				";
			}
                        $sql.="group by a.`date`";
                        $getDataSql = str_replace('<selectColumns>', "a.`date`,
                            max(case when a.`actid`='1' and a.`acttype`='4' then a.`count` end) as `pig_one`, 
                            max(case when a.`actid`='4' and a.`acttype`='19' then a.`count` end) as `jxtz_one`,
                            max(case when a.`actid`='6' and a.`acttype`='13' then a.`count` end) as `first`,
                            max(case when a.`actid`='2' and a.`acttype`='4' then a.`count` end) as `pig_two`,
                            max(case when a.`actid`='5' and a.`acttype`='12' then a.`count` end) as `jzfyb`,
                            max(case when a.`actid`='3' and a.`acttype`='4' then a.`count` end) as `pig_three`,
                            max(case when a.`actid`='7' and a.`acttype`='18' then a.`count` end) as `syzb`,
                            max(case when a.`actid`='8' and a.`acttype`='19' then a.`count` end) as `jxtz_two`,
                            max(case when a.`actid`='9' and a.`acttype`='20' then a.`count` end) as `double_one`,
                            max(case when a.`actid`='10' and a.`acttype`='20' then a.`count` end) as `double_two`,
                            max(case when a.`actid`='11' and a.`acttype`='20'  then a.`count` end) as `double_three`", $sql);
			$sqlTotal = "
                                select count(*) from 
			";	
                        $sqlTotal.="({$getDataSql}) b";
                        if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
                        
                        $this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        
                            
			
			 
                        
        
                        
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($sqlTotal);
         
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
		log_message('debug', '=====调用Report->Activity->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Report->Activity->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "activity.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1),'get',true);
                        $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1),'get',true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			$sql = "
                                select 
                                      <selectColumns>
                               from 
                                      (
                                          select 
                                                *,date_format( from_unixtime(`time`), \"%Y-%m-%d \" )as `date`,count(distinct (`cid`)) as `count`  
                                          from 
                                                `log_activity`  
                                          group by 
                                                `actid`,`date` 
                                         order by `date`
                                      ) a 
				where
                                    1 =1
			";
                        if($startDate) {
				$sql .= "
					and
					a.`time` >= unix_timestamp('{$startDate}')
				";
			}
			
			if($endDate) {
				$sql .= "
					and
					a.`time` <= unix_timestamp('{$endDate}')
				";
			}
                        $sql.="group by a.`date`";
                        $getDataSql = str_replace('<selectColumns>', "a.`date`,
                            max(case when a.`actid`='1' then a.`count` end) as `gbl_m`, 
                            max(case when a.`actid`='2' then a.`count` end) as `zgt_fb`,
                            max(case when a.`actid`='3' then a.`count` end) as `bhs_fb`,
                            max(case when a.`actid`='4' then a.`count` end) as `wg`,
                            max(case when a.`actid`='5' then a.`count` end) as `gbl_a`,
                            max(case when a.`actid`='7' then a.`count` end) as `fb`,
                            max(case when a.`actid`='29' then a.`count` end) as `worldFirst`,
                            max(case when a.`actid`='30' then a.`count` end) as `worldSecond`,
                            max(case when a.`actid`='31' then a.`count` end) as `worldThird`,
                            max(case when a.`actid`='32' then a.`count` end) as `worldFourth`,
                            max(case when a.`actid`='33' then a.`count` end) as `worldFifth`,
                            max(case when a.`actid`='34' then a.`count` end) as `worldSixth`,
                            max(case when a.`actid`='35' then a.`count` end) as `worldOne`,
                            max(case when a.`actid`='36' then a.`count` end) as `worldTwo`,
                            max(case when a.`actid`='37' then a.`count` end) as `worldThree`,
                            max(case when a.`actid`='38' then a.`count` end) as `worldFour`,
                            max(case when a.`actid`='39' then a.`count` end) as `worldFive`,
                            max(case when a.`actid`='40' then a.`count` end) as `worldSix`,
                            max(case when a.`actid`='41' then a.`count` end) as `worldSeven`,
                            max(case when a.`actid`='42' then a.`count` end) as `war`,
                            max(case when a.`actid`='43' then a.`count` end) as `worship_m`,
                            max(case when a.`actid`='44' then a.`count` end) as `worship_a`,
                            max(case when a.`actid`='45' then a.`count` end) as `straddling`,
                            max(case when a.`actid`='46' then a.`count` end) as `Battle_royale`", $sql);
                        
                        $this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        
			
			 
                        
			
                        
                        echo "时间\t哥布林入侵10:30\t至高天秘境\t神秘庇护所\t失落王冠争夺战\t哥布林入侵14:30\t多人副本\t第一章世界事件\t第二章世界事件\t第三章世界事件\t第四章世界事件\t第五章世界事件\t第六章世界事件\t世界BOSS逗比1号\t世界BOSS逗比2号\t世界BOSS逗比3号\t世界BOSS逗比4号\t世界BOSS逗比5号\t世界BOSS逗比6号\t世界BOSS逗比7号\t攻城战\t城主膜拜11:30\t城主膜拜17:30\t跨服大逃杀\t大逃杀\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['date']}\t{$value['gbl_m']}\t{$value['zgt_fb']}\t{$value['bhs_fb']}\t{$value['wg']}\t{$value['gbl_a']}\t{$value['fb']}\t{$value['worldFirst']}\t{$value['worldSecond']}\t{$value['worldThird']}\t{$value['worldFourth']}\t{$value['worldFifth']}\t{$value['worldSixth']}\t{$value['worldOne']}\t{$value['worldTwo']}\t{$value['worldThree']}\t{$value['worldFour']}\t{$value['worldFive']}\t{$value['worldSix']}\t{$value['worldSeven']}\t{$value['war']}\t{$value['worship_m']}\t{$value['worship_a']}\t{$value['straddling']}\t{$value['Battle_royale']}\t\n";
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
		
		log_message('debug', '=====调用Report->Activity->export接口结束=====');
	}
}