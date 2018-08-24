<?php
set_time_limit(0);

include_once (dirname(__FILE__).'/config/database.php');
include_once (dirname(__FILE__).'/class/Log.inc');
include_once (dirname(__FILE__).'/class/Mysql/Exception.inc');
include_once (dirname(__FILE__).'/class/Mysql.inc');


define('LOCK_FILE', dirname(__FILE__).'/lock/gameInstallDaemon.lock');
define('LOG_LEVEL', 'DEBUG');

$LogFile = dirname(__FILE__).'/log/gameInstallDaemon'.date('Y.m.d').'.log';

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

while (1) {
	$LogFile = dirname(__FILE__).'/log/gameInstallDaemon'.date('Y.m.d').'.log';
	$Log->setLogFile($LogFile);
	
	try {
		$sql = "
			select
				`queueId`,
				`gameAreaId`
			from
				`t_data_game_install_queue`
			where
				`status` = 1
			order by
				`operateDatetime`
			limit 1
		";
		
		if( ($row = $GmDb->getRow($sql)) === false ) {
			throw new Exception('没有任务', 0);
		}
		
		$queueId = $row['queueId'];
		$gameAreaId = $row['gameAreaId'];
		$Log->write("queueId:{$queueId}", 'DEBUG');
		$Log->write("gameAreaId:{$gameAreaId}", 'DEBUG');
			
		$sql = "
			update
				`t_data_game_install_queue`
			set
				`status` = 2
			where
				`queueId` = '{$queueId}'
				and
				`status` = 1
		";
		$GmDb->query($sql);
			
		if( $GmDb->getAffectedRow() != 1 ) {
			throw new Exception('修改任务状态失败', 0);
		}
		
		$sql = "
			select
				a.`operatorId`,
				b.`operatorFlag`,
				a.`areaNum`,
				a.`portGroup`,
				a.`domain`,
				a.`lineNum`,
				unix_timestamp(a.`openDatetime`) as `openServerTimestamp`,
				a.`battleServerId`,
				c.`majorVersion`,
				c.`minorVersion`,
				c.`teenyVersion`,
				c.`releaseVersion`,
				e.`ipAddress`
			from
				`t_data_game_area` a
			left join
				`t_data_operator` b
			on
				a.`operatorId` = b.`operatorId`
			left join
				`t_data_game_version` c
			on
				a.`version` = c.`id`
			left join
				`t_data_server_ip` d
			on
				a.`serverId` = d.`serverId`
			left join
				`t_data_ip` e
			on
				d.`ipId` = e.`ipId`
			left join
				`t_cfg_ip_type` f
			on
				e.`ipTypeId` = f.`ipTypeId`
				and
				f.`isDefault` = 1
			where
				a.`gameAreaId` = '{$gameAreaId}'
				and
				a.`status` = 1
		";
		
		if ( ($row = $GmDb->getRow($sql)) === false ) {
			throw new Exception('获取游戏区信息失败', 1);
		}
		
		$operatorId = $row['operatorId'];
		$operatorFlag = $row['operatorFlag'];
		$areaNum = $row['areaNum'];
		$portGroup = $row['portGroup'];
		$domain = $row['domain'];
		$lineNum = $row['lineNum'];
		$openServerTimestamp =  $row['openServerTimestamp'];
		$majorVersion = $row['majorVersion'];
		$minorVersion = $row['minorVersion'];
		$teenyVersion = $row['teenyVersion'];
		$releaseVersion = $row['releaseVersion'];
		$ipAddress = $row['ipAddress'];
		$battleServerId = $row['battleServerId'];
		$Log->write("operatorId:{$operatorId}", 'DEBUG');
		$Log->write("operatorFlag:{$operatorFlag}", 'DEBUG');
		$Log->write("areaNum:{$areaNum}", 'DEBUG');
		$Log->write("portGroup:{$portGroup}", 'DEBUG');
		$Log->write("domain:{$domain}", 'DEBUG');
		$Log->write("lineNum:{$lineNum}", 'DEBUG');
		$Log->write("openServerTimestamp:{$$openServerTimestamp}", 'DEBUG');
		$Log->write("majorVersion:{$majorVersion}", 'DEBUG');
		$Log->write("minorVersion:{$minorVersion}", 'DEBUG');
		$Log->write("teenyVersion:{$teenyVersion}", 'DEBUG');
		$Log->write("releaseVersion:{$releaseVersion}", 'DEBUG');
		$Log->write("ipAddress:{$ipAddress}", 'DEBUG');
		$Log->write("battleServerId:{$battleServerId}", 'DEBUG');
		
		$sql = "
			select
				`version`
			from
				`t_data_game_version`
			where
				(
					`haveClient` = 1
					or
					`haveInterface` = 1
				)
				and
				((majorVersion * 1000 + minorVersion) * 1000 + teenyVersion) * 1000 + releaseVersion <= (({$majorVersion} * 1000 + {$minorVersion}) * 1000 + {$teenyVersion}) * 1000 + {$releaseVersion}
			order by
				`majorVersion` desc,
				`minorVersion` desc,
				`teenyVersion` desc,
				`releaseVersion` desc
			limit 1
		";
		$interfaceVersion = $GmDb->getColumn($sql);
		
		if($interfaceVersion === false) {
			throw new Exception('获取interface版本号失败', 2);
		}
		
		$sql = "
			select
				`version`
			from
				`t_data_game_version`
			where
				`haveServer` = 1
				and
				((majorVersion * 1000 + minorVersion) * 1000 + teenyVersion) * 1000 + releaseVersion <= (({$majorVersion} * 1000 + {$minorVersion}) * 1000 + {$teenyVersion}) * 1000 + {$releaseVersion}
			order by
				`majorVersion` desc,
				`minorVersion` desc,
				`teenyVersion` desc,
				`releaseVersion` desc
			limit 1
		";
		$serverVersion = $GmDb->getColumn($sql);
		
		if($serverVersion === false) {
			throw new Exception('获取server版本号失败', 3);
		}
		
		$Log->write("interfaceVersion: {$interfaceVersion}", 'DEBUG');
		$Log->write("serverVersion:{$serverVersion}", 'DEBUG');
		
		$hostname = php_uname('n');
		
		switch (true) {
			case (preg_match('/^ops_[0-9]{3}\.styx\.china\.lab$/', $hostname)):
				$gmToolDomain = 'gm.styx.china.lab';
				break;
				
			case (preg_match('/^ops_[0-9]{3}\.styx\.china$/', $hostname)):
				$gmToolDomain = 'gm.styx.9377.com';
				break;

			case (preg_match('/^ops_[0-9]{3}\.styx\.europe$/', $hostname)):
				$gmToolDomain = 'gm-styx.9377.eu';
				break;

            case (preg_match('/^ops_[0-9]{3}\.styx\.vietnam$/', $hostname)):
                $gmToolDomain = 'gm.thienha.aivo.vn';
                break;

            case (preg_match('/^ops_[0-9]{3}\.styx\.gonghui$/', $hostname)):
                $gmToolDomain = 'gm.qxfm.883wan.com';
                break;
				
			default:
				$hostname = '';
		}
		
		$sql = "
			select
				a.`portGroup`,
				c.`ipAddress`
			from
				`t_data_battle_server` a
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
				and
				d.`isDefault` = 1
			where
				a.`battleServerId` = '{$battleServerId}'
		";
		
		if ( ($row = $GmDb->getRow($sql)) === false ) {
			throw new Exception('获取跨服信息失败', 1);
		}
		
		$battleServerIp = $row['ipAddress'];
		$battleServerPortGroup = $row['portGroup'];
		$Log->write("battleServerIp:{$battleServerIp}", 'DEBUG');
		$Log->write("battleServerPortGroup:{$battleServerPortGroup}", 'DEBUG');
		
		$command = "/home/styx/script/installGameServer.sh --operatorId={$operatorId} --operatorFlag='{$operatorFlag}' --areaNum={$areaNum} --portGroup={$portGroup} --domain='{$domain}' --lineNum={$lineNum} --openServerTimestamp={$openServerTimestamp} --battleServerIp='{$battleServerIp}' --battleServerPortGroup={$battleServerPortGroup} --gmToolDomain='{$gmToolDomain}' --interfaceVersion='{$interfaceVersion}' --serverVersion='{$serverVersion}' --ipAddress='{$ipAddress}' 2>&1";
		$Log->write("command: {$command}", 'DEBUG');
		
		exec($command, $result, $status);
		
		$logMsg = '';
		
		foreach ($result as $v) {
			$v = addslashes($v);
			$logMsg .= "{$v}</br>";
		}
		
		if( !($status === 0) ) {
			throw new Exception('执行安装脚本失败', 4);
		}
		
		$sql = "
			update
				`t_data_game_install_queue`
			set
				`status` = '3',
				`log` = '{$logMsg}'
			where
				`queueId` = '{$queueId}'
		";
		$GmDb->query($sql);
		
		$sql = "
			update
				`t_data_game_area`
			set
				`status` = 2
			where
				`gameAreaId` = '{$gameAreaId}'
		";
		$GmDb->query($sql);
	}
	
	catch(Exception $e) {
		$errorCode = $e->getCode();
		$errorMessage = $e->getMessage();
		
		if($errorCode > 0) {
			$Log->write("{$errorMessage}");
			$sql = "
				update
					`t_data_game_install_queue`
				set
					`status` = '4',
					`log` = '{$logMsg}'
				where
					`queueId` = '{$queueId}'
			";
			$GmDb->query($sql);
		}
	}
	
	unset($result);
	sleep(30);
}