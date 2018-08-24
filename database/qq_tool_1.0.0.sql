/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : ci

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2018-08-09 11:55:03
*/

SET FOREIGN_KEY_CHECKS=0;

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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

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
