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

-- Dumping structure for table quickiehelp.charities
CREATE TABLE IF NOT EXISTS `charities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `organization` varchar(255) DEFAULT NULL,
  `orgwebsite` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `eventname` varchar(255) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `imageSelect` varchar(500) DEFAULT NULL,
  `eventdate` date DEFAULT NULL,
  `eventtime` time DEFAULT NULL,
  `eventlocation` varchar(255) DEFAULT NULL,
  `userinterestdescription` varchar(500) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table quickiehelp.charities: ~3 rows (approximately)
/*!40000 ALTER TABLE `charities` DISABLE KEYS */;
INSERT INTO `charities` (`id`, `organization`, `orgwebsite`, `firstname`, `lastname`, `title`, `email`, `eventname`, `description`, `imageSelect`, `eventdate`, `eventtime`, `eventlocation`, `userinterestdescription`, `createdAt`, `updatedAt`) VALUES
	(1, 'TestOrg', 'TrueTestOrg', 'DanTest', 'HernandezTest', 'President', 'test@test.com', 'Puppy Run', 'Come help us test quickiehelp.', 'https://s3-us-west-1.amazonaws.com/quickiehelp-images/art.PNG', '1987-05-08', '07:00:00', 'City Park', 'LF anyone.', '2018-03-09 17:58:07', '2018-03-09 17:58:07'),
	(2, 'TestOrg2', 'https://www.testorg3.com', 'BeckyTest', 'ArmstrongTest', 'President', 'test2@test.com', 'EventTestTwo', 'Second Test Event', 'https://s3-us-west-1.amazonaws.com/quickiehelp-images/const.PNG', '1995-01-01', '20:00:00', 'City Park', 'All testers', '2018-03-09 19:09:31', '2018-03-09 19:09:31'),
	(4, 'TestOrg3', 'www.test3.com', 'BenTest3', 'PetrilaTest3', 'President', 'test@test.com', 'Test Elderly', 'Help test the elderly', 'https://s3-us-west-1.amazonaws.com/quickiehelp-images/hands-walking-stick-elderly-old-person.jpg', '1901-01-01', '07:00:00', 'City Park', 'People to test the elderly on math.', '2018-03-09 20:06:34', '2018-03-09 20:06:34');
/*!40000 ALTER TABLE `charities` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
