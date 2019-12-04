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

  <!-- Bootstrap core CSS -->
  <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="../css/modern-business.css" rel="stylesheet">
  <link href = "../css/movieinfo.css" rel="stylesheet">
  <link href="../css/moviepage.css" rel="stylesheet">
</head>

<body>

    <!-- Navigation -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="../index.php"><!---영화관이름 -->국민영화관</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item"> <!---메뉴바---->
                  <?php include "../lib/login_success.php" ?>
              </li>
              <li class="nav-item"> <!---메뉴바---->
                  <?php include "../lib/top_login1.php" ?> <!--로그인 화면-->
              </li>
              <li class="nav-item">
                  <?php include "../lib/top_signup.php" ?></a> <!--회원가입화면-->
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="../mypage.php">MYPAGE</a> <!--마이페이지-->
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="../services.php">예매</a> <!--영화예매페이지-->
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="../movieinfo.php">영화</a> <!--영화정보페이지-->
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      관리자 메뉴
                  </a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                  <a class="dropdown-item" href="../staff.php">직원 관리</a>
                  <a class="dropdown-item" href="../portfolio-2-col.html">매출 관리</a>
                  </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <?php 
        $conn = mysqli_connect("localhost", "root", "root", "movie_theater");
        $select = "SELECT * FROM movie_theater.movies WHERE m_idx=3";
        $result = mysqli_query($conn, $select); 
        $row = mysqli_fetch_array($result);
    ?>

  <!-- Page Content -->
  <div class="container">

    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">
        <?php echo $row[1]; ?>
    </h1>

    <hr>
    <div class = "box-image">
    <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82463/82463_185.jpg" alt="신의 한 수">
                </div>
                
                <br>

                <div class = "box-content">
                    <div class = "m_actors">
                        <span>출연 : <?php echo $row[2]; ?></span>
                    </div>

                    <div class ="m_ratings">
                        <span><?php echo $row[3]; ?> </span>
                    </div>

                    <div class = "m_grade">
                        <span>평점: <?php echo $row[4]; ?> </span>
                    <div>
                    <br>
                    <div class = "m_content">
                        
                        <span><strong>줄거리</strong> <br> <?php echo $row[5]; ?> </span>
                    </div>

                </div>


    <!-- Content Row -->
    <div class="row">

    <!-- In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
    <div class="row">
      <div class="col-lg-8 mb-4">


      </div>

    </div>
    <!-- /.row -->

  </div>
  <!-- /.container -->

  <!-- Footer -->
  <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">Copyright &copy; CSE3010 국민체조 2019</p>
    </div>
    <!-- /.container -->
  </footer>

  <!-- Bootstrap core JavaScript -->
  <script src="../vendor/jquery/jquery.min.js"></script>
  <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  
</body>

</html>
