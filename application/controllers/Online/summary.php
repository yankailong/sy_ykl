<?php
class Summary extends MY_Controller {
	public function __construct()
	{
		log_message('debug', '=====开始调用Online->Summary->__construct接口=====');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Online/');
		log_message('debug', '=====调用Online->Summary->__construct接口结束=====');
	}
	
	public function showView()
	{
		$this->load->view('module/Online/summary.htm');
	}
	
	public function getListData() {
		log_message('debug', '=====开始调用Online->Summary->getListData接口=====');
		$this->verifyPrivilege();
		
		try {
			$sql = "
				select
					b.`operatorName`,
					a.`areaNum`,
					d.`onlineRoleNum`
				from
					`t_data_game_area` a
				left join
					`t_data_operator` b
				on
					a.`operatorId` = b.`operatorId`
				left join
					`t_data_user_operator_privilege` c
				on
					a.`operatorId` = c.`operatorId`
					and
					c.`userId` = '{$this->currUserId}'
				left join
					(
						select
							`gameAreaId`,
							`onlineRoleNum`
						from
							`t_data_game_online`
						where
							`statDateTime` = (select max(`statDateTime`) from `t_data_game_online`)
					) d
				on
					a.`gameAreaId` = d.`gameAreaId`
				where
					c.`privilegeValue` = 1
			";
			$this->returnData['data']['rows'] = $this->gmDatabase->getArray($sql);
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
		log_message('debug', '=====调用Online->Summary->getListData接口结束=====');
	}
}