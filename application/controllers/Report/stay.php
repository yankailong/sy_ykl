<?php
class Stay extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Report->Stay->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Report/');
		log_message('debug', '=====调用Report->Stay->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Report/stay.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Report->Stay->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1));
                        $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1));
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			
			$sql = "
				select
					<selectColumns>
				from
					`log_player_stay` a
                                left join
                                        `log_report_daily` b
                                on
                                        a.`time`+3600*24 = b.`time`
                                where
                                        a.`time` >= UNIX_TIMESTAMP('{$startDate}')
                                        and
                                        a.`time` <= UNIX_TIMESTAMP('{$endDate}')
                                group by 
                                a.`time`
			";
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
			
			$getDataSql = str_replace('<selectColumns>', "substr(from_unixtime(a.`time`), 1, 10) as time, b.`regist_new`,round(a.`day1`/b.`regist_new`*100,2) as `day1`,round(a.`day2`/b.`regist_new`*100,2) as `day2`,round(a.`day3`/b.`regist_new`*100,2) as `day3`,round(a.`day4`/b.`regist_new`*100,2) as `day4`,round(a.`day5`/b.`regist_new`*100,2) as `day5`,round(a.`day6`/b.`regist_new`*100,2) as `day6`,round(a.`day7`/b.`regist_new`*100,2) as `day7`,round(a.`day8`/b.`regist_new`*100,2) as `day8`,round(a.`day9`/b.`regist_new`*100,2) as `day9`,round(a.`day10`/b.`regist_new`*100,2) as `day10`,round(a.`day11`/b.`regist_new`*100,2) as `day11`,round(a.`day12`/b.`regist_new`*100,2) as `day12`,round(a.`day13`/b.`regist_new`*100,2) as `day13`,round(a.`day14`/b.`regist_new`*100,2) as `day14`,round(a.`day30`/b.`regist_new`*100,2) as `day30`", $sql);
			
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        foreach ($this->returnData['data']['rows'] as $key =>$value){
                            if(isset($this->returnData['data']['rows'][$key]['day1'])){
                                $this->returnData['data']['rows'][$key]['day1'] =$this->returnData['data']['rows'][$key]['day1']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day1'] = $this->returnData['data']['rows'][$key]['day1'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day2'])){
                                $this->returnData['data']['rows'][$key]['day2'] =$this->returnData['data']['rows'][$key]['day2']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day2'] = $this->returnData['data']['rows'][$key]['day2'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day3'])){
                                $this->returnData['data']['rows'][$key]['day3'] =$this->returnData['data']['rows'][$key]['day3']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day3'] = $this->returnData['data']['rows'][$key]['day3'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day4'])){
                                $this->returnData['data']['rows'][$key]['day4'] =$this->returnData['data']['rows'][$key]['day4']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day4'] = $this->returnData['data']['rows'][$key]['day4'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day5'])){
                                $this->returnData['data']['rows'][$key]['day5'] =$this->returnData['data']['rows'][$key]['day5']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day5'] = $this->returnData['data']['rows'][$key]['day5'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day6'])){
                                $this->returnData['data']['rows'][$key]['day6'] =$this->returnData['data']['rows'][$key]['day6']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day6'] = $this->returnData['data']['rows'][$key]['day6'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day7'])){
                                $this->returnData['data']['rows'][$key]['day7'] =$this->returnData['data']['rows'][$key]['day7']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day7'] = $this->returnData['data']['rows'][$key]['day7'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day8'])){
                                $this->returnData['data']['rows'][$key]['day8'] =$this->returnData['data']['rows'][$key]['day8']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day8'] = $this->returnData['data']['rows'][$key]['day8'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day9'])){
                                $this->returnData['data']['rows'][$key]['day9'] =$this->returnData['data']['rows'][$key]['day9']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day9'] = $this->returnData['data']['rows'][$key]['day9'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day10'])){
                                $this->returnData['data']['rows'][$key]['day10'] =$this->returnData['data']['rows'][$key]['day10']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day10'] = $this->returnData['data']['rows'][$key]['day10'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day11'])){
                                $this->returnData['data']['rows'][$key]['day11'] =$this->returnData['data']['rows'][$key]['day11']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day11'] = $this->returnData['data']['rows'][$key]['day11'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day12'])){
                                $this->returnData['data']['rows'][$key]['day12'] =$this->returnData['data']['rows'][$key]['day12']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day12'] = $this->returnData['data']['rows'][$key]['day12'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day13'])){
                                $this->returnData['data']['rows'][$key]['day13'] =$this->returnData['data']['rows'][$key]['day13']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day13'] = $this->returnData['data']['rows'][$key]['day13'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day14'])){
                                $this->returnData['data']['rows'][$key]['day14'] =$this->returnData['data']['rows'][$key]['day14']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day14'] = $this->returnData['data']['rows'][$key]['day14'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day30'])){
                                $this->returnData['data']['rows'][$key]['day30'] =$this->returnData['data']['rows'][$key]['day30']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day30'] = $this->returnData['data']['rows'][$key]['day30'];
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
		log_message('debug', '=====调用Report->Stay->getListData接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Report->Stay->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "stay.txt";
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
					`log_player_stay` a
                                left join
                                        `log_report_daily` b
                                on
                                        a.`time`+3600*24 = b.`time`
                                where
                                        a.`time` >= UNIX_TIMESTAMP('{$startDate}')
                                        and
                                        a.`time` <= UNIX_TIMESTAMP('{$endDate}')
                                group by 
                                a.`time`
			";
			$getDataSql = str_replace('<selectColumns>', "substr(from_unixtime(a.`time`), 1, 10) as time, b.`regist_new`,round(a.`day1`/b.`regist_new`*100,2) as `day1`,round(a.`day2`/b.`regist_new`*100,2) as `day2`,round(a.`day3`/b.`regist_new`*100,2) as `day3`,round(a.`day4`/b.`regist_new`*100,2) as `day4`,round(a.`day5`/b.`regist_new`*100,2) as `day5`,round(a.`day6`/b.`regist_new`*100,2) as `day6`,round(a.`day7`/b.`regist_new`*100,2) as `day7`,round(a.`day8`/b.`regist_new`*100,2) as `day8`,round(a.`day9`/b.`regist_new`*100,2) as `day9`,round(a.`day10`/b.`regist_new`*100,2) as `day10`,round(a.`day11`/b.`regist_new`*100,2) as `day11`,round(a.`day12`/b.`regist_new`*100,2) as `day12`,round(a.`day13`/b.`regist_new`*100,2) as `day13`,round(a.`day14`/b.`regist_new`*100,2) as `day14`,round(a.`day30`/b.`regist_new`*100,2) as `day30`", $sql);
			
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        foreach ($this->returnData['data']['rows'] as $key =>$value){
                            if(isset($this->returnData['data']['rows'][$key]['day1'])){
                                $this->returnData['data']['rows'][$key]['day1'] =$this->returnData['data']['rows'][$key]['day1']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day1'] = $this->returnData['data']['rows'][$key]['day1'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day2'])){
                                $this->returnData['data']['rows'][$key]['day2'] =$this->returnData['data']['rows'][$key]['day2']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day2'] = $this->returnData['data']['rows'][$key]['day2'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day3'])){
                                $this->returnData['data']['rows'][$key]['day3'] =$this->returnData['data']['rows'][$key]['day3']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day3'] = $this->returnData['data']['rows'][$key]['day3'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day4'])){
                                $this->returnData['data']['rows'][$key]['day4'] =$this->returnData['data']['rows'][$key]['day4']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day4'] = $this->returnData['data']['rows'][$key]['day4'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day5'])){
                                $this->returnData['data']['rows'][$key]['day5'] =$this->returnData['data']['rows'][$key]['day5']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day5'] = $this->returnData['data']['rows'][$key]['day5'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day6'])){
                                $this->returnData['data']['rows'][$key]['day6'] =$this->returnData['data']['rows'][$key]['day6']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day6'] = $this->returnData['data']['rows'][$key]['day6'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day7'])){
                                $this->returnData['data']['rows'][$key]['day7'] =$this->returnData['data']['rows'][$key]['day7']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day7'] = $this->returnData['data']['rows'][$key]['day7'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day8'])){
                                $this->returnData['data']['rows'][$key]['day8'] =$this->returnData['data']['rows'][$key]['day8']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day8'] = $this->returnData['data']['rows'][$key]['day8'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day9'])){
                                $this->returnData['data']['rows'][$key]['day9'] =$this->returnData['data']['rows'][$key]['day9']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day9'] = $this->returnData['data']['rows'][$key]['day9'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day10'])){
                                $this->returnData['data']['rows'][$key]['day10'] =$this->returnData['data']['rows'][$key]['day10']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day10'] = $this->returnData['data']['rows'][$key]['day10'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day11'])){
                                $this->returnData['data']['rows'][$key]['day11'] =$this->returnData['data']['rows'][$key]['day11']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day11'] = $this->returnData['data']['rows'][$key]['day11'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day12'])){
                                $this->returnData['data']['rows'][$key]['day12'] =$this->returnData['data']['rows'][$key]['day12']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day12'] = $this->returnData['data']['rows'][$key]['day12'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day13'])){
                                $this->returnData['data']['rows'][$key]['day13'] =$this->returnData['data']['rows'][$key]['day13']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day13'] = $this->returnData['data']['rows'][$key]['day13'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day14'])){
                                $this->returnData['data']['rows'][$key]['day14'] =$this->returnData['data']['rows'][$key]['day14']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day14'] = $this->returnData['data']['rows'][$key]['day14'];
                            }
                            if(isset($this->returnData['data']['rows'][$key]['day30'])){
                                $this->returnData['data']['rows'][$key]['day30'] =$this->returnData['data']['rows'][$key]['day30']."%";
                            }else{
                                $this->returnData['data']['rows'][$key]['day30'] = $this->returnData['data']['rows'][$key]['day30'];
                            }
                        }
                        echo "日期\t当天注册人数\t1日留存\t2日留存\t3日留存\t4日留存\t5日留存\t6日留存\t7日留存\t8日留存\t9日留存\t10日留存\t11日留存\t12日留存\t13日留存\t14日留存\t30日留存\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['time']}\t{$value['regist_new']}\t{$value['day1']}\t{$value['day2']}\t{$value['day3']}\t{$value['day4']}\t{$value['day5']}\t{$value['day6']}\t{$value['day7']}\t{$value['day8']}\t{$value['day9']}\t{$value['day10']}\t{$value['day11']}\t{$value['day12']}\t{$value['day13']}\t{$value['day14']}\t{$value['day30']}\t\n";
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
		
		log_message('debug', '=====调用Report->Stay->export接口结束=====');
	}
}