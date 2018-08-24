/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : syz_admin

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2018-08-17 10:20:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_log_pay_rank`
-- ----------------------------
DROP TABLE IF EXISTS `t_log_pay_rank`;
CREATE TABLE `t_log_pay_rank` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '序列',
  `rank` int(11) DEFAULT '0' COMMENT '排名',
  `sid` int(11) NOT NULL DEFAULT '0' COMMENT '服务器id',
  `uid` bigint(20) NOT NULL DEFAULT '0' COMMENT '账户id',
  `name` char(8) NOT NULL DEFAULT '' COMMENT '角色名',
  `amount` int(11) NOT NULL DEFAULT '0' COMMENT '充值钻石数量',
  `time` int(11) NOT NULL DEFAULT '0' COMMENT '时间',
  `platform` char(20) NOT NULL DEFAULT '0' COMMENT '平台',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8777 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of t_log_pay_rank
-- ----------------------------
