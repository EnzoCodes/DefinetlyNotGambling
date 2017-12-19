# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: localhost (MySQL 5.7.20)
# Database: items_db
# Generation Time: 2017-12-19 01:29:39 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Items
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Items`;

CREATE TABLE `Items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `house` varchar(255) NOT NULL,
  `tier` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `houseImage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Items` WRITE;
/*!40000 ALTER TABLE `Items` DISABLE KEYS */;

INSERT INTO `Items` (`id`, `name`, `house`, `tier`, `image`, `houseImage`)
VALUES
	(4,'Cersei Lannister','Lannister',3,'assets/img/got/cersei.png','https://vignette.wikia.nocookie.net/gameofthrones/images/3/38/House_Lannister.jpg/revision/latest?cb=20110409110354'),
	(5,'Margaery Tyrell','Tyrell',2,'assets/img/got/margaery.png','https://vignette.wikia.nocookie.net/gameofthrones/images/c/cf/House-Tyrell-Main-Shield.PNG/revision/latest?cb=20170108163035'),
	(6,'Khal Drogo','Other',1,'assets/img/got/khal.png',''),
	(7,'Robb Stark','Stark',2,'assets/img/got/rtobb.png',''),
	(8,'Theon Greyjoy','Tyrell',3,'assets/img/got/theon.png',''),
	(14,'Brann Stark','Stark',3,'assets/img/got/bran.png','https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142'),
	(15,'Rickon Stark','Stark',4,'https://i.imgur.com/YpUsthE.png','https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142'),
	(16,'Aemon Targaryen','Targaryen',4,'assets/img/got/aemon.png','https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320'),
	(18,'Jon Snow','Targaryen',1,'assets/img/got/jon.png','https://vignette.wikia.nocookie.net/gameofthrones/images/d/d4/Jon_Snow_family_tree_image.jpg/revision/latest/scale-to-width-down/100?cb=20160616211642'),
	(19,'Viserys Targaryen','Targaryen',4,'assets/img/got/viserys.png','https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320'),
	(20,'Daenerys Targaryen','Targaryen',2,'assets/img/got/dani.png','https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320'),
	(21,'Joffrey Baratheon','Lannister',2,'assets/img/got/joffrey.png','https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG/revision/latest?cb=20170101095357'),
	(23,'Myrcella Baratheon','Lannister',1,'assets/img/got/marcella.png','https://i.imgur.com/lgIk8mF.png'),
	(24,'Tommen Baratheon','Lannister',2,'assets/img/got/tommen.png','https://i.imgur.com/lgIk8mF.png'),
	(27,'Tyrion Lannister','Lannister',4,'assets/img/got/tyrion.png','https://i.imgur.com/lgIk8mF.png'),
	(28,'Robert Baratheon','Tyrell',1,'assets/img/got/robert.png','https://vignette.wikia.nocookie.net/gameofthrones/images/0/00/House-Baratheon-Main-Shield.PNG/revision/latest?cb=20170519002924'),
	(29,'Renly Baratheon','Tyrell',2,'assets/img/got/renly.png','https://vignette.wikia.nocookie.net/gameofthrones/images/3/3d/House-Tyrell-heraldry.jpg/revision/latest/scale-to-width-down/100?cb=20140402122823'),
	(30,'Olenna Trrell','Tyrell',3,'assets/img/got/olenna.png','https://vignette.wikia.nocookie.net/gameofthrones/images/3/3d/House-Tyrell-heraldry.jpg/revision/latest/scale-to-width-down/100?cb=20140402122823'),
	(31,'Samwell Tully','Tyrell',3,'assets/img/got/samwell.png','https://vignette.wikia.nocookie.net/gameofthrones/images/2/2d/House-Tarly-Main-Shield.PNG/revision/latest?cb=20170809082143'),
	(35,'Petyr Baelish','Other',2,'assets/img/got/petyr.png',''),
	(36,'Stannis Baratheon','Tyrell',3,'assets/img/got/stannis.png',''),
	(37,'Ramsay Bolton','Other',2,'assets/img/got/ramsay.png',''),
	(38,'Roose Bolton','Other',2,'assets/img/got/roose.png',''),
	(39,'Brienne of Tarth','Other',4,'assets/img/got/brienne.png',''),
	(40,'Bronn','Other',3,'assets/img/got/bronn.png',''),
	(41,'Gregor Clegane','Tyrell',1,'assets/img/got/mountain.png',''),
	(42,'Sandor Clegane','Tyrell',4,'assets/img/got/hound.png',''),
	(44,'Balon Greyjoy','Tyrell',2,'assets/img/got/balon.png',''),
	(47,'Yara Greyjoy','Tyrell',2,'assets/img/got/yara.png',''),
	(48,'Grey Worm','Other',3,'assets/img/got/greyworm.png',''),
	(49,'Gendry','Tyrell',1,'assets/img/got/gendry.png',''),
	(50,'Gilly','Other',2,'assets/img/got/gilly.png',''),
	(51,'Tormund Giantsbane','Other',3,'assets/img/got/tormund.png',''),
	(52,'Jaqen H’ghar','Other',1,'https://i.imgur.com/5xKOUSu.png',''),
	(54,'Hodor','Other',1,'assets/img/got/hodor.png',''),
	(55,'Hot Pie','Other',1,'assets/img/got/hotpie.png',''),
	(56,'Oberyn Martell','Other',1,'assets/img/got/oberon.png',''),
	(57,'Melisandre','Other',1,'assets/img/got/melisandre.png',''),
	(58,'Jorah Mormont','Other',1,'assets/img/got/joreh.png',''),
	(59,'Qyburn','Other',1,'assets/img/got/qyburn.png',''),
	(60,'Meera Reed','Other',1,'assets/img/got/meera.png',''),
	(61,'Ellaria Sand','Martel',1,'assets/img/got/elaria.png',''),
	(62,'Davos Seaworth','Other',4,'assets/img/got/davos.png',''),
	(63,'Shae','Other',1,'assets/img/got/shae.png',''),
	(64,'Bran Stark','Stark',1,'assets/img/got/bran.png',''),
	(65,'Catelyn Stark','Tyrell',1,'assets/img/got/catelyn.png',''),
	(67,'Varys','Other',4,'assets/img/got/varys.png',''),
	(68,'Ygritte','Other',1,'assets/img/got/ygritte.png',''),
	(70,'Jojen Reed','Other',1,'https://i.imgur.com/zz98BzQ.png',''),
	(71,'Olly','Other',1,'assets/img/got/olly.png',''),
	(74,'Daario Naharis','Other',1,'assets/img/got/daario.png',''),
	(75,'Shireen Baratheon','Other',1,'assets/img/got/stannis.png',''),
	(77,'Missandei','Other',1,'assets/img/got/missandei.png',''),
	(80,'Ros','Other',1,'assets/img/got/ros.png',''),
	(81,'Mance Rayder','Other',1,'assets/img/got/mance.png',''),
	(83,'Maester Luwin','Other',1,'assets/img/got/luwin.png',''),
	(84,'Loras Tyrell','Tyrell',1,'assets/img/got/loras.png',''),
	(86,'Jeor Mormont','Other',1,'assets/img/got/jeor.png',''),
	(88,'Osha','Other',1,'assets/img/got/osha.png',''),
	(89,'Syrio Forel','Other',1,'assets/img/got/sirio.png',''),
	(90,'The Night King','Other',1,'assets/img/got/nightking.png',''),
	(91,'Oberon','Other',1,'assets/img/got/oberon.png',''),
	(94,'Reek','Tyrell',1,'assets/img/got/theon.png',''),
	(96,'Rob Stark','Stark',1,'assets/img/got/robb.png',''),
	(97,'Obara Sand','Tyrell',1,'assets/img/got/obara.png','https://vignette.wikia.nocookie.net/gameofthrones/images/2/2f/House-Martell-heraldry.jpg/revision/latest/scale-to-width-down/100?cb=20140407045115'),
	(98,'Nymeria Sand','Tyrell',1,'assets/img/got/nymeria.png',''),
	(99,'Tyene Sand','Tyrell',1,'assets/img/got/tyene.png',''),
	(100,'Ned Stark','Stark',3,'assets/img/got/ned.png','https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142'),
	(101,'Benjen Stark','Stark',4,'assets/img/got/benjen.png','https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142'),
	(102,'Doran Martell','Tyrell',1,'assets/img/got/doran.png',''),
	(103,'Melisandre','Other',1,'assets/img/got/melisandre.png',''),
	(106,'Sanza Stark','Stark',1,'assets/img/got/sanza.png',''),
	(108,'Cersei Lannister','Lannister',1,'assets/img/got/cersei.png',''),
	(110,'Tywin Lannister','Lannister',1,'assets/img/got/tywin.png',''),
	(111,'Jamie Lannister','Lannister',1,'assets/img/got/jamie.png',''),
	(112,'Podrick Payne','Other',1,'assets/img/got/podrick.png',''),
	(113,'Viserys Targaryen','Tyrell',1,'assets/img/got/viserys.png',''),
	(114,'High Sparrow','Other',1,'assets/img/got/high.png','');

/*!40000 ALTER TABLE `Items` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user2items
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user2items`;

CREATE TABLE `user2items` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ItemId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  PRIMARY KEY (`ItemId`,`UserId`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `user2items_ibfk_1` FOREIGN KEY (`ItemId`) REFERENCES `Items` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user2items_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `coin_count` int(11) NOT NULL DEFAULT '100',
  `points` int(11) NOT NULL DEFAULT '100',
  `identity` varchar(255) DEFAULT '1234512345',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;

INSERT INTO `Users` (`id`, `user_name`, `password`, `coin_count`, `points`, `identity`, `createdAt`, `updatedAt`)
VALUES
	(1,'Sirennire','99993333',100,1178,'hQ7wGrqJgcoq8D6r','2017-12-18 08:16:38','2017-12-18 22:17:03'),
	(2,'dogs','hatecat12',400,986,'2khWpxz3XvHVjt7P','2017-12-18 18:09:54','2017-12-18 22:29:57');

/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
