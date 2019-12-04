
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
        $staff_code = $_REQUEST["staff_code"];

        require_once("./lib/MYDB.php");
        $pdo = db_connect();

        try{
            $sql = "select * from movie_theater.staff where staff_code = ? ";
            $stmh = $pdo->prepare($sql);
            $stmh->bindValue(1, $staff_code, PDO::PARAM_STR);
            $stmh->execute();
            $count = $stmh->rowCount();


        } catch (PDOException $Exception){
            print "오류:".$Exception->getMessage();
        }

        if ($count<1) {
            print "검색결과가 없습니다.";
        }
        $row=$stmh->fetch(PDO::FETCH_ASSOC);




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
                      <a class="nav-link" href="mypage.php">MYPAGE</a> <!--마이페이지-->
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="services.php">예매</a> <!--영화예매페이지-->
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="movieinfo.php">영화</a> <!--영화정보페이지-->
                  </li>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          관리자 메뉴
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                      <a class="dropdown-item" href="staff.php">직원 관리</a>
                      <a class="dropdown-item" href="portfolio-2-col.html">매출 관리</a>
                      </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <div class="container_contentbox">

           <form name="member_form" method="post" action="./lib/staffmodPro.php?staff_code=<?=$staff_code?>">
               <div id="modifyform">
                   <h4>변경하실 회원정보를 입력하여주세요.</h4>
                   <div id="check">
                       <ul>
                           <li>* 직원 코드  : </li>
                           <li>* 직원 이름: </li>
                           <li>* 지점 : </li>
                           <li>* 직급 : </li>
                           <li>* 급여 : </li>
                           <li>* 연락처 : </li>

                       </ul>
                   </div>

                   <div id="modify">
                       <ul>
                           <li><?=$row["staff_code"]?> </li>
                           <li><?=$row["staff_name"]?> </li>
                           <li><input type = "text" name = "branch" value= "<?=$row["branch_name"]?>" required></li>
                           <li><input type = "text" name = "staff_rank" value= "<?=$row["staff_rank"]?>" required></li>
                           <li><input type = "text" name = "salary" value= "<?=$row["salary"]?>" required></li>
                           <li><input type = "text" name = "staff_phone" value= "<?=$row["staff_phone"]?>" required></li>
                           <li id="must">* 는 필수 입력항목입니다.^^</li>
                       </ul>
                   </div>
                   
                
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
