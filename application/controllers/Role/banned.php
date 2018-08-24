<?php
class Banned extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '开始调用Role->banned->__construct接口');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Role/');
		log_message('debug', '调用Role->banned->__construct接口结束');
	}
	
	
	public function showView()
	{
		$this->load->view('module/Role/banned.htm');
	}


	
	public function getListData()
	{
		log_message('debug', '=====开始调用Role->Banned->getData接口=====');
		$this->verifyPrivilege();
	
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
            $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$account = $this->param->getParam('account', array('method' => 'string', 'emptyErrorCode' => 1,'invalidErrorCode' => 1), 'post', true);
			$roleName = $this->param->getParam('roleName', array(), 'post', true);
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			

	
			$this->initGameAreaInfo($operatorId,$gameAreaId);
                       $sql = "
                                select
                                       `cid`,
                                       `name`
                                from
                                       `mem_character`
                        ";
                        $nameArray = $this->gameDatabase->getArray($sql);
                        foreach ($nameArray as  $value){
                            $nameArray[$value['cid']] = $value['name'];
                        }
                       
			$sql = "
                                select
                                    <selectColumns>
                                from
				(
                                    select
                                            a.`userId` as `cid`,
                                            a.`userId` as `roleName`,
                                            a.`operatorId` ,
                                            '1' as `bannedtype`, 
                                            a.`unbannedDateTime`,
                                            a.`reason`,
                                            a.`operatorDateTime`,
                                            a.`status`,
                                            a.`operatorUserId` as `operator`
                                    from
                                            `t_log_banned_role` a
                                    where
                                            a.`operatorId` = '{$operatorId}'
                                            and
                                            a.`gameAreaId` = '{$gameAreaId}'
                                union all
                                
                                    select
                                            b.`userId` as `cid`,
                                            b.`userId` as `roleName`,
                                            b.`operatorId` ,
                                            '2' as `bannedtype`,
                                            b.`unbannedDateTime`,
                                            b.`reason`,
                                            b.`operatorDateTime`,
                                            b.`status`,
                                            b.`operatorUserId` as `operator`
                                    from
                                            `t_log_banned_chat` b
                                    where
                                            b.`operatorId` = '{$operatorId}'
                                            and
                                            b.`gameAreaId` = '{$gameAreaId}'
                                ) c
                                left join
                                            `t_data_operator` d
                                on 
                                            c.`operatorId` = d.`operatorId`
                                left join
                                            `t_data_user` e
                                on
                                            c.`operator` = e.`userId`
                                where
                                        1 = 1
			";
                        if($account) {
				$sql .= " and c.`cid` = '{$account}'";
			}
			if($roleName) {
				$sql .= " and c.`roleName` = '{$roleName}'";
			}
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
	
			$getDataSql = str_replace('<selectColumns>', "*,d.`operatorName` as `operatorId`,e.`username` as `operator`", $sql);

			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
                        
			$this->returnData['data']['rows'] = $this->gmDatabase->getArray($getDataSql);
                        
                        foreach ($this->returnData['data']['rows'] as $key =>$value){
                            if(isset($nameArray[$this->returnData['data']['rows'][$key]['roleName']])){
                                $this->returnData['data']['rows'][$key]['roleName'] = $nameArray[$this->returnData['data']['rows'][$key]['roleName']];
                            }else{
                                $this->returnData['data']['rows'][$key]['roleName']=$this->returnData['data']['rows'][$key]['roleName'];
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
		log_message('debug', '=====调用Role->Banned->getListData接口结束=====');
	}
}

