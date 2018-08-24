/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : syz_admin

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2018-05-25 19:46:37
*/

SET FOREIGN_KEY_CHECKS=0;

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
INSERT INTO `t_cfg_itemshop_param` VALUES ('1009', '567', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1010', '568', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1011', '570', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1012', '10', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1013', '575', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1014', '580', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1015', '581', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1016', '15', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1023', '572', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1024', '9', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1025', '8', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1026', '700', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1027', '701', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1028', '702', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1029', '703', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('1030', '710', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3000', '507', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3001', '508', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3002', '509', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3003', '510', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3004', '511', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3005', '512', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3006', '599', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3007', '18', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3008', '158', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3009', '564', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3010', '16', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3011', '601', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3012', '638', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3013', '565', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3014', '635', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3015', '636', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3016', '637', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3017', '619', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3018', '620', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3019', '621', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3020', '623', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3021', '624', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3022', '625', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3023', '627', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3024', '628', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3025', '629', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3026', '410', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3027', '704', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3028', '705', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3029', '706', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3030', '707', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3031', '708', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('3032', '709', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4000', '11', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4001', '12', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4002', '51', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4003', '300', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4004', '301', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('4005', '703', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('5000', '18', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('5001', '564', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('5002', '647', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('9001', '514', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('9002', '515', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('9011', '566', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('101026', '566', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('103000', '514', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('103001', '515', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('103002', '516', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('103003', '517', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('103004', '518', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('103005', '519', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('103006', '520', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('103007', '521', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('103008', '522', '1');
INSERT INTO `t_cfg_itemshop_param` VALUES ('103009', '523', '1');
