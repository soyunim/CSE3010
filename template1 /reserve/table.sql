-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- 생성 시간: 19-12-04 14:54
-- 서버 버전: 5.7.26
-- PHP 버전: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- 데이터베이스: `movie_theater`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `showing_info`
--

CREATE TABLE `showing_info` (
  `movie_date` date NOT NULL,
  `movie_start_time` time NOT NULL,
  `movie_end_time` time DEFAULT NULL,
  `title` varchar(20) NOT NULL,
  `branch_name` varchar(10) NOT NULL,
  `Screen` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `showing_info`
--

INSERT INTO `showing_info` (`movie_date`, `movie_start_time`, `movie_end_time`, `title`, `branch_name`, `Screen`) VALUES
('2019-12-04', '23:41:00', '24:00:00', '겨울왕국2', '에리카영화관', '1관'),
('2019-12-04', '22:00:00', '23:00:00', '겨울왕국2', '에리카영화관', '1관'),
('2019-12-04', '10:00:00', '18:00:00', '조커', '국민영화관', '1관');


-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- 생성 시간: 19-12-04 14:57
-- 서버 버전: 5.7.26
-- PHP 버전: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- 데이터베이스: `movie_theater`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `reservation_info`
--

CREATE TABLE `reservation_info` (
  `reserve_code` int(11) NOT NULL,
  `branch_name` varchar(100) DEFAULT NULL,
  `id` varchar(20) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `movie_date` date DEFAULT NULL,
  `movie_start_time` time(6) DEFAULT NULL,
  `movie_end_time` time(6) DEFAULT NULL,
  `seat` varchar(20) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `screen` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `reservation_info`
--
ALTER TABLE `reservation_info`
  ADD PRIMARY KEY (`reserve_code`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `reservation_info`
--
ALTER TABLE `reservation_info`
  MODIFY `reserve_code` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
