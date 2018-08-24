<?php
class MY_Controller extends CI_Controller
{
	protected $message;
	protected $currLanguage;
	protected $returnData = array('errorCode' => 0, 'errorMessage' => '', 'data' => array());
	protected $currUserId;
	protected $gmDatabase;
	protected $areaNum;
	protected $ipAddress;
	protected $portGroup;
	protected $gameAreaId;
        protected $gameDatabase;
	
	
	public function __construct()
	{
		log_message('debug', '=====开始调用MY_Controller->__construct=====');
		parent::__construct();
		$this->initLanguage();
		$this->loadLanguageFile('application/core');
		$this->getCurrUserId();
		$this->initGmDatabase();	
		
		log_message('debug', '=====调用MY_Controller->__construct结束=====');
	}
	
	
	public function initLanguage()
	{
		log_message('debug', '=====开始调用MY_Controller->initLanguage=====');
		$this->currLanguage = isset($this->session->userdata['language']) ? $this->session->userdata['language'] : ( isset($_SERVER['LANGUAGE']) ? $_SERVER['LANGUAGE'] : 'chinese' );
		log_message('debug', "当前语言：{$this->currLanguage}");
		log_message('debug', '=====调用MY_Controller->initLanguage结束=====');
	}
	
	
	public function getCurrUserId()
	{
		log_message('debug', '=====开始调用MY_Controller->getCurrUserId=====');
		$this->currUserId = isset($this->session->userdata['userId']) ? $this->session->userdata['userId'] : 0;
		log_message('debug', "当前用户ID：{$this->currUserId}");
		$ignoreUrlArray = array(
				'/index.php/Portal/portal',
				'/index.php/Language/manage/getCurrLanguage',
				'/index.php/Language/manage/setCurrLanguage',
				'/index.php/User/manage/login',
				'/index.php/User/manage/logout',
				'/index.php/Interface/report/gameLog',
                                '/index.php/Interface/question/idea',
                                '/index.php/Interface/server/manage',
                                '/index.php/Interface/qqserver/manage',
                                '/index.php/Interface/combined/manage',
                                '/index.php/Interface/clearServer/manage',
                                '/index.php/Interface/moveServer/manage',
                                '/index.php/Interface/useCode/code',
                                '/index.php/Interface/createProcess/logInfo'
		);
                
                $url = explode('?',$_SERVER['REQUEST_URI']);
                
                if( ! in_array($url[0], $ignoreUrlArray) && $this->currUserId < 1) {
			$this->setErrorCode(101);
			$this->returnJson();
			exit();
		}
//		if( ! in_array($_SERVER['REQUEST_URI'], $ignoreUrlArray) && $this->currUserId < 1) {
//			$this->setErrorCode(101);
//			$this->returnJson();
//			exit();
//		}
	
		log_message('debug', '=====调用MY_Controller->getCurrUserId结束=====');
	}
	
	
	public function loadLanguageFile($filePath)
	{
		include_once "${filePath}/{$this->currLanguage}.php";
	}
	
	
	public function initGmDatabase()
	{
		try {
			$config =& get_config();
			$this->gmDatabase = new MY_Mysql();
			$this->gmDatabase->connect($config['gmDatabaseHost'].":".$config['gmDatabasePort'], $config['gmDatabaseUsername'], $config['gmDatabasePassword'], $config['gmDatabaseName']);
		}
		catch (MY_Mysql_Exception $e) {
			$this->setErrorCode(2);
			$this->returnJson();
			exit();
		}
	}
	
	
	public function verifyPrivilege()
	{
		log_message('debug', '=====开始调用MY_Controller->verifyPrivilege接口=====');
		$userId = $this->currUserId;
	
		if($userId > 1) {
			$url = $_SERVER['REQUEST_URI'];
	
			if(!(strpos($url, '?') === false))
			{
				$url = substr($url, 0 , strpos($url, '?'));
			}
	
			$sql = "
				select
					count(*)
				from
					`t_data_user_menu_privilege`
				where
					`userId` = '{$userId}'
					and
					`menuId` in
					(
						select
							`menuId`
						from
							`t_cfg_menu`
						where
							`url` = '{$url}'
					)
					and
					`privilegeValue` = 1
			";
				
			if($this->gmDatabase->getColumn($sql) === '0') {
				$this->setErrorCode(102);
				$this->returnJson();
				exit();
			}
		}
	
		log_message('debug', '=====开始调用MY_Controller->verifyPrivilege接口=====');
	}
	
	
public function initGameAreaInfo($operatorId,$gameAreaId,$curr=true)
	{
		try {
                  if($curr === true){
			$sql = "
				select
					a.`gameAreaId`,
					d.`ipAddress`,
					a.`databaseName`,
					a.`areaNum`,
                                        a.`operatorId`
				from
					`t_data_game_area` a
				left join
					`t_data_server` b
				on
					a.`serverId` = b.`serverId`
				left join
					`t_data_server_ip` c
				on
					b.`serverId` = c.`serverId`
				left join
					`t_data_ip` d
				on
					c.`ipId` = d.`ipId`
				left join
					`t_cfg_ip_type` e
				on
					d.`ipTypeId` = e.`ipTypeId`
				left join
					`t_data_operator` f
				on
					a.`operatorId` = f.`operatorId`
				left join
					`t_data_user_operator_privilege` g
				on
					a.`operatorId` = g.`operatorId`
					and
					g.`userId` = '{$this->currUserId}'
				where
                                        a.`operatorId` =  '{$operatorId}'
                                        and
                                        find_in_set(a.`gameAreaId`,'{$gameAreaId}') 
                                        and
					e.`isDefault` = 1
					and
					g.`privilegeValue` = 1
			";
                    }else if($curr ===false){
                      $sql = "
				select
					a.`gameAreaId`,
					d.`ipAddress`,
					a.`databaseName`,
					a.`areaNum`,
                                        a.`operatorId`
				from
					`t_data_game_area` a
				left join
					`t_data_server` b
				on
					a.`serverId` = b.`serverId`
				left join
					`t_data_server_ip` c
				on
					b.`serverId` = c.`serverId`
				left join
					`t_data_ip` d
				on
					c.`ipId` = d.`ipId`
				left join
					`t_cfg_ip_type` e
				on
					d.`ipTypeId` = e.`ipTypeId`
				left join
					`t_data_operator` f
				on
					a.`operatorId` = f.`operatorId`
				where
                                        a.`operatorId` =  '{$operatorId}'
                                        and
                                        find_in_set(a.`gameAreaId`,'{$gameAreaId}') 
                                        and
					e.`isDefault` = 1
			";
                    }
			if( ($row = $this->gmDatabase->getArray($sql)) === false ) {
				$this->setErrorCode(1);
				$this->returnJson();
				exit();
			}
			else {
				$config =& get_config();
                                for($i = 0;$i<count($row);$i++){
                                    $this->gameDatabase = new MY_Mysql();
                                    $this->gameDatabase->connect($row[$i]['ipAddress'].":".$config['gameDatabasePort'], $config['gameDatabaseUsername'], $config['gameDatabasePassword'], $row[$i]['databaseName']);
                                    $this->areaNum = $row[$i]['areaNum'];
                                    $this->ipAddress = $row[$i]['ipAddress'].":".$config['gameDatabasePort'];
                                    $this->gameAreaId = $row[$i]['gameAreaId'];
                                }
			}
		}
		catch (MY_Mysql_Exception $e) {
			$this->setErrorCode(1);
			$this->returnJson();
			exit();
		}
	}
	
	
	public function setErrorCode($errorCode)
	{
		log_message('debug', '=====开始调用MY_Controller->setErrorCode=====');
		$this->returnData['errorCode'] = $errorCode;
		$this->returnData['errorMessage'] = $this->message[$errorCode];
		log_message('debug', '=====调用MY_Controller->setErrorCode结束=====');
	}
	
	
	public function returnJson()
	{
		log_message('debug', '=====开始调用MY_Controller->returnJson=====');
		log_message('debug', "返回信息：".serialize($this->returnData));
		echo json_encode($this->returnData);
		log_message('debug', '=====调用MY_Controller->returnJson结束=====');
	}
	
	public function dateTimeToCppDateTime($dateTime) {
		if($dateTime) {
			$perfix = substr($dateTime, 0, 5);
			$cppMonth = substr($dateTime, 5, 2);
			$surfix = substr($dateTime, 7);
			$month = str_pad(($cppMonth - 1), 2, 0, STR_PAD_LEFT);
			return "{$perfix}{$month}{$surfix}";
		}
		else {
			return $dateTime;
		}
	}
	
	public function cppDateTimeToDateTime($dateTime) {
		if($dateTime) {
			$perfix = substr($dateTime, 0, 5);
			$cppMonth = substr($dateTime, 5, 2);
			$surfix = substr($dateTime, 7);
			$month = str_pad(($cppMonth + 1), 2, 0, STR_PAD_LEFT);
			return "{$perfix}{$month}{$surfix}";
		}
		else {
			return $dateTime;
		}
	}
}