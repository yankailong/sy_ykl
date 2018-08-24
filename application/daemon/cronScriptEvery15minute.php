<?php
set_time_limit(0);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');

define('LOCK_FILE', dirname(__FILE__).'/lock/cronScriptEvery15minute.lock');
define('LOG_LEVEL', 'DEBUG');

$LogFile = dirname(__FILE__).'/log/cronScriptEvery15minute'.date('Y.m.d').'.log';

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
$GmDb->connect($gmDatabaseHost, $gmDatabaseUsername, $gmDatabasePassword, $gmDatabaseName);

$statDays = 3;
$statEndDateTime = date('Y-m-d 00:00:00', time() - $statDays * 86400);

try {
	//生成时报
	//--用户注册、创角
	$sql = "
		select
			`gameAreaId`,
			concat(substr(`registerDateTime`, 1, 13), ':00:00') as datetime,
			count(*) as `registerAccountNum`,
			count(distinct registerIpAddress) as `registerIpAddressNum`,
			count(roleName) as `createRoleNum`
		from
			`t_data_game_account`
		where
			`registerDateTime` >= '{$statEndDateTime}'
		group by
			`gameAreaId`, 
			`datetime`
	";
	
	if( ! (($data = $GmDb->getArray($sql)) === false) ) {
		foreach($data as $v) {
			$sql = "
				insert into
					`t_data_hourly_report`
				set
					`gameAreaId` = '{$v['gameAreaId']}',
					`datetime` = '{$v['datetime']}',
					`registerAccountNum` = '{$v['registerAccountNum']}',
					`registerIpAddressNum` = '{$v['registerIpAddressNum']}',
					`createRoleNum` = '{$v['createRoleNum']}'
				on duplicate key update
					`registerAccountNum` = '{$v['registerAccountNum']}',
					`registerIpAddressNum` = '{$v['registerIpAddressNum']}',
					`createRoleNum` = '{$v['createRoleNum']}'
			";
			$GmDb->query($sql);
		}
	}
	
	//--登录
	$sql = "
		select 
			b.`gameAreaId`,
			concat(substr(a.`loginDateTime`, 1, 13), ':00:00') as datetime,
			count(distinct a.`userId`) as loginAccountNum,
			count(distinct a.`loginIpAddress`) as loginIpAddressNum
		from
			`t_data_game_account_login` a
		left join
			`t_data_game_account` b
		on
			a.`userId` = b.`userId`
		where
			`registerDateTime` >= '{$statEndDateTime}'
		group by
			b.`gameAreaId`,
			`datetime`
	";
	
	if( ! (($data = $GmDb->getArray($sql)) === false) ) {
		foreach($data as $v) {
			$sql = "
				insert into
					`t_data_hourly_report`
				set
					`gameAreaId` = '{$v['gameAreaId']}',
					`datetime` = '{$v['datetime']}',
					`loginAccountNum` = '{$v['loginAccountNum']}',
					`loginIpAddressNum` = '{$v['loginIpAddressNum']}'
				on duplicate key update
					`loginAccountNum` = '{$v['loginAccountNum']}',
					`loginIpAddressNum` = '{$v['loginIpAddressNum']}'
			";
			$GmDb->query($sql);
		}
	}
	
	//--在线
	$sql = "
		select
			`gameAreaId`,
			concat(substr(`statDateTime`, 1, 13)) as datetime,
			max(`onlineRoleNum`) as `maxOnlineRoleNum`,
			avg(`onlineRoleNum`) as `avgOnlineRoleNum`
		from
			`t_data_game_online`
		where
			`statDateTime` >= '{$statEndDateTime}'
		group by
			`gameAreaId`,
			`datetime`
	";
	
	if( ! (($data = $GmDb->getArray($sql)) === false) ) {
		foreach ($data as $v) {
			$sql = "
				insert into
					`t_data_hourly_report`
				set
					`gameAreaId` = '{$v['gameAreaId']}',
					`datetime` = '{$v['datetime']}',
					`maxOnlineRoleNum` = '{$v['maxOnlineRoleNum']}',
					`avgOnlineRoleNum` = '{$v['avgOnlineRoleNum']}'
				on duplicate key update
					`maxOnlineRoleNum` = '{$v['maxOnlineRoleNum']}',
					`avgOnlineRoleNum` = '{$v['avgOnlineRoleNum']}'
			";
			$GmDb->query($sql);
		}
	}
	
	//--充值
	$sql = "
		select
			`gameAreaId`,
			concat(substr(`payDateTime`, 1, 13)) as datetime,
			sum(`money`) as payMoney,
			count(distinct a.`userId`) as payAccountNum
		from
			`t_data_game_pay` a
		left join
			`t_data_game_account` b
		on
			a.`userId` = b.`userId`
		where
			`payDateTime` >= '{$statEndDateTime}'
			and
			a.`orderId` not like 'SEND_VIP_%'
			and
			a.`orderId` not like 'TEST_%'
		group by
			`gameAreaId`,
			`datetime`
	";
	
	if( ! (($data = $GmDb->getArray($sql)) === false) ) {
		foreach ($data as $v) {
			$sql = "
				insert into
					`t_data_hourly_report`
				set
					`gameAreaId` = '{$v['gameAreaId']}',
					`datetime` = '{$v['datetime']}',
					`payMoney` = '{$v['payMoney']}',
					`payAccountNum` = '{$v['payAccountNum']}'
				on duplicate key update
					`payMoney` = '{$v['payMoney']}',
					`payAccountNum` = '{$v['payAccountNum']}'
			";
			$GmDb->query($sql);
		}
	}
	
	
	//生成日报
	//--用户注册、创角
	$sql = "
		select
			`gameAreaId`,
			concat(substr(`registerDateTime`, 1, 10), ':00:00') as datetime,
			count(*) as `registerAccountNum`,
			count(distinct registerIpAddress) as `registerIpAddressNum`,
			count(roleName) as `createRoleNum`
		from
			`t_data_game_account`
		where
			`registerDateTime` >= '{$statEndDateTime}'
		group by
			`gameAreaId`,
			`datetime`
	";
	
	if( ! (($data = $GmDb->getArray($sql)) === false) ) {
		foreach($data as $v) {
			$sql = "
				insert into
					`t_data_daily_report`
				set
					`gameAreaId` = '{$v['gameAreaId']}',
					`datetime` = '{$v['datetime']}',
					`registerAccountNum` = '{$v['registerAccountNum']}',
					`registerIpAddressNum` = '{$v['registerIpAddressNum']}',
					`createRoleNum` = '{$v['createRoleNum']}'
				on duplicate key update
					`registerAccountNum` = '{$v['registerAccountNum']}',
					`registerIpAddressNum` = '{$v['registerIpAddressNum']}',
					`createRoleNum` = '{$v['createRoleNum']}'
			";
			$GmDb->query($sql);
		}
	}
	
	//--登录
	$sql = "
		select
			b.`gameAreaId`,
			concat(substr(a.`loginDateTime`, 1, 10), ':00:00') as datetime,
			count(distinct a.`userId`) as loginAccountNum,
			count(distinct a.`loginIpAddress`) as loginIpAddressNum
		from
			`t_data_game_account_login` a
		left join
			`t_data_game_account` b
		on
			a.`userId` = b.`userId`
		where
			`registerDateTime` >= '{$statEndDateTime}'
		group by
			b.`gameAreaId`,
			`datetime`
	";
	
	if( ! (($data = $GmDb->getArray($sql)) === false) ) {
		foreach($data as $v) {
			$sql = "
				insert into
					`t_data_daily_report`
				set
					`gameAreaId` = '{$v['gameAreaId']}',
					`datetime` = '{$v['datetime']}',
					`loginAccountNum` = '{$v['loginAccountNum']}',
					`loginIpAddressNum` = '{$v['loginIpAddressNum']}'
				on duplicate key update
					`loginAccountNum` = '{$v['loginAccountNum']}',
					`loginIpAddressNum` = '{$v['loginIpAddressNum']}'
			";
			$GmDb->query($sql);
		}
	}
	
	//--在线
	$sql = "
		select
			`gameAreaId`,
			concat(substr(`statDateTime`, 1, 10)) as datetime,
			max(`onlineRoleNum`) as `maxOnlineRoleNum`,
			avg(`onlineRoleNum`) as `avgOnlineRoleNum`
		from
			`t_data_game_online`
		where
			`statDateTime` >= '{$statEndDateTime}'
		group by
			`gameAreaId`,
			`datetime`
	";
	
	if( ! (($data = $GmDb->getArray($sql)) === false) ) {
		foreach ($data as $v) {
			$sql = "
				insert into
					`t_data_daily_report`
				set
					`gameAreaId` = '{$v['gameAreaId']}',
					`datetime` = '{$v['datetime']}',
					`maxOnlineRoleNum` = '{$v['maxOnlineRoleNum']}',
					`avgOnlineRoleNum` = '{$v['avgOnlineRoleNum']}'
				on duplicate key update
					`maxOnlineRoleNum` = '{$v['maxOnlineRoleNum']}',
					`avgOnlineRoleNum` = '{$v['avgOnlineRoleNum']}'
			";
			$GmDb->query($sql);
		}
	}
	
	//--充值
	$sql = "
		select
			`gameAreaId`,
			concat(substr(`payDateTime`, 1, 10)) as datetime,
			sum(`money`) as payMoney,
			count(distinct a.`userId`) as payAccountNum
		from
			`t_data_game_pay` a
		left join
			`t_data_game_account` b
		on
			a.`userId` = b.`userId`
		where
			`payDateTime` >= '{$statEndDateTime}'
			and
			a.`orderId` not like 'SEND_VIP_%'
			and
			a.`orderId` not like 'TEST_%'
		group by
			`gameAreaId`,
			`datetime`
	";
	
	if( ! (($data = $GmDb->getArray($sql)) === false) ) {
		foreach ($data as $v) {
			$sql = "
				insert into
					`t_data_daily_report`
				set
					`gameAreaId` = '{$v['gameAreaId']}',
					`datetime` = '{$v['datetime']}',
					`payMoney` = '{$v['payMoney']}',
					`payAccountNum` = '{$v['payAccountNum']}'
				on duplicate key update
					`payMoney` = '{$v['payMoney']}',
					`payAccountNum` = '{$v['payAccountNum']}'
			";
			$GmDb->query($sql);
		}
	}
}

catch(Zw_Mysql_Exception $e) {
	$Log->write('数据库错误', 'ERROR');
}
catch(Exception $e) {
	$Log->write('系统错误', 'ERROR');
}