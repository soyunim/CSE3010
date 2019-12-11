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
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="css/modern-business.css" rel="stylesheet">
  <link href = "./css/movieinfo.css" rel="stylesheet">

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
            <li class="nav-item this_margin"> <!---메뉴바---->
                <?php include "./lib/login_success.php" ?>
            </li>
            <li class="nav-item this_margin"> <!---메뉴바---->
                <?php include "./lib/top_login1.php" ?> <!--로그인 화면-->
            </li>
            <li class="nav-item this_margin">
                <?php include "./lib/top_signup.php" ?></a> <!--회원가입화면-->
            </li>
            <li class="nav-item this_margin">
            <?php
                  if(!isset($_SESSION["userid"])){
                  ?><a class="nav-link" href="" OnClick="alert('로그인이 필요합니다.');">MYPAGE</a><?php   //<!--마이페이지-->
                  }
                  else{
                    ?><a class="nav-link" href="./mypage.php">MYPAGE</a><?php
                  }
                  ?>
            </li>
            <li class="nav-item this_margin">
            <?php
              if(!isset($_SESSION["userid"])){
              ?><a class="nav-link" href="" OnClick="alert('로그인이 필요합니다.');">예매</a><?php
              }
              else{
                ?><a class="nav-link" href="services.php">예매</a><?php
              }
              ?><!--영화예매페이지-->
            </li>
            <li class="nav-item this_margin">
                <a class="nav-link" href="movieinfo.php">영화</a> <!--영화정보페이지-->
            </li>
            <li class="nav-item  this_margin dropdown">
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
  <!-- Page Content -->
  <div class="container">

    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">
        Movie Chart
    </h1>

    <hr>


    <!-- Content Row -->
    <div class="row">

      <!-- Movie List -->
      <div class="col-lg-4 mb-4">
        <h4><strong>현재 상영작</strong>/<a href="set_released.php">개봉 예정작</a></h4>
        <?php
            $conn = mysqli_connect("localhost", "root", "root", "movie_theater");
            $select = "SELECT title,actors,rating,grade FROM movie_theater.movies WHERE m_idx=1";
            $result = mysqli_query($conn, $select);
            $row = mysqli_fetch_array($result);
        ?>
        <ol class = "movielist"> <!-- 1위~4위 -->
            <li>
                <div class = "box_rank">
                    <span><strong>1위</strong></span>
                </div>

                <div class = "box-image">
                    <a href="./movieinfo/겨울왕국2.php"><img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82014/82014_185.jpg" alt="겨울왕국2"></a>
                </div>

                <div class = "box-content">
                    <div class = "m_title">
                        <span><?php echo $row[0]; ?></span>
                    </div>

                    <div class = "m_actors">
                        <span>출연 : <?php echo $row[1]; ?> </span>
                    </div>

                    <div class ="m_ratings">
                        <span><?php echo $row[2]; ?> </span>
                    </div>

                    <div class = "m_grade">
                        <span>평점: <?php echo $row[3]; ?> </span>
                    <div>
                </div>
            </li>
            <?php
            $conn = mysqli_connect("localhost", "root", "root", "movie_theater");
            $select1 = "SELECT title,actors,rating,grade FROM movie_theater.movies WHERE m_idx=2";
            $result1 = mysqli_query($conn, $select1);
            $row1 = mysqli_fetch_array($result1);
            ?>
            <li>
                <div class = "box_rank">
                    <span><strong>2위</strong></span>
                </div>
                <div class = "box-image">
                    <a href="movieinfo/blackmoney.php"><img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82481/82481_185.jpg" alt="블랙머니"></a>
                </div>

                <div class = "box-content">
                    <div class = "m_title">
                        <span><?php echo $row1[0]; ?></span>
                    </div>

                    <div class = "m_actors">
                        <span>출연 : <?php echo $row1[1]; ?> </span>
                    </div>

                    <div class ="m_ratings">
                        <span><?php echo $row1[2]; ?> </span>
                    </div>

                    <div class = "m_grade">
                        <span>평점: <?php echo $row1[3]; ?> </span>
                    <div>
                </div>
            </li>
            <?php
            $conn = mysqli_connect("localhost", "root", "root", "movie_theater");
            $select2 = "SELECT title,actors,rating,grade FROM movie_theater.movies WHERE m_idx=3";
            $result2 = mysqli_query($conn, $select2);
            $row2 = mysqli_fetch_array($result2);
            ?>
            <li>
            <div class = "box_rank">
                    <span><strong>3위</strong></span>
                </div>
                <div class = "box-image">
                    <a href="./movieinfo/divinemove2.php"><img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82463/82463_185.jpg" alt="신의 한 수"></a>
                </div>

                <div class = "box-content">
                    <div class = "m_title">
                        <span><?php echo $row2[0]; ?></span>
                    </div>

                    <div class = "m_actors">
                        <span>출연 : <?php echo $row2[1]; ?> </span>
                    </div>

                    <div class ="m_ratings">
                        <span><?php echo $row2[2]; ?> </span>
                    </div>

                    <div class = "m_grade">
                        <span>평점: <?php echo $row2[3]; ?> </span>
                    <div>
                </div>
            </li>
            <?php
            $conn = mysqli_connect("localhost", "root", "root", "movie_theater");
            $select3 = "SELECT title,actors,rating,grade FROM movie_theater.movies WHERE m_idx=4";
            $result3 = mysqli_query($conn, $select3);
            $row3 = mysqli_fetch_array($result3);
            ?>
            <li>
            <div class = "box_rank">
                    <span><strong>4위</strong></span>
                </div>
                <div class = "box-image">
                    <a href="./movieinfo/kimjiyoung.php"><img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82427/82427_185.jpg" alt="82년생 김지영"></a>
                </div>

                <div class = "box-content">
                    <div class = "m_title">
                        <span><?php echo $row3[0]; ?></span>
                    </div>

                    <div class = "m_actors">
                        <span>출연 : <?php echo $row3[1]; ?> </span>
                    </div>

                    <div class ="m_ratings">
                        <span><?php echo $row3[2]; ?> </span>
                    </div>

                    <div class = "m_grade">
                        <span>평점: <?php echo $row3[3]; ?> </span>
                    <div>
                </div>
            </li>

        </ol>

        <ol class = "movielist">
            <?php
            $conn = mysqli_connect("localhost", "root", "root", "movie_theater");
            $select4 = "SELECT title,actors,rating,grade FROM movie_theater.movies WHERE m_idx=5";
            $result4 = mysqli_query($conn, $select4);
            $row4 = mysqli_fetch_array($result4);
            ?>
            <li>
                <div class = "box_rank">
                    <span><strong>5위</strong></span>
                </div>

                <div class = "box-image">
                    <a href="./movieinfo/moonlit.php"><img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82379/82379_185.jpg" alt="윤희에게"></a>
                </div>

                <div class = "box-content">
                    <div class = "m_title">
                        <span><?php echo $row4[0]; ?></span>
                    </div>

                    <div class = "m_actors">
                        <span>출연 : <?php echo $row4[1]; ?> </span>
                    </div>

                    <div class ="m_ratings">
                        <span><?php echo $row4[2]; ?> </span>
                    </div>

                    <div class = "m_grade">
                        <span>평점: <?php echo $row4[3]; ?> </span>
                    <div>
                </div>
            </li>
            <?php
            $conn = mysqli_connect("localhost", "root", "root", "movie_theater");
            $select5 = "SELECT title,actors,rating,grade FROM movie_theater.movies WHERE m_idx=6";
            $result5 = mysqli_query($conn, $select5);
            $row5 = mysqli_fetch_array($result5);
            ?>
            <li>
                <div class = "box_rank">
                    <span><strong>6위</strong></span>
                </div>

                <div class = "box-image">
                    <a href="./movieinfo/terminator.php"><img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81895/81895_185.jpg" alt="터미네이터 : 다크 페이트"></a>
                </div>

                <div class = "box-content">
                    <div class = "m_title">
                        <span><?php echo $row5[0]; ?></span>
                    </div>

                    <div class = "m_actors">
                        <span>출연 : <?php echo $row5[1]; ?> </span>
                    </div>

                    <div class ="m_ratings">
                        <span><?php echo $row5[2]; ?> </span>
                    </div>

                    <div class = "m_grade">
                        <span>평점: <?php echo $row5[3]; ?> </span>
                    <div>
                </div>
            </li>
            <?php
            $conn = mysqli_connect("localhost", "root", "root", "movie_theater");
            $select6 = "SELECT title,actors,rating,grade FROM movie_theater.movies WHERE m_idx=7";
            $result6 = mysqli_query($conn, $select6);
            $row6 = mysqli_fetch_array($result6);
            ?>
            <li>
                <div class = "box_rank">
                    <span><strong>7위</strong></span>
                </div>

                <div class = "box-image">
                    <a href="./movieinfo/zombieland.php"><img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82530/82530_185.jpg" alt="좀비랜드"></a>
                </div>

                <div class = "box-content">
                    <div class = "m_title">
                        <span><?php echo $row6[0]; ?></span>
                    </div>

                    <div class = "m_actors">
                        <span>출연 : <?php echo $row6[1]; ?> </span>
                    </div>

                    <div class ="m_ratings">
                        <span><?php echo $row6[2]; ?> </span>
                    </div>

                    <div class = "m_grade">
                        <span>평점: <?php echo $row6[3]; ?> </span>
                    <div>
                </div>
            </li>







        </ol>

      </div>
    </div>
    <!-- /.row -->
    <?php mysqli_close($conn); ?>


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
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Contact form JavaScript -->
  <!-- Do not edit these files! In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
  <script src="js/jqBootstrapValidation.js"></script>
  <script src="js/contact_me.js"></script>

</body>

</html>
