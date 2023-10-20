-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: el_bodegon
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(60) NOT NULL,
  `product_id` int NOT NULL,
  `product_name` varchar(45) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (14,'1f862d08-c290-47b4-b1af-8fa43a2ed828',1,'Tomahawk ',2000);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Carnes'),(2,'Bebidas'),(3,'Ensaladas'),(4,'Milanesas'),(5,'Pescados'),(6,'Postres');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `price` int NOT NULL,
  `image` varchar(45) NOT NULL,
  `description` varchar(100) NOT NULL,
  `discount` varchar(45) DEFAULT NULL,
  `code` varchar(15) DEFAULT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Tomahawk ',2000,'product-1694008160272.jpg','interdum mauris non ligula...','','',1),(2,'Bola de Lomo',1500,'product-1694007876802.jpg','justo aliquam quis turpis...','','',1),(3,'New York Steak',2,'product-1694007906797.jpg','integer a nibh in quis...','','v7%',1),(4,'Rib Eye',2,'product-1694008013826.jpg','at feugiat non pretium quis...','','l4\"',1),(5,'Picaña',2,'product-1694008036266.jpg','quisque erat eros viverra...','','d4!',1),(6,'Churrasco',2,'product-1694008050660.jpg','vel accumsan tellus nisi eu...','','p2,',1),(7,'Entraña',3000,'product-1694008073824.jpg','pede justo eu massa donec...','','e5/',1),(8,'Vacío',3100,'product-1694008095047.jpg','luctus rutrum nulla tellus...','','h2,',1),(9,'Tapa de Asado',2560,'prenda4.png','integer aliquet massa id lobortis...','','k3_',1),(10,'pellentesque',4552,'prenda5.png','enim in tempor turpis nec...','si','q2*',6),(11,'Chocotorta',900,'prenda5.png','enim in tempor turpis nec...','si','q2*',6),(12,'Coca Cola',900,'prenda5.png','enim in tempor turpis nec...','si','q2*',2),(13,'Pepsi',800,'product-1693963816348.jpg','Refrescate con la nueva Pepsi','no',NULL,2);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` varchar(45) NOT NULL,
  `username` varchar(16) NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(80) NOT NULL,
  `type` varchar(10) NOT NULL DEFAULT 'Customer',
  `avatar` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('1f862d08-c290-47b4-b1af-8fa43a2ed828','juanmorales','juanmoralesp19@gmail.com','$2a$10$xNnUC6CfYnSv.qGzzh.KS.La6Gdgsn2TgeOEygmhppQ1wUlFCC/7u','Admin','user-1694012920115.jpg'),('7f6fdcc4-9802-4089-a806-35f86791b616','juanmorales10','test@gmail.com','$2a$10$YraqIQqg1tpxRYFCem7zaefFjXFDjF8Rn2vCeSuOTD1.f6Vf4cNNC','Customer','user-1693941549839.jpg'),('c02dee18-ef3b-4fe1-978c-46d36af059b1','santi','santi@gmail.com','$2a$10$MrwSqDDmRL5LGS1.AvvMfO/6gILLbBXC3chkDeYn/NjhCAyIptUc6','Admin','user-1693954911951.jpg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-25 11:52:07
