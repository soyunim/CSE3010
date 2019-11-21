<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>국민영화관</title>

  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <script>

      function check_id(){

          window.open("check_id.php?id="+document.member_form.id.value ,"IDcheck","left=200,top=200,width=200,height=60,scrollbars=no, resizable=yes");
      }


      function check_input(){

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
              <a class="nav-link" href="services.html">예매</a> <!--영화예매페이지-->
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">영화</a> <!--영화정보페이지-->
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                관리자 메뉴
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                <a class="dropdown-item" href="portfolio-1-col.html">직원 관리</a>
                <a class="dropdown-item" href="portfolio-2-col.html">매출 관리</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  <!-- Page Content -->
  <div class="container">

      <div id="col2">

          <form name="member_form" method="post" action="ModifyPro.php">

              <div id="content">
                <div id="col2">
                      <div id="form_join">

                          <div id="join1">

                              <ul>
                                  <li>* 비밀번호</li>
                                  <li>* 비밀번호 확인</li>
                                  <li>* 휴대폰</li>
                                  <li>&nbsp;&nbsp;&nbsp;이메일</li>
                              </ul>

                          </div>
                          <div id="join2">

                              <ul>
                                  <li><input type="password" name="pass" required></li>

                                  <li><input type="password" name="pass_confirm" required></li>


                                  <li><input type=“text" class=“hp” name=“hp1“ value="010"> - <input type="text" class="hp" name="hp2"> - <input type="text" class="hp" name="hp3"></li>

                                  <li><input type="text" id="email1" name="email1"> @ <input type="text" name="email2"></li>

                              </ul>

                           </div>

                           <div class="clear"></div>

                           <div id="must"> * 는 필수 입력항목입니다.^^</div>

                       </div>

                       <div id="button"><a href="#"><img src="./img/button_save.gif"
                           onclick="check_input()"></a>&nbsp;&nbsp;
                           <a href="index.php"><img src="./img/button_reset.gif" onclick="reset_form()"></a>

                       </div>
                   </div>
               </div>

          </form>

      </div> <!-- end of col2 -->

  </div>
  <!-- /.container -->

  <!-- Footer -->
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
