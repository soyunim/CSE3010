

<?php
 session_start();

 $id = $_REQUEST["id"];
 $pw = $_REQUEST["pass"];

 require_once("../lib/MYDB.php");
 $pdo = db_connect();

 try {
     $sql = "select * from movie_theater.member where id = ? ";
     $stmh = $pdo->prepare($sql);
     $stmh->bindValue(1,$id,PDO::PARAM_STR);
     $stmh->execute();

     $count = $stmh->rowCount();
 } catch (PDOException $Exception) {
    print"오류:".$Exception->getMessage();
    }
 $row=$stmh->fetch(PDO::FETCH_ASSOC);

 if($count<1){
?>
<script>
    alert("아이디가 틀립니다!");
    history.back();
</script>
<?php
} elseif ($pw != $row["pass"]) {

?>
<script>
    alert("비밀번호가 틀립니다!");
    history.back();
</script>
<?php
} else{
        $_SESSION["userid"]=$row["id"];
        $_SESSION["userpw"]=$row["pass"];
        $_SESSION["membership_rating"]=$row["membership_rating"];

        header("Location:http://localhost:6563/template1/index.php");
        exit;
    }
?>