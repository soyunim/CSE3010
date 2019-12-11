<?php
include 'dbconnect.php';
extract($_POST);
$reserve_code = $_POST['code'];
$id = $_POST['id'];
$price = $_POST['price'];

$sql = "DELETE FROM reservation_info where reserve_code = $reserve_code";
$result = mysqli_query($dbconn, $sql);
$sql = "UPDATE member SET history = history - $price WHERE id = '$id'";
$result = mysqli_query($dbconn, $sql);



session_start();
$id = $_REQUEST["id"];
$pw = $_REQUEST["pass"];
require_once("../lib/MYDB.php");
$pdo = db_connect();
$sql = "select * from movie_theater.member where id = ? ";
$stmh = $pdo->prepare($sql);
$stmh->bindValue(1,$id,PDO::PARAM_STR);
$stmh->execute();
$row=$stmh->fetch(PDO::FETCH_ASSOC);

if($row["history"]>=100000 and $row["membership_rating"] == "Bronze"){
    $sql = "update movie_theater.member set membership_rating = 'Silver' where id = ?";
    $stmh = $pdo->prepare($sql);
    $stmh->bindValue(1,$id,PDO::PARAM_STR);
    $stmh->execute();


}
if($row["history"]>= 300000 and $row["membership_rating"] == "Silver"){
    $sql = "update movie_theater.member set membership_rating = 'Gold' where id = ?";
    $stmh = $pdo->prepare($sql);
    $stmh->bindValue(1,$id,PDO::PARAM_STR);
    $stmh->execute();

}
if($row["history"]>=500000 and $row["membership_rating"] == "Gold"){
    $sql = "update movie_theater.member set membership_rating = 'Platinum' here id = ?";
    $stmh = $pdo->prepare($sql);
    $stmh->bindValue(1,$id,PDO::PARAM_STR);
    $stmh->execute();

}
if($row["history"]<100000 and $row["membership_rating"] == "Silver"){
    $sql = "update movie_theater.member set membership_rating = 'Bronze' where id = ?";
    $stmh = $pdo->prepare($sql);
    $stmh->bindValue(1,$id,PDO::PARAM_STR);
    $stmh->execute();

}
if($row["history"]< 300000 and $row["membership_rating"] == "Gold"){
    $sql = "update movie_theater.member set membership_rating = 'Silver' id = ?";
    $stmh = $pdo->prepare($sql);
    $stmh->bindValue(1,$id,PDO::PARAM_STR);
    $stmh->execute();

}
if($row["history"]<500000 and $row["membership_rating"] == "Platinum"){
    $sql = "update movie_theater.member set membership_rating = 'Gold' where id = ? ";
    $stmh = $pdo->prepare($sql);
    $stmh->bindValue(1,$id,PDO::PARAM_STR);
    $stmh->execute();
}
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

mysqli_close($dbconn);

if($result){
    echo 1;
}
else {
    echo 0;
}
?>
