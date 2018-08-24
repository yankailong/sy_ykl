<?php
class UseCode extends MY_Controller
{
	public function code () {
        $errorCode = 0;
		try {
			$key = 'K7uGRI9Rkm1iX03B';
			$uid =  $this->param->getParam('uid', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
            $operatorFlag =  $this->param->getParam('platform',  array('method' => 'string','emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
            $sid = $this->param->getParam('sid',  array('method' => 'int', 'min' => 1,'emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
            $codeType = $this->param->getParam('codeType',  array('method' => 'int', 'min' => 1,'emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get',true);
            $code = $this->param->getParam('code',  array('method' => 'string','emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
            $time = $this->param->getParam('time',array('method' => 'int', 'min' => 0, 'emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
            // $flag = $this->param->getParam('flag', array('method' => 'string','maxLength' => 64,'emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
                        
                        
                $localSign = "{$code}{$uid}{$sid}{$operatorFlag}{$time}{$key}";
                log_message( 'debug',"加密前localSign：{$localSign}");
                $localSign = md5($localSign);
                log_message( 'debug',"加密后localSign：{$localSign}");
			    /*if($localSign <> $flag) {
                    throw new Exception("签名错误",6);
                }*/
                $operatorFlag= urldecode($operatorFlag);
                if(!$codeType){
                    $codeType=1;
                }
                if($code =='AEkPJBHkkzr06Xal' || $code =='tEHwV3VJnDgB4WaO' || $code == 'lQg5mm4gbgFg6rPc'){
                      throw new Exception("兑换成功",0);
                }else{
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
                                        b.`operatorFlag` = '{$operatorFlag}'
                                        and
                                        a.`areaNum` = '{$sid}'
                        ";
                        $gameAreaId = $this->gmDatabase->getRow($sql);
                        $sql="
                                select
                                        a.`code`,a.`flag`,b.`useLimit`,b.`cardId`,c.`giftId`,b.`operatorId`,b.`cardName`,d.`giftName`
                                from
                                        `t_data_game_code` a
                                left join 
                                        `t_data_card` b
                                on
                                        a.`cardId` = b.`cardId`
                                left join 
                                        `t_data_card_apply` c
                                on
                                        c.`cardId` = b.`cardId`
                                left join
                                        `t_data_gift` d
                                on  
                                        c.`giftId` = d.`giftId`
                                where
                                        `code` = '{$code}'
                        ";
                        $Info = $this->gmDatabase->getRow($sql);
                        if($codeType==1){
                            if(strpos($Info['cardName'],"微信")>0 ||strpos($Info['cardName'],"手机")>0){
                                throw new Exception("无法领取",2);
                            }
                        }else{
                            if(strpos($Info['cardName'],"微信")>=0 ||strpos($Info['cardName'],"手机")>=0){
                                $codeType = $codeType;
                            }else{
                              throw new Exception("无法领取",2);
                            }
                        }
                        if (empty ($Info)) {
                          throw new Exception("不存在该激活码",2);
                        }
                        if($Info['operatorId']!==$gameAreaId['operatorId']){
                          throw new Exception("该平台无法使用",2);
                        }
                        if($Info['flag']==2){
                            throw new Exception("这个激活码已被使用",5);
                        }
                        $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
                        $sql="
                                select
                                        b.`cid`,b.`name`,a.`passport`
                                from
                                        `sys_user` a
                                left join
                                        `mem_character` b 
                                on
                                        a.`uid` = b.`uid`
                                        and
                                        a.`sid` = b.`sid`
                                where
                                        a.`uid` = '{$uid}'
                        ";
                        $cidInfo = $this->gameDatabase->getRow($sql);
                        if($Info['useLimit']==1){
                            $sql="
                                    select
                                            count(*)
                                    from
                                            `t_data_game_code` a
                                    left join 
                                            `t_data_card` b
                                    on
                                            a.`cardId` = b.`cardId`
                                    left join 
                                            `t_data_card_apply` c
                                    on
                                            c.`cardId` = b.`cardId`
                                    where
                                            c.`giftId` = '{$Info['giftId']}'
                                            and
                                            a.`cid` = '{$cidInfo['cid']}'
                                            and
                                            a.`gameAreaId` = '{$gameAreaId['gameAreaId']}'
                                            and
                                            b.`useLimit` = 1
                            ";
                            $used = $this->gmDatabase->getColumn($sql);
                            if($used>=1){
                               throw new Exception("已经领取过了该类型的礼包",1);
                            }
                            $sql="
                                    update
                                            `t_data_game_code`
                                    set
                                            `time` = '{$time}',
                                            `flag` = 2,
                                            `cid` = '{$cidInfo['cid']}',
                                            `gameAreaId` = '{$gameAreaId['gameAreaId']}'
                                    where
                                            `code` = '{$Info['code']}'
                                            and
                                            `flag` = 1
                                            and
                                            `time` is null
                                            and
                                            `cid` is null
                                            and
                                            `gameAreaId`  is null
                            ";
                            $this->gmDatabase->query($sql);
                            if($this->gmDatabase->getAffectedRow()==0){
                              throw new Exception("已经被使用", 1);
                            }
                        }else if($Info['useLimit']==3){
                              $sql="
                                    select
                                            count(*)
                                    from
                                            `t_data_game_code_every` 
                                    where
                                            `code` = '{$Info['code']}'
                                            and
                                            `cid` = '{$cidInfo['cid']}'
                                            and
                                            `gameAreaId` = '{$gameAreaId['gameAreaId']}'
                                            and
                                            `cardId` = '{$Info['cardId']}'
                              ";
                              $used = $this->gmDatabase->getColumn($sql);
                              if($used>=1){
                                throw new Exception("已经领取过了该类型的礼包",1);
                              }

                                  $sql="
                                          insert into
                                                  `t_data_game_code_every`
                                          set
                                                  `code` = '{$Info['code']}',
                                                  `giftId` = '{$Info['giftId']}',
                                                  `cardId` = '{$Info['cardId']}',
                                                  `time` = unix_timestamp(now()),
                                                  `cid` = '{$cidInfo['cid']}',
                                                  `gameAreaId` = '{$gameAreaId['gameAreaId']}'
                                  ";
                                  $this->gmDatabase->query($sql);

                        }else if($Info['useLimit']==2){
                              $sql="
                                    update
                                            `t_data_game_code`
                                    set
                                            `time` = '{$time}',
                                            `flag` = 2,
                                            `cid` = '{$cidInfo['cid']}',
                                            `gameAreaId` = '{$gameAreaId['gameAreaId']}'
                                    where
                                            `code` = '{$Info['code']}'
                                            and
                                            `flag` = 1
                                            and
                                            `time` is null
                                            and
                                            `cid` is null
                                            and
                                            `gameAreaId`  is null
                            ";
                            $this->gmDatabase->query($sql);
                            if($this->gmDatabase->getAffectedRow()==0){
                              throw new Exception("已经被使用", 1);
                            }

                        }else if($Info['useLimit']==4){
                            $sql="
                                    select 
                                            count(*)
                                    from
                                            `t_data_game_code` a
                                    left join 
                                            `t_data_card` b
                                    on
                                            a.`cardId` = b.`cardId`
                                    left join 
                                            `t_data_card_apply` c
                                    on
                                            c.`cardId` = b.`cardId`
                                    where
                                            c.`giftId` = '{$Info['giftId']}'
                                            and
                                            a.`cid` = '{$cidInfo['cid']}'
                                            and
                                            a.`gameAreaId` = '{$gameAreaId['gameAreaId']}'
                                            and
                                            b.`useLimit` = 4
                            ";
                            $used = $this->gmDatabase->getColumn($sql);
                            if($used>=10){
                               throw new Exception("不能再领取该类型礼包",1);
                            }
                            $sql="
                                    update
                                            `t_data_game_code`
                                    set
                                            `time` = '{$time}',
                                            `flag` = 2,
                                            `cid` = '{$cidInfo['cid']}',
                                            `gameAreaId` = '{$gameAreaId['gameAreaId']}'
                                    where
                                            `code` = '{$Info['code']}'
                                            and
                                            `flag` = 1
                                            and
                                            `time` is null
                                            and
                                            `cid` is null
                                            and
                                            `gameAreaId`  is null
                            ";
                            $this->gmDatabase->query($sql);
                            if($this->gmDatabase->getAffectedRow()==0){
                              throw new Exception("已经被使用", 1);
                            }
                        }

                        if($codeType == 1){
                                  $sql="
                                        select
                                                `itemId`,`itemType`,`count`
                                        from
                                                `t_data_gift_item` 
                                        where
                                                `giftId` = '{$Info['giftId']}'
                                  ";
                                  $itemArray = $this->gmDatabase->getArray($sql);
                                  for($i = 0; $i < count($itemArray); $i = $i + 6 ) {
                                              $columns = "`SenderName`,`ReceiveId`,  `MailTitle`, `MailContent`,`Extract`, `reason`,`SendTime`, `DelFlag`";
                                              $values = "'系统','{$cidInfo['cid']}', '{$Info['giftName']}', '亲爱的玩家，恭喜你兑换{$Info['giftName']}激活码成功。获得以下礼包奖励，请查收', '1','5','{$time}', '0'";

                                              for($j = 1; $j <= 6; $j++) {
                                                      $columns .= ",`Item{$j}`";
                                                      $values .= ",'{$itemArray[$i+$j-1]['itemId']}:{$itemArray[$i+$j-1]['itemType']}:{$itemArray[$i+$j-1]['count']}:1:0:0'";

                                                      if($i + $j == count($itemArray)) {
                                                              break;
                                                      }
                                              }

                                              $sql = "
                                                      insert into
                                                            `mem_mail`
                                                    (
                                                            {$columns}
                                                    )
                                                    VALUES
                                                    (
                                                             {$values}
                                                    )
                                              ";
                                              $this->gameDatabase->query($sql);  
                                  }
                        }else{
                              $sql = "
                                          insert into
                                                  `mem_mobile_phone_gift`
                                          set
                                                  `qid` = '{$cidInfo['passport']}',
                                                  `sid` = '{$sid}',
                                                  `type` = '{$codeType}',
                                                  `state` = 1
                              ";
                              $this->gameDatabase->query($sql);                 
                        }
                }
        }
        catch(MY_Mysql_Exception $e) {
            $errorCode = 4;
            log_message('debug', $e->getMessage().$e->getCode());
        }
        catch(MY_Param_Exception $e) {
            $errorCode = 7;
            log_message('debug', $e->getMessage().$e->getCode());
        }
		catch(Exception $e) {
			$errorCode = $e->getCode();
            log_message('debug', $e->getMessage().$e->getCode());
		}

        if($code =='AEkPJBHkkzr06Xal' || $code =='tEHwV3VJnDgB4WaO' || $code == 'lQg5mm4gbgFg6rPc'){
              echo "$errorCode|4|$code";
        }else{
              echo "$errorCode|$codeType";
        }
                
	}
}


	
	
	
        