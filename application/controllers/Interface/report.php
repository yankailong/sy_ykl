<?php
class Report extends MY_Controller
{
    public function gameLog() {
        $returnData = array(
                'errno' => 0,
                'errmsg' => '操作成功',
                'data' => array(),
        );
		try {
            $stime=microtime(true); 
			$key = '271716eb57335eb9267f53479c0341e2';
			$post_data = $this->param->getParam('content',array());
            $cmd = $this->param->getParam('cmd', array('method' => 'string','emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
			$sign = $this->param->getParam('sign', array('method' => 'string', 'emptyErrorCode' => 1, 'invalidErrorCode' => 1),'get');
            $operatorFlag = $this->param->getParam('pkey', array('method' => 'string','emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
            
            $localSign = "{$post_data}{$key}";
            log_message('debug',"加密前localSign：{$localSign}");
            $localSign = md5($localSign);
            log_message('debug',"加密后localSign：{$localSign}");
			
			if($sign <> $localSign) {
				throw new Exception('校验签名错误',401);
			}
			
			$content = json_decode($post_data, true);
			if($content === false) {
				throw new Exception('数据格式错误');
			}
                        
            if($operatorFlag == 'wan'){
                $serverId = substr($content['target']['server_id'], 1);
            }else{
              $serverId = $content['target']['server_id'];
            }
			$sql="
                                select
                                        a.`gameAreaId`,a.`operatorId`
                                from
                                        `t_data_game_area` a
                                left join
                                        `t_data_operator`b
                                on
                                        a.`operatorId` = b.`operatorId`
                                where
                                        b.`operatorPkey` = '{$operatorFlag}'
                                        and
                                        a.`areaNum` = '{$serverId}'
                        ";
                        $gameAreaId = $this->gmDatabase->getRow($sql);
			switch ($cmd) {
				case 'send_notice':
                            if(strpos($content['cmd']['content'],'%s')==true){
                                $link = "|#ff0000|".$content['cmd']['link']."$11";
                                $link = html_entity_decode($link);
                                $contentInfo = str_replace('%s', $link, $content['cmd']['content']);
                            }else{
                              $contentInfo = $content['cmd']['content'];
                            }
                            $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                            $sql="
                                    insert into
                                            `gmt_broadcast` 
                                    set
                                            `type` = 6,
                                            `text` = '{$contentInfo}',
                                            `start_time` = unix_timestamp(now())+60,
                                            `interval` = 1,
                                            `creater` = '{$content['track']['oper']}',
                                            `times` = 1,
                                            `create_time` = '{$content['track']['ts']}'
                            ";
                            $this->gameDatabase->query($sql);   
					break;
					
				case 'online_user' :             
                    $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                    log_message('debug',"参数operatorId：{$gameAreaId['operatorId']}");   
                    log_message('debug',"参数gameAreaId：{$gameAreaId['gameAreaId']}");   
					$sql = "
                                                select
                                                        a.`passport` as `account_id`,b.`cid` as `role_id`,b.`name` as `role_name`,b.`level`,a.`last_login_ip` as `ip`
                                                from
                                                        `mem_character` b
                                                left join
                                                        `sys_user` a
                                                on
                                                        a.`uid` = b.`uid`
                                                        and
                                                        a.`sid` = b.`sid`
                                                where
                                                        a.`last_login_time`> a.`last_logout_time`
                                        ";
                                        $dataArray = $this->gameDatabase->getArray($sql);
                                        $returnData['data'] = $dataArray;
                    log_message('debug',"dataArray：{$dataArray}");  
					break;
					
				case 'online' :
                    $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                    log_message('debug',"参数operatorId：{$gameAreaId['operatorId']}");   
                    log_message('debug',"参数gameAreaId：{$gameAreaId['gameAreaId']}");  
					$sql = "
                                                select   `job1`   from   `log_report_minutly`   order   by   `time`   desc   limit   1
                                        ";
                                        $data = $this->gameDatabase->getColumn($sql);
                                        $returnData['data'] = $data;
                    log_message('debug',"dataArray：{$data}");                    
					break;
				case 'guild_list' :
                    $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
					$sql = "
                                                select
                                                        a.`id` as `guild_id`,
                                                        a.`name` as `guild_name`,
                                                        a.`leader_cid` as `guild_leader_role_id`,
                                                        b.`name` as `guild_leader_role_name`,
                                                        a.`create_time`,
                                                        a.`count` as `member_number`,
                                                        f.`countOnline` as `member_online`
                                                from
                                                        `mem_family` a
                                                left join
                                                        `mem_character` b
                                                on
                                                        a.`leader_cid` = b.`cid`
                                                left join
                                                (
                                                      select 
                                                            c.`family_id`,count(c.`cid`) as `countOnline`
                                                      from
                                                            `mem_chr_family` c
                                                      left join
                                                            `mem_character` d
                                                      on
                                                            c.`cid` = d.`cid`
                                                      where
                                                            d.`last_login_time`> d.`last_logout_time`
                                                      group by
                                                            c.`family_id`
                                                ) f
                                                on
                                                      a.`id` = f.`family_id`
                                        ";
                                        $data = $this->gameDatabase->getArray($sql);
                                        $returnData['data'] = $data;
					break;
                                case 'get_guild' :
                                        $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
					$sql = "
                                                select
                                                        a.`id` as `guild_id`,
                                                        a.`name` as `guild_name`,
                                                        a.`leader_cid` as `guild_leader_role_id`,
                                                        b.`name` as `guild_leader_role_name`,
                                                        a.`create_time`,
                                                        a.`count` as `member_number`,
                                                        f.`countOnline` as `member_online`
                                                from
                                                        `mem_family` a
                                                left join
                                                        `mem_character` b
                                                on
                                                        a.`leader_cid` = b.`cid`
                                                left join
                                                (
                                                      select 
                                                            c.`family_id`,count(c.`cid`) as `countOnline`
                                                      from
                                                            `mem_chr_family` c
                                                      left join
                                                            `mem_character` d
                                                      on
                                                            c.`cid` = d.`cid`
                                                      where
                                                            d.`last_login_time`> d.`last_logout_time`
                                                            
                                                ) f
                                                on
                                                      a.`id` = f.`family_id`
                                                where
                                                      a.`id` = '{$content['cmd']['guild_id']}'
                                        ";
                                        $data = $this->gameDatabase->getRow($sql);
                                        $returnData['data'] = $data;
					break;
                                case 'guild_member_list' :
                                        $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
					$sql = "
                                                select
                                                        a.`cid` as `role_id`,
                                                        b.`name` as `role_name`,
                                                        a.`enter_time` as `join_time`,
                                                        a.`leave_time`,
                                                        if(a.`leave_time`>0,'1','0') as `is_leave`,
                                                        if(a.`position`=3,'1','0') as `is_leader`,
                                                        if(b.`last_login_time`> b.`last_logout_time`,'1','0') as `is_online`
                                                from
                                                        `mem_chr_family` a
                                                left join
                                                        `mem_character` b
                                                on
                                                        a.`cid` = b.`cid`
                                                where
                                                      a.`family_id` = '{$content['cmd']['guild_id']}'
                                        ";
                                        $data = $this->gameDatabase->getArray($sql);
                                        $returnData['data'] = $data;
					break;
				case 'role_list' :
                                        $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                                        switch ($content['cmd']['key_type']){
                                                case 'role_name':
                                                        $sql = "
                                                               select
                                                                       a.`passport` as `account_id`,b.`cid` as `role_id`,b.`name` as `role_name`
                                                               from
                                                                       `mem_character` b
                                                               left join
                                                                       `sys_user` a
                                                               on
                                                                       a.`uid` = b.`uid`
                                                                       and
                                                                       a.`sid` = b.`sid`
                                                               where
                                                                       b.`name` like '%{$content['cmd']['key_word']}%'
                                                               limit
                                                                       0,100
                                                       ";
                                                       $dataArray = $this->gameDatabase->getArray($sql);
                                                       $returnData['data'] = $dataArray;
                                                break;
                                                case 'role_id':
                                                      $sql = "
                                                               select
                                                                       a.`passport` as `account_id`,b.`cid` as `role_id`,b.`name` as `role_name`
                                                               from
                                                                       `mem_character` b
                                                               left join
                                                                       `sys_user` a
                                                               on
                                                                       a.`uid` = b.`uid`
                                                                       and
                                                                       a.`sid` = b.`sid`
                                                               where
                                                                       b.`cid` like '%{$content['cmd']['key_word']}%'
                                                               limit
                                                                       0,100
                                                       ";
                                                       $dataArray = $this->gameDatabase->getArray($sql);
                                                       $returnData['data'] = $dataArray;  
                                                break;
                                                case 'account_id':
                                                      $sql = "
                                                               select
                                                                       a.`passport` as `account_id`,b.`cid` as `role_id`,b.`name` as `role_name`
                                                               from
                                                                       `mem_character` b
                                                               left join
                                                                       `sys_user` a
                                                               on
                                                                       a.`uid` = b.`uid`
                                                                       and
                                                                       a.`sid` = b.`sid`
                                                               where
                                                                       a.`passport` = '{$content['cmd']['key_word']}'
                                                       ";
                                                       $dataArray = $this->gameDatabase->getArray($sql);
                                                       $returnData['data'] = $dataArray;  
                                                break;
                                                case 'ip':
                                                      $sql = "
                                                               select
                                                                       a.`passport` as `account_id`,b.`cid` as `role_id`,b.`name` as `role_name`
                                                               from
                                                                       `mem_character` b
                                                               left join
                                                                       `sys_user` a
                                                               on
                                                                       a.`uid` = b.`uid`
                                                                       and
                                                                       a.`sid` = b.`sid`
                                                               where
                                                                       a.`last_login_ip` = '{$content['cmd']['key_word']}'
                                                                       and
                                                                       a.`last_login_time`> a.`last_logout_time`
                                                       ";
                                                       $dataArray = $this->gameDatabase->getArray($sql);
                                                       $returnData['data'] = $dataArray;
                                                break;
                                        }
                                        
					break;
					
				case 'chat_ban':
					$this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                                        $mark = substr($content['target']['role_id'], -1);
                                        if($mark==','){
                                          $role = substr($content['target']['role_id'],0, -1);
                                        }else{
                                          $role=$content['target']['role_id'];
                                        }
                                        $sql = "
                                                select
                                                        b.`cid`
                                                from
                                                        `mem_character` b
                                                left join
                                                        `sys_user` a
                                                on
                                                        a.`uid` = b.`uid`
                                                        and
                                                        a.`sid` = b.`sid`
                                                where
                                                        find_in_set(b.`cid`,'{$role}') 
                                        ";
                                        $cidArray = $this->gameDatabase->getArray($sql);
                                        switch ($content['cmd']['type']){
                                            case 1:
                                                for($i = 0;$i<count($cidArray);$i++){
                                                    $sql = "
                                                          insert into
                                                                  `gmt_ban_chat` 
                                                          set
                                                                  `cid` = '{$cidArray[$i]['cid']}',
                                                                  `operator` = '{$content['track']['oper']}',
                                                                  `expire_time` = '{$content['cmd']['time']}' + unix_timestamp(now()),
                                                                  `op_time` ='{$content['track']['ts']}',
                                                                  `reason` = '{$content['cmd']['reason']}',
                                                                  `flag` = 0
                                                          on duplicate key update
                                                                  `expire_time`='{$content['cmd']['time']}' + unix_timestamp(now()),
                                                                  `operator` = '{$content['track']['oper']}',
                                                                  `op_time`= '{$content['track']['ts']}',
                                                                  `flag`= '0'
                                                    ";
                                                    $this->gameDatabase->query($sql);
                                                }
                                                break;
                                            case 2:
                                                for($i = 0;$i<count($cidArray);$i++){
                                                    $sql = "
                                                          update
                                                                  `gmt_ban_chat`
                                                          set
                                                                  `expire_time` = unix_timestamp(now()),
                                                                  `operator` = '{$content['track']['oper']}',
                                                                  `op_time`= '{$content['track']['ts']}',
                                                                  `flag` = 0
                                                          where
                                                                  `cid` = '{$cidArray[$i]['cid']}'
                                                    ";
                                                    if(($this->gameDatabase->query($sql))===false){
                                                      throw new Exception("找不到这个人", 404);
                                                    }
                                                }
                                                break;
                                        }
					break;
					
				case 'lock_player' :
                    $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                                        $mark = substr($content['target']['role_id'], -1);
                                        if($mark==','){
                                          $role = substr($content['target']['role_id'],0, -1);
                                        }else{
                                          $role=$content['target']['role_id'];
                                        }
                                        $sql = "
                                                select
                                                        b.`cid`
                                                from
                                                        `mem_character` b
                                                left join
                                                        `sys_user` a
                                                on
                                                        a.`uid` = b.`uid`
                                                        and
                                                        a.`sid` = b.`sid`
                                                where
                                                        find_in_set(b.`cid`,'{$role}') 
                                        ";
                                        $cidArray = $this->gameDatabase->getArray($sql);
                                        switch ($content['cmd']['type']){                                           
                                            case 1:
                                                for($i = 0;$i<count($cidArray);$i++){
                                                    $sql = "
                                                          insert into
                                                                  `gmt_seal` 
                                                          set
                                                                  `cid` = '{$cidArray[$i]['cid']}',
                                                                  `operator` = '{$content['track']['oper']}',
                                                                  `expire_time` = '{$content['cmd']['time']}' + unix_timestamp(now()),
                                                                  `op_time` ='{$content['track']['ts']}',
                                                                  `reason` = '{$content['cmd']['reason']}',
                                                                  `flag` = 0,
                                                                  `seal_type` = 1,
                                                                  `type` = 1
                                                          on duplicate key update
                                                                  `expire_time`='{$content['cmd']['time']}' + unix_timestamp(now()),
                                                                  `operator` = '{$content['track']['oper']}',
                                                                  `reason` = '{$content['cmd']['reason']}',
                                                                  `op_time`= '{$content['track']['ts']}',
                                                                  `flag`= '0',
                                                                  `seal_type` = 1,
                                                                  `type` = 1
                                                    ";
                                                    $this->gameDatabase->query($sql);
                                                }
                                                break;
                                            case 2:
                                                for($i = 0;$i<count($cidArray);$i++){
                                                  
                                                            
                                                      $sql = "
                                                            update
                                                                    `gmt_seal`
                                                            set
                                                                    `expire_time` = unix_timestamp(now()),
                                                                    `operator` = '{$content['track']['oper']}',
                                                                    `op_time`= '{$content['track']['ts']}',
                                                                    `flag` = 0,
                                                                    `seal_type` = 0,
                                                                    `type` = 0
                                                            where
                                                                    `cid` = '{$cidArray[$i]['cid']}'
                                                      ";
                                                                                                     
                                                    if(($this->gameDatabase->query($sql))===false){
                                                        throw new Exception("未被手动封禁或者超出权限无法解封", 404);
                                                    }
                                                }
                                                break;
                                            
                                        }
                    break;
                    // a.`id`,b.`chineseValue` as `type`,a.`itemChineseName` as `name`,a.`price`,a.`description`   原版
				case 'prop_list': 
                                        $sql="
                                            select
                                                   concat(`itemType`,':',`itemId`) as `id`,b.`chineseValue` as `type`,a.`itemChineseName` as `name`,a.`price`,a.`description`
                                            from
                                                    `t_cfg_item` a 
                                            left join
                                                    `t_cfg_item_type`b
                                            on
                                                    a.`itemType` = b.`type` 
                                        ";
                                        $listArray = $this->gmDatabase->getArray($sql);
                                        $returnData['data'] = $listArray;  
                                        break;
                                case 'send_mail':
                                        $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                                        switch ($content['target']['status']){
                                            case 'all':
                                              $this->gameDatabase->openAutoCommit();
                                                  $whereCondition = "1=1"; 
                                                  
                                                  if($content['cmd']['prop'] || $content['cmd']['coin']) {
                                                          if(@$content['cmd']['prop']){
                                                                  $prop = $content['cmd']['prop'];
                                                                  $propCount=array();
                                                                  foreach ($prop as $k=>$val){
                                                                    $sql = "
                                                                            select
                                                                                    `itemId`,`itemType`
                                                                            from
                                                                                    `t_cfg_item` 
                                                                            where
                                                                                    concat(`itemType`,':',`itemId`) = '{$k}' 
                                                                    ";
                                                                    // where
                                                                    //                 `id` = '{$k}' 
                                                                    $propArray = $this->gmDatabase->getRow($sql);
                                                                    $propArray['num']= $val['num'];
                                                                    $propArray['bind']=$val['att']['bind'];
                                                                    array_push($propCount, $propArray);
                                                                  }
                                                                  for($i = 0; $i < count($propCount); $i = $i + 5 ) {
                                                                            $columns = "`SysMailId`,`SenderName`,`ReceiveId`,`Extract`, `ReceiveName`, `MailTitle`, `MailContent`, `reason`,`SendTime`, `DelFlag`";
                                                                            $values = "'-10000','{$content['track']['oper']}', `cid`,  1,`name`, '{$content['cmd']['title']}', '{$content['cmd']['content']}','2','{$content['track']['ts']}', '0'";

                                                                            for($j = 1; $j <= 5; $j++) {
                                                                                    $columns .= ",`Item{$j}`";
                                                                                    if($propCount[$i+$j-1]['bind']==0){
                                                                                        $values .= ",'{$propCount[$i+$j-1]['itemId']}:{$propCount[$i+$j-1]['itemType']}:{$propCount[$i+$j-1]['num']}:1:0:0'";
                                                                                    }else{
                                                                                         $values .= ",'{$propCount[$i+$j-1]['itemId']}:{$propCount[$i+$j-1]['itemType']}:{$propCount[$i+$j-1]['num']}:0:0:0'";
                                                                                    }
                                                                                    if($i + $j == count($propCount)) {
                                                                                            break;
                                                                                    }
                                                                            }
                                                                            $sql = "
                                                                                    insert into
                                                                                            `mem_mail`
                                                                                    (
                                                                                            {$columns}
                                                                                    )
                                                                                    select
                                                                                            {$values}
                                                                                    from
                                                                                            `mem_character`
                                                                                    where
                                                                                            {$whereCondition}
                                                                            ";
                                                                            $this->gameDatabase->query($sql);                  
                                                                    }
                                                          }
                                                          if(@$content['cmd']['coin']){
                                                                    $coin = $content['cmd']['coin'];
                                                                   $coinArray = array();
                                                                    foreach($content['cmd']['coin'] as $k=>$val){
                                                                            $coinArray[]=array($k,$val);
                                                                    }
                                                                    for($i = 0; $i < count($coinArray); $i = $i + 5 ) {
                                                                            $columns = "`SysMailId`,`SenderName`,`ReceiveId`,`Extract`, `ReceiveName`, `MailTitle`, `MailContent`,`reason`,`SendTime`, `DelFlag`";
                                                                            $values = "'-10000','{$content['track']['oper']}', `cid`, 1,`name`, '{$content['cmd']['title']}', '{$content['cmd']['content']}','2','{$content['track']['ts']}', '0'";

                                                                            for($j = 1; $j <= 5; $j++) {
                                                                                    $columns .= ",`Item{$j}`";
                                                                                    $values .= ",'{$coinArray[$i+$j-1][0]}:4:{$coinArray[$i+$j-1][1]}:0:0:0'";

                                                                                    if($i + $j == count($coinArray)) {
                                                                                            break;
                                                                                    }
                                                                            }
                                                                            $sql = "
                                                                                     insert into
                                                                                            `mem_mail`
                                                                                    (
                                                                                            {$columns}
                                                                                    )
                                                                                    select
                                                                                            {$values}
                                                                                    from
                                                                                            `mem_character`
                                                                                    where
                                                                                            {$whereCondition}
                                                                            ";
                                                                            $this->gameDatabase->query($sql);                
                                                                    }
                                                          }
                                                              
                                                              
                                                              
                                                    }else{
                                                            $sql = "
                                                                    insert into
                                                                            `mem_mail`
                                                                    (
                                                                            `SysMailId`,`SenderName`,`ReceiveId`, `ReceiveName`, `MailTitle`, `MailContent`,`reason`,`SendTime`, `DelFlag`
                                                                    )
                                                                    select
                                                                            '-10000','{$content['track']['oper']}',`cid`, `name`,'{$content['cmd']['title']}','{$content['cmd']['content']}','2', '{$content['track']['ts']}',0
                                                                    from
                                                                            `mem_character`
                                                                    where
                                                                            {$whereCondition}
                                                            ";
                                                            
                                                            $this->gameDatabase->query($sql);   
                                                  }
                                                  $this->gameDatabase->commit();
                                                  $this->gameDatabase->closeAutoCommit();
                                                  break;
                                            case 'online':
                                                  $this->gameDatabase->openAutoCommit();
                                                  $whereCondition = " `last_login_time`> `last_logout_time`"; 
                                                  if($content['cmd']['prop'] || $content['cmd']['coin']) {
                                                          if(@$content['cmd']['prop']){
                                                                  $prop = $content['cmd']['prop'];
                                                                  $propCount=array();
                                                                  foreach ($prop as $k=>$val){
                                                                    $sql = "
                                                                            select
                                                                                    `itemId`,`itemType`
                                                                            from
                                                                                    `t_cfg_item` 
                                                                            where
                                                                                    
                                                                                    concat(`itemType`,':',`itemId`) = '{$k}'
                                                                    ";
                                                                    // `id` = '{$k}' 
                                                                    $propArray = $this->gmDatabase->getRow($sql);
                                                                    $propArray['num']= $val['num'];
                                                                    $propArray['bind']=$val['att']['bind'];
                                                                    array_push($propCount, $propArray);
                                                                  }
                                                                  for($i = 0; $i < count($propCount); $i = $i + 5 ) {
                                                                            $columns = "`SysMailId`,`SenderName`, `ReceiveId`,`Extract`,`ReceiveName`, `MailTitle`, `MailContent`, `reason`,`SendTime`, `DelFlag`";
                                                                            $values = "'-10000','{$content['track']['oper']}',`cid`,1, `name`, '{$content['cmd']['title']}', '{$content['cmd']['content']}','2','{$content['track']['ts']}', '0'";

                                                                            for($j = 1; $j <= 5; $j++) {
                                                                                    $columns .= ",`Item{$j}`";
                                                                                   if($propCount[$i+$j-1]['bind']==0){
                                                                                        $values .= ",'{$propCount[$i+$j-1]['itemId']}:{$propCount[$i+$j-1]['itemType']}:{$propCount[$i+$j-1]['num']}:1:0:0'";
                                                                                    }else{
                                                                                         $values .= ",'{$propCount[$i+$j-1]['itemId']}:{$propCount[$i+$j-1]['itemType']}:{$propCount[$i+$j-1]['num']}:0:0:0'";
                                                                                    }

                                                                                    if($i + $j == count($propCount)) {
                                                                                            break;
                                                                                    }
                                                                            }
                                                                            $sql = "
                                                                                    insert into
                                                                                            `mem_mail`
                                                                                    (
                                                                                            {$columns}
                                                                                    )
                                                                                    select
                                                                                            {$values}
                                                                                    from
                                                                                            `mem_character`
                                                                                    where
                                                                                            {$whereCondition}
                                                                            ";
                                                                            $this->gameDatabase->query($sql);                  
                                                                    }
                                                          }
                                                          if(@$content['cmd']['coin']){
                                                                    $coin = $content['cmd']['coin'];
                                                                    $coinArray = array();
                                                                    foreach($content['cmd']['coin'] as $k=>$val){
                                                                            $coinArray[]=array($k,$val);
                                                                    }
                                                                    for($i = 0; $i < count($coinArray); $i = $i + 5 ) {
                                                                            $columns = "`SysMailId`,`SenderName`,`ReceiveId`, `ReceiveName`,`Extract`, `MailTitle`, `MailContent`,`reason`, `SendTime`, `DelFlag`";
                                                                            $values = "'-10000','{$content['track']['oper']}',  `cid`, `name`, 1,'{$content['cmd']['title']}', '{$content['cmd']['content']}','2','{$content['track']['ts']}', '0'";

                                                                            for($j = 1; $j <= 5; $j++) {
                                                                                    $columns .= ",`Item{$j}`";
                                                                                    $values .= ",'{$coinArray[$i+$j-1][0]}:4:{$coinArray[$i+$j-1][1]}:0:0:0'";

                                                                                    if($i + $j == count($coinArray)) {
                                                                                            break;
                                                                                    }
                                                                            }
                                                                            $sql = "
                                                                                    insert into
                                                                                            `mem_mail`
                                                                                    (
                                                                                            {$columns}
                                                                                    )
                                                                                    select
                                                                                            {$values}
                                                                                    from
                                                                                            `mem_character`
                                                                                    where
                                                                                            {$whereCondition}
                                                                            ";
                                                                            $this->gameDatabase->query($sql);                
                                                                    }
                                                          }



                                                  }else{
                                                          $sql = "
                                                                  insert into
                                                                            `mem_mail`
                                                                    (
                                                                            `SysMailId`,`SenderName`,`ReceiveId`, `ReceiveName`, `MailTitle`, `MailContent`,`reason`,`SendTime`, `DelFlag`
                                                                    )
                                                                    select
                                                                            '-10000','{$content['track']['oper']}',`cid`, `name`,'{$content['cmd']['title']}','{$content['cmd']['content']}','2', '{$content['track']['ts']}',0
                                                                    from
                                                                            `mem_character`
                                                                    where
                                                                            {$whereCondition}
                                                          ";
                                                          $this->gameDatabase->query($sql);   
                                                  }
                                                  $this->gameDatabase->commit();
                                                  $this->gameDatabase->closeAutoCommit();
                                                  break;
                                            case 'role_id':
                                                  $this->gameDatabase->openAutoCommit();
                                                  $cidArray = explode(",", $content['target']['role_id']);
                                                  $whereCondition =" `cid` is null";
                                                  for($i=0;$i<count($cidArray);$i++){
                                                     $whereCondition.=" or `cid` = '{$cidArray[$i]}'";
                                                  }
                                                  if($content['cmd']['prop'] || $content['cmd']['coin']) {
                                                          if(@$content['cmd']['prop']){
                                                                  $prop = $content['cmd']['prop'];
                                                                  $propCount=array();
                                                                  foreach ($prop as $k=>$val){
                                                                    $sql = "
                                                                            select
                                                                                    `itemId`,`itemType`
                                                                            from
                                                                                    `t_cfg_item` 
                                                                            where
                                                                                    concat(`itemType`,':',`itemId`) = '{$k}' 
                                                                    ";
                                                                    // `id` = '{$k}' 
                                                                    $propArray = $this->gmDatabase->getRow($sql);
                                                                    $propArray['num']= $val['num'];
                                                                    $propArray['bind']=$val['att']['bind'];
                                                                    array_push($propCount, $propArray);
                                                                  }
                                                                  for($i = 0; $i < count($propCount); $i = $i + 5 ) {
                                                                            $columns = "`SysMailId`,`SenderName`, `ReceiveId`,`Extract`,`ReceiveName`, `MailTitle`, `MailContent`,`reason`, `SendTime`, `DelFlag`";
                                                                            $values = "'-10000','{$content['track']['oper']}', `cid`,1, `name`, '{$content['cmd']['title']}', '{$content['cmd']['content']}','2','{$content['track']['ts']}', '0'";

                                                                            for($j = 1; $j <= 5; $j++) {
                                                                                    $columns .= ",`Item{$j}`";
                                                                                   if($propCount[$i+$j-1]['bind']==0){
                                                                                        $values .= ",'{$propCount[$i+$j-1]['itemId']}:{$propCount[$i+$j-1]['itemType']}:{$propCount[$i+$j-1]['num']}:1:0:0'";
                                                                                    }else{
                                                                                         $values .= ",'{$propCount[$i+$j-1]['itemId']}:{$propCount[$i+$j-1]['itemType']}:{$propCount[$i+$j-1]['num']}:0:0:0'";
                                                                                    }

                                                                                    if($i + $j == count($propCount)) {
                                                                                            break;
                                                                                    }
                                                                            }
                                                                            $sql = "
                                                                                    insert into
                                                                                            `mem_mail`
                                                                                    (
                                                                                            {$columns}
                                                                                    )
                                                                                    select
                                                                                            {$values}
                                                                                    from
                                                                                            `mem_character`
                                                                                    where
                                                                                            {$whereCondition}
                                                                            ";
                                                                            $this->gameDatabase->query($sql);                  
                                                                    }
                                                          }
                                                          if(@$content['cmd']['coin']){
                                                                    $coin = $content['cmd']['coin'];
                                                                    $coinArray = array();
                                                                    foreach($content['cmd']['coin'] as $k=>$val){
                                                                            $coinArray[]=array($k,$val);
                                                                    }
                                                                    for($i = 0; $i < count($coinArray); $i = $i + 5 ) {
                                                                            $columns = "`SysMailId`,`SenderName`,`ReceiveId`,`Extract`, `ReceiveName`, `MailTitle`, `MailContent`, `reason`,`SendTime`, `DelFlag`";
                                                                            $values = "'-10000','{$content['track']['oper']}',  `cid`,1, `name`, '{$content['cmd']['title']}', '{$content['cmd']['content']}','2','{$content['track']['ts']}', '0'";

                                                                            for($j = 1; $j <= 5; $j++) {
                                                                                    $columns .= ",`Item{$j}`";
                                                                                    $values .= ",'{$coinArray[$i+$j-1][0]}:4:{$coinArray[$i+$j-1][1]}:0:0:0'";


                                                                                    if($i + $j == count($coinArray)) {
                                                                                            break;
                                                                                    }
                                                                            }
                                                                            $sql = "
                                                                                    insert into
                                                                                            `mem_mail`
                                                                                    (
                                                                                            {$columns}
                                                                                    )
                                                                                    select
                                                                                            {$values}
                                                                                    from
                                                                                            `mem_character`
                                                                                    where
                                                                                            {$whereCondition}
                                                                            ";
                                                                            $this->gameDatabase->query($sql);                
                                                                    }
                                                          }



                                                  }else{
                                                          $sql = "
                                                                  insert into
                                                                            `mem_mail`
                                                                    (
                                                                            `SysMailId`,`SenderName`,`ReceiveId`, `ReceiveName`, `MailTitle`, `MailContent`,`reason`,`SendTime`, `DelFlag`
                                                                    )
                                                                    select
                                                                            '-10000','{$content['track']['oper']}',`cid`, `name`,'{$content['cmd']['title']}','{$content['cmd']['content']}','2', '{$content['track']['ts']}',0
                                                                    from
                                                                            `mem_character`
                                                                    where
                                                                            {$whereCondition}
                                                          ";
                                                          $this->gameDatabase->query($sql);                
                                                  }
                                                  $this->gameDatabase->commit();
                                                  $this->gameDatabase->closeAutoCommit();
                                              }
                                              break;
                                        break;
                                case 'gm_list':
                                        $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                                        $sql="
                                            select
                                                    a.`passport` as `account_id`,b.`cid` as `role_id`,b.`name` as `role_name`,a.`type` as `gm_level`
                                            from
                                                    `mem_character` b
                                            left join
                                                    `sys_user` a
                                            on
                                                    a.`uid` = b.`uid`
                                                    and
                                                    a.`sid` = b.`sid`
                                            where
                                                    a.`type`>0
                                        ";
                                        $gmInfo = $this->gameDatabase->getArray($sql);          
                                        $returnData['data'] = $gmInfo;
                                        break;
                                case 'plugin_query':
                                        $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                                        $sql="
                                              select
                                                    sum(case when a.`process`='201' and a.`isWeiduan` = '0' then a.`count` end) as `web201`,
                                                    sum(case when a.`process`='101' and a.`isWeiduan` = '0' then a.`count` end) as `web101`,
                                                    sum(case when a.`process`='301' and a.`isWeiduan` = '0' then a.`count` end) as `web301`,
                                                    sum(case when a.`process`='399' and a.`isWeiduan` = '0' then a.`count` end) as `web399`,
                                                    sum(case when a.`process`='100' and a.`isWeiduan` = '0' then a.`count` end) as `web100`,
                                                    sum(case when a.`process`='102' and a.`isWeiduan` = '0' then a.`count` end) as `web102`,
                                                    sum(case when a.`process`='401' and a.`isWeiduan` = '0' then a.`count` end) as `web401`,
                                                    sum(case when a.`process`='499' and a.`isWeiduan` = '0' then a.`count` end) as `web499`,
                                                    sum(case when a.`process`='500' and a.`isWeiduan` = '0' then a.`count` end) as `web500`,
                                                    sum(case when a.`process`='600' and a.`isWeiduan` = '0' then a.`count` end) as `web600`,
                                                    sum(case when a.`process`='201' and a.`isWeiduan` = '1' then a.`count` end) as `weiduan201`,
                                                    sum(case when a.`process`='101' and a.`isWeiduan` = '1' then a.`count` end) as `weiduan101`,
                                                    sum(case when a.`process`='301' and a.`isWeiduan` = '1' then a.`count` end) as `weiduan301`,
                                                    sum(case when a.`process`='399' and a.`isWeiduan` = '1' then a.`count` end) as `weiduan399`,
                                                    sum(case when a.`process`='100' and a.`isWeiduan` = '1' then a.`count` end) as `weiduan100`,
                                                    sum(case when a.`process`='102' and a.`isWeiduan` = '1' then a.`count` end) as `weiduan102`,
                                                    sum(case when a.`process`='401' and a.`isWeiduan` = '1' then a.`count` end) as `weiduan401`,
                                                    sum(case when a.`process`='499' and a.`isWeiduan` = '1' then a.`count` end) as `weiduan499`,
                                                    sum(case when a.`process`='500' and a.`isWeiduan` = '1' then a.`count` end) as `weiduan500`,
                                                    sum(case when a.`process`='600' and a.`isWeiduan` = '1' then a.`count` end) as `weiduan600`
                                              from
                                              (
                                                    select
                                                            `process` ,count(distinct(`uid`)) as `count`,`isWeiduan`
                                                    from
                                                            `log_create_process` 
                                                    where
                                                            `time`>'{$content['cmd']['start_time']}'
                                                            and
                                                            `time`<'{$content['cmd']['end_time']}'
                                                    group by `process`,`isWeiduan`
                                              ) a
                                        ";
                                        
                                        $count = $this->gameDatabase->getRow($sql);
                                        $totalPeople = $count['web201']+$count['weiduan201'];
                                        $tem = array();
                                        for($i=0;$i<10;$i++){
                                          $processArray = array();
                                          $processArray['id'] = $i+1;
                                          
                                          switch ($processArray['id']){
                                              case 1:
                                                  $processArray['control'] = '程序启动';
                                                  $processArray['no_channel'] = array('people'=>$count['web201'],'pass_rate'=>'100%', 'all_pass_rate'=> '100%');
                                                  $processArray['have_micro'] = array('people'=>$count['weiduan201'],'pass_rate'=>'100%', 'all_pass_rate'=> '100%');
                                                  $processArray['total'] = array('people'=>$totalPeople,'pass_rate'=>'100%', 'all_pass_rate'=> '100%');
                                                break;
                                              case 2:
                                                  $processArray['control'] = '用户请求创角';
                                                  $total = $count['weiduan101']+$count['web101'];
                                                  if($totalPeople<1){
                                                    $channelAll = '0%';
                                                    $microAll = '0%';
                                                    $microPass = '0%';
                                                    $channelPass = '0%';
                                                    $totalAll = '0%';
                                                    $totalPass = '0%';
                                                  }else{
                                                    if($count['web201']<1){
                                                      $channelPass = '0%';
                                                      $channelAll = '0%';
                                                    }else{
                                                      $channelPass = round(($count['web101']/$count['web201']*100),2).'%';
                                                      $channelAll = round(($count['web101']/$count['web201']*100),2).'%';
                                                    }
                                                    if($count['weiduan201']<1){
                                                      $microPass = '0%';
                                                      $microAll = '0%';
                                                    }else{
                                                      $microPass = round(($count['weiduan101']/$count['weiduan201']*100),2).'%';
                                                      $microAll = round(($count['weiduan101']/$count['weiduan201']*100),2).'%';
                                                    }
                                                    $totalPass = round(($total/($count['web201']+$count['weiduan201'])*100),2).'%';
                                                    $totalAll = round(($total/$totalPeople*100),2).'%';
                                                  }
                                                  $processArray['no_channel'] = array('people'=>$count['web101'],'pass_rate'=>$channelPass, 'all_pass_rate'=>$channelAll);
                                                  $processArray['have_micro'] = array('people'=>$count['weiduan101'],'pass_rate'=>$microPass, 'all_pass_rate'=>$microAll);
                                                  $processArray['total'] = array('people'=>$total,'pass_rate'=>$totalPass, 'all_pass_rate'=> $totalAll);
                                                break;
                                              case 3:
                                                  $processArray['control'] = '开始加载创建角色界面';
                                                  $total = $count['weiduan301']+$count['web301'];
                                                  $total101 = $count['web101']+$count['weiduan101'];
                                                  if($totalPeople<1){
                                                    $channelAll = '0%';
                                                    $microAll = '0%';
                                                    $microPass = '0%';
                                                    $channelPass = '0%';
                                                    $totalAll = '0%';
                                                    $totalPass = '0%';
                                                  }else{
                                                    $totalAll = round(($total/$totalPeople*100),2).'%';
                                                  }
                                                  if($count['web201']<1){
                                                      $channelPass = '0%';
                                                      $channelAll = '0%';
                                                  }else{
                                                      if($count['web101']>0){
                                                        $channelPass = round(($count['web301']/$count['web101']*100),2).'%';
                                                      }else{
                                                        $channelPass = '0%';
                                                      }
                                                      $channelAll = round(($count['web301']/$count['web201']*100),2).'%';
                                                  }
                                                  if($count['weiduan201']<1){
                                                    $microPass = '0%';
                                                    $microAll = '0%';
                                                  }else{
                                                    if($count['weiduan101']>0){
                                                      $microPass = round(($count['weiduan301']/$count['weiduan101']*100),2).'%';
                                                    }else{
                                                      $microPass = '0%';
                                                    }
                                                    $microAll = round(($count['weiduan301']/$count['weiduan201']*100),2).'%';
                                                  }
                                                  if($total101>0){
                                                    $totalPass = round(($total/($total101)*100),2).'%';
                                                  }
                                                  $processArray['no_channel'] = array('people'=>$count['web301'],'pass_rate'=>$channelPass, 'all_pass_rate'=>$channelAll);
                                                  $processArray['have_micro'] = array('people'=>$count['weiduan301'],'pass_rate'=>$microPass, 'all_pass_rate'=>$microAll);
                                                  $processArray['total'] = array('people'=>$total,'pass_rate'=>$totalPass, 'all_pass_rate'=> $totalAll);
                                                break;
                                              case 4:
                                                  $processArray['control'] = '加载创建角色界面完成';
                                                  $total = $count['weiduan399']+$count['web399'];
                                                  $total301 = $count['web301']+$count['weiduan301'];
                                                  if($totalPeople<1){
                                                    $channelAll = '0%';
                                                    $microAll = '0%';
                                                    $microPass = '0%';
                                                    $channelPass = '0%';
                                                    $totalAll = '0%';
                                                    $totalPass = '0%';
                                                  }else{
                                                    $totalAll = round(($total/$totalPeople*100),2).'%';
                                                  }
                                                  if($count['web201']<1){
                                                      $channelPass = '0%';
                                                      $channelAll = '0%';
                                                  }else{
                                                      if($count['web301']>0){
                                                        $channelPass = round(($count['web399']/$count['web301']*100),2).'%';
                                                      }else{
                                                        $channelPass = '0%';
                                                      }
                                                      $channelAll = round(($count['web399']/$count['web201']*100),2).'%';
                                                  }
                                                  if($count['weiduan201']<1){
                                                    $microPass = '0%';
                                                    $microAll = '0%';
                                                  }else{
                                                    if($count['weiduan301']>0){
                                                      $microPass = round(($count['weiduan399']/$count['weiduan301']*100),2).'%';
                                                    }else{
                                                      $microPass = '0%';
                                                    }
                                                    $microAll = round(($count['weiduan399']/$count['weiduan201']*100),2).'%';
                                                  }
                                                  if($total301>0){
                                                    $totalPass = round(($total/($total301)*100),2).'%';
                                                  }
                                                  $processArray['no_channel'] = array('people'=>$count['web399'],'pass_rate'=>$channelPass, 'all_pass_rate'=>$channelAll);
                                                  $processArray['have_micro'] = array('people'=>$count['weiduan399'],'pass_rate'=>$microPass, 'all_pass_rate'=>$microAll);
                                                  $processArray['total'] = array('people'=>$total,'pass_rate'=>$totalPass, 'all_pass_rate'=> $totalAll);
                                                break;
                                              case 5:
                                                  $processArray['control'] = '创角成功';
                                                  $total = $count['weiduan100']+$count['web100'];
                                                  $total399 = $count['web399']+$count['weiduan399'];
                                                  if($totalPeople<1){
                                                    $channelAll = '0%';
                                                    $microAll = '0%';
                                                    $microPass = '0%';
                                                    $channelPass = '0%';
                                                    $totalAll = '0%';
                                                    $totalPass = '0%';
                                                  }else{
                                                    $totalAll = round(($total/$totalPeople*100),2).'%';
                                                  }
                                                  if($count['web201']<1){
                                                      $channelPass = '0%';
                                                      $channelAll = '0%';
                                                  }else{
                                                      if($count['web399']>0){
                                                        $channelPass = round(($count['web100']/$count['web399']*100),2).'%';
                                                      }else{
                                                        $channelPass = '0%';
                                                      }
                                                      $channelAll = round(($count['web100']/$count['web201']*100),2).'%';
                                                  }
                                                  if($count['weiduan201']<1){
                                                    $microPass = '0%';
                                                    $microAll = '0%';
                                                  }else{
                                                    if($count['weiduan399']>0){
                                                      $microPass = round(($count['weiduan100']/$count['weiduan399']*100),2).'%';
                                                    }else{
                                                      $microPass = '0%';
                                                    }
                                                    $microAll = round(($count['weiduan100']/$count['weiduan201']*100),2).'%';
                                                  }
                                                  if($total399>0){
                                                    $totalPass = round(($total/($total399)*100),2).'%';
                                                  }
                                                  $processArray['no_channel'] = array('people'=>$count['web100'],'pass_rate'=>$channelPass, 'all_pass_rate'=>$channelAll);
                                                  $processArray['have_micro'] = array('people'=>$count['weiduan100'],'pass_rate'=>$microPass, 'all_pass_rate'=>$microAll);
                                                  $processArray['total'] = array('people'=>$total,'pass_rate'=>$totalPass, 'all_pass_rate'=> $totalAll);
                                                break;
                                              case 6:
                                                  $processArray['control'] = '老用户登录成功';
                                                  $total = $count['weiduan102']+$count['web102'];
                                                  $total100 = $count['web100']+$count['weiduan100'];
                                                  if($totalPeople<1){
                                                    $channelAll = '0%';
                                                    $microAll = '0%';
                                                    $microPass = '0%';
                                                    $channelPass = '0%';
                                                    $totalAll = '0%';
                                                    $totalPass = '0%';
                                                  }else{
                                                    $totalAll = round(($total/$totalPeople*100),2).'%';
                                                  }
                                                  if($count['web100']<1){
                                                      $channelPass = '0%';
                                                      $channelAll = '0%';
                                                  }else{
                                                      if($count['web100']>0){
                                                        $channelPass = round(($count['web102']/$count['web100']*100),2).'%';
                                                      }else{
                                                        $channelPass = '0%';
                                                      }
                                                      $channelAll = round(($count['web102']/$count['web100']*100),2).'%';
                                                  }
                                                  if($count['weiduan100']<1){
                                                    $microPass = '0%';
                                                    $microAll = '0%';
                                                  }else{
                                                    if($count['weiduan100']>0){
                                                      $microPass = round(($count['weiduan102']/$count['weiduan100']*100),2).'%';
                                                    }else{
                                                      $microPass = '0%';
                                                    }
                                                    $microAll = round(($count['weiduan102']/$count['weiduan100']*100),2).'%';
                                                  }
                                                  if($total100>0){
                                                    $totalPass = round(($total/($total100)*100),2).'%';
                                                  }
                                                  $processArray['no_channel'] = array('people'=>$count['web102'],'pass_rate'=>$channelPass, 'all_pass_rate'=>$channelAll);
                                                  $processArray['have_micro'] = array('people'=>$count['weiduan102'],'pass_rate'=>$microPass, 'all_pass_rate'=>$microAll);
                                                  $processArray['total'] = array('people'=>$total,'pass_rate'=>$totalPass, 'all_pass_rate'=> $totalAll);
                                                break;
                                              case 7:
                                                  $processArray['control'] = '开始加载游戏主程序';
                                                  $total = $count['weiduan401']+$count['web401'];
                                                  $total102 = $count['web102']+$count['weiduan102'];
                                                  if($totalPeople<1){
                                                    $channelAll = '0%';
                                                    $microAll = '0%';
                                                    $microPass = '0%';
                                                    $channelPass = '0%';
                                                    $totalAll = '0%';
                                                    $totalPass = '0%';
                                                  }else{
                                                    $totalAll = round(($total/$totalPeople*100),2).'%';
                                                  }
                                                  if($count['web201']<1){
                                                      $channelPass = '0%';
                                                      $channelAll = '0%';
                                                  }else{
                                                      if($count['web102']>0){
                                                        $channelPass = round(($count['web401']/$count['web102']*100),2).'%';
                                                      }else{
                                                        $channelPass = '0%';
                                                      }
                                                      $channelAll = round(($count['web401']/$count['web201']*100),2).'%';
                                                  }
                                                  if($count['weiduan201']<1){
                                                    $microPass = '0%';
                                                    $microAll = '0%';
                                                  }else{
                                                    if($count['weiduan102']>0){
                                                      $microPass = round(($count['weiduan401']/$count['weiduan102']*100),2).'%';
                                                    }else{
                                                      $microPass = '0%';
                                                    }
                                                    $microAll = round(($count['weiduan401']/$count['weiduan201']*100),2).'%';
                                                  }
                                                  if($total102>0){
                                                    $totalPass = round(($total/($total102)*100),2).'%';
                                                  }
                                                  $processArray['no_channel'] = array('people'=>$count['web401'],'pass_rate'=>$channelPass, 'all_pass_rate'=>$channelAll);
                                                  $processArray['have_micro'] = array('people'=>$count['weiduan401'],'pass_rate'=>$microPass, 'all_pass_rate'=>$microAll);
                                                  $processArray['total'] = array('people'=>$total,'pass_rate'=>$totalPass, 'all_pass_rate'=> $totalAll);
                                                break;
                                              case 8:
                                                  $processArray['control'] = '加载游戏主程序完成';
                                                  $total = $count['weiduan499']+$count['web499'];
                                                  $total401 = $count['web401']+$count['weiduan401'];
                                                  if($totalPeople<1){
                                                    $channelAll = '0%';
                                                    $microAll = '0%';
                                                    $microPass = '0%';
                                                    $channelPass = '0%';
                                                    $totalAll = '0%';
                                                    $totalPass = '0%';
                                                  }else{
                                                    $totalAll = round(($total/$totalPeople*100),2).'%';
                                                  }
                                                  if($count['web201']<1){
                                                      $channelPass = '0%';
                                                      $channelAll = '0%';
                                                  }else{
                                                      if($count['web401']>0){
                                                        $channelPass = round(($count['web499']/$count['web401']*100),2).'%';
                                                      }else{
                                                        $channelPass = '0%';
                                                      }
                                                      $channelAll = round(($count['web499']/$count['web201']*100),2).'%';
                                                  }
                                                  if($count['weiduan201']<1){
                                                    $microPass = '0%';
                                                    $microAll = '0%';
                                                  }else{
                                                    if($count['weiduan401']>0){
                                                      $microPass = round(($count['weiduan499']/$count['weiduan401']*100),2).'%';
                                                    }else{
                                                      $microPass = '0%';
                                                    }
                                                    $microAll = round(($count['weiduan499']/$count['weiduan201']*100),2).'%';
                                                  }
                                                  if($total401>0){
                                                    $totalPass = round(($total/($total401)*100),2).'%';
                                                  }
                                                  $processArray['no_channel'] = array('people'=>$count['web499'],'pass_rate'=>$channelPass, 'all_pass_rate'=>$channelAll);
                                                  $processArray['have_micro'] = array('people'=>$count['weiduan499'],'pass_rate'=>$microPass, 'all_pass_rate'=>$microAll);
                                                  $processArray['total'] = array('people'=>$total,'pass_rate'=>$totalPass, 'all_pass_rate'=> $totalAll);
                                                break;
                                              case 9:
                                                  $processArray['control'] = '成功连接服务器';
                                                  $total = $count['weiduan500']+$count['web500'];
                                                  $total499 = $count['web499']+$count['weiduan499'];
                                                  if($totalPeople<1){
                                                    $channelAll = '0%';
                                                    $microAll = '0%';
                                                    $microPass = '0%';
                                                    $channelPass = '0%';
                                                    $totalAll = '0%';
                                                    $totalPass = '0%';
                                                  }else{
                                                    $totalAll = round(($total/$totalPeople*100),2).'%';
                                                  }
                                                  if($count['web201']<1){
                                                      $channelPass = '0%';
                                                      $channelAll = '0%';
                                                  }else{
                                                      if($count['web499']>0){
                                                        $channelPass = round(($count['web500']/$count['web499']*100),2).'%';
                                                      }else{
                                                        $channelPass = '0%';
                                                      }
                                                      $channelAll = round(($count['web500']/$count['web201']*100),2).'%';
                                                  }
                                                  if($count['weiduan201']<1){
                                                    $microPass = '0%';
                                                    $microAll = '0%';
                                                  }else{
                                                    if($count['weiduan499']>0){
                                                      $microPass = round(($count['weiduan500']/$count['weiduan499']*100),2).'%';
                                                    }else{
                                                      $microPass = '0%';
                                                    }
                                                    $microAll = round(($count['weiduan500']/$count['weiduan201']*100),2).'%';
                                                  }
                                                  if($total499>0){
                                                    $totalPass = round(($total/($total499)*100),2).'%';
                                                  }
                                                  $processArray['no_channel'] = array('people'=>$count['web500'],'pass_rate'=>$channelPass, 'all_pass_rate'=>$channelAll);
                                                  $processArray['have_micro'] = array('people'=>$count['weiduan500'],'pass_rate'=>$microPass, 'all_pass_rate'=>$microAll);
                                                  $processArray['total'] = array('people'=>$total,'pass_rate'=>$totalPass, 'all_pass_rate'=> $totalAll);
                                                break;
                                              case 10:
                                                  $processArray['control'] = '欢迎界面开始游戏';
                                                  $total = $count['weiduan600']+$count['web600'];
                                                  $total500 = $count['web500']+$count['weiduan500'];
                                                  if($totalPeople<1){
                                                    $channelAll = '0%';
                                                    $microAll = '0%';
                                                    $microPass = '0%';
                                                    $channelPass = '0%';
                                                    $totalAll = '0%';
                                                    $totalPass = '0%';
                                                  }else{
                                                    $totalAll = round(($total/$totalPeople*100),2).'%';
                                                  }
                                                  if($count['web201']<1){
                                                      $channelPass = '0%';
                                                      $channelAll = '0%';
                                                  }else{
                                                      if($count['web500']>0){
                                                        $channelPass = round(($count['web600']/$count['web500']*100),2).'%';
                                                      }else{
                                                        $channelPass = '0%';
                                                      }
                                                      $channelAll = round(($count['web600']/$count['web201']*100),2).'%';
                                                  }
                                                  if($count['weiduan201']<1){
                                                    $microPass = '0%';
                                                    $microAll = '0%';
                                                  }else{
                                                    if($count['weiduan500']>0){
                                                      $microPass = round(($count['weiduan600']/$count['weiduan500']*100),2).'%';
                                                    }else{
                                                      $microPass = '0%';
                                                    }
                                                    $microAll = round(($count['weiduan600']/$count['weiduan201']*100),2).'%';
                                                  }
                                                  if($total500>0){
                                                    $totalPass = round(($total/($total500)*100),2).'%';
                                                  }
                                                  $processArray['no_channel'] = array('people'=>$count['web600'],'pass_rate'=>$channelPass, 'all_pass_rate'=>$channelAll);
                                                  $processArray['have_micro'] = array('people'=>$count['weiduan600'],'pass_rate'=>$microPass, 'all_pass_rate'=>$microAll);
                                                  $processArray['total'] = array('people'=>$total,'pass_rate'=>$totalPass, 'all_pass_rate'=> $totalAll);
                                                break;
                                          }
                                          array_push($tem, $processArray);
                                        }
                                        $returnData['data'] = $tem;
                                        break;
                                case 'set_gm':
                                        $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                                        $sql="
                                            update
                                                    `sys_user` a
                                            inner join
                                            (
                                                    select `uid` from `mem_character`b where find_in_set(`cid`,'{$content['target']['role_id']}') 
                                            ) c
                                            set
                                                    `type` = '{$content['cmd']['gm_level']}'
                                            where
                                                    a.`uid` = c.`uid`
                                        ";
                                        $this->gameDatabase->query($sql); 
                                        break;
                                case 'admin_log':
                                        $sql="
                                            select
                                                    `oper` ,`time` ,`errno` ,`errmsg` ,`type`,`post_data`
                                            from
                                                    `t_log_admin` 
                                            where
                                                    `time`>'{$content['cmd']['start_time']}'
                                                    and
                                                    `time`<'{$content['cmd']['end_time']}'
                                                    and
                                                    `type` = '{$content['cmd']['type']}'
                                            
                                        ";
                                        $logInfo = $this->gmDatabase->getArray($sql);  
                                        $returnData['data'] = $logInfo;
                                        break;
                                case 'game_config':
                                        switch ($content['cmd']['type']){
                                              case 'coin_list':
                                                    $sql="
                                                        select
                                                                `id`,`chineseValue`
                                                        from
                                                                `t_cfg_currency_type` 
                                                    ";
                                                    $coin = $this->gmDatabase->getArray($sql);
                                                    foreach ($coin as $val){
                                                      $coin[$val['id']] = $val['chineseValue'];
                                                    }
                                                    $returnData['data']['coin_list']= $coin;
                                                    break;
                                              case 'role_info_property':
                                                    $returnData['data']['role_info_property'] = array('base'=>'基础','attr'=>'属性','skill'=>'技能','bag'=>'装备');
                                                    break;
                                              case 'gm_level':
                                                    $returnData['data'] = array('gm_level'=>array('0'=>'移除GM','1'=>'等级1','2'=>'等级2','3'=>'等级3'));
                                                    break;
                                              case 'prop_att':
                                                    $returnData['data'] = array('prop_att'=>array('bind'=>'绑定'));
                                                    break;
                                        }
                                        break;
                                case 'role_info':
                                        $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                                        switch ($content['cmd']['type']){
                                              case 'base':
                                                    $sql="
                                                        select
                                                                a.`passport` as `账号`,
                                                                b.`cid` as `角色ID`,
                                                                b.`name` as `角色名`,
                                                                b.`level` as `等级`,
                                                                b.`sex` as `性别`,
                                                                b.`job` as `职业`,
                                                                b.`battle` as `战斗力`,
                                                                b.`exp` as `当前经验`,
                                                                g.`name` as `军团`,
                                                                b.`mapid` as `所在地图id`,
                                                                b.`x` as `坐标x`,
                                                                b.`y` as `坐标y`,
                                                                FROM_UNIXTIME(b.`last_login_time`) as `最后登录时间`,
                                                                FROM_UNIXTIME(e.`vipEndTime`) as `VIP到期`,
                                                                FROM_UNIXTIME(b.`create_time`) as `角色创建时间` ,
                                                                a.`last_login_ip` as `最近登录ip`,
                                                                FROM_UNIXTIME(a.`last_logout_time`) as `最后离线时间`,
                                                                a.`total_online_time` as `在线总时长` ,
                                                                e.`level` as `vip等级`,
                                                                a.`gold_pay_total` as `充值总元宝`,
                                                                c.`money` as `铜钱` ,
                                                                c.`gold` as `元宝`,
                                                                c.`cash` as `绑元`,
                                                                c.`vigour` as `元气`,
                                                                c.`draw_score` as `血钻碎片`,
                                                                c.`boss_score` as `BOSS积分`,
                                                                c.`bind_money` as `绑定金币`,
                                                                c.`honor` as `荣誉`,
                                                                c.`ac_score` as `积分`,
                                                                c.`contribution` as `军团贡献`,
                                                                c.`blood` as `血岩碎片`,
                                                                c.`dust` as `涅法雷姆经验`
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
                                                                b.`cid` = '{$content['target']['role_id']}'
                                                    ";
                                                    $baseInfo = $this->gameDatabase->getArray($sql);
                                                    $returnData['data']['base'] = $baseInfo;
                                                    break;
                                              case 'attr':
                                                    $sql="
                                                        select
                                                                a.`hp` as `生命值`,
                                                                a.`mp` as `法力值`,
                                                                a.`hp_ref` as `生命值恢复速度`,
                                                                a.`atk_min` as `最小伤害`,
                                                                a.`atk_max` as `最大伤害`,
                                                                a.`def` as `防御值`,
                                                                a.`rdc_phy` as `物理防御`,
                                                                a.`rdc_elc` as `闪电防御`,
                                                                a.`rdc_fir` as `火焰防御`,
                                                                a.`rdc_ice` as `冰霜防御`,
                                                                a.`rdc_tox` as `毒素防御`,
                                                                a.`rdc_lig` as `神圣防御`,
                                                                a.`add_phy` as `物理加成`,
                                                                a.`add_elc` as `闪电加成`,
                                                                a.`add_fir` as `火焰加成`,
                                                                a.`add_ice` as `冰霜加成`,
                                                                a.`add_tox` as `毒素加成`,
                                                                a.`add_lig` as `神圣加成`,
                                                                a.`dod_rat` as `闪避`,
                                                                a.`dod_rdc` as `忽视闪避`,
                                                                a.`cri_rat` as `暴击概率`,
                                                                a.`cri_val` as `暴击伤害`,
                                                                a.`cri_rdc` as `暴击减免`,
                                                                a.`blo_rat` as `格档`,
                                                                a.`blo_val` as `格档值`,
                                                                a.`dmg_add` as `额外伤害`,
                                                                a.`dmg_rdc` as `忽视伤害`,
                                                                a.`dmg_add_pec` as `伤害加成`,
                                                                a.`dmg_rdc_pec` as `伤害减免`,
                                                                a.`dmg_bak` as `伤害反射`,
                                                                a.`hp_suck` as `生命吸取`,
                                                                a.`crt_rdc` as `控制减免`,
                                                                a.`mov_spd` as `移动速度`,
                                                                a.`atk_spd` as `攻击速度`
                                                        from        
                                                                `mem_chr_attr` a
                                                        left join
                                                                `mem_character` b
                                                        on
                                                                a.`cid` = b.`cid`
                                                        where
                                                                b.`cid` = '{$content['target']['role_id']}'
                                                    ";
                                                    $attrInfo = $this->gameDatabase->getArray($sql);
                                                    $returnData['data']['attr'] = $attrInfo;
                                                    break;
                                              case 'skill':
                                                    $sql="
                                                        select
                                                                `talents`
                                                        from        
                                                                `mem_chr_skill` a
                                                        left join
                                                                `mem_character` b
                                                        on
                                                                a.`cid` = b.`cid`
                                                        where
                                                                b.`cid` = '{$content['target']['role_id']}'
                                                    ";
                                                    $skillInfo = $this->gameDatabase->getColumn($sql);
                                                    $sql="
                                                        select
                                                                *
                                                        from        
                                                                `t_cfg_skill` 
                                                    ";
                                                    $skillCfg = $this->gmDatabase->getArray($sql);
                                                    $skArray = array();
                                                    foreach ($skillCfg as  $value){
                                                        $skArray[$value['TalentId']] = $value['Name'];
                                                    }
                                                    if($skillInfo){
                                                        $array = array();
                                                        if(strpos($skillInfo, '|')!==false){
                                                            $skillArray = explode('|',$skillInfo);
                                                            foreach ($skillArray as $value){
                                                              $skillInfoArray = explode(':',$value);
                                                              $array[$skArray[$skillInfoArray[0]]] = $skillInfoArray[1];
                                                            }
                                                        }else if(strpos($skillInfo, ':')!==false){
                                                            $skillInfoArray = explode(':',$skillInfo);
                                                            $array[$skArray[$skillInfoArray[0]]] = $skillInfoArray[1];
                                                        }
                                                    }
                                                    
                                                    $returnData['data']['skill'] = $array;
                                                    break;
                                              case 'bag':
                                                    
                                                    $sql="
                                                        select
                                                                `id`,`count`
                                                        from        
                                                                `mem_chr_bag` a
                                                        left join
                                                                `mem_character` b
                                                        on
                                                                a.`cid` = b.`cid`
                                                        where
                                                                b.`cid` = '{$content['target']['role_id']}'
                                                                and
                                                                a.`class` = 2
                                                    ";
                                                    $equipInfo = $this->gameDatabase->getArray($sql);
                                                    
                                                    $sql="
                                                        select
                                                                *
                                                        from        
                                                                `t_cfg_equip` 
                                                    ";
                                                    $equipCfg = $this->gmDatabase->getArray($sql);
                                                    $eqArray = array();
                                                    foreach ($equipCfg as  $value){
                                                        $eqArray[$value['id']] = $value['equip'];
                                                    }
                                                    if($equipInfo){
                                                        $equipArray = array();
                                                        foreach ($equipInfo as $val){
                                                            $equipArray[$eqArray[$val['id']]] = $val['count'];
                                                        }
                                                    }
                                                    $returnData['data']['bag'] = $equipArray;
                                                    break;
                                        }
                                        break;
                                case 'virtual_recharge':
                                        $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false); 
                                        $sql="
                                            update
                                                    `sys_user` a
                                            left join
                                                    `mem_character` b 
                                            on
                                                    a.`uid` = b.`uid`
                                                    and
                                                    a.`sid` = b.`sid`
                                            set
                                                    `gm_gold` = `gm_gold` + '{$content['cmd']['money']}'*100
                                            where
                                                    b.`cid` = '{$content['target']['role_id']}'
                                        ";
                                        if(($this->gameDatabase->query($sql))===false){
                                          throw new Exception("找不到这个人", 404);
                                        }else{
                                              $sql="
                                                  select
                                                          a.`passport`,b.`name`
                                                  from
                                                          `sys_user` a
                                                  left join
                                                          `mem_character` b 
                                                  on
                                                          a.`uid` = b.`uid`
                                                          and
                                                          a.`sid` = b.`sid`
                                                  where
                                                          b.`cid` = '{$content['target']['role_id']}'
                                              ";
                                              $player = $this->gameDatabase->getRow($sql);   
                                              $order = "gm_".time().$content['target']['role_id'];
                                              $sql = "
                                                      insert into
                                                              `t_log_virtual_recharge`
                                                      set
                                                              `oper` = '{$content['track']['oper']}',
                                                              `sid` = '{$serverId}',
                                                              `time` = '{$content['track']['ts']}',
                                                              `pkey` = '{$operatorFlag}',
                                                              `cid` = '{$content['target']['role_id']}',
                                                              `name` = '{$player['name']}',
                                                              `money` = '{$content['cmd']['money']}',
                                                              `passport` =  '{$player['passport']}',
                                                              `order` = '{$order}'
                                              ";
                                              $this->gmDatabase->query($sql);
                                              $id = $this->gmDatabase->getLastInsertId(); 
                                              $sql="
                                                  select
                                                          `passport` as `account_id`,
                                                          `order`,
                                                          `cid` as `role_id`,
                                                          `name` as `role_name`,
                                                          `money`,
                                                          `oper`,
                                                          `time` as `oper_time`
                                                  from
                                                          `t_log_virtual_recharge` 
                                                  where
                                                          `id` = '{$id}'
                                              ";
                                              $info = $this->gmDatabase->getRow($sql);
                                        }
                                        $returnData['data'] = $info;
                                        break;
                                case 'virtual_recharge_list':
                                        $sql="
                                            select
                                                    a.`passport` as `account_id`,
                                                    a.`order`,
                                                    a.`cid` as `role_id`,
                                                    a.`name` as `role_name`,
                                                    a.`money`,
                                                    a.`oper`,
                                                    a.`time` as `oper_time`
                                            from
                                                    `t_log_virtual_recharge` a
                                            left join
                                                    `t_data_operator` b 
                                            on
                                                    a.`pkey` = b.`operatorFlag`
                                            where
                                                    a.`time` >= '{$content['cmd']['start_time']}'
                                                    and
                                                    a.`time` <= '{$content['cmd']['end_time']}'
                                                    
                                        ";
                                        $payArray = $this->gmDatabase->getArray($sql); 
                                        $returnData['data'] = $payArray;
                                        break;
                                case 'set_welfare':
                                        switch ($content['cmd']['type']){
                                                case '1':
                                                      $sql="
                                                          select
                                                                  a.`operatorId`
                                                          from
                                                                  `t_data_game_area` a
                                                          left join
                                                                  `t_data_operator` b
                                                          where
                                                                  a.`openDateTime`<=now()
                                                                  and
                                                                  date_add(a.`openDateTime`, INTERVAL 1 day)>=now()
                                                                  and
                                                                  b.`operatorFlag` = '{$operatorFlag}'
                                                                  and
                                                                  a.`areaNum` = '{$serverId}'
                                                      ";
                                                      $operatorId=$this->gmDatabase->getColumn($sql);
                                                      if($operatorId){
                                                          $this->initGameAreaInfo($operatorId,$gameAreaId['gameAreaId'],false);
                                                      }else{
                                                          throw new Exception("设置账号不在合法时间内", 500); 
                                                      }
                                                      $sql="
                                                          select
                                                                  count(*)
                                                          from
                                                                  `sys_user` a
                                                          left join
                                                                  `mem_character` b
                                                          on
                                                                  a.`uid` = b.`uid`
                                                                  and
                                                                  a.`sid` = b.`sid`
                                                          where
                                                                  b.`cid`='{$content['target']['role_id']}'
                                                                  and
                                                                  a.`fuli` = 1
                                                      ";
                                                      if(($this->gameDatabase->getColumn($sql))>=3){
                                                          throw new Exception("超过可设置的福利账号数量", 500);
                                                      }            
                                                      $sql="
                                                          update
                                                                  `sys_user` a
                                                          left join
                                                                  `mem_character` b 
                                                          on
                                                                  a.`uid` = b.`uid`
                                                                  and
                                                                  a.`sid` = b.`sid`
                                                          set
                                                                  `fuli` = 1
                                                          where
                                                                  b.`cid`='{$content['target']['role_id']}'
                                                      ";
                                                      $this->gameDatabase->query($sql);
                                                      break;
                                                case '2':
                                                      $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                                                      $sql="
                                                          update
                                                                  `sys_user` a
                                                          left join
                                                                  `mem_character` b 
                                                          on
                                                                  a.`uid` = b.`uid`
                                                                  and
                                                                  a.`sid` = b.`sid`
                                                          set
                                                                  `fuli` = 0
                                                          where
                                                                  b.`cid`='{$content['target']['role_id']}'
                                                      ";
                                                      $this->gameDatabase->query($sql);
                                                      break;
                                                case '3':
                                                      $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                                                      $sql="
                                                          update
                                                                  `sys_user` a
                                                          left join
                                                                  `mem_character` b 
                                                          on
                                                                  a.`uid` = b.`uid`
                                                                  and
                                                                  a.`sid` = b.`sid`
                                                          set
                                                                  `fuli` = 1
                                                          where
                                                                  find_in_set(b.`cid`,'{$content['target']['role_id']}') 
                                                      ";
                                                      $this->gameDatabase->query($sql);
                                                      break;
                                        }
                                        break;
                                case  'welfare_list':
                                        $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                                        $sql="
                                            select
                                                    a.`passport` as `account_id`,
                                                    b.`cid` as `role_id`,
                                                    b.`name` as `role_name`,
                                                    a.`last_login_time` as `login_time`,
                                                    c.`operator` as `oper`,
                                                    c.`op_time` as `oper_time`,
                                                    c.`seal_type` as `lock_player`,
                                                    c.`type` as `lock_type`,
                                                    c.`expire_time` as `lock_time`,
                                                    c.`reason` as `lock_reason`
                                            from
                                                    `sys_user` a
                                            left join
                                                    `mem_character` b
                                            on
                                                    a.`uid` = b.`uid`
                                                    and
                                                    a.`sid` = b.`sid`
                                            left join
                                                    `gmt_seal` c
                                            on
                                                    b.`cid` = c.`cid`
                                            where
                                                    a.`fuli` = 1
                                        ";
                                        $allFu = $this->gameDatabase->getArray($sql); 
                                        foreach ($allFu as $k=>$v){
                                          if(empty($v['lock_player']) || empty($v['lock_type'])){
                                              unset($allFu[$k]['lock_time']);
                                              unset($allFu[$k]['lock_reason']);
                                              unset($allFu[$k]['oper']);
                                              unset($allFu[$k]['oper_time']);
                                              $allFu[$k]['lock_player']=0;
                                              $allFu[$k]['lock_type']=0;
                                          }
                                        }
                                        $returnData['data'] = $allFu;
                                        break;
                                case  'welfare_condition':
                                        $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                                        $sql="
                                            select
                                                    b.`cid` 
                                            from
                                                    `sys_user` a
                                            left join
                                                    `mem_character` b
                                            on
                                                    a.`uid` = b.`uid`
                                                    and
                                                    a.`sid` = b.`sid`
                                            left join
                                                    `gmt_seal` c
                                            on
                                                    b.`cid` = c.`cid`
                                            where
                                                    a.`fuli` = 1
                                        ";
                                        if($content['cmd']['recharge']){
                                          $sql.=" and a.`gold_pay_total`>= '{$content['cmd']['recharge']}'";
                                          $fulier = $this->gameDatabase->getRow($sql);
                                          for($i=0;$i<count($fulier);$i++){
                                            $sql = "
                                                  insert into
                                                          `gmt_seal` 
                                                  set
                                                          `cid` = '{$fulier[$i]}',
                                                          `operator` = '{$content['track']['oper']}',
                                                          `expire_time` = 157680000 + unix_timestamp(now()),
                                                          `op_time` ='{$content['track']['ts']}',
                                                          `reason` = '充值金额已达到{$content['cmd']['recharge']}',
                                                          `flag` = 0,
                                                          `seal_type` = 2,
                                                          `type` = 2
                                                  on duplicate key update
                                                          `expire_time`=157680000 + unix_timestamp(now()),
                                                          `operator` = '{$content['track']['oper']}',
                                                          `op_time`= '{$content['track']['ts']}',
                                                          `reason` = '充值金额已达到{$content['cmd']['recharge']}',
                                                          `flag`= '0',
                                                          `seal_type` = 2,
                                                          `type` = 2
                                            ";
                                            $this->gmDatabase->query($sql);              
                                          }
                                        }
                                        if($content['cmd']['logout_day']){
                                          $sql.=" and (unix_timestamp(now())- a.`last_login_time)`>= '{$content['cmd']['logout_day']}'*24*3600";
                                          $fulier = $this->gameDatabase->getRow($sql);
                                          for($i=0;$i<count($fulier);$i++){
                                            $sql = "
                                                  insert into
                                                          `gmt_seal` 
                                                  set
                                                          `cid` = '{$fulier[$i]}',
                                                          `operator` = '{$content['track']['oper']}',
                                                          `expire_time` = 157680000 + unix_timestamp(now()),
                                                          `op_time` ='{$content['track']['ts']}',
                                                          `reason` = '超过{$content['cmd']['recharge']}天未登录',
                                                          `flag` = 0,
                                                          `seal_type` = 2,
                                                          `type` = 2
                                                  on duplicate key update
                                                          `expire_time`=157680000 + unix_timestamp(now()),
                                                          `operator` = '{$content['track']['oper']}',
                                                          `op_time`= '{$content['track']['ts']}',
                                                          `reason` = '超过{$content['cmd']['recharge']}天未登录',
                                                          `flag`= '0',
                                                          `seal_type` = 2,
                                                          `type` = 2
                                            ";
                                            $this->gmDatabase->query($sql);              
                                          }
                                        }
                                        break;
                                case  'server_time':
                                        $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                                         $sql="
                                              select
                                                      `kai_fu_time`
                                              from
                                                      `sys_server_start` 
                                        ";
                                        $time = $this->gameDatabase->getColumn($sql);
                                        $min=$time-strtotime('now');
                                        if($time==0){
                                          $returnData['data'] = array('switch'=>"off",'time'=>'0');
                                        }else if($min>=300){
                                           $returnData['data'] = array('switch'=>"off",'time'=>"{$time}");
                                        }else if($min<0){
                                          $returnData['data'] = array('switch'=>"on",'time'=>"{$time}");
                                        }else{
                                          $returnData['data'] = array('switch'=>"off",'time'=>"{$time}");
                                        }
                                        break;
                                case  'set_server_time':
                                        $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                                            $sql="
                                                  select
                                                          `kai_fu_time`
                                                  from
                                                          `sys_server_start` 
                                            ";
                                            $time = $this->gameDatabase->getColumn($sql);
                                            if($time===false){
                                              throw new Exception("禁止修改",500);
                                            }else{
                                                  $sql="
                                                        update
                                                                `sys_server_start`
                                                        set
                                                                `kai_fu_time` = '{$content['cmd']['time']}'
                                                        where
                                                                `kai_fu_time`-unix_timestamp(now())>=300
                                                  ";      
                                                  $this->gameDatabase->query($sql);
                                                  if(mysql_affected_rows()==0){
                                                      throw new Exception("超出时间限制", 500);
                                                  }
                                            }
                                            $sql="
                                                  update
                                                          `t_data_game_area`
                                                  set
                                                          `openDatetime` = from_unixtime('{$content['cmd']['time']}')
                                                  where
                                                          `gameAreaId` = {$gameAreaId['gameAreaId']}
                                                          and
                                                          `operatorId` = {$gameAreaId['operatorId']}
                                            ";      
                                            $this->gmDatabase->query($sql);
                                            
                                        break;
                                case  'kick_player':
                                        $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                                        switch ($content['target']['status']){
                                          case 'all':
                                                $sql="
                                                      insert into
                                                              `gmt_kick` 
                                                      set
                                                              `cid` = '0',
                                                              `operator` = '{$content['track']['oper']}',
                                                              `op_time` ='{$content['track']['ts']}',
                                                              `reason` = '{$content['cmd']['reason']}',
                                                              `flag` = 0
                                                ";
                                                $this->gameDatabase->query($sql);
                                                break;
                                          case 'role_id':
                                                $mark = substr($content['target']['role_id'], -1);
                                                if($mark==','){
                                                  $role = substr($content['target']['role_id'],0, -1);
                                                }else{
                                                  $role=$content['target']['role_id'];
                                                }
                                                $sql = "
                                                        select
                                                                b.`cid`
                                                        from
                                                                `mem_character` b
                                                        left join
                                                                `sys_user` a
                                                        on
                                                                a.`uid` = b.`uid`
                                                                and
                                                                a.`sid` = b.`sid`
                                                        where
                                                                find_in_set(b.`cid`,'{$role}') 
                                                ";
                                                $cidArray = $this->gameDatabase->getArray($sql);
                                                if(empty($cidArray)){
                                                  throw new Exception("找不到这个人", 404);
                                                }
                                                for($i = 0;$i<count($cidArray);$i++){
                                                    $sql = "
                                                          insert into
                                                                  `gmt_kick` 
                                                          set
                                                                  `cid` = '{$cidArray[$i]['cid']}',
                                                                  `operator` = '{$content['track']['oper']}',
                                                                  `op_time` ='{$content['track']['ts']}',
                                                                  `reason` = '{$content['cmd']['reason']}',
                                                                  `flag` = 0
                                                    ";
                                                    $this->gameDatabase->query($sql);
                                                }
                                                break;
                                        }
                                        break;
				default:
					throw new Exception("调用不存在的接口，未实现的功能", 501);
			}
			
		}
		
		catch(MY_Mysql_Exception $e) {
                        $returnData['errno'] = 500;
                        $returnData['errmsg']="游戏内部错误";
                        log_message('debug', $e->getMessage());
                }
        catch(MY_Param_Exception $e) {
                $returnData['errno'] = 502;
                $returnData['errmsg']="第三方服务失效";
                log_message('debug', $e->getMessage());
        }
		catch(Exception $e) {
			$returnData['errno'] = $e->getCode();
                        $returnData['errmsg']=$e->getMessage();
                        log_message('debug', $e->getMessage());
		}
        if ($cmd == 'send_mail' || $cmd =='send_notice' || $cmd =='chat_ban' ||$cmd =='lock_player' ||$cmd =='kick_player' ||$cmd =='set_gm'){
              $sql = "
                      insert into
                              `t_log_admin`
                      set
                              `oper` = '{$content['track']['oper']}',
                              `sid` = '{$content['target']['server_id']}',
                              `time` = '{$content['track']['ts']}',
                              `errno` = '{$returnData['errno']}',
                              `errmsg` = '{$returnData['errmsg']}',
                              `type` = '{$cmd}',
                              `post_data` = '{$post_data}'
              ";
              $this->gmDatabase->query($sql); 

        }
        $etime=microtime(true); 
        log_message('debug', json_encode($returnData));
        $costTime = $etime-$stime;
        log_message('debug', "接口耗时：".$costTime);
        echo json_encode($returnData);
	}
}