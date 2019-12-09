<?php
session_start();

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

        $sql = "update movie_theater.member set pass=?,name=?,hp=?,email=?,regist_day=? where id =?";

        $stmh = $pdo->prepare($sql);
        $stmh->bindValue(1, $pass, PDO::PARAM_STR);
        $stmh->bindValue(2, $name, PDO::PARAM_STR);
        $stmh->bindValue(3, $hp, PDO::PARAM_STR);
        $stmh->bindValue(4, $email, PDO::PARAM_STR);
        $stmh->bindValue(5, $regist_day, PDO::PARAM_STR);
        $stmh->bindValue(6, $id, PDO::PARAM_STR);
        $stmh->execute();
        $pdo->commit();

        $sql = "select * from movie_theater.member where id = ? ";
        $stmh = $pdo->prepare($sql);
        $stmh->bindValue(1,$id,PDO::PARAM_STR);
        $stmh->execute();
        $row=$stmh->fetch(PDO::FETCH_ASSOC);

        $_SESSION["username"]=$row["name"];
        $_SESSION["userid"]=$row["id"];
        $_SESSION["userpw"]=$row["pass"];
        $_SESSION["userbirthday"]=$row["birthday"];
        $_SESSION["userhp"]=$row["hp"];
        $_SESSION["useremail"]=$row["email"];
        $_SESSION["membership_rating"]=$row["membership_rating"];
        $_SESSION["userpoint"]=$row["point"];
        $_SESSION["usercoupon"]=$row["coupon"];
        $_SESSION["userhistory"]=$row["history"];
        $_SESSION["permit"] =$row["permit"];

        header("Location:../index.php");

    } catch (PDOException $Exception) {

        $pdo->rollBack();

        print "오류: ".$Exception->getMessage();
    }
 ?>
