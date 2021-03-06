CREATE DATABASE ng_hosp_db;

USE ng_hosp_db;

DROP TABLE IF EXISTS `paciente`;
DROP TABLE IF EXISTS `cid`;

CREATE TABLE `cid` (
    `id` int NOT NULL AUTO_INCREMENT,
    `codigo` varchar(255) NOT NULL,
    `descricao` varchar(255) NOT NULL,
    `descricao_abreviada` varchar(60) DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  
CREATE TABLE `paciente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `cid_id` int DEFAULT NULL,
  `numero_prontuario_same` int DEFAULT NULL,
  `numero_prontuario_hygia` int DEFAULT NULL,
  `nome_mae` varchar(255) DEFAULT NULL,
  `sexo` char(1) DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  `data_diagnostico` date DEFAULT NULL,
  `criado_em` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `NR_SUS` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cid_id` (`cid_id`),
  CONSTRAINT `paciente_ibfk_1` FOREIGN KEY (`cid_id`) REFERENCES `cid` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=322287 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

