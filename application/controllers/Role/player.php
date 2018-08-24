<?php
class Player extends MY_Controller
{
	public function __construct()
	{
		log_message('debug', '开始调用Role->Player->__construct接口');
		parent::__construct();
		$this->loadLanguageFile('application/controllers/Role/');
		log_message('debug', '调用Role->Player->__construct接口结束');
	}
	
	public function showView()
	{
		$this->load->view('module/Role/player.htm');
	}
	
	public function getListData()
	{
		log_message('debug', '开始调用Role->Player->getListData接口');
		$this->verifyPrivilege();
		
		try{
			$operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
                        $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1), 'post', true);
			$account = $this->param->getParam('account', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$roleName = $this->param->getParam('roleName', array(), 'post', true);
			$page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
			$this->initGameAreaInfo($operatorId,$gameAreaId);
			if( !$account && !$roleName ) {
				throw new Exception('', 202);
			}
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
                                where
                                        1 = 1
			";
                       
			if($account) {
				$sql .= " and b.`cid` = '{$account}'";
			}
			
			if($roleName) {
				$sql .= " and b.`name` = '{$roleName}'";
			}
			
			$getTotalSql = str_replace('<selectColumns>', "count(*)", $sql);
			$this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
			
			$getDataSql = str_replace('<selectColumns>', "b.`cid` as `角色id`,b.`sid` as `服务器id` ,b.`name` as `角色名`,b.`sex` as `性别`,b.`job` as `职业`,b.`level` as `等级`,g.`name` as `军团`,b.`mapid` as `地图id` ,b.`x` as `坐标x`,b.`y` as `坐标y`,FROM_UNIXTIME(b.`last_login_time`) as `最近登录`,FROM_UNIXTIME(e.`vipEndTime`) as `VIP到期` ,FROM_UNIXTIME(b.`create_time`) as `创建时间` ,a.`last_login_ip` as `最近登录ip`,FROM_UNIXTIME(a.`last_logout_time`) as `最近登出`,FROM_UNIXTIME(a.`total_online_time`) as `在线时间` ,b.`battle` as `战斗力` ,e.`level` as `vip等级`,a.`gold_pay_total` as `充值总元宝`,c.`money` as `铜钱` ,c.`gold` as `元宝`,c.`cash` as `绑元`,c.`vigour` as `元气`,c.`draw_score` as `血钻碎片`,c.`boss_score` as `BOSS积分`,c.`bind_money` as `绑定金币`,c.`honor` as `荣誉`,c.`ac_score` as `积分`,c.`contribution` as `军团贡献`,c.`blood` as `血岩碎片`,c.`dust` as `涅法雷姆经验`", $sql);
			

			if($page && $rows) {
				$startRow = ($page - 1) * $rows;
				$getDataSql .= " limit {$startRow}, {$rows}";
			}
			
			$this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                    
                        foreach ($this->returnData['data']['rows'] as $key =>$value){
                            if($this->returnData['data']['rows'][$key]['最近登录']<=$this->returnData['data']['rows'][$key]['最近登出']){
                                $this->returnData['data']['rows'][$key]['是否在线'] = '不在线';
                            }else{
                                $this->returnData['data']['rows'][$key]['是否在线'] = '在线';
                            }
                            if($this->returnData['data']['rows'][$key]['职业']==1){
                                $this->returnData['data']['rows'][$key]['职业'] = '战士';
                            }else if($this->returnData['data']['rows'][$key]['职业'] ==2){
                                $this->returnData['data']['rows'][$key]['职业'] = '法师';
                            }else if($this->returnData['data']['rows'][$key]['职业'] ==3){
                                $this->returnData['data']['rows'][$key]['职业'] = '刺客';
                            }
                            if($this->returnData['data']['rows'][$key]['性别']==1){
                                $this->returnData['data']['rows'][$key]['性别'] = '男';
                            }else if($this->returnData['data']['rows'][$key]['性别'] ==2){
                                $this->returnData['data']['rows'][$key]['性别'] = '女';
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
		log_message('debug', '调用Role->Player->getListData接口结束');
	}
}	