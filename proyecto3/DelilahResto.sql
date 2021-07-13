

CREATE DATABASE IF NOT EXISTS `delilahresto` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `delilahresto`;

CREATE TABLE IF NOT EXISTS `detallepedido` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `producto_id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_id` (`producto_id`),
  KEY `pedido_id` (`pedido_id`),
  CONSTRAINT `detallepedido_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE CASCADE,
  CONSTRAINT `detallepedido_ibfk_2` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `pedido` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `estado` enum('NUEVO','CONFIRMADO','PREPARANDO','ENVIADO','CANCELADO','ENTREGADO') NOT NULL,
  `formaPago` enum('TARJETA','EFECTIVO') NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `foto` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `precio` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombreUsuario` varchar(255) NOT NULL,
  `nombreYApellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` int(11) DEFAULT NULL,
  `direccion` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `esAdmin` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombreUsuario` (`nombreUsuario`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

