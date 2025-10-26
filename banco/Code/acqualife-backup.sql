-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26/10/2025 às 05:28
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `acqualife`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `arduino`
--

CREATE TABLE `arduino` (
  `id` int(11) NOT NULL,
  `mac_address` varchar(17) NOT NULL,
  `ph` decimal(3,1) DEFAULT 0.0,
  `volume` int(11) DEFAULT 0,
  `volume2` int(11) DEFAULT 0,
  `id_user` int(11) DEFAULT NULL,
  `data_atualizacao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `arduino`
--

INSERT INTO `arduino` (`id`, `mac_address`, `ph`, `volume`, `volume2`, `id_user`, `data_atualizacao`) VALUES
(1, 'MAC_USER_25', 7.2, 750, 500, 25, '2025-10-26 03:19:05'),
(2, 'MAC_USER_26', 6.0, 200, 800, 26, '2025-10-26 04:23:48');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_user` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `telefone` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `data_criacao` timestamp NOT NULL DEFAULT current_timestamp(),
  `data_atualizacao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `ativo` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id_user`, `nome`, `telefone`, `email`, `senha`, `data_criacao`, `data_atualizacao`, `ativo`) VALUES
(25, 'admin', '(31) 99515-6342', 'admin@gmail.com', '$2y$10$5Ko4PcumEDF7UoSkOhfP5uQMJlrYvifvQJxiocFu.b.LFZ.dLAlVS', '2025-10-26 00:58:42', '2025-10-26 00:58:42', 1),
(26, 'pele', '(31) 99515-6342', 'pele@gmail.com', '$2y$10$btHrzmsxg7Kd30oxk6U7D.Oky4VoV78FU58wIgQ6bmgL/5ZSZLCfO', '2025-10-26 02:25:14', '2025-10-26 02:25:14', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `arduino`
--
ALTER TABLE `arduino`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mac_address` (`mac_address`),
  ADD KEY `id_user` (`id_user`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `arduino`
--
ALTER TABLE `arduino`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `arduino`
--
ALTER TABLE `arduino`
  ADD CONSTRAINT `arduino_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id_user`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
