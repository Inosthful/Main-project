-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mar. 31 jan. 2023 à 15:05
-- Version du serveur : 8.0.30
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `crud`
--

-- --------------------------------------------------------

--
-- Structure de la table `t_formation`
--

CREATE TABLE `t_formation` (
  `idFormation` int NOT NULL,
  `titreFormation` varchar(255) NOT NULL,
  `acronyme` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `t_formation`
--

INSERT INTO `t_formation` (`idFormation`, `titreFormation`, `acronyme`) VALUES
(1, 'Développeur Web et Web Mobile', 'DWWM'),
(2, 'Concepteur Développeur d\'Applications', 'CDA');

-- --------------------------------------------------------

--
-- Structure de la table `t_stagiaire`
--

CREATE TABLE `t_stagiaire` (
  `idStagiaire` int NOT NULL,
  `nomStagiaire` varchar(100) NOT NULL,
  `prenomStagiaire` varchar(100) NOT NULL,
  `dateNaisStagiaire` date NOT NULL,
  `civiliteStagiaire` varchar(15) NOT NULL,
  `adressStagiaire` varchar(255) NOT NULL,
  `idVille` int NOT NULL,
  `mailStagiaire` varchar(20) NOT NULL,
  `idformation` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `t_stagiaire`
--

INSERT INTO `t_stagiaire` (`idStagiaire`, `nomStagiaire`, `prenomStagiaire`, `dateNaisStagiaire`, `civiliteStagiaire`, `adressStagiaire`, `idVille`, `mailStagiaire`, `idformation`) VALUES
(1, 'Houlala', 'Anthony', '2000-09-06', 'M.', '24 rue des Ferrailleurs', 1, 'toto77@houlala.org', 2),
(2, 'Totov', 'Toto Totovitch', '1989-01-01', 'M.', '42 impasse des Petits Chiens', 2, 'toto@totallylegit.ru', 1),
(9, 'De Vil', 'Satanas', '1988-09-06', 'M.', '666 avenue du Désespoir', 1, 'satanas@dtc.lol', 1),
(10, 'Démonte-Pneu', 'Marceline', '2001-08-13', 'Mme', '321 place Immense', 2, 'marceline@gg.fr', 2),
(11, 'Chouquette', 'Louison-Adélaïde', '1999-03-21', 'Mme', '9 rue Haute', 1, 'loulou@youpi.fr', 1),
(12, 'Capsule', 'Barbara', '1997-08-14', 'Mme', '77 rue de la Chance', 2, 'barb@destroy.com', 2),
(13, 'Camus', 'Serge-Henri', '1945-01-02', 'M.', '2 place de l\'Univers', 1, 'riri@camus.org', 1),
(14, 'Sandale', 'Frédérique', '1988-04-16', 'Mme', '36 quai des Éboueurs', 1, 'fred@nologo.net', 1);

-- --------------------------------------------------------

--
-- Structure de la table `t_users`
--

CREATE TABLE `t_users` (
  `idUser` int NOT NULL,
  `pseudoUser` varchar(255) NOT NULL,
  `mdpUser` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `t_users`
--

INSERT INTO `t_users` (`idUser`, `pseudoUser`, `mdpUser`) VALUES
(1, 'faaaa', '$2y$10$XzOT6dmk9gDqPbGWGJ4r8OEfvJCu11p1d7RuSpCTd.81UKeeoJ/Wy'),
(3, 'Abdul', '$2y$10$8t3kE78WL5WdqVn5NZEc7ups.b/JZJ7bUWypxLcS.T1fwhGrbLIze'),
(6, 'samuel', '$2y$10$2zpAO/A/oP2feAFvQq55JuDHPaF7vZ.WNd5hxrLw8lPMCDV8L2wj6'),
(7, 'enzo', '$2y$10$yfvf/.EVOesVrStt1B2J.O5qpaJB.9//Vh3ajNll1m7l/xlmfdWSO'),
(9, 'julien', '$2y$10$4B/gsKYjKy8IHZQD3t0ki.13a8U8Bx4GAfFQSniEnlPZC6GJjXS4S');

-- --------------------------------------------------------

--
-- Structure de la table `t_ville`
--

CREATE TABLE `t_ville` (
  `idVille` int NOT NULL,
  `nomVille` varchar(100) NOT NULL,
  `cpVille` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `t_ville`
--

INSERT INTO `t_ville` (`idVille`, `nomVille`, `cpVille`) VALUES
(1, 'Melun', 77000),
(2, 'Montcucq', 46201),
(3, 'OUI', 15500),
(4, 'nfgdnj', 12455);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `t_formation`
--
ALTER TABLE `t_formation`
  ADD PRIMARY KEY (`idFormation`);

--
-- Index pour la table `t_stagiaire`
--
ALTER TABLE `t_stagiaire`
  ADD PRIMARY KEY (`idStagiaire`),
  ADD KEY `idVille_fk` (`idVille`),
  ADD KEY `idFormation` (`idformation`);

--
-- Index pour la table `t_users`
--
ALTER TABLE `t_users`
  ADD PRIMARY KEY (`idUser`);

--
-- Index pour la table `t_ville`
--
ALTER TABLE `t_ville`
  ADD PRIMARY KEY (`idVille`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `t_formation`
--
ALTER TABLE `t_formation`
  MODIFY `idFormation` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `t_stagiaire`
--
ALTER TABLE `t_stagiaire`
  MODIFY `idStagiaire` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `t_users`
--
ALTER TABLE `t_users`
  MODIFY `idUser` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `t_ville`
--
ALTER TABLE `t_ville`
  MODIFY `idVille` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `t_stagiaire`
--
ALTER TABLE `t_stagiaire`
  ADD CONSTRAINT `idFormation` FOREIGN KEY (`idformation`) REFERENCES `t_formation` (`idFormation`),
  ADD CONSTRAINT `idVille_fk` FOREIGN KEY (`idVille`) REFERENCES `t_ville` (`idVille`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
