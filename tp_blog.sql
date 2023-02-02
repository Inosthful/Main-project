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
-- Base de données : `tp_blog`
--

-- --------------------------------------------------------

--
-- Structure de la table `t_category`
--

CREATE TABLE `t_category` (
  `id_category` int NOT NULL,
  `category_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `t_category`
--

INSERT INTO `t_category` (`id_category`, `category_name`) VALUES
(1, 'Worlds Valorant'),
(2, 'Worlds League of legends');

-- --------------------------------------------------------

--
-- Structure de la table `t_comment`
--

CREATE TABLE `t_comment` (
  `id_comment` int NOT NULL,
  `id_post` int NOT NULL,
  `id_user` int NOT NULL,
  `date` datetime NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `t_post`
--

CREATE TABLE `t_post` (
  `id_post` int NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `date` datetime NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `id_user` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `t_post`
--

INSERT INTO `t_post` (`id_post`, `title`, `date`, `content`, `picture`, `id_user`) VALUES
(2, 'Worlds Valorant Champions 2022', '2022-12-22 10:04:21', 'VALORANT Champions Tour 2022 is the second official tournament circuit by Riot Games. The circuit was announced on December 10th, 2021 with a blog post. [1]\r\n\r\nWinner : LOUD', 'https://esportsgen.com/wp-content/uploads/2021/06/images-2.jpeg', 7),
(3, 'Worlds Valorant Champions 2021', '2023-01-02 13:53:52', 'VALORANT Champions Tour 2021 is the first official tournament circuit by Riot Games. The circuit was announced on November 24th, 2020 with a blog post. [1]\r\n\r\nWinner : ACE', 'https://gumlet.assettype.com/afkgaming%2F2022-08%2F86ce823b-626e-43e7-bdb5-8b072ce9fe6a%2FUntitled_design___2022_08_18T124808_277__1_.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true', 7),
(4, 'Worlds 2020', '2023-01-03 07:58:49', 'The 2020 Season World Championship (Worlds 2020) is the conclusion of the 2020 League of Legends esports season. The tournament was held in Shanghai, China.\r\n\r\nWinner : DWG', 'https://static1.millenium.org/articles/6/36/67/26/@/1369617-179652-worlds2021-orig-1-1-article_m-1.jpg', 5),
(5, 'Worlds 2021', '2023-01-03 07:58:49', 'The 2021 Season League of Legends World Championship (Worlds 2021) is the conclusion of the 2021 League of Legends esports season. The Play-in stage begins on October 5, 2021. The main event begins on October 11, 2021.', 'https://i.ytimg.com/vi/rQal3ArvfrE/maxresdefault.jpg', 5),
(6, 'Worlds 2022', '2023-01-03 08:06:49', 'The 2022 Season World Championship (Worlds 2022) is the conclusion of the 2022 League of Legends esports season. The tournament will be held in North America.', 'https://www.team-aaa.com/upload/media/post_image/0001/09/04ae247e3d503b0983515587e377644f367844c5.jpeg', 5);

-- --------------------------------------------------------

--
-- Structure de la table `t_post_category`
--

CREATE TABLE `t_post_category` (
  `id_pc` int NOT NULL,
  `id_post` int NOT NULL,
  `id_category` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `t_post_category`
--

INSERT INTO `t_post_category` (`id_pc`, `id_post`, `id_category`) VALUES
(1, 2, 1),
(2, 2, 2),
(3, 3, 2);

-- --------------------------------------------------------

--
-- Structure de la table `t_user`
--

CREATE TABLE `t_user` (
  `id_user` int NOT NULL,
  `pseudo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `t_user`
--

INSERT INTO `t_user` (`id_user`, `pseudo`, `email`, `password`) VALUES
(1, 'Egregorion', 'master@afpa.fr', 'greg'),
(5, 'Enzo', 'inosthful@gmail.com', '$2y$10$qi1q2...wkSgEDvthpd35uUiWFJXO9S5fOQ34f2eR5PXPNxXzNlh6'),
(7, 'Samuel', 'samuelmail', '$2y$10$jzB92nbSYVmaD/Jn43M1tuXe7k2Wc2lmDWCki0UZm7A9gO92gd9h.'),
(8, 'Sofian', 'Sofianmail', '$2y$10$GMYN1/Up6JV0J.QQRwAD7eCgZ.3ywvodiXC6wyGEVJvb4Qoiwq8pi'),
(9, 'Enzo', 'fsdfs', '$2y$10$jlRGy2QWZSaML0fr7052Zu71k1iHqEMjlJ7G.LNjW7Gi6mUC3/Rsa'),
(11, 'Test', 'test@test.fr', '$2y$10$3tdObG2l6gwktgbairpfFOYwukqplvxsY0kSs5xblM67//8LmeFFy');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `t_category`
--
ALTER TABLE `t_category`
  ADD PRIMARY KEY (`id_category`);

--
-- Index pour la table `t_comment`
--
ALTER TABLE `t_comment`
  ADD PRIMARY KEY (`id_comment`),
  ADD KEY `index_post` (`id_post`),
  ADD KEY `id_user_fk` (`id_user`);

--
-- Index pour la table `t_post`
--
ALTER TABLE `t_post`
  ADD PRIMARY KEY (`id_post`),
  ADD KEY `id_user_fkpost` (`id_user`);

--
-- Index pour la table `t_post_category`
--
ALTER TABLE `t_post_category`
  ADD PRIMARY KEY (`id_pc`),
  ADD KEY `id_post_fkpc` (`id_post`),
  ADD KEY `id_category_fkcat` (`id_category`);

--
-- Index pour la table `t_user`
--
ALTER TABLE `t_user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `t_category`
--
ALTER TABLE `t_category`
  MODIFY `id_category` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `t_comment`
--
ALTER TABLE `t_comment`
  MODIFY `id_comment` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `t_post`
--
ALTER TABLE `t_post`
  MODIFY `id_post` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `t_post_category`
--
ALTER TABLE `t_post_category`
  MODIFY `id_pc` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `t_user`
--
ALTER TABLE `t_user`
  MODIFY `id_user` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `t_comment`
--
ALTER TABLE `t_comment`
  ADD CONSTRAINT `id_post_fk` FOREIGN KEY (`id_post`) REFERENCES `t_post` (`id_post`),
  ADD CONSTRAINT `id_user_fk` FOREIGN KEY (`id_user`) REFERENCES `t_user` (`id_user`);

--
-- Contraintes pour la table `t_post`
--
ALTER TABLE `t_post`
  ADD CONSTRAINT `id_user_fkpost` FOREIGN KEY (`id_user`) REFERENCES `t_user` (`id_user`);

--
-- Contraintes pour la table `t_post_category`
--
ALTER TABLE `t_post_category`
  ADD CONSTRAINT `id_category_fkcat` FOREIGN KEY (`id_category`) REFERENCES `t_category` (`id_category`),
  ADD CONSTRAINT `id_post_fkpc` FOREIGN KEY (`id_post`) REFERENCES `t_post` (`id_post`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
