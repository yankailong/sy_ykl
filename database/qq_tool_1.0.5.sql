/*
Navicat MySQL Data Transfer

Source Server         : 172.16.1.28_3306
Source Server Version : 50627
Source Host           : localhost:3306
Source Database       : dark2

Target Server Type    : MYSQL
Target Server Version : 50627
File Encoding         : 65001

Date: 2018-08-24 16:47:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `qq_report_log`
-- ----------------------------
DROP TABLE IF EXISTS `qq_report_log`;
CREATE TABLE `qq_report_log` (
  `time` int(11) NOT NULL,
  `pf` varchar(100) NOT NULL,
  `sid` int(11) NOT NULL,
  `regist_new` int(11) NOT NULL,
  `login_new` int(11) NOT NULL,
  `create_new` int(11) NOT NULL,
  `pay_count` int(11) NOT NULL,
  `pay_amount` int(20) NOT NULL,
  PRIMARY KEY (`time`,`pf`,`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of qq_report_log
-- ----------------------------
