/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : syz_admin

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2018-07-18 17:06:19
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
) ENGINE=InnoDB AUTO_INCREMENT=196 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_item_function
-- ----------------------------
INSERT INTO `t_cfg_item_function` VALUES ('1', '2', '邮件获取', null);
INSERT INTO `t_cfg_item_function` VALUES ('2', '3', '签到奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('3', '4', '在线奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('4', '5', '礼包码获取', null);
INSERT INTO `t_cfg_item_function` VALUES ('5', '6', '合成', null);
INSERT INTO `t_cfg_item_function` VALUES ('6', '7', '采集获得', null);
INSERT INTO `t_cfg_item_function` VALUES ('7', '8', '交易', null);
INSERT INTO `t_cfg_item_function` VALUES ('8', '9', '领取神秘大礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('9', '10', '维护补偿', null);
INSERT INTO `t_cfg_item_function` VALUES ('10', '11', '使用道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('11', '12', '批量使用', null);
INSERT INTO `t_cfg_item_function` VALUES ('12', '13', '礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('13', '14', '随机礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('14', '15', '打折券', null);
INSERT INTO `t_cfg_item_function` VALUES ('15', '16', '改名', null);
INSERT INTO `t_cfg_item_function` VALUES ('16', '17', '重置属性', null);
INSERT INTO `t_cfg_item_function` VALUES ('17', '18', '重置天赋', null);
INSERT INTO `t_cfg_item_function` VALUES ('18', '19', '传送', null);
INSERT INTO `t_cfg_item_function` VALUES ('19', '20', '原地复活', null);
INSERT INTO `t_cfg_item_function` VALUES ('20', '21', '追踪', null);
INSERT INTO `t_cfg_item_function` VALUES ('21', '22', '金蛋', null);
INSERT INTO `t_cfg_item_function` VALUES ('22', '23', '经验球集满', null);
INSERT INTO `t_cfg_item_function` VALUES ('23', '24', '装备经验球', null);
INSERT INTO `t_cfg_item_function` VALUES ('24', '25', '名师礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('25', '26', '祈福消耗', null);
INSERT INTO `t_cfg_item_function` VALUES ('26', '27', '许愿', null);
INSERT INTO `t_cfg_item_function` VALUES ('27', '28', '星辰目标点亮奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('28', '29', '时装培养', null);
INSERT INTO `t_cfg_item_function` VALUES ('29', '30', '活跃度', null);
INSERT INTO `t_cfg_item_function` VALUES ('30', '31', '名人堂奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('31', '32', '兑换', null);
INSERT INTO `t_cfg_item_function` VALUES ('32', '33', '七日投资奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('33', '34', '等级投资奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('34', '35', '投资签到奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('35', '36', '副本找回', null);
INSERT INTO `t_cfg_item_function` VALUES ('36', '37', '技能激活', null);
INSERT INTO `t_cfg_item_function` VALUES ('37', '38', '技能树分页激活', null);
INSERT INTO `t_cfg_item_function` VALUES ('38', '39', '成就奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('39', '40', '图书馆采集', null);
INSERT INTO `t_cfg_item_function` VALUES ('40', '41', '藏宝图寻宝', null);
INSERT INTO `t_cfg_item_function` VALUES ('41', '42', '藏宝图获得', null);
INSERT INTO `t_cfg_item_function` VALUES ('42', '43', '物品分解', null);
INSERT INTO `t_cfg_item_function` VALUES ('43', '44', '物品丢弃', null);
INSERT INTO `t_cfg_item_function` VALUES ('44', '45', '离开活动', null);
INSERT INTO `t_cfg_item_function` VALUES ('45', '46', '活动切地图', null);
INSERT INTO `t_cfg_item_function` VALUES ('46', '101', '任务奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('47', '102', '任务提交', null);
INSERT INTO `t_cfg_item_function` VALUES ('48', '103', '任务放弃', null);
INSERT INTO `t_cfg_item_function` VALUES ('49', '104', '循环任务随机奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('50', '105', 'boss击杀奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('51', '111', '副本奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('52', '112', '进入副本', null);
INSERT INTO `t_cfg_item_function` VALUES ('53', '113', '给予副本NPC', null);
INSERT INTO `t_cfg_item_function` VALUES ('54', '114', '魔域世界奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('55', '115', '材料副本满星奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('56', '121', '仓库获取', null);
INSERT INTO `t_cfg_item_function` VALUES ('57', '122', '存仓库', null);
INSERT INTO `t_cfg_item_function` VALUES ('58', '131', '出售', null);
INSERT INTO `t_cfg_item_function` VALUES ('59', '132', '回购', null);
INSERT INTO `t_cfg_item_function` VALUES ('60', '133', '商店购买', null);
INSERT INTO `t_cfg_item_function` VALUES ('61', '134', '商城购买', null);
INSERT INTO `t_cfg_item_function` VALUES ('62', '141', '刷新神秘商店', null);
INSERT INTO `t_cfg_item_function` VALUES ('63', '142', '购买神秘商店道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('64', '143', '购买神秘商店道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('65', '151', '黑市入场券', null);
INSERT INTO `t_cfg_item_function` VALUES ('66', '152', '黑市购买道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('67', '171', '法宝培养', null);
INSERT INTO `t_cfg_item_function` VALUES ('68', '172', '法宝技能学习', null);
INSERT INTO `t_cfg_item_function` VALUES ('69', '181', '拍卖', null);
INSERT INTO `t_cfg_item_function` VALUES ('70', '182', '拍卖行购买', null);
INSERT INTO `t_cfg_item_function` VALUES ('71', '183', '拍卖行退回', null);
INSERT INTO `t_cfg_item_function` VALUES ('72', '184', '拍卖行取消拍卖', null);
INSERT INTO `t_cfg_item_function` VALUES ('73', '191', '抽奖消耗', null);
INSERT INTO `t_cfg_item_function` VALUES ('74', '192', '抽奖商店兑换', null);
INSERT INTO `t_cfg_item_function` VALUES ('75', '193', '抽奖获得道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('76', '194', '积分商城购买', null);
INSERT INTO `t_cfg_item_function` VALUES ('77', '195', '抽奖周奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('78', '201', '宠物穿装备', null);
INSERT INTO `t_cfg_item_function` VALUES ('79', '202', '宠物升星', null);
INSERT INTO `t_cfg_item_function` VALUES ('80', '204', '宠物技能升级', null);
INSERT INTO `t_cfg_item_function` VALUES ('81', '207', '翅膀升级', null);
INSERT INTO `t_cfg_item_function` VALUES ('82', '211', '宝石镶嵌', null);
INSERT INTO `t_cfg_item_function` VALUES ('83', '212', '摘取宝石', null);
INSERT INTO `t_cfg_item_function` VALUES ('84', '213', '宝石开孔', null);
INSERT INTO `t_cfg_item_function` VALUES ('85', '215', '装备升星', null);
INSERT INTO `t_cfg_item_function` VALUES ('86', '216', '套装升级', null);
INSERT INTO `t_cfg_item_function` VALUES ('87', '217', '套装升华', null);
INSERT INTO `t_cfg_item_function` VALUES ('88', '214', '套装拆解', null);
INSERT INTO `t_cfg_item_function` VALUES ('89', '218', '装备解绑', null);
INSERT INTO `t_cfg_item_function` VALUES ('90', '219', '装备合成', null);
INSERT INTO `t_cfg_item_function` VALUES ('91', '220', '装备升阶消耗  ', null);
INSERT INTO `t_cfg_item_function` VALUES ('92', '221', '开起装备箱子', null);
INSERT INTO `t_cfg_item_function` VALUES ('93', '311', 'VIP礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('94', '312', 'VIP卡礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('95', '314', '赏金任务', null);
INSERT INTO `t_cfg_item_function` VALUES ('96', '321', '创建帮派', null);
INSERT INTO `t_cfg_item_function` VALUES ('97', '322', '帮派捐献', null);
INSERT INTO `t_cfg_item_function` VALUES ('98', '323', '帮派BOSS培养', null);
INSERT INTO `t_cfg_item_function` VALUES ('99', '324', '军团任务', null);
INSERT INTO `t_cfg_item_function` VALUES ('100', '325', '帮派聊天任务', null);
INSERT INTO `t_cfg_item_function` VALUES ('101', '326', '帮派红包返回', null);
INSERT INTO `t_cfg_item_function` VALUES ('102', '412', '极限挑战', null);
INSERT INTO `t_cfg_item_function` VALUES ('103', '501', '帮派战奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('104', '502', '帮派战日常奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('105', '503', '大胃王', null);
INSERT INTO `t_cfg_item_function` VALUES ('106', '504', '世界BOSS击杀奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('107', '505', '世界BOSS排行奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('108', '506', '阵营战奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('109', '507', '天降宝箱日常奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('110', '508', '赛马活动奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('111', '509', '天下第一活动奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('112', '510', '神秘庇护所切换地图', null);
INSERT INTO `t_cfg_item_function` VALUES ('113', '511', '进入打宝地图', null);
INSERT INTO `t_cfg_item_function` VALUES ('114', '512', '攻城战奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('115', '513', '开服活动宠物返还', null);
INSERT INTO `t_cfg_item_function` VALUES ('116', '514', '开服活动攻城战', null);
INSERT INTO `t_cfg_item_function` VALUES ('117', '515', '开服活动单件回收', null);
INSERT INTO `t_cfg_item_function` VALUES ('118', '601', '七日登陆奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('119', '601', '首冲', null);
INSERT INTO `t_cfg_item_function` VALUES ('120', '602', '新服特惠', null);
INSERT INTO `t_cfg_item_function` VALUES ('121', '604', '每日充值', null);
INSERT INTO `t_cfg_item_function` VALUES ('122', '605', '开服活动', null);
INSERT INTO `t_cfg_item_function` VALUES ('123', '606', '开服累计充值', null);
INSERT INTO `t_cfg_item_function` VALUES ('124', '607', '三宠礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('125', '608', '装备合成', null);
INSERT INTO `t_cfg_item_function` VALUES ('126', '609', '装备升阶得到', null);
INSERT INTO `t_cfg_item_function` VALUES ('127', '611', '装备回收', null);
INSERT INTO `t_cfg_item_function` VALUES ('128', '612', '元宝回收', null);
INSERT INTO `t_cfg_item_function` VALUES ('129', '613', '装备回购', null);
INSERT INTO `t_cfg_item_function` VALUES ('130', '614', '死亡掉落', null);
INSERT INTO `t_cfg_item_function` VALUES ('131', '615', '星脉升级', null);
INSERT INTO `t_cfg_item_function` VALUES ('132', '616', '天灵升级', null);
INSERT INTO `t_cfg_item_function` VALUES ('133', '617', '装备回收任务消耗', null);
INSERT INTO `t_cfg_item_function` VALUES ('134', '618', '装备回收任务获得', null);
INSERT INTO `t_cfg_item_function` VALUES ('135', '619', '随机镖车', null);
INSERT INTO `t_cfg_item_function` VALUES ('136', '620', '诅咒系统升级', null);
INSERT INTO `t_cfg_item_function` VALUES ('137', '621', '物品分解获得', null);
INSERT INTO `t_cfg_item_function` VALUES ('138', '622', '系统开放', null);
INSERT INTO `t_cfg_item_function` VALUES ('139', '1001', '合服充值礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('140', '1002', '合服限时抢购', null);
INSERT INTO `t_cfg_item_function` VALUES ('141', '1003', '合服三宠礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('142', '1051', '每日冲值奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('143', '1052', '每日冲值排行榜奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('144', '1053', '每日冲值团购奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('145', '1054', '特惠礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('146', '1101', '双十一登陆礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('147', '1102', '双十一抽奖礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('148', '1103', '双十一登陆礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('149', '1104', '双十一购买限时道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('150', '1105', '双十一领取活跃度礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('151', '1106', '双十一在线礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('152', '1107', '双十一许愿礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('153', '1108', '双十一每日充值', null);
INSERT INTO `t_cfg_item_function` VALUES ('154', '1109', '双十一购买限时道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('155', '1110', '双十一法宝暴击返回道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('156', '1111', '双十一累计消费奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('157', '1112', '双十一累计冲值奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('158', '1113', '双十一购买限时道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('159', '1114', '双十一装备魔化返回道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('160', '1115', '双十一购买道具', null);
INSERT INTO `t_cfg_item_function` VALUES ('161', '1116', '双十一幻化幸运草奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('162', '1117', '双十一情义佩等级奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('163', '1118', '双十一友情值奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('164', '1119', '双十一名师等级奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('165', '1120', '双十一抽奖排行榜奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('166', '1121', '双十一消费排行榜奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('167', '1122', '双十一消费排行榜奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('168', '1123', '双十一冲值排行榜奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('169', '1124', '双十一答题排行榜奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('170', '1201', '黄钻新手礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('171', '1202', '黄钻每日礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('172', '1203', '年费黄钻额外每日礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('173', '1204', '黄钻等级礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('174', '1205', '蓝钻新手礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('175', '1206', '蓝钻每日礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('176', '1207', '年费蓝钻额外每日礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('177', '1208', '蓝钻等级礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('178', '1209', '豪华蓝钻额外每日礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('179', '1210', '腾讯七日登陆礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('180', '1301', '360加速球', null);
INSERT INTO `t_cfg_item_function` VALUES ('181', '1302', '360游戏大厅', null);
INSERT INTO `t_cfg_item_function` VALUES ('182', '1303', '360加速特权', null);
INSERT INTO `t_cfg_item_function` VALUES ('183', '1304', '360卫士特权', null);
INSERT INTO `t_cfg_item_function` VALUES ('184', '1305', 'v计划', null);
INSERT INTO `t_cfg_item_function` VALUES ('185', '1306', '手机礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('186', '1307', '老玩家回归活动累计登陆', null);
INSERT INTO `t_cfg_item_function` VALUES ('187', '1308', '老玩家回归活动每日冲值', null);
INSERT INTO `t_cfg_item_function` VALUES ('188', '1309', '老玩家回归活动累计冲值', null);
INSERT INTO `t_cfg_item_function` VALUES ('189', '1310', '搜狗皮肤登陆', null);
INSERT INTO `t_cfg_item_function` VALUES ('190', '1311', 'TGP新手礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('191', '1312', 'TGP每日礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('192', '1313', 'TGP等级礼包', null);
INSERT INTO `t_cfg_item_function` VALUES ('193', '1401', '跨服抽奖奖励', null);
INSERT INTO `t_cfg_item_function` VALUES ('194', '1402', 'PK掉落装备', null);
INSERT INTO `t_cfg_item_function` VALUES ('195', '1', '拾取', null);
