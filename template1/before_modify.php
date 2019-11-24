
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
  <link href="css/modern-business.css" rel="stylesheet">
  <link href = "./css/movieinfo.css" rel="stylesheet">

 <script>

      function check_pw(){
          if(document.member_form.pass.value != $_SESSION["pw"]){
              alert("비밀번호를확인해 주십시오");
              document.member_form.pass.focus();
              return;
          }
          document.member_form.submit();

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
  <div class="container contentbox">
     <h9>개인정보 확인을 위해 비밀번호를 다시 입력하여 주십시오.</h1>
     <form name="member_form" method="post" action="modify.php">
         <div id="check">
             <div id="check_id">
                 <ul>
                     <li>* 아이디  : </li>
                     <li>* 비밀번호 : </li>
                 </ul>
             </div>
             <div id="check_pw">
                 <ul>
                     <li> <?=$_SESSION["userpw"]?> 
                     <li><input type="password" name="pass" required></li>
                 </ul>
             </div>
         </div>

         <div id="button"><a href="#"><img src="./img/button_save.gif"
             onclick="check_pw()"></a>&nbsp;&nbsp;
             <a href="./index.php"><img src="./img/button_reset.gif" onclick="reset_form()"></a>

         </div>
    </form>
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
