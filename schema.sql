--CREATE DATABASE quickiehelp;
--USE quickiehelp;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(320) NOT NULL,
  `password` varchar(255) NOT NULL,
  `age` varchar(255) NOT NULL,
  `interest` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
)


