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


if($row["history"]>=100000 and $row["membership_rating"] == "Bronze"){
    $sql = "update movie_theater.member set membership_rating = 'Silver' where id = ?";
    $stmh = $pdo->prepare($sql);
    $stmh->bindValue(1,$id,PDO::PARAM_STR);
    $stmh->execute();
?>
    <script>
        alert("멤버쉽 등급이 실버등급으로 상승하였습니다.");
    </script>
<?php
}
if($row["history"]>= 300000 and $row["membership_rating"] == "Silver"){
    $sql = "update movie_theater.member set membership_rating = 'Gold' where id = ?";
    $stmh = $pdo->prepare($sql);
    $stmh->bindValue(1,$id,PDO::PARAM_STR);
    $stmh->execute();
?>
    <script>
        alert("멤버쉽 등급이 골드등급으로 상승하였습니다.");
    </script>
<?php
}
if($row["history"]>=500000 and $row["membership_rating"] == "Gold"){
    $sql = "update movie_theater.member set membership_rating = 'Platinum' here id = ?";
    $stmh = $pdo->prepare($sql);
    $stmh->bindValue(1,$id,PDO::PARAM_STR);
    $stmh->execute();
?>
    <script>
        alert("멤버쉽 등급이 플래티넘등급으로 상승하였습니다.");
    </script>

<?php
}
if($row["history"]<100000 and $row["membership_rating"] == "Silver"){
    $sql = "update movie_theater.member set membership_rating = 'Bronze' where id = ?";
    $stmh = $pdo->prepare($sql);
    $stmh->bindValue(1,$id,PDO::PARAM_STR);
    $stmh->execute();
?>
    <script>
        alert("멤버쉽 등급이 브론즈등급으로 하락하였습니다.");
    </script>
<?php
}
if($row["history"]< 300000 and $row["membership_rating"] == "Gold"){
    $sql = "update movie_theater.member set membership_rating = 'Silver' id = ?";
    $stmh = $pdo->prepare($sql);
    $stmh->bindValue(1,$id,PDO::PARAM_STR);
    $stmh->execute();
?>
    <script>
        alert("멤버쉽 등급이 실버등급으로 하락하였습니다.");
    </script>
<?php
}
if($row["history"]<500000 and $row["membership_rating"] == "Platinum"){
    $sql = "update movie_theater.member set membership_rating = 'Gold' where id = ? ";
    $stmh = $pdo->prepare($sql);
    $stmh->bindValue(1,$id,PDO::PARAM_STR);
    $stmh->execute();
?>
    <script>
        alert("멤버쉽 등급이 골드등급으로 하락하였습니다.");
    </script>

<?php
mysqli_close($dbconn);


if($result){
    echo 1;
}
else {
    echo 0;
}
?>
