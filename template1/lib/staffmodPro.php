<?php

$staff_code = $_REQUEST["staff_code"];
$branch = $_REQUEST["branch"];
$staff_rank = $_REQUEST["staff_rank"];
$salary = $_REQUEST["salary"];
$staff_phone = $_REQUEST["staff_phone"];
require_once("MYDB.php");
$pdo = db_connect();


    try{

        $pdo->beginTransaction();

        $sql = "update movie_theater.staff set branch_name=?,staff_rank=?,salary=?,staff_phone=? where staff_code =?";

        $stmh = $pdo->prepare($sql);
        $stmh->bindValue(1, $branch, PDO::PARAM_STR);
        $stmh->bindValue(2, $staff_rank, PDO::PARAM_STR);
        $stmh->bindValue(3, $salary, PDO::PARAM_STR);
        $stmh->bindValue(4, $staff_phone, PDO::PARAM_STR);
        $stmh->bindValue(5, $staff_code, PDO::PARAM_STR);
        $stmh->execute();
        $pdo->commit();

        header("Location:../staff.php");

    } catch (PDOException $Exception) {

        $pdo->rollBack();

        print "오류: ".$Exception->getMessage();
    }
 ?>
