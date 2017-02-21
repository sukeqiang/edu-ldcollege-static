/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : leaderus

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2017-02-21 19:07:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for authorities
-- ----------------------------
DROP TABLE IF EXISTS `authorities`;
CREATE TABLE `authorities` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `authority` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of authorities
-- ----------------------------
INSERT INTO `authorities` VALUES ('1', 'leader', 'admin');

-- ----------------------------
-- Table structure for ldhomework
-- ----------------------------
DROP TABLE IF EXISTS `ldhomework`;
CREATE TABLE `ldhomework` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `class_id` bigint(20) DEFAULT NULL,
  `lession_id` bigint(20) DEFAULT NULL,
  `homework_filepath` varchar(500) DEFAULT NULL,
  `homework_filename` varchar(200) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `upd_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `correct_flag` char(255) DEFAULT NULL,
  `star_count` int(11) DEFAULT NULL,
  `negative_count` int(11) DEFAULT NULL,
  `best_flag` char(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_class_lession_idx` (`user_id`,`class_id`,`lession_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ldhomework
-- ----------------------------
INSERT INTO `ldhomework` VALUES ('4', '5', '6', '10', 'homeworkFilepath23', 'filename12', '2017-02-21 15:21:06', '2017-02-21 15:22:55', '0', '7', '10', '1');
INSERT INTO `ldhomework` VALUES ('6', '6', '6', '10', 'homeworkFilepath', 'filename', '2017-02-21 16:15:25', '2017-02-21 16:15:25', '03333', '70', '100', '11');

-- ----------------------------
-- Table structure for ldhomeworkfb
-- ----------------------------
DROP TABLE IF EXISTS `ldhomeworkfb`;
CREATE TABLE `ldhomeworkfb` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `my_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `homework_id` bigint(20) DEFAULT NULL,
  `level_flag` char(255) DEFAULT NULL,
  `mark` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ldhomeworkfb
-- ----------------------------

-- ----------------------------
-- Table structure for lession
-- ----------------------------
DROP TABLE IF EXISTS `lession`;
CREATE TABLE `lession` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lession
-- ----------------------------
INSERT INTO `lession` VALUES ('55', 'mick', '13.00');
INSERT INTO `lession` VALUES ('56', 'mick1', '16.12');
INSERT INTO `lession` VALUES ('57', 'mick1', '13.00');

-- ----------------------------
-- Table structure for t_menu
-- ----------------------------
DROP TABLE IF EXISTS `t_menu`;
CREATE TABLE `t_menu` (
  `id` int(11) NOT NULL,
  `menuName` varchar(255) NOT NULL,
  `hint` varchar(255) DEFAULT NULL,
  `order` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_menu
-- ----------------------------

-- ----------------------------
-- Table structure for t_user2menu
-- ----------------------------
DROP TABLE IF EXISTS `t_user2menu`;
CREATE TABLE `t_user2menu` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `menuId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user2menu
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('leader', '123456', '1');
