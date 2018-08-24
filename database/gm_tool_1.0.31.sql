/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : syz_admin

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2018-07-23 19:36:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_cfg_item_function`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_item_function`;
CREATE TABLE `t_cfg_item_function` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `functionId` int(10) unsigned DEFAULT NULL COMMENT '功能id',
  `functionChineseName` varchar(255) DEFAULT NULL COMMENT '功能名称',
  `functionVietnameseName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=231 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_item_function
-- ----------------------------
INSERT INTO `t_cfg_item_function` VALUES ('1', '1', '拾取', null);
INSERT INTO `t_cfg_item_function` VALUES ('2', '2', '邮件获取', null);
INSERT INTO `t_cfg_item_function` VALUES ('3', '3', '签到奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('4', '4', '在线奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('5', '5', '礼包码获取', null);
INSERT INTO `t_cfg_item_function` VALUES ('6', '6', '合成', null);
INSERT INTO `t_cfg_item_function` VALUES ('7', '7', '采集获得', null);
INSERT INTO `t_cfg_item_function` VALUES ('8', '8', '交易', null);
INSERT INTO `t_cfg_item_function` VALUES ('9', '9', '领取神秘大礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('10', '10', '维护补偿', null);
INSERT INTO `t_cfg_item_function` VALUES ('11', '11', '使用道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('12', '12', '批量使用', null);
INSERT INTO `t_cfg_item_function` VALUES ('13', '13', '礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('14', '14', '随机礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('15', '15', '打折券', null);
INSERT INTO `t_cfg_item_function` VALUES ('16', '16', '改名', null);
INSERT INTO `t_cfg_item_function` VALUES ('17', '17', '重置属性', null);
INSERT INTO `t_cfg_item_function` VALUES ('18', '18', '重置天赋', null);
INSERT INTO `t_cfg_item_function` VALUES ('19', '19', '传送', null);
INSERT INTO `t_cfg_item_function` VALUES ('20', '20', '原地复活', null);
INSERT INTO `t_cfg_item_function` VALUES ('21', '21', '追踪', null);
INSERT INTO `t_cfg_item_function` VALUES ('22', '22', '金蛋', null);
INSERT INTO `t_cfg_item_function` VALUES ('23', '23', '经验球集满', null);
INSERT INTO `t_cfg_item_function` VALUES ('24', '24', '装备经验球', null);
INSERT INTO `t_cfg_item_function` VALUES ('25', '25', '名师礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('26', '26', '祈福消耗', null);
INSERT INTO `t_cfg_item_function` VALUES ('27', '27', '许愿', null);
INSERT INTO `t_cfg_item_function` VALUES ('28', '28', '星辰目标点亮奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('29', '29', '时装培养', null);
INSERT INTO `t_cfg_item_function` VALUES ('30', '30', '活跃度', null);
INSERT INTO `t_cfg_item_function` VALUES ('31', '31', '名人堂奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('32', '32', '兑换', null);
INSERT INTO `t_cfg_item_function` VALUES ('33', '33', '七日投资奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('34', '34', '等级投资奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('35', '35', '投资签到奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('36', '36', '副本找回', null);
INSERT INTO `t_cfg_item_function` VALUES ('37', '37', '技能激活', null);
INSERT INTO `t_cfg_item_function` VALUES ('38', '38', '技能树分页激活', null);
INSERT INTO `t_cfg_item_function` VALUES ('39', '39', '成就奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('40', '40', '图书馆采集', null);
INSERT INTO `t_cfg_item_function` VALUES ('41', '41', '藏宝图寻宝', null);
INSERT INTO `t_cfg_item_function` VALUES ('42', '42', '藏宝图获得', null);
INSERT INTO `t_cfg_item_function` VALUES ('43', '43', '物品分解', null);
INSERT INTO `t_cfg_item_function` VALUES ('44', '44', '物品丢弃', null);
INSERT INTO `t_cfg_item_function` VALUES ('45', '45', '离开活动', null);
INSERT INTO `t_cfg_item_function` VALUES ('46', '46', '活动切地图', null);
INSERT INTO `t_cfg_item_function` VALUES ('47', '101', '任务奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('48', '102', '任务提交', null);
INSERT INTO `t_cfg_item_function` VALUES ('49', '103', '任务放弃', null);
INSERT INTO `t_cfg_item_function` VALUES ('50', '104', '循环任务随机奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('51', '105', 'boss击杀奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('52', '111', '副本奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('53', '112', '进入副本', null);
INSERT INTO `t_cfg_item_function` VALUES ('54', '113', '给予副本NPC', null);
INSERT INTO `t_cfg_item_function` VALUES ('55', '114', '魔域世界奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('56', '115', '材料副本满星奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('57', '121', '仓库获取', null);
INSERT INTO `t_cfg_item_function` VALUES ('58', '122', '存仓库', null);
INSERT INTO `t_cfg_item_function` VALUES ('59', '131', '出售', null);
INSERT INTO `t_cfg_item_function` VALUES ('60', '132', '回购', null);
INSERT INTO `t_cfg_item_function` VALUES ('61', '133', '商店购买', null);
INSERT INTO `t_cfg_item_function` VALUES ('62', '134', '商城购买', null);
INSERT INTO `t_cfg_item_function` VALUES ('63', '141', '刷新神秘商店', null);
INSERT INTO `t_cfg_item_function` VALUES ('64', '142', '购买神秘商店道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('65', '143', '购买神秘商店道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('66', '151', '黑市入场券', null);
INSERT INTO `t_cfg_item_function` VALUES ('67', '152', '黑市购买道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('68', '171', '法宝培养', null);
INSERT INTO `t_cfg_item_function` VALUES ('69', '172', '法宝技能学习', null);
INSERT INTO `t_cfg_item_function` VALUES ('70', '181', '拍卖', null);
INSERT INTO `t_cfg_item_function` VALUES ('71', '182', '拍卖行购买', null);
INSERT INTO `t_cfg_item_function` VALUES ('72', '183', '拍卖行退回', null);
INSERT INTO `t_cfg_item_function` VALUES ('73', '184', '拍卖行取消拍卖', null);
INSERT INTO `t_cfg_item_function` VALUES ('74', '191', '抽奖消耗', null);
INSERT INTO `t_cfg_item_function` VALUES ('75', '192', '抽奖商店兑换', null);
INSERT INTO `t_cfg_item_function` VALUES ('76', '193', '抽奖获得道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('77', '194', '积分商城购买', null);
INSERT INTO `t_cfg_item_function` VALUES ('78', '195', '抽奖周奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('79', '201', '宠物穿装备', null);
INSERT INTO `t_cfg_item_function` VALUES ('80', '202', '宠物升星', null);
INSERT INTO `t_cfg_item_function` VALUES ('81', '204', '宠物技能升级', null);
INSERT INTO `t_cfg_item_function` VALUES ('82', '207', '翅膀升级', null);
INSERT INTO `t_cfg_item_function` VALUES ('83', '211', '宝石镶嵌', null);
INSERT INTO `t_cfg_item_function` VALUES ('84', '212', '摘取宝石', null);
INSERT INTO `t_cfg_item_function` VALUES ('85', '213', '宝石开孔', null);
INSERT INTO `t_cfg_item_function` VALUES ('86', '215', '装备升星', null);
INSERT INTO `t_cfg_item_function` VALUES ('87', '216', '套装升级', null);
INSERT INTO `t_cfg_item_function` VALUES ('88', '217', '套装升华', null);
INSERT INTO `t_cfg_item_function` VALUES ('89', '214', '套装拆解', null);
INSERT INTO `t_cfg_item_function` VALUES ('90', '218', '装备解绑', null);
INSERT INTO `t_cfg_item_function` VALUES ('91', '219', '装备合成', null);
INSERT INTO `t_cfg_item_function` VALUES ('92', '220', '装备升阶消耗  ', null);
INSERT INTO `t_cfg_item_function` VALUES ('93', '221', '开起装备箱子', null);
INSERT INTO `t_cfg_item_function` VALUES ('94', '311', 'VIP礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('95', '312', 'VIP卡礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('96', '314', '赏金任务', null);
INSERT INTO `t_cfg_item_function` VALUES ('97', '321', '创建帮派', null);
INSERT INTO `t_cfg_item_function` VALUES ('98', '322', '帮派捐献', null);
INSERT INTO `t_cfg_item_function` VALUES ('99', '323', '帮派BOSS培养', null);
INSERT INTO `t_cfg_item_function` VALUES ('100', '324', '军团任务', null);
INSERT INTO `t_cfg_item_function` VALUES ('101', '325', '帮派聊天任务', null);
INSERT INTO `t_cfg_item_function` VALUES ('102', '326', '帮派红包返回', null);
INSERT INTO `t_cfg_item_function` VALUES ('103', '412', '极限挑战', null);
INSERT INTO `t_cfg_item_function` VALUES ('104', '501', '帮派战奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('105', '502', '帮派战日常奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('106', '503', '大胃王', null);
INSERT INTO `t_cfg_item_function` VALUES ('107', '504', '世界BOSS击杀奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('108', '505', '世界BOSS排行奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('109', '506', '阵营战奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('110', '507', '天降宝箱日常奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('111', '508', '赛马活动奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('112', '509', '天下第一活动奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('113', '510', '神秘庇护所切换地图', null);
INSERT INTO `t_cfg_item_function` VALUES ('114', '511', '进入打宝地图', null);
INSERT INTO `t_cfg_item_function` VALUES ('115', '512', '攻城战奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('116', '513', '开服活动宠物返还', null);
INSERT INTO `t_cfg_item_function` VALUES ('117', '514', '开服活动攻城战', null);
INSERT INTO `t_cfg_item_function` VALUES ('118', '515', '开服活动单件回收', null);
INSERT INTO `t_cfg_item_function` VALUES ('119', '601', '七日登陆奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('120', '601', '首冲', null);
INSERT INTO `t_cfg_item_function` VALUES ('121', '602', '新服特惠', null);
INSERT INTO `t_cfg_item_function` VALUES ('122', '604', '每日充值', null);
INSERT INTO `t_cfg_item_function` VALUES ('123', '605', '开服活动', null);
INSERT INTO `t_cfg_item_function` VALUES ('124', '606', '开服累计充值', null);
INSERT INTO `t_cfg_item_function` VALUES ('125', '607', '三宠礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('126', '608', '装备合成', null);
INSERT INTO `t_cfg_item_function` VALUES ('127', '609', '装备升阶得到', null);
INSERT INTO `t_cfg_item_function` VALUES ('128', '611', '装备回收', null);
INSERT INTO `t_cfg_item_function` VALUES ('129', '612', '元宝回收', null);
INSERT INTO `t_cfg_item_function` VALUES ('130', '613', '装备回购', null);
INSERT INTO `t_cfg_item_function` VALUES ('131', '614', '死亡掉落', null);
INSERT INTO `t_cfg_item_function` VALUES ('132', '615', '星脉升级', null);
INSERT INTO `t_cfg_item_function` VALUES ('133', '616', '天灵升级', null);
INSERT INTO `t_cfg_item_function` VALUES ('134', '617', '装备回收任务消耗', null);
INSERT INTO `t_cfg_item_function` VALUES ('135', '618', '装备回收任务获得', null);
INSERT INTO `t_cfg_item_function` VALUES ('136', '619', '随机镖车', null);
INSERT INTO `t_cfg_item_function` VALUES ('137', '620', '诅咒系统升级', null);
INSERT INTO `t_cfg_item_function` VALUES ('138', '621', '物品分解获得', null);
INSERT INTO `t_cfg_item_function` VALUES ('139', '622', '系统开放', null);
INSERT INTO `t_cfg_item_function` VALUES ('140', '1001', '合服充值礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('141', '1002', '合服限时抢购', null);
INSERT INTO `t_cfg_item_function` VALUES ('142', '1003', '合服三宠礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('143', '1051', '每日冲值奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('144', '1052', '每日冲值排行榜奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('145', '1053', '每日冲值团购奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('146', '1054', '特惠礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('147', '1101', '双十一登陆礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('148', '1102', '双十一抽奖礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('149', '1103', '双十一登陆礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('150', '1104', '双十一购买限时道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('151', '1105', '双十一领取活跃度礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('152', '1106', '双十一在线礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('153', '1107', '双十一许愿礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('154', '1108', '双十一每日充值', null);
INSERT INTO `t_cfg_item_function` VALUES ('155', '1109', '双十一购买限时道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('156', '1110', '双十一法宝暴击返回道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('157', '1111', '双十一累计消费奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('158', '1112', '双十一累计冲值奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('159', '1113', '双十一购买限时道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('160', '1114', '双十一装备魔化返回道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('161', '1115', '双十一购买道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('162', '1116', '双十一幻化幸运草奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('163', '1117', '双十一情义佩等级奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('164', '1118', '双十一友情值奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('165', '1119', '双十一名师等级奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('166', '1120', '双十一抽奖排行榜奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('167', '1121', '双十一消费排行榜奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('168', '1122', '双十一消费排行榜奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('169', '1123', '双十一冲值排行榜奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('170', '1124', '双十一答题排行榜奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('171', '1201', '黄钻新手礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('172', '1202', '黄钻每日礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('173', '1203', '年费黄钻额外每日礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('174', '1204', '黄钻等级礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('175', '1205', '蓝钻新手礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('176', '1206', '蓝钻每日礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('177', '1207', '年费蓝钻额外每日礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('178', '1208', '蓝钻等级礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('179', '1209', '豪华蓝钻额外每日礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('180', '1210', '腾讯七日登陆礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('181', '1301', '360加速球', null);
INSERT INTO `t_cfg_item_function` VALUES ('182', '1302', '360游戏大厅', null);
INSERT INTO `t_cfg_item_function` VALUES ('183', '1303', '360加速特权', null);
INSERT INTO `t_cfg_item_function` VALUES ('184', '1304', '360卫士特权', null);
INSERT INTO `t_cfg_item_function` VALUES ('185', '1305', 'v计划', null);
INSERT INTO `t_cfg_item_function` VALUES ('186', '1306', '手机礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('187', '1307', '老玩家回归活动累计登陆', null);
INSERT INTO `t_cfg_item_function` VALUES ('188', '1308', '老玩家回归活动每日冲值', null);
INSERT INTO `t_cfg_item_function` VALUES ('189', '1309', '老玩家回归活动累计冲值', null);
INSERT INTO `t_cfg_item_function` VALUES ('190', '1310', '搜狗皮肤登陆', null);
INSERT INTO `t_cfg_item_function` VALUES ('191', '1311', 'TGP新手礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('192', '1312', 'TGP每日礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('193', '1313', 'TGP等级礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('194', '1401', '跨服抽奖奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('195', '1402', 'PK掉落装备', null);
INSERT INTO `t_cfg_item_function` VALUES ('196', '1403', '封测活动', null);
INSERT INTO `t_cfg_item_function` VALUES ('197', '1404', '祝福油', null);
INSERT INTO `t_cfg_item_function` VALUES ('198', '1405', '装备部位升级', null);
INSERT INTO `t_cfg_item_function` VALUES ('199', '1406', '副本猜大小', null);
INSERT INTO `t_cfg_item_function` VALUES ('200', '1407', '微端奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('201', '1408', '武魂商店购买', null);
INSERT INTO `t_cfg_item_function` VALUES ('202', '1409', '武魂穿戴', null);
INSERT INTO `t_cfg_item_function` VALUES ('203', '1410', '卸载武魂', null);
INSERT INTO `t_cfg_item_function` VALUES ('204', '1411', '制作武魂', null);
INSERT INTO `t_cfg_item_function` VALUES ('205', '1412', '进入特殊boss地图', null);
INSERT INTO `t_cfg_item_function` VALUES ('206', '1413', '超级特惠', null);
INSERT INTO `t_cfg_item_function` VALUES ('207', '1414', '珍宝阁', null);
INSERT INTO `t_cfg_item_function` VALUES ('208', '1415', '翅膀升级道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('209', '1416', '幸运爆率', null);
INSERT INTO `t_cfg_item_function` VALUES ('210', '1417', '开启礼包消耗', null);
INSERT INTO `t_cfg_item_function` VALUES ('211', '1418', '鬼谷道人回收', null);
INSERT INTO `t_cfg_item_function` VALUES ('212', '1419', '时装培养', null);
INSERT INTO `t_cfg_item_function` VALUES ('213', '1420', 'yy大厅', null);
INSERT INTO `t_cfg_item_function` VALUES ('214', '1421', 'YYVIP', null);
INSERT INTO `t_cfg_item_function` VALUES ('215', '1422', '搜狗游戏大厅', null);
INSERT INTO `t_cfg_item_function` VALUES ('216', '1423', '月抽奖', null);
INSERT INTO `t_cfg_item_function` VALUES ('217', '1433', '合服活跃度', null);
INSERT INTO `t_cfg_item_function` VALUES ('218', '1434', '迅雷平台', null);
INSERT INTO `t_cfg_item_function` VALUES ('219', '1435', '公测活动', null);
INSERT INTO `t_cfg_item_function` VALUES ('220', '1436', '副本召唤怪物', null);
INSERT INTO `t_cfg_item_function` VALUES ('221', '1437', '渠道礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('222', '1438', '宝石升级', null);
INSERT INTO `t_cfg_item_function` VALUES ('223', '1439', '轮回塔', null);
INSERT INTO `t_cfg_item_function` VALUES ('224', '1440', '平台大厅', null);
INSERT INTO `t_cfg_item_function` VALUES ('225', '1441', '平台vip', null);
INSERT INTO `t_cfg_item_function` VALUES ('226', '1442', '商人', null);
INSERT INTO `t_cfg_item_function` VALUES ('227', '1443', '自选箱子', null);
INSERT INTO `t_cfg_item_function` VALUES ('228', '1444', '双十一法宝', null);
INSERT INTO `t_cfg_item_function` VALUES ('229', '1445', '平台奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('230', '1446', '邮件赎回', null);
