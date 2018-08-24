<?php
class Activation extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '=====开始调用Gift->Activation->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Gift/');
		log_message('debug', '=====调用Gift->Activation->__construct接口结束=====');
	}
	
	public function showView() {
		$this->load->view('module/Gift/activation.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Gift->Activation->getListData接口=====');
		$this->verifyPrivilege();
		
		try{
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
				
			$sql = "
				select
					<selectColumns>
				from
					`t_data_card` a
                left join
                        `t_data_card_apply` b
                on
                        a.`cardId` = b.`cardId`
                left join
                        `t_data_user` c
                on
                        b.`applyUserId` = c.`userId`
                left join
                        (select 
                              `cardId`,count(`cid`) as `usedCount` 
                         from 
                              `t_data_game_code`  
                         where 
                               `flag` =2 
                         group by  `cardId`) d
                on
                        a.`cardId` = d.`cardId`
                left join 
						`t_data_operator` e
				on 
						a.`operatorId` = e.`operatorId`
				order by
						b.`applyDatetime` desc
                                
			";
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
			$getDataSql = str_replace('<selectColumns>', "a.`cardId` as `applyId`,a.`useLimit` , a.`cardName`, e.`operatorName`, b.`count`, c.`name` as `applyUserName`, b.`applyDatetime`, b.`status`,d.`usedCount`", $sql);
		
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
		log_message('debug', '=====调用Card->Apply->getListData接口结束=====');
	
	}
	
	public function create() {
		log_message('debug', '=====开始调用Gift->Activation->create接口=====');
		$this->verifyPrivilege();
		
		try{
            $operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5001, 'invalidErrorCode' => 1));
            $giftType = $this->param->getParam('giftType', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
            $giftId = $this->param->getParam('giftId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post',true);
            $codeCount = $this->param->getParam('codeCount', array('method' => 'int', 'min' => 1,  'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
            $bit = $this->param->getParam('bit', array('method' => 'int', 'min' => 1,'max' => 32, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
            if( !$giftId  ) {
				throw new Exception('', 202);
			}
                                
                        $sql = "
                                select
                                        `giftName`
                                from
                                        `t_data_gift`
                                where
                                        `giftId` = '{$giftId}'

                        ";
                        $cardInfo=  $this->gmDatabase->getRow($sql);
                        $time = time();
                        $date = date('Y-m-d H:i:s', $time);
                        $cardName = "{$cardInfo['giftName']}{$date}";
                        $sql = "
                                insert into
                                        `t_data_card`
                                (
                                        `cardName`,
                                        `operatorId`,
                                        `useLimit`
                                )
                                value
                                (
                                        '{$cardName}',
                                        '{$operatorId}',
                                        '{$giftType}'
                                )
                        ";
                        $this->gmDatabase->query($sql); 
                        $cardId = $this->gmDatabase->getLastInsertId();
                        $sql = "
                                insert into
                                        `t_data_card_apply`
                                (
                                        `cardId`,
                                        `count`,
                                        `bit`,
                                        `giftId`,
                                        `applyUserId`,
                                        `applyDatetime`,
                                        `status`
                                )
                                value
                                (
                                        '{$cardId}',
                                        '{$codeCount}',
                                        '{$bit}',
                                        '{$giftId}',
                                        '{$this->currUserId}',
                                        now(),
                                        '1'
                                )
                        ";
                        $this->gmDatabase->query($sql); 

                        
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
		log_message('debug', '=====调用Gift->Activation->create接口结束=====');
	}
        
    public function export() {
		log_message('debug', '=====开始调用Gift->Activation->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
	
		try {
			$applyId = $this->param->getParam('applyId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get');
			$cardName = $this->param->getParam('cardName', array('method' => 'string', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get');
			$fileName = "{$cardName}.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv');
			header("Content-Disposition:attachment;filename={$fileName}");


			// $getDataSql = "
   //              select
			// 		`cardName`
			// 	from
			// 		`t_data_card` 
   //              where
   //                  `cardId` = '{$applyId}'
			// ";
			// // $data = $Db->query($getDataSql);
			 
			// $cardName =$this->gmDatabase->getArray($getDataSql);
			 
			// print_r($cardName);
			// print_r($cardName[0]['cardName']);
			// echo $cardName[0]['cardName'];
				
			$sql = "
				select
					`code`
				from
					`t_data_game_code` 
                where
                    `cardId` = '{$applyId}'
			";

													
			$cardInfoArray = $this->gmDatabase->getArray($sql);
			// print_r($cardInfoArray['cardName']);
					
			foreach ($cardInfoArray as $cardInfo) {
				echo "{$cardInfo['code']}\n";
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
	}
    public function del() {
		log_message('debug', '=====开始调用Gift->Activation->del接口=====');
		$this->verifyPrivilege();
		
		try{
            $applyId = $this->param->getParam('applyId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
				
			$sql = "
				delete from
                           `t_data_game_code` 
				where
                           `cardId` = '{$applyId}'
			";
			$this->gmDatabase->query($sql);
            $sql = "
				delete from
                           `t_data_card_apply` 
				where
                           `cardId` = '{$applyId}'
			";
			$this->gmDatabase->query($sql);
            $sql = "
				delete from
                           `t_data_card` 
				where
                           `cardId` = '{$applyId}'
			";
			$this->gmDatabase->query($sql);
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
		log_message('debug', '=====调用Card->Apply->getListData接口结束=====');
	
	}
	
}