/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : ci

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2018-08-09 14:19:35
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_data_operator
-- ----------------------------
