<?php

$id = $_REQUEST["id"];
$pass = $_REQUEST["pass"];
$name = $_REQUEST["name"];
$hp1 = $_REQUEST["hp1"];
$hp2 = $_REQUEST["hp2"];
$hp3 = $_REQUEST["hp3"];
$email1 = $_REQUEST["email1"];
$email2 = $_REQUEST["email2"];
$hp = $hp1."-".$hp2."-".$hp3;
$email = $email1."@".$email2;
$regist_day=date("Y-m-d H:i:s");
require_once("MYDB.php");
$pdo = db_connect();



    try{

        $pdo->beginTransaction();

        $sql = "update member.member set pass=?,name=?,hp=?,email=?,regist_day=? where id =?";

        $stmh = $pdo->prepare($sql);
        $stmh->bindValue(1, $pass, PDO::PARAM_STR);
        $stmh->bindValue(2, $name, PDO::PARAM_STR);
        $stmh->bindValue(3, $hp, PDO::PARAM_STR);
        $stmh->bindValue(4, $email, PDO::PARAM_STR);
        $stmh->bindValue(5, $regist_day, PDO::PARAM_STR);
        $stmh->bindValue(6, $id, PDO::PARAM_STR);
        $stmh->execute();
        $pdo->commit();

        header("Location:http://localhost:6563/template1/index.php");

    } catch (PDOException $Exception) {

        $pdo->rollBack();

        print "오류: ".$Exception->getMessage();
    }
 ?>
