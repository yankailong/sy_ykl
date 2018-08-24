<?php
class Question extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Mail->Qusetion->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Mail/');
		log_message('debug', '=====调用Mail->Qusetion->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Mail/question.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Mail->Qusetion->getListData接口=====');
		$this->verifyPrivilege();
		
		try{
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5001, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId', array('method' => 'string',  'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
                        $state = $this->param->getParam('state', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
                        $questionType = $this->param->getParam('questionType', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
			$account = $this->param->getParam('account', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$roleName = $this->param->getParam('roleName', array(), 'post', true);
                        $startDateTime = $this->param->getParam('startDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$endDateTime = $this->param->getParam('endDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
                        $page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
                        $sort = $this->param->getParam('sort', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$order = $this->param->getParam('order', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$sql = "
                                select
                                       <selectColumns>
                                from
                                       `t_data_question`a
                                left join
                                       `t_data_game_area`b
                                on
                                       a.`gameAreaId` = b.`gameAreaId`
                                left join
                                       `t_data_operator` c
                                on
                                       c.`operatorId` = b.`operatorId`
                                left join
                                       `t_data_user` d
                                on
                                       a.`operateUserId` = d.`userId`
                                       and
                                       a.`approvalUserId` = d.`userId`
                                where 
                                       datediff(now(),FROM_UNIXTIME(a.`closeDateTime`))<=7 
                                       or 
                                       a.`closeDateTime` is null
                        ";
                        
                        if($operatorId) {
				$sql .= " and b.`operatorId` = '{$operatorId}' ";
			}
                        if($gameAreaId) {
				$sql .= " and find_in_set(b.`gameAreaId`,'{$gameAreaId}' ) ";
			}
                        if($state) {
				$sql .= " and a.`state` = '{$state}' ";
			}
                        if($questionType) {
				$sql .= " and a.`type` = '{$questionType}' ";
			}
                        if($account) {
				$sql .= " and a.`cid` = '{$account}' ";
			}
                        if($roleName) {
				$sql .= " and a.`name` = '{$roleName}' ";
			}
                        if($startDateTime) {
				$sql .= " and FROM_UNIXTIME(a.`time`) >= '{$startDateTime}'";
			}
			if($endDateTime) {
				$sql .= " and FROM_UNIXTIME(a.`time`) <= '{$endDateTime}'";
			}
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "a.`id`, c.`operatorName` as `operatorId` ,b.`areaNum`, a.`cid`,a.`name`,a.`level`,a.`gold_pay_total` as `amount`,a.`title`,a.`desc`,from_unixtime(a.`time`) as `sendTime`,d.`name` as `operator`,a.`state` as `status`,a.`reward`,d.`name` as `approvalUserId`", $sql);
			if($sort && $order) {
				$getDataSql .= " order by {$sort} {$order}";
			}	
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			$this->returnData['data']['rows'] = $this->gmDatabase->getArray($getDataSql);
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
		log_message('debug', '=====调用Mail->Qusetion->getListData接口结束=====');
	}
	
	public function reward() {
		log_message('debug', '=====开始调用Mail->Qusetion->applySys接口=====');
		$this->verifyPrivilege();
		
		try{
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5001, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId', array('method' => 'string', 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $id = $this->param->getParam('id', array('method' => 'int',  'min' => 1,'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$roleName = $this->param->getParam('roleName', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$senderName = $this->param->getParam('senderName', array('method' => 'string', 'maxLength' => 255, 'emptyErrorCode' => 201001, 'invalidErrorCode' => 1), 'post', true);
			$title = $this->param->getParam('title', array('method' => 'string', 'maxLength' => 255, 'emptyErrorCode' => 201002, 'invalidErrorCode' => 1));
			$content = $this->param->getParam('content', array('method' => 'string', 'maxLength' => 2048, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$sendDatetime = $this->param->getParam('sendDatetime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$reward = $this->param->getParam('reward', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5001, 'invalidErrorCode' => 1), 'post', true);
			
			$this->gmDatabase->closeAutoCommit();
                        //判断是否可以发邮件回复
                        $sql = "
                                select 
                                        `state`
                                from
                                        `t_data_question`
                                where
                                        `id` = '{$id}'
                        ";
                        $state = $this->gmDatabase->getColumn($sql);
                        if($state == 4){
                          throw new Exception("状态错误");
                        }else if($state == 2){
                          throw new Exception("状态错误");
                        }
                        //生成applyId
                        do{
                            $applyId = rand(0, 1000000);
                            $sql = "
                                    select 
                                            count(*)
                                    from
                                            `t_data_send_mail`
                                    where
                                            `applyId` = '{$applyId}'
                            ";
                            $applyIdCount = $this->gmDatabase->getColumn($sql);
                        }while($applyIdCount=0);
                        //发邮件日志
                        if($senderName==''){
                          $senderName = $this->currUserId;
                        }
                        
			$sql = "
				insert into
					`t_data_send_mail`
				set
                                        `applyId` = '{$applyId}',
					`roleName` = '{$roleName}',
					`senderName` = '{$senderName}',
					`title` = '{$title}',
					`content` = '{$content}',
					`status` = '2',
                                        `applyUserId` = '{$this->currUserId}',
					`applyDatetime` = now(),
                                        `type` = '3'
			";
			
			
			if($sendDatetime) {
				$sql .= ",`sendDatetime` = '{$sendDatetime}'";
			}
			
			$this->gmDatabase->query($sql);
			//取最后发送的applyId 
			$Id = $this->gmDatabase->getLastInsertId();
                        $sql = "
				select
                                        `applyId`
                                from
                                        `t_data_send_mail`
                                where
                                        `id` = '{$Id}'
			";
                        $applyId = $this->gmDatabase->getRow($sql);
			log_message('debug', "applyId:{$applyId['applyId']}");
			//写区服发邮件日志
                        $sql = "
                                insert into
                                        `t_data_send_mail_game_area`
                                (
                                        `applyId`,
                                        `operatorId`,
                                        `gameAreaId`,
                                        `status`
                                )
                                select 
                                        '{$applyId['applyId']}',
                                        '{$operatorId}',
                                        '{$gameAreaId}',
                                        '0'
                                from
                                        `t_data_game_area` a
                                left join
                                        `t_data_user_operator_privilege` b
                                on
                                        a.`operatorId` = b.`operatorId`
                                        and
                                        b.`userId` = '{$this->currUserId}'
                                where
                                        a.`gameAreaId` = '{$gameAreaId}'
                                        and
                                        b.`privilegeValue` = 1
                        ";
                        $this->gmDatabase->query($sql);
			
			//如果有奖励物品
                        if($reward){
                          //修改建议日志
                            $sql = "
				update
                                      `t_data_question`
                                set
                                      `reward` = '{$reward}',
                                      `state` = 2,
                                      `applyId` = '{$applyId['applyId']}',
                                      `operateUserId` = '{$this->currUserId}',
                                      `operateDateTime` = unix_timestamp(now())
                                where
                                       `id` = '{$id}'
                            ";
                            $this->gmDatabase->query($sql);
                            //取出该建议发送邮件的id和物品
                            $sql = "
                                    select 
                                            a.`rewardItem`,b.`applyId`
                                    from
                                            `t_cfg_question_reward` a
                                    left join
                                            `t_data_question` b
                                    on
                                            a.`rewardLevel` = b.`reward`
                                    left join
                                            `t_data_send_mail`c
                                    on
                                            b.`applyId` = c.`applyId`
                                    where
                                            b.`id` = '{$id}'
                            ";
                            $itemInfo = $this->gmDatabase->getRow($sql);
                            //将发送的物品更新到邮件日志
                            $sql = "
				update
                                      `t_data_send_mail`
                                set
                                      `item` = '{$itemInfo['rewardItem']}'
                                where
                                       `applyId` = '{$itemInfo['applyId']}'
                            ";
                            $this->gmDatabase->query($sql);
                            if(strpos($itemInfo['rewardItem'], '|')){
                              //如果有多个物品
                                $itemArray = explode('|', $itemInfo['rewardItem']);
                                foreach ($itemArray as $k=>$val){
                                    $item = explode(':', $val);
                                    $itemArray[$k] = $item;
                                    $itemId = $itemArray[$k][0];
                                    $itemType = $itemArray[$k][1];
                                    $itemCount = $itemArray[$k][2];
                                    $sql = "
                                            insert into
                                                    `t_data_send_mail_attachment`
                                            (
                                                    `applyId`,
                                                    `itemType`,
                                                    `itemId`,
                                                    `itemCount`
                                            )
                                            value
                                            (
                                                    '{$itemInfo['applyId']}',
                                                    '{$itemType}',
                                                    '{$itemId}',
                                                    '{$itemCount}'
                                            )
                                    ";
                                    $this->gmDatabase->query($sql);
                                }
                            }else{
                                //如果是单个物品
                                $item = explode(':', $itemInfo['rewardItem']);
                                $itemId = $item[0];
                                $itemType = $item[1];
                                $itemCount = $item[2];
                                
                                $sql = "
                                        insert into
                                                `t_data_send_mail_attachment`
                                        (
                                                `applyId`,
                                                `itemType`,
                                                `itemId`,
                                                `itemCount`
                                        )
                                        value
                                        (
                                                '{$itemInfo['applyId']}',
                                                '{$itemType}',
                                                '{$itemId}',
                                                '{$itemCount}'
                                        )
                                ";
                                $this->gmDatabase->query($sql);
                                        
                            }
                            
                        }
			
			
			$this->gmDatabase->commit();
                        
		}
		
		catch(MY_Param_Exception $e) {
			$this->setErrorCode($e->getCode());
		}
	
		catch(MY_Mysql_Exception $e) {
			$this->gmDatabase->rollback();
			$this->setErrorCode(1);
		}
		
		catch(Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		$this->gmDatabase->openAutoCommit();
		$this->returnJson();
		log_message('debug', '=====调用Mail->Qusetion->applySys接口结束=====');
	}
	
	public function approval() {
		log_message('debug', '=====开始调用Mail->Qusetion->applyAll接口=====');
		$this->verifyPrivilege();
		
		try{
			$id = $this->param->getParam('id', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'post',true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			
                        $sql = "
                                select
                                     `applyId`,
                                     `state`
                                from
                                     `t_data_question`
                                where
                                      `id` = '{$id}'
                        ";
                        $approvalInfo = $this->gmDatabase->getRow($sql);  
                        if($approvalInfo['state']!=2){
                          throw new Exception("状态错误");
                        }
			$sql = "
				update
                                       `t_data_send_mail`
                                set
                                       `status` = 0,
                                       `approvalUserId` = '{$this->currUserId}'
				where
                                       `applyId` = '{$approvalInfo['applyId']}'
			";
			$this->gmDatabase->query($sql);
                        $sql = "
				update
                                       `t_data_question`
                                set
                                       `state` = 3,
                                       `approvalUserId` = '{$this->currUserId}',
                                       `approvalDateTime` = unix_timestamp(now())
				where
                                       `id` =  '{$id}'
			";
			$this->gmDatabase->query($sql);
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
		}
		
		catch(MY_Param_Exception $e) {
			$this->setErrorCode($e->getCode());
		}
	
		catch(MY_Mysql_Exception $e) {
			$this->gmDatabase->rollback();
			$this->setErrorCode(1);
		}
		
		catch(Exception $e) {
			$this->setErrorCode($e->getCode());
		}
		
		$this->gmDatabase->openAutoCommit();
		$this->returnJson();
		log_message('debug', '=====调用Mail->Qusetion->applyAll接口结束=====');
	}
	
	public function close() {
		log_message('debug', '=====开始调用Mail->Qusetion->del接口=====');
		
		try {
			$id = $this->param->getParam('id', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'post',true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			
			$sql = "
				update
                                       `t_data_question`
                                set
                                       `state` = 4,
                                       `closeDateTime` = unix_timestamp(now())
				where
                                       `id` = '{$id}'
			";
			$this->gmDatabase->query($sql);
			
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
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
		log_message('debug', '=====调用Mail->Qusetion->del接口结束=====');
	}
        public function export() {
		log_message('debug', '=====开始调用Mail->Qusetion->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "question.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5001, 'invalidErrorCode' => 1), 'get');
                        $gameAreaId = $this->param->getParam('gameAreaId', array('method' => 'string',  'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get');
                        $state = $this->param->getParam('state', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get', true);
                        $questionType = $this->param->getParam('questionType', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get', true);
			$account = $this->param->getParam('account', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get', true);
			$roleName = $this->param->getParam('roleName', array(), 'get', true);
                        $startDateTime = $this->param->getParam('startDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get', true);
			$endDateTime = $this->param->getParam('endDateTime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get', true);
			$sql = "
                                select
                                       <selectColumns>
                                from
                                       `t_data_question`a
                                left join
                                       `t_data_game_area`b
                                on
                                       a.`gameAreaId` = b.`gameAreaId`
                                left join
                                       `t_data_operator` c
                                on
                                       c.`operatorId` = b.`operatorId`
                                left join
                                       `t_data_user` d
                                on
                                       a.`operateUserId` = d.`userId`
                                       and
                                       a.`approvalUserId` = d.`userId`
                                where 
                                       datediff(now(),FROM_UNIXTIME(a.`closeDateTime`))<=7 
                                       or 
                                       a.`closeDateTime` is null
                        ";
                        
                        if($operatorId) {
				$sql .= " and b.`operatorId` = '{$operatorId}' ";
			}
                        if($gameAreaId) {
				$sql .= " and find_in_set(b.`gameAreaId`,'{$gameAreaId}' ) ";
			}
                        if($state) {
				$sql .= " and a.`state` = '{$state}' ";
			}
                        if($questionType) {
				$sql .= " and a.`type` = '{$questionType}' ";
			}
                        if($account) {
				$sql .= " and a.`cid` = '{$account}' ";
			}
                        if($roleName) {
				$sql .= " and a.`name` = '{$roleName}' ";
			}
                        if($startDateTime) {
				$sql .= " and FROM_UNIXTIME(a.`time`) >= '{$startDateTime}'";
			}
			if($endDateTime) {
				$sql .= " and FROM_UNIXTIME(a.`time`) <= '{$endDateTime}'";
			}
			$getDataSql = str_replace('<selectColumns>', "a.`id`, c.`operatorName` as `operatorId` ,b.`areaNum`, a.`cid`,a.`name`,a.`level`,a.`gold_pay_total` as `amount`,a.`title`,a.`desc`,from_unixtime(a.`time`) as `sendTime`,d.`name` as `operator`,a.`state` as `status`,a.`reward`,d.`name` as `approvalUserId`", $sql);
				
			$this->returnData['data']['rows'] = $this->gmDatabase->getArray($getDataSql);
                        echo "id\t平台\t区服\t角色id\t角色名\t等级\t充值金额\t标题\t内容\t提交时间\t状态\t奖励等级\t操作人"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "{$value['id']}\t{$value['operatorId']}\t{$value['areaNum']}\t'{$value['cid']}'\t{$value['name']}\t{$value['level']}\t{$value['amount']}\t{$value['title']}\t{$value['desc']}\t{$value['sendTime']}\t{$value['status']}\t{$value['reward']}\t{$value['operator']}\t\n";
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
		
		log_message('debug', '=====调用Mail->Qusetion->export接口结束=====');
	}
}

