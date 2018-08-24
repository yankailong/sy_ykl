/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : ci

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2018-08-13 10:50:33
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

-- ----------------------------
-- Table structure for `t_cfg_currency_type`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_currency_type`;
CREATE TABLE `t_cfg_currency_type` (
  `id` int(10) unsigned NOT NULL COMMENT 'id',
  `chineseValue` varchar(255) DEFAULT NULL COMMENT '中文名',
  `vietnameseValue` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_currency_type
-- ----------------------------

-- ----------------------------
-- Table structure for `t_cfg_equip`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_equip`;
CREATE TABLE `t_cfg_equip` (
  `id` int(10) unsigned NOT NULL COMMENT '装备id',
  `equip` varchar(255) DEFAULT NULL COMMENT '装备名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_equip
-- ----------------------------

-- ----------------------------
-- Table structure for `t_cfg_fb_function`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_fb_function`;
CREATE TABLE `t_cfg_fb_function` (
  `id` int(11) unsigned NOT NULL,
  `fb_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_fb_function
-- ----------------------------
INSERT INTO `t_cfg_fb_function` VALUES ('1', '主线副本');
INSERT INTO `t_cfg_fb_function` VALUES ('5', '成就副本');
INSERT INTO `t_cfg_fb_function` VALUES ('11', '装备副本');
INSERT INTO `t_cfg_fb_function` VALUES ('12', '组队副本');
INSERT INTO `t_cfg_fb_function` VALUES ('13', 'boss副本');
INSERT INTO `t_cfg_fb_function` VALUES ('14', 'VIP副本 守护');
INSERT INTO `t_cfg_fb_function` VALUES ('15', '经验副本 塔防');
INSERT INTO `t_cfg_fb_function` VALUES ('16', '爬塔副本');
INSERT INTO `t_cfg_fb_function` VALUES ('17', '魔域世界副本');
INSERT INTO `t_cfg_fb_function` VALUES ('18', '魔灵入侵');
INSERT INTO `t_cfg_fb_function` VALUES ('19', '金钱副本 满XP');
INSERT INTO `t_cfg_fb_function` VALUES ('20', '幻兽副本');
INSERT INTO `t_cfg_fb_function` VALUES ('21', '转生副本');
INSERT INTO `t_cfg_fb_function` VALUES ('22', '魔龙窟');
INSERT INTO `t_cfg_fb_function` VALUES ('23', '经验副本 评分机制');
INSERT INTO `t_cfg_fb_function` VALUES ('25', '军团副本');
INSERT INTO `t_cfg_fb_function` VALUES ('26', '符文副本');
INSERT INTO `t_cfg_fb_function` VALUES ('28', '小秘境');
INSERT INTO `t_cfg_fb_function` VALUES ('29', '大秘境');
INSERT INTO `t_cfg_fb_function` VALUES ('30', '材料副本');
INSERT INTO `t_cfg_fb_function` VALUES ('31', '大盗副本');
INSERT INTO `t_cfg_fb_function` VALUES ('32', '图书馆副本');
INSERT INTO `t_cfg_fb_function` VALUES ('33', '特权副本');

-- ----------------------------
-- Table structure for `t_cfg_fb_subfunction`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_fb_subfunction`;
CREATE TABLE `t_cfg_fb_subfunction` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `functionId` int(10) unsigned DEFAULT NULL,
  `subFunctionChineseName` varchar(255) DEFAULT NULL,
  `subFunctionVietnameseName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_fb_subfunction
-- ----------------------------
INSERT INTO `t_cfg_fb_subfunction` VALUES ('1', '2001', '幻魔洞之战', null);
INSERT INTO `t_cfg_fb_subfunction` VALUES ('2', '2002', '猩红之谜', null);
INSERT INTO `t_cfg_fb_subfunction` VALUES ('3', '2003', '地下宫殿副本', null);
INSERT INTO `t_cfg_fb_subfunction` VALUES ('4', '2004', '初级强盗之家', null);
INSERT INTO `t_cfg_fb_subfunction` VALUES ('5', '2005', '藏书馆1层', null);
INSERT INTO `t_cfg_fb_subfunction` VALUES ('6', '2006', '圣域争霸', null);
INSERT INTO `t_cfg_fb_subfunction` VALUES ('7', '2007', '铂金特权副本', null);
INSERT INTO `t_cfg_fb_subfunction` VALUES ('8', '2008', '钻石特权副本', null);
INSERT INTO `t_cfg_fb_subfunction` VALUES ('9', '2009', '星耀特权副本', null);
INSERT INTO `t_cfg_fb_subfunction` VALUES ('10', '2010', '高级强盗之家', null);
INSERT INTO `t_cfg_fb_subfunction` VALUES ('11', '2011', '江山如画强盗之家', null);
INSERT INTO `t_cfg_fb_subfunction` VALUES ('12', '2012', '藏书馆2层', null);
INSERT INTO `t_cfg_fb_subfunction` VALUES ('13', '2013', '藏书馆3层', null);

-- ----------------------------
-- Table structure for `t_cfg_ip_type`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_ip_type`;
CREATE TABLE `t_cfg_ip_type` (
  `ipTypeId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ipTypeChineseName` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `ipTypeVietnameseName` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `isDefault` tinyint(1) unsigned DEFAULT NULL COMMENT '0-非默认，1-默认',
  `position` int(11) DEFAULT NULL,
  PRIMARY KEY (`ipTypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_cfg_ip_type
-- ----------------------------
INSERT INTO `t_cfg_ip_type` VALUES ('1', '内网', '内网', '1', '1');
INSERT INTO `t_cfg_ip_type` VALUES ('2', '公网', '公网', '1', '2');
INSERT INTO `t_cfg_ip_type` VALUES ('3', '电信', '电信', '0', '3');
INSERT INTO `t_cfg_ip_type` VALUES ('4', '联通', '联通', '0', '4');

-- ----------------------------
-- Table structure for `t_cfg_item`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_item`;
CREATE TABLE `t_cfg_item` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `itemType` smallint(5) unsigned DEFAULT NULL COMMENT '物品type',
  `itemId` int(10) unsigned DEFAULT NULL COMMENT '物品id',
  `itemChineseName` varchar(255) DEFAULT NULL COMMENT '物品名称',
  `itemKoreanName` varchar(255) DEFAULT NULL COMMENT '物品名称',
  `description` varchar(255) DEFAULT NULL COMMENT '物品描述',
  `maxCount` int(10) unsigned DEFAULT NULL COMMENT '最大叠加数',
  `price` int(10) DEFAULT NULL COMMENT '单价',
  `param` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_item
-- ----------------------------

-- ----------------------------
-- Table structure for `t_cfg_itemshop_param`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_itemshop_param`;
CREATE TABLE `t_cfg_itemshop_param` (
  `param` int(10) DEFAULT NULL,
  `itemId` int(10) DEFAULT NULL,
  `itemType` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_itemshop_param
-- ----------------------------

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

-- ----------------------------
-- Table structure for `t_cfg_item_subfunction`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_item_subfunction`;
CREATE TABLE `t_cfg_item_subfunction` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `functionId` int(10) unsigned DEFAULT NULL,
  `subFunctionId` int(10) unsigned DEFAULT NULL,
  `subFunctionChineseName` varchar(255) DEFAULT NULL,
  `subFunctionVietnameseName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_item_subfunction
-- ----------------------------

-- ----------------------------
-- Table structure for `t_cfg_item_type`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_item_type`;
CREATE TABLE `t_cfg_item_type` (
  `type` int(10) NOT NULL,
  `chineseValue` varchar(255) DEFAULT NULL COMMENT '中文名'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_item_type
-- ----------------------------

-- ----------------------------
-- Table structure for `t_cfg_menu`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_menu`;
CREATE TABLE `t_cfg_menu` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `menuId` int(10) unsigned NOT NULL,
  `parentMenuId` int(10) unsigned NOT NULL,
  `menuChineseName` varchar(255) DEFAULT NULL,
  `menuVietnameseName` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `display` tinyint(1) unsigned DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `position` tinyint(3) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=287 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_menu
-- ----------------------------
INSERT INTO `t_cfg_menu` VALUES ('1', '1', '0', '客服功能', 'CSKH', '', '1', 'glyphicon glyphicon-tasks', '1');
INSERT INTO `t_cfg_menu` VALUES ('2', '2', '0', '运营功能', 'Vận Hành', '', '1', 'fa fa-th', '2');
INSERT INTO `t_cfg_menu` VALUES ('3', '3', '0', '数据管理', 'Quản lý dữ liệu', '', '1', 'fa fa-desktop', '3');
INSERT INTO `t_cfg_menu` VALUES ('4', '4', '0', '运维功能', 'Bảo Trì', '', '1', 'fa fa-picture-o', '4');
INSERT INTO `t_cfg_menu` VALUES ('5', '5', '0', '系统功能', 'Hệ Thống', '', '1', 'fa fa-calendar', '5');
INSERT INTO `t_cfg_menu` VALUES ('6', '501', '5', '用户管理', 'Quản Lý KH', '/index.php/User/manage/showView', '1', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('7', '401', '4', '运营商管理', 'NPH', '/index.php/Operator/manage/showView', '1', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('8', '402', '4', 'IP地址管理', 'Địa Chỉ IP', '/index.php/Ip/manage/showView', '1', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('9', '50101', '501', '查看', 'Tra Xem', '/index.php/User/manage/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('10', '50102', '501', '添加', 'Th¡§', '/index.php/User/manage/add', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('11', '50104', '501', '分配系统功能权限', 'Hệ Thống Phân Phối', '/index.php/Menu/manage/setUserPrivilege', '0', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('12', '40101', '401', '查看', 'Tra Xem', '/index.php/Operator/manage/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('13', '40102', '401', '添加', 'Th¡§', '/index.php/Operator/manage/add', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('14', '40103', '401', '编辑', 'Biên Tập', '/index.php/Operator/manage/modify', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('15', '40201', '402', '查看', 'Tra Xem', '/index.php/Ip/manage/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('16', '40202', '402', '添加', 'Th¡§', '/index.php/Ip/manage/add', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('17', '40203', '402', '编辑', 'Biên Tập', '/index.php/Ip/manage/modify', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('18', '50105', '501', '分配运营商权限', 'Hệ Thống Phân Phối', '/index.php/Operator/manage/setUserPrivilege', '0', '', '5');
INSERT INTO `t_cfg_menu` VALUES ('19', '403', '4', '服务器管理', 'Máy Chủ', '/index.php/Server/manage/showView', '1', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('20', '40301', '403', '查看', 'Tra Xem', '/index.php/Server/manage/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('21', '40302', '403', '添加', 'Th¡§', '/index.php/Server/manage/add', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('22', '40303', '403', '编辑', 'Biên Tập', '/index.php/Server/manage/modify', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('23', '404', '4', '游戏区管理', 'Máy Chủ', '/index.php/GameArea/manage/showView', '1', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('24', '40401', '404', '查看', 'Tra Xem', '/index.php/GameArea/manage/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('25', '40402', '404', '添加', 'Th¡§', '/index.php/GameArea/manage/add', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('26', '40403', '404', '编辑', 'Biên Tập', '/index.php/GameArea/manage/modify', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('27', '50103', '501', '编辑', 'Biên Tập', '/index.php/User/manage/modify', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('28', '50106', '501', '重置密码', 'Thiết Lập Mật Khẩu', '/index.php/User/manage/resetPassword', '0', '', '6');
INSERT INTO `t_cfg_menu` VALUES ('29', '40304', '403', '分配IP', 'Phân Phối IP', '/index.php/Server/manage/setServerIp', '0', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('30', '101', '1', '角色信息', 'Th?ng Tin NV', '/index.php/Role/manage/showView', '1', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('31', '10101', '101', '查看', 'Tra Xem', '/index.php/Role/manage/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('32', '201', '2', '发送邮件', 'Gửi Thư', '/index.php/Mail/send/showView', '1', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('33', '20101', '201', '查看', 'Tra Xem', '/index.php/Mail/send/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('34', '20102', '201', '系统邮件', 'Yêu Cầu', '/index.php/Mail/send/applySys', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('35', '20103', '201', '群发邮件', 'Duyệt', '/index.php/Mail/send/applyAll', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('36', '214', '2', '等级报表', 'Báo Cáo Cấp', '/index.php/Report/level/showView', '1', '', '14');
INSERT INTO `t_cfg_menu` VALUES ('37', '21401', '214', '查看', 'Tra Xem', '/index.php/Report/level/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('38', '103', '1', '货币明细', 'Tiền Tệ', '/index.php/Currency/detail/showView', '1', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('39', '10301', '103', '查看', 'Tra Xem', '/index.php/Currency/detail/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('40', '10102', '101', '踢人', 'Kích Người', '/index.php/Role/manage/kick', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('41', '10103', '101', '封号', 'Kh¡§?a ', '/index.php/Role/manage/bannedRole', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('42', '10104', '101', '解封', 'Mở Khóa', '/index.php/Role/manage/unbannedRole', '0', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('43', '10105', '101', '禁言', 'Cấm Ngôn', '/index.php/Role/manage/bannedChat', '0', '', '5');
INSERT INTO `t_cfg_menu` VALUES ('44', '10106', '101', '解除禁言', 'Giải Cấm Ngôn', '/index.php/Role/manage/unbannedChat', '0', '', '6');
INSERT INTO `t_cfg_menu` VALUES ('45', '104', '1', '物品明细', 'Chi Tiết VP', '/index.php/Item/detail/showView', '1', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('46', '10401', '104', '查看', 'Tra Xem', '/index.php/Item/detail/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('47', '21501', '215', '在线时长', 'Bảng Lưu Tồn', '/index.php/Report/remain/showView', '1', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('48', '2150101', '21501', '查看', 'Tra Xem', '/index.php/Report/remain/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('49', '205', '2', '公告管理', 'Th?ng B¡§', '/index.php/Announcement/manage/showView', '1', '', '5');
INSERT INTO `t_cfg_menu` VALUES ('50', '20501', '205', '查看', 'Tra Xem', '/index.php/Announcement/manage/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('51', '20502', '205', '添加', 'Th¡§', '/index.php/Announcement/manage/add', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('52', '206', '2', '货币统计', 'Thống Kê Tiền Tệ', '', '1', '', '6');
INSERT INTO `t_cfg_menu` VALUES ('53', '20601', '206', '商城道具出售排行', 'Thống Kê Tiêu Phí', '/index.php/Currency/summary/showView', '1', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('54', '2060101', '20601', '查看', 'Tra Xem', '/index.php/Currency/summary/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('55', '207', '2', '充值统计', 'Thống Kê Nạp', '', '1', '', '7');
INSERT INTO `t_cfg_menu` VALUES ('56', '20701', '207', '充值汇总', 'Tổng Mức Nạp', '/index.php/Pay/detail/showView', '1', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('57', '2070101', '20701', '查看', 'Tra Xem', '/index.php/Pay/detail/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('58', '40305', '403', '管理端口组', 'Quản Lý Cổng ', '/index.php/Server/manage/setPortGroupStatus', '0', '', '5');
INSERT INTO `t_cfg_menu` VALUES ('59', '405', '4', '版本管理', 'Phiên Bản', '/index.php/Version/manage/showView', '1', '', '6');
INSERT INTO `t_cfg_menu` VALUES ('60', '40501', '405', '查看', 'Tra Xem', '/index.php/Version/manage/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('61', '40502', '405', '添加', 'Th¡§', '/index.php/Version/manage/add', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('62', '40503', '405', '编辑', 'Biên Tập', '/index.php/Version/manage/modify', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('63', '40504', '405', '合并安装包', 'Ghép Gói Cài Đặt', '/index.php/Version/manage/mergeToInstall', '0', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('64', '40404', '404', '安装', 'Cài Đặt', '/index.php/GameArea/manage/install', '0', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('65', '208', '2', '内部充值', 'Nội Bộ Nạp Thẻ', '/index.php/Pay/apply/showView', '1', '', '8');
INSERT INTO `t_cfg_menu` VALUES ('66', '20801', '208', '查看', 'Tra Xem', '/index.php/Pay/apply/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('67', '20802', '208', '申请', 'Yêu Cầu', '/index.php/Pay/apply/add', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('68', '20803', '208', '审批', 'Duyệt', '/index.php/Pay/apply/approval', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('69', '406', '4', '跨服管理', 'Li¡§on Serv', '/index.php/BattleServer/manage/showView', '0', '', '5');
INSERT INTO `t_cfg_menu` VALUES ('70', '40601', '406', '查看', 'Tra Xem', '/index.php/BattleServer/manage/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('71', '40602', '406', '添加', 'Th¡§', '/index.php/BattleServer/manage/add', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('72', '40603', '406', '编辑', 'Biên Tập', '/index.php/BattleServer/manage/modify', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('73', '40604', '406', '安装', 'Cài Đặt', '/index.php/BattleServer/manage/install', '0', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('74', '40405', '404', '清档', 'Reset', '/index.php/GameArea/manage/clearData', '0', '', '5');
INSERT INTO `t_cfg_menu` VALUES ('75', '106', '1', '封禁信息', '', '/index.php/Role/banned/showView', '1', '', '6');
INSERT INTO `t_cfg_menu` VALUES ('76', '10601', '106', '查看', '', '/index.php/Role/banned/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('77', '202', '2', '公会列表', '', '/index.php/Online/family/showView', '1', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('78', '20201', '202', '查看', '', '/index.php/Online/family/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('79', '210', '2', '按IP玩家数据', '', '/index.php/Online/ip/showView', '1', '', '10');
INSERT INTO `t_cfg_menu` VALUES ('80', '21001', '210', '查看', '', '/index.php/Online/ip/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('81', '21002', '210', '详细信息', '', '/index.php/Online/ip/getInfoData', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('82', '215', '2', '用户留存', '', '', '1', '', '15');
INSERT INTO `t_cfg_menu` VALUES ('83', '21502', '215', '任务留存', '', '/index.php/Report/task/showView', '1', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('84', '2150201', '21502', '查看', '', '/index.php/Report/task/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('85', '209', '2', 'GM账号', '', '/index.php/Announcement/gm/showView', '1', '', '9');
INSERT INTO `t_cfg_menu` VALUES ('86', '20901', '209', '查看', '', '/index.php/Announcement/gm/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('87', '20902', '209', '添加', '', '/index.php/Announcement/gm/add', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('88', '20903', '209', '编辑', '', '/index.php/Announcement/gm/modify', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('89', '107', '1', '玩家信息', '', '/index.php/Role/player/showView', '1', '', '7');
INSERT INTO `t_cfg_menu` VALUES ('90', '10701', '107', '查看', '', '/index.php/Role/player/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('91', '203', '2', '实时创建数据', '', '/index.php/Report/register/showView', '1', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('92', '20301', '203', '查看', '', '/index.php/Report/register/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('93', '211', '2', '玩家在线数据', '', '/index.php/Online/job/showView', '1', '', '11');
INSERT INTO `t_cfg_menu` VALUES ('94', '21101', '211', '查看', '', '/index.php/Online/job/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('95', '212', '2', '按小时玩家数据', '', '/index.php/Online/hourly/showView', '1', '', '12');
INSERT INTO `t_cfg_menu` VALUES ('96', '21201', '212', '查看', '', '/index.php/Online/hourly/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('97', '213', '2', '按天玩家数据', '', '/index.php/Online/day/showView', '1', '', '13');
INSERT INTO `t_cfg_menu` VALUES ('98', '21301', '213', '查看', '', '/index.php/Online/day/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('99', '20602', '206', '首次购买道具', '', '/index.php/Currency/first/showView', '1', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('100', '2060201', '20602', '查看', '', '/index.php/Currency/first/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('101', '20603', '206', '元宝消费分类', '', '/index.php/Currency/goldtype/showView', '1', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('102', '2060301', '20603', '查看', '', '/index.php/Currency/goldtype/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('103', '21503', '215', '用户留存率', '', '/index.php/Report/stay/showView', '1', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('104', '2150301', '21503', '查看', '', '/index.php/Report/stay/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('105', '302', '3', '奖励申请', '', '/index.php/Gift/send/showView', '1', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('106', '30201', '302', '查看', '', '/index.php/Gift/send/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('107', '30202', '302', '可生成礼包', '', '/index.php/Gift/send/getList', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('108', '30203', '302', '申请', '', '/index.php/Gift/send/applyAll', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('109', '30204', '302', '删除', '', '/index.php/Gift/send/del', '0', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('110', '204', '2', '游戏问题', '', '/index.php/Mail/question/showView', '1', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('111', '20401', '204', '查看', '', '/index.php/Mail/question/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('112', '20402', '204', '回复奖励', '', '/index.php/Mail/question/reward', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('113', '20403', '204', '审核', '', '/index.php/Mail/question/approval', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('114', '20404', '204', '关闭', '', '/index.php/Mail/question/close', '0', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('115', '301', '3', '礼包激活码', '', '/index.php/Gift/activation/showView', '1', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('116', '30101', '301', '查询', '', '/index.php/Gift/activation/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('117', '30102', '301', '生成激活码', '', '/index.php/Gift/activation/create', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('118', '30103', '301', '导出', '', '/index.php/Gift/activation/export', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('119', '2060202', '20602', '导出', '', '/index.php/Currency/first/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('120', '2060102', '20601', '导出', '', '/index.php/Currency/summary/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('121', '2060302', '20603', '导出', '', '/index.php/Currency/goldtype/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('122', '21402', '214', '导出', '', '/index.php/Report/level/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('123', '2150102', '21501', '导出', '', '/index.php/Report/remain/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('124', '2150202', '21502', '导出', '', '/index.php/Report/task/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('125', '2150302', '21503', '导出', '', '/index.php/Report/stay/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('126', '20405', '204', '导出', '', '/index.php/Mail/question/export', '0', '', '5');
INSERT INTO `t_cfg_menu` VALUES ('127', '20202', '202', '导出', '', '/index.php/Online/family/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('128', '21003', '210', '导出', '', '/index.php/Online/ip/export', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('129', '21102', '211', '导出', '', '/index.php/Online/job/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('130', '21202', '212', '导出', '', '/index.php/Online/hourly/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('131', '21302', '213', '导出', '', '/index.php/Online/day/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('132', '30104', '301', '删除', '', '/index.php/Gift/activation/del', '0', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('133', '2070102', '20701', '导出', '', '/index.php/Pay/detail/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('134', '217', '2', '活动人数报表', '', '/index.php/Report/activity/showView', '1', '', '17');
INSERT INTO `t_cfg_menu` VALUES ('135', '21701', '217', '查看', '', '/index.php/Report/activity/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('136', '21702', '217', '导出', '', '/index.php/Report/activity/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('137', '10107', '101', '导出', '', '/index.php/Role/manage/export', '0', '', '7');
INSERT INTO `t_cfg_menu` VALUES ('138', '108', '1', '副本信息', '', '/index.php/Report/fblog/showView', '1', '', '8');
INSERT INTO `t_cfg_menu` VALUES ('139', '10801', '108', '查询', '', '/index.php/Report/fblog/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('140', '10402', '104', '导出', '', '/index.php/Item/detail/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('141', '20203', '202', '详细信息', '', '/index.php/Online/family/player', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('142', '20702', '207', '全平台充值数据', '', '/index.php/Online/month/showView', '1', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('143', '2070201', '20702', '查看', '', '/index.php/Online/month/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('144', '2070202', '20702', '导出', '', '/index.php/Online/month/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('145', '6', '0', '数据统计', '', '', '1', 'fa-building-o', '6');
INSERT INTO `t_cfg_menu` VALUES ('146', '601', '6', '常规', '', '', '1', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('147', '602', '6', '运营活动', '', '', '1', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('148', '603', '6', '日常活动', '', '', '1', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('149', '604', '6', '任务', '', '', '1', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('150', '605', '6', '装备类', '', '', '1', '', '5');
INSERT INTO `t_cfg_menu` VALUES ('151', '606', '6', '升阶系统', '', '', '1', '', '6');
INSERT INTO `t_cfg_menu` VALUES ('152', '60103', '601', '元宝资源', '', '/index.php/Resource/money/showView', '1', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('153', '6010301', '60103', '查看', '', '/index.php/Resource/money/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('154', '6010302', '60103', '导出', '', '/index.php/Resource/money/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('155', '60101', '601', '战斗力', '', '/index.php/Resource/battle/showView', '1', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('156', '6010101', '60101', '查看', '', '/index.php/Resource/battle/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('157', '6010102', '60101', '导出', '', '/index.php/Resource/battle/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('158', '6010103', '60101', '详情', '', '/index.php/Resource/battle/player', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('159', '60102', '601', '等级', '', '/index.php/Resource/level/showView', '1', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('160', '6010201', '60102', '查看', '', '/index.php/Resource/level/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('161', '6010202', '60102', '导出', '', '/index.php/Resource/level/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('162', '6010203', '60102', '详情', '', '/index.php/Resource/level/player', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('163', '60201', '602', '至尊特权', '', '/index.php/Statistics/privilege/showView', '1', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('164', '6020101', '60201', '查看', '', '/index.php/Statistics/privilege/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('165', '6020102', '60201', '导出', '', '/index.php/Statistics/privilege/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('166', '60202', '602', '神器礼包', '', '/index.php/Statistics/artifact/showView', '1', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('167', '6020201', '60202', '查看', '', '/index.php/Statistics/artifact/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('168', '6020202', '60202', '导出', '', '/index.php/Statistics/artifact/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('169', '60203', '602', '宠物契约', '', '/index.php/Statistics/pet/showView', '1', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('170', '6020301', '60203', '查看', '', '/index.php/Statistics/pet/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('171', '6020302', '60203', '导出', '', '/index.php/Statistics/pet/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('172', '60204', '602', '限时礼包', '', '/index.php/Statistics/limit/showView', '1', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('173', '6020401', '60204', '查看', '', '/index.php/Statistics/limit/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('174', '60205', '602', '经验炼制', '', '/index.php/Statistics/experience/showView', '1', '', '5');
INSERT INTO `t_cfg_menu` VALUES ('175', '6020501', '60205', '查看', '', '/index.php/Statistics/experience/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('176', '6020502', '60205', '导出', '', '/index.php/Statistics/experience/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('177', '60206', '602', '藏宝图', '', '/index.php/Task/map/showView', '1', '', '6');
INSERT INTO `t_cfg_menu` VALUES ('178', '6020601', '60206', '查看', '', '/index.php/Task/map/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('179', '6020602', '60206', '导出', '', '/index.php/Task/map/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('180', '60207', '602', '王之宝藏', '', '/index.php/Statistics/king/showView', '1', '', '7');
INSERT INTO `t_cfg_menu` VALUES ('181', '6020701', '60207', '查看', '', '/index.php/Statistics/king/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('182', '6020702', '60207', '导出', '', '/index.php/Statistics/king/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('183', '60208', '602', '珍宝阁', '', '/index.php/Statistics/treasure/showView', '1', '', '8');
INSERT INTO `t_cfg_menu` VALUES ('184', '6020801', '60208', '查看', '', '/index.php/Statistics/treasure/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('185', '6020802', '60208', '导出', '', '/index.php/Statistics/treasure/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('186', '60209', '602', '超级特惠', '', '/index.php/Statistics/special/showView', '1', '', '9');
INSERT INTO `t_cfg_menu` VALUES ('187', '6020901', '60209', '查看', '', '/index.php/Statistics/special/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('188', '6020902', '60209', '导出', '', '/index.php/Statistics/special/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('189', '60301', '603', '异界时空', '', '/index.php/Task/spaceTime/showView', '1', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('190', '6030101', '60301', '查看', '', '/index.php/Task/spaceTime/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('191', '6030102', '60301', '导出', '', '/index.php/Task/spaceTime/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('192', '60302', '603', '极限挑战', '', '/index.php/Activity/jxtz/showView', '1', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('193', '6030201', '60302', '查看', '', '/index.php/Activity/jxtz/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('194', '6030202', '60302', '导出', '', '/index.php/Activity/jxtz/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('195', '60303', '603', '天下第一', '', '/index.php/Activity/first/showView', '1', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('196', '6030301', '60303', '查看', '', '/index.php/Activity/first/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('197', '6030302', '60303', '导出', '', '/index.php/Activity/first/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('198', '60304', '603', '决战风云碑', '', '/index.php/Activity/jzfyb/showView', '1', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('199', '6030401', '60304', '查看', '', '/index.php/Activity/jzfyb/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('200', '6030402', '60304', '导出', '', '/index.php/Activity/jzfyb/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('201', '60305', '603', '圣域争霸', '', '/index.php/Activity/syzb/showView', '1', '', '5');
INSERT INTO `t_cfg_menu` VALUES ('202', '6030501', '60305', '查看', '', '/index.php/Activity/syzb/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('203', '6030502', '60305', '导出', '', '/index.php/Activity/syzb/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('204', '60401', '604', '赏金任务', '', '/index.php/Task/reward/showView', '1', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('205', '6040101', '60401', '查看', '', '/index.php/Task/reward/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('206', '6040102', '60401', '导出', '', '/index.php/Task/reward/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('207', '60402', '604', '神威任务', '', '/index.php/Task/power/showView', '1', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('208', '6040201', '60402', '查看', '', '/index.php/Task/power/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('209', '6040202', '60402', '导出', '', '/index.php/Task/power/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('210', '60403', '604', '降妖除魔', '', '/index.php/Task/demons/showView', '1', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('211', '6040301', '60403', '查看', '', '/index.php/Task/demons/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('212', '6040302', '60403', '导出', '', '/index.php/Task/demons/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('213', '60404', '604', '回收任务', '', '/index.php/Task/recovery/showView', '1', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('214', '6040401', '60404', '查看', '', '/index.php/Task/recovery/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('215', '6040402', '60404', '导出', '', '/index.php/Task/recovery/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('216', '60405', '604', '押镖任务', '', '/index.php/Task/recovery/showView', '1', '', '5');
INSERT INTO `t_cfg_menu` VALUES ('217', '6040501', '60405', '查看', '', '/index.php/Task/recovery/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('218', '6040502', '60405', '导出', '', '/index.php/Task/recovery/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('219', '60501', '605', '装备阶数', '', '/index.php/Resource/equip/showView', '1', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('220', '6050101', '60501', '查看', '', '/index.php/Resource/equip/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('221', '6050102', '60501', '导出', '', '/index.php/Resource/equip/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('222', '6050103', '60501', '详情', '', '/index.php/Resource/equip/player', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('223', '60502', '605', '妖器阶数', '', '/index.php/Resource/demon/showView', '1', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('224', '6050201', '60502', '查看', '', '/index.php/Resource/demon/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('225', '6050202', '60502', '导出', '', '/index.php/Resource/demon/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('226', '6050203', '60502', '详情', '', '/index.php/Resource/demon/player', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('227', '60503', '605', '守护阶数', '', '/index.php/Resource/guard/showView', '1', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('228', '6050301', '60503', '查看', '', '/index.php/Resource/guard/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('229', '6050302', '60503', '导出', '', '/index.php/Resource/guard/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('230', '6050303', '60503', '详情', '', '/index.php/Resource/guard/player', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('231', '60504', '605', '圣装阶数', '', '/index.php/Resource/sacred/showView', '1', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('232', '6050401', '60504', '查看', '', '/index.php/Resource/sacred/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('233', '6050402', '60504', '导出', '', '/index.php/Resource/sacred/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('234', '6050403', '60504', '详情', '', '/index.php/Resource/sacred/player', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('235', '60505', '605', '武魂', '', '/index.php/Resource/soul/showView', '1', '', '5');
INSERT INTO `t_cfg_menu` VALUES ('236', '6050501', '60505', '查看', '', '/index.php/Resource/soul/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('237', '6050502', '60505', '导出', '', '/index.php/Resource/soul/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('238', '60601', '606', '爵位', '', '/index.php/Resource/jueWei/showView', '1', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('239', '6060101', '60601', '查看', '', '/index.php/Resource/jueWei/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('240', '6060102', '60601', '导出', '', '/index.php/Resource/jueWei/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('241', '6060103', '60601', '详情', '', '/index.php/Resource/jueWei/player', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('242', '60602', '606', '星脉', '', '/index.php/Resource/star/showView', '1', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('243', '6060201', '60602', '查看', '', '/index.php/Resource/star/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('244', '6060202', '60602', '导出', '', '/index.php/Resource/star/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('245', '6060203', '60602', '详情', '', '/index.php/Resource/star/player', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('246', '60603', '606', '天灵', '', '/index.php/Resource/sky/showView', '1', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('247', '6060301', '60603', '查看', '', '/index.php/Resource/sky/getListData', '0', '', '1');
INSERT INTO `t_cfg_menu` VALUES ('248', '6060302', '60603', '导出', '', '/index.php/Resource/sky/export', '0', '', '2');
INSERT INTO `t_cfg_menu` VALUES ('249', '6060303', '60603', '详情', '', '/index.php/Resource/sky/player', '0', '', '3');
INSERT INTO `t_cfg_menu` VALUES ('250', '60604', '606', '诅咒', '', '/index.php/Resource/damnation/showView', '1', '', '4');
INSERT INTO `t_cfg_menu` VALUES ('251', '6060401', '60604', '查看', '', '/index.php/Resource/damnation/getListData', '0', ' ', '1');
INSERT INTO `t_cfg_menu` VALUES ('252', '6060402', '60604', '导出', '', '/index.php/Resource/damnation/export', '0', ' ', '2');
INSERT INTO `t_cfg_menu` VALUES ('253', '6060403', '60604', '详情', '', '/index.php/Resource/damnation/player', '0', ' ', '3');
INSERT INTO `t_cfg_menu` VALUES ('254', '60605', '606', '神威', '', '/index.php/Resource/honor/showView', '1', ' ', '5');
INSERT INTO `t_cfg_menu` VALUES ('255', '6060501', '60605', '查看', '', '/index.php/Resource/honor/getListData', '0', null, '1');
INSERT INTO `t_cfg_menu` VALUES ('256', '6060502', '60605', '导出', '', '/index.php/Resource/honor/export', '0', null, '2');
INSERT INTO `t_cfg_menu` VALUES ('257', '6060503', '60605', '详情', '', '/index.php/Resource/honor/player', '0', null, '3');
INSERT INTO `t_cfg_menu` VALUES ('258', '60606', '606', '翅膀', '', '/index.php/Resource/wing/showView', '1', null, '6');
INSERT INTO `t_cfg_menu` VALUES ('259', '6060601', '60606', '查看', '', '/index.php/Resource/wing/getListData', '0', null, '1');
INSERT INTO `t_cfg_menu` VALUES ('260', '6060602', '60606', '导出', '', '/index.php/Resource/wing/export', '0', null, '2');
INSERT INTO `t_cfg_menu` VALUES ('261', '6060603', '60606', '详情', '', '/index.php/Resource/wing/player', '0', null, '3');
INSERT INTO `t_cfg_menu` VALUES ('262', '60607', '606', '部位强化', '', '/index.php/Resource/posLevel/showView', '1', null, '7');
INSERT INTO `t_cfg_menu` VALUES ('263', '6060701', '60607', '查看', '', '/index.php/Resource/posLevel/getListData', '0', null, '1');
INSERT INTO `t_cfg_menu` VALUES ('264', '6060702', '60607', '导出', '', '/index.php/Resource/posLevel/export', '0', null, '2');
INSERT INTO `t_cfg_menu` VALUES ('265', '6060703', '60607', '详情', '', '/index.php/Resource/posLevel/player', '0', null, '3');
INSERT INTO `t_cfg_menu` VALUES ('266', '20703', '207', '每日充值', '', '/index.php/Pay/daypay/showView', '1', null, '3');
INSERT INTO `t_cfg_menu` VALUES ('267', '2070301', '20703', '查看', '', '/index.php/Pay/daypay/getListData', '0', null, '1');
INSERT INTO `t_cfg_menu` VALUES ('268', '2070302', '20703', '导出', '', '/index.php/Pay/daypay/export', '0', null, '2');
INSERT INTO `t_cfg_menu` VALUES ('269', '10702', '107', '充值信息', '', '/index.php/Role/player/getPayListData', '0', null, '2');
INSERT INTO `t_cfg_menu` VALUES ('270', '10703', '107', '副本列表', '', '/index.php/Role/player/getFbData', '0', null, '3');
INSERT INTO `t_cfg_menu` VALUES ('271', '10602', '106', '查询', '', '/index.php/Role/banned/getBannedRoleInfo', '0', null, '2');
INSERT INTO `t_cfg_menu` VALUES ('272', '10603', '106', '添加', '', '/index.php/Role/banned/doBanned', '0', null, '3');
INSERT INTO `t_cfg_menu` VALUES ('273', '10108', '101', '查询菜单数量', null, '/index.php/Role/manage/memCount', '0', null, '8');
INSERT INTO `t_cfg_menu` VALUES ('274', '20302', '203', '报表类型', null, '/index.php/Report/register/chart', '0', null, '2');
INSERT INTO `t_cfg_menu` VALUES ('275', '60210', '602', '限时抢购', null, '/index.php/Statistics/flashSale/showView', '1', null, '10');
INSERT INTO `t_cfg_menu` VALUES ('276', '60211', '602', '神秘商场', null, '/index.php/Statistics/shop/showView', '1', null, '11');
INSERT INTO `t_cfg_menu` VALUES ('277', '6021001', '60210', '查看', null, '/index.php/Statistics/flashSale/getListData', '0', null, '1');
INSERT INTO `t_cfg_menu` VALUES ('278', '6021002', '60210', '导出', null, '/index.php/Statistics/flashSale/export', '0', null, '2');
INSERT INTO `t_cfg_menu` VALUES ('279', '6021101', '60211', '查看', null, '/index.php/Statistics/shop/getListData', '0', null, '1');
INSERT INTO `t_cfg_menu` VALUES ('280', '6021102', '60211', '导出', null, '/index.php/Statistics/shop/export', '0', null, '2');
INSERT INTO `t_cfg_menu` VALUES ('281', '303', '3', '查询激活码', null, '/index.php/Gift/query/showView', '1', null, '3');
INSERT INTO `t_cfg_menu` VALUES ('282', '30301', '303', '查询', null, '/index.php/Gift/query/getListData', '0', null, '1');
INSERT INTO `t_cfg_menu` VALUES ('283', '30302', '303', '导出', null, '/index.php/Gift/query/export', '0', null, '2');
INSERT INTO `t_cfg_menu` VALUES ('284', '20704', '207', '全平台充值汇总', null, '/index.php/Online/allPay/showView', '1', null, '4');
INSERT INTO `t_cfg_menu` VALUES ('285', '2070401', '20704', '查看', null, '/index.php/Online/allPay/getListData', '0', null, '1');
INSERT INTO `t_cfg_menu` VALUES ('286', '2070402', '20704', '导出', null, '/index.php/Online/allPay/export', '0', null, '2');

-- ----------------------------
-- Table structure for `t_cfg_mysticalshop_param`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_mysticalshop_param`;
CREATE TABLE `t_cfg_mysticalshop_param` (
  `param` int(10) DEFAULT NULL,
  `itemId` int(10) DEFAULT NULL,
  `itemType` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_mysticalshop_param
-- ----------------------------

-- ----------------------------
-- Table structure for `t_cfg_question_reward`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_question_reward`;
CREATE TABLE `t_cfg_question_reward` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `rewardLevel` int(10) DEFAULT NULL,
  `rewardItem` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_question_reward
-- ----------------------------

-- ----------------------------
-- Table structure for `t_cfg_server_type`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_server_type`;
CREATE TABLE `t_cfg_server_type` (
  `serverTypeId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `serverTypeChineseName` varchar(255) DEFAULT NULL,
  `serverTypeVietnameseName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`serverTypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_server_type
-- ----------------------------
INSERT INTO `t_cfg_server_type` VALUES ('1', 'OPS服务器', 'OPS服务器');
INSERT INTO `t_cfg_server_type` VALUES ('2', '资源服务器', '资源服务器');
INSERT INTO `t_cfg_server_type` VALUES ('3', '游戏服务器', '游戏服务器');
INSERT INTO `t_cfg_server_type` VALUES ('4', '跨服服务器', '跨服服务器');

-- ----------------------------
-- Table structure for `t_cfg_skill`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_skill`;
CREATE TABLE `t_cfg_skill` (
  `TalentId` int(10) NOT NULL COMMENT '天赋id',
  `Name` varchar(255) DEFAULT NULL COMMENT '天赋名'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_skill
-- ----------------------------
INSERT INTO `t_cfg_skill` VALUES ('1', '重斩Lv1');
INSERT INTO `t_cfg_skill` VALUES ('2', '重斩Lv2');
INSERT INTO `t_cfg_skill` VALUES ('3', '重斩Lv3');
INSERT INTO `t_cfg_skill` VALUES ('4', '重斩Lv4');
INSERT INTO `t_cfg_skill` VALUES ('5', '重斩Lv5');
INSERT INTO `t_cfg_skill` VALUES ('6', '重斩Lv6');
INSERT INTO `t_cfg_skill` VALUES ('7', '重斩Lv7');
INSERT INTO `t_cfg_skill` VALUES ('8', '重斩Lv8');
INSERT INTO `t_cfg_skill` VALUES ('9', '重斩Lv9');
INSERT INTO `t_cfg_skill` VALUES ('10', '重斩Lv10');
INSERT INTO `t_cfg_skill` VALUES ('21', '击晕Lv1');
INSERT INTO `t_cfg_skill` VALUES ('22', '击晕Lv2');
INSERT INTO `t_cfg_skill` VALUES ('23', '击晕Lv3');
INSERT INTO `t_cfg_skill` VALUES ('24', '击晕Lv4');
INSERT INTO `t_cfg_skill` VALUES ('25', '击晕Lv5');
INSERT INTO `t_cfg_skill` VALUES ('26', '击晕Lv6');
INSERT INTO `t_cfg_skill` VALUES ('27', '击晕Lv7');
INSERT INTO `t_cfg_skill` VALUES ('28', '击晕Lv8');
INSERT INTO `t_cfg_skill` VALUES ('29', '击晕Lv9');
INSERT INTO `t_cfg_skill` VALUES ('30', '击晕Lv10');
INSERT INTO `t_cfg_skill` VALUES ('41', '跳斩Lv1');
INSERT INTO `t_cfg_skill` VALUES ('42', '跳斩Lv2');
INSERT INTO `t_cfg_skill` VALUES ('43', '跳斩Lv3');
INSERT INTO `t_cfg_skill` VALUES ('44', '跳斩Lv4');
INSERT INTO `t_cfg_skill` VALUES ('45', '跳斩Lv5');
INSERT INTO `t_cfg_skill` VALUES ('46', '跳斩Lv6');
INSERT INTO `t_cfg_skill` VALUES ('47', '跳斩Lv7');
INSERT INTO `t_cfg_skill` VALUES ('48', '跳斩Lv8');
INSERT INTO `t_cfg_skill` VALUES ('49', '跳斩Lv9');
INSERT INTO `t_cfg_skill` VALUES ('50', '跳斩Lv10');
INSERT INTO `t_cfg_skill` VALUES ('61', '旋风斩Lv1');
INSERT INTO `t_cfg_skill` VALUES ('62', '旋风斩Lv2');
INSERT INTO `t_cfg_skill` VALUES ('63', '旋风斩Lv3');
INSERT INTO `t_cfg_skill` VALUES ('64', '旋风斩Lv4');
INSERT INTO `t_cfg_skill` VALUES ('65', '旋风斩Lv5');
INSERT INTO `t_cfg_skill` VALUES ('66', '旋风斩Lv6');
INSERT INTO `t_cfg_skill` VALUES ('67', '旋风斩Lv7');
INSERT INTO `t_cfg_skill` VALUES ('68', '旋风斩Lv8');
INSERT INTO `t_cfg_skill` VALUES ('69', '旋风斩Lv9');
INSERT INTO `t_cfg_skill` VALUES ('70', '旋风斩Lv10');
INSERT INTO `t_cfg_skill` VALUES ('151', '战斗之吼Lv1');
INSERT INTO `t_cfg_skill` VALUES ('152', '战斗之吼Lv2');
INSERT INTO `t_cfg_skill` VALUES ('153', '战斗之吼Lv3');
INSERT INTO `t_cfg_skill` VALUES ('154', '战斗之吼Lv4');
INSERT INTO `t_cfg_skill` VALUES ('155', '战斗之吼Lv5');
INSERT INTO `t_cfg_skill` VALUES ('156', '战斗之吼Lv6');
INSERT INTO `t_cfg_skill` VALUES ('157', '战斗之吼Lv7');
INSERT INTO `t_cfg_skill` VALUES ('158', '战斗之吼Lv8');
INSERT INTO `t_cfg_skill` VALUES ('159', '战斗之吼Lv9');
INSERT INTO `t_cfg_skill` VALUES ('160', '战斗之吼Lv10');
INSERT INTO `t_cfg_skill` VALUES ('171', '警示之吼Lv1');
INSERT INTO `t_cfg_skill` VALUES ('172', '警示之吼Lv2');
INSERT INTO `t_cfg_skill` VALUES ('173', '警示之吼Lv3');
INSERT INTO `t_cfg_skill` VALUES ('174', '警示之吼Lv4');
INSERT INTO `t_cfg_skill` VALUES ('175', '警示之吼Lv5');
INSERT INTO `t_cfg_skill` VALUES ('176', '警示之吼Lv6');
INSERT INTO `t_cfg_skill` VALUES ('177', '警示之吼Lv7');
INSERT INTO `t_cfg_skill` VALUES ('178', '警示之吼Lv8');
INSERT INTO `t_cfg_skill` VALUES ('179', '警示之吼Lv9');
INSERT INTO `t_cfg_skill` VALUES ('180', '警示之吼Lv10');
INSERT INTO `t_cfg_skill` VALUES ('191', '血性之吼Lv1');
INSERT INTO `t_cfg_skill` VALUES ('192', '血性之吼Lv2');
INSERT INTO `t_cfg_skill` VALUES ('193', '血性之吼Lv3');
INSERT INTO `t_cfg_skill` VALUES ('194', '血性之吼Lv4');
INSERT INTO `t_cfg_skill` VALUES ('195', '血性之吼Lv5');
INSERT INTO `t_cfg_skill` VALUES ('196', '血性之吼Lv6');
INSERT INTO `t_cfg_skill` VALUES ('197', '血性之吼Lv7');
INSERT INTO `t_cfg_skill` VALUES ('198', '血性之吼Lv8');
INSERT INTO `t_cfg_skill` VALUES ('199', '血性之吼Lv9');
INSERT INTO `t_cfg_skill` VALUES ('200', '血性之吼Lv10');
INSERT INTO `t_cfg_skill` VALUES ('211', '狂暴怒吼Lv1');
INSERT INTO `t_cfg_skill` VALUES ('212', '狂暴怒吼Lv2');
INSERT INTO `t_cfg_skill` VALUES ('213', '狂暴怒吼Lv3');
INSERT INTO `t_cfg_skill` VALUES ('214', '狂暴怒吼Lv4');
INSERT INTO `t_cfg_skill` VALUES ('215', '狂暴怒吼Lv5');
INSERT INTO `t_cfg_skill` VALUES ('216', '狂暴怒吼Lv6');
INSERT INTO `t_cfg_skill` VALUES ('217', '狂暴怒吼Lv7');
INSERT INTO `t_cfg_skill` VALUES ('218', '狂暴怒吼Lv8');
INSERT INTO `t_cfg_skill` VALUES ('219', '狂暴怒吼Lv9');
INSERT INTO `t_cfg_skill` VALUES ('220', '狂暴怒吼Lv10');
INSERT INTO `t_cfg_skill` VALUES ('301', '圣光斩Lv1');
INSERT INTO `t_cfg_skill` VALUES ('302', '圣光斩Lv2');
INSERT INTO `t_cfg_skill` VALUES ('303', '圣光斩Lv3');
INSERT INTO `t_cfg_skill` VALUES ('304', '圣光斩Lv4');
INSERT INTO `t_cfg_skill` VALUES ('305', '圣光斩Lv5');
INSERT INTO `t_cfg_skill` VALUES ('306', '圣光斩Lv6');
INSERT INTO `t_cfg_skill` VALUES ('307', '圣光斩Lv7');
INSERT INTO `t_cfg_skill` VALUES ('308', '圣光斩Lv8');
INSERT INTO `t_cfg_skill` VALUES ('309', '圣光斩Lv9');
INSERT INTO `t_cfg_skill` VALUES ('310', '圣光斩Lv10');
INSERT INTO `t_cfg_skill` VALUES ('321', '牺牲Lv1');
INSERT INTO `t_cfg_skill` VALUES ('322', '牺牲Lv2');
INSERT INTO `t_cfg_skill` VALUES ('323', '牺牲Lv3');
INSERT INTO `t_cfg_skill` VALUES ('324', '牺牲Lv4');
INSERT INTO `t_cfg_skill` VALUES ('325', '牺牲Lv5');
INSERT INTO `t_cfg_skill` VALUES ('326', '牺牲Lv6');
INSERT INTO `t_cfg_skill` VALUES ('327', '牺牲Lv7');
INSERT INTO `t_cfg_skill` VALUES ('328', '牺牲Lv8');
INSERT INTO `t_cfg_skill` VALUES ('329', '牺牲Lv9');
INSERT INTO `t_cfg_skill` VALUES ('330', '牺牲Lv10');
INSERT INTO `t_cfg_skill` VALUES ('341', '祝福之锤Lv1');
INSERT INTO `t_cfg_skill` VALUES ('342', '祝福之锤Lv2');
INSERT INTO `t_cfg_skill` VALUES ('343', '祝福之锤Lv3');
INSERT INTO `t_cfg_skill` VALUES ('344', '祝福之锤Lv4');
INSERT INTO `t_cfg_skill` VALUES ('345', '祝福之锤Lv5');
INSERT INTO `t_cfg_skill` VALUES ('346', '祝福之锤Lv6');
INSERT INTO `t_cfg_skill` VALUES ('347', '祝福之锤Lv7');
INSERT INTO `t_cfg_skill` VALUES ('348', '祝福之锤Lv8');
INSERT INTO `t_cfg_skill` VALUES ('349', '祝福之锤Lv9');
INSERT INTO `t_cfg_skill` VALUES ('350', '祝福之锤Lv10');
INSERT INTO `t_cfg_skill` VALUES ('361', '天堂之拳Lv1');
INSERT INTO `t_cfg_skill` VALUES ('362', '天堂之拳Lv2');
INSERT INTO `t_cfg_skill` VALUES ('363', '天堂之拳Lv3');
INSERT INTO `t_cfg_skill` VALUES ('364', '天堂之拳Lv4');
INSERT INTO `t_cfg_skill` VALUES ('365', '天堂之拳Lv5');
INSERT INTO `t_cfg_skill` VALUES ('366', '天堂之拳Lv6');
INSERT INTO `t_cfg_skill` VALUES ('367', '天堂之拳Lv7');
INSERT INTO `t_cfg_skill` VALUES ('368', '天堂之拳Lv8');
INSERT INTO `t_cfg_skill` VALUES ('369', '天堂之拳Lv9');
INSERT INTO `t_cfg_skill` VALUES ('370', '天堂之拳Lv10');
INSERT INTO `t_cfg_skill` VALUES ('451', '冰锥术Lv1');
INSERT INTO `t_cfg_skill` VALUES ('452', '冰锥术Lv2');
INSERT INTO `t_cfg_skill` VALUES ('453', '冰锥术Lv3');
INSERT INTO `t_cfg_skill` VALUES ('454', '冰锥术Lv4');
INSERT INTO `t_cfg_skill` VALUES ('455', '冰锥术Lv5');
INSERT INTO `t_cfg_skill` VALUES ('456', '冰锥术Lv6');
INSERT INTO `t_cfg_skill` VALUES ('457', '冰锥术Lv7');
INSERT INTO `t_cfg_skill` VALUES ('458', '冰锥术Lv8');
INSERT INTO `t_cfg_skill` VALUES ('459', '冰锥术Lv9');
INSERT INTO `t_cfg_skill` VALUES ('460', '冰锥术Lv10');
INSERT INTO `t_cfg_skill` VALUES ('471', '冰封球Lv1');
INSERT INTO `t_cfg_skill` VALUES ('472', '冰封球Lv2');
INSERT INTO `t_cfg_skill` VALUES ('473', '冰封球Lv3');
INSERT INTO `t_cfg_skill` VALUES ('474', '冰封球Lv4');
INSERT INTO `t_cfg_skill` VALUES ('475', '冰封球Lv5');
INSERT INTO `t_cfg_skill` VALUES ('476', '冰封球Lv6');
INSERT INTO `t_cfg_skill` VALUES ('477', '冰封球Lv7');
INSERT INTO `t_cfg_skill` VALUES ('478', '冰封球Lv8');
INSERT INTO `t_cfg_skill` VALUES ('479', '冰封球Lv9');
INSERT INTO `t_cfg_skill` VALUES ('480', '冰封球Lv10');
INSERT INTO `t_cfg_skill` VALUES ('491', '多重冰锥术Lv1');
INSERT INTO `t_cfg_skill` VALUES ('492', '多重冰锥术Lv2');
INSERT INTO `t_cfg_skill` VALUES ('493', '多重冰锥术Lv3');
INSERT INTO `t_cfg_skill` VALUES ('494', '多重冰锥术Lv4');
INSERT INTO `t_cfg_skill` VALUES ('495', '多重冰锥术Lv5');
INSERT INTO `t_cfg_skill` VALUES ('496', '多重冰锥术Lv6');
INSERT INTO `t_cfg_skill` VALUES ('497', '多重冰锥术Lv7');
INSERT INTO `t_cfg_skill` VALUES ('498', '多重冰锥术Lv8');
INSERT INTO `t_cfg_skill` VALUES ('499', '多重冰锥术Lv9');
INSERT INTO `t_cfg_skill` VALUES ('500', '多重冰锥术Lv10');
INSERT INTO `t_cfg_skill` VALUES ('511', '暴风雪Lv1');
INSERT INTO `t_cfg_skill` VALUES ('512', '暴风雪Lv2');
INSERT INTO `t_cfg_skill` VALUES ('513', '暴风雪Lv3');
INSERT INTO `t_cfg_skill` VALUES ('514', '暴风雪Lv4');
INSERT INTO `t_cfg_skill` VALUES ('515', '暴风雪Lv5');
INSERT INTO `t_cfg_skill` VALUES ('516', '暴风雪Lv6');
INSERT INTO `t_cfg_skill` VALUES ('517', '暴风雪Lv7');
INSERT INTO `t_cfg_skill` VALUES ('518', '暴风雪Lv8');
INSERT INTO `t_cfg_skill` VALUES ('519', '暴风雪Lv9');
INSERT INTO `t_cfg_skill` VALUES ('520', '暴风雪Lv10');
INSERT INTO `t_cfg_skill` VALUES ('531', '冰霜新星Lv1');
INSERT INTO `t_cfg_skill` VALUES ('532', '冰霜新星Lv2');
INSERT INTO `t_cfg_skill` VALUES ('533', '冰霜新星Lv3');
INSERT INTO `t_cfg_skill` VALUES ('534', '冰霜新星Lv4');
INSERT INTO `t_cfg_skill` VALUES ('535', '冰霜新星Lv5');
INSERT INTO `t_cfg_skill` VALUES ('536', '冰霜新星Lv6');
INSERT INTO `t_cfg_skill` VALUES ('537', '冰霜新星Lv7');
INSERT INTO `t_cfg_skill` VALUES ('538', '冰霜新星Lv8');
INSERT INTO `t_cfg_skill` VALUES ('539', '冰霜新星Lv9');
INSERT INTO `t_cfg_skill` VALUES ('540', '冰霜新星Lv10');
INSERT INTO `t_cfg_skill` VALUES ('601', '烈焰之风Lv1');
INSERT INTO `t_cfg_skill` VALUES ('602', '烈焰之风Lv2');
INSERT INTO `t_cfg_skill` VALUES ('603', '烈焰之风Lv3');
INSERT INTO `t_cfg_skill` VALUES ('604', '烈焰之风Lv4');
INSERT INTO `t_cfg_skill` VALUES ('605', '烈焰之风Lv5');
INSERT INTO `t_cfg_skill` VALUES ('606', '烈焰之风Lv6');
INSERT INTO `t_cfg_skill` VALUES ('607', '烈焰之风Lv7');
INSERT INTO `t_cfg_skill` VALUES ('608', '烈焰之风Lv8');
INSERT INTO `t_cfg_skill` VALUES ('609', '烈焰之风Lv9');
INSERT INTO `t_cfg_skill` VALUES ('610', '烈焰之风Lv10');
INSERT INTO `t_cfg_skill` VALUES ('621', '烈焰死光Lv1');
INSERT INTO `t_cfg_skill` VALUES ('622', '烈焰死光Lv2');
INSERT INTO `t_cfg_skill` VALUES ('623', '烈焰死光Lv3');
INSERT INTO `t_cfg_skill` VALUES ('624', '烈焰死光Lv4');
INSERT INTO `t_cfg_skill` VALUES ('625', '烈焰死光Lv5');
INSERT INTO `t_cfg_skill` VALUES ('626', '烈焰死光Lv6');
INSERT INTO `t_cfg_skill` VALUES ('627', '烈焰死光Lv7');
INSERT INTO `t_cfg_skill` VALUES ('628', '烈焰死光Lv8');
INSERT INTO `t_cfg_skill` VALUES ('629', '烈焰死光Lv9');
INSERT INTO `t_cfg_skill` VALUES ('630', '烈焰死光Lv10');
INSERT INTO `t_cfg_skill` VALUES ('641', '火焰魔眼Lv1');
INSERT INTO `t_cfg_skill` VALUES ('642', '火焰魔眼Lv2');
INSERT INTO `t_cfg_skill` VALUES ('643', '火焰魔眼Lv3');
INSERT INTO `t_cfg_skill` VALUES ('644', '火焰魔眼Lv4');
INSERT INTO `t_cfg_skill` VALUES ('645', '火焰魔眼Lv5');
INSERT INTO `t_cfg_skill` VALUES ('646', '火焰魔眼Lv6');
INSERT INTO `t_cfg_skill` VALUES ('647', '火焰魔眼Lv7');
INSERT INTO `t_cfg_skill` VALUES ('648', '火焰魔眼Lv8');
INSERT INTO `t_cfg_skill` VALUES ('649', '火焰魔眼Lv9');
INSERT INTO `t_cfg_skill` VALUES ('650', '火焰魔眼Lv10');
INSERT INTO `t_cfg_skill` VALUES ('661', '火旋风Lv1');
INSERT INTO `t_cfg_skill` VALUES ('662', '火旋风Lv2');
INSERT INTO `t_cfg_skill` VALUES ('663', '火旋风Lv3');
INSERT INTO `t_cfg_skill` VALUES ('664', '火旋风Lv4');
INSERT INTO `t_cfg_skill` VALUES ('665', '火旋风Lv5');
INSERT INTO `t_cfg_skill` VALUES ('666', '火旋风Lv6');
INSERT INTO `t_cfg_skill` VALUES ('667', '火旋风Lv7');
INSERT INTO `t_cfg_skill` VALUES ('668', '火旋风Lv8');
INSERT INTO `t_cfg_skill` VALUES ('669', '火旋风Lv9');
INSERT INTO `t_cfg_skill` VALUES ('670', '火旋风Lv10');
INSERT INTO `t_cfg_skill` VALUES ('681', '天火陨石Lv1');
INSERT INTO `t_cfg_skill` VALUES ('682', '天火陨石Lv2');
INSERT INTO `t_cfg_skill` VALUES ('683', '天火陨石Lv3');
INSERT INTO `t_cfg_skill` VALUES ('684', '天火陨石Lv4');
INSERT INTO `t_cfg_skill` VALUES ('685', '天火陨石Lv5');
INSERT INTO `t_cfg_skill` VALUES ('686', '天火陨石Lv6');
INSERT INTO `t_cfg_skill` VALUES ('687', '天火陨石Lv7');
INSERT INTO `t_cfg_skill` VALUES ('688', '天火陨石Lv8');
INSERT INTO `t_cfg_skill` VALUES ('689', '天火陨石Lv9');
INSERT INTO `t_cfg_skill` VALUES ('690', '天火陨石Lv10');
INSERT INTO `t_cfg_skill` VALUES ('751', '白骨之魂Lv1');
INSERT INTO `t_cfg_skill` VALUES ('752', '白骨之魂Lv2');
INSERT INTO `t_cfg_skill` VALUES ('753', '白骨之魂Lv3');
INSERT INTO `t_cfg_skill` VALUES ('754', '白骨之魂Lv4');
INSERT INTO `t_cfg_skill` VALUES ('755', '白骨之魂Lv5');
INSERT INTO `t_cfg_skill` VALUES ('756', '白骨之魂Lv6');
INSERT INTO `t_cfg_skill` VALUES ('757', '白骨之魂Lv7');
INSERT INTO `t_cfg_skill` VALUES ('758', '白骨之魂Lv8');
INSERT INTO `t_cfg_skill` VALUES ('759', '白骨之魂Lv9');
INSERT INTO `t_cfg_skill` VALUES ('760', '白骨之魂Lv10');
INSERT INTO `t_cfg_skill` VALUES ('771', '召唤骷髅Lv1');
INSERT INTO `t_cfg_skill` VALUES ('772', '召唤骷髅Lv2');
INSERT INTO `t_cfg_skill` VALUES ('773', '召唤骷髅Lv3');
INSERT INTO `t_cfg_skill` VALUES ('774', '召唤骷髅Lv4');
INSERT INTO `t_cfg_skill` VALUES ('775', '召唤骷髅Lv5');
INSERT INTO `t_cfg_skill` VALUES ('776', '召唤骷髅Lv6');
INSERT INTO `t_cfg_skill` VALUES ('777', '召唤骷髅Lv7');
INSERT INTO `t_cfg_skill` VALUES ('778', '召唤骷髅Lv8');
INSERT INTO `t_cfg_skill` VALUES ('779', '召唤骷髅Lv9');
INSERT INTO `t_cfg_skill` VALUES ('780', '召唤骷髅Lv10');
INSERT INTO `t_cfg_skill` VALUES ('791', '剧毒新星Lv1');
INSERT INTO `t_cfg_skill` VALUES ('792', '剧毒新星Lv2');
INSERT INTO `t_cfg_skill` VALUES ('793', '剧毒新星Lv3');
INSERT INTO `t_cfg_skill` VALUES ('794', '剧毒新星Lv4');
INSERT INTO `t_cfg_skill` VALUES ('795', '剧毒新星Lv5');
INSERT INTO `t_cfg_skill` VALUES ('796', '剧毒新星Lv6');
INSERT INTO `t_cfg_skill` VALUES ('797', '剧毒新星Lv7');
INSERT INTO `t_cfg_skill` VALUES ('798', '剧毒新星Lv8');
INSERT INTO `t_cfg_skill` VALUES ('799', '剧毒新星Lv9');
INSERT INTO `t_cfg_skill` VALUES ('800', '剧毒新星Lv10');
INSERT INTO `t_cfg_skill` VALUES ('811', '召唤地狱火Lv1');
INSERT INTO `t_cfg_skill` VALUES ('812', '召唤地狱火Lv2');
INSERT INTO `t_cfg_skill` VALUES ('813', '召唤地狱火Lv3');
INSERT INTO `t_cfg_skill` VALUES ('814', '召唤地狱火Lv4');
INSERT INTO `t_cfg_skill` VALUES ('815', '召唤地狱火Lv5');
INSERT INTO `t_cfg_skill` VALUES ('816', '召唤地狱火Lv6');
INSERT INTO `t_cfg_skill` VALUES ('817', '召唤地狱火Lv7');
INSERT INTO `t_cfg_skill` VALUES ('818', '召唤地狱火Lv8');
INSERT INTO `t_cfg_skill` VALUES ('819', '召唤地狱火Lv9');
INSERT INTO `t_cfg_skill` VALUES ('820', '召唤地狱火Lv10');
INSERT INTO `t_cfg_skill` VALUES ('901', '飞刀Lv1');
INSERT INTO `t_cfg_skill` VALUES ('902', '飞刀Lv2');
INSERT INTO `t_cfg_skill` VALUES ('903', '飞刀Lv3');
INSERT INTO `t_cfg_skill` VALUES ('904', '飞刀Lv4');
INSERT INTO `t_cfg_skill` VALUES ('905', '飞刀Lv5');
INSERT INTO `t_cfg_skill` VALUES ('906', '飞刀Lv6');
INSERT INTO `t_cfg_skill` VALUES ('907', '飞刀Lv7');
INSERT INTO `t_cfg_skill` VALUES ('908', '飞刀Lv8');
INSERT INTO `t_cfg_skill` VALUES ('909', '飞刀Lv9');
INSERT INTO `t_cfg_skill` VALUES ('910', '飞刀Lv10');
INSERT INTO `t_cfg_skill` VALUES ('921', '旋转飞刃Lv1');
INSERT INTO `t_cfg_skill` VALUES ('922', '旋转飞刃Lv2');
INSERT INTO `t_cfg_skill` VALUES ('923', '旋转飞刃Lv3');
INSERT INTO `t_cfg_skill` VALUES ('924', '旋转飞刃Lv4');
INSERT INTO `t_cfg_skill` VALUES ('925', '旋转飞刃Lv5');
INSERT INTO `t_cfg_skill` VALUES ('926', '旋转飞刃Lv6');
INSERT INTO `t_cfg_skill` VALUES ('927', '旋转飞刃Lv7');
INSERT INTO `t_cfg_skill` VALUES ('928', '旋转飞刃Lv8');
INSERT INTO `t_cfg_skill` VALUES ('929', '旋转飞刃Lv9');
INSERT INTO `t_cfg_skill` VALUES ('930', '旋转飞刃Lv10');
INSERT INTO `t_cfg_skill` VALUES ('941', '闪电陷阱Lv1');
INSERT INTO `t_cfg_skill` VALUES ('942', '闪电陷阱Lv2');
INSERT INTO `t_cfg_skill` VALUES ('943', '闪电陷阱Lv3');
INSERT INTO `t_cfg_skill` VALUES ('944', '闪电陷阱Lv4');
INSERT INTO `t_cfg_skill` VALUES ('945', '闪电陷阱Lv5');
INSERT INTO `t_cfg_skill` VALUES ('946', '闪电陷阱Lv6');
INSERT INTO `t_cfg_skill` VALUES ('947', '闪电陷阱Lv7');
INSERT INTO `t_cfg_skill` VALUES ('948', '闪电陷阱Lv8');
INSERT INTO `t_cfg_skill` VALUES ('949', '闪电陷阱Lv9');
INSERT INTO `t_cfg_skill` VALUES ('950', '闪电陷阱Lv10');
INSERT INTO `t_cfg_skill` VALUES ('961', '千刃Lv1');
INSERT INTO `t_cfg_skill` VALUES ('962', '千刃Lv2');
INSERT INTO `t_cfg_skill` VALUES ('963', '千刃Lv3');
INSERT INTO `t_cfg_skill` VALUES ('964', '千刃Lv4');
INSERT INTO `t_cfg_skill` VALUES ('965', '千刃Lv5');
INSERT INTO `t_cfg_skill` VALUES ('966', '千刃Lv6');
INSERT INTO `t_cfg_skill` VALUES ('967', '千刃Lv7');
INSERT INTO `t_cfg_skill` VALUES ('968', '千刃Lv8');
INSERT INTO `t_cfg_skill` VALUES ('969', '千刃Lv9');
INSERT INTO `t_cfg_skill` VALUES ('970', '千刃Lv10');
INSERT INTO `t_cfg_skill` VALUES ('1051', '虎击Lv1');
INSERT INTO `t_cfg_skill` VALUES ('1052', '虎击Lv2');
INSERT INTO `t_cfg_skill` VALUES ('1053', '虎击Lv3');
INSERT INTO `t_cfg_skill` VALUES ('1054', '虎击Lv4');
INSERT INTO `t_cfg_skill` VALUES ('1055', '虎击Lv5');
INSERT INTO `t_cfg_skill` VALUES ('1056', '虎击Lv6');
INSERT INTO `t_cfg_skill` VALUES ('1057', '虎击Lv7');
INSERT INTO `t_cfg_skill` VALUES ('1058', '虎击Lv8');
INSERT INTO `t_cfg_skill` VALUES ('1059', '虎击Lv9');
INSERT INTO `t_cfg_skill` VALUES ('1060', '虎击Lv10');
INSERT INTO `t_cfg_skill` VALUES ('1071', '飞龙在天Lv1');
INSERT INTO `t_cfg_skill` VALUES ('1072', '飞龙在天Lv2');
INSERT INTO `t_cfg_skill` VALUES ('1073', '飞龙在天Lv3');
INSERT INTO `t_cfg_skill` VALUES ('1074', '飞龙在天Lv4');
INSERT INTO `t_cfg_skill` VALUES ('1075', '飞龙在天Lv5');
INSERT INTO `t_cfg_skill` VALUES ('1076', '飞龙在天Lv6');
INSERT INTO `t_cfg_skill` VALUES ('1077', '飞龙在天Lv7');
INSERT INTO `t_cfg_skill` VALUES ('1078', '飞龙在天Lv8');
INSERT INTO `t_cfg_skill` VALUES ('1079', '飞龙在天Lv9');
INSERT INTO `t_cfg_skill` VALUES ('1080', '飞龙在天Lv10');
INSERT INTO `t_cfg_skill` VALUES ('1111', '凤凰攻击Lv1');
INSERT INTO `t_cfg_skill` VALUES ('1112', '凤凰攻击Lv2');
INSERT INTO `t_cfg_skill` VALUES ('1113', '凤凰攻击Lv3');
INSERT INTO `t_cfg_skill` VALUES ('1114', '凤凰攻击Lv4');
INSERT INTO `t_cfg_skill` VALUES ('1115', '凤凰攻击Lv5');
INSERT INTO `t_cfg_skill` VALUES ('1116', '凤凰攻击Lv6');
INSERT INTO `t_cfg_skill` VALUES ('1117', '凤凰攻击Lv7');
INSERT INTO `t_cfg_skill` VALUES ('1118', '凤凰攻击Lv8');
INSERT INTO `t_cfg_skill` VALUES ('1119', '凤凰攻击Lv9');
INSERT INTO `t_cfg_skill` VALUES ('1120', '凤凰攻击Lv10');
INSERT INTO `t_cfg_skill` VALUES ('1131', '凤凰攻击Lv1');
INSERT INTO `t_cfg_skill` VALUES ('1132', '凤凰攻击Lv2');
INSERT INTO `t_cfg_skill` VALUES ('1133', '凤凰攻击Lv3');
INSERT INTO `t_cfg_skill` VALUES ('1134', '凤凰攻击Lv4');
INSERT INTO `t_cfg_skill` VALUES ('1135', '凤凰攻击Lv5');
INSERT INTO `t_cfg_skill` VALUES ('1136', '凤凰攻击Lv6');
INSERT INTO `t_cfg_skill` VALUES ('1137', '凤凰攻击Lv7');
INSERT INTO `t_cfg_skill` VALUES ('1138', '凤凰攻击Lv8');
INSERT INTO `t_cfg_skill` VALUES ('1139', '凤凰攻击Lv9');
INSERT INTO `t_cfg_skill` VALUES ('1140', '凤凰攻击Lv10');
INSERT INTO `t_cfg_skill` VALUES ('1151', '凤凰攻击Lv1');
INSERT INTO `t_cfg_skill` VALUES ('1152', '凤凰攻击Lv2');
INSERT INTO `t_cfg_skill` VALUES ('1153', '凤凰攻击Lv3');
INSERT INTO `t_cfg_skill` VALUES ('1154', '凤凰攻击Lv4');
INSERT INTO `t_cfg_skill` VALUES ('1155', '凤凰攻击Lv5');
INSERT INTO `t_cfg_skill` VALUES ('1156', '凤凰攻击Lv6');
INSERT INTO `t_cfg_skill` VALUES ('1157', '凤凰攻击Lv7');
INSERT INTO `t_cfg_skill` VALUES ('1158', '凤凰攻击Lv8');
INSERT INTO `t_cfg_skill` VALUES ('1159', '凤凰攻击Lv9');
INSERT INTO `t_cfg_skill` VALUES ('1160', '凤凰攻击Lv10');
INSERT INTO `t_cfg_skill` VALUES ('1201', '影击Lv1');
INSERT INTO `t_cfg_skill` VALUES ('1202', '影击Lv2');
INSERT INTO `t_cfg_skill` VALUES ('1203', '影击Lv3');
INSERT INTO `t_cfg_skill` VALUES ('1204', '影击Lv4');
INSERT INTO `t_cfg_skill` VALUES ('1205', '影击Lv5');
INSERT INTO `t_cfg_skill` VALUES ('1206', '影击Lv6');
INSERT INTO `t_cfg_skill` VALUES ('1207', '影击Lv7');
INSERT INTO `t_cfg_skill` VALUES ('1208', '影击Lv8');
INSERT INTO `t_cfg_skill` VALUES ('1209', '影击Lv9');
INSERT INTO `t_cfg_skill` VALUES ('1210', '影击Lv10');
INSERT INTO `t_cfg_skill` VALUES ('1221', '幻影之舞Lv1');
INSERT INTO `t_cfg_skill` VALUES ('1222', '幻影之舞Lv2');
INSERT INTO `t_cfg_skill` VALUES ('1223', '幻影之舞Lv3');
INSERT INTO `t_cfg_skill` VALUES ('1224', '幻影之舞Lv4');
INSERT INTO `t_cfg_skill` VALUES ('1225', '幻影之舞Lv5');
INSERT INTO `t_cfg_skill` VALUES ('1226', '幻影之舞Lv6');
INSERT INTO `t_cfg_skill` VALUES ('1227', '幻影之舞Lv7');
INSERT INTO `t_cfg_skill` VALUES ('1228', '幻影之舞Lv8');
INSERT INTO `t_cfg_skill` VALUES ('1229', '幻影之舞Lv9');
INSERT INTO `t_cfg_skill` VALUES ('1230', '幻影之舞Lv10');
INSERT INTO `t_cfg_skill` VALUES ('1261', '召唤影子Lv1');
INSERT INTO `t_cfg_skill` VALUES ('1262', '召唤影子Lv2');
INSERT INTO `t_cfg_skill` VALUES ('1263', '召唤影子Lv3');
INSERT INTO `t_cfg_skill` VALUES ('1264', '召唤影子Lv4');
INSERT INTO `t_cfg_skill` VALUES ('1265', '召唤影子Lv5');
INSERT INTO `t_cfg_skill` VALUES ('1266', '召唤影子Lv6');
INSERT INTO `t_cfg_skill` VALUES ('1267', '召唤影子Lv7');
INSERT INTO `t_cfg_skill` VALUES ('1268', '召唤影子Lv8');
INSERT INTO `t_cfg_skill` VALUES ('1269', '召唤影子Lv9');
INSERT INTO `t_cfg_skill` VALUES ('1270', '召唤影子Lv10');
INSERT INTO `t_cfg_skill` VALUES ('1351', '跳斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1352', '跳斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1353', '跳斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1354', '跳斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1355', '跳斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1356', '跳斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1357', '跳斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1358', '跳斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1359', '跳斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1360', '跳斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1371', '旋风斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1372', '旋风斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1373', '旋风斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1374', '旋风斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1375', '旋风斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1376', '旋风斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1377', '旋风斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1378', '旋风斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1379', '旋风斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1380', '旋风斩伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1551', '祝福之锤后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1552', '祝福之锤后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1553', '祝福之锤后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1554', '祝福之锤后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1555', '祝福之锤后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1556', '祝福之锤后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1557', '祝福之锤后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1558', '祝福之锤后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1559', '祝福之锤后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1560', '祝福之锤后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1571', '天堂之拳后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1572', '天堂之拳后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1573', '天堂之拳后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1574', '天堂之拳后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1575', '天堂之拳后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1576', '天堂之拳后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1577', '天堂之拳后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1578', '天堂之拳后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1579', '天堂之拳后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1580', '天堂之拳后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1651', '冰封球伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1652', '冰封球伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1653', '冰封球伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1654', '冰封球伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1655', '冰封球伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1656', '冰封球伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1657', '冰封球伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1658', '冰封球伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1659', '冰封球伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1660', '冰封球伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1671', '暴风雪伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1672', '暴风雪伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1673', '暴风雪伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1674', '暴风雪伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1675', '暴风雪伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1676', '暴风雪伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1677', '暴风雪伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1678', '暴风雪伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1679', '暴风雪伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1680', '暴风雪伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1771', '火旋风后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1772', '火旋风后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1773', '火旋风后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1774', '火旋风后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1775', '火旋风后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1776', '火旋风后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1777', '火旋风后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1778', '火旋风后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1779', '火旋风后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1780', '火旋风后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('1791', '天火陨石伤害和范围Lv1');
INSERT INTO `t_cfg_skill` VALUES ('1792', '天火陨石伤害和范围Lv2');
INSERT INTO `t_cfg_skill` VALUES ('1793', '天火陨石伤害和范围Lv3');
INSERT INTO `t_cfg_skill` VALUES ('1794', '天火陨石伤害和范围Lv4');
INSERT INTO `t_cfg_skill` VALUES ('1795', '天火陨石伤害和范围Lv5');
INSERT INTO `t_cfg_skill` VALUES ('1796', '天火陨石伤害和范围Lv6');
INSERT INTO `t_cfg_skill` VALUES ('1797', '天火陨石伤害和范围Lv7');
INSERT INTO `t_cfg_skill` VALUES ('1798', '天火陨石伤害和范围Lv8');
INSERT INTO `t_cfg_skill` VALUES ('1799', '天火陨石伤害和范围Lv9');
INSERT INTO `t_cfg_skill` VALUES ('1800', '天火陨石伤害和范围Lv10');
INSERT INTO `t_cfg_skill` VALUES ('1871', '召唤地狱火伤害和范围Lv1');
INSERT INTO `t_cfg_skill` VALUES ('1872', '召唤地狱火伤害和范围Lv2');
INSERT INTO `t_cfg_skill` VALUES ('1873', '召唤地狱火伤害和范围Lv3');
INSERT INTO `t_cfg_skill` VALUES ('1874', '召唤地狱火伤害和范围Lv4');
INSERT INTO `t_cfg_skill` VALUES ('1875', '召唤地狱火伤害和范围Lv5');
INSERT INTO `t_cfg_skill` VALUES ('1876', '召唤地狱火伤害和范围Lv6');
INSERT INTO `t_cfg_skill` VALUES ('1877', '召唤地狱火伤害和范围Lv7');
INSERT INTO `t_cfg_skill` VALUES ('1878', '召唤地狱火伤害和范围Lv8');
INSERT INTO `t_cfg_skill` VALUES ('1879', '召唤地狱火伤害和范围Lv9');
INSERT INTO `t_cfg_skill` VALUES ('1880', '召唤地狱火伤害和范围Lv10');
INSERT INTO `t_cfg_skill` VALUES ('2051', '旋转飞刃后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2052', '旋转飞刃后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2053', '旋转飞刃后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2054', '旋转飞刃后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2055', '旋转飞刃后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2056', '旋转飞刃后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2057', '旋转飞刃后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2058', '旋转飞刃后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2059', '旋转飞刃后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2060', '旋转飞刃后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2071', '闪电陷阱后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2072', '闪电陷阱后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2073', '闪电陷阱后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2074', '闪电陷阱后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2075', '闪电陷阱后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2076', '闪电陷阱后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2077', '闪电陷阱后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2078', '闪电陷阱后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2079', '闪电陷阱后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2080', '闪电陷阱后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2151', '幻影之舞后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2152', '幻影之舞后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2153', '幻影之舞后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2154', '幻影之舞后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2155', '幻影之舞后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2156', '幻影之舞后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2157', '幻影之舞后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2158', '幻影之舞后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2159', '幻影之舞后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2160', '幻影之舞后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2501', '远程怪物物理攻击');
INSERT INTO `t_cfg_skill` VALUES ('2502', '超近程怪物攻击');
INSERT INTO `t_cfg_skill` VALUES ('2503', '怪物物理攻击');
INSERT INTO `t_cfg_skill` VALUES ('2504', '怪物快速物理攻击');
INSERT INTO `t_cfg_skill` VALUES ('2505', '怪物诅咒物理攻击');
INSERT INTO `t_cfg_skill` VALUES ('2506', '怪物远程火球术');
INSERT INTO `t_cfg_skill` VALUES ('2507', '怪物剧毒新星');
INSERT INTO `t_cfg_skill` VALUES ('2508', '怪物暴风雪');
INSERT INTO `t_cfg_skill` VALUES ('2509', '怪物暴风雪伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2510', '怪物闪电陷阱');
INSERT INTO `t_cfg_skill` VALUES ('2511', '闪电陷阱后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('2512', '怪物传送');
INSERT INTO `t_cfg_skill` VALUES ('2513', '怪物火焰魔眼');
INSERT INTO `t_cfg_skill` VALUES ('2514', '怪物远程冰锥术');
INSERT INTO `t_cfg_skill` VALUES ('2515', '怪物远程白骨术');
INSERT INTO `t_cfg_skill` VALUES ('2516', 'BOSS远程白骨术');
INSERT INTO `t_cfg_skill` VALUES ('2517', 'BOSS中距离物理攻击');
INSERT INTO `t_cfg_skill` VALUES ('3001', '闪电箭矢Lv1');
INSERT INTO `t_cfg_skill` VALUES ('3002', '闪电箭矢Lv2');
INSERT INTO `t_cfg_skill` VALUES ('3003', '闪电箭矢Lv3');
INSERT INTO `t_cfg_skill` VALUES ('3004', '闪电箭矢Lv4');
INSERT INTO `t_cfg_skill` VALUES ('3005', '闪电箭矢Lv5');
INSERT INTO `t_cfg_skill` VALUES ('3006', '闪电箭矢Lv6');
INSERT INTO `t_cfg_skill` VALUES ('3007', '闪电箭矢Lv7');
INSERT INTO `t_cfg_skill` VALUES ('3008', '闪电箭矢Lv8');
INSERT INTO `t_cfg_skill` VALUES ('3009', '闪电箭矢Lv9');
INSERT INTO `t_cfg_skill` VALUES ('3010', '闪电箭矢Lv10');
INSERT INTO `t_cfg_skill` VALUES ('3021', '鹰击长空Lv1');
INSERT INTO `t_cfg_skill` VALUES ('3022', '鹰击长空Lv2');
INSERT INTO `t_cfg_skill` VALUES ('3023', '鹰击长空Lv3');
INSERT INTO `t_cfg_skill` VALUES ('3024', '鹰击长空Lv4');
INSERT INTO `t_cfg_skill` VALUES ('3025', '鹰击长空Lv5');
INSERT INTO `t_cfg_skill` VALUES ('3026', '鹰击长空Lv6');
INSERT INTO `t_cfg_skill` VALUES ('3027', '鹰击长空Lv7');
INSERT INTO `t_cfg_skill` VALUES ('3028', '鹰击长空Lv8');
INSERT INTO `t_cfg_skill` VALUES ('3029', '鹰击长空Lv9');
INSERT INTO `t_cfg_skill` VALUES ('3030', '鹰击长空Lv10');
INSERT INTO `t_cfg_skill` VALUES ('3041', '雷霆射击Lv1');
INSERT INTO `t_cfg_skill` VALUES ('3042', '雷霆射击Lv2');
INSERT INTO `t_cfg_skill` VALUES ('3043', '雷霆射击Lv3');
INSERT INTO `t_cfg_skill` VALUES ('3044', '雷霆射击Lv4');
INSERT INTO `t_cfg_skill` VALUES ('3045', '雷霆射击Lv5');
INSERT INTO `t_cfg_skill` VALUES ('3046', '雷霆射击Lv6');
INSERT INTO `t_cfg_skill` VALUES ('3047', '雷霆射击Lv7');
INSERT INTO `t_cfg_skill` VALUES ('3048', '雷霆射击Lv8');
INSERT INTO `t_cfg_skill` VALUES ('3049', '雷霆射击Lv9');
INSERT INTO `t_cfg_skill` VALUES ('3050', '雷霆射击Lv10');
INSERT INTO `t_cfg_skill` VALUES ('3061', '弱点打击Lv1');
INSERT INTO `t_cfg_skill` VALUES ('3062', '弱点打击Lv2');
INSERT INTO `t_cfg_skill` VALUES ('3063', '弱点打击Lv3');
INSERT INTO `t_cfg_skill` VALUES ('3064', '弱点打击Lv4');
INSERT INTO `t_cfg_skill` VALUES ('3065', '弱点打击Lv5');
INSERT INTO `t_cfg_skill` VALUES ('3066', '弱点打击Lv6');
INSERT INTO `t_cfg_skill` VALUES ('3067', '弱点打击Lv7');
INSERT INTO `t_cfg_skill` VALUES ('3068', '弱点打击Lv8');
INSERT INTO `t_cfg_skill` VALUES ('3069', '弱点打击Lv9');
INSERT INTO `t_cfg_skill` VALUES ('3070', '弱点打击Lv10');
INSERT INTO `t_cfg_skill` VALUES ('3101', '雷霆射击后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('3102', '雷霆射击后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('3103', '雷霆射击后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('3104', '雷霆射击后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('3105', '雷霆射击后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('3106', '雷霆射击后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('3107', '雷霆射击后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('3108', '雷霆射击后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('3109', '雷霆射击后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('3110', '雷霆射击后续伤害和范围');
INSERT INTO `t_cfg_skill` VALUES ('3201', '雷霆肆虐Lv1');
INSERT INTO `t_cfg_skill` VALUES ('3202', '雷霆肆虐Lv2');
INSERT INTO `t_cfg_skill` VALUES ('3203', '雷霆肆虐Lv3');
INSERT INTO `t_cfg_skill` VALUES ('3204', '雷霆肆虐Lv4');
INSERT INTO `t_cfg_skill` VALUES ('3205', '雷霆肆虐Lv5');
INSERT INTO `t_cfg_skill` VALUES ('3206', '雷霆肆虐Lv6');
INSERT INTO `t_cfg_skill` VALUES ('3207', '雷霆肆虐Lv7');
INSERT INTO `t_cfg_skill` VALUES ('3208', '雷霆肆虐Lv8');
INSERT INTO `t_cfg_skill` VALUES ('3209', '雷霆肆虐Lv9');
INSERT INTO `t_cfg_skill` VALUES ('3210', '雷霆肆虐Lv10');
INSERT INTO `t_cfg_skill` VALUES ('3301', '先祖之魂2件Lv1');
INSERT INTO `t_cfg_skill` VALUES ('3302', '先祖之魂2件Lv2');
INSERT INTO `t_cfg_skill` VALUES ('3303', '先祖之魂2件Lv3');
INSERT INTO `t_cfg_skill` VALUES ('3304', '先祖之魂2件Lv4');
INSERT INTO `t_cfg_skill` VALUES ('3305', '先祖之魂2件Lv5');
INSERT INTO `t_cfg_skill` VALUES ('3306', '先祖之魂2件Lv6');
INSERT INTO `t_cfg_skill` VALUES ('3307', '先祖之魂2件Lv7');
INSERT INTO `t_cfg_skill` VALUES ('3308', '先祖之魂2件Lv8');
INSERT INTO `t_cfg_skill` VALUES ('3309', '先祖之魂2件Lv9');
INSERT INTO `t_cfg_skill` VALUES ('3310', '先祖之魂2件Lv10');
INSERT INTO `t_cfg_skill` VALUES ('3321', '御法者2件Lv1');
INSERT INTO `t_cfg_skill` VALUES ('3322', '御法者2件Lv2');
INSERT INTO `t_cfg_skill` VALUES ('3323', '御法者2件Lv3');
INSERT INTO `t_cfg_skill` VALUES ('3324', '御法者2件Lv4');
INSERT INTO `t_cfg_skill` VALUES ('3325', '御法者2件Lv5');
INSERT INTO `t_cfg_skill` VALUES ('3326', '御法者2件Lv6');
INSERT INTO `t_cfg_skill` VALUES ('3327', '御法者2件Lv7');
INSERT INTO `t_cfg_skill` VALUES ('3328', '御法者2件Lv8');
INSERT INTO `t_cfg_skill` VALUES ('3329', '御法者2件Lv9');
INSERT INTO `t_cfg_skill` VALUES ('3330', '御法者2件Lv10');
INSERT INTO `t_cfg_skill` VALUES ('3341', '暗影猎杀2件Lv1');
INSERT INTO `t_cfg_skill` VALUES ('3342', '暗影猎杀2件Lv2');
INSERT INTO `t_cfg_skill` VALUES ('3343', '暗影猎杀2件Lv3');
INSERT INTO `t_cfg_skill` VALUES ('3344', '暗影猎杀2件Lv4');
INSERT INTO `t_cfg_skill` VALUES ('3345', '暗影猎杀2件Lv5');
INSERT INTO `t_cfg_skill` VALUES ('3346', '暗影猎杀2件Lv6');
INSERT INTO `t_cfg_skill` VALUES ('3347', '暗影猎杀2件Lv7');
INSERT INTO `t_cfg_skill` VALUES ('3348', '暗影猎杀2件Lv8');
INSERT INTO `t_cfg_skill` VALUES ('3349', '暗影猎杀2件Lv9');
INSERT INTO `t_cfg_skill` VALUES ('3350', '暗影猎杀2件Lv10');
INSERT INTO `t_cfg_skill` VALUES ('3401', '火炮');
INSERT INTO `t_cfg_skill` VALUES ('3421', '疾驰');
INSERT INTO `t_cfg_skill` VALUES ('3441', '装甲');
INSERT INTO `t_cfg_skill` VALUES ('3461', '下车');
INSERT INTO `t_cfg_skill` VALUES ('3501', '基本剑术Lv1');
INSERT INTO `t_cfg_skill` VALUES ('3502', '基本剑术Lv2');
INSERT INTO `t_cfg_skill` VALUES ('3503', '基本剑术Lv3');
INSERT INTO `t_cfg_skill` VALUES ('3504', '基本剑术Lv4');
INSERT INTO `t_cfg_skill` VALUES ('3505', '基本剑术Lv5');
INSERT INTO `t_cfg_skill` VALUES ('3506', '基本剑术Lv6');
INSERT INTO `t_cfg_skill` VALUES ('3507', '基本剑术Lv7');
INSERT INTO `t_cfg_skill` VALUES ('3508', '基本剑术Lv8');
INSERT INTO `t_cfg_skill` VALUES ('3509', '基本剑术Lv9');
INSERT INTO `t_cfg_skill` VALUES ('3510', '基本剑术Lv10');

-- ----------------------------
-- Table structure for `t_cfg_task`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_task`;
CREATE TABLE `t_cfg_task` (
  `taskId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `level` int(11) NOT NULL,
  `target` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_task
-- ----------------------------
INSERT INTO `t_cfg_task` VALUES ('10000', '清理妖兽', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10001', '圣妖传说', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10002', '腐化气息', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10003', '战甲加身', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10004', '邪恶入侵', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10005', '人族灾祸', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10006', '救赎之路', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10007', '发现密道', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10008', '到达圣城', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10009', '联军传说', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10010', '逃难之人', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10011', '寻找宠物', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10012', '希望种子', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10013', '幻象空间', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10014', '试炼之地', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10015', '污染逼近', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10016', '留在这里', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10017', '王的永生', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10018', '魔兽大军', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10019', '绝望选择', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10020', '骷髅王', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10021', '死里逃生', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10022', '元宝回收', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10023', '新的消息', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10024', '装备回收', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10025', '空间之力', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10026', '请活下来', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10027', '蛮荒之地', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10028', '宠物之威', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10029', '弱鸡主人', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10030', '魔法生物', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10031', '邪恶魔法', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10032', '最后防线', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10033', '毁灭重生', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10034', '炼狱骑士', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10035', '劫后余生', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10036', '装备回收', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10037', '防御之道', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10038', '等级提升', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10039', '装备回收', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10040', '提升宠物', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10041', '灵丹妙药', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10042', '困惑来源', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10043', '精神治疗', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10044', '等级提升', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10045', '整装待发', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10046', '初入地宫', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10047', '亡灵法师', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10048', '新的发现', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10049', '地宫规则', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10050', '力量爆发', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10051', '力量困惑', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10052', '未知世界', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10053', '真血试炼', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10054', '装备回收', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10055', '寻找答案', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10056', '等级提升', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10057', '再回地宫', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10058', '人间失格', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10059', '迷失心性', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10060', '杀戮之心', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10061', '彼岸森林', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10062', '黑夜前行', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10063', '毁灭之王', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10064', '装备回收', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10065', '力量源泉', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10066', '等级提升', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10067', '新的信仰', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10068', '赏金任务', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10069', '月光杯酒', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10070', '再战荒原', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10071', '装备回收', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10072', '酒后往事', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10073', '宠物提升', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10074', '清风为伴', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10075', '噩耗来袭', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10076', '等级提升', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10077', '装备回收', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10078', '恐慌弥漫', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10079', '战前准备', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10080', '争霸伊始', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10081', '震撼人心', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10082', '新的敌人', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10083', '心中惆怅', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10084', '等级提升', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10085', '孤单手帕', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10086', '心思杜明', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10087', '黎明号角', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10088', '真正试炼', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10089', '忐忑命运', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10090', '提升宠物', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10091', '傲娇宠物', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10092', '穿戴装备', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10093', '未知探索', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10094', '诗和远方', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10095', '命运选择', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10096', '荒原历练', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10097', '剑震山河', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10098', '魔兽传说', '1', '');
INSERT INTO `t_cfg_task` VALUES ('10099', '变强奥秘', '1', '');
INSERT INTO `t_cfg_task` VALUES ('30000', '2阶宠物', '9999', '');
INSERT INTO `t_cfg_task` VALUES ('30001', '4阶宠物', '9999', '');
INSERT INTO `t_cfg_task` VALUES ('30002', '7阶宠物', '9999', '');
INSERT INTO `t_cfg_task` VALUES ('30004', '见习武者', '9999', '');
INSERT INTO `t_cfg_task` VALUES ('30005', '超凡入圣', '9999', '');
INSERT INTO `t_cfg_task` VALUES ('30006', '极品装备', '9999', '');
INSERT INTO `t_cfg_task` VALUES ('30007', '极品装备', '9999', '');
INSERT INTO `t_cfg_task` VALUES ('30008', '极品装备', '9999', '');
INSERT INTO `t_cfg_task` VALUES ('19999', '金币符文', '110', '');
INSERT INTO `t_cfg_task` VALUES ('20000', '金币符文', '110', '');
INSERT INTO `t_cfg_task` VALUES ('20001', '金币符文', '110', '');
INSERT INTO `t_cfg_task` VALUES ('20002', '金币符文', '110', '');
INSERT INTO `t_cfg_task` VALUES ('20003', '金币符文', '110', '');
INSERT INTO `t_cfg_task` VALUES ('20004', '金币符文', '110', '');
INSERT INTO `t_cfg_task` VALUES ('20005', '金币符文', '110', '');
INSERT INTO `t_cfg_task` VALUES ('20006', '金币符文', '110', '');
INSERT INTO `t_cfg_task` VALUES ('20007', '金币符文', '110', '');
INSERT INTO `t_cfg_task` VALUES ('20008', '金币符文', '110', '');
INSERT INTO `t_cfg_task` VALUES ('20009', '金币符文', '110', '');
INSERT INTO `t_cfg_task` VALUES ('20010', '金币符文', '110', '');
INSERT INTO `t_cfg_task` VALUES ('20011', '金币符文', '110', '');
INSERT INTO `t_cfg_task` VALUES ('20012', '金币符文', '110', '');
INSERT INTO `t_cfg_task` VALUES ('20013', '金币符文', '150', '');
INSERT INTO `t_cfg_task` VALUES ('20014', '金币符文', '150', '');
INSERT INTO `t_cfg_task` VALUES ('20015', '金币符文', '150', '');
INSERT INTO `t_cfg_task` VALUES ('20016', '金币符文', '150', '');
INSERT INTO `t_cfg_task` VALUES ('20017', '金币符文', '150', '');
INSERT INTO `t_cfg_task` VALUES ('20018', '金币符文', '150', '');
INSERT INTO `t_cfg_task` VALUES ('20019', '金币符文', '150', '');
INSERT INTO `t_cfg_task` VALUES ('20020', '金币符文', '150', '');
INSERT INTO `t_cfg_task` VALUES ('20021', '金币符文', '150', '');
INSERT INTO `t_cfg_task` VALUES ('20022', '金币符文', '150', '');
INSERT INTO `t_cfg_task` VALUES ('20023', '金币符文', '150', '');
INSERT INTO `t_cfg_task` VALUES ('20024', '金币符文', '150', '');
INSERT INTO `t_cfg_task` VALUES ('20025', '金币符文', '150', '');
INSERT INTO `t_cfg_task` VALUES ('20026', '金币符文', '150', '');
INSERT INTO `t_cfg_task` VALUES ('20027', '金币符文', '150', '');
INSERT INTO `t_cfg_task` VALUES ('20028', '金币符文', '150', '');
INSERT INTO `t_cfg_task` VALUES ('20029', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20030', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20031', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20032', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20033', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20034', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20035', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20036', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20037', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20038', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20039', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20040', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20041', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20042', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20043', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20044', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20045', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20046', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20047', '金币符文', '200', '');
INSERT INTO `t_cfg_task` VALUES ('20048', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20049', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20050', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20051', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20052', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20053', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20054', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20055', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20056', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20057', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20058', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20059', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20060', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20061', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20062', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20063', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20064', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20065', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20066', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20067', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20068', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20069', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20070', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20071', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20072', '金币符文', '300', '');
INSERT INTO `t_cfg_task` VALUES ('20073', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20074', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20075', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20076', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20077', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20078', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20079', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20080', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20081', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20082', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20083', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20084', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20085', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20086', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20087', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20088', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20089', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20090', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20091', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20092', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20093', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20094', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20095', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20096', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20097', '金币符文', '400', '');
INSERT INTO `t_cfg_task` VALUES ('20098', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20099', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20100', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20101', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20102', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20103', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20104', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20105', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20106', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20107', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20108', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20109', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20110', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20111', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20112', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20113', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20114', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20115', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20116', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20117', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20118', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20119', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20120', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20121', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20122', '金币符文', '500', '');
INSERT INTO `t_cfg_task` VALUES ('20123', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20124', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20125', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20126', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20127', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20128', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20129', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20130', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20131', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20132', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20133', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20134', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20135', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20136', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20137', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20138', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20139', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20140', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20141', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20142', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20143', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20144', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20145', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20146', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('20147', '金币符文', '600', '');
INSERT INTO `t_cfg_task` VALUES ('25001', '押镖任务', '130', '');
INSERT INTO `t_cfg_task` VALUES ('25002', '押镖任务', '130', '');
INSERT INTO `t_cfg_task` VALUES ('25003', '押镖任务', '130', '');
INSERT INTO `t_cfg_task` VALUES ('25004', '押镖任务', '130', '');
INSERT INTO `t_cfg_task` VALUES ('25005', '押镖任务', '130', '');
INSERT INTO `t_cfg_task` VALUES ('26001', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26002', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26003', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26004', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26005', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26006', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26007', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26008', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26009', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26010', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26011', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26012', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26013', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26014', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26015', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26016', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26017', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26018', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26019', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26020', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26021', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26022', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26023', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26024', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26025', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26026', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26027', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26028', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26029', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26030', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26031', '回收任务', '200', '');
INSERT INTO `t_cfg_task` VALUES ('26032', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26033', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26034', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26035', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26036', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26037', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26038', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26039', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26040', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26041', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26042', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26043', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26044', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26045', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26046', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26047', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26048', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26049', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26050', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26051', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26052', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26053', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26054', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26055', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26056', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26057', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26058', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26059', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26060', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26061', '回收任务', '300', '');
INSERT INTO `t_cfg_task` VALUES ('26062', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26063', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26064', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26065', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26066', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26067', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26068', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26069', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26070', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26071', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26072', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26073', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26074', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26075', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26076', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26077', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26078', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26079', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26080', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26081', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26082', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26083', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26084', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26085', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26086', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26087', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26088', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26089', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26090', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26091', '回收任务', '400', '');
INSERT INTO `t_cfg_task` VALUES ('26092', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26093', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26094', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26095', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26096', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26097', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26098', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26099', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26100', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26101', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26102', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26103', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26104', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26105', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26106', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26107', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26108', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26109', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26110', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26111', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26112', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26113', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26114', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26115', '回收任务', '500', '');
INSERT INTO `t_cfg_task` VALUES ('26116', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26117', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26118', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26119', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26120', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26121', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26122', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26123', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26124', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26125', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26126', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26127', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26128', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26129', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26130', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26131', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26132', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26133', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26134', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26135', '回收任务', '600', '');
INSERT INTO `t_cfg_task` VALUES ('26136', '回收任务', '600', '');

-- ----------------------------
-- Table structure for `t_data_account_remain`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_account_remain`;
CREATE TABLE `t_data_account_remain` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `gameAreaId` int(10) unsigned DEFAULT NULL,
  `registerDate` date DEFAULT NULL,
  `daysFromRegister` int(10) unsigned DEFAULT NULL,
  `loginAccountNum` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_gameAreaId_registerDate_daysFromRegister` (`gameAreaId`,`registerDate`,`daysFromRegister`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_account_remain
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_announcement_task`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_announcement_task`;
CREATE TABLE `t_data_announcement_task` (
  `taskId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `taskType` tinyint(3) unsigned DEFAULT NULL COMMENT '1-添加公告；2-清除公告',
  `content` varchar(512) DEFAULT NULL,
  `startDateTime` datetime DEFAULT NULL,
  `endDateTime` datetime DEFAULT NULL,
  `timeInterval` smallint(6) DEFAULT NULL,
  `operatorUserid` int(11) unsigned DEFAULT NULL,
  `operatorDateTime` datetime DEFAULT NULL,
  `type` int(4) DEFAULT NULL,
  PRIMARY KEY (`taskId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_announcement_task
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_announcement_task_info`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_announcement_task_info`;
CREATE TABLE `t_data_announcement_task_info` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `taskId` int(10) unsigned DEFAULT NULL,
  `gameAreaId` int(10) unsigned DEFAULT NULL,
  `status` tinyint(3) unsigned DEFAULT NULL COMMENT '1-等待处理；2-处理成功；3-处理失败',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_announcement_task_info
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_battle_server`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_battle_server`;
CREATE TABLE `t_data_battle_server` (
  `battleServerId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '跨服id',
  `operatorId` int(10) unsigned DEFAULT NULL COMMENT '对应 t_data_operator->operatorId',
  `areaNum` int(10) unsigned DEFAULT NULL COMMENT '跨服区号',
  `serverId` int(10) unsigned DEFAULT NULL COMMENT '对应t_data_server->serverId',
  `portGroup` tinyint(3) unsigned DEFAULT NULL COMMENT '端口组',
  `directoryName` varchar(255) DEFAULT NULL,
  `versionId` int(10) unsigned DEFAULT NULL COMMENT '对应t_data_game_version->id',
  `status` tinyint(3) unsigned DEFAULT NULL COMMENT '状态。1-未安装，2-已开服',
  PRIMARY KEY (`battleServerId`),
  UNIQUE KEY `index_operatorId_areaNum` (`operatorId`,`areaNum`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_battle_server
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_battle_server_install_queue`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_battle_server_install_queue`;
CREATE TABLE `t_data_battle_server_install_queue` (
  `queueId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '队列id，自增主键',
  `battleServerId` int(10) unsigned DEFAULT NULL COMMENT '跨服服务器id，关联t_data_battle_server->battleServerId',
  `operateUserId` int(10) unsigned DEFAULT NULL COMMENT '操作用户id，对应t_data_user->userId',
  `operateDatetime` datetime DEFAULT NULL COMMENT '操作时间',
  `status` tinyint(3) unsigned DEFAULT NULL COMMENT '1-等待安装；2-安装中；3-安装成功；4-安装失败',
  `log` longtext COMMENT '安装日志',
  PRIMARY KEY (`queueId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_battle_server_install_queue
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_card`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_card`;
CREATE TABLE `t_data_card` (
  `cardId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cardName` varchar(255) NOT NULL,
  `operatorId` int(10) NOT NULL COMMENT '按平台生成激活码平台关联id',
  `useLimit` tinyint(1) NOT NULL COMMENT '1-全服唯一；2-重复领取',
  PRIMARY KEY (`cardId`),
  UNIQUE KEY `index_cardName` (`cardName`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_card
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_card_apply`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_card_apply`;
CREATE TABLE `t_data_card_apply` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `cardId` int(11) unsigned DEFAULT NULL,
  `count` int(11) unsigned DEFAULT NULL,
  `bit` int(11) unsigned DEFAULT NULL,
  `giftId` int(11) NOT NULL,
  `applyUserId` int(11) unsigned DEFAULT NULL,
  `applyDateTime` datetime DEFAULT NULL,
  `status` tinyint(3) unsigned DEFAULT NULL COMMENT '1-未生成；2-已生成； ',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_card_apply
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_card_content`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_card_content`;
CREATE TABLE `t_data_card_content` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cardId` int(10) unsigned DEFAULT NULL,
  `itemId` int(10) unsigned DEFAULT NULL,
  `count` smallint(5) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `index_cardId` (`cardId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_card_content
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_currency_summary`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_currency_summary`;
CREATE TABLE `t_data_currency_summary` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `gameAreaId` int(10) unsigned DEFAULT NULL COMMENT '关联t_data_game_area->gameAreaId',
  `date` date DEFAULT NULL COMMENT '统计日期',
  `currencyTypeId` tinyint(3) unsigned DEFAULT NULL COMMENT '关联t_cfg_currency_type->currencyTypeId',
  `functionId` int(10) unsigned DEFAULT NULL COMMENT '关联t_cfg_currency_function->functionId',
  `subFunctionId` int(10) unsigned DEFAULT NULL COMMENT '关联t_cfg_currency_subFunction->subFunctionId',
  `getValue` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '产出',
  `costValue` bigint(20) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_index` (`gameAreaId`,`date`,`currencyTypeId`,`functionId`,`subFunctionId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_currency_summary
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_daily_report`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_daily_report`;
CREATE TABLE `t_data_daily_report` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `gameAreaId` int(10) unsigned DEFAULT NULL COMMENT '关联t_data_game_area->gameAreaId',
  `datetime` datetime DEFAULT NULL COMMENT '时间',
  `registerAccountNum` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '注册帐号数量',
  `registerIpAddressNum` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '注册ip数',
  `createRoleNum` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创角数',
  `maxOnlineRoleNum` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '峰值在线',
  `avgOnlineRoleNum` float(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '均值在线',
  `loginAccountNum` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '登录用户数',
  `loginIpAddressNum` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '登录ip数',
  `payMoney` int(10) unsigned NOT NULL DEFAULT '0',
  `payAccountNum` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_gameAreaId_datetime` (`gameAreaId`,`datetime`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_daily_report
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_game_account`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_game_account`;
CREATE TABLE `t_data_game_account` (
  `userId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'userId',
  `gameAreaId` int(10) unsigned DEFAULT NULL COMMENT '关联t_data_game_area->gameAreaId',
  `account` varchar(64) DEFAULT NULL COMMENT '帐号',
  `registerDateTime` datetime DEFAULT NULL COMMENT '注册时间',
  `registerIpAddress` varchar(15) DEFAULT NULL COMMENT '注册ip',
  `roleName` varchar(64) DEFAULT NULL,
  `totalPayMoney` bigint(20) unsigned DEFAULT NULL COMMENT '充值总金额',
  PRIMARY KEY (`userId`),
  KEY `index_account` (`account`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_game_account
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_game_account_login`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_game_account_login`;
CREATE TABLE `t_data_game_account_login` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `userId` int(11) DEFAULT NULL COMMENT '关联t_data_game_account->userId',
  `loginDateTime` datetime DEFAULT NULL COMMENT '登录时间',
  `loginIpAddress` varchar(15) DEFAULT NULL COMMENT '登录ip',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_game_account_login
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_game_area`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_game_area`;
CREATE TABLE `t_data_game_area` (
  `gameAreaId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `operatorId` int(10) unsigned DEFAULT NULL,
  `areaNum` int(10) unsigned DEFAULT NULL,
  `serverId` int(10) unsigned DEFAULT NULL,
  `databaseName` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `version` int(10) unsigned DEFAULT NULL,
  `status` tinyint(4) unsigned DEFAULT NULL COMMENT '1-未安装；2-测试中；3-未开服；4-已开服；5-维护中；6-已合服；7-已关服',
  `openDatetime` datetime DEFAULT NULL,
  `mergeDatetime` datetime DEFAULT NULL,
  `mergeDestAreaNum` int(10) unsigned DEFAULT NULL,
  `closeDatetime` datetime DEFAULT NULL,
  PRIMARY KEY (`gameAreaId`),
  UNIQUE KEY `index_operator_areaNum` (`operatorId`,`areaNum`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_data_game_area
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_game_cleardata_queue`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_game_cleardata_queue`;
CREATE TABLE `t_data_game_cleardata_queue` (
  `queueId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '队列id',
  `gameAreaId` int(11) DEFAULT NULL COMMENT '游戏区id，关联t_data_game_area->gameAreaId',
  `operateUserId` int(11) DEFAULT NULL COMMENT '操作人id，关联t_data_user->userId',
  `operateDatetime` datetime DEFAULT NULL COMMENT '操作时间',
  `status` tinyint(3) unsigned DEFAULT NULL COMMENT '1-等待清档；2-清档中；3-清档成功；4-清档失败',
  `log` longtext COMMENT '日志',
  PRIMARY KEY (`queueId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_game_cleardata_queue
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_game_code`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_game_code`;
CREATE TABLE `t_data_game_code` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `code` varchar(32) DEFAULT '' COMMENT '激活码',
  `gameAreaId` int(10) DEFAULT NULL COMMENT '领取人区服关联t_data_game_area',
  `cardId` int(10) unsigned DEFAULT NULL COMMENT '卡关联id',
  `cid` bigint(20) DEFAULT NULL COMMENT '领取人',
  `time` int(11) DEFAULT NULL COMMENT '领取时间',
  `flag` int(10) DEFAULT NULL COMMENT '是否领取 1-未领取2-已领取',
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_game_code
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_game_code_every`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_game_code_every`;
CREATE TABLE `t_data_game_code_every` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `code` varchar(32) DEFAULT NULL COMMENT '激活码',
  `giftId` int(10) DEFAULT NULL COMMENT '关联礼包id',
  `cid` bigint(20) DEFAULT NULL COMMENT '领取人',
  `gameAreaId` int(10) DEFAULT NULL COMMENT '领取人区服关联t_data_game_area',
  `time` int(11) DEFAULT NULL COMMENT '领取时间',
  `cardId` int(10) unsigned DEFAULT NULL COMMENT '卡关联id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_game_code_every
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_game_currency`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_game_currency`;
CREATE TABLE `t_data_game_currency` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `userId` int(10) unsigned DEFAULT NULL COMMENT '关联t_data_game_account->userId',
  `functionId` int(10) unsigned DEFAULT NULL,
  `subFunctionId` int(10) unsigned DEFAULT NULL,
  `currencyTypeId` tinyint(3) unsigned DEFAULT NULL,
  `changeValue` int(11) DEFAULT NULL,
  `surplusValue` int(10) unsigned DEFAULT NULL,
  `operatorDateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_game_currency
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_game_install_queue`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_game_install_queue`;
CREATE TABLE `t_data_game_install_queue` (
  `queueId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '队列id',
  `gameAreaId` int(11) DEFAULT NULL COMMENT '游戏区id，关联t_data_game_area->gameAreaId',
  `operateUserId` int(11) DEFAULT NULL COMMENT '操作人id，关联t_data_user->userId',
  `operateDatetime` datetime DEFAULT NULL COMMENT '操作时间',
  `status` tinyint(3) unsigned DEFAULT NULL COMMENT '1-等待安装；2-安装中；3-安装成功；4-安装失败',
  `log` longtext COMMENT '安装日志',
  PRIMARY KEY (`queueId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_game_install_queue
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_game_item`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_game_item`;
CREATE TABLE `t_data_game_item` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(10) unsigned DEFAULT NULL,
  `functionId` int(10) unsigned DEFAULT NULL,
  `subFunctionId` int(10) unsigned DEFAULT NULL,
  `itemClass` tinyint(3) unsigned DEFAULT NULL,
  `itemType` smallint(5) unsigned DEFAULT NULL,
  `itemId` int(10) unsigned DEFAULT NULL,
  `changeValue` int(11) DEFAULT NULL,
  `operatorDateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_game_item
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_game_levelup`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_game_levelup`;
CREATE TABLE `t_data_game_levelup` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `userId` int(10) unsigned DEFAULT NULL COMMENT '关联t_data_game_account->userId',
  `level` smallint(5) unsigned DEFAULT NULL COMMENT '等级',
  `operatorDatetime` datetime DEFAULT NULL COMMENT '操作时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_game_levelup
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_game_online`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_game_online`;
CREATE TABLE `t_data_game_online` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `gameAreaId` int(10) unsigned DEFAULT NULL COMMENT '关联t_data_game_area->gameAreaId',
  `statDateTime` datetime DEFAULT NULL COMMENT '统计时间',
  `onlineRoleNum` int(10) unsigned DEFAULT NULL COMMENT '在线人数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_game_online
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_game_pay`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_game_pay`;
CREATE TABLE `t_data_game_pay` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `userId` int(10) unsigned DEFAULT NULL COMMENT '关联t_data_game_account->userId',
  `orderId` varchar(255) DEFAULT NULL COMMENT '订单id',
  `money` int(10) unsigned DEFAULT NULL COMMENT '充值金额（单位：分）',
  `gold` int(10) unsigned DEFAULT NULL COMMENT '充值元宝',
  `payDateTime` datetime DEFAULT NULL COMMENT '充值时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_game_pay
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_game_version`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_game_version`;
CREATE TABLE `t_data_game_version` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `version` varchar(64) DEFAULT NULL COMMENT '版本号',
  `majorVersion` smallint(5) unsigned DEFAULT NULL COMMENT '大版本',
  `minorVersion` smallint(5) unsigned DEFAULT NULL COMMENT '小版本',
  `teenyVersion` smallint(5) unsigned DEFAULT NULL COMMENT 'bug版本号',
  `releaseVersion` smallint(5) unsigned DEFAULT NULL COMMENT 'release版本号',
  `haveClient` tinyint(1) unsigned DEFAULT NULL COMMENT '是否包含client,0-不包含；1-包含',
  `haveInterface` tinyint(1) unsigned DEFAULT NULL COMMENT '是否包含interface,0-不包含；1-包含',
  `haveServer` tinyint(1) unsigned DEFAULT NULL COMMENT '是否包含server,0-不包含；1-包含',
  `haveStart` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `haveCreate` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `haveArpg` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `status` tinyint(1) unsigned DEFAULT NULL COMMENT '1-未上传；2-上传完毕；3-初始化；4-初始化成功；5-初始化失败；6-等待合并；7-合并中；8-合并成功；9-合并失败',
  `log` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_unique` (`majorVersion`,`minorVersion`,`teenyVersion`,`releaseVersion`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_game_version
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_game_zoneid`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_game_zoneid`;
CREATE TABLE `t_data_game_zoneid` (
  `gameAreaId` int(11) NOT NULL,
  `zoneid` int(11) NOT NULL,
  PRIMARY KEY (`gameAreaId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_game_zoneid
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_gift`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_gift`;
CREATE TABLE `t_data_gift` (
  `giftId` int(11) NOT NULL AUTO_INCREMENT COMMENT '礼包id',
  `giftName` varchar(255) DEFAULT NULL COMMENT '礼包名',
  `applyUserId` int(11) DEFAULT NULL COMMENT '申请人',
  `time` int(11) DEFAULT NULL COMMENT '申请时间',
  `flag` int(11) DEFAULT NULL COMMENT '1-未删除 2-已删除',
  PRIMARY KEY (`giftId`),
  UNIQUE KEY `giftName` (`giftName`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_gift
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_gift_item`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_gift_item`;
CREATE TABLE `t_data_gift_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemId` int(11) DEFAULT NULL,
  `itemType` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `giftId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_gift_item
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_hourly_report`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_hourly_report`;
CREATE TABLE `t_data_hourly_report` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `gameAreaId` int(10) unsigned DEFAULT NULL COMMENT '关联t_data_game_area->gameAreaId',
  `datetime` datetime DEFAULT NULL COMMENT '时间',
  `registerAccountNum` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '注册帐号数量',
  `registerIpAddressNum` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '注册ip数',
  `createRoleNum` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创角数',
  `maxOnlineRoleNum` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '峰值在线',
  `avgOnlineRoleNum` float(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '均值在线',
  `loginAccountNum` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '登录用户数',
  `loginIpAddressNum` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '登录ip数',
  `payMoney` int(10) unsigned NOT NULL DEFAULT '0',
  `payAccountNum` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_gameAreaId_datetime` (`gameAreaId`,`datetime`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_hourly_report
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_ip`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_ip`;
CREATE TABLE `t_data_ip` (
  `ipId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ipAddress` varchar(15) COLLATE utf8_bin DEFAULT NULL,
  `ipTypeId` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`ipId`),
  UNIQUE KEY `index_ipAddress` (`ipAddress`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_data_ip
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_level_report`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_level_report`;
CREATE TABLE `t_data_level_report` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `gameAreaId` int(10) unsigned DEFAULT NULL COMMENT '关联t_data_game_area->gameAreaId',
  `date` date DEFAULT NULL COMMENT '统计日期',
  `level` smallint(5) unsigned DEFAULT NULL COMMENT '等级',
  `roleNum` int(10) unsigned DEFAULT NULL COMMENT '角色数量',
  `payRoleNum` int(10) unsigned DEFAULT NULL COMMENT '充值角色数量',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_index` (`gameAreaId`,`date`,`level`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_level_report
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_nagios`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_nagios`;
CREATE TABLE `t_data_nagios` (
  `status` tinyint(3) unsigned DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_nagios
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_operator`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_operator`;
CREATE TABLE `t_data_operator` (
  `operatorId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `operatorName` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `operatorFlag` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `status` tinyint(11) DEFAULT NULL COMMENT '1-合作中，2-停止合作',
  `operatorPkey` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`operatorId`),
  UNIQUE KEY `indexOperatorName` (`operatorName`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_data_operator
-- ----------------------------
INSERT INTO `t_data_operator` VALUES ('1', 'qqly', 'qqly', '1', null);

-- ----------------------------
-- Table structure for `t_data_pay_apply`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_pay_apply`;
CREATE TABLE `t_data_pay_apply` (
  `applyId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `operatorId` int(10) DEFAULT NULL,
  `gameAreaId` int(10) unsigned DEFAULT NULL COMMENT '游戏区id，关联t_data_game_area->gameAreaId',
  `cid` bigint(20) DEFAULT NULL COMMENT '玩家帐号',
  `days` int(10) DEFAULT NULL,
  `roleName` varchar(64) DEFAULT NULL COMMENT '角色名',
  `money` int(10) unsigned DEFAULT NULL COMMENT '充值金额（单位：分）',
  `applyUserId` int(10) unsigned DEFAULT NULL COMMENT '申请人id，关联t_data_user->userId',
  `applyDatetime` datetime DEFAULT NULL COMMENT '申请时间',
  `reason` varchar(255) DEFAULT NULL COMMENT '原因',
  `approvalUserId` int(10) unsigned DEFAULT NULL COMMENT '审批人id：关联t_data_user->userId',
  `approvalDatetime` datetime DEFAULT NULL COMMENT '审批时间',
  `status` tinyint(3) unsigned DEFAULT NULL COMMENT '状态：1-等待审批；2-审批通过；3-审批拒绝；4-处理中；5-充值成功；6-充值失败',
  PRIMARY KEY (`applyId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_pay_apply
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_pay_summary`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_pay_summary`;
CREATE TABLE `t_data_pay_summary` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `gameAreaId` int(10) unsigned DEFAULT NULL COMMENT '关联t_data_game_area->gameAreaId',
  `date` date DEFAULT NULL COMMENT '统计日期',
  `money` int(10) unsigned DEFAULT NULL COMMENT '充值金额（单位：分）',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_index` (`gameAreaId`,`date`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_pay_summary
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_question`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_question`;
CREATE TABLE `t_data_question` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `gameAreaId` int(10) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `desc` varchar(2048) DEFAULT NULL,
  `type` tinyint(3) DEFAULT NULL,
  `reward` int(11) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `cid` bigint(20) DEFAULT NULL,
  `name` char(20) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `gold_pay_total` int(11) DEFAULT NULL,
  `state` tinyint(3) DEFAULT NULL COMMENT '1-未处理；2-待审核；3-已发送；4-已关闭；',
  `applyId` int(10) DEFAULT NULL COMMENT '关联send_mail表',
  `operateUserId` int(10) DEFAULT NULL,
  `operateDateTime` int(11) DEFAULT NULL,
  `approvalUserId` int(10) DEFAULT NULL,
  `approvalDateTime` int(11) DEFAULT NULL,
  `closeDateTime` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_question
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_send_mail`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_send_mail`;
CREATE TABLE `t_data_send_mail` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `applyId` int(10) unsigned NOT NULL COMMENT '公告ID',
  `roleName` varchar(2048) DEFAULT NULL COMMENT '角色名',
  `senderName` varchar(255) DEFAULT NULL COMMENT '发送者',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `content` varchar(2048) DEFAULT NULL COMMENT '邮件正文',
  `item` varchar(80) DEFAULT '' COMMENT '附件1',
  `status` tinyint(3) unsigned DEFAULT NULL COMMENT '0发送/审批通过1删除中2已删除',
  `sendDatetime` datetime DEFAULT NULL COMMENT '发送时间',
  `applyUserId` int(10) unsigned DEFAULT NULL COMMENT '申请人id',
  `applyDatetime` datetime DEFAULT NULL COMMENT '申请时间',
  `approvalUserId` int(10) DEFAULT NULL,
  `type` tinyint(3) DEFAULT NULL COMMENT '0=邮件 1=个人奖励 2=全服奖励 3=建议回复邮件',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_send_mail
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_send_mail_attachment`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_send_mail_attachment`;
CREATE TABLE `t_data_send_mail_attachment` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `applyId` int(10) unsigned DEFAULT NULL COMMENT '申请id',
  `itemType` int(10) DEFAULT NULL,
  `itemId` int(10) unsigned DEFAULT NULL COMMENT '物品id',
  `itemCount` int(10) unsigned DEFAULT NULL COMMENT '物品数量',
  `type` int(10) DEFAULT NULL COMMENT '0就是不绑定，1就是绑定',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_send_mail_attachment
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_send_mail_game_area`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_send_mail_game_area`;
CREATE TABLE `t_data_send_mail_game_area` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `applyId` int(10) DEFAULT NULL COMMENT '申请ID',
  `operatorId` int(10) unsigned DEFAULT NULL COMMENT '运营商id',
  `gameAreaId` int(10) unsigned DEFAULT NULL COMMENT '游戏区id',
  `status` tinyint(3) unsigned DEFAULT NULL COMMENT '0发送/审批通过1删除2待审批',
  PRIMARY KEY (`id`),
  KEY `index_applyId` (`operatorId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_send_mail_game_area
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_serial`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_serial`;
CREATE TABLE `t_data_serial` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `applyId` int(11) unsigned DEFAULT NULL,
  `cardSerial` varchar(32) DEFAULT NULL,
  `username` varchar(64) DEFAULT NULL,
  `gameAreaId` int(11) unsigned DEFAULT NULL,
  `status` tinyint(3) unsigned DEFAULT NULL COMMENT '1-未领取，2-已领取',
  `useDateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_cardSerial` (`cardSerial`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_serial
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_server`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_server`;
CREATE TABLE `t_data_server` (
  `serverId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `serverName` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `serverTypeId` int(11) unsigned DEFAULT NULL,
  `maxGameAreaNum` tinyint(3) unsigned DEFAULT NULL COMMENT '最多可承载多少个游戏区',
  `status` tinyint(1) unsigned DEFAULT NULL COMMENT '1-使用中，2-已归还',
  `memo` text COLLATE utf8_bin,
  PRIMARY KEY (`serverId`),
  UNIQUE KEY `index_serverName` (`serverName`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_data_server
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_server_ip`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_server_ip`;
CREATE TABLE `t_data_server_ip` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `serverId` int(11) unsigned DEFAULT NULL,
  `ipId` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_ipId` (`ipId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_data_server_ip
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_server_portgroup`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_server_portgroup`;
CREATE TABLE `t_data_server_portgroup` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `serverId` int(10) unsigned DEFAULT NULL COMMENT '关联t_data_server->serverId',
  `portGroup` tinyint(3) unsigned DEFAULT NULL COMMENT '端口组号',
  `status` tinyint(3) unsigned DEFAULT NULL COMMENT '状态：1-可用；2-禁用',
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_unique` (`serverId`,`portGroup`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_server_portgroup
-- ----------------------------

-- ----------------------------
-- Table structure for `t_data_user`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_user`;
CREATE TABLE `t_data_user` (
  `userId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(16) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `name` varchar(16) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL COMMENT '1-可用；2-禁用',
  PRIMARY KEY (`userId`),
  UNIQUE KEY `index_username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_user
-- ----------------------------
INSERT INTO `t_data_user` VALUES ('1', 'admin', '96e79218965eb72c92a549dd5a330112', '系统管理员', '1');
INSERT INTO `t_data_user` VALUES ('2', 'xuqili', '3cc4b1731eaa59878eab187729e0bd85', '盛游-徐琦立', '1');
INSERT INTO `t_data_user` VALUES ('3', 'wubin', '97a0218eedeebadd433ed416ffb45976', '吴彬', '1');
INSERT INTO `t_data_user` VALUES ('4', 'wangxinjian', '33f4c1cece13b935edb68f8ddafdb177', '王鑫剑', '1');
INSERT INTO `t_data_user` VALUES ('5', 'wangqi', 'e120fd31d933a13a1c9327e15417ec57', '王奇', '1');
INSERT INTO `t_data_user` VALUES ('6', 'cehua', '21218cca77804d2ba1922c33e0151105', '策划', '1');
INSERT INTO `t_data_user` VALUES ('7', 'yankailong', '96e79218965eb72c92a549dd5a330112', '闫凯龙', '1');
INSERT INTO `t_data_user` VALUES ('8', 'xiaoxian', '96e79218965eb72c92a549dd5a330112', '小娴', '1');
INSERT INTO `t_data_user` VALUES ('9', 'liusitan', '62c8ad0a15d9d1ca38d5dee762a16e01', '刘斯坦', '1');
INSERT INTO `t_data_user` VALUES ('10', 'jialongfei', 'fcea920f7412b5da7be0cf42b8c93759', '贾龙飞', '1');
INSERT INTO `t_data_user` VALUES ('11', 'ceshi', 'f7d84546336719bd8a7abe95f84ada96', '测试', '1');

-- ----------------------------
-- Table structure for `t_data_user_menu_privilege`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_user_menu_privilege`;
CREATE TABLE `t_data_user_menu_privilege` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(11) unsigned DEFAULT NULL,
  `menuId` int(11) unsigned DEFAULT NULL,
  `privilegeValue` tinyint(1) unsigned DEFAULT NULL COMMENT '0-无权限，1-有权限',
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_userId_menuId` (`userId`,`menuId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12535 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_user_menu_privilege
-- ----------------------------
INSERT INTO `t_data_user_menu_privilege` VALUES ('12249', '7', '1', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12250', '7', '101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12251', '7', '10101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12252', '7', '10102', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12253', '7', '10103', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12254', '7', '10104', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12255', '7', '10105', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12256', '7', '10106', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12257', '7', '10107', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12258', '7', '10108', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12259', '7', '103', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12260', '7', '10301', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12261', '7', '104', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12262', '7', '10401', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12263', '7', '10402', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12264', '7', '106', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12265', '7', '10601', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12266', '7', '10602', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12267', '7', '10603', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12268', '7', '107', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12269', '7', '10701', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12270', '7', '10702', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12271', '7', '10703', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12272', '7', '108', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12273', '7', '10801', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12274', '7', '2', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12275', '7', '201', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12276', '7', '20101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12277', '7', '20102', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12278', '7', '20103', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12279', '7', '202', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12280', '7', '20201', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12281', '7', '20202', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12282', '7', '20203', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12283', '7', '203', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12284', '7', '20301', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12285', '7', '20302', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12286', '7', '204', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12287', '7', '20401', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12288', '7', '20402', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12289', '7', '20403', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12290', '7', '20404', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12291', '7', '20405', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12292', '7', '205', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12293', '7', '20501', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12294', '7', '20502', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12295', '7', '206', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12296', '7', '20601', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12297', '7', '2060101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12298', '7', '2060102', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12299', '7', '20602', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12300', '7', '2060201', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12301', '7', '2060202', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12302', '7', '20603', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12303', '7', '2060301', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12304', '7', '2060302', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12305', '7', '207', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12306', '7', '20701', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12307', '7', '2070101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12308', '7', '2070102', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12309', '7', '20702', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12310', '7', '2070201', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12311', '7', '2070202', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12312', '7', '20703', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12313', '7', '2070301', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12314', '7', '2070302', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12315', '7', '20704', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12316', '7', '2070401', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12317', '7', '2070402', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12318', '7', '208', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12319', '7', '20801', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12320', '7', '20802', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12321', '7', '20803', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12322', '7', '209', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12323', '7', '20901', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12324', '7', '20902', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12325', '7', '20903', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12326', '7', '210', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12327', '7', '21001', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12328', '7', '21002', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12329', '7', '21003', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12330', '7', '211', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12331', '7', '21101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12332', '7', '21102', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12333', '7', '212', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12334', '7', '21201', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12335', '7', '21202', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12336', '7', '213', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12337', '7', '21301', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12338', '7', '21302', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12339', '7', '214', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12340', '7', '21401', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12341', '7', '21402', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12342', '7', '215', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12343', '7', '21501', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12344', '7', '2150101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12345', '7', '2150102', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12346', '7', '21502', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12347', '7', '2150201', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12348', '7', '2150202', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12349', '7', '21503', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12350', '7', '2150301', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12351', '7', '2150302', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12352', '7', '217', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12353', '7', '21701', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12354', '7', '21702', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12355', '7', '3', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12356', '7', '301', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12357', '7', '30101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12358', '7', '30102', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12359', '7', '30103', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12360', '7', '30104', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12361', '7', '302', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12362', '7', '30201', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12363', '7', '30202', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12364', '7', '30203', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12365', '7', '30204', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12366', '7', '303', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12367', '7', '30301', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12368', '7', '30302', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12369', '7', '4', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12370', '7', '401', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12371', '7', '40101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12372', '7', '40102', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12373', '7', '40103', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12374', '7', '402', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12375', '7', '40201', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12376', '7', '40202', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12377', '7', '40203', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12378', '7', '403', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12379', '7', '40301', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12380', '7', '40302', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12381', '7', '40303', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12382', '7', '40304', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12383', '7', '40305', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12384', '7', '404', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12385', '7', '40401', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12386', '7', '40402', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12387', '7', '40403', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12388', '7', '40404', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12389', '7', '40405', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12390', '7', '406', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12391', '7', '40601', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12392', '7', '40602', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12393', '7', '40603', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12394', '7', '40604', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12395', '7', '405', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12396', '7', '40501', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12397', '7', '40502', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12398', '7', '40503', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12399', '7', '40504', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12400', '7', '5', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12401', '7', '501', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12402', '7', '50101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12403', '7', '50102', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12404', '7', '50103', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12405', '7', '50104', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12406', '7', '50105', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12407', '7', '50106', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12408', '7', '6', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12409', '7', '601', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12410', '7', '60101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12411', '7', '6010101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12412', '7', '6010102', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12413', '7', '6010103', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12414', '7', '60102', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12415', '7', '6010201', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12416', '7', '6010202', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12417', '7', '6010203', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12418', '7', '60103', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12419', '7', '6010301', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12420', '7', '6010302', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12421', '7', '602', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12422', '7', '60201', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12423', '7', '6020101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12424', '7', '6020102', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12425', '7', '60202', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12426', '7', '6020201', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12427', '7', '6020202', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12428', '7', '60203', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12429', '7', '6020301', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12430', '7', '6020302', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12431', '7', '60204', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12432', '7', '6020401', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12433', '7', '60205', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12434', '7', '6020501', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12435', '7', '6020502', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12436', '7', '60206', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12437', '7', '6020601', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12438', '7', '6020602', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12439', '7', '60207', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12440', '7', '6020701', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12441', '7', '6020702', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12442', '7', '60208', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12443', '7', '6020801', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12444', '7', '6020802', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12445', '7', '60209', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12446', '7', '6020901', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12447', '7', '6020902', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12448', '7', '60210', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12449', '7', '6021001', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12450', '7', '6021002', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12451', '7', '60211', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12452', '7', '6021101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12453', '7', '6021102', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12454', '7', '603', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12455', '7', '60301', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12456', '7', '6030101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12457', '7', '6030102', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12458', '7', '60302', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12459', '7', '6030201', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12460', '7', '6030202', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12461', '7', '60303', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12462', '7', '6030301', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12463', '7', '6030302', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12464', '7', '60304', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12465', '7', '6030401', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12466', '7', '6030402', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12467', '7', '60305', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12468', '7', '6030501', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12469', '7', '6030502', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12470', '7', '604', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12471', '7', '60401', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12472', '7', '6040101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12473', '7', '6040102', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12474', '7', '60402', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12475', '7', '6040201', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12476', '7', '6040202', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12477', '7', '60403', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12478', '7', '6040301', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12479', '7', '6040302', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12480', '7', '60404', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12481', '7', '6040401', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12482', '7', '6040402', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12483', '7', '60405', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12484', '7', '6040501', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12485', '7', '6040502', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12486', '7', '605', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12487', '7', '60501', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12488', '7', '6050101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12489', '7', '6050102', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12490', '7', '6050103', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12491', '7', '60502', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12492', '7', '6050201', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12493', '7', '6050202', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12494', '7', '6050203', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12495', '7', '60503', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12496', '7', '6050301', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12497', '7', '6050302', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12498', '7', '6050303', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12499', '7', '60504', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12500', '7', '6050401', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12501', '7', '6050402', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12502', '7', '6050403', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12503', '7', '60505', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12504', '7', '6050501', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12505', '7', '6050502', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12506', '7', '606', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12507', '7', '60601', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12508', '7', '6060101', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12509', '7', '6060102', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12510', '7', '6060103', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12511', '7', '60602', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12512', '7', '6060201', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12513', '7', '6060202', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12514', '7', '6060203', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12515', '7', '60603', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12516', '7', '6060301', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12517', '7', '6060302', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12518', '7', '6060303', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12519', '7', '60604', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12520', '7', '6060401', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12521', '7', '6060402', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12522', '7', '6060403', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12523', '7', '60605', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12524', '7', '6060501', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12525', '7', '6060502', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12526', '7', '6060503', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12527', '7', '60606', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12528', '7', '6060601', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12529', '7', '6060602', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12530', '7', '6060603', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12531', '7', '60607', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12532', '7', '6060701', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12533', '7', '6060702', '1');
INSERT INTO `t_data_user_menu_privilege` VALUES ('12534', '7', '6060703', '1');

-- ----------------------------
-- Table structure for `t_data_user_operator_privilege`
-- ----------------------------
DROP TABLE IF EXISTS `t_data_user_operator_privilege`;
CREATE TABLE `t_data_user_operator_privilege` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(11) unsigned DEFAULT NULL,
  `operatorId` int(11) unsigned DEFAULT NULL,
  `privilegeValue` tinyint(1) unsigned DEFAULT NULL COMMENT '0-无权限，1-有权限',
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_userId_operatorId` (`userId`,`operatorId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_data_user_operator_privilege
-- ----------------------------
INSERT INTO `t_data_user_operator_privilege` VALUES ('1', '7', '1', '1');

-- ----------------------------
-- Table structure for `t_log_admin`
-- ----------------------------
DROP TABLE IF EXISTS `t_log_admin`;
CREATE TABLE `t_log_admin` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sid` int(10) DEFAULT NULL COMMENT '服务器id',
  `oper` bigint(20) DEFAULT NULL COMMENT 'gm id',
  `time` int(11) DEFAULT NULL COMMENT '操作时间',
  `errno` int(10) DEFAULT NULL COMMENT '错误代码',
  `errmsg` varchar(255) DEFAULT NULL COMMENT '错误信息',
  `type` varchar(255) DEFAULT NULL COMMENT '类型',
  `post_data` varchar(2048) DEFAULT NULL COMMENT '参数数据',
  PRIMARY KEY (`id`),
  KEY `index_type_time` (`type`,`time`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_log_admin
-- ----------------------------

-- ----------------------------
-- Table structure for `t_log_ave`
-- ----------------------------
DROP TABLE IF EXISTS `t_log_ave`;
CREATE TABLE `t_log_ave` (
  `time` int(11) NOT NULL,
  `operatorId` int(11) NOT NULL,
  `areaNum` int(11) NOT NULL,
  `aveBattle` int(11) NOT NULL,
  `growBattle` int(11) NOT NULL,
  `aveLevel` int(11) NOT NULL,
  `growLevel` int(11) NOT NULL,
  `equip` int(11) NOT NULL,
  `demon` int(11) NOT NULL,
  `guard` int(11) NOT NULL,
  `sacred` int(11) NOT NULL,
  `jueWei` int(11) NOT NULL,
  `star` int(11) NOT NULL,
  `sky` int(11) NOT NULL,
  `damnation` int(11) NOT NULL,
  `honor` int(11) NOT NULL,
  `wing` int(11) NOT NULL,
  `posLevel` int(11) NOT NULL,
  `wuHun` int(11) NOT NULL,
  UNIQUE KEY `time_oper_area` (`time`,`operatorId`,`areaNum`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_log_ave
-- ----------------------------

-- ----------------------------
-- Table structure for `t_log_banned_chat`
-- ----------------------------
DROP TABLE IF EXISTS `t_log_banned_chat`;
CREATE TABLE `t_log_banned_chat` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `type` tinyint(1) NOT NULL COMMENT '1-禁言；2-解禁',
  `operatorId` int(11) NOT NULL,
  `gameAreaId` int(11) unsigned NOT NULL COMMENT '关联t_data_game_area->gameAreaId',
  `userId` bigint(20) unsigned NOT NULL COMMENT 'userId，对应游戏服务器t_user表userId',
  `unbannedDateTime` datetime DEFAULT NULL COMMENT '解封时间',
  `status` tinyint(1) DEFAULT NULL COMMENT '1-未解封；2-已解封',
  `operatorUserId` int(11) unsigned NOT NULL COMMENT '操作人id，关联t_data_user->userId',
  `operatorDateTime` datetime NOT NULL COMMENT '操作时间',
  `reason` varchar(255) NOT NULL COMMENT '原因',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_log_banned_chat
-- ----------------------------

-- ----------------------------
-- Table structure for `t_log_banned_role`
-- ----------------------------
DROP TABLE IF EXISTS `t_log_banned_role`;
CREATE TABLE `t_log_banned_role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `type` tinyint(1) NOT NULL COMMENT '1-封号；2-解封',
  `operatorId` int(11) NOT NULL,
  `gameAreaId` int(11) unsigned NOT NULL COMMENT '关联t_data_game_area->gameAreaId',
  `userId` bigint(20) unsigned NOT NULL COMMENT 'userId，对应游戏服务器t_user表userId',
  `unbannedDateTime` datetime DEFAULT NULL COMMENT '解封时间',
  `status` tinyint(1) DEFAULT NULL COMMENT '1-未解封；2-已解封',
  `operatorUserId` int(11) unsigned NOT NULL COMMENT '操作人id，关联t_data_user->userId',
  `operatorDateTime` datetime NOT NULL COMMENT '操作时间',
  `reason` varchar(255) NOT NULL COMMENT '原因',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_log_banned_role
-- ----------------------------

-- ----------------------------
-- Table structure for `t_log_gold`
-- ----------------------------
DROP TABLE IF EXISTS `t_log_gold`;
CREATE TABLE `t_log_gold` (
  `time` int(11) NOT NULL COMMENT '日期',
  `operatorId` int(11) NOT NULL,
  `areaNum` int(11) NOT NULL,
  `payGold` int(11) NOT NULL,
  `payCount` int(11) NOT NULL,
  `goldGet` bigint(20) NOT NULL,
  `goldCost` bigint(20) NOT NULL,
  `goldAll` bigint(20) NOT NULL,
  `login` int(11) NOT NULL,
  `moneyGet` bigint(20) NOT NULL,
  `bindMoneyGet` bigint(20) NOT NULL,
  `moneyCost` bigint(20) NOT NULL,
  `moneyAll` bigint(20) NOT NULL,
  `bindMoneyAll` bigint(20) NOT NULL,
  UNIQUE KEY `time_op_area` (`time`,`operatorId`,`areaNum`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_log_gold
-- ----------------------------

-- ----------------------------
-- Table structure for `t_log_order_battle_level`
-- ----------------------------
DROP TABLE IF EXISTS `t_log_order_battle_level`;
CREATE TABLE `t_log_order_battle_level` (
  `time` int(11) NOT NULL,
  `operatorId` int(11) NOT NULL,
  `areaNum` int(11) NOT NULL,
  `order` int(11) NOT NULL,
  `cid1` bigint(20) NOT NULL,
  `name1` varchar(20) NOT NULL,
  `battle` int(11) NOT NULL,
  `cid2` bigint(20) NOT NULL,
  `name2` varchar(20) NOT NULL,
  `level` int(11) NOT NULL,
  KEY `time_oper_area` (`time`,`operatorId`,`areaNum`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_log_order_battle_level
-- ----------------------------

-- ----------------------------
-- Table structure for `t_log_order_item_one`
-- ----------------------------
DROP TABLE IF EXISTS `t_log_order_item_one`;
CREATE TABLE `t_log_order_item_one` (
  `time` int(11) NOT NULL,
  `operatorId` int(11) NOT NULL,
  `areaNum` int(11) NOT NULL,
  `order` int(11) NOT NULL,
  `cid1` bigint(20) NOT NULL,
  `name1` varchar(20) NOT NULL,
  `equip` int(11) NOT NULL,
  `cid2` bigint(20) NOT NULL,
  `name2` varchar(20) NOT NULL,
  `demon` int(11) NOT NULL,
  `cid3` bigint(20) NOT NULL,
  `name3` varchar(20) NOT NULL,
  `guard` int(11) NOT NULL,
  `cid4` bigint(20) NOT NULL,
  `name4` varchar(20) NOT NULL,
  `sacred` int(11) NOT NULL,
  `cid5` bigint(20) NOT NULL,
  `name5` varchar(20) NOT NULL,
  `jueWei` int(11) NOT NULL,
  `cid6` bigint(20) NOT NULL,
  `name6` varchar(20) NOT NULL,
  `star` int(11) NOT NULL,
  KEY `time_oper_area` (`time`,`operatorId`,`areaNum`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_log_order_item_one
-- ----------------------------

-- ----------------------------
-- Table structure for `t_log_order_item_two`
-- ----------------------------
DROP TABLE IF EXISTS `t_log_order_item_two`;
CREATE TABLE `t_log_order_item_two` (
  `time` int(11) NOT NULL,
  `operatorId` int(11) NOT NULL,
  `areaNum` int(11) NOT NULL,
  `order` int(11) NOT NULL,
  `cid1` bigint(20) NOT NULL,
  `name1` varchar(20) NOT NULL,
  `sky` int(11) NOT NULL,
  `cid2` bigint(20) NOT NULL,
  `name2` varchar(20) NOT NULL,
  `damnation` int(11) NOT NULL,
  `cid3` bigint(20) NOT NULL,
  `name3` varchar(20) NOT NULL,
  `honor` int(11) NOT NULL,
  `cid4` bigint(20) NOT NULL,
  `name4` varchar(20) NOT NULL,
  `wing` int(11) NOT NULL,
  `cid5` bigint(20) NOT NULL,
  `name5` varchar(20) NOT NULL,
  `posLevel` int(11) NOT NULL,
  KEY `time_oper_area` (`time`,`operatorId`,`areaNum`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_log_order_item_two
-- ----------------------------

-- ----------------------------
-- Table structure for `t_log_virtual_recharge`
-- ----------------------------
DROP TABLE IF EXISTS `t_log_virtual_recharge`;
CREATE TABLE `t_log_virtual_recharge` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sid` int(10) DEFAULT NULL COMMENT '服务器id',
  `pkey` varchar(20) DEFAULT NULL COMMENT '平台标识',
  `order` char(64) DEFAULT '' COMMENT '订单号',
  `passport` char(32) DEFAULT '' COMMENT '账号',
  `cid` bigint(20) DEFAULT NULL COMMENT '角色id',
  `name` char(20) DEFAULT '' COMMENT '角色名',
  `money` int(11) DEFAULT NULL COMMENT '虚拟充值金额',
  `oper` bigint(20) DEFAULT NULL COMMENT '操作人',
  `time` int(11) DEFAULT NULL COMMENT '操作时间',
  PRIMARY KEY (`id`),
  KEY `index_sid_time` (`sid`,`time`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_log_virtual_recharge
-- ----------------------------
