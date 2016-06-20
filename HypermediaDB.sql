-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Jun 07, 2016 at 11:41 AM
-- Server version: 5.5.42
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `HypermediaDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `Assistenza`
--

CREATE TABLE `Assistenza` (
  `ID` int(11) NOT NULL,
  `Nome` varchar(255) NOT NULL,
  `Gruppo` varchar(255) NOT NULL,
  `Highlight` tinyint(1) NOT NULL,
  `Descrizione` text NOT NULL,
  `FAQ` text NOT NULL,
  `Immagine` varchar(255) NOT NULL,
  `Dispositivo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Dispositivi`
--

CREATE TABLE `Dispositivi` (
  `ID` int(11) NOT NULL,
  `Nome` varchar(255) NOT NULL,
  `Gruppo` varchar(255) NOT NULL,
  `Tipologia` varchar(255) NOT NULL,
  `Marca` varchar(255) NOT NULL,
  `Sistema Operativo` varchar(255) NOT NULL,
  `Prezzo` float NOT NULL,
  `Connessione` varchar(255) NOT NULL,
  `Acquisto` varchar(255) NOT NULL,
  `Immagine` text NOT NULL,
  `Descrizione` text NOT NULL,
  `Specifiche` text NOT NULL,
  `Promozione` tinyint(1) NOT NULL,
  `Assistenza` int(11) NOT NULL,
  `SmartLife` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `DispositiviAssistenza`
--

CREATE TABLE `DispositiviAssistenza` (
  `IDdisp` int(11) NOT NULL,
  `IDass` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `DispositiviSmartLife`
--

CREATE TABLE `DispositiviSmartLife` (
  `IDdisp` int(11) NOT NULL,
  `IDsl` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Gruppo`
--

CREATE TABLE `Gruppo` (
  `ID` int(11) NOT NULL,
  `Nome` varchar(255) NOT NULL,
  `Immagine` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `SmartLife`
--

CREATE TABLE `SmartLife` (
  `ID` int(11) NOT NULL,
  `Nome` int(11) NOT NULL,
  `Immagine` int(11) NOT NULL,
  `Gruppo` int(11) NOT NULL,
  `Titolo` text NOT NULL,
  `Descrizione` text NOT NULL,
  `FAQ` text NOT NULL,
  `Dispositivo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Assistenza`
--
ALTER TABLE `Assistenza`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Dispositivi`
--
ALTER TABLE `Dispositivi`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Gruppo`
--
ALTER TABLE `Gruppo`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `SmartLife`
--
ALTER TABLE `SmartLife`
  ADD PRIMARY KEY (`ID`);
