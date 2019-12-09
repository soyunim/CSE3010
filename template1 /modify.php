<?php
    session_start();
 ?>
 <!DOCTYPE html>
 <html>
     <head>
         <meta charset="utf-8">
         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
         <meta name="description" content="">
         <meta name="author" content="">

         <title>국민영화관</title>

         <link href="./vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
         <link href="./css/modern-business.css" rel="stylesheet">
        <script>

            function check_id(){

                window.open("check_id.php?id="+document.member_form.id.value ,"IDcheck","left=200,top=200,width=200,height=60,scrollbars=no, resizable=yes");
            }


            function check_input(){
                if(!document.member_form.pass.value || !document.member_form.pass_confirm.value ){
                    alert("비밀번호를 입력해주새요");
                    document.member_form.nick.focus();
                    return;
                }

                if(!document.member_form.hp2.value || !document.member_form.hp3.value ){
                    alert("휴대폰 번호를 입력하세요");
                    document.member_form.nick.focus();
                    return;
                }


                if(document.member_form.pass.value != document.member_form.pass_confirm.value){

                    alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");
                    document.member_form.pass.focus();
                    document.member_form.pass.select();
                    return;
                }

                document.member_form.submit();
            }
            function reset_form(){
                document.member_form.id.value = "";
                document.member_form.pass.value = "";
                document.member_form.pass_confirm.value = "";
                document.member_form.name.value = "";
                document.member_form.birthday.value = "";
                document.member_form.hp2.value = "";
                document.member_form.hp3.value = "";
                document.member_form.email1.value = "";
                document.member_form.email2.value = "";

                document.member_form.id.focus();

                return;
            }

        </script>

    </head>
    <?php
        $id = $_REQUEST["id"];

        require_once("./lib/MYDB.php");
        $pdo = db_connect();

        try{
            $sql = "select * from movie_theater.member where id = ? ";
            $stmh = $pdo->prepare($sql);
            $stmh->bindValue(1, $id, PDO::PARAM_STR);
            $stmh->execute();
            $count = $stmh->rowCount();


        } catch (PDOException $Exception){
            print "오류:".$Exception->getMessage();
        }

        if ($count<1) {
            print "검색결과가 없습니다.";
        }
        $row=$stmh->fetch(PDO::FETCH_ASSOC);
        $hp = explode("-",$row["hp"]);
        $hp3=$hp[2];
        $hp2=$hp[1];
        $email = explode("@",$row["email"]);
        $email1=$email[0];
        $email2=$email[1];
                //print_r($row);




    ?>

    <body>

        <!-- Navigation -->
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="index.php"><!---영화관이름 -->국민영화관</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item"> <!---메뉴바---->
                <?php include "./lib/login_success.php" ?>
            </li>
            <li class="nav-item"> <!---메뉴바---->
                <?php include "./lib/top_login1.php" ?> <!--로그인 화면-->
            </li>
            <li class="nav-item">
                <?php include "./lib/top_signup.php" ?></a> <!--회원가입화면-->
            </li>
            <li class="nav-item">
            <?php
                  if(!isset($_SESSION["userid"])){
                  ?><a class="nav-link" href="" OnClick="alert('로그인이 필요합니다.');">MYPAGE</a><?php   //<!--마이페이지-->
                  }
                  else{
                    ?><a class="nav-link" href="./mypage.php">MYPAGE</a><?php
                  }
                  ?>
            </li>
            <li class="nav-item">
            <?php
              if(!isset($_SESSION["userid"])){
              ?><a class="nav-link" href="" OnClick="alert('로그인이 필요합니다.');">예매</a><?php
              }
              else{
                ?><a class="nav-link" href="services.php">예매</a><?php
              }
              ?><!--영화예매페이지-->
            </li>
            <li class="nav-item">
                <a class="nav-link" href="movieinfo.php">영화</a> <!--영화정보페이지-->
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    관리자 메뉴
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                  <?php
                    if($_SESSION["permit"]==1){
                    ?> <a class="dropdown-item" href="staff.php">직원 관리</a><?php
                    }
                    else if(!isset($_SESSION["userid"])||$_SESSION["permit"]==0){
                      ?><a class="dropdown-item" href="" OnClick="alert('관리자 메뉴입니다.')";>직원 관리</a><?php
                    }
                    ?>
                  <?php
                    if($_SESSION["permit"]==1){
                    ?> <a class="dropdown-item" href="sales.php">매출 관리</a><?php
                    }
                    else if((!isset($_SESSION["userid"]))||$_SESSION["permit"]==0){
                      ?><a class="dropdown-item" href="" OnClick="alert('관리자 메뉴입니다.');"> 매출 관리</a><?php
                    }
                    ?>

                </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>


        <div class="container_contentbox">

           <form name="member_form" method="post" action="./lib/modifyPro.php?id=<?=$id?>">
               <div id="modifyform">
                   <h4>변경하실 회원정보를 입력하여주세요.</h4>
                   <div id="check">
                       <ul>
                           <li>* 아이디  : </li>
                           <li>* 변경할 비밀번호 : </li>
                           <li>* 비밀번호 확인 : </li>
                           <li>* 이름 : </li>
                           <li>* 휴대폰 : </li>
                           <li>&nbsp;&nbsp;&nbsp; 이메일 : </li>

                       </ul>
                   </div>

                   <div id="modify">
                       <ul>
                           <li><?=$row["id"]?> </li>
                           <li><input type = "password" name = "pass" value= "<?=$row["pass"]?>" required></li>
                           <li><input type = "password" name = "pass_confirm" value= "<?=$row["pass"]?>" required></li>
                           <li><input type = "text" name = "name" value= "<?=$row["name"]?>" required></li>
                           <li><input type="text" class="hp" name="hp1" value="010"> - <input type="text" class="hp" name="hp2" value="<?=$hp2?>"> - <input type="text" class="hp" name="hp3" value="<?=$hp3?>"></li>
                           <li><input type="text" id="email1" name="email1" value="<?=$email1?>"> @ <input type="text" id ="email2" name="email2" value="<?=$email2?>"></li>
                           <li id="must">* 는 필수 입력항목입니다.^^</li>
                       </ul>
                   </div>
            <?php}
            }
            ?>
                   <div class="clear"></div>

               </div>

               <div id="button"><a href="#"><img src="./img/button_save.gif"
                   onclick="check_input()"></a>&nbsp;&nbsp;
                   <a href="./index.php"><img src="./img/button_reset.gif" onclick="reset_form()"></a>

               </div>
          </form>
        </div>




        <footer class="py-5 bg-dark">
          <div class="container">
            <p class="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
          </div>
          <!-- /.container -->
        </footer>

        <!-- Bootstrap core JavaScript -->
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


    </body>
</html>
