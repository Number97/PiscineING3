-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mar 21 Avril 2020 à 21:52
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs AUTO_INCREMENT=3 ;

--
-- Contenu de la table `admin`
--

INSERT INTO `admin` (`Id`, `Mail`, `MotDePasse`, `Pseudo`) VALUES
(1, 'ernest.popovici@edu.ece.fr', '654321', 'ErnestCP'),
(2, 'pierre.herduin@edu.ece.fr', '123456', 'PierreH');

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
  UNIQUE KEY `Mail` (`Mail`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs AUTO_INCREMENT=4 ;

--
-- Contenu de la table `client`
--

INSERT INTO `client` (`Id`, `Mail`, `MotDePasse`, `Nom`, `Prenom`, `Adresse1`, `Adresse2`, `Ville`, `CodePostal`, `Pays`, `Telephone`, `TypeCarte`, `NumeroCarte`, `NomSurCarte`, `Expiration`, `CodeSecurite`, `Background`, `Active`) VALUES
(1, 'pierre.herduin@edu.ece.fr', '123456', 'Herduin', 'Pierre', '2 rue de la maison', NULL, 'Bussy', '77600', 'France', '0607080902', 'Visa', '1234567890654321', 'Michel', '2022-06-18', '124', '../Backgrounds/Abstract 3.jpeg', b'1'),
(2, 'ernest.popovici@edu.ece.fr', '654321', 'Popovici', 'Ernest', '55 Avenue du projet piscine', NULL, 'Paris', '75015', 'France', '0600982354', 'Visa', '0987654321123456', 'Georges', '2023-04-20', '000', '../Backgrounds/Abstract 5.jpeg', b'1'),
(3, 'alexandre.bizord@edu.ece.fr', '123456', 'Bizord', 'Alexandre', '234 Rue Janvier', NULL, 'Paris', '75011', 'Paris', '0674839022', 'Visa', '9999777788883333', 'Alexandre Bizord', '2022-01-19', '111', '../Backgrounds/Colors', b'1');

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
  `PrixVente` float DEFAULT NULL,
  `TypeVente` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `Image` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `Categorie` varchar(255) COLLATE latin1_general_cs NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `Vendeur` (`Vendeur`) USING BTREE,
  KEY `Acheteur` (`Acheteur`) USING BTREE
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs AUTO_INCREMENT=35 ;

--
-- Contenu de la table `item`
--

INSERT INTO `item` (`Id`, `Nom`, `Description`, `Vendeur`, `Acheteur`, `Vendu`, `Upload`, `Expiration`, `Enchere`, `Direct`, `Negociation`, `PrixDirect`, `PrixInitial`, `PrixVente`, `TypeVente`, `Image`, `Categorie`) VALUES
(0, 'Melange de metaux prets a etre recycles', 'Lorsqu''on parle de recyclage des metaux, on parle en fait du recyclage de l''acier et de l''aluminium. Abandonne dans la nature, l''acier rouille et met entre 5 et 10 ans e disparaitre. Recycle sous forme de ferrailles, il fournit 47% de l''acier francais. L''aluminium est quant a lui 100% recyclable, et a l''instar du verre, on peut le recycler a l''infini ! Le recyclage de l''aluminium permet une economie energetique non negligeable : 95% de l''energie necessaire a la production de l''aluminium premiere fusion !', 1, NULL, b'0', '2020-04-06', '2020-05-29', b'0', b'1', b'0', 5470, NULL, NULL, NULL, '../Articles/0.jpeg', 'Ferraille ou Tresor'),
(1, 'Tresor de Barbebleue', 'Barbebleue n''est pas un pirate comme les autres : il n''a ni jambe de bois, ni crochet, ni drapeau a tete de mort et surtout, il n''est pas mechant et deteste se battre.', 2, NULL, b'0', '2020-04-05', '2020-06-11', b'1', b'0', b'0', NULL, 50000, NULL, NULL, '../Articles/1.jpeg', 'Ferraille ou Tresor'),
(2, 'Chercheur de tresor', 'Profondeur souterraine de recherche de tresor de chercheur d''or de detecteur de metaux AS94423 d''or de profondeur de 5m.', 3, NULL, b'0', '2020-04-08', '2020-07-30', b'1', b'1', b'0', 500, 200, NULL, NULL, '../Articles/2.jpeg', 'Ferraille ou Tresor'),
(3, 'Paquet de clous en cuivre', 'Avec sa longueur de 10 mm et sa tige de 0.4 mm de diametre, le clou en cuivre est le plus petit clou fabrique au XXeme siecle en France. Il temoigne de tout notre savoir-faire francais et peut servir a regler certaines machines. Paquet de 600 clous.', 3, NULL, b'0', '2020-04-08', '2020-07-30', b'0', b'1', b'0', 2190, NULL, NULL, NULL, '../Articles/3.jpeg', 'Ferraille ou Tresor'),
(4, 'Dessin antiviral', 'Une oeuvre d''art pour ne jamais oublier la crise pandemique de 2020 du coronavirus. Ca a change le monde et a eu un impact global majeur.', 2, NULL, b'0', '2020-04-08', '2020-07-30', b'0', b'0', b'1', NULL, NULL, NULL, NULL, '../Articles/4.jpeg', 'Bon pour le Musee'),
(5, 'Peinture d''un cadre vide', 'Cette peinture de Hurgen Mogo est de dimension 50x50cm, fait en 1988, represente ce que vous voulez qu''elle represente. Laissez votre imagination se dechainer quand vous regardez cette peinture. A chaque fois que vous la regardez, ce que votre imagination vous montre peut etre different.', 2, NULL, b'0', '2020-04-08', '2020-07-27', b'1', b'1', b'0', 24000, 6000, NULL, NULL, '../Articles/5.jpeg', 'Bon pour le Musee'),
(6, 'Peinture Desert', 'Peinture 1,5mx1m, huile sur toile, 2020, Jean Krodrick', 3, NULL, b'0', '2020-04-08', '2020-07-30', b'0', b'1', b'1', 430, NULL, NULL, NULL, '../Articles/6.jpeg', 'Bon pour le Musee'),
(7, 'Peinture port', 'Aujourd''hui, nous voulons voyager, mais les circonstances ne nous le permettent pas forcement. Cette peinture sera l''intermediaire pour vous de pouvoir vous plonger dans des reves tels qu''aller dans une croisiere.', 1, NULL, b'0', '2020-04-08', '2020-07-30', b'1', b'0', b'0', NULL, 750, NULL, NULL, '../Articles/7.jpeg', 'Bon pour le Musee'),
(8, 'Montre Or 24K', 'La montre la plus chere, classe, et qui pese le plus, est ici.', 1, NULL, b'0', '2020-04-08', '2020-07-30', b'1', b'1', b'0', 180000, 40000, NULL, NULL, '../Articles/8.jpeg', 'Accessoire VIP'),
(9, 'Valise stylee', 'Cette valise est normale, mais avec le fait qu''elle soit ROUGE, vous allez attirer l''attention de tout le monde !!!', 2, 1, b'1', '2020-04-08', '2020-04-11', b'0', b'1', b'1', 53000000, NULL, 36800700, 'Meilleure Offre', '../Articles/9.jpeg', 'Accessoire VIP'),
(10, 'Pack 3 valises', 'Un bon pack de trois valises pour une famille entiere. La combinaison de couleur n''est pas la meilleure, ce qui explique le prix baisse.', 3, NULL, b'0', '2020-04-08', '2020-07-30', b'1', b'0', b'0', NULL, 100, NULL, NULL, '../Articles/10.jpeg', 'Accessoire VIP'),
(11, 'La valise du futur', 'Cette valise a ete endentee en 2050, et a ete oubliee dans le present par un voyageur dans le temps du futur.', 3, NULL, b'0', '2020-04-30', '2020-07-06', b'0', b'1', b'0', 2300, NULL, NULL, NULL, '../Articles/11.jpeg', 'Accessoire VIP'),
(13, 'Chercheur de tresor', 'Profondeur souterraine de recherche de tresor de chercheur d''or de detecteur de metaux AS94423 d''or de profondeur de 5m.', 3, 1, b'1', '2020-04-08', '2020-07-30', b'1', b'1', b'0', 500, 200, 500, 'Achat Immediat', '../Articles/2.jpeg', 'Ferraille ou Tresor'),
(14, 'Peinture Desert', 'Peinture 1,5mx1m, huile sur toile, 2020, Jean Krodrick', 3, 2, b'1', '2020-04-08', '2020-07-30', b'0', b'1', b'1', 430, NULL, 410, 'Meilleure Offre', '../Articles/6.jpeg', 'Bon pour le Musee'),
(15, 'Melange de metaux prets a etre recycles', 'Lorsqu''on parle de recyclage des metaux, on parle en fait du recyclage de l''acier et de l''aluminium. Abandonne dans la nature, l''acier rouille et met entre 5 et 10 ans e disparaitre. Recycle sous forme de ferrailles, il fournit 47% de l''acier francais. L''aluminium est quant a lui 100% recyclable, et a l''instar du verre, on peut le recycler a l''infini ! Le recyclage de l''aluminium permet une economie energetique non negligeable : 95% de l''energie necessaire a la production de l''aluminium premiere fusion !', 1, 1, b'1', '2020-04-06', '2020-05-29', b'0', b'1', b'0', 5470, NULL, 5470, 'Achat Immediat', '../Articles/0.jpeg', 'Ferraille ou Tresor'),
(18, 'Dessin antiviral', 'Une oeuvre d''art pour ne jamais oublier la crise pandemique de 2020 du coronavirus. Ca a change le monde et a eu un impact global majeur.', 2, 3, b'1', '2020-04-08', '2020-07-30', b'0', b'0', b'1', NULL, NULL, 42451, 'Meilleure Offre', '../Articles/4.jpeg', 'Bon pour le Musee'),
(19, 'Dessin antiviral', 'Une oeuvre d''art pour ne jamais oublier la crise pandemique de 2020 du coronavirus. Ca a change le monde et a eu un impact global majeur.', 2, 2, b'1', '2020-04-08', '2020-06-22', b'0', b'0', b'1', NULL, NULL, 33, 'Meilleure Offre', '../Articles/4.jpeg', 'Bon pour le Musee'),
(20, 'Chercheur de tresor', 'Profondeur souterraine de recherche de tresor de chercheur d''or de detecteur de metaux AS94423 d''or de profondeur de 5m.', 3, 2, b'1', '2020-04-08', '2020-07-30', b'1', b'1', b'0', 500, 200, 270, 'Enchere', '../Articles/2.jpeg', 'Ferraille ou Tresor'),
(21, 'Paquet de clous en cuivre', 'Avec sa longueur de 10 mm et sa tige de 0.4 mm de diametre, le clou en cuivre est le plus petit clou fabrique au XXeme siecle en France. Il temoigne de tout notre savoir-faire francais et peut servir a regler certaines machines. Paquet de 600 clous.', 3, 1, b'1', '2020-04-08', '2020-07-30', b'0', b'1', b'0', 2190, NULL, 2190, 'Achat Immediat', '../Articles/3.jpeg', 'Ferraille ou Tresor'),
(22, 'Melange de metaux prets a etre recycles', 'Lorsqu''on parle de recyclage des metaux, on parle en fait du recyclage de l''acier et de l''aluminium. Abandonne dans la nature, l''acier rouille et met entre 5 et 10 ans e disparaitre. Recycle sous forme de ferrailles, il fournit 47% de l''acier francais. L''aluminium est quant a lui 100% recyclable, et a l''instar du verre, on peut le recycler a l''infini ! Le recyclage de l''aluminium permet une economie energetique non negligeable : 95% de l''energie necessaire a la production de l''aluminium premiere fusion !', 1, 2, b'1', '2020-04-06', '2020-05-29', b'0', b'1', b'0', 5470, NULL, 5470, 'Achat Immediat', '../Articles/0.jpeg', 'Ferraille ou Tresor'),
(23, 'Valise stylee', 'Cette valise est normale, mais avec le fait qu''elle soit ROUGE, vous allez attirer l''attention de tout le monde !!!', 2, NULL, b'0', '2020-04-08', '2020-07-30', b'0', b'1', b'1', 53000000, NULL, NULL, NULL, '../Articles/9.jpeg', 'Accessoire VIP');

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
  `type` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `prix` float NOT NULL,
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs AUTO_INCREMENT=4 ;

--
-- Contenu de la table `vendeur`
--

INSERT INTO `vendeur` (`Id`, `Mail`, `MotDePasse`, `Nom`, `Prenom`, `BIC`, `IBAN`, `Background`, `Active`) VALUES
(1, 'pierre.herduin@edu.ece.fr', '123456', 'Herduin', 'Pierre', 'AXABFRPP', 'FR76 1234 5678 9012 3456 789', '../Backgrounds/Pink Clouds.jpeg', b'1'),
(2, 'ernest.popovici@edu.ece.fr', '654321', 'Popovici', 'Ernest', 'AXABFRWW', 'FR66 2749 8130 0599 1298 333', '../Backgrounds/Abstract 1.jpeg', b'1'),
(3, 'michel.jean@edu.ece.fr', '123456', 'Jean', 'Michel', 'AKABFREE', 'FR11 9381 5431 8457 7354 345', '../Backgrounds/Abstract 1.jpeg', b'1');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `commande`
--
ALTER TABLE `commande`
  ADD CONSTRAINT `commande_fk_client` FOREIGN KEY (`Client`) REFERENCES `client` (`Id`),
  ADD CONSTRAINT `commande_fk_item` FOREIGN KEY (`Item`) REFERENCES `item` (`Id`);

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
  ADD CONSTRAINT `item_fk_vendeur` FOREIGN KEY (`Vendeur`) REFERENCES `vendeur` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `item_fk_acheteur` FOREIGN KEY (`Acheteur`) REFERENCES `client` (`Id`);

--
-- Contraintes pour la table `negociation`
--
ALTER TABLE `negociation`
  ADD CONSTRAINT `negociation_fk_client` FOREIGN KEY (`Client`) REFERENCES `client` (`Id`),
  ADD CONSTRAINT `negociation_fk_item` FOREIGN KEY (`Item`) REFERENCES `item` (`Id`),
  ADD CONSTRAINT `negociation_fk_vendeur` FOREIGN KEY (`Vendeur`) REFERENCES `vendeur` (`Id`);

--
-- Contraintes pour la table `panier`
--
ALTER TABLE `panier`
  ADD CONSTRAINT `panier_fk_client` FOREIGN KEY (`Client`) REFERENCES `client` (`Id`),
  ADD CONSTRAINT `panier_fk_item` FOREIGN KEY (`Item`) REFERENCES `item` (`Id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
