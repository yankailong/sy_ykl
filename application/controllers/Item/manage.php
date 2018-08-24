<?php
class Manage extends MY_Controller
{
	public function getListData() {
		log_message('debug', '=====开始调用Item->Manage->getListData接口=====');
		
		try{
                        $ItemTypeId = $this->param->getParam('ItemTypeId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 5001, 'invalidErrorCode' => 1), 'post', true);
			$sql = "
				select
					<selectColumns>
				from
					`t_cfg_item`
                                where 
                                        1 = 1
			";
			if($ItemTypeId){
                                $sql.="and `ItemType` = '{$ItemTypeId}'";
                        }
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gmDatabase->getColumn($getTotalSql);
			
			$getDataSql = str_replace('<selectColumns>', "`id`,`itemId`,`itemType`, `item{$this->currLanguage}Name` as `itemName`", $sql);
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
		log_message('debug', '=====调用Item->Manage->getListData接口结束=====');
	}
}