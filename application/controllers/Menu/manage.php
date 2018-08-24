<?php
class Manage extends MY_Controller
{
	public function getMenu()
	{
		log_message('debug', '=====开始调用Menu->getMenu接口=====');
		$this->returnData['data'] = $this->getChildMenu(0);
		$this->returnJson();
		log_message('debug', '=====调用Menu->getMenu接口结束=====');
	}
	
	
	public function getChildMenu($menuId = 0)
	{
		log_message('debug', '=====开始调用Menu->getChildMenu接口=====');
		
		try {
			$returnData = array();
			$language = ucwords($this->currLanguage);
			
			if($this->currUserId === '1') {
				$sql = "
					select
						`menuId`,
						`menu{$language}Name` as menuName,
						`url`
					from
						`t_cfg_menu`
					where
						`parentMenuId` = '{$menuId}'
						and
						`display` = 1
					order by
						`position`
				";
			}
			else {
				$sql = "
					select
						a.`menuId`,
						a.`menu{$language}Name` as menuName,
						a.`url`
					from
						`t_cfg_menu` a
					left join
						`t_data_user_menu_privilege` b
					on
						a.`menuId` = b.`menuId`
					where
						a.`parentMenuId` = '{$menuId}'
						and
						b.`userId` = '{$this->currUserId}'
                                                and
						b.`privilegeValue` = 1
                                                and
						`display` = 1
					order by
						`position`
				";
			}
			
			$menuArray = $this->gmDatabase->getArray($sql);
                        
			foreach ($menuArray as $menu) {
				$tmpArray['id'] = $menu['menuId'];
				$tmpArray['text'] = $menu['menuName'];
				$tmpArray['url'] = $menu['url'];
				$childMenu = $this->getChildMenu($menu['menuId']);
				
				if(!empty($childMenu)) {
					$tmpArray['children'] = $childMenu;
				}
				
				$returnData[] = $tmpArray;
				
				unset($childMenu);
				unset($tmpArray);
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
		
		return $returnData;
		log_message('debug', '=====调用Menu->getChildMenu接口失败=====');
	}
	
	public function getUserPrivilege() {
		log_message('debug', '=====开始调用Menu->getPrivilege接口=====');
		
		try {
			$userId = $this->param->getParam('userId', array('method' => 'int', 'min' => 2, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$this->returnData['data'] = $this->getChildPrivilege($userId);
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
		log_message('debug', '=====调用Menu->getPrivilege接口结束=====');
	}
	
	
	public function getChildPrivilege($userId, $menuId = 0) {
		log_message('debug', '=====调用Menu->getChildPrivilege接口=====');
		
		try {
			$returnData = array();
			$language = ucwords($this->currLanguage);
			$sql = "
				select
					a.`menuId`,
					a.`menu{$language}Name` as menuName,
					a.`url`,
					b.`privilegeValue`
				from
					`t_cfg_menu` a
				left join
					`t_data_user_menu_privilege` b
				on
					a.`menuId` = b.`menuId`
					and
					b.`userId` = '{$userId}'
				where
					a.`parentMenuId` = '{$menuId}'
				order by
					`position`
			";
			$menuArray = $this->gmDatabase->getArray($sql);
			
			foreach ($menuArray as $menu) {
				$tmpArray['id'] = $menu['menuId'];
				$tmpArray['text'] = $menu['menuName'];
				
				$childMenu = $this->getChildPrivilege($userId, $menu['menuId']);
				
				if(!empty($childMenu)) {
					$tmpArray['children'] = $childMenu;
				}
				else {
					if($menu['privilegeValue'] === '1') {
						$tmpArray['checked'] = true;
					}
					else {
						$tmpArray['checked'] = false;
					}
				}
				
				$returnData[] = $tmpArray;
				$tmpArray = array();
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
		
		return $returnData;
		log_message('debug', '=====Menu->getChildPrivilege接口结束=====');
	}
	
	public function setUserPrivilege() {
		log_message('debug', '=====开始调用Menu->setUserPrivilege接口=====');
		$this->verifyPrivilege();
	
		try {
			$userId = $this->param->getParam('userId', array('method' => 'int', 'min' => 2, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$menuIdString = $this->param->getParam('menuIdString', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
	
			$sql = "
				update
					`t_data_user_menu_privilege`
				set
					`privilegeValue` = 0
				where
					`userId` = '{$userId}'
			";
			$this->gmDatabase->query($sql);
	
			$menuIdArray = explode(',', $menuIdString);
						
			foreach ($menuIdArray as $menuId) {
				$sql = "
					insert into
						`t_data_user_menu_privilege`
					(
						`userId`,
						`menuId`,
						`privilegeValue`
					)
					value
					(
						'{$userId}',
						'{$menuId}',
						'1'
					)
					on duplicate key update
						`privilegeValue` = 1
				";
				$this->gmDatabase->query($sql);
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
		log_message('debug', '=====调用Menu->setUserPrivilege接口结束=====');
	}
}