<?php
session_start();

$title = $_SESSION["title"];
$id = $_SESSION["userid"];
$grade = $_REQUEST["score"];
$review_contents = $_REQUEST["comment"];

require_once("../lib/MYDB.php");
$pdo = db_connect();



    try{

        $pdo->beginTransaction();

        $sql = "insert into movie_theater.review VALUES(default,? , ?, ?, now(), ?)";

        $stmh = $pdo->prepare($sql);
        $stmh->bindValue(1, $title, PDO::PARAM_STR);
        $stmh->bindValue(2, $id, PDO::PARAM_STR);
        $stmh->bindValue(3, $grade, PDO::PARAM_STR);
        $stmh->bindValue(4, $review_contents, PDO::PARAM_STR);
        $stmh->execute();
        $pdo->commit();

        header("Location:../index.php");
        

    } catch (PDOException $Exception) {

        $pdo->rollBack();

        print "오류: ".$Exception->getMessage();
    }
 ?>
