-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.6.34-log - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for quickiehelp
CREATE DATABASE IF NOT EXISTS `quickiehelp` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `quickiehelp`;

-- Dumping structure for table quickiehelp.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `interest` varchar(255) DEFAULT NULL,
  `categories` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table quickiehelp.users: ~2 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `age`, `interest`, `categories`, `createdAt`, `updatedAt`) VALUES
	(1, 'NewTest', 'LastTest', 'test@test.com', '$2a$08$Aoofvkjeqhapc24EXc0whO/Y/ozq7JuQdDcW32K6BfkJFwICtbqeW', '33', NULL, NULL, '2018-03-09 21:11:05', '2018-03-09 21:11:05'),
	(2, 'Danielliknadflkj', 'sdlkfjsdlkfj', 'sdlfnsdlfn@aa.com', '$2a$08$QJDyj6UyJq2rHdIUDUX1YuzIydXpeRRcrUnIGrQcatjgBf.1x2Nb.', '22', NULL, NULL, '2018-03-09 22:15:57', '2018-03-09 22:15:57');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
