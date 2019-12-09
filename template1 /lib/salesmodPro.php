<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

$branch_name = $_REQUEST["branch_name"];
$box = $_REQUEST["box"];
$con = $_REQUEST["con"];
$daytotal = $_REQUEST["daytotal"];
$acon = $_REQUEST["acon"];
$abox = $_REQUEST["abox"];
$atotal = $_REQUEST["atotal"];
require_once("MYDB.php");
echo $branch_name,$box,$con,$daytotal,$acon,$abox,$atotal;
$pdo = db_connect();


    try{

        $pdo->beginTransaction();

        $sql = "update movie_theater.branch set box=?,con=?,daytotal=?,acon=?,abox=?,atotal=? where branch_name =?";

        $stmh = $pdo->prepare($sql);
        $stmh->bindValue(1, $box, PDO::PARAM_INT);
        $stmh->bindValue(2, $con, PDO::PARAM_INT);
        $stmh->bindValue(3, $daytotal, PDO::PARAM_INT);
        $stmh->bindValue(4, $acon, PDO::PARAM_INT);
        $stmh->bindValue(5, $abox, PDO::PARAM_INT);
        $stmh->bindValue(6, $atotal, PDO::PARAM_INT);
        $stmh->bindValue(7,$branch_name, PDO::PARAM_STR);
        $stmh->execute();
        $pdo->commit();

        header("Location:../sales.php");

    } catch (PDOException $Exception) {

        $pdo->rollBack();

        print "오류: ".$Exception->getMessage();
    }
 ?>
