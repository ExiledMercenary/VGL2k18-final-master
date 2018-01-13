-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2018 at 09:08 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vgl`
--

-- --------------------------------------------------------

--
-- Table structure for table `vgl_database18`
--

CREATE TABLE `vgl_database18` (
  `Name` varchar(10) NOT NULL,
  `Lname` varchar(10) NOT NULL,
  `email` varchar(20) NOT NULL,
  `Phno` bigint(1) NOT NULL,
  `mesg` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vgl_database18`
--

INSERT INTO `vgl_database18` (`Name`, `Lname`, `email`, `Phno`, `mesg`) VALUES
('xexe', 'sdxsd', 'sxdx@exde', 2323, '232323'),
('jhvhjv', 'bjbkjb', 'hvhv@kjg', 5646487, 'jbvjklvjkv'),
('Nit', 'Sah', 'niteya.56@gmail.com', 8511108576, 'wdxaqc'),
('niteya', 'shah', 'niteya.56@gmail.com', 8511108577, 'wafkjbawkfv kawb ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `vgl_database18`
--
ALTER TABLE `vgl_database18`
  ADD PRIMARY KEY (`Phno`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
