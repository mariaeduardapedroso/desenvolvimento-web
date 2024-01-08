-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 25/10/2023 às 20:13
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sistemavendas`
--

--
-- Despejando dados para a tabela `clientes`
--

INSERT INTO `clientes` (`id`, `nome`, `email`, `endereco`) VALUES
(6, 'lais', 'lais@gmail.com', 'londrina'),
(7, 'Maria Eduarda Pedrosov', 'maria.pedroso212133221122@gmail.comv', 'Apucaranav'),
(13, 'Maria Eduarda Pedroso2', 'maria.pedroso212133221122@gmail.com', 'Apucarana2'),
(16, 'Maria Eduarda Pedroso', 'maria.pedroso212133221122@gmail.com1', 'Apucarana');

--
-- Despejando dados para a tabela `pedidos`
--

INSERT INTO `pedidos` (`id`, `cliente_id`, `produto_id`, `quantidade`, `data`) VALUES
(18, 6, 2, 11, '2023-10-06'),
(19, 6, 2, 422, '2023-10-19'),
(20, 6, 2, 22, '2023-10-25'),
(21, 6, 2, 22, '2000-02-11'),
(22, 6, 2, 11, '2222-02-15');

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `descricao`, `preco`) VALUES
(1, 'sla', 'slalslal', 22.00),
(2, 'Maria Eduarda Pedroso22', 'fgfg22', 22.00),
(3, 'Maria Eduarda Pedroso', 'fgfg', 1.00),
(4, 'oi', 'uiy', 0.00),
(6, 'lais', 'q', 1.00),
(7, 'Maria Eduarda Pedroso', 'uiy', 1.00),
(8, 'isadora', 'fgfg22', 22.00);

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`) VALUES
(4, 'lais', 'lais@o.com.br', 'a2e63ee01401aaeca78be023dfbb8c59'),
(5, 'isadora', 'isa@isa.com', '5e9b9edbe4c007c65c56c686ea22c594'),
(7, 'Maria Eduarda Pedroso', 'oi@oi.com', '4fe330506e905a77d07db90836a6a11e'),
(9, 'isadora', 'dfgdf@fds', '36347412c7d30ae6fde3742bbc4f21b9'),
(11, 'Maria Eduarda Pedroso', 'lais@oi.com', 'b2ca678b4c936f905fb82f2733f5297f'),
(13, 'Maria Eduarda Pedroso', 'mary@maria.com', '698d51a19d8a121ce581499d7b701668');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
