<?php
class Manage extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '开始调用Role->Manage->__construct接口');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Role/');
		log_message('debug', '调用Role->Manage->__construct接口结束');
	}
	
	public function showView()
	{
		$this->load->view('module/Role/manage.htm');
	}
	
	public function getListData()
	{
		log_message('debug', '开始调用Role->Manage->getListData接口');
		$this->verifyPrivilege(); 
		
		try{
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
            $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
            $onlineId = $this->param->getParam('onlineId', array('method' => 'int', 'min' => 0, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
            $vipId = $this->param->getParam('vipId', array('method' => 'int', 'min' => 0, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
			$account = $this->param->getParam('account', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
            $passport = $this->param->getParam('passport', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$roleName = $this->param->getParam('roleName', array(), 'post', true);
            $playerlevel = $this->param->getParam('playerlevel', array('method' => 'int', 'min' => 0,'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
            $familyId = $this->param->getParam('familyId', array('method' => 'int', 'min' => 0,'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$sort = $this->param->getParam('sort', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$order = $this->param->getParam('order', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			
			$sql = "
				select
					<selectColumns>
				from
					`mem_character` b
				left join
					`sys_user` a
                                on
                                        a.`uid` = b.`uid`
                                        and
                                        a.`sid` = b.`sid`
                                left join
                                        `mem_char_currency` c
                                on
                                        b.`cid` = c. `cid`
                                left join
                                        `mem_chr_vip` e         
				on
					b.`cid` = e.`cid`
                                left join
                                        `mem_chr_family` f
                                on
                                        b.`cid` = f.`cid`
                                left join 
                                        `mem_family` g
                                on
                                        f.`family_id` = g.`id`
                                left join 
                                        `pay_log` h
                                on
                                        h.`name` = b.`name`
                                 where
                                        1 = 1
			";
                       
			if($account) {
				$sql .= " and b.`cid` = '{$account}'";
			}
                        if($passport) {
				$sql .= " and a.`passport` = '{$passport}'";
			}
			if($playerlevel) {
				$sql .= " and b.`level` = '{$playerlevel}'";
			}
                        if($familyId) {
				$sql .= " and g.`id` = '{$familyId}'";
			}
			if($roleName) {
				$sql .= " and b.`name` = '{$roleName}'";
			}
			if($onlineId ==3) {
				$sql .= " and a.`last_login_time`<= a.`last_logout_time`";
                        }
                        else if($onlineId ==2){
                                $sql .= " and a.`last_login_time`> a.`last_logout_time`";
                        }else{
                                $sql .= " and 1 = 1";
                        }
                        if($vipId ==3) {
				$sql .= " and e.`vipCard` = '0' or e.`level` = '0' or e.`level` is null   or e.`vipEndTime`= 0  or  e.`vipEndTime`<unix_timestamp(now())";
                        }
                        else if($vipId ==2){
                                $sql .= " and e.`level` > 0 and  e.`vipEndTime`>unix_timestamp(now()) and e.`vipCard` >0 ";
                        }else{
                                $sql .= " and 1 = 1";
                        }
                        $getTotalSql = str_replace('<selectColumns>', "b.`cid`", $sql);
                        $sqlTotal = "
                                select count(distinct(i.`cid`)) from 
			";	
                        $sqlTotal.="({$getTotalSql}) i";
			
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($sqlTotal);
			$sql .= " group by b.`cid`";
			$getDataSql = str_replace('<selectColumns>', "a.`passport`,count(h.`cid`) as `time`,b.`cid`,b.`sid` ,b.`name` as `roleName`,b.`sex`,b.`job`,b.`level`,g.`name` as `family`,b.`mapid` ,b.`x`,b.`y`,FROM_UNIXTIME(b.`last_login_time`) as `last_login_time`,FROM_UNIXTIME(e.`vipEndTime`) as `vipEndTime` ,FROM_UNIXTIME(b.`create_time`) as `create_time` ,a.`last_login_ip` ,FROM_UNIXTIME(a.`last_logout_time`) as `last_logout_time`,a.`total_online_time` ,b.`battle` ,e.`level` as `vip_level`,a.`gold_pay_total` as `amount`,c.`money` ,c.`gold`,c.`cash`,c.`vigour`,c.`draw_score`,c.`boss_score`,c.`bind_money`,c.`honor`,c.`ac_score`,c.`contribution`,c.`blood`,c.`dust`", $sql);
			
			if($sort && $order) {
				$getDataSql .= " order by {$sort} {$order}";
			}

			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                    
                        foreach ($this->returnData['data']['rows'] as $key =>$value){
                            if($this->returnData['data']['rows'][$key]['last_login_time']<=$this->returnData['data']['rows'][$key]['last_logout_time']){
                                $this->returnData['data']['rows'][$key]['online'] = '不在线';
                            }else{
                                $this->returnData['data']['rows'][$key]['online'] = '在线';
                            }
                            if($this->returnData['data']['rows'][$key]['job']==1){
                                $this->returnData['data']['rows'][$key]['job'] = '战士';
                            }else if($this->returnData['data']['rows'][$key]['job'] ==2){
                                $this->returnData['data']['rows'][$key]['job'] = '法师';
                            }else if($this->returnData['data']['rows'][$key]['job'] ==3){
                                $this->returnData['data']['rows'][$key]['job'] = '刺客';
                            }
                            if($this->returnData['data']['rows'][$key]['sex']==1){
                                $this->returnData['data']['rows'][$key]['sex'] = '男';
                            }else if($this->returnData['data']['rows'][$key]['sex'] ==2){
                                $this->returnData['data']['rows'][$key]['sex'] = '女';
                            }
                            if($this->returnData['data']['rows'][$key]['vipEndTime']=='1970-01-01 08:00:00'){
                                $this->returnData['data']['rows'][$key]['vipEndTime'] = '';
                            }else{
                                $this->returnData['data']['rows'][$key]['vipEndTime'] = $this->returnData['data']['rows'][$key]['vipEndTime'];
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
		log_message('debug', '调用Role->Manage->getListData接口结束');
	}
	
	public function kick() {
		log_message('debug', '=====开始调用Role->Manage->kick接口=====');
		$this->verifyPrivilege();
	
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$userId = $this->param->getParam('userId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$this->initGameAreaInfo($operatorId,$gameAreaId);
				
			$this->doKick($userId); 
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
		log_message('debug', '=====调用Role->Manage->kick接口结束=====');
	}
    public function export() {
		log_message('debug', '=====开始调用Role->Manage->export接口=====');
		$this->verifyPrivilege();
		@ini_set('memory_limit','1024M');
		try {
			$fileName = "role.txt";
			header("Content-type:application/octet-stream");
			header("Accept-Ranges:bytes");
			header('Content-type:txt/csv;charset=utf-8');
			header("Content-Disposition:attachment;filename={$fileName}");
                        
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get');
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get', true);
                        $onlineId = $this->param->getParam('onlineId', array('method' => 'int', 'min' => 0, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get', true);
                        $playerlevel = $this->param->getParam('playerlevel', array('method' => 'int', 'min' => 0,'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get', true);
                        $vipId = $this->param->getParam('vipId', array('method' => 'int', 'min' => 0, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'get', true);
			$account = $this->param->getParam('account', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get', true);
                        $passport = $this->param->getParam('passport', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'get', true);
			$roleName = $this->param->getParam('roleName', array(), 'get', true);	
			
			
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			$sql = "
				select
					<selectColumns>
				from
					`mem_character` b
				left join
					`sys_user` a
                                on
                                        a.`uid` = b.`uid`
                                        and
                                        a.`sid` = b.`sid`
                                left join
                                        `mem_char_currency` c
                                on
                                        b.`cid` = c. `cid`
                                left join
                                        `mem_chr_vip` e         
				on
					b.`cid` = e.`cid`
                                left join
                                        `mem_chr_family` f
                                on
                                        b.`cid` = f.`cid`
                                left join 
                                        `mem_family` g
                                on
                                        f.`family_id` = g.`id`
                                left join 
                                        `pay_log` h
                                on
                                        h.`name` = b.`name`
                                where
                                        1 = 1
			";
                       
			if($account) {
				$sql .= " and b.`cid` = '{$account}'";
			}
                        if($passport) {
				$sql .= " and a.`passport` = '{$passport}'";
			}
			if($playerlevel) {
				$sql .= " and b.`level` = '{$playerlevel}'";
			}
			if($roleName) {
				$sql .= " and b.`name` = '{$roleName}'";
			}
			if($onlineId ==3) {
				$sql .= " and a.`last_login_time`<= a.`last_logout_time`";
                        }
                        else if($onlineId ==2){
                                $sql .= " and a.`last_login_time`> a.`last_logout_time`";
                        }else{
                                $sql .= " and 1 = 1";
                        }
                        if($vipId ==3) {
				$sql .= " and e.`vipCard` = '0' or e.`level` = '0' or e.`level` is null   or e.`vipEndTime`= 0  or  e.`vipEndTime`<unix_timestamp(now())";
                        }
                        else if($vipId ==2){
                                $sql .= " and e.`level` > 0 and  e.`vipEndTime`>unix_timestamp(now()) and e.`vipCard` >0 ";
                        }else{
                                $sql .= " and 1 = 1";
                        }
                        
                        $sql .= " group by b.`cid`";
			$getDataSql = str_replace('<selectColumns>', "a.`passport`,count(h.`cid`) as `time`,b.`cid`,b.`sid` ,b.`name` as `roleName`,b.`sex`,b.`job`,b.`level`,g.`name` as `family`,b.`mapid` ,b.`x`,b.`y`,FROM_UNIXTIME(b.`last_login_time`) as `last_login_time`,FROM_UNIXTIME(e.`vipEndTime`) as `vipEndTime` ,FROM_UNIXTIME(b.`create_time`) as `create_time` ,a.`last_login_ip` ,FROM_UNIXTIME(a.`last_logout_time`) as `last_logout_time`,a.`total_online_time` ,b.`battle` ,e.`level` as `vip_level`,a.`gold_pay_total` as `amount`,c.`money` ,c.`gold`,c.`cash`,c.`vigour`,c.`draw_score`,c.`boss_score`,c.`bind_money`,c.`honor`,c.`ac_score`,c.`contribution`,c.`blood`,c.`dust`", $sql);
			
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                        foreach ($this->returnData['data']['rows'] as $key =>$value){
                            if($this->returnData['data']['rows'][$key]['last_login_time']<=$this->returnData['data']['rows'][$key]['last_logout_time']){
                                $this->returnData['data']['rows'][$key]['online'] = '不在线';
                            }else{
                                $this->returnData['data']['rows'][$key]['online'] = '在线';
                            }
                            if($this->returnData['data']['rows'][$key]['job']==1){
                                $this->returnData['data']['rows'][$key]['job'] = '战士';
                            }else if($this->returnData['data']['rows'][$key]['job'] ==2){
                                $this->returnData['data']['rows'][$key]['job'] = '法师';
                            }else if($this->returnData['data']['rows'][$key]['job'] ==3){
                                $this->returnData['data']['rows'][$key]['job'] = '刺客';
                            }
                            if($this->returnData['data']['rows'][$key]['sex']==1){
                                $this->returnData['data']['rows'][$key]['sex'] = '男';
                            }else if($this->returnData['data']['rows'][$key]['sex'] ==2){
                                $this->returnData['data']['rows'][$key]['sex'] = '女';
                            }
                            if($this->returnData['data']['rows'][$key]['vipEndTime']=='1970-01-01 08:00:00'){
                                $this->returnData['data']['rows'][$key]['vipEndTime'] = '';
                            }else{
                                $this->returnData['data']['rows'][$key]['vipEndTime'] = $this->returnData['data']['rows'][$key]['vipEndTime'];
                            }
                        }
			echo "账号\t角色id\t服务器id\t角色名称\t职业\t级别\tvip等级\t战斗力\t元宝\t充值次数\t充值总元宝\t铜钱\t绑元\t元气\t血钻碎片\tBoss积分\t绑定金币\t荣誉\t积分\t军团贡献\t血钻碎片\t涅法雷姆经验\t钻石抵扣劵\t性别\t军团\t是否在线\t所在地图\t坐标x\t坐标y\t在线时间\tvip到期时间\t创建时间\t最近登录\t最近登出\t最近登录ip\t"."\n";
                        foreach ($this->returnData['data']['rows'] as $key => $value) {
                            echo "'{$value['passport']}'\t'{$value['cid']}'\t{$value['sid']}\t{$value['roleName']}\t{$value['job']}\t'{$value['level']}'\t'{$value['vip_level']}'\t'{$value['battle']}'\t'{$value['gold']}'\t{$value['time']}\t'{$value['amount']}'\t'{$value['money']}'\t'{$value['cash']}'\t'{$value['vigour']}'\t{$value['draw_score']}\t{$value['boss_score']}\t'{$value['bind_money']}'\t'{$value['honor']}'\t'{$value['ac_score']}'\t'{$value['contribution']}'\t{$value['blood']}\t'{$value['dust']}'\t'{$value['sex']}'\t{$value['family']}\t{$value['online']}\t'{$value['mapid']}'\t'{$value['x']}'\t'{$value['y']}'\t{$value['total_online_time']}\t{$value['vipEndTime']}\t{$value['create_time']}\t{$value['last_login_time']}\t{$value['last_logout_time']}\t{$value['last_login_ip']}\t\n";
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
		
		log_message('debug', '=====调用Role->Manage->export接口结束=====');
	}
	
	private function doKick($userId) {
	
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$userId = $this->param->getParam('userId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$this->initGameAreaInfo($operatorId,$gameAreaId);  
                        $sql = "
				select
					`name`
				from
					`t_data_user` 
				where
					`userId` = '{$this->currUserId}'
			";
                        $operator = $this->gmDatabase->getColumn($sql);
                        $sql = "
                               insert into
                                       `gmt_kick` 
                               set
                                       `cid` = '{$userId}',
                                       `operator` = '{$operator}',
                                       `op_time` = unix_timestamp(now()),
                                       `reason` = '后台踢人',
                                       `flag` = 0
                        ";
                        $this->gameDatabase->query($sql);
	
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
	
		log_message('debug', '=====调用Role->Manage->doKick接口结束=====');
	}
	
	function bannedRole() {
		log_message('debug', '=====开始调用Role->Manage->bannedRole接口=====');
		$this->verifyPrivilege();
	
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$userId = $this->param->getParam('userId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$bannedCycleType = $this->param->getParam('bannedCycleType', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1010001, 'invalidErrorCode' => 1));
			$bannedCycleValue = $this->param->getParam('bannedCycleValue', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1010002, 'invalidErrorCode' => 1010003),'post',true);
			$reason = $this->param->getParam('reason', array('method' => 'string', 'emptyErrorCode' => 1010004, 'invalidErrorCode' => 1010005));
			$this->initGameAreaInfo($operatorId,$gameAreaId);
	
			// $sql = "
			// 	select
			// 		count(*)
			// 	from
			// 		`gmt_seal` a
			// 	left join
			// 		`mem_character` b
			// 	on
			// 		a.`cid` = '{$userId}'
			// 	where
			// 		a.`expire_time` < unix_timestamp(now())
			// ";

			$sql = "
				select
					count(*)
				from
					`gmt_seal` a
				left join
					`mem_character` b
				on
					a.`cid` = b.`cid`
				where
					a.`cid` = '{$userId}'
				and
					a.`expire_time` > unix_timestamp(now())
			";


			// $sql = "
			// 	select
			// 		count(*)
			// 	from
			// 		`gmt_ban_chat` a
			// 	left join
			// 		`mem_character` b
			// 	on
			// 		a.`cid` = b.`cid`
			// 	where
			// 		a.`cid` = '{$userId}'
			// 	and
			// 		a.`expire_time` < unix_timestamp(now())
			// ";
				
			if($this->gameDatabase->getColumn($sql) === '0' ) {
				
                                
                                switch ($bannedCycleType) {
                                        case 1:
                                                $second = $bannedCycleValue * 60;
                                                break;

                                        case 2:
                                                $second = $bannedCycleValue * 3600;
                                                break;

                                        case 3:
                                                $second = $bannedCycleValue * 24 * 3600;
                                                break;

                                        case 4:
                                                $second = $bannedCycleValue * 30 * 24 * 3600;
                                                break;

                                        case 5:
                                                $second = $bannedCycleValue * 365 * 24 * 3600;
                                                break;
                                              
                                        case 6:
                                                $second =  365 *  24 * 3600;
                                                break;
                                }

                                $sql = "
                                        insert into
                                                `t_log_banned_role`
                                        (
                                                `type`,
                                                `operatorId`,
                                                `gameAreaId`,
                                                `userId`,
                                                `unbannedDateTime`,
                                                `status`,
                                                `operatorUserId`,
                                                `operatorDateTime`,
                                                `reason`
                                        )
                                        value
                                        (
                                                '1',
                                                '{$operatorId}',
                                                '{$gameAreaId}',
                                                '{$userId}',
                                                from_unixtime(unix_timestamp(now()) + '{$second}'),
                                                '1',
                                                '{$this->currUserId}',
                                                now(),
                                                '{$reason}' 
                                        )
                                ";
                                $this->gmDatabase->query($sql); 

                            $countsql = "
                            
					                select
					                       count(*) 
					                from
					                    `gmt_seal`
					                where
					                     `cid` =  '{$userId}'
					        ";
					        // $GameDb->getColumn($sql);
					        
					        if( $this->gameDatabase->getColumn($countsql) === '0'){
					            $sql = "
					                    insert into
	                                            `gmt_seal`
	                                    (
	                                            `cid`,
	                                            `expire_time`,
	                                            `operator`,
	                                            `reason`,
	                                            `op_time`,
	                                            `flag`,
	                                            `seal_type`,
	                                            `type`
	                                    )
	                                    value
	                                    (
	                                            '{$userId}',
	                                            (unix_timestamp(now()) + '{$second}'),
	                                            '{$this->currUserId}',
	                                            '{$reason}',
	                                            unix_timestamp(now()),
	                                            '0',
	                                            '1',
	                                            '1'
	                                    )
					            ";
					            $this->gameDatabase->query($sql);
					        }else{
					            $sql = "
										update
											`gmt_seal`
						                set
						                        `expire_time` = (unix_timestamp(now()) + '{$second}'),
						                        `flag` = 0,
						                        `seal_type` = 1,
						                        `type` = 1
						                where
						                        `cid` = '{$userId}'
								";
								$this->gameDatabase->query($sql);
					        }


                            //     $sql = "
                            //         insert into
                            //                 `gmt_seal`
                            //         (
                            //                 `cid`,
                            //                 `expire_time`,
                            //                 `operator`,
                            //                 `reason`,
                            //                 `op_time`,
                            //                 `flag`,
                            //                 `seal_type`,
                            //                 `type`
                            //         )
                            //         value
                            //         (
                            //                 '$userId}',
                            //                 from_unixtime(unix_timestamp(now()) + '{$second}'),
                            //                 '{$this->currUserId}',
                            //                 '{$reason}',
                            //                 now(),
                            //                 '0',
                            //                 '1',
                            //                 '1'
                            //         )
                            // ";
                            // $this->gameDatabase->query($sql);
                            // $GameDb->query($sql);
			}
			else {
				
				$this->setErrorCode(1010006);
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
		log_message('debug', '=====调用Role->Manage->bannedRole接口结束=====');
	}
	
	function unbannedRole() {
		log_message('debug', '=====开始调用Role->Manage->unbannedRole接口=====');
		$this->verifyPrivilege();
	
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$userId = $this->param->getParam('userId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$reason = $this->param->getParam('reason', array('method' => 'string', 'emptyErrorCode' => 1010004, 'invalidErrorCode' => 1010005));
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			
			$sql = "
				select
					count(*)
				from
					`gmt_seal` a
				where
                    a.`cid` = '{$userId}'
                    and
					a.`expire_time` > unix_timestamp(now())
			";
				
			// if($this->gmDatabase->getColumn($sql) === '0') {
			if($this->gameDatabase->getColumn($sql) === '0') {
				$this->setErrorCode(1010007);
			}
			else {
				
				$sql = "
					insert into
						`t_log_banned_role`
					(
						`type`,
                                                `operatorId`,
						`gameAreaId`,
						`userId`,
                                                `unbannedDateTime`,
                                                `status`,
						`operatorUserId`,
						`operatorDateTime`,
						`reason`
					)
					value
					(
						'2',
                                                '{$operatorId}',
						'{$gameAreaId}',
						'{$userId}',
                                                now(),
                                                '2',
						'{$this->currUserId}',
						now(),
						'{$reason}'
					)
				";
				$this->gmDatabase->query($sql);	

				$gamesql = "
					update
						`gmt_seal`
	                set
	                        `expire_time` = unix_timestamp(now()),
	                        `flag` = 0,
	                        `seal_type` = 0,
	                        `type` = 0
	                where
	                        `cid` = '{$userId}'
				";	
				$this->gameDatabase->query($gamesql);		
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
		log_message('debug', '=====调用Role->Manage->unbannedRole接口结束=====');
	}
	
	function bannedChat() {
		log_message('debug', '=====开始调用Role->Manage->bannedChat接口=====');
		$this->verifyPrivilege();
	
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
            $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$userId = $this->param->getParam('userId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$bannedCycleType = $this->param->getParam('bannedCycleType', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1010001, 'invalidErrorCode' => 1));
			$bannedCycleValue = $this->param->getParam('bannedCycleValue', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1010002, 'invalidErrorCode' => 1010003),'post',true);
			$reason = $this->param->getParam('reason', array('method' => 'string', 'emptyErrorCode' => 1010004, 'invalidErrorCode' => 1010005));
			$this->initGameAreaInfo($operatorId,$gameAreaId);

	
			// $sql = "
			// 	select
			// 		count(*)
			// 	from
			// 		`gmt_ban_chat` a
			// 	left join
			// 		`mem_character` b
			// 	on
			// 		a.`cid` = '{$userId}'
			// 	where
			// 		a.`expire_time` < unix_timestamp(now())
			// ";
			$sql = "
				select
					count(*)
				from
					`gmt_ban_chat` a
				left join
					`mem_character` b
				on
					a.`cid` = b.`cid`
				where
					a.`cid` = '{$userId}'
				and
					a.`expire_time` > unix_timestamp(now())
			"; 
	
			if($this->gameDatabase->getColumn($sql) === '0') {
				
				$this->gameDatabase->query($sql);
					switch ($bannedCycleType) {
						case 1:
							$second = $bannedCycleValue * 60;
							break;
						
						case 2:
							$second = $bannedCycleValue * 3600;
							break;
						
						case 3:
							$second = $bannedCycleValue * 24 * 3600;
							break;
						
						case 4:
							$second = $bannedCycleValue * 30 * 24 * 3600;
							break;
						
						case 5:
	                        $second = $bannedCycleValue * 365 * 24 * 3600;
	                        break;

                  		case 6:
                          	$second =  365 *  24 * 3600;
                          	break;
				}
	
				$sql = "
					insert into
                                `t_log_banned_chat`
                        (
                                `type`,
                                `operatorId`,
                                `gameAreaId`,
                                `userId`,
                                `unbannedDateTime`,
                                `status`,
                                `operatorUserId`,
                                `operatorDateTime`,
                                `reason`
                        )
                        value
                        (
                                '1',
                                '{$operatorId}',
                                '{$gameAreaId}',
                                '{$userId}',
                                from_unixtime(unix_timestamp(now()) + '{$second}'),
                                '1',
                                '{$this->currUserId}',
                                now(),
                                '{$reason}'
                        )
				";
				$this->gmDatabase->query($sql);

				// $sql = "
    //                     insert into
    //                             `gmt_ban_chat`
    //                     (
    //                             `cid`,
    //                             `expire_time`,
    //                             `operator`,
    //                             `reason`,
    //                             `op_time`,
    //                             `flag`
    //                     )
    //                     value
    //                     (
    //                             '{$userId}',
    //                             from_unixtime(unix_timestamp(now()) + '{$second}'),
    //                             '{$this->currUserId}',
    //                             '{$reason}',
    //                             now(),
    //                             '0'
    //                     )
    //             ";
    //             $this->gameDatabase->query($sql);
			}
			else {
				
                    $this->setErrorCode(1010006);
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
		log_message('debug', '=====调用Role->Manage->bannedChat接口结束=====');
	}
	
	function unbannedChat() {
		log_message('debug', '=====开始调用Role->Manage->unbannedChat接口=====');
		$this->verifyPrivilege();
	
		try {
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
            $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
			$userId = $this->param->getParam('userId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1));
			$reason = $this->param->getParam('reason', array('method' => 'string', 'emptyErrorCode' => 1010004, 'invalidErrorCode' => 1010005));
			$this->initGameAreaInfo($operatorId,$gameAreaId);

				
			$sql = "
				select
					count(*)
				from
					`gmt_ban_chat` a
				where
                	a.`cid` = '{$userId}'
               	and
					a.`expire_time` > unix_timestamp(now())
			";
	
			if($this->gameDatabase->getColumn($sql) === '0') { 
				$this->setErrorCode(1010007);
			}
			else {
				
				$sql = "
					insert into
						`t_log_banned_chat`
					(
						`type`,
                                                `operatorId`,
						`gameAreaId`,
						`userId`,
                                                `unbannedDateTime`,
                                                `status`,
						`operatorUserId`,
						`operatorDateTime`,
						`reason`
					)
					value
					(
						'2',
                        '{$operatorId}',
						'{$gameAreaId}',
						'{$userId}',
                        now(),
                        '2',
						'{$this->currUserId}',
						now(),
						'{$reason}'
					)
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
		log_message('debug', '=====调用Role->Manage->unbannedChat接口结束=====');
	} 
}