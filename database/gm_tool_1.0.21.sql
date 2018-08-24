/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : cishop

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2018-06-28 18:41:40
*/

SET FOREIGN_KEY_CHECKS=0;

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
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

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
INSERT INTO `t_data_operator` VALUES ('10', '快玩', 'kuaiwan', '1', 'kuaiwan');
INSERT INTO `t_data_operator` VALUES ('11', 'pps', 'pps', '1', 'pps');
INSERT INTO `t_data_operator` VALUES ('12', 'youxi567', 'youxi567', '1', 'youxi567');
INSERT INTO `t_data_operator` VALUES ('13', '2217', '2217', '1', '2217');
INSERT INTO `t_data_operator` VALUES ('14', '迅雷', 'niuxyx', '1', 'niuxyx');
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
INSERT INTO `t_data_operator` VALUES ('27', '844a', '844a', '1', '844a');
INSERT INTO `t_data_operator` VALUES ('28', '易乐玩', 'yilewan', '1', 'yilewan');
INSERT INTO `t_data_operator` VALUES ('29', 'iwan4399', 'iwan4399', '1', 'iwan4399');
INSERT INTO `t_data_operator` VALUES ('30', '360uu', '360uu', '1', '360uu');
INSERT INTO `t_data_operator` VALUES ('31', '780g', '780g', '1', '780g');
INSERT INTO `t_data_operator` VALUES ('32', 'game2', 'game2', '1', 'game2');
INSERT INTO `t_data_operator` VALUES ('33', '1771wan', '1771wan', '1', '1771wan');
INSERT INTO `t_data_operator` VALUES ('34', '游民星空', 'gamersky', '1', 'gamersky');
INSERT INTO `t_data_operator` VALUES ('35', '188wan', '188wan', '1', '188wan');
INSERT INTO `t_data_operator` VALUES ('36', '甲子', 'ccjoy', '1', 'ccjoy');
INSERT INTO `t_data_operator` VALUES ('37', '0707pk', '0707pk', '1', '0707pk');
INSERT INTO `t_data_operator` VALUES ('38', '2323wan', '2323wan', '1', '2323wan');
INSERT INTO `t_data_operator` VALUES ('39', '437wan', '437wan', '1', '437wan');
