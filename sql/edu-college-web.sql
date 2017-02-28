/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : leaderus

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2017-02-28 19:19:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ldclass
-- ----------------------------
DROP TABLE IF EXISTS `ldclass`;
CREATE TABLE `ldclass` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `className` varchar(255) DEFAULT NULL,
  `quarter` varchar(10) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `endTime` datetime DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ldclass
-- ----------------------------
INSERT INTO `ldclass` VALUES ('4', 'spring架构篇', '第一季', '2017-02-28 13:14:09', '2017-05-01 13:14:11', '');

-- ----------------------------
-- Table structure for ldcourse
-- ----------------------------
DROP TABLE IF EXISTS `ldcourse`;
CREATE TABLE `ldcourse` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `class_id` bigint(20) DEFAULT NULL,
  `courseTitle` varchar(100) DEFAULT NULL,
  `days` int(11) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ldcourse
-- ----------------------------
INSERT INTO `ldcourse` VALUES ('1', null, 'SOLID设计原则详解(上）', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('2', null, 'SOLID设计原则详解(下）', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('3', null, '组件与容器技术原理和实践', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('4', null, 'SPRING组件的定义用法', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('5', null, 'Spring配置加载与Profile用法', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('6', null, '组件装配（泛型，AOP方式注入，反射入门）', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('7', null, '观察者模式与Spring用户消息机制用法', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('8', null, 'DIY 注解方式的SPRING 容器', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('9', null, '测试驱动开发与Spring Test框架', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('10', null, 'Spring Core原理分析', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('11', null, 'Spring AOP原理和实践（上）', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('12', null, 'Spring AOP原理和实践（下）', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('13', null, 'J2EE事务与XA事务', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('14', null, 'SPRING事务框架原理与实现机制', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('15', null, 'Spring编程式事物与托管事务', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('16', null, 'Spring事务高级篇（含aspectj事务）', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('17', null, 'Spring注解事务与XML事务融合与替换', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('18', null, 'Spring Boot篇(Spring Boot入门,Auto Config原理,Spring Boot MVC（Databinding、Data validation）)', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('19', null, 'Spring Security', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('20', null, 'Spring Session(分布式会话）', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('21', null, 'Spring Websocket', '7', '2017-02-28 13:09:43');
INSERT INTO `ldcourse` VALUES ('22', null, 'Spring Boot+Bootstrap+Jquery前端入门', '7', '2017-02-28 13:09:43');

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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ldhomework
-- ----------------------------
INSERT INTO `ldhomework` VALUES ('20', '6', '6', '10', 'C:/work/uploadtmp/', 'CU_TAX_DSN_销项发票总体设计_20131111_交流版_.ppt _兼容模式_.pdf', '2017-02-24 18:55:40', '2017-02-24 19:05:02', '0', '0', '0', '2');

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
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ldhomeworkfb
-- ----------------------------
INSERT INTO `ldhomeworkfb` VALUES ('33', '100', '6', '7', 'A', 'hello');
INSERT INTO `ldhomeworkfb` VALUES ('34', '100', '6', '7', 'B', 'hello');
INSERT INTO `ldhomeworkfb` VALUES ('35', '100', '6', '7', 'B', 'hello');
INSERT INTO `ldhomeworkfb` VALUES ('38', '100', '6', '7', 'B', 'hello');

-- ----------------------------
-- Table structure for lduser
-- ----------------------------
DROP TABLE IF EXISTS `lduser`;
CREATE TABLE `lduser` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `login_name` varchar(50) NOT NULL,
  `class_id` bigint(20) DEFAULT NULL,
  `class_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `qq` varchar(50) DEFAULT NULL,
  `token` varchar(500) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lduser
-- ----------------------------
