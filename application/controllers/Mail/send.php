<?php
class Send extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Mail->Send->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Mail/');
		log_message('debug', '=====调用Mail->Send->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Mail/send.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Mail->Send->getListData接口=====');
		$this->verifyPrivilege();
		
		try{
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5001, 'invalidErrorCode' => 1));
            $gameAreaId = $this->param->getParam('gameAreaId', array('method' => 'string',  'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
            $page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$sql = "
                    select
                           `operatorId`,
                           `operatorName`
                    from
                           `t_data_operator`
            ";
            $opArray = $this->gmDatabase->getArray($sql);
            foreach ($opArray as  $value){
                $opArray[$value['operatorId']] = $value['operatorName'];
            }

            $sql = "
                    select
                           `gameAreaId`,
                           `areaNum`
                    from
                           `t_data_game_area`
            ";
            
            $areaArray = $this->gmDatabase->getArray($sql);
            foreach ($areaArray as  $value){
                $areaArray[$value['gameAreaId']] = $value['areaNum'];
            }

            $sql = "
				select
					<selectColumns>
				from
					`t_data_send_mail` a
				left join
					`t_data_user` b
				on
					a.`applyUserId` = b.`userId`
                left join
                        `t_data_send_mail_game_area` c
                on
                        a.`applyId` = c.`applyId`
                where
                        a.`type` = 0
			";
            
            if($operatorId) {
				$sql .= " and c.`operatorId` = '{$operatorId}' ";
			}
            if($gameAreaId) {
				$sql .= " and find_in_set(c.`gameAreaId`,'{$gameAreaId}' ) ";
			}
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "a.`applyId`, c.`operatorId` ,c.`gameAreaId` as `areaNum`,a.`roleName`,   a.`title`, a.`content`, a.`status`, a.`sendDatetime` as `sendTime`, b.`name` as `operator`", $sql);
				
			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			
			$tmpArray = $this->gmDatabase->getArray($getDataSql);
			
			foreach ($tmpArray as $key => $val) {
				$sql = "
					select
						`item{$this->currLanguage}Name` as itemName,
						sum(`itemCount`) as `itemCount`,
                        `type`
					from
						`t_data_send_mail_attachment` a
					left join
						`t_cfg_item` b
					on
						a.`itemId` = b.`itemId`
                    and
                        a.`itemType` = b.`itemType`
					where
						a.`applyId` = '{$val['applyId']}'
					group by
						b.`id`
						
				";
				$itemArray = $this->gmDatabase->getArray($sql);
				
				$itemString = '';
				
				foreach ($itemArray as $k => $v) {
					$itemString .= "{$v['itemName']} * {$v['itemCount']}</br>";
				}
				
				$tmpArray[$key]['item'] = $itemString;
			}
			
			$this->returnData['data']['rows'] = $tmpArray;
                        foreach ($this->returnData['data']['rows'] as $key => $val){
                            $this->returnData['data']['rows'][$key]['operatorId'] = $opArray[$this->returnData['data']['rows'][$key]['operatorId']];
                            $this->returnData['data']['rows'][$key]['areaNum'] = $areaArray[$this->returnData['data']['rows'][$key]['areaNum']];
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
		log_message('debug', '=====调用Mail->Send->getListData接口结束=====');
	}
	
	public function applySys() {
		log_message('debug', '=====开始调用Mail->Send->applySys接口=====');
		$this->verifyPrivilege();
		
		try{
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5001, 'invalidErrorCode' => 1));
            $gameAreaId = $this->param->getParam('gameAreaId', array('method' => 'string', 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$roleName = $this->param->getParam('roleName', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$senderName = $this->param->getParam('senderName', array('method' => 'string', 'maxLength' => 255, 'emptyErrorCode' => 201001, 'invalidErrorCode' => 1), 'post', true);
			$title = $this->param->getParam('title', array('method' => 'string', 'maxLength' => 255, 'emptyErrorCode' => 201002, 'invalidErrorCode' => 1));
			$content = $this->param->getParam('content', array('method' => 'string', 'maxLength' => 2048, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$sendDatetime = $this->param->getParam('sendDatetime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$itemString = $this->param->getParam('itemString', array(), 'post', true);
			
			$this->gmDatabase->closeAutoCommit();
                        
                        $this->initGameAreaInfo($operatorId,$gameAreaId);
                        
                        
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
                        if(strpos($roleName, ",")===false){
                          $sql = "
                    				select
                    					count(*)
                    				from
                    					`mem_character` 
                    				where
                    					`name` = '{$roleName}'
                          ";

                          if($this->gameDatabase->getColumn($sql) === '0' ) {
                            throw new Exception("查无此人",1);
                          }
                        }else{
                          $roleNameArray = explode(",", $roleName);
                          for ($i=0;$i<count($roleNameArray);$i++){
                            $sql = "
                    				select
                    					count(*)
                    				from
                    					`mem_character` 
                    				where
                    					`name` = '{$roleNameArray[$i]}'
                            ";

                            if($this->gameDatabase->getColumn($sql) === '0' ) {
                              throw new Exception("查无此人",1);
                            }
                            
                          }
                          
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
                                          `status` = '0',
                                          `applyUserId` = '{$this->currUserId}',
                                          `applyDatetime` = now(),
                                          `type` = '0',
                            ";


                          if($sendDatetime) {
                                  $sql .= "`sendDatetime` = '{$sendDatetime}'";
                          }
                          else {
                                  $sql .= "`sendDatetime` = now()";
                          }

                          $this->gmDatabase->query($sql);
                          $Id = $this->gmDatabase->getLastInsertId();
                          $sql = "
                                  select
                                          `applyId`
                                  from
                                          `t_data_send_mail`
                                  where
                                          `id` = '{$Id}'
                          ";
                          $applyIdInfo = $this->gmDatabase->getRow($sql);
                          log_message('debug', "applyId:{$applyIdInfo['applyId']}");

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
                                          '{$applyIdInfo['applyId']}',
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



                          if($itemString) {
                                  $itemArray = json_decode($itemString, true);
                                  foreach($itemArray as $item) {
                                          $itemId = $item['id'];
                                          $sql = "
                                                  select
                                                          `itemId`,`itemType`
                                                  from
                                                          `t_cfg_item`
                                                  where
                                                         `id` = '{$itemId}' 
                                          ";
                                          $iteminfo = $this->gmDatabase->getRow($sql);
                                          $itemCount = $item['count'];
                                          $type = $item['type'];


                                          $sql = "
                                                  insert into
                                                          `t_data_send_mail_attachment`
                                                  (
                                                          `applyId`,
                                                          `itemId`,
                                                          `itemType`,
                                                          `itemCount`,
                                                          `type`
                                                  )
                                                  value
                                                  (
                                                          '{$applyIdInfo['applyId']}',
                                                          '{$iteminfo['itemId']}',
                                                          '{$iteminfo['itemType']}',
                                                          '{$itemCount}',
                                                          '{$type}'
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
		log_message('debug', '=====调用Mail->Send->applySys接口结束=====');
	}
	
	public function applyAll() {
		log_message('debug', '=====开始调用Mail->Send->applyAll接口=====');
		$this->verifyPrivilege();
		
		try{
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5001, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaIdString', array('method' => 'string', 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$senderName = $this->param->getParam('senderName', array('method' => 'string', 'maxLength' => 255, 'emptyErrorCode' => 201001, 'invalidErrorCode' => 1));
			$title = $this->param->getParam('title', array('method' => 'string', 'maxLength' => 255, 'emptyErrorCode' => 201002, 'invalidErrorCode' => 1));
			$content = $this->param->getParam('content', array('method' => 'string', 'maxLength' => 2048, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$sendDatetime = $this->param->getParam('sendDatetime', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$itemString = $this->param->getParam('itemString', array(), 'post', true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
                        $this->gmDatabase->closeAutoCommit();
                        
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
                        
                            $sql = "
                                    insert into
                                            `t_data_send_mail`
                                    set
                                            `senderName` = '{$senderName}',
                                            `applyId` = '{$applyId}',
                                            `roleName` = '全服',
                                            `title` = '{$title}',
                                            `content` = '{$content}',
                                            `status` = '0',
                                            `applyUserId` = '{$this->currUserId}',
                                            `applyDatetime` = now(),
                                            `type` = '0',
                            ";

                            if($sendDatetime) {
                                    $sql .= "`sendDatetime` = '{$sendDatetime}'";
                            }
                            else {
                                    $sql .= "`sendDatetime` = now()";
                            }

                            $this->gmDatabase->query($sql);
                        
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
			
			$gameAreaIdArray = explode(',', $gameAreaId);
			
			foreach ($gameAreaIdArray as $gameAreaIdval) {
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
                                                '{$gameAreaIdval}',
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
                                                a.`gameAreaId` = '{$gameAreaIdval}'
                                                and
                                                b.`privilegeValue` = 1
				";
				$this->gmDatabase->query($sql);
			}
			
			
			if($itemString) {
				$itemArray = json_decode($itemString, true);
				
				foreach($itemArray as $item) {
					$itemId = $item['id'];
                                        $sql = "
                                                select
                                                        `itemId`,`itemType`
                                                from
                                                        `t_cfg_item`
                                                where
                                                       `id` = '{$itemId}' 
                                        ";
                                        $iteminfo = $this->gmDatabase->getRow($sql);
					                    $itemCount = $item['count'];
                                        $type = $item['type'];
					
					
                                        $sql = "
                                                insert into
                                                        `t_data_send_mail_attachment`
                                                (
                                                        `applyId`,
                                                        `itemId`,
                                                        `itemType`,
                                                        `itemCount`,
                                                        `type`
                                                )
                                                value
                                                (
                                                        '{$applyId['applyId']}',
                                                        '{$iteminfo['itemId']}',
                                                        '{$iteminfo['itemType']}',
                                                        '{$itemCount}',
                                                        '{$type}'
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
		log_message('debug', '=====调用Mail->Send->applyAll接口结束=====');
	}
//	
	public function del() {
		log_message('debug', '=====开始调用Mail->Send->del接口=====');
		
		try {
			$applyId = $this->param->getParam('applyId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'post',true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			
			$sql = "
				update
                                       `t_data_send_mail`
                                set
                                       `status` = 1
				where
                                       `applyId` = '{$applyId}'
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
		log_message('debug', '=====调用Mail->Send->del接口结束=====');
	}
}