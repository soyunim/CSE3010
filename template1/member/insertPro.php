<?php

$id = $_REQUEST["id"];
$pass = $_REQUEST["pass"];
$name = $_REQUEST["name"];
$birthday = $_REQUEST["birthday"];
$hp1 = $_REQUEST["hp1"];
$hp2 = $_REQUEST["hp2"];
$hp3 = $_REQUEST["hp3"];
$email1 = $_REQUEST["email1"];
$email2 = $_REQUEST["email2"];
$hp = $hp1."-".$hp2."-".$hp3;
$email = $email1."@".$email2;
require_once("../lib/MYDB.php");
$pdo = db_connect();



    try{

        $pdo->beginTransaction();

        $sql = "insert into movie_theater.member VALUES(?, ?, ?, ?, ?, ?, now(),default,0,0,0)";

        $stmh = $pdo->prepare($sql);
        $stmh->bindValue(1, $id, PDO::PARAM_STR);
        $stmh->bindValue(2, $pass, PDO::PARAM_STR);
        $stmh->bindValue(3, $name, PDO::PARAM_STR);
        $stmh->bindValue(4, $birthday, PDO::PARAM_STR);
        $stmh->bindValue(5, $hp, PDO::PARAM_STR);
        $stmh->bindValue(6, $email, PDO::PARAM_STR);
        $stmh->execute();
        $pdo->commit();

        header("Location:http://localhost:6563/template1/index.php");

    } catch (PDOException $Exception) {

        $pdo->rollBack();

        print "오류: ".$Exception->getMessage();
    }
 ?>
