<?php
set_time_limit(0);
error_reporting(E_ALL);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');

define('LOCK_FILE', dirname(__FILE__).'/lock/kuaFuDaemon.lock');
define('LOG_LEVEL', 'DEBUG');

$LogFile = dirname(__FILE__).'/log/kuaFuDaemon'.date('Y.m.d').'.log';

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
// $GmDb->connect($gmDatabaseHost.":".$gmDatabasePort, $gmDatabaseUsername, $gmDatabasePassword, $gmDatabaseName);
$GmDb->connect('123.59.119.187:51888', 'gameop_admin', 'Dlr0GjuCKH', 'syz_admin');

try {
    $sql = "
        select
            `operatorFlag`
        from
            `t_data_operator` 
        where
            `status` = 1         

    ";
    $platform = $GmDb->getArray($sql);
    foreach ($platform as $values) {
        
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
                    e.`operatorId` = a.`operatorId`
                where
                    d.`isDefault` = 1
                    and
                    a.`openDatetime` <now()
                    and
                    a.`areaNum`<9000 and a.`areaNum`!=5001
                    and
                    e.`operatorFlag`= '{$values['operatorFlag']}'
                group by 
                    a.operatorId,a.`databaseName`
            ";

            $serverArray = $GmDb->getArray($sql);

            $GameDb = new Zw_Mysql();
            $GameDb->setLog($Log);

            $allData = array();
            foreach ($serverArray as $k1 => $v1) {
                $GameDb->connect($v1['ipAddress'].":".$gameDatabasePort, $gameDatabaseUsername, $gameDatabasePassword, $v1['databaseName']);
                $sql = "
                    select 
                        `value`,'{$v1['operatorFlag']}' as `platform`,'{$v1['ipAddress']}' as `db_host`,'{$v1['areaNum']}' as `areaNum`
                    from 
                        `sys_server_config` 
                    where
                        `name` = 'BATTLE' 
                ";
                $res = $GameDb->getRow($sql);
                $GameDb->close();
                if($res){
                    array_push($allData, $res);
                }                                   
            }

            //排序
            for($i = 0; $i < count($allData) - 1; $i++) {
                for($j = $i; $j < count($allData) - 1; $j++) {
                    if($allData[$j]['value'] < $allData[$j+1]['value']) {
                        $tmp = $allData[$j];
                        $allData[$j] = $allData[$j+1];
                        $allData[$j+1] = $tmp;
                    }
                }
            }

            // 对查询数据进行分组，并对余数判断是否插入    
            $count = count($allData);
            if ($count%4 ==0 or $count%4 >floor($count/4)) {        
                // 整除,余数大于整除部分,不变,直接分组
                $a =0;
                $m =0;

                $info = array();

                foreach ($allData as $key => $value) {
                    if ($a>3) { 
                        $a =0;
                        $m++;
                    }
                    $a++;
                    $info[$m][] = $value;               
                } 
            } else {
                //余数小于整除部分，倒序插入;if($count%4 <=floor($count/4))
                $a =0;
                $m =0;

                $info = array();

                foreach ($allData as $key => $value) {
                    if ($a>3) { 
                        $a =0;
                        $m++;
                    }
                    $a++;
                    $info[$m][] = $value;               
                }
                $num = count($info)-1;        //ceil($count/4);
                // 最后一组数据插入前面组里
                for ($i=0; $i <= $count%4-1; $i++) {         
                    // 把$info[ceil($count/4)][$i]   推送到 $info[ceil($count/4)-$count%4+$i]
                    $push = $num-$count%4+$i;
                    array_push($info[$push],$info[$num][$i]);                
                }
                // unset($info[$num]);  //删除最后一组
                array_splice($info,$num,1);
            }



            //wan360    s9000.w360.syz.ate.cn:51888
            $a = 's9000';
            $b = 'syz.ate.cn:51888';
            $c = "{$a}.{$values['operatorFlag']}.{$b}";
            $GameDb->connect($c, 'gameop_dev', 'eM1oMokz1TQQD3afWuRs', 'syz_game9000');
            $sql = "delete from `cross_server`";
            $GameDb->query($sql);

            // 遍历 添加                        
            foreach ($info as $k2 => $v2) {
                $data = $info[$k2];
                $id = 9000 + $k2;

                foreach ($data as $k => $val) {
                    $date = $data[$k];
                    $port1 = $date['areaNum']+5000;
                    $port2 = $date['areaNum']+6000;
                    $sql =" 
                        insert  into
                                `cross_server`
                        set
                                `id` = '{$id}',
                                `platform` = '{$date['platform']}',
                                `sid` = '{$date['areaNum']}',
                                `db_host` = '{$date['db_host']}',
                                `db_port` = '{$port1}',
                                `gate_host` = '{$date['db_host']}',  
                                `gate_port` = '{$port2}'
                                

                    ";
                    $GameDb->query($sql);
                }
            }

            $GameDb->close();
         
        
    }
        
    
        
}

catch(Zw_Mysql_Exception $e) {
      $Log->write($e->getMessage(), 'ERROR');
      $Log->write('数据库错误', 'ERROR');
}
catch(Exception $e) {
      $Log->write('系统错误', 'ERROR');
}
// sleep(1200);
