

<?php
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

} else{
         // 멤버쉽둥급상승
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
        echo "<script>location.href='../index.php'</script>";
        exit;
}
?>
