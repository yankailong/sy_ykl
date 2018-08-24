/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : new_tool

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2018-01-11 13:45:13
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
) ENGINE=InnoDB AUTO_INCREMENT=219 DEFAULT CHARSET=utf8;

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
INSERT INTO `t_cfg_currency_type` VALUES ('1', '金币', null);
INSERT INTO `t_cfg_currency_type` VALUES ('2', '绑定金币', null);
INSERT INTO `t_cfg_currency_type` VALUES ('3', '元宝', null);
INSERT INTO `t_cfg_currency_type` VALUES ('4', '圣妖币', null);
INSERT INTO `t_cfg_currency_type` VALUES ('5', '幻羽', null);
INSERT INTO `t_cfg_currency_type` VALUES ('6', 'BOSS积分', null);
INSERT INTO `t_cfg_currency_type` VALUES ('7', '印记精华', null);
INSERT INTO `t_cfg_currency_type` VALUES ('8', '符文精华', null);
INSERT INTO `t_cfg_currency_type` VALUES ('9', '魂珠精华', null);
INSERT INTO `t_cfg_currency_type` VALUES ('10', '天书精华', null);
INSERT INTO `t_cfg_currency_type` VALUES ('11', '神威值', null);

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
  `itemVietnameseName` varchar(255) DEFAULT NULL,
  `maxCount` int(10) unsigned DEFAULT NULL COMMENT '最大叠加数',
  `price` int(10) DEFAULT NULL COMMENT '单价',
  `description` varchar(255) DEFAULT NULL COMMENT '物品描述',
  `param` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=747 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_item
-- ----------------------------
INSERT INTO `t_cfg_item` VALUES ('1', '1', '1', '金币', null, null, null, '大量金币', null);
INSERT INTO `t_cfg_item` VALUES ('2', '1', '2', '经验', null, null, null, '大量经验', null);
INSERT INTO `t_cfg_item` VALUES ('3', '1', '3', '战斗力', null, null, null, '可以获得1点战斗力！有了战斗力，一口气上五楼', null);
INSERT INTO `t_cfg_item` VALUES ('4', '1', '4', '钻石', null, null, null, '大量钻石', null);
INSERT INTO `t_cfg_item` VALUES ('5', '1', '5', '绑钻', null, null, null, '大量绑钻', null);
INSERT INTO `t_cfg_item` VALUES ('6', '1', '6', '圣妖币', null, null, null, '大量圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('7', '1', '8', '小喇叭', null, null, null, '可发送全服喇叭', null);
INSERT INTO `t_cfg_item` VALUES ('8', '1', '9', '复活丹', null, null, null, '死亡时可原地复活', null);
INSERT INTO `t_cfg_item` VALUES ('9', '1', '10', '改名卡', null, null, null, '使用后可更改游戏内的角色名称', null);
INSERT INTO `t_cfg_item` VALUES ('10', '1', '11', '回城卷轴', null, null, null, '|使用后可以立刻回到最近的城市。|n|#f7ab00|获得途径：|n可在随身商店购买', null);
INSERT INTO `t_cfg_item` VALUES ('11', '1', '12', '随机卷轴', null, null, null, '|使用后可以随机到达当前地图的某个地方。|n|#f7ab00|获得途径：|n可在随身商店购买', null);
INSERT INTO `t_cfg_item` VALUES ('12', '1', '13', '金砖', null, null, null, '|使用后可获得5万金币', null);
INSERT INTO `t_cfg_item` VALUES ('13', '1', '14', '一袋沉甸甸的金币', null, null, null, '|使用后可获得200万金币', null);
INSERT INTO `t_cfg_item` VALUES ('14', '1', '15', '救赎卡', null, null, null, '天外有神秘的能量，赐给有罪孽的人予以救赎。使用后消除50点PK值。', null);
INSERT INTO `t_cfg_item` VALUES ('15', '1', '34', '飞行靴', null, null, null, '|使用飞行靴，可立即传送到目标地点。', null);
INSERT INTO `t_cfg_item` VALUES ('16', '1', '100', '10000金币', null, null, null, '双击使用可获得10000金币', null);
INSERT INTO `t_cfg_item` VALUES ('17', '1', '101', '20000金币', null, null, null, '双击使用可获得20000金币', null);
INSERT INTO `t_cfg_item` VALUES ('18', '1', '102', '50000金币', null, null, null, '双击使用可获得50000金币', null);
INSERT INTO `t_cfg_item` VALUES ('19', '1', '103', '100000金币', null, null, null, '双击使用可获得100000金币', null);
INSERT INTO `t_cfg_item` VALUES ('20', '1', '104', '500000金币', null, null, null, '双击使用可获得500000金币', null);
INSERT INTO `t_cfg_item` VALUES ('21', '1', '105', '1000000金币', null, null, null, '双击使用可获得1000000金币', null);
INSERT INTO `t_cfg_item` VALUES ('22', '1', '106', '2000000金币', null, null, null, '双击使用可获得2000000金币', null);
INSERT INTO `t_cfg_item` VALUES ('23', '1', '107', '5000000金币', null, null, null, '双击使用可获得5000000金币', null);
INSERT INTO `t_cfg_item` VALUES ('24', '1', '108', '200000金币', null, null, null, '双击使用可获得20000金币', null);
INSERT INTO `t_cfg_item` VALUES ('25', '1', '150', '50圣妖币', null, null, null, '双击使用可获得50圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('26', '1', '151', '100圣妖币', null, null, null, '双击使用可获得100圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('27', '1', '152', '200圣妖币', null, null, null, '双击使用可获得200圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('28', '1', '153', '500圣妖币', null, null, null, '双击使用可获得500圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('29', '1', '154', '2000圣妖币', null, null, null, '双击使用可获得2000圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('30', '1', '155', '5000圣妖币', null, null, null, '双击使用可获得5000圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('31', '1', '156', '10000圣妖币', null, null, null, '双击使用可获得10000圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('32', '1', '157', '30000圣妖币', null, null, null, '双击使用可获得30000圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('33', '1', '158', '1000圣妖币', null, null, null, '双击使用可获得2000圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('34', '1', '240', '150绑钻', null, null, null, '使用可获得150绑钻', null);
INSERT INTO `t_cfg_item` VALUES ('35', '1', '250', '50金币', null, null, null, '双击使用可获得相应金币', null);
INSERT INTO `t_cfg_item` VALUES ('36', '1', '251', '100金币', null, null, null, '双击使用可获得相应金币', null);
INSERT INTO `t_cfg_item` VALUES ('37', '1', '252', '200金币', null, null, null, '双击使用可获得相应金币', null);
INSERT INTO `t_cfg_item` VALUES ('38', '1', '253', '500金币', null, null, null, '双击使用可获得相应金币', null);
INSERT INTO `t_cfg_item` VALUES ('39', '1', '254', '1000金币', null, null, null, '双击使用可获得相应金币', null);
INSERT INTO `t_cfg_item` VALUES ('40', '1', '255', '2000金币', null, null, null, '双击使用可获得相应金币', null);
INSERT INTO `t_cfg_item` VALUES ('41', '1', '256', '5000金币', null, null, null, '双击使用可获得相应金币', null);
INSERT INTO `t_cfg_item` VALUES ('42', '1', '257', '10000金币', null, null, null, '双击使用可获得相应金币', null);
INSERT INTO `t_cfg_item` VALUES ('43', '1', '260', '50金币', null, null, null, '双击使用可获得相应绑定金币', null);
INSERT INTO `t_cfg_item` VALUES ('44', '1', '261', '100金币', null, null, null, '双击使用可获得相应绑定金币', null);
INSERT INTO `t_cfg_item` VALUES ('45', '1', '262', '200金币', null, null, null, '双击使用可获得相应绑定金币', null);
INSERT INTO `t_cfg_item` VALUES ('46', '1', '263', '500金币', null, null, null, '双击使用可获得相应绑定金币', null);
INSERT INTO `t_cfg_item` VALUES ('47', '1', '264', '1000金币', null, null, null, '双击使用可获得相应绑定金币', null);
INSERT INTO `t_cfg_item` VALUES ('48', '1', '270', '1圣妖币', null, null, null, '双击使用可获得相应圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('49', '1', '271', '5圣妖币', null, null, null, '双击使用可获得相应圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('50', '1', '272', '10圣妖币', null, null, null, '双击使用可获得相应圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('51', '1', '273', '20圣妖币', null, null, null, '双击使用可获得相应圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('52', '1', '274', '50圣妖币', null, null, null, '双击使用可获得相应圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('53', '1', '275', '100圣妖币', null, null, null, '双击使用可获得相应圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('54', '1', '300', '等级丹(高级)', null, null, null, '在100-199级使用后，可以立即升1级', null);
INSERT INTO `t_cfg_item` VALUES ('55', '1', '301', '等级丹(超级)', null, null, null, '在200-299级使用后，可以立即升1级', null);
INSERT INTO `t_cfg_item` VALUES ('56', '1', '302', '等级丹(妖级)', null, null, null, '在300-399级使用后，可以立即升1级', null);
INSERT INTO `t_cfg_item` VALUES ('57', '1', '303', '等级丹(魔级)', null, null, null, '在400-499级使用后，可以立即升1级', null);
INSERT INTO `t_cfg_item` VALUES ('58', '1', '304', '等级丹(仙级)', null, null, null, '在500-599级使用后，可以立即升1级', null);
INSERT INTO `t_cfg_item` VALUES ('59', '1', '305', '等级丹(神级)', null, null, null, '在600-699级使用后，可以立即升1级', null);
INSERT INTO `t_cfg_item` VALUES ('60', '1', '306', '等级丹(特级)', null, null, null, '在100-499级使用后，可以立即升1级', null);
INSERT INTO `t_cfg_item` VALUES ('61', '1', '307', '等级丹(圣级)', null, null, null, '在100-699级使用后，可以立即升1级', null);
INSERT INTO `t_cfg_item` VALUES ('62', '1', '308', '等级丹(初级)', null, null, null, '在1-99级使用后，可以立即升1级', null);
INSERT INTO `t_cfg_item` VALUES ('63', '1', '401', '基本剑术', null, null, null, '|可以学习基本剑术。|n|n|#F7AB00|获得途径:|n|#00FF00|主线任务增送', null);
INSERT INTO `t_cfg_item` VALUES ('64', '1', '402', '隔月斩', null, null, null, '|可以学习隔月斩。|n|n|#F7AB00|获得途径:|n|#00FF00|主线任务增送', null);
INSERT INTO `t_cfg_item` VALUES ('65', '1', '403', '旋风剑法', null, null, null, '|可以学习旋风剑法。|n|n|#F7AB00|获得途径:|n|#00FF00|主线任务增送', null);
INSERT INTO `t_cfg_item` VALUES ('66', '1', '404', '炼狱剑法', null, null, null, '|可以学习炼狱剑法。|n|n|#F7AB00|获得途径:|n|#00FF00|主线任务增送', null);
INSERT INTO `t_cfg_item` VALUES ('67', '1', '405', '鬼影爪', null, null, null, '|可以学习鬼影爪。|n|n|#F7AB00|获得途径:|n|#00FF00|主线任务增送', null);
INSERT INTO `t_cfg_item` VALUES ('68', '1', '406', '圣体盾', null, null, null, '|可以学习圣体盾。|n|n|#F7AB00|获得途径:|n|#00FF00|帝国藏书馆获得', null);
INSERT INTO `t_cfg_item` VALUES ('69', '1', '407', '飞天一剑', null, null, null, '|可以学习飞天一剑。|n|n|#F7AB00|获得途径:|n|#00FF00|七日登录第3天获得', null);
INSERT INTO `t_cfg_item` VALUES ('70', '1', '408', '开天斩', null, null, null, '|可以学习开天斩。|n|n|#F7AB00|获得途径:|n|#00FF00|主线任务增送', null);
INSERT INTO `t_cfg_item` VALUES ('71', '1', '409', '十步一杀', null, null, null, '|可以学习十步一杀。|n|n|#F7AB00|获得途径:|n|#00FF00|藏宝图玩法获得', null);
INSERT INTO `t_cfg_item` VALUES ('72', '1', '410', '火焰神珠', null, null, null, '|可以增加7000点圣体盾熟练度。|n|n|#F7AB00|获得途径:|n|#00FF00|藏宝图挖宝获得', null);
INSERT INTO `t_cfg_item` VALUES ('73', '1', '411', '隔月斩残页', null, null, null, '|可以增加7000点隔月斩熟练度。|n|n|#F7AB00|获得途径:|n|#00FF00|藏宝图挖宝获得', null);
INSERT INTO `t_cfg_item` VALUES ('74', '1', '412', '旋风剑法残页', null, null, null, '|可以增加7000点旋风剑法熟练度。|n|n|#F7AB00|获得途径:|n|#00FF00|藏宝图挖宝获得', null);
INSERT INTO `t_cfg_item` VALUES ('75', '1', '413', '炼狱剑法残页', null, null, null, '|可以增加7000点炼狱剑法熟练度。|n|n|#F7AB00|获得途径:|n|#00FF00|藏宝图挖宝获得', null);
INSERT INTO `t_cfg_item` VALUES ('76', '1', '414', '鬼影爪残页', null, null, null, '|可以增加7000点鬼影爪熟练度。|n|n|#F7AB00|获得途径:|n|#00FF00|藏宝图挖宝获得', null);
INSERT INTO `t_cfg_item` VALUES ('77', '1', '415', '飞天一剑残页', null, null, null, '|可以增加7000点飞天一剑熟练度。|n|n|#F7AB00|获得途径:|n|#00FF00|藏宝图挖宝获得', null);
INSERT INTO `t_cfg_item` VALUES ('78', '1', '416', '技能书残页宝箱', null, null, null, '|使用后概率获得以下物品：|#00afec|\\n隔月斩残页*1\\n旋风剑法残页*1\\n炼狱剑法残页*1\\n鬼影爪残页*1\\n飞天一剑残页*1\\n十步一杀残页*1', null);
INSERT INTO `t_cfg_item` VALUES ('79', '1', '417', '十步一杀残页', null, null, null, '|可以增加7000点十步一杀熟练度。|n|n|#F7AB00|获得途径:|n|#00FF00|藏宝图挖宝获得', null);
INSERT INTO `t_cfg_item` VALUES ('80', '1', '501', '天书残片(小)', null, null, null, '使用后可以获得10天书精华。', null);
INSERT INTO `t_cfg_item` VALUES ('81', '1', '502', '天书残片(中)', null, null, null, '使用后可以获得100天书精华。', null);
INSERT INTO `t_cfg_item` VALUES ('82', '1', '503', '天书残片(大)', null, null, null, '使用后可以获得10000天书精华。', null);
INSERT INTO `t_cfg_item` VALUES ('83', '1', '504', '印记残片(小)', null, null, null, '使用后可以获得50印记精华。', null);
INSERT INTO `t_cfg_item` VALUES ('84', '1', '505', '印记残片(中)', null, null, null, '使用后可以获得1000印记精华。', null);
INSERT INTO `t_cfg_item` VALUES ('85', '1', '506', '印记残片(大)', null, null, null, '使用后可以获得10000印记精华。', null);
INSERT INTO `t_cfg_item` VALUES ('86', '1', '507', '符文碎片(小)', null, null, null, '使用后可以获得10000符文精华。', null);
INSERT INTO `t_cfg_item` VALUES ('87', '1', '508', '符文碎片(中)', null, null, null, '使用后可以获得100000符文精华。', null);
INSERT INTO `t_cfg_item` VALUES ('88', '1', '509', '符文碎片(大)', null, null, null, '使用后可以获得1000000符文精华。', null);
INSERT INTO `t_cfg_item` VALUES ('89', '1', '510', '魂珠碎片(小)', null, null, null, '使用后可以获得100魂珠精华。', null);
INSERT INTO `t_cfg_item` VALUES ('90', '1', '511', '魂珠碎片(中)', null, null, null, '使用后可以获得1000魂珠精华。', null);
INSERT INTO `t_cfg_item` VALUES ('91', '1', '512', '魂珠碎片(大)', null, null, null, '使用后可以获得10000魂珠精华。', null);
INSERT INTO `t_cfg_item` VALUES ('92', '1', '513', '宠物进阶丹', null, null, null, '|可以用于宠物进阶|n|n|#F7AB00|获得途径:|n|#00FF00|野外BOSS掉落\\n商城购买', null);
INSERT INTO `t_cfg_item` VALUES ('93', '1', '514', '一重水晶', null, null, null, '|可以用于星脉1-5重进阶|n|n|#F7AB00|获得途径:|n|#00FF00|野外BOSS掉落\\n商城购买', null);
INSERT INTO `t_cfg_item` VALUES ('94', '1', '515', '二重水晶', null, null, null, '|可以用于星脉6-10重进阶|n|n|#F7AB00|获得途径:|n|#00FF00|野外BOSS掉落\\n商城购买', null);
INSERT INTO `t_cfg_item` VALUES ('95', '1', '516', '三重水晶', null, null, null, '|可以用于星脉11-15重进阶|n|n|#F7AB00|获得途径:|n|#00FF00|野外BOSS掉落\\n商城购买', null);
INSERT INTO `t_cfg_item` VALUES ('96', '1', '517', '四重水晶', null, null, null, '|可以用于星脉16-20重进阶|n|n|#F7AB00|获得途径:|n|#00FF00|野外BOSS掉落\\n商城购买', null);
INSERT INTO `t_cfg_item` VALUES ('97', '1', '518', '五重水晶', null, null, null, '|可以用于星脉21-25重进阶|n|n|#F7AB00|获得途径:|n|#00FF00|野外BOSS掉落\\n藏宝图玩法获得', null);
INSERT INTO `t_cfg_item` VALUES ('98', '1', '519', '六重水晶', null, null, null, '|可以用于星脉26-30重进阶|n|n|#F7AB00|获得途径:|n|#00FF00|野外BOSS掉落\\n藏宝图玩法获得', null);
INSERT INTO `t_cfg_item` VALUES ('99', '1', '520', '七重水晶', null, null, null, '|可以用于星脉31-35重进阶|n|n|#F7AB00|获得途径:|n|#00FF00|野外BOSS掉落\\n藏宝图玩法获得', null);
INSERT INTO `t_cfg_item` VALUES ('100', '1', '521', '八重水晶', null, null, null, '|可以用于星脉36-40重进阶|n|n|#F7AB00|获得途径:|n|#00FF00|野外BOSS掉落\\n藏宝图玩法获得', null);
INSERT INTO `t_cfg_item` VALUES ('101', '1', '522', '九重水晶', null, null, null, '|可以用于星脉41-45重进阶|n|n|#F7AB00|获得途径:|n|#00FF00|野外BOSS掉落\\n藏宝图玩法获得', null);
INSERT INTO `t_cfg_item` VALUES ('102', '1', '523', '十重水晶', null, null, null, '|可以用于星脉46-50重进阶|n|n|#F7AB00|获得途径:|n|#00FF00|野外BOSS掉落\\n藏宝图玩法获得', null);
INSERT INTO `t_cfg_item` VALUES ('103', '1', '564', '幻羽', null, null, null, '|可以用于幻翼进阶|n|n|#F7AB00|获得途径:|n|#00FF00|野外BOSS掉落\\n商城购买', null);
INSERT INTO `t_cfg_item` VALUES ('104', '1', '565', '圣妖神石', null, null, null, '|可以用于战神装备合成或进阶|n|n|#F7AB00|获得途径:|n|#00FF00|野外BOSS掉落\\n商城购买', null);
INSERT INTO `t_cfg_item` VALUES ('105', '1', '566', '寻宝令', null, null, null, '|可以用于宝藏抽奖|n|n|#F7AB00|获得途径:|n|#00FF00|野外BOSS掉落\\n商城购买', null);
INSERT INTO `t_cfg_item` VALUES ('106', '1', '567', '初级藏宝图', null, null, null, '|双击可以在野外进行寻宝，变幻莫测的探险，惊心动魄的收获。|n每天可以挖宝10次，提升VIP等级可增加使用次数|n|n|#F7AB00|获得途径:|n|#00FF00|赏金任务\\n商城购买', null);
INSERT INTO `t_cfg_item` VALUES ('107', '1', '568', '高级藏宝图', null, null, null, '|双击可以在野外进行寻宝，变幻莫测的探险，惊心动魄的收获。|n每天可以挖宝10次，提升VIP等级可增加使用次数|n|n|#F7AB00|获得途径:|n|#00FF00|高级藏宝图碎片合成\\n商城购买', null);
INSERT INTO `t_cfg_item` VALUES ('108', '1', '569', '高级藏宝图碎片', null, null, null, '|收集满3块碎片可以合成1张高级藏宝图。|n|n|#F7AB00|获得途径:|n|#00FF00|初级藏宝图玩法获得', null);
INSERT INTO `t_cfg_item` VALUES ('109', '1', '570', '江山如画', null, null, null, '|双击可以在野外进行寻宝，变幻莫测的探险，惊心动魄的收获。|n每天可以挖宝10次，提升VIP等级可增加使用次数|n|n|#F7AB00|获得途径:|n|#00FF00|江山如画碎片合成\\n运营活动', null);
INSERT INTO `t_cfg_item` VALUES ('110', '1', '571', '江山如画碎片', null, null, null, '|收集满3块碎片可以合成1张江山如画。|n|n|#F7AB00|获得途径:|n|#00FF00|高级藏宝图玩法获得', null);
INSERT INTO `t_cfg_item` VALUES ('111', '1', '572', '帝国徽章', null, null, null, '|可以用于破除帝国藏书馆的封印|n|n|#F7AB00|获得途径:|n|#00FF00|藏宝图挖宝获得\\n商城购买', null);
INSERT INTO `t_cfg_item` VALUES ('112', '1', '573', '圣妖币', null, null, null, '圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('113', '1', '574', '神秘药剂', null, null, null, '|使用后可以随机获得一个强大的状态。|n|#a54bfa|黑暗降临:|#00FF00|视野大幅度降低，持续时间10秒|n|#a54bfa|血脉之力:|#00FF00|增加50%伤害，持续时间10秒|n|#a54bfa|金属皮肤:|#00FF00|受到伤害大幅降低，持续时间10秒|n|#a54bfa|石化:|#00FF00|物理防御大幅提高，持续时间10秒|n|#a54bfa|沉睡:|#00FF00|沉睡状态，被攻击恢复，持续时间10秒|n|#a54bfa|冻疮:|#00FF00|移动速度下降80%，持续5', null);
INSERT INTO `t_cfg_item` VALUES ('114', '1', '575', '换镖令', null, null, null, '在押镖界面中使用，可更换一辆镖车', null);
INSERT INTO `t_cfg_item` VALUES ('115', '1', '576', '诅咒神石', null, null, null, '|可以用于诅咒进阶|n|n|#F7AB00|获得途径:|n|#00FF00|野外BOSS掉落\\n商城购买', null);
INSERT INTO `t_cfg_item` VALUES ('116', '1', '577', '100000金币', null, null, null, '双击使用可获得相应金币', null);
INSERT INTO `t_cfg_item` VALUES ('117', '1', '578', '1000圣妖币', null, null, null, '双击使用可获得相应圣妖币', null);
INSERT INTO `t_cfg_item` VALUES ('118', '1', '580', '集结令', null, null, null, '|可以用于创建公会|n|n|#F7AB00|获得途径:|n|#00FF00|商城购买', null);
INSERT INTO `t_cfg_item` VALUES ('119', '1', '581', '搜索令', null, null, null, '|可以用于搜索仇人坐标|n|n|#F7AB00|获得途径:|n|#00FF00|商城购买', null);
INSERT INTO `t_cfg_item` VALUES ('120', '1', '582', '终级装备', null, null, null, '终级装备', null);
INSERT INTO `t_cfg_item` VALUES ('121', '1', '583', '5000元宝', null, null, null, '使用后可获得5000元宝', null);
INSERT INTO `t_cfg_item` VALUES ('122', '1', '584', '36阶首饰箱', null, null, null, '|打开随机获得36阶首饰一件', null);
INSERT INTO `t_cfg_item` VALUES ('123', '1', '585', '极限令(2层)', null, null, null, '|可以用于进入第2层极限挑战|n|n|#F7AB00|获得途径:|n|#00FF00|第1层极限挑战获得|n离开第1层极限挑战消失', null);
INSERT INTO `t_cfg_item` VALUES ('124', '1', '586', '极限令(3层)', null, null, null, '|可以用于进入第3层极限挑战|n|n|#F7AB00|获得途径:|n|#00FF00|第2层极限挑战获得|n离开第2层极限挑战消失', null);
INSERT INTO `t_cfg_item` VALUES ('125', '1', '587', '极限令(4层)', null, null, null, '|可以用于进入第4层极限挑战|n|n|#F7AB00|获得途径:|n|#00FF00|第3层极限挑战获得|n离开第3层极限挑战消失', null);
INSERT INTO `t_cfg_item` VALUES ('126', '1', '588', '极限令(5层)', null, null, null, '|可以用于进入第5层极限挑战|n|n|#F7AB00|获得途径:|n|#00FF00|第4层极限挑战获得|n离开第4层极限挑战消失', null);
INSERT INTO `t_cfg_item` VALUES ('127', '1', '589', '极限令(6层)', null, null, null, '|可以用于进入第6层极限挑战|n|n|#F7AB00|获得途径:|n|#00FF00|第5层极限挑战获得|n离开第5层极限挑战消失', null);
INSERT INTO `t_cfg_item` VALUES ('128', '1', '590', '极限令(7层)', null, null, null, '|可以用于进入第7层极限挑战|n|n|#F7AB00|获得途径:|n|#00FF00|第6层极限挑战获得|n离开第6层极限挑战消失', null);
INSERT INTO `t_cfg_item` VALUES ('129', '1', '591', '极限令(8层)', null, null, null, '|可以用于进入第8层极限挑战|n|n|#F7AB00|获得途径:|n|#00FF00|第7层极限挑战获得|n离开第7层极限挑战消失', null);
INSERT INTO `t_cfg_item` VALUES ('130', '1', '592', '极限令(9层)', null, null, null, '|可以用于进入第9层极限挑战|n|n|#F7AB00|获得途径:|n|#00FF00|第8层极限挑战获得|n离开第8层极限挑战消失', null);
INSERT INTO `t_cfg_item` VALUES ('131', '1', '593', '极限令(10层)', null, null, null, '|可以用于进入第10层极限挑战|n|n|#F7AB00|获得途径:|n|#00FF00|第9层极限挑战获得|n离开第9层极限挑战消失', null);
INSERT INTO `t_cfg_item` VALUES ('132', '1', '594', '极限令(11层)', null, null, null, '|可以用于进入第11层极限挑战|n|n|#F7AB00|获得途径:|n|#00FF00|第10层极限挑战获得|n离开第10层极限挑战消失', null);
INSERT INTO `t_cfg_item` VALUES ('133', '1', '595', '极限令(12层)', null, null, null, '|可以用于进入第12层极限挑战|n|n|#F7AB00|获得途径:|n|#00FF00|第11层极限挑战获得|n离开第11层极限挑战消失', null);
INSERT INTO `t_cfg_item` VALUES ('134', '1', '596', '极限令(13层)', null, null, null, '|可以用于进入第13层极限挑战|n|n|#F7AB00|获得途径:|n|#00FF00|第12层极限挑战获得|n离开第12层极限挑战消失', null);
INSERT INTO `t_cfg_item` VALUES ('135', '1', '597', '神威令', null, null, null, '使用后可获得1000神威值', null);
INSERT INTO `t_cfg_item` VALUES ('136', '1', '7001', '风云碑荣耀礼包', null, null, null, '|参与【决战风云碑】活动，积分排名第1可以获得。|n打开礼包可获得以下奖励：|n|#a54bfa|500000金币|n魂珠碎片(小)*9', null);
INSERT INTO `t_cfg_item` VALUES ('137', '1', '7002', '风云碑王者礼包', null, null, null, '|参与【决战风云碑】活动，积分排名第2-3可以获得。|n打开礼包可获得以下奖励：|n|#a54bfa|300000金币|n魂珠碎片(小)*5', null);
INSERT INTO `t_cfg_item` VALUES ('138', '1', '7003', '风云碑星耀礼包', null, null, null, '|参与【决战风云碑】活动，积分排名第4-10可以获得。|n打开礼包可获得以下奖励：|n|#a54bfa|150000金币|n魂珠碎片(小)*3', null);
INSERT INTO `t_cfg_item` VALUES ('139', '1', '7004', '风云碑钻石礼包', null, null, null, '|参与【决战风云碑】活动，积分排名第11-30可以获得。|n打开礼包可获得以下奖励：|n|#a54bfa|100000金币|n魂珠碎片(小)*2', null);
INSERT INTO `t_cfg_item` VALUES ('140', '1', '7005', '风云碑铂金礼包', null, null, null, '|参与【决战风云碑】活动，积分排名30名以后可以获得。|n打开礼包可获得以下奖励：|n|#a54bfa|50000金币|n魂珠碎片(小)*1', null);
INSERT INTO `t_cfg_item` VALUES ('141', '1', '7006', '1级回收宝箱', null, null, null, '|10星回收任务可以获得，打开概率获得：|n|#a54bfa|换镖令*1|n初级藏宝图*1', null);
INSERT INTO `t_cfg_item` VALUES ('142', '1', '7007', '2级回收宝箱', null, null, null, '|10星回收任务可以获得，打开概率获得：|n|#a54bfa|换镖令*1|n初级藏宝图*1|n幻羽*1', null);
INSERT INTO `t_cfg_item` VALUES ('143', '1', '7008', '3级回收宝箱', null, null, null, '|10星回收任务可以获得，打开概率获得：|n|#a54bfa|换镖令*1|n初级藏宝图*1|n幻羽*2|n|#e60012|高级藏宝图*1', null);
INSERT INTO `t_cfg_item` VALUES ('144', '1', '7009', '4级回收宝箱', null, null, null, '|10星回收任务可以获得，打开概率获得：|n|#a54bfa|换镖令*1|n初级藏宝图*1|n幻羽*2|n|#e60012|高级藏宝图*1|n火焰神珠*1', null);
INSERT INTO `t_cfg_item` VALUES ('145', '1', '7010', '5级回收宝箱', null, null, null, '|10星回收任务可以获得，打开概率获得：|n|#a54bfa|换镖令*1|n初级藏宝图*1|n幻羽*3|n|#e60012|高级藏宝图*1|n火焰神珠*1', null);
INSERT INTO `t_cfg_item` VALUES ('146', '1', '7013', '风云狂人礼包', null, null, null, '|参与【决战风云碑】活动，击败1人可以获得。|n打开礼包可获得以下奖励：|n|#a54bfa|神威令*5', null);
INSERT INTO `t_cfg_item` VALUES ('147', '1', '7014', '风云战狂礼包', null, null, null, '|参与【决战风云碑】活动，击败5人可以获得。|n打开礼包可获得以下奖励：|n|#a54bfa|神威令*5', null);
INSERT INTO `t_cfg_item` VALUES ('148', '1', '7015', '风云侠客礼包', null, null, null, '|参与【决战风云碑】活动，击败10人可以获得。|n打开礼包可获得以下奖励：|n|#a54bfa|神威令*10', null);
INSERT INTO `t_cfg_item` VALUES ('149', '1', '7016', '风云战将礼包', null, null, null, '|参与【决战风云碑】活动，击败20人可以获得。|n打开礼包可获得以下奖励：|n|#a54bfa|神威令*15', null);
INSERT INTO `t_cfg_item` VALUES ('150', '1', '7017', '风云战神礼包', null, null, null, '|参与【决战风云碑】活动，击败50人可以获得。|n打开礼包可获得以下奖励：|n|#a54bfa|神威令*25', null);
INSERT INTO `t_cfg_item` VALUES ('151', '1', '7018', '天下第一击杀礼包', null, null, null, '|参与【天下第一】活动中并至少击败3名玩家可以获得。|n打开礼包可获得以下奖励：|n|#a54bfa|圣妖币*500|n技能书残页宝箱*1|n印记碎片(小)*10', null);
INSERT INTO `t_cfg_item` VALUES ('152', '1', '7019', '天下第一杀戮礼包', null, null, null, '|参与【天下第一】活动中并至少击败10名玩家可以获得。|n打开礼包可获得以下奖励：|n|#a54bfa|圣妖币*1000|n技能书残页宝箱*2|n印记碎片(小)*20', null);
INSERT INTO `t_cfg_item` VALUES ('153', '1', '7020', '天下第一参与礼包', null, null, null, '|参与【天下第一】活动即可获得。|n打开礼包可获得以下奖励：|n|#a54bfa|圣妖币*200|n技能书残页宝箱*1|n印记碎片(小)*5', null);
INSERT INTO `t_cfg_item` VALUES ('154', '1', '7021', '天下第一获胜礼包', null, null, null, '|参与【天下第一】活动中存活到最后，成为最强的男人即可获得。|n打开礼包可获得以下奖励：|n|#a54bfa|圣妖币*3000|n技能书残页宝箱*5|n印记碎片(小)*60|n|#e60012|圣妖神石*3', null);
INSERT INTO `t_cfg_item` VALUES ('155', '1', '7022', '王者会长礼包', null, null, null, '|参与【圣域争霸】活动，胜利公会的会长奖励。|n打开礼包可获得以下奖励：|n|#a54bfa|2000000金币|n符文碎片*10|n神威令*100', null);
INSERT INTO `t_cfg_item` VALUES ('156', '1', '7023', '王者战神礼包', null, null, null, '|参与【圣域争霸】活动，胜利公会战斗积分排名第1名成员奖励。|n打开礼包可获得以下奖励：|n|#a54bfa|1000000金币|n符文碎片*8|n神威令*80', null);
INSERT INTO `t_cfg_item` VALUES ('157', '1', '7024', '王者精英礼包', null, null, null, '|参与【圣域争霸】活动，胜利公会战斗积分排名第2-3名成员奖励。|n打开礼包可获得以下奖励：|n|#a54bfa|800000金币|n符文碎片*6|n神威令*60', null);
INSERT INTO `t_cfg_item` VALUES ('158', '1', '7025', '王者先锋礼包', null, null, null, '|参与【圣域争霸】活动，胜利公会战斗积分排名第4-5名成员奖励。|n打开礼包可获得以下奖励：|n|#a54bfa|600000金币|n符文碎片*4|n神威令*40', null);
INSERT INTO `t_cfg_item` VALUES ('159', '1', '7026', '钻石会长礼包', null, null, null, '|参与【圣域争霸】活动，积分总分第一公会的会长奖励。|n打开礼包可获得以下奖励：|n|#a54bfa|1600000金币|n符文碎片*8|n神威令*80', null);
INSERT INTO `t_cfg_item` VALUES ('160', '1', '7027', '钻石战神礼包', null, null, null, '|参与【圣域争霸】活动，积分总分第一公会战斗积分排名第1名成员奖励。|n打开礼包可获得以下奖励：|n|#a54bfa|800000金币|n符文碎片*6|n神威令*60', null);
INSERT INTO `t_cfg_item` VALUES ('161', '1', '7028', '钻石精英礼包', null, null, null, '|参与【圣域争霸】活动，积分总分第一公会战斗积分排名第2-3名成员奖励。|n打开礼包可获得以下奖励：|n|#a54bfa|640000金币|n符文碎片*4|n神威令*40', null);
INSERT INTO `t_cfg_item` VALUES ('162', '1', '7029', '钻石先锋礼包', null, null, null, '|参与【圣域争霸】活动，积分总分第一公会战斗积分排名第4-5名成员奖励。|n打开礼包可获得以下奖励：|n|#a54bfa|480000金币|n符文碎片*3|n神威令*30', null);
INSERT INTO `t_cfg_item` VALUES ('163', '1', '7030', '黄金会长礼包', null, null, null, '|参与【圣域争霸】活动，积分总分第二公会的会长奖励。|n打开礼包可获得以下奖励：|n|#a54bfa|1200000金币|n符文碎片*6|n神威令*60', null);
INSERT INTO `t_cfg_item` VALUES ('164', '1', '7031', '黄金战神礼包', null, null, null, '|参与【圣域争霸】活动，积分总分第二公会战斗积分排名第1名成员奖励。|n打开礼包可获得以下奖励：|n|#a54bfa|600000金币|n符文碎片*4|n神威令*40', null);
INSERT INTO `t_cfg_item` VALUES ('165', '1', '7032', '黄金精英礼包', null, null, null, '|参与【圣域争霸】活动，积分总分第二公会战斗积分排名第2-3名成员奖励。|n打开礼包可获得以下奖励：|n|#a54bfa|480000金币|n符文碎片*3|n神威令*30', null);
INSERT INTO `t_cfg_item` VALUES ('166', '1', '7033', '黄金先锋礼包', null, null, null, '|参与【圣域争霸】活动，积分总分第二公会战斗积分排名第4-5名成员奖励。|n打开礼包可获得以下奖励：|n|#a54bfa|360000金币|n符文碎片*2|n神威令*20', null);
INSERT INTO `t_cfg_item` VALUES ('167', '1', '7034', '白银会长礼包', null, null, null, '|参与【圣域争霸】活动，积分总分第三公会的会长奖励。|n打开礼包可获得以下奖励：|n|#a54bfa|9000000金币|n符文碎片*5|n神威令*50', null);
INSERT INTO `t_cfg_item` VALUES ('168', '1', '7035', '白银战神礼包', null, null, null, '|参与【圣域争霸】活动，积分总分第三公会战斗积分排名第1名成员奖励。|n打开礼包可获得以下奖励：|n|#a54bfa|450000金币|n符文碎片*3|n神威令*30', null);
INSERT INTO `t_cfg_item` VALUES ('169', '1', '7036', '白银精英礼包', null, null, null, '|参与【圣域争霸】活动，积分总分第三公会战斗积分排名第2-3名成员奖励。|n打开礼包可获得以下奖励：|n|#a54bfa|360000金币|n符文碎片*2|n神威令*20', null);
INSERT INTO `t_cfg_item` VALUES ('170', '1', '7037', '白银先锋礼包', null, null, null, '|参与【圣域争霸】活动，积分总分第三公会战斗积分排名第4-5名成员奖励。|n打开礼包可获得以下奖励：|n|#a54bfa|270000金币|n符文碎片*1|n神威令*10', null);
INSERT INTO `t_cfg_item` VALUES ('171', '1', '7038', '圣域参与礼包', null, null, null, '|参与【圣域争霸】活动，在活动地图5分钟以上可以获得。|n打开礼包可获得以下奖励：|n|#a54bfa|200000金币|n符文碎片*1|n神威令*10', null);
INSERT INTO `t_cfg_item` VALUES ('172', '1', '10000', '10000充值元宝', null, null, null, '使用后获得10000元宝，相当于充值100RMB', null);
INSERT INTO `t_cfg_item` VALUES ('173', '2', '10001', '神谕战剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('174', '2', '10002', '神谕头盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('175', '2', '10003', '神谕战手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('176', '2', '10004', '神谕战戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('177', '2', '10005', '神谕腰带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('178', '2', '10006', '神谕战甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('179', '2', '10007', '神谕项链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('180', '2', '10008', '神谕战镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('181', '2', '10009', '神谕战指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('182', '2', '10010', '神谕靴子', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('183', '2', '10011', '裂天战剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('184', '2', '10012', '裂天头盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('185', '2', '10013', '裂天战手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('186', '2', '10014', '裂天战戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('187', '2', '10015', '裂天腰带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('188', '2', '10016', '裂天战甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('189', '2', '10017', '裂天项链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('190', '2', '10018', '裂天战镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('191', '2', '10019', '裂天战指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('192', '2', '10020', '裂天靴子', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('193', '2', '10021', '守护战剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('194', '2', '10022', '守护头盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('195', '2', '10023', '守护战手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('196', '2', '10024', '守护战戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('197', '2', '10025', '守护腰带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('198', '2', '10026', '守护战甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('199', '2', '10027', '守护项链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('200', '2', '10028', '守护战镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('201', '2', '10029', '守护战指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('202', '2', '10030', '守护靴子', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('203', '2', '10031', '青云战剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('204', '2', '10032', '青云头盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('205', '2', '10033', '青云战手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('206', '2', '10034', '青云战戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('207', '2', '10035', '青云腰带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('208', '2', '10036', '青云战甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('209', '2', '10037', '青云项链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('210', '2', '10038', '青云战镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('211', '2', '10039', '青云战指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('212', '2', '10040', '青云靴子', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('213', '2', '10041', '玄火战剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('214', '2', '10042', '玄火头盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('215', '2', '10043', '玄火战手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('216', '2', '10044', '玄火战戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('217', '2', '10045', '玄火腰带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('218', '2', '10046', '玄火战甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('219', '2', '10047', '玄火项链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('220', '2', '10048', '玄火战镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('221', '2', '10049', '玄火战指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('222', '2', '10050', '玄火靴子', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('223', '2', '10051', '寒光战剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('224', '2', '10052', '寒光头盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('225', '2', '10053', '寒光战手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('226', '2', '10054', '寒光战戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('227', '2', '10055', '寒光腰带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('228', '2', '10056', '寒光战甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('229', '2', '10057', '寒光项链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('230', '2', '10058', '寒光战镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('231', '2', '10059', '寒光战指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('232', '2', '10060', '寒光靴子', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('233', '2', '10061', '辉煌战剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('234', '2', '10062', '辉煌头盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('235', '2', '10063', '辉煌战手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('236', '2', '10064', '辉煌战戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('237', '2', '10065', '辉煌腰带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('238', '2', '10066', '辉煌战甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('239', '2', '10067', '辉煌项链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('240', '2', '10068', '辉煌战镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('241', '2', '10069', '辉煌战指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('242', '2', '10070', '辉煌靴子', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('243', '2', '10071', '八荒战剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('244', '2', '10072', '八荒头盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('245', '2', '10073', '八荒战手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('246', '2', '10074', '八荒战戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('247', '2', '10075', '八荒腰带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('248', '2', '10076', '八荒战甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('249', '2', '10077', '八荒项链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('250', '2', '10078', '八荒战镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('251', '2', '10079', '八荒战指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('252', '2', '10080', '八荒靴子', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('253', '2', '10081', '赤霄战剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('254', '2', '10082', '赤霄头盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('255', '2', '10083', '赤霄战手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('256', '2', '10084', '赤霄战戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('257', '2', '10085', '赤霄腰带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('258', '2', '10086', '赤霄战甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('259', '2', '10087', '赤霄项链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('260', '2', '10088', '赤霄战镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('261', '2', '10089', '赤霄战指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('262', '2', '10090', '赤霄靴子', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('263', '2', '10091', '星辰战剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('264', '2', '10092', '星辰头盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('265', '2', '10093', '星辰战手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('266', '2', '10094', '星辰战戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('267', '2', '10095', '星辰腰带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('268', '2', '10096', '星辰战甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('269', '2', '10097', '星辰项链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('270', '2', '10098', '星辰战镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('271', '2', '10099', '星辰战指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('272', '2', '10100', '星辰靴子', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('273', '2', '10101', '九霄凌云·剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('274', '2', '10102', '九霄凌云·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('275', '2', '10103', '九霄凌云·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('276', '2', '10104', '九霄凌云·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('277', '2', '10105', '九霄凌云·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('278', '2', '10106', '九霄凌云·甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('279', '2', '10107', '九霄凌云·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('280', '2', '10108', '九霄凌云·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('281', '2', '10109', '九霄凌云·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('282', '2', '10110', '九霄凌云·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('283', '2', '10111', '破碎苍穹·剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('284', '2', '10112', '破碎苍穹·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('285', '2', '10113', '破碎苍穹·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('286', '2', '10114', '破碎苍穹·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('287', '2', '10115', '破碎苍穹·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('288', '2', '10116', '破碎苍穹·甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('289', '2', '10117', '破碎苍穹·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('290', '2', '10118', '破碎苍穹·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('291', '2', '10119', '破碎苍穹·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('292', '2', '10120', '破碎苍穹·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('293', '2', '10121', '万佛朝宗·剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('294', '2', '10122', '万佛朝宗·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('295', '2', '10123', '万佛朝宗·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('296', '2', '10124', '万佛朝宗·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('297', '2', '10125', '万佛朝宗·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('298', '2', '10126', '万佛朝宗·甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('299', '2', '10127', '万佛朝宗·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('300', '2', '10128', '万佛朝宗·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('301', '2', '10129', '万佛朝宗·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('302', '2', '10130', '万佛朝宗·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('303', '2', '10131', '踏雪无痕·剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('304', '2', '10132', '踏雪无痕·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('305', '2', '10133', '踏雪无痕·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('306', '2', '10134', '踏雪无痕·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('307', '2', '10135', '踏雪无痕·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('308', '2', '10136', '踏雪无痕·甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('309', '2', '10137', '踏雪无痕·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('310', '2', '10138', '踏雪无痕·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('311', '2', '10139', '踏雪无痕·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('312', '2', '10140', '踏雪无痕·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('313', '2', '10141', '逍遥无极·剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('314', '2', '10142', '逍遥无极·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('315', '2', '10143', '逍遥无极·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('316', '2', '10144', '逍遥无极·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('317', '2', '10145', '逍遥无极·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('318', '2', '10146', '逍遥无极·甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('319', '2', '10147', '逍遥无极·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('320', '2', '10148', '逍遥无极·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('321', '2', '10149', '逍遥无极·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('322', '2', '10150', '逍遥无极·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('323', '2', '10151', '玄火黯灭·剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('324', '2', '10152', '玄火黯灭·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('325', '2', '10153', '玄火黯灭·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('326', '2', '10154', '玄火黯灭·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('327', '2', '10155', '玄火黯灭·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('328', '2', '10156', '玄火黯灭·甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('329', '2', '10157', '玄火黯灭·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('330', '2', '10158', '玄火黯灭·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('331', '2', '10159', '玄火黯灭·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('332', '2', '10160', '玄火黯灭·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('333', '2', '10161', '轮回守护·剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('334', '2', '10162', '轮回守护·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('335', '2', '10163', '轮回守护·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('336', '2', '10164', '轮回守护·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('337', '2', '10165', '轮回守护·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('338', '2', '10166', '轮回守护·甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('339', '2', '10167', '轮回守护·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('340', '2', '10168', '轮回守护·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('341', '2', '10169', '轮回守护·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('342', '2', '10170', '轮回守护·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('343', '2', '10171', '雷霆怒火·剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('344', '2', '10172', '雷霆怒火·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('345', '2', '10173', '雷霆怒火·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('346', '2', '10174', '雷霆怒火·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('347', '2', '10175', '雷霆怒火·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('348', '2', '10176', '雷霆怒火·甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('349', '2', '10177', '雷霆怒火·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('350', '2', '10178', '雷霆怒火·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('351', '2', '10179', '雷霆怒火·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('352', '2', '10180', '雷霆怒火·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('353', '2', '10181', '乾坤无极·剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('354', '2', '10182', '乾坤无极·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('355', '2', '10183', '乾坤无极·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('356', '2', '10184', '乾坤无极·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('357', '2', '10185', '乾坤无极·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('358', '2', '10186', '乾坤无极·甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('359', '2', '10187', '乾坤无极·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('360', '2', '10188', '乾坤无极·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('361', '2', '10189', '乾坤无极·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('362', '2', '10190', '乾坤无极·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('363', '2', '10191', '冥帝审判·剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('364', '2', '10192', '冥帝审判·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('365', '2', '10193', '冥帝审判·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('366', '2', '10194', '冥帝审判·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('367', '2', '10195', '冥帝审判·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('368', '2', '10196', '冥帝审判·甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('369', '2', '10197', '冥帝审判·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('370', '2', '10198', '冥帝审判·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('371', '2', '10199', '冥帝审判·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('372', '2', '10200', '冥帝审判·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('373', '2', '10201', '风云★天地无双剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('374', '2', '10202', '烟雨风飘渺·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('375', '2', '10203', '烟雨风飘渺·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('376', '2', '10204', '烟雨风飘渺·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('377', '2', '10205', '烟雨风飘渺·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('378', '2', '10206', '风云★天地无双甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('379', '2', '10207', '烟雨风飘渺·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('380', '2', '10208', '烟雨风飘渺·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('381', '2', '10209', '烟雨风飘渺·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('382', '2', '10210', '烟雨风飘渺·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('383', '2', '10211', '烈焰★三昧真火剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('384', '2', '10212', '落日映苍穹·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('385', '2', '10213', '落日映苍穹·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('386', '2', '10214', '落日映苍穹·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('387', '2', '10215', '落日映苍穹·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('388', '2', '10216', '烈焰★三昧真火甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('389', '2', '10217', '落日映苍穹·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('390', '2', '10218', '落日映苍穹·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('391', '2', '10219', '落日映苍穹·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('392', '2', '10220', '落日映苍穹·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('393', '2', '10221', '奇迹★虎啸龙泉剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('394', '2', '10222', '孤云将野鹤·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('395', '2', '10223', '孤云将野鹤·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('396', '2', '10224', '孤云将野鹤·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('397', '2', '10225', '孤云将野鹤·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('398', '2', '10226', '奇迹★虎啸龙泉甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('399', '2', '10227', '孤云将野鹤·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('400', '2', '10228', '孤云将野鹤·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('401', '2', '10229', '孤云将野鹤·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('402', '2', '10230', '孤云将野鹤·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('403', '2', '10231', '命运★不屈幽冥剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('404', '2', '10232', '红豆寄相思·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('405', '2', '10233', '红豆寄相思·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('406', '2', '10234', '红豆寄相思·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('407', '2', '10235', '红豆寄相思·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('408', '2', '10236', '命运★不屈幽冥甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('409', '2', '10237', '红豆寄相思·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('410', '2', '10238', '红豆寄相思·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('411', '2', '10239', '红豆寄相思·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('412', '2', '10240', '红豆寄相思·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('413', '2', '10241', '残月★暗影流光剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('414', '2', '10242', '冷月葬花魂·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('415', '2', '10243', '冷月葬花魂·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('416', '2', '10244', '冷月葬花魂·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('417', '2', '10245', '冷月葬花魂·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('418', '2', '10246', '残月★暗影流光甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('419', '2', '10247', '冷月葬花魂·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('420', '2', '10248', '冷月葬花魂·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('421', '2', '10249', '冷月葬花魂·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('422', '2', '10250', '冷月葬花魂·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('423', '2', '10251', '疾风★时空逆流剑[妖]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('424', '2', '10252', '追风了无痕·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('425', '2', '10253', '追风了无痕·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('426', '2', '10254', '追风了无痕·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('427', '2', '10255', '追风了无痕·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('428', '2', '10256', '疾风★时空逆流甲[妖]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('429', '2', '10257', '追风了无痕·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('430', '2', '10258', '追风了无痕·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('431', '2', '10259', '追风了无痕·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('432', '2', '10260', '追风了无痕·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('433', '2', '10261', '辉煌★至尊荣耀剑[魔]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('434', '2', '10262', '王者冠荣耀·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('435', '2', '10263', '王者冠荣耀·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('436', '2', '10264', '王者冠荣耀·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('437', '2', '10265', '王者冠荣耀·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('438', '2', '10266', '辉煌★至尊荣耀甲[魔]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('439', '2', '10267', '王者冠荣耀·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('440', '2', '10268', '王者冠荣耀·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('441', '2', '10269', '王者冠荣耀·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('442', '2', '10270', '王者冠荣耀·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('443', '2', '10271', '烈火★幻灭红莲剑[仙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('444', '2', '10272', '神芒耀九州·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('445', '2', '10273', '神芒耀九州·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('446', '2', '10274', '神芒耀九州·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('447', '2', '10275', '神芒耀九州·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('448', '2', '10276', '烈火★幻灭红莲甲[仙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('449', '2', '10277', '神芒耀九州·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('450', '2', '10278', '神芒耀九州·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('451', '2', '10279', '神芒耀九州·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('452', '2', '10280', '神芒耀九州·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('453', '2', '10281', '嗜血★紫金盘龙剑[神]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('454', '2', '10282', '杀戮问苍天·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('455', '2', '10283', '杀戮问苍天·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('456', '2', '10284', '杀戮问苍天·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('457', '2', '10285', '杀戮问苍天·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('458', '2', '10286', '嗜血★紫金盘龙甲[神]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('459', '2', '10287', '杀戮问苍天·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('460', '2', '10288', '杀戮问苍天·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('461', '2', '10289', '杀戮问苍天·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('462', '2', '10290', '杀戮问苍天·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('463', '2', '10291', '死神★无坚不摧剑[圣]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('464', '2', '10292', '狂霸战天下·盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('465', '2', '10293', '狂霸战天下·手', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('466', '2', '10294', '狂霸战天下·戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('467', '2', '10295', '狂霸战天下·带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('468', '2', '10296', '死神★无坚不摧甲[圣]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('469', '2', '10297', '狂霸战天下·链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('470', '2', '10298', '狂霸战天下·镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('471', '2', '10299', '狂霸战天下·指', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('472', '2', '10300', '狂霸战天下·靴', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('473', '2', '10301', '主宰★幻灭太虚剑[不灭]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('474', '2', '10302', '永恒天命星河·盔[妖]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('475', '2', '10303', '永恒天命星河·手[妖]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('476', '2', '10304', '永恒天命星河·戒[妖]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('477', '2', '10305', '永恒天命星河·带[妖]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('478', '2', '10306', '主宰★幻灭太虚甲[不灭]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('479', '2', '10307', '永恒天命星河·链[妖]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('480', '2', '10308', '永恒天命星河·镯[妖]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('481', '2', '10309', '永恒天命星河·指[妖]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('482', '2', '10310', '永恒天命星河·靴[妖]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('483', '2', '10311', '灭世★幽冥血煞剑[无上]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('484', '2', '10312', '三界不灭神火·盔[魔]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('485', '2', '10313', '三界不灭神火·手[魔]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('486', '2', '10314', '三界不灭神火·戒[魔]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('487', '2', '10315', '三界不灭神火·带[魔]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('488', '2', '10316', '灭世★幽冥血煞甲[无上]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('489', '2', '10317', '三界不灭神火·链[魔]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('490', '2', '10318', '三界不灭神火·镯[魔]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('491', '2', '10319', '三界不灭神火·指[魔]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('492', '2', '10320', '三界不灭神火·靴[魔]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('493', '2', '10321', '诛仙★万古无常剑[乾坤]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('494', '2', '10322', '弑神圣墟修罗·盔[仙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('495', '2', '10323', '弑神圣墟修罗·手[仙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('496', '2', '10324', '弑神圣墟修罗·戒[仙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('497', '2', '10325', '弑神圣墟修罗·带[仙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('498', '2', '10326', '诛仙★万古无常甲[乾坤]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('499', '2', '10327', '弑神圣墟修罗·链[仙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('500', '2', '10328', '弑神圣墟修罗·镯[仙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('501', '2', '10329', '弑神圣墟修罗·指[仙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('502', '2', '10330', '弑神圣墟修罗·靴[仙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('503', '2', '10331', '无妄★遮天蔽日剑[鸿蒙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('504', '2', '10332', '混沌不败冥帝·盔[神]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('505', '2', '10333', '混沌不败冥帝·手[神]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('506', '2', '10334', '混沌不败冥帝·戒[神]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('507', '2', '10335', '混沌不败冥帝·带[神]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('508', '2', '10336', '无妄★遮天蔽日甲[鸿蒙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('509', '2', '10337', '混沌不败冥帝·链[神]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('510', '2', '10338', '混沌不败冥帝·镯[神]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('511', '2', '10339', '混沌不败冥帝·指[神]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('512', '2', '10340', '混沌不败冥帝·靴[神]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('513', '2', '10341', '轮回★血染九天剑[盘古]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('514', '2', '10342', '幽冥毁天灭地·盔[圣]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('515', '2', '10343', '幽冥毁天灭地·手[圣]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('516', '2', '10344', '幽冥毁天灭地·戒[圣]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('517', '2', '10345', '幽冥毁天灭地·带[圣]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('518', '2', '10346', '轮回★血染九天甲[盘古]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('519', '2', '10347', '幽冥毁天灭地·链[圣]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('520', '2', '10348', '幽冥毁天灭地·镯[圣]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('521', '2', '10349', '幽冥毁天灭地·指[圣]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('522', '2', '10350', '幽冥毁天灭地·靴[圣]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('523', '2', '10351', '战神★大王巡山剑[无敌]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('524', '2', '10352', '开天辟地长生·盔[不灭]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('525', '2', '10353', '开天辟地长生·手[不灭]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('526', '2', '10354', '开天辟地长生·戒[不灭]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('527', '2', '10355', '开天辟地长生·带[不灭]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('528', '2', '10356', '战神★大王巡山甲[无敌]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('529', '2', '10357', '开天辟地长生·链[不灭]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('530', '2', '10358', '开天辟地长生·镯[不灭]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('531', '2', '10359', '开天辟地长生·指[不灭]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('532', '2', '10360', '开天辟地长生·靴[不灭]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('533', '2', '10361', '战神★大王巡山剑[无敌]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('534', '2', '10362', '凤凰涅槃重生·盔[无上]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('535', '2', '10363', '凤凰涅槃重生·手[无上]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('536', '2', '10364', '凤凰涅槃重生·戒[无上]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('537', '2', '10365', '凤凰涅槃重生·带[无上]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('538', '2', '10366', '战神★大王巡山甲[无敌]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('539', '2', '10367', '凤凰涅槃重生·链[无上]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('540', '2', '10368', '凤凰涅槃重生·镯[无上]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('541', '2', '10369', '凤凰涅槃重生·指[无上]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('542', '2', '10370', '凤凰涅槃重生·靴[无上]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('543', '2', '10371', '战神★大王巡山剑[无敌]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('544', '2', '10372', '日月星辰不灭·盔[乾坤]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('545', '2', '10373', '日月星辰不灭·手[乾坤]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('546', '2', '10374', '日月星辰不灭·戒[乾坤]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('547', '2', '10375', '日月星辰不灭·带[乾坤]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('548', '2', '10376', '战神★大王巡山甲[无敌]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('549', '2', '10377', '日月星辰不灭·链[乾坤]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('550', '2', '10378', '日月星辰不灭·镯[乾坤]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('551', '2', '10379', '日月星辰不灭·指[乾坤]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('552', '2', '10380', '日月星辰不灭·靴[乾坤]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('553', '2', '10381', '战神★大王巡山剑[无敌]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('554', '2', '10382', '君临天下无量·盔[鸿蒙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('555', '2', '10383', '君临天下无量·手[鸿蒙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('556', '2', '10384', '君临天下无量·戒[鸿蒙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('557', '2', '10385', '君临天下无量·带[鸿蒙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('558', '2', '10386', '战神★大王巡山甲[无敌]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('559', '2', '10387', '君临天下无量·链[鸿蒙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('560', '2', '10388', '君临天下无量·镯[鸿蒙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('561', '2', '10389', '君临天下无量·指[鸿蒙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('562', '2', '10390', '君临天下无量·靴[鸿蒙]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('563', '2', '10391', '战神★大王巡山剑[无敌]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('564', '2', '10392', '天下无敌杀戮·盔[盘古]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('565', '2', '10393', '天下无敌杀戮·手[盘古]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('566', '2', '10394', '天下无敌杀戮·戒[盘古]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('567', '2', '10395', '天下无敌杀戮·带[盘古]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('568', '2', '10396', '战神★大王巡山甲[无敌]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('569', '2', '10397', '天下无敌杀戮·链[盘古]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('570', '2', '10398', '天下无敌杀戮·镯[盘古]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('571', '2', '10399', '天下无敌杀戮·指[盘古]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('572', '2', '10400', '天下无敌杀戮·靴[盘古]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('573', '2', '20001', '圣妖之刃', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('574', '2', '20002', '圣妖之盔', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('575', '2', '20003', '圣妖之戒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('576', '2', '20004', '圣妖之带', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('577', '2', '20005', '圣妖之甲', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('578', '2', '20006', '圣妖之链', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('579', '2', '20007', '圣妖之镯', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('580', '2', '20008', '圣妖之鞋', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('581', '2', '20009', '圣妖之刃【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('582', '2', '20010', '圣妖之盔【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('583', '2', '20011', '圣妖之戒【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('584', '2', '20012', '圣妖之带【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('585', '2', '20013', '圣妖之甲【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('586', '2', '20014', '圣妖之链【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('587', '2', '20015', '圣妖之镯【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('588', '2', '20016', '圣妖之鞋【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('589', '2', '20017', '圣妖之刃【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('590', '2', '20018', '圣妖之盔【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('591', '2', '20019', '圣妖之戒【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('592', '2', '20020', '圣妖之带【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('593', '2', '20021', '圣妖之甲【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('594', '2', '20022', '圣妖之链【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('595', '2', '20023', '圣妖之镯【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('596', '2', '20024', '圣妖之鞋【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('597', '2', '20025', '圣妖之刃【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('598', '2', '20026', '圣妖之盔【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('599', '2', '20027', '圣妖之戒【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('600', '2', '20028', '圣妖之带【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('601', '2', '20029', '圣妖之甲【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('602', '2', '20030', '圣妖之链【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('603', '2', '20031', '圣妖之镯【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('604', '2', '20032', '圣妖之鞋【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('605', '2', '20033', '圣妖之刃【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('606', '2', '20034', '圣妖之盔【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('607', '2', '20035', '圣妖之戒【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('608', '2', '20036', '圣妖之带【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('609', '2', '20037', '圣妖之甲【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('610', '2', '20038', '圣妖之链【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('611', '2', '20039', '圣妖之镯【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('612', '2', '20040', '圣妖之鞋【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('613', '2', '20081', '圣妖皇冠【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('614', '2', '20082', '圣妖皇冠【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('615', '2', '20083', '圣妖皇冠【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('616', '2', '20084', '圣妖皇冠【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('617', '2', '20085', '圣妖皇冠【圣】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('618', '2', '30001', '白羊守护', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('619', '2', '30002', '金牛守护', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('620', '2', '30003', '双子守护', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('621', '2', '30004', '巨蟹守护', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('622', '2', '30005', '狮子守护', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('623', '2', '30006', '处女守护', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('624', '2', '30007', '天秤守护', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('625', '2', '30008', '天蝎守护', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('626', '2', '30009', '射手守护', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('627', '2', '30010', '摩羯守护', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('628', '2', '30011', '水瓶守护', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('629', '2', '30012', '双鱼守护', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('630', '2', '30013', '白羊守护【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('631', '2', '30014', '金牛守护【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('632', '2', '30015', '双子守护【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('633', '2', '30016', '巨蟹守护【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('634', '2', '30017', '狮子守护【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('635', '2', '30018', '处女守护【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('636', '2', '30019', '天秤守护【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('637', '2', '30020', '天蝎守护【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('638', '2', '30021', '射手守护【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('639', '2', '30022', '摩羯守护【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('640', '2', '30023', '水瓶守护【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('641', '2', '30024', '双鱼守护【妖】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('642', '2', '30025', '白羊守护【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('643', '2', '30026', '金牛守护【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('644', '2', '30027', '双子守护【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('645', '2', '30028', '巨蟹守护【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('646', '2', '30029', '狮子守护【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('647', '2', '30030', '处女守护【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('648', '2', '30031', '天秤守护【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('649', '2', '30032', '天蝎守护【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('650', '2', '30033', '射手守护【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('651', '2', '30034', '摩羯守护【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('652', '2', '30035', '水瓶守护【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('653', '2', '30036', '双鱼守护【魔】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('654', '2', '30037', '白羊守护【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('655', '2', '30038', '金牛守护【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('656', '2', '30039', '双子守护【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('657', '2', '30040', '巨蟹守护【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('658', '2', '30041', '狮子守护【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('659', '2', '30042', '处女守护【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('660', '2', '30043', '天秤守护【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('661', '2', '30044', '天蝎守护【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('662', '2', '30045', '射手守护【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('663', '2', '30046', '摩羯守护【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('664', '2', '30047', '水瓶守护【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('665', '2', '30048', '双鱼守护【仙】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('666', '2', '30049', '白羊守护【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('667', '2', '30050', '金牛守护【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('668', '2', '30051', '双子守护【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('669', '2', '30052', '巨蟹守护【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('670', '2', '30053', '狮子守护【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('671', '2', '30054', '处女守护【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('672', '2', '30055', '天秤守护【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('673', '2', '30056', '天蝎守护【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('674', '2', '30057', '射手守护【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('675', '2', '30058', '摩羯守护【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('676', '2', '30059', '水瓶守护【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('677', '2', '30060', '双鱼守护【神】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('678', '2', '40000', '血染九天·剑[破碎]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('679', '2', '40001', '逆转轮回·剑[破碎]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('680', '2', '40002', '无妄乾坤·剑[破碎]', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('681', '2', '50000', '石化·寒月冰封', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('682', '2', '50001', '石化·血色夕阳', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('683', '2', '50002', '石化·碧谭映月', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('684', '2', '50003', '石化·绝灭弑神', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('685', '2', '50004', '石化·傲啸苍穹', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('686', '2', '50005', '石化·龙魂帝煞', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('687', '2', '50006', '石化·赤练紫仙', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('688', '2', '50007', '石化·噩梦亡魂', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('689', '2', '50008', '石化·斩天灭神', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('690', '2', '50009', '石化·逆天改命', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('691', '2', '50010', '赤焰·狂乱辰光', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('692', '2', '50011', '赤焰·残血封桥', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('693', '2', '50012', '赤焰·流萤逐月', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('694', '2', '50013', '赤焰·斋藤泉樱', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('695', '2', '50014', '赤焰·朱凰噬焰', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('696', '2', '50015', '赤焰·万象尽灭', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('697', '2', '50016', '赤焰·三界帝王', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('698', '2', '50017', '赤焰·大地统治', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('699', '2', '50018', '赤焰·至尊灭世', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('700', '2', '50019', '赤焰·璀璨魔渊', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('701', '2', '50020', '紫电·灵光', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('702', '2', '50021', '紫电·暴泣', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('703', '2', '50022', '紫电·破碎', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('704', '2', '50023', '紫电·魔影', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('705', '2', '50024', '紫电·雷霆', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('706', '2', '50025', '紫电·摄魂', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('707', '2', '50026', '紫电·天劫', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('708', '2', '50027', '紫电·征服', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('709', '2', '50028', '紫电·绝世', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('710', '2', '50029', '紫电·惊鸿', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('711', '2', '50030', '重生·龙心火盾', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('712', '2', '50031', '重生·英雄之屈', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('713', '2', '50032', '重生·虚无之盾', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('714', '2', '50033', '重生·黑暗屏障', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('715', '2', '50034', '重生·无尽寒冬', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('716', '2', '50035', '重生·磨难碎片', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('717', '2', '50036', '重生·磐石壁垒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('718', '2', '50037', '重生·光明庇护', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('719', '2', '50038', '重生·太阳纹章', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('720', '2', '50039', '重生·大地卫士', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('721', '2', '50040', '九霄·原罪披风', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('722', '2', '50041', '九霄·远行卫士', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('723', '2', '50042', '九霄·欢愉之花', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('724', '2', '50043', '九霄·庄严披风', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('725', '2', '50044', '九霄·火焰潮汐', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('726', '2', '50045', '九霄·沸腾之怒', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('727', '2', '50046', '九霄·夜色终末', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('728', '2', '50047', '九霄·黑暗天灾', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('729', '2', '50048', '九霄·灵魂救赎', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('730', '2', '50049', '九霄·凤凰之翼', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('731', '2', '50050', '救赎·云雷万里', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('732', '2', '50051', '救赎·灵犀望月', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('733', '2', '50052', '救赎·太极流光', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('734', '2', '50053', '救赎·九霄风雷', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('735', '2', '50054', '救赎·碧血干戚', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('736', '2', '50055', '救赎·九阴勾魂', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('737', '2', '50056', '救赎·祖龙对剑', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('738', '2', '50057', '救赎·紫电青霜', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('739', '2', '50058', '救赎·狂澜碎岳', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('740', '2', '50059', '救赎·逆乱星河', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('741', '2', '99001', '幸运项链【GM】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('742', '2', '99002', '疾风战手【GM】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('743', '2', '99003', '疾风战戒【GM】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('744', '2', '99004', '狂风战手【GM】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('745', '2', '99005', '狂风战戒【GM】', null, null, null, '大师的杰作', null);
INSERT INTO `t_cfg_item` VALUES ('746', '2', '99999', '圣妖·至尊不灭剑[元宝]', null, null, null, '大师的杰作', null);

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
INSERT INTO `t_cfg_itemshop_param` VALUES ('1000', '1510', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1001', '7788', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1002', '1004', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1003', '34', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1004', '7290', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1005', '7308', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1006', '7239', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1007', '1511', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1008', '1022', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1009', '1009', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1010', '1741', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1011', '1742', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('2000', '1001', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('2001', '1002', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('2003', '8000', '3');
INSERT INTO `t_cfg_itemshop_param` VALUES ('2004', '8001', '3');
INSERT INTO `t_cfg_itemshop_param` VALUES ('2005', '8002', '3');
INSERT INTO `t_cfg_itemshop_param` VALUES ('2007', '8100', '3');
INSERT INTO `t_cfg_itemshop_param` VALUES ('2008', '8101', '3');
INSERT INTO `t_cfg_itemshop_param` VALUES ('2009', '8102', '3');
INSERT INTO `t_cfg_itemshop_param` VALUES ('2011', '8300', '3');
INSERT INTO `t_cfg_itemshop_param` VALUES ('2012', '8301', '3');
INSERT INTO `t_cfg_itemshop_param` VALUES ('2013', '8302', '3');
INSERT INTO `t_cfg_itemshop_param` VALUES ('2015', '8200', '3');
INSERT INTO `t_cfg_itemshop_param` VALUES ('2016', '8201', '3');
INSERT INTO `t_cfg_itemshop_param` VALUES ('2017', '8202', '3');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3000', '1800', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3002', '1700', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3003', '1701', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3005', '1900', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3006', '7914', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3007', '7786', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3008', '1600', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3010', '1601', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3011', '1602', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3012', '8026', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3013', '8027', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4000', '1510', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4001', '1004', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4002', '34', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4003', '1001', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4004', '1800', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4005', '1700', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4006', '1701', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4007', '1900', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4008', '1600', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4009', '7308', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4010', '1002', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4012', '7238', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('5000', '3351', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('5001', '7899', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('6000', '2302', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('7000', '1550', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8000', '390000', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8001', '390004', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8002', '390002', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8003', '390005', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8004', '390049', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8005', '390050', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8006', '390051', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8007', '390052', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8008', '390053', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8009', '1707', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8010', '390007', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8011', '6', '9');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8012', '8002', '3');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8013', '8102', '3');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8014', '8202', '3');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8015', '8302', '3');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8016', '390057', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8017', '390059', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8018', '390058', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8019', '390060', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8020', '390061', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8021', '390062', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8022', '390063', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8023', '390055', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8024', '390056', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8025', '390054', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3001', '1801', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3004', '1743', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3009', '1604', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8001', '390001', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8004', '1801', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8006', '390003', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8009', '1743', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8011', '1604', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('8012', '390006', '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=195 DEFAULT CHARSET=utf8;

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
INSERT INTO `t_cfg_item_type` VALUES ('1', '特殊道具');
INSERT INTO `t_cfg_item_type` VALUES ('2', '装备');

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
) ENGINE=InnoDB AUTO_INCREMENT=145 DEFAULT CHARSET=utf8;

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

-- ----------------------------
-- Table structure for `t_cfg_question_reward`
-- ----------------------------
DROP TABLE IF EXISTS `t_cfg_question_reward`;
CREATE TABLE `t_cfg_question_reward` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `rewardLevel` int(10) DEFAULT NULL,
  `rewardItem` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cfg_question_reward
-- ----------------------------
INSERT INTO `t_cfg_question_reward` VALUES ('1', '1', '204:1:1');
INSERT INTO `t_cfg_question_reward` VALUES ('2', '2', '202:1:1');
INSERT INTO `t_cfg_question_reward` VALUES ('3', '3', '202:1:1');
INSERT INTO `t_cfg_question_reward` VALUES ('4', '4', '202:1:1');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

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
  UNIQUE KEY `index_cardName` (`cardName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

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
  `itemId` int(11) NOT NULL,
  `itemType` int(11) NOT NULL,
  `giftId` int(11) NOT NULL,
  `applyUserId` int(11) unsigned DEFAULT NULL,
  `applyDateTime` datetime DEFAULT NULL,
  `status` tinyint(3) unsigned DEFAULT NULL COMMENT '1-未生成；2-已生成； ',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

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
  UNIQUE KEY `index_gameAreaId_datetime` (`gameAreaId`,`datetime`)
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
  UNIQUE KEY `index_operator_areaNum` (`operatorId`,`areaNum`)
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

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
  `itemType` int(10) DEFAULT NULL,
  `itemId` int(10) DEFAULT NULL COMMENT '物品id',
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

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
  UNIQUE KEY `index_gameAreaId_datetime` (`gameAreaId`,`datetime`)
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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_data_operator
-- ----------------------------
INSERT INTO `t_data_operator` VALUES ('1', '360', 'w360', '1', 'wan');
INSERT INTO `t_data_operator` VALUES ('2', '游戏', 'youxi', '1', 'youxi');
INSERT INTO `t_data_operator` VALUES ('3', '顺网', 'swjoy', '1', 'swjoy');
INSERT INTO `t_data_operator` VALUES ('4', '飞火', 'feihuo', '1', 'feihuo');
INSERT INTO `t_data_operator` VALUES ('5', '多玩', 'duowanclouds', '1', 'duowanclouds');
INSERT INTO `t_data_operator` VALUES ('6', '紫霞', 'zixia', '1', 'zixia');
INSERT INTO `t_data_operator` VALUES ('7', '17kxgame', '17kxgame', '1', '17kxgame');
INSERT INTO `t_data_operator` VALUES ('8', '搜狗', 'sogou', '1', 'sogou');
INSERT INTO `t_data_operator` VALUES ('9', '37', '37wan ', '1', '37wan ');
INSERT INTO `t_data_operator` VALUES ('10', '快玩', 'teeqee', '1', 'teeqee');
INSERT INTO `t_data_operator` VALUES ('11', 'pps', 'pps', '1', 'pps');
INSERT INTO `t_data_operator` VALUES ('12', 'youxi567', 'youxi567', '1', '7k7k');
INSERT INTO `t_data_operator` VALUES ('13', '2217', '2217', '1', '2217');
INSERT INTO `t_data_operator` VALUES ('14', '迅雷', 'xunlei', '1', 'xunlei');
INSERT INTO `t_data_operator` VALUES ('15', '8090', '8090', '1', '8090');
INSERT INTO `t_data_operator` VALUES ('16', 'ku25', 'ku25', '1', 'ku25');
INSERT INTO `t_data_operator` VALUES ('17', '妖豆', 'yaodou', '1', 'yaodou');
INSERT INTO `t_data_operator` VALUES ('18', '2144', '2144', '1', '2144');
INSERT INTO `t_data_operator` VALUES ('19', '星蝶', 'ufojoy', '1', 'ufojoy');
INSERT INTO `t_data_operator` VALUES ('20', '1912yx', '1912yx', '1', '1912yx');
INSERT INTO `t_data_operator` VALUES ('21', '43u', '43u', '1', '43U');
INSERT INTO `t_data_operator` VALUES ('22', '511wan', '511wan', '1', '511wan');
INSERT INTO `t_data_operator` VALUES ('23', '37tang', '37tang', '1', '37tang');
INSERT INTO `t_data_operator` VALUES ('24', '29yx', '29yx', '1', '29yx');
INSERT INTO `t_data_operator` VALUES ('25', '99yx', '99yx', '1', '99yx');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

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
  UNIQUE KEY `unique_index` (`gameAreaId`,`date`)
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
  KEY `index_applyId` (`operatorId`)
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_user
-- ----------------------------
INSERT INTO `t_data_user` VALUES ('1', 'admin', '96e79218965eb72c92a549dd5a330112', '系统管理员', '1');

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
  UNIQUE KEY `index_userId_menuId` (`userId`,`menuId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_data_user_menu_privilege
-- ----------------------------

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_data_user_operator_privilege
-- ----------------------------

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of t_log_banned_role
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
