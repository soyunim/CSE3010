<?php
    session_start();
?>
<meta charset="UTF-8">

<?php $pw = $_REQUEST["pw"];
    if(!$_SESSION["pw"] == $pw)
    {
        print "비밀번호를 확인하여주세요.<p>";
    }
    else
    {
        require_once("../lib/MYDB.php");
        $pdo = db_connect();
    try{
        $sql = "select * from member.member where id = ? ";
        $stmh = $pdo->prepare($sql);
        $stmh->bindValue(1,$id,PDO::PARAM_STR);
        $stmh->execute();
        $count = $stmh->rowCount();
    } catch (PDOException $Exception) {
        print "오류: ".$Exception->getMessage();
    }
        if($count<1){
            print "사용가능한 아이디입니다.<p>";
        }
        else{
            print "아이디가 중복됩니다.<br>다른 아이디를 사용해 주세요.<p>";
        }
    }
    print "<center><input type=button value=창닫기 onClick='self.close()'></center>";
?>
