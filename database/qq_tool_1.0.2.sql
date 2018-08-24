/*
Navicat MySQL Data Transfer

Source Server         : 圣妖传9998后台数据库
Source Server Version : 50615
Source Host           : 123.59.119.187:51888
Source Database       : syz_admin

Target Server Type    : MYSQL
Target Server Version : 50615
File Encoding         : 65001

Date: 2018-08-09 13:55:26
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
