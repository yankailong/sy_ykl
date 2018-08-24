<?php
class Question extends MY_Controller
{
	public function idea () {
                $errorCode = 0;
		try {
			$key = 'p7l5i6DMGZzj9tUj';
			$uid =  $this->param->getParam('uid', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
                        $operatorFlag =  $this->param->getParam('platform',  array('method' => 'string','emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
                        $sid = $this->param->getParam('sid',  array('method' => 'int', 'min' => 1,'emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
                        $title = $this->param->getParam('title',  array('method' => 'string','emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
                        $desc = $this->param->getParam('desc', array('method' => 'string','emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
                        $type = $this->param->getParam('type', array('method' => 'int','min' => 1, 'emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
                        $time = $this->param->getParam('time',array('method' => 'int', 'min' => 0, 'emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
                        $flag = $this->param->getParam('flag', array('method' => 'string','maxLength' => 64,'emptyErrorCode' => 3, 'invalidErrorCode' => 1),'get');
                        
                       
                        $localSign = "{$uid}{$sid}{$time}{$type}{$title}{$desc}{$operatorFlag}{$key}";
                        log_message( 'debug',"加密前localSign：{$localSign}");
                        $localSign = md5($localSign);
                        log_message( 'debug',"加密后localSign：{$localSign}");
			if($localSign <> $flag) {
                              throw new Exception("签名错误",3);
                        }
                        $title = urldecode($title);
                        $desc = urldecode($desc);
                        $operatorFlag= urldecode($operatorFlag);
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
                        $this->initGameAreaInfo($gameAreaId['operatorId'],$gameAreaId['gameAreaId'],false);
			$sql="
                                select
                                        b.`cid`,b.`name`,b.`level`,a.`gold_pay_total`
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
                        $infoArray = $this->gameDatabase->getRow($sql);
                        
                        $sql="
                                select
                                        count(*) as `count`
                                from
                                        `t_data_question` 
                                where
                                        `cid` = '{$infoArray['cid']}'
                        ";
                        $isFirst = $this->gmDatabase->getRow($sql);
                        $sql .='and date(FROM_UNIXTIME(time)) = CURDATE();';
                        $count = $this->gmDatabase->getRow($sql);
                        if($infoArray['level']<100){
                          throw new Exception("等级不足",2);
                        }
                        else if((int)$count['count']>=3){
                          throw new Exception("当天提问上限",1);
                        }
                        else{
                          if((int)$isFirst['count']==0){
                                $sql="
                                      insert into
                                          `t_data_question`
                                        (
                                          `gameAreaId`,
                                          `title`,
                                          `desc`,
                                          `type`,
                                          `time`,
                                          `cid`,
                                          `reward`,
                                          `name`,
                                          `level`,
                                          `gold_pay_total`,
                                          `state`,
                                          `operateUserId`,
                                          `operateDateTime`,
                                          `approvalUserId`,
                                          `approvalDateTime`
                                        )
                                        value
                                        (
                                          '{$gameAreaId['gameAreaId']}',
                                          '{$title}',
                                          '{$desc}',
                                          '{$type}',
                                          unix_timestamp(now()),
                                          '{$infoArray['cid']}',
                                          '1',
                                          '{$infoArray['name']}',
                                          '{$infoArray['level']}',
                                          '{$infoArray['gold_pay_total']}',
                                          '3',
                                          '1',
                                          unix_timestamp(now()),
                                          '1',
                                          unix_timestamp(now())
                                        )
                                ";
                                $this->gmDatabase->query($sql);   
                                $sql = "
                                        insert into
                                                `mem_mail`
                                        (
                                                `SysMailId`,
                                                `SenderName`,
                                                `ReceiveId`,
                                                `ReceiveName`,
                                                `MailTitle`,
                                                `MailContent`,
                                                `reason`,
                                                `Extract`,
                                                `Item1`,
                                                `Item2`,
                                                `Item3`,
                                                `Item4`,
                                                `SendTime`,
                                                `DelFlag`
                                        )
                                        value
                                        (
                                                '-20000',
                                                '系统',
                                                '{$infoArray['cid']}',
                                                '{$infoArray['name']}',
                                                '尊敬的玩家：',
                                                '您好，你的问题我们已经知晓，请您耐心等待回复',
                                                '2',
                                                '1',
                                                '575:1:4:1:0:0',
                                                '13:1:2:1:0:0',
                                                '13:1:2:1:0:0',
                                                '13:1:2:1:0:0',
                                                 unix_timestamp(now()),
                                                '0'
                                        )
                                ";
                                $this->gameDatabase->query($sql);
                          }else{
                                  $sql="
                                      insert into
                                          `t_data_question`
                                        (
                                          `gameAreaId`,
                                          `title`,
                                          `desc`,
                                          `type`,
                                          `time`,
                                          `cid`,
                                          `name`,
                                          `level`,
                                          `gold_pay_total`,
                                          `state`
                                        )
                                        value
                                        (
                                          '{$gameAreaId['gameAreaId']}',
                                          '{$title}',
                                          '{$desc}',
                                          '{$type}',
                                          unix_timestamp(now()),
                                          '{$infoArray['cid']}',
                                          '{$infoArray['name']}',
                                          '{$infoArray['level']}',
                                          '{$infoArray['gold_pay_total']}',
                                          '1'
                                        )
                                ";
                                $this->gmDatabase->query($sql);   
                          }
 
                      }
                }
                catch(MY_Mysql_Exception $e) {
                        $errorCode = 4;
                        log_message('debug', $e->getMessage());
                }
                catch(MY_Param_Exception $e) {
                        $errorCode = 3;
                        log_message('debug', $e->getMessage());
                }
		catch(Exception $e) {
			$errorCode = $e->getCode();
                        log_message('debug', $e->getMessage());
		}
                echo $errorCode;
	}
}


	
	
	
        