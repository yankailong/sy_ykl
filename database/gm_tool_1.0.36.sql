/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : syz_admin

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2018-08-06 17:09:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_cfg_currency_function`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_currency_function`;
CREATE TABLE `t_cfg_currency_function` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `functionId` int(10) unsigned DEFAULT NULL COMMENT '功能id',
  `functionChineseName` varchar(255) DEFAULT NULL COMMENT '功能名称',
  `functionVietnameseName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=239 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_currency_function
-- ----------------------------
INSERT INTO `t_cfg_currency_function` VALUES ('1', '1', 'gm命令', null);
INSERT INTO `t_cfg_currency_function` VALUES ('2', '2', '个人商店', null);
INSERT INTO `t_cfg_currency_function` VALUES ('3', '3', '资源获得', null);
INSERT INTO `t_cfg_currency_function` VALUES ('4', '4', '主线任务', null);
INSERT INTO `t_cfg_currency_function` VALUES ('5', '5', '购回', null);
INSERT INTO `t_cfg_currency_function` VALUES ('6', '6', '副本 奖励', null);
INSERT INTO `t_cfg_currency_function` VALUES ('7', '7', '超级兑换 ', null);
INSERT INTO `t_cfg_currency_function` VALUES ('8', '8', '成就兑换', null);
INSERT INTO `t_cfg_currency_function` VALUES ('9', '9', 'PK时爆出的钱币', null);
INSERT INTO `t_cfg_currency_function` VALUES ('10', '10', '掉落拾取', null);
INSERT INTO `t_cfg_currency_function` VALUES ('11', '11', '出售', null);
INSERT INTO `t_cfg_currency_function` VALUES ('12', '12', '物品合成', null);
INSERT INTO `t_cfg_currency_function` VALUES ('13', '13', '套装升级', null);
INSERT INTO `t_cfg_currency_function` VALUES ('14', '14', '套装升华', null);
INSERT INTO `t_cfg_currency_function` VALUES ('15', '15', '套装拆解', null);
INSERT INTO `t_cfg_currency_function` VALUES ('16', '16', '部位强化', null);
INSERT INTO `t_cfg_currency_function` VALUES ('17', '17', '宝石打孔', null);
INSERT INTO `t_cfg_currency_function` VALUES ('18', '18', '宠物升星', null);
INSERT INTO `t_cfg_currency_function` VALUES ('19', '19', '装备合成', null);
INSERT INTO `t_cfg_currency_function` VALUES ('20', '20', '自动使用', null);
INSERT INTO `t_cfg_currency_function` VALUES ('21', '21', '特权', null);
INSERT INTO `t_cfg_currency_function` VALUES ('22', '37', '装备强化转移', null);
INSERT INTO `t_cfg_currency_function` VALUES ('23', '38', '主角转生消耗铜钱', null);
INSERT INTO `t_cfg_currency_function` VALUES ('24', '39', '交易获得', null);
INSERT INTO `t_cfg_currency_function` VALUES ('25', '40', '交易失去', null);
INSERT INTO `t_cfg_currency_function` VALUES ('26', '41', '拾取资源道具获取', null);
INSERT INTO `t_cfg_currency_function` VALUES ('27', '42', '邮件资源道具获取', null);
INSERT INTO `t_cfg_currency_function` VALUES ('28', '43', '爵位升级', null);
INSERT INTO `t_cfg_currency_function` VALUES ('29', '44', '循环任务获得', null);
INSERT INTO `t_cfg_currency_function` VALUES ('30', '45', '拍卖金币', null);
INSERT INTO `t_cfg_currency_function` VALUES ('31', '46', '打包幻兽', null);
INSERT INTO `t_cfg_currency_function` VALUES ('32', '47', '祈福', null);
INSERT INTO `t_cfg_currency_function` VALUES ('33', '48', '进入副本', null);
INSERT INTO `t_cfg_currency_function` VALUES ('34', '49', '军团战攻击战神之柱', null);
INSERT INTO `t_cfg_currency_function` VALUES ('35', '50', '拍卖行购买元宝', null);
INSERT INTO `t_cfg_currency_function` VALUES ('36', '51', '赛马奖励', null);
INSERT INTO `t_cfg_currency_function` VALUES ('37', '52', '进入开宝箱宝箱活动', null);
INSERT INTO `t_cfg_currency_function` VALUES ('38', '53', '资源找回', null);
INSERT INTO `t_cfg_currency_function` VALUES ('39', '55', '完成成就', null);
INSERT INTO `t_cfg_currency_function` VALUES ('40', '56', '世界BOSS鼓舞', null);
INSERT INTO `t_cfg_currency_function` VALUES ('41', '57', '阵营战选择职业BUFF', null);
INSERT INTO `t_cfg_currency_function` VALUES ('42', '58', '装备升级', null);
INSERT INTO `t_cfg_currency_function` VALUES ('43', '59', '开金蛋', null);
INSERT INTO `t_cfg_currency_function` VALUES ('44', '60', '升级十字章', null);
INSERT INTO `t_cfg_currency_function` VALUES ('45', '61', '装备分解', null);
INSERT INTO `t_cfg_currency_function` VALUES ('46', '62', '神器分解', null);
INSERT INTO `t_cfg_currency_function` VALUES ('47', '63', '解除师徒关系', null);
INSERT INTO `t_cfg_currency_function` VALUES ('48', '64', '幻兽装备升级', null);
INSERT INTO `t_cfg_currency_function` VALUES ('49', '65', '跨服抽奖获得魔石', null);
INSERT INTO `t_cfg_currency_function` VALUES ('50', '66', '装备升阶', null);
INSERT INTO `t_cfg_currency_function` VALUES ('51', '67', '装备升阶拆解', null);
INSERT INTO `t_cfg_currency_function` VALUES ('52', '68', '神佑摘除', null);
INSERT INTO `t_cfg_currency_function` VALUES ('53', '69', '创建帮派', null);
INSERT INTO `t_cfg_currency_function` VALUES ('54', '70', '给予副本NPC', null);
INSERT INTO `t_cfg_currency_function` VALUES ('55', '71', '宠物升阶', null);
INSERT INTO `t_cfg_currency_function` VALUES ('56', '72', '翅膀注灵', null);
INSERT INTO `t_cfg_currency_function` VALUES ('57', '73', '翅膀锻灵', null);
INSERT INTO `t_cfg_currency_function` VALUES ('58', '75', '金币雕像获得', null);
INSERT INTO `t_cfg_currency_function` VALUES ('59', '77', '祝福值兑换金币', null);
INSERT INTO `t_cfg_currency_function` VALUES ('60', '80', '重置爵位技能', null);
INSERT INTO `t_cfg_currency_function` VALUES ('61', '81', '卡牌抽奖', null);
INSERT INTO `t_cfg_currency_function` VALUES ('62', '82', '副本鼓舞', null);
INSERT INTO `t_cfg_currency_function` VALUES ('63', '83', '天灵升级', null);
INSERT INTO `t_cfg_currency_function` VALUES ('64', '84', '装备回收任务刷星', null);
INSERT INTO `t_cfg_currency_function` VALUES ('65', '85', '押镖', null);
INSERT INTO `t_cfg_currency_function` VALUES ('66', '86', '物品分解', null);
INSERT INTO `t_cfg_currency_function` VALUES ('67', '87', '诅咒升级', null);
INSERT INTO `t_cfg_currency_function` VALUES ('68', '88', '赏金任务双倍领取', null);
INSERT INTO `t_cfg_currency_function` VALUES ('69', '89', '兑换', null);
INSERT INTO `t_cfg_currency_function` VALUES ('70', '1000', '拾取资源道具', null);
INSERT INTO `t_cfg_currency_function` VALUES ('71', '1001', '邮件获得', null);
INSERT INTO `t_cfg_currency_function` VALUES ('72', '1002', '购买商城道具', null);
INSERT INTO `t_cfg_currency_function` VALUES ('73', '1003', '周在线奖励', null);
INSERT INTO `t_cfg_currency_function` VALUES ('74', '1004', '进入boss之间', null);
INSERT INTO `t_cfg_currency_function` VALUES ('75', '1005', '魔化转移', null);
INSERT INTO `t_cfg_currency_function` VALUES ('76', '1006', '清楚pk值', null);
INSERT INTO `t_cfg_currency_function` VALUES ('77', '2001', '快速任务', null);
INSERT INTO `t_cfg_currency_function` VALUES ('78', '2002', '成就兑换', null);
INSERT INTO `t_cfg_currency_function` VALUES ('79', '2003', '快速成就', null);
INSERT INTO `t_cfg_currency_function` VALUES ('80', '2004', '副本奖励', null);
INSERT INTO `t_cfg_currency_function` VALUES ('81', '2005', '购买循环任务', null);
INSERT INTO `t_cfg_currency_function` VALUES ('82', '2006', '充值', null);
INSERT INTO `t_cfg_currency_function` VALUES ('83', '2007', '建帮', null);
INSERT INTO `t_cfg_currency_function` VALUES ('84', '2008', '使用礼券', null);
INSERT INTO `t_cfg_currency_function` VALUES ('85', '2009', '超级兑换', null);
INSERT INTO `t_cfg_currency_function` VALUES ('86', '2010', '掉落拾取', null);
INSERT INTO `t_cfg_currency_function` VALUES ('87', '2011', '自动购买物品', null);
INSERT INTO `t_cfg_currency_function` VALUES ('88', '2012', '翅膀自动购买', null);
INSERT INTO `t_cfg_currency_function` VALUES ('89', '2013', '装备升阶自动购买', null);
INSERT INTO `t_cfg_currency_function` VALUES ('90', '2014', '装备升品自动购买', null);
INSERT INTO `t_cfg_currency_function` VALUES ('91', '2015', '装备升星自动购买', null);
INSERT INTO `t_cfg_currency_function` VALUES ('92', '2016', '开启背包', null);
INSERT INTO `t_cfg_currency_function` VALUES ('93', '2017', '从仓库里取得', null);
INSERT INTO `t_cfg_currency_function` VALUES ('94', '2018', '开起仓库格子', null);
INSERT INTO `t_cfg_currency_function` VALUES ('95', '2019', '交易获得', null);
INSERT INTO `t_cfg_currency_function` VALUES ('96', '2020', '交易失去', null);
INSERT INTO `t_cfg_currency_function` VALUES ('97', '2021', '赎回', null);
INSERT INTO `t_cfg_currency_function` VALUES ('98', '2022', '拾取资源道具', null);
INSERT INTO `t_cfg_currency_function` VALUES ('99', '2023', '邮件资源道具', null);
INSERT INTO `t_cfg_currency_function` VALUES ('100', '2024', '宠物重新孵化', null);
INSERT INTO `t_cfg_currency_function` VALUES ('101', '2025', '宠物快速孵化', null);
INSERT INTO `t_cfg_currency_function` VALUES ('102', '2026', '原地复活', null);
INSERT INTO `t_cfg_currency_function` VALUES ('103', '2027', '日常任务刷新星级', null);
INSERT INTO `t_cfg_currency_function` VALUES ('104', '2028', '日常任务多倍领取奖励', null);
INSERT INTO `t_cfg_currency_function` VALUES ('105', '2029', '爵位捐献', null);
INSERT INTO `t_cfg_currency_function` VALUES ('106', '2030', '帮派捐献', null);
INSERT INTO `t_cfg_currency_function` VALUES ('107', '2031', '法宝培养', null);
INSERT INTO `t_cfg_currency_function` VALUES ('108', '2032', '购买商城物品', null);
INSERT INTO `t_cfg_currency_function` VALUES ('109', '2033', '副本双倍领取', null);
INSERT INTO `t_cfg_currency_function` VALUES ('110', '2034', '副本造塔', null);
INSERT INTO `t_cfg_currency_function` VALUES ('111', '2035', '双倍修炼', null);
INSERT INTO `t_cfg_currency_function` VALUES ('112', '2036', '魔石修炼', null);
INSERT INTO `t_cfg_currency_function` VALUES ('113', '2037', '拍卖行购买道具', null);
INSERT INTO `t_cfg_currency_function` VALUES ('114', '2038', '拍卖行出售魔石', null);
INSERT INTO `t_cfg_currency_function` VALUES ('115', '2039', '抽奖', null);
INSERT INTO `t_cfg_currency_function` VALUES ('116', '2040', '宠物升阶自动购买', null);
INSERT INTO `t_cfg_currency_function` VALUES ('117', '2041', '祈福', null);
INSERT INTO `t_cfg_currency_function` VALUES ('118', '2042', '进入副本', null);
INSERT INTO `t_cfg_currency_function` VALUES ('119', '2043', '获取离线多倍', null);
INSERT INTO `t_cfg_currency_function` VALUES ('120', '2044', '购买vip', null);
INSERT INTO `t_cfg_currency_function` VALUES ('121', '2045', '进入boss之家', null);
INSERT INTO `t_cfg_currency_function` VALUES ('122', '2046', '魔化转移', null);
INSERT INTO `t_cfg_currency_function` VALUES ('123', '2047', '购买新服特惠礼包', null);
INSERT INTO `t_cfg_currency_function` VALUES ('124', '2048', '投资获得', null);
INSERT INTO `t_cfg_currency_function` VALUES ('125', '2049', '投资失去', null);
INSERT INTO `t_cfg_currency_function` VALUES ('126', '2050', '活跃度', null);
INSERT INTO `t_cfg_currency_function` VALUES ('127', '2051', '名人堂购买次数', null);
INSERT INTO `t_cfg_currency_function` VALUES ('128', '2052', '名人堂清CD', null);
INSERT INTO `t_cfg_currency_function` VALUES ('129', '2053', '物品合成自动购买', null);
INSERT INTO `t_cfg_currency_function` VALUES ('130', '2054', '购买三宠礼包', null);
INSERT INTO `t_cfg_currency_function` VALUES ('131', '2055', '购买勋章积分', null);
INSERT INTO `t_cfg_currency_function` VALUES ('132', '2056', '购买抗战胜利礼包', null);
INSERT INTO `t_cfg_currency_function` VALUES ('133', '2057', '战胜利充值返利', null);
INSERT INTO `t_cfg_currency_function` VALUES ('134', '2058', '双倍领取', null);
INSERT INTO `t_cfg_currency_function` VALUES ('135', '2059', '购买军团图腾', null);
INSERT INTO `t_cfg_currency_function` VALUES ('136', '2060', '购买宝箱钥匙', null);
INSERT INTO `t_cfg_currency_function` VALUES ('137', '2061', '购买宠物背包格子', null);
INSERT INTO `t_cfg_currency_function` VALUES ('138', '2062', '立即复活', null);
INSERT INTO `t_cfg_currency_function` VALUES ('139', '2063', '世界BOSS鼓舞', null);
INSERT INTO `t_cfg_currency_function` VALUES ('140', '2064', '获取大胃王黄金披萨', null);
INSERT INTO `t_cfg_currency_function` VALUES ('141', '2065', '购买副本进入次数', null);
INSERT INTO `t_cfg_currency_function` VALUES ('142', '2066', '追踪', null);
INSERT INTO `t_cfg_currency_function` VALUES ('143', '2067', '打折券', null);
INSERT INTO `t_cfg_currency_function` VALUES ('144', '2068', '清楚pk值', null);
INSERT INTO `t_cfg_currency_function` VALUES ('145', '2069', '快速完成帮派任务', null);
INSERT INTO `t_cfg_currency_function` VALUES ('146', '2070', '快速完成循环任务', null);
INSERT INTO `t_cfg_currency_function` VALUES ('147', '2071', '快速完成副本', null);
INSERT INTO `t_cfg_currency_function` VALUES ('148', '2072', '开金蛋', null);
INSERT INTO `t_cfg_currency_function` VALUES ('149', '2073', '合服活动限时抢购', null);
INSERT INTO `t_cfg_currency_function` VALUES ('150', '2074', '神秘商店购买道具', null);
INSERT INTO `t_cfg_currency_function` VALUES ('151', '2075', '神秘商店刷新道具', null);
INSERT INTO `t_cfg_currency_function` VALUES ('152', '2076', '神秘大礼包购买道具', null);
INSERT INTO `t_cfg_currency_function` VALUES ('153', '2077', '帮派弹劾', null);
INSERT INTO `t_cfg_currency_function` VALUES ('154', '2078', '幻兽洗练自动购买', null);
INSERT INTO `t_cfg_currency_function` VALUES ('155', '2079', '军团战原地复活', null);
INSERT INTO `t_cfg_currency_function` VALUES ('156', '2080', '发送军团红包', null);
INSERT INTO `t_cfg_currency_function` VALUES ('157', '2081', '打开军团红包', null);
INSERT INTO `t_cfg_currency_function` VALUES ('158', '2082', '安全挂机', null);
INSERT INTO `t_cfg_currency_function` VALUES ('159', '2083', '双十一购买限时道具', null);
INSERT INTO `t_cfg_currency_function` VALUES ('160', '2084', '黑市入场券', null);
INSERT INTO `t_cfg_currency_function` VALUES ('161', '2085', '黑市购买道具', null);
INSERT INTO `t_cfg_currency_function` VALUES ('162', '2086', '时装培养', null);
INSERT INTO `t_cfg_currency_function` VALUES ('163', '2087', '双十一购买道具', null);
INSERT INTO `t_cfg_currency_function` VALUES ('164', '2088', '购买幻兽礼包', null);
INSERT INTO `t_cfg_currency_function` VALUES ('165', '2089', '双十一购买道具2', null);
INSERT INTO `t_cfg_currency_function` VALUES ('166', '2090', 'GM赠送', null);
INSERT INTO `t_cfg_currency_function` VALUES ('167', '2091', '宝石升级自动购买', null);
INSERT INTO `t_cfg_currency_function` VALUES ('168', '2092', '宝石雕琢自动购买', null);
INSERT INTO `t_cfg_currency_function` VALUES ('169', '2093', '双十一购买道具', null);
INSERT INTO `t_cfg_currency_function` VALUES ('170', '2094', '双十一冲值返利', null);
INSERT INTO `t_cfg_currency_function` VALUES ('171', '2095', '充值卡', null);
INSERT INTO `t_cfg_currency_function` VALUES ('172', '2096', '购买情谊大礼包', null);
INSERT INTO `t_cfg_currency_function` VALUES ('173', '2097', '合服活动购买三宠礼包', null);
INSERT INTO `t_cfg_currency_function` VALUES ('174', '2098', '副本召唤BOSS', null);
INSERT INTO `t_cfg_currency_function` VALUES ('175', '2099', '幻兽装备升级自动购买', null);
INSERT INTO `t_cfg_currency_function` VALUES ('176', '2100', '使用钻石铸魂', null);
INSERT INTO `t_cfg_currency_function` VALUES ('177', '2101', '铸魂双倍经验', null);
INSERT INTO `t_cfg_currency_function` VALUES ('178', '2102', '邀请所有在线玩家', null);
INSERT INTO `t_cfg_currency_function` VALUES ('179', '2103', '副本招怪', null);
INSERT INTO `t_cfg_currency_function` VALUES ('180', '2104', '雕像激活', null);
INSERT INTO `t_cfg_currency_function` VALUES ('181', '2106', '双倍领取', null);
INSERT INTO `t_cfg_currency_function` VALUES ('182', '2107', '钻石抽卡', null);
INSERT INTO `t_cfg_currency_function` VALUES ('183', '2108', '卡达拉商店刷新消耗', null);
INSERT INTO `t_cfg_currency_function` VALUES ('184', '2109', '刷新消耗', null);
INSERT INTO `t_cfg_currency_function` VALUES ('185', '2110', '快速完成消耗', null);
INSERT INTO `t_cfg_currency_function` VALUES ('186', '2111', '凯恩之书升级消耗', null);
INSERT INTO `t_cfg_currency_function` VALUES ('187', '2112', '副本鼓舞', null);
INSERT INTO `t_cfg_currency_function` VALUES ('188', '2113', '快速完成研究', null);
INSERT INTO `t_cfg_currency_function` VALUES ('189', '2114', '综合运营活动购买特惠礼包', null);
INSERT INTO `t_cfg_currency_function` VALUES ('190', '2115', '装备回收', null);
INSERT INTO `t_cfg_currency_function` VALUES ('191', '2116', '元宝回收', null);
INSERT INTO `t_cfg_currency_function` VALUES ('192', '2117', '装备购回', null);
INSERT INTO `t_cfg_currency_function` VALUES ('193', '2118', '购买法宝资源', null);
INSERT INTO `t_cfg_currency_function` VALUES ('194', '2119', '平定八方任务刷星', null);
INSERT INTO `t_cfg_currency_function` VALUES ('195', '2120', '激活特殊装备', null);
INSERT INTO `t_cfg_currency_function` VALUES ('196', '2121', '补签', null);
INSERT INTO `t_cfg_currency_function` VALUES ('197', '2122', '等级炼制', null);
INSERT INTO `t_cfg_currency_function` VALUES ('198', '2123', '回收任务双倍领取', null);
INSERT INTO `t_cfg_currency_function` VALUES ('199', '2124', '开服活动', null);
INSERT INTO `t_cfg_currency_function` VALUES ('200', '3001', '打怪增加', null);
INSERT INTO `t_cfg_currency_function` VALUES ('201', '3002', '内置宠初灵', null);
INSERT INTO `t_cfg_currency_function` VALUES ('202', '3003', '内置宠幻灵', null);
INSERT INTO `t_cfg_currency_function` VALUES ('203', '3004', '内置宠幸运', null);
INSERT INTO `t_cfg_currency_function` VALUES ('204', '3005', '内置宠武灵', null);
INSERT INTO `t_cfg_currency_function` VALUES ('205', '3006', '内置宠觉醒', null);
INSERT INTO `t_cfg_currency_function` VALUES ('206', '3007', '装备回收任务', null);
INSERT INTO `t_cfg_currency_function` VALUES ('207', '3008', '兑换获得', null);
INSERT INTO `t_cfg_currency_function` VALUES ('208', '4000', '抽奖', null);
INSERT INTO `t_cfg_currency_function` VALUES ('209', '4001', '杀怪', null);
INSERT INTO `t_cfg_currency_function` VALUES ('210', '4002', '购买物品', null);
INSERT INTO `t_cfg_currency_function` VALUES ('211', '5000', '挑战', null);
INSERT INTO `t_cfg_currency_function` VALUES ('212', '5001', '跨天扣除', null);
INSERT INTO `t_cfg_currency_function` VALUES ('213', '5002', '排名奖励', null);
INSERT INTO `t_cfg_currency_function` VALUES ('214', '7001', '军团捐献', null);
INSERT INTO `t_cfg_currency_function` VALUES ('215', '7002', '学习军团技能', null);
INSERT INTO `t_cfg_currency_function` VALUES ('216', '7003', 'BOSS培养', null);
INSERT INTO `t_cfg_currency_function` VALUES ('217', '7004', '军团任务', null);
INSERT INTO `t_cfg_currency_function` VALUES ('218', '7005', '军团护送', null);
INSERT INTO `t_cfg_currency_function` VALUES ('219', '8001', '异界时空副本', null);
INSERT INTO `t_cfg_currency_function` VALUES ('220', '8002', '副本鼓舞', null);
INSERT INTO `t_cfg_currency_function` VALUES ('221', '8003', '刷新降妖除魔任务', null);
INSERT INTO `t_cfg_currency_function` VALUES ('222', '8004', '神威任务双倍领取', null);
INSERT INTO `t_cfg_currency_function` VALUES ('223', '8005', '刷新武魂商店', null);
INSERT INTO `t_cfg_currency_function` VALUES ('224', '8006', '武魂商店购买', null);
INSERT INTO `t_cfg_currency_function` VALUES ('225', '8007', '激情泡点', null);
INSERT INTO `t_cfg_currency_function` VALUES ('226', '8008', '喊话', null);
INSERT INTO `t_cfg_currency_function` VALUES ('227', '8009', '购买超级特惠', null);
INSERT INTO `t_cfg_currency_function` VALUES ('228', '8010', '珍宝阁', null);
INSERT INTO `t_cfg_currency_function` VALUES ('229', '8011', '随机镖车', null);
INSERT INTO `t_cfg_currency_function` VALUES ('230', '8012', '开启礼包', null);
INSERT INTO `t_cfg_currency_function` VALUES ('231', '8013', '公测活动', null);
INSERT INTO `t_cfg_currency_function` VALUES ('232', '8014', '宝石升级', null);
INSERT INTO `t_cfg_currency_function` VALUES ('233', '8015', '轮回塔', null);
INSERT INTO `t_cfg_currency_function` VALUES ('234', '8016', '商人', null);
INSERT INTO `t_cfg_currency_function` VALUES ('235', '8017', '合服活动购卖改名卡', null);
INSERT INTO `t_cfg_currency_function` VALUES ('236', '8018', '守护精炼自动购买', null);
INSERT INTO `t_cfg_currency_function` VALUES ('237', '2126', '开服宠物', null);
INSERT INTO `t_cfg_currency_function` VALUES ('238', '2125', '开服限购', null);
