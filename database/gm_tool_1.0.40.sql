/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : syz_admin

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2018-08-15 16:31:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_log_game2_pay`
-- ----------------------------
DROP TABLE IF EXISTS `t_log_game2_pay`;
CREATE TABLE `t_log_game2_pay` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '序列',
  `oid` char(64) NOT NULL DEFAULT '' COMMENT '订单号',
  `sid` int(11) NOT NULL DEFAULT '0' COMMENT '服务器id',
  `uid` bigint(20) DEFAULT '0' COMMENT '账户id',
  `passport` char(32) NOT NULL DEFAULT '' COMMENT '账户名',
  `cid` bigint(20) DEFAULT '0' COMMENT '角色id',
  `isact` int(11) DEFAULT '0' COMMENT '是否参与活动',
  `amount` int(11) NOT NULL DEFAULT '0' COMMENT '充值金额',
  `time` int(11) NOT NULL DEFAULT '0' COMMENT '时间',
  `remark` char(32) DEFAULT '0' COMMENT '请求理由',
  `platform` char(11) NOT NULL COMMENT '平台',
  PRIMARY KEY (`id`),
  UNIQUE KEY `oid` (`oid`) USING BTREE,
  KEY `cid` (`cid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8777 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of t_log_game2_pay
-- ----------------------------
