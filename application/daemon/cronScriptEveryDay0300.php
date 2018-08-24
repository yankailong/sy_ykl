<?php
set_time_limit(0);
ini_set('memory_limit','1024M');

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');

define('LOCK_FILE', dirname(__FILE__).'/lock/cronScriptEveryDay0300.lock');
define('LOG_LEVEL', 'DEBUG');

$LogFile = dirname(__FILE__).'/log/cronScriptEveryDay0300'.date('Y.m.d').'.log';

$Log = new Zw_Log();
$Log->setCurrLogLevel(LOG_LEVEL);
$Log->setLogFile($LogFile);

$handle = fopen(LOCK_FILE, 'w+');
if(!flock($handle, LOCK_EX|LOCK_NB)){
	$Log->write('进程已经启动，请不要重复启动');
	exit();
}

$options = getopt("d:");

if(isset($options['d'])) {
	$statDate = $options['d'];
}
else {
	$statDate = date('Y-m-d', time() - 86400);
}

$Log->write("statData:{$statDate}", 'DEBUG');

if(strlen($statDate) != 10 || checkdate(substr($statDate, 5, 2), substr($statDate, 8, 2), substr($statDate, 0, 4)) === false) {
	echo "Usage: cronScriptEveryDay0000.php [-d YYYY-MM-DD]\n";
	$Log->write('时间格式非法');
	exit();
}

$GmDb = new Zw_Mysql();
$GmDb->setLog($Log);
$GmDb->connect($gmDatabaseHost, $gmDatabaseUsername, $gmDatabasePassword, $gmDatabaseName);

//等级分布
$sql = "
	select 
		b.`gameAreaId`,
		a.`currentLevel`,
		count(a.`userId`) as `roleNum`,
		count(if(b.`totalPayMoney` > 0, b.`totalPayMoney`, null)) as `payRoleNum`
	from
		(
			select
				`userId`,
				max(`level`) as `currentLevel`
			from
				`t_data_game_levelUp`
			where
				`operatorDateTime` <= '{$statDate} 23:59:59'
			group by
				`userId`
		) a
	left join
		`t_data_game_account` b
	on
		a.`userId` = b.`userId`
	group by
		b.`gameAreaId`,
		a.`currentLevel`
	order by
		b.`gameAreaId`,
		a.`currentLevel`
";
$tmpArray = $GmDb->getArray($sql);

foreach ($tmpArray as $k => $v) {
	$sql = "
		insert into
			`t_data_level_report`
		set
			`gameAreaId` = '{$v['gameAreaId']}',
			`date` = '{$statDate}',
			`level` = '{$v['currentLevel']}',
			`roleNum` = '{$v['roleNum']}',
			`payRoleNum` = '{$v['payRoleNum']}'
		on duplicate key update
			`roleNum` = '{$v['roleNum']}',
			`payRoleNum` = '{$v['payRoleNum']}'
	";
	$GmDb->query($sql);
}


//留存数据
$sql = "
	select
		`gameAreaId`,
		substr(b.`registerDateTime`, 1, 10) as `registerDate`,
		'{$statDate}' as `loginDate`,
		count(*) as `loginAccountNum`
	from
		(
			select
				distinct `userId`
			from
				`t_data_game_account_login` a
			where
				`loginDateTime` like '{$statDate}%'
		) a
	left join
		`t_data_game_account` b
	on
		a.`userId` = b.`userId`
	group by
		`gameAreaId`, substr(b.`registerDateTime`, 1, 10)
";

if( ! (($data = $GmDb->getArray($sql)) === false) ) {
	foreach ($data as $v) {
		$registerTimestamp = strtotime($v['registerDate']);
		$statTimestamp = strtotime($statDate);
		
		if($registerTimestamp < $statTimestamp) {
			$daysFromRegister = ($statTimestamp - $registerTimestamp) / 86400;
	
			$sql = "
				insert into
					`t_data_account_remain`
				set
					`gameAreaId` = '{$v['gameAreaId']}',
					`registerDate` = '{$v['registerDate']}',
					`daysFromRegister` = '{$daysFromRegister}',
					`loginAccountNum` = '{$v['loginAccountNum']}'
				on duplicate key update
					`loginAccountNum` = '{$v['loginAccountNum']}'
			";
			$GmDb->query($sql);
		}
	}
}

//消费统计
$sql = "
	select
		b.`gameAreaId`,
		a.`currencyTypeId`,
		a.`functionId`,
		a.`subFunctionId`,
		sum(a.`changeValue`) as `getValue`
	from
		`t_data_game_currency` a
	left join
		`t_data_game_account` b
	on
		a.`userId` = b.`userId`
	where
		a.`operatorDateTime` like '{$statDate} %'
		and
		a.`changeValue` > 0
	group by
		b.`gameAreaId`,
		a.`currencyTypeId`,
		a.`functionId`,
		a.`subFunctionId`
";

if( ! (($data = $GmDb->getArray($sql)) === false) ) {
	foreach ($data as $v) {
		$sql = "
			insert into
				`t_data_currency_summary`
			set
				`gameAreaId` = '{$v['gameAreaId']}',
				`date` = '{$statDate}',
				`currencyTypeId` = '{$v['currencyTypeId']}',
				`functionId` = '{$v['functionId']}',
				`subFunctionId` = '{$v['subFunctionId']}',
				`getValue` = '{$v['getValue']}'
			on duplicate key update
				`getValue` = '{$v['getValue']}'
		";
		
		$GmDb->query($sql);
	}
}

$sql = "
	select
		b.`gameAreaId`,
		a.`currencyTypeId`,
		a.`functionId`,
		a.`subFunctionId`,
		abs(sum(a.`changeValue`)) as `costValue`
	from
		`t_data_game_currency` a
	left join
		`t_data_game_account` b
	on
		a.`userId` = b.`userId`
	where
		a.`operatorDateTime` like '{$statDate} %'
		and
		a.`changeValue` < 0
	group by
		b.`gameAreaId`,
		a.`currencyTypeId`,
		a.`functionId`,
		a.`subFunctionId`
";

if( ! (($data = $GmDb->getArray($sql)) === false) ) {
	foreach ($data as $v) {
		$sql = "
			insert into
				`t_data_currency_summary`
			set
				`gameAreaId` = '{$v['gameAreaId']}',
				`date` = '{$statDate}',
				`currencyTypeId` = '{$v['currencyTypeId']}',
				`functionId` = '{$v['functionId']}',
				`subFunctionId` = '{$v['subFunctionId']}',
				`costValue` = '{$v['costValue']}'
			on duplicate key update
				`costValue` = '{$v['costValue']}'
		";
	
		$GmDb->query($sql);
	}
}

//充值统计
$sql = "
	select
		b.`gameAreaId`,
		sum(a.`money`) as `money`
	from
		`t_data_game_pay` a
	left join
		`t_data_game_account` b
	on
		a.`userId` = b.`userId`
	where
		a.`payDateTime` like '{$statDate} %'
		and
		a.`orderId` not like 'SEND_VIP_%'
		and
		a.`orderId` not like 'TEST_%'
	group by
		b.`gameAreaId`
";

if( ! (($data = $GmDb->getArray($sql)) === false) ) {
	foreach ($data as $v) {
		$sql = "
			insert into
				`t_data_pay_summary`
			set
				`gameAreaId` = '{$v['gameAreaId']}',
				`date` = '{$statDate}',
				`money` = '{$v['money']}'
			on duplicate key update
				`money` = '{$v['money']}'
		";
		
		$GmDb->query($sql);
	}
}