<?php
set_time_limit(0);
error_reporting(E_ALL);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');

define('LOCK_FILE', dirname(__FILE__).'/lock/payRankDaemon.lock');
define('LOG_LEVEL', 'DEBUG');

$LogFile = dirname(__FILE__).'/log/payRankDaemon'.date('Y.m.d').'.log';

$Log = new Zw_Log();
$Log->setCurrLogLevel(LOG_LEVEL);
$Log->setLogFile($LogFile);

$handle = fopen(LOCK_FILE, 'w+');
if(!flock($handle, LOCK_EX|LOCK_NB)){
    $Log->write('进程已经启动，请不要重复启动');
    exit();
}

$GmDb = new Zw_Mysql();
$GmDb->setLog($Log);
$GmDb->connect($gmDatabaseHost.":".$gmDatabasePort, $gmDatabaseUsername, $gmDatabasePassword, $gmDatabaseName);
// $GmDb->connect('123.59.119.187:51888', 'gameop_admin', 'Dlr0GjuCKH', 'syz_admin');

try {
	$sql = "
            select
                    c.`ipAddress`,
                    a.`databaseName`,
                    a.`operatorId`,
                    a.`areaNum`,
                    e.`operatorFlag`
            from
                    `t_data_game_area` a
            left join
                    `t_data_server_ip` b
            on
                    a.`serverId` = b.`serverId`
            left join
                    `t_data_ip` c
            on
                    b.`ipId` = c.`ipId`
            left join
                    `t_cfg_ip_type` d
            on
                    c.`ipTypeId` = d.`ipTypeId`
            left join 
					`t_data_operator` e
			on 
					a.`operatorId` = e.`operatorId`
            where
                    (e.`operatorFlag` = 'w360'
                    or 
                    e.`operatorFlag` = 'duowanclouds')
                    and
                    d.`isDefault` = 1
                    and
                    a.`openDatetime` <now()
                    and
                    a.`areaNum`<9000                     
            group by 
                    a.operatorId,a.`databaseName`
    ";

    $serverArray = $GmDb->getArray($sql);
    $GameDb = new Zw_Mysql();
    $GameDb->setLog($Log);
    // 遍历查询
    $allData = array();
    foreach ($serverArray as $k1 => $v1) {
        $GameDb->connect($v1['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $v1['databaseName']);
        // $sql ="
        //         select @rownum := 0; 
        // ";
        // $GmDb->query($sql);
                
                
        /*$sql = "
            select 
                @rownum := @rownum + 1 as `rank`,`uid`,`name`,`sid`,`time`,sum(`amount`) as `amount`,'{$v1['operatorFlag']}' as `platform`
            from 
                `pay_log` 
			where
				`time` >= unix_timestamp('2018-08-13 00:00:00')
			and
				`time` <= unix_timestamp('2018-08-25 23:59:59')
			group by
				`uid`
			order by
				sum(`amount`) desc
			limit
				0,3 
        ";*/
        // 查询，并添加排名
        $sql = "
                select
                    ta.*, @rank := @rank + 1 AS `rank`
                from
                    (
                        select 
                            `uid`,`name`,`sid`,`time`,sum(`amount`) as `amount`,'{$v1['operatorFlag']}' as `platform`
                        from 
                            `pay_log`
                        where
                            `time` >= unix_timestamp('2018-08-23 00:00:00')
                        and
                            `time` <= unix_timestamp('2018-08-25 23:59:59')
                        group by
                            `uid`
                        order by
                            sum(`amount`) desc
                        limit
                            0,3
                    ) AS ta,
                    (select @rank := 0) r
        ";
        $res = $GameDb->getArray($sql);
        $GameDb->close();
        if($res){
            array_push($allData, $res);
        }                                   
    }
   
                
    // $GmDb->connect($c, 'gameop_dev', 'eM1oMokz1TQQD3afWuRs', 'syz_game9000');
    $sql = "delete from `t_log_pay_rank`";
    $GmDb->query($sql);

    // 遍历 添加                        
    foreach ($allData as $k2 => $v2) {
        foreach ($v2 as $k3 => $v3) {                   
            $sql =" 
                insert  into
                        `t_log_pay_rank`
                set
                        `rank` = '{$v3['rank']}',
                        `sid` = '{$v3['sid']}',
                        `uid` = '{$v3['uid']}',                                
                        `name` = '{$v3['name']}',
                        `amount` = '{$v3['amount']}',
                        `time` = '{$v3['time']}',  
                        `platform` = '{$v3['platform']}'                                

            ";
            $GmDb->query($sql);
        }
    }

    $GmDb->close();
         
}

catch(Zw_Mysql_Exception $e) {
      $Log->write($e->getMessage(), 'ERROR');
      $Log->write('数据库错误', 'ERROR');
}
catch(Exception $e) {
      $Log->write('系统错误', 'ERROR');
}
sleep(3600);
