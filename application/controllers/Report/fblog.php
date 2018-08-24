<?php
class Fblog extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '开始调用Report->Fblog->__construct接口');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Report/');
		log_message('debug', '调用Report->Fblog->__construct接口结束');
	}
	
	public function showView() {
		$this->load->view('module/Report/fblog.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Report->Fblog->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
				
			
			
			$this->initGameAreaInfo($operatorId,$gameAreaId);
                        $sql = "
                                select
					*
                                from
					`t_cfg_fb_function`									
			";
                        
                        $typeArray = $this->gmDatabase->getArray($sql);
                        $sql = "
                                select
					`functionId`,`subFunctionChineseName`
                                from
					`t_cfg_fb_subfunction`									
			";
                        
                        $fbArray = $this->gmDatabase->getArray($sql); 
                        
                        foreach ($typeArray as  $value){
                            $typeArray[$value['id']] = $value['fb_name'];
                        }
                        foreach ($fbArray as  $value){
                            $fbArray[$value['functionId']] = $value['subFunctionChineseName'];
                        }
			$sql = "
                                select
					<selectColumns>
                                from
					`log_dungeon` a 
                                left join
                                        `mem_character` b
                                on
                                        a.`cid` = b.`cid` 
                                
																	
			";
                        
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "a.`id`,b.`name` ,a.`did` ,a.`type`,FROM_UNIXTIME(a.`start_time`) as `start_time`,FROM_UNIXTIME(a.`finish_time`) as `finish_time`,  a.`level`,a.`state`", $sql);
			
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
			foreach ($this->returnData['data']['rows'] as $key =>$value){
                            if($this->returnData['data']['rows'][$key]['type']=='0'){
                                $this->returnData['data']['rows'][$key]['type'] = '';
                            }else if(isset($this->returnData['data']['rows'][$key]['type'])){
                                $this->returnData['data']['rows'][$key]['type'] = $typeArray[$this->returnData['data']['rows'][$key]['type']];
                            }else{
                                $this->returnData['data']['rows'][$key]['type'] = $this->returnData['data']['rows'][$key]['type'];
                            }
                            if($this->returnData['data']['rows'][$key]['start_time']=='1970-01-01 08:00:00'){
                                $this->returnData['data']['rows'][$key]['start_time'] = '';
                            }else{
                                $this->returnData['data']['rows'][$key]['start_time'] = $this->returnData['data']['rows'][$key]['start_time'];
                            }
                            if($this->returnData['data']['rows'][$key]['did']){
                                $this->returnData['data']['rows'][$key]['did'] = $fbArray[$this->returnData['data']['rows'][$key]['did']];
                            }else{
                                $this->returnData['data']['rows'][$key]['did'] = $this->returnData['data']['rows'][$key]['did'];
                            }
                            if($this->returnData['data']['rows'][$key]['finish_time']=='1970-01-01 08:00:00'){
                                $this->returnData['data']['rows'][$key]['finish_time'] = '';
                            }else{
                                $this->returnData['data']['rows'][$key]['finish_time'] = $this->returnData['data']['rows'][$key]['finish_time'];
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
		log_message('debug', '=====调用Report->Fblog->getListData接口结束=====');
	}
        
}