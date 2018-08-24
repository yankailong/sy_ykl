<?php
class Detail extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '开始调用Currency->Detail->__construct接口');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Currency/');
		log_message('debug', '调用Currency->Detail->__construct接口结束');
	}
	
	
	public function showView()
	{
		$this->load->view('module/Currency/detail.htm');
	}


	/**
	 *
     */
	public function getListData()
	{
		log_message('debug', '=====开始调用Currency->Detail->getData接口=====');
		$this->verifyPrivilege();
	
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
			$account = $this->param->getParam('account', array('method' => 'string', 'emptyErrorCode' => 1,'invalidErrorCode' => 1), 'post', true);
			$roleName = $this->param->getParam('roleName', array(), 'post', true);
			$startDateTime = $this->param->getParam('startDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$endDateTime = $this->param->getParam('endDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$currencyTypeId = $this->param->getParam('currencyTypeId', array('method' => 'int', 'min' => 0,  'emptyErrorCode' => 1,  'invalidErrorCode' => 1),'post', true);
                        $getTypeId = $this->param->getParam('getTypeId', array('method' => 'int','min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'post', true);
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			
			if( !$account && !$roleName ) {
				throw new Exception('', 202);
			}
	
			$this->initGameAreaInfo($operatorId,$gameAreaId);
                        $sql="
                                select
                                        `functionId`,`function{$this->currLanguage}Name` as `functionName`
                                from
                                        `t_cfg_currency_function`
                            ";
                        $way = $this->gmDatabase->getArray($sql);
                        $wayArray = array();
                        
                        foreach ($way as  $value){
                            $wayArray[$value['functionId']] = $value['functionName'];
                        }
                       if($currencyTypeId ==1){
                           $tableName = 'log_gold_change';
                       }else{
                           $tableName = 'log_currency';
                       }
			$sql = "
				select
					<selectColumns>
				from
					`{$tableName}` a
				left join
					`mem_character` b
                                on
                                        a.`cid` = b.`cid`
                                where
                                        1=1
			";
                        if($account) {
				$sql .= " and a.`cid` = '{$account}'";
			}
			
			if($roleName) {
				$sql .= " and a.`name` = '{$roleName}'";
			}
                        if($currencyTypeId >= 0) {
				$sql .= " and a.`type` = '{$currencyTypeId}'";
			}
			if($startDateTime) {
				$sql .= " and FROM_UNIXTIME(a.`time`) >= '{$startDateTime}'";
			}
	
			if($endDateTime) {
				$sql .= " and FROM_UNIXTIME(a.`time`) <= '{$endDateTime}'";
			}
                        if($getTypeId==1){
                                $sql .=" and a.`value` >=0";
                                $selectColumn = 'sum(a.`value`) as `value`';
                        }
                        else if($getTypeId==2){
                                $sql .=" and a.`value` <=0";
                                $selectColumn = 'sum(a.`value`) as `value`';
                        }else if ($getTypeId =='') {
                                $sql ;
                                $selectColumn = 'sum(if(a.`value`>0,a.`value`,0)) as `value`,sum(if(a.`value`>0,0,a.`value`)) as `left`';
                        }				
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
	
			$getDataSql = str_replace('<selectColumns>', "a.`cid`, a.`name` as `roleName`, a.`type` as `currencyType`, a.`opway`, a.`value`,a.`left`,a.`param`,FROM_UNIXTIME(a.`time`) as `time`,a.`name` as `useroleName`", $sql);

			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
                        
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        $getTotalAmountSql = str_replace('<selectColumns>', "$selectColumn", $sql);
                        $this->returnData['data']['footer'] = $this->gameDatabase->getArray($getTotalAmountSql);
                        foreach ($this->returnData['data']['rows'] as $key =>$value){
                            if(isset($wayArray[$this->returnData['data']['rows'][$key]['opway']])){
                                $this->returnData['data']['rows'][$key]['opway'] = $wayArray[$this->returnData['data']['rows'][$key]['opway']];
                            }else{
                                $this->returnData['data']['rows'][$key]['opway']='';
                            }
                            if($this->returnData['data']['rows'][$key]['value']<0){
                                $this->returnData['data']['rows'][$key]['getType'] = '支出';
                            }else{
                                $this->returnData['data']['rows'][$key]['getType'] = '收入';
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
		log_message('debug', '=====调用Gold->getListData接口结束=====');
	}
}