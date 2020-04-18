-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Sam 18 Avril 2020 à 13:46
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `databaseprojectpiscine`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Mail` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `MotDePasse` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `Pseudo` varchar(255) COLLATE latin1_general_cs NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Mail` (`Mail`),
  UNIQUE KEY `Pseudo` (`Pseudo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE IF NOT EXISTS `client` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Mail` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `MotDePasse` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `Nom` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `Prenom` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `Adresse1` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `Adresse2` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `Ville` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `CodePostal` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `Pays` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `Telephone` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `TypeCarte` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `NumeroCarte` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `NomSurCarte` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `Expiration` date NOT NULL,
  `CodeSecurite` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `Background` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `Active` bit(1) NOT NULL DEFAULT b'1',
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Mail` (`Mail`),
  UNIQUE KEY `NumeroCarte` (`NumeroCarte`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs AUTO_INCREMENT=4 ;

--
-- Contenu de la table `client`
--

INSERT INTO `client` (`Id`, `Mail`, `MotDePasse`, `Nom`, `Prenom`, `Adresse1`, `Adresse2`, `Ville`, `CodePostal`, `Pays`, `Telephone`, `TypeCarte`, `NumeroCarte`, `NomSurCarte`, `Expiration`, `CodeSecurite`, `Background`, `Active`) VALUES
(1, 'pierre.herduin@edu.ece.fr', 'azerty123', 'Herduin', 'Pierre', '2 rue de la maison', NULL, 'Bussy', '77600', 'France', '0607080902', 'Visa', '1234567890', 'Michel', '2022-06-18', '1245', NULL, b'1'),
(3, 'ernest.popovici@edu.ece.fr', 'qwerty321', 'Popovici', 'Ernest', '1 place de chez toi', NULL, 'Paris', '75015', 'France', '0600982354', 'Visa', '0987654321', 'Georges', '2023-04-20', '0000', NULL, b'1');

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

CREATE TABLE IF NOT EXISTS `commande` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Client` int(11) NOT NULL,
  `Item` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `commande_fk_client` (`Client`),
  KEY `commande_fk_item` (`Item`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `enchere`
--

CREATE TABLE IF NOT EXISTS `enchere` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Item` int(11) NOT NULL,
  `Enchereur` int(11) NOT NULL,
  `Date` datetime NOT NULL,
  `Prix` float NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `Item` (`Item`),
  KEY `Enchereur` (`Enchereur`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `item`
--

CREATE TABLE IF NOT EXISTS `item` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `Description` mediumtext COLLATE latin1_general_cs NOT NULL,
  `Vendeur` int(11) NOT NULL,
  `Acheteur` int(11) DEFAULT NULL,
  `Vendu` bit(1) NOT NULL DEFAULT b'0',
  `Upload` date NOT NULL,
  `Expiration` date NOT NULL,
  `Enchere` bit(1) NOT NULL DEFAULT b'0',
  `Direct` bit(1) NOT NULL DEFAULT b'1',
  `Negociation` bit(1) NOT NULL DEFAULT b'0',
  `PrixDirect` float DEFAULT NULL,
  `PrixInitial` float DEFAULT NULL,
  `FinEnchere` date DEFAULT NULL,
  `PrixVente` float DEFAULT NULL,
  `TypeVente` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Vendeur` (`Vendeur`),
  UNIQUE KEY `Acheteur` (`Acheteur`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs AUTO_INCREMENT=4 ;

-- --------------------------------------------------------

--
-- Structure de la table `negociation`
--

CREATE TABLE IF NOT EXISTS `negociation` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Etape` int(11) NOT NULL,
  `Proposition` bit(1) NOT NULL DEFAULT b'1',
  `Client` int(11) DEFAULT NULL,
  `Vendeur` int(11) DEFAULT NULL,
  `Prix` float DEFAULT NULL,
  `Accepete` bit(1) NOT NULL DEFAULT b'0',
  `Item` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `negociation_fk_client` (`Client`),
  KEY `negociation_fk_vendeur` (`Vendeur`),
  KEY `negociation_fk_item` (`Item`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `panier`
--

CREATE TABLE IF NOT EXISTS `panier` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Client` int(11) NOT NULL,
  `Item` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `panier_fk_client` (`Client`),
  KEY `panier_fk_item` (`Item`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `vendeur`
--

CREATE TABLE IF NOT EXISTS `vendeur` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Mail` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `MotDePasse` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `Nom` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `Prenom` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `BIC` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `IBAN` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `Background` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `Active` bit(1) NOT NULL DEFAULT b'1',
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Mail` (`Mail`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs AUTO_INCREMENT=3 ;

--
-- Contenu de la table `vendeur`
--

INSERT INTO `vendeur` (`Id`, `Mail`, `MotDePasse`, `Nom`, `Prenom`, `BIC`, `IBAN`, `Background`, `Active`) VALUES
(1, 'pierre.herduin@edu.ece.fr', 'azerty123', 'Herduin', 'Pierre', '12345', '67890', NULL, b'1'),
(2, 'ernest.popovici@edu.ece.fr', 'qwerty321', 'Popovici', 'Ernest', '12345', '67890', NULL, b'1');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `commande`
--
ALTER TABLE `commande`
  ADD CONSTRAINT `commande_fk_item` FOREIGN KEY (`Item`) REFERENCES `item` (`Id`),
  ADD CONSTRAINT `commande_fk_client` FOREIGN KEY (`Client`) REFERENCES `client` (`Id`);

--
-- Contraintes pour la table `enchere`
--
ALTER TABLE `enchere`
  ADD CONSTRAINT `enchere_fk_enchereur` FOREIGN KEY (`Enchereur`) REFERENCES `client` (`Id`),
  ADD CONSTRAINT `enchere_fk_item` FOREIGN KEY (`Item`) REFERENCES `item` (`Id`);

--
-- Contraintes pour la table `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `item_fk_vendeur` FOREIGN KEY (`Vendeur`) REFERENCES `vendeur` (`Id`),
  ADD CONSTRAINT `item_fk_acheteur` FOREIGN KEY (`Acheteur`) REFERENCES `client` (`Id`);

--
-- Contraintes pour la table `negociation`
--
ALTER TABLE `negociation`
  ADD CONSTRAINT `negociation_fk_item` FOREIGN KEY (`Item`) REFERENCES `item` (`Id`),
  ADD CONSTRAINT `negociation_fk_client` FOREIGN KEY (`Client`) REFERENCES `client` (`Id`),
  ADD CONSTRAINT `negociation_fk_vendeur` FOREIGN KEY (`Vendeur`) REFERENCES `vendeur` (`Id`);

--
-- Contraintes pour la table `panier`
--
ALTER TABLE `panier`
  ADD CONSTRAINT `panier_fk_item` FOREIGN KEY (`Item`) REFERENCES `item` (`Id`),
  ADD CONSTRAINT `panier_fk_client` FOREIGN KEY (`Client`) REFERENCES `client` (`Id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
