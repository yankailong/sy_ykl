/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : syz_admin

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2018-05-28 11:27:58
*/

SET FOREIGN_KEY_CHECKS=0;

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
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1', '7007', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('2', '7041', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('3', '7110', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('4', '7299', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('5', '7307', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('6', '7098', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('7', '7095', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('8', '7101', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('9', '7300', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('10', '7272', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('11', '7004', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('12', '7002', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('13', '7037', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('14', '7319', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('15', '7320', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('16', '7273', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('17', '7274', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('18', '7275', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('19', '7276', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('20', '7277', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('21', '7042', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('22', '7374', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('23', '7375', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('24', '3', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('25', '13', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('26', '23', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('27', '33', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('28', '5', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('29', '15', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('30', '25', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('31', '35', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('32', '7007', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('33', '7041', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('34', '7110', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('35', '7299', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('36', '7307', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('37', '7098', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('38', '7095', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('39', '7101', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('40', '7300', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('41', '7272', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('42', '7004', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('43', '7002', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('44', '7037', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('45', '7319', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('46', '7320', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('47', '7273', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('48', '7274', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('49', '7275', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('50', '7276', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('51', '7277', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('52', '7042', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('53', '7374', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('54', '7375', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('55', '3', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('56', '13', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('57', '23', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('58', '33', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('59', '5', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('60', '15', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('61', '25', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('62', '35', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('63', '7007', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('64', '7041', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('65', '7110', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('66', '7299', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('67', '7307', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('68', '7098', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('69', '7095', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('70', '7101', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('71', '7300', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('72', '7272', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('73', '7004', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('74', '7319', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('75', '7320', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('76', '7273', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('77', '7274', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('78', '7275', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('79', '7276', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('80', '7277', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('81', '7042', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('82', '7374', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('83', '7375', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('84', '3', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('85', '13', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('86', '23', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('87', '33', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('88', '5', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('89', '15', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('90', '25', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('91', '35', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('92', '7007', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('93', '7041', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('94', '7110', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('95', '7299', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('96', '7307', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('97', '7098', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('98', '7095', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('99', '7101', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('100', '7300', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('101', '7272', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('102', '7004', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('103', '7319', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('104', '7320', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('105', '7273', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('106', '7274', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('107', '7275', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('108', '7276', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('109', '7277', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('110', '7042', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('111', '7374', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('112', '7375', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('113', '3', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('114', '13', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('115', '23', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('116', '33', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('117', '5', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('118', '15', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('119', '25', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('120', '35', '3');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('121', '7007', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('122', '7041', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('123', '7110', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('124', '7299', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('125', '7307', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('126', '7098', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('127', '7095', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('128', '7101', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('129', '7300', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('130', '7272', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1000', '507', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1001', '510', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1002', '568', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1003', '570', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1004', '508', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1005', '511', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1006', '638', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1007', '636', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1008', '619', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1009', '620', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1010', '621', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1011', '601', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1012', '564', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1013', '18', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1014', '566', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1015', '158', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1016', '575', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1017', '647', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1018', '623', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1019', '624', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1020', '625', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1021', '565', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1022', '410', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1023', '599', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1024', '25', '8');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1025', '30', '8');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1026', '35', '8');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1027', '45', '8');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1028', '50', '8');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1029', '55', '8');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1030', '507', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1031', '510', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1032', '568', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1033', '570', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1034', '508', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1035', '511', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1036', '638', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1037', '636', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1038', '619', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1039', '620', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1040', '621', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1041', '601', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1042', '564', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1043', '18', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1044', '566', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1045', '158', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1046', '575', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1047', '647', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1048', '623', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1049', '624', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1050', '625', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1051', '565', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1052', '410', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1053', '599', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1054', '25', '8');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1055', '30', '8');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1056', '35', '8');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1057', '45', '8');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1058', '50', '8');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1059', '55', '8');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1060', '507', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1061', '510', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1062', '568', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1063', '570', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1064', '508', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1065', '511', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1066', '638', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1067', '636', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1068', '619', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1069', '620', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1070', '621', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1071', '601', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1072', '564', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1073', '18', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1074', '566', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1075', '158', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1076', '575', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1077', '647', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1078', '623', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1079', '624', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1080', '625', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1081', '565', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1082', '410', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1083', '599', '1');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1084', '25', '8');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1085', '30', '8');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1086', '35', '8');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1087', '45', '8');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1088', '50', '8');
INSERT INTO `t_cfg_mysticalshop_param` VALUES ('1089', '55', '8');
