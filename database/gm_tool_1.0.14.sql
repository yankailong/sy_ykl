/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : syz_admin

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2018-05-28 11:26:58
*/

SET FOREIGN_KEY_CHECKS=0;

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
) ENGINE=InnoDB AUTO_INCREMENT=281 DEFAULT CHARSET=utf8;

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
