<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>국민영화관</title>

        <!-- Bootstrap core CSS -->
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <!-- Custom styles for this template -->
        <link href="css/modern-business.css" rel="stylesheet">
        <link href="./css/movieinfo.css" rel="stylesheet">

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
                <?php include "./lib/top_signup.php" ?></a> <!--회원가입화면-->
            </li>
            <li class="nav-item">
            <?php
                  if(!isset($_SESSION["userid"])){
                  ?><a class="nav-link" href="" OnClick="alert('로그인이 필요합니다.');">MYPAGE</a><?php   //<!--마이페이지-->
                  }
                  else{
                    ?><a class="nav-link" href="../mypage.php">MYPAGE</a><?php
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
    <!-- Page Content -->
    <div class="container">

        <!-- Page Heading/Breadcrumbs -->
        <h1 class="mt-4 mb-3">
            Movie Chart
        </h1>
        <hr>
        <?php
    $conn = mysqli_connect("localhost", "jegyun", "211724", "movie_theater");
    $select = "SELECT title,actors FROM movie_theater.movies WHERE m_idx=8";
    $result = mysqli_query($conn, $select);
    $row = mysqli_fetch_array($result);

    ?>

        <!-- Content Row -->
        <div class="row">

            <!-- Movie List -->
            <div class="col-lg-4 mb-4">
                <h4>
                    <a href="movieinfo.php">현재 상영작</a>/<strong>개봉 예정작</strong>
                </h4>
                <ol class="movielist">
                    <li>
                        <div class="box-image">
                            <img
                                src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82747/82747_185.jpg"
                                alt="백두산">
                        </div>

                        <div class="box-content">
                            <div class="m_title">
                                <span>
                                    <?php echo $row[0]; ?>
                                </span>
                            </div>

                            <div class="m_actors">
                                <span>
                                    출연 :
                                    <?php echo $row[1]; ?>
                                </span>
                            </div>
                        </div>
                    </li>

                    <?php
            $conn = mysqli_connect("localhost", "jegyun", "211724", "movie_theater");
            $select1 = "SELECT title,actors FROM movie_theater.movies WHERE m_idx=9";
            $result1 = mysqli_query($conn, $select1);
            $row1 = mysqli_fetch_array($result1);
            ?>
                    <li>
                        <div class="box-image">
                            <img
                                src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82737/82737_185.jpg"
                                alt="시동">
                        </div>

                        <div class="box-content">
                            <div class="m_title">
                                <span>
                                    <?php echo $row1[0];?>
                                </span>
                            </div>

                            <div class="m_actors">
                                <span>출연:
                                    <?php echo $row1[1];?>
                                </span>
                            </div>
                        </div>
                    </li>

                    <?php
            $conn = mysqli_connect("localhost", "jegyun", "211724", "movie_theater");
            $select2 = "SELECT title,actors FROM movie_theater.movies WHERE m_idx=10";
            $result2 = mysqli_query($conn, $select2);
            $row2 = mysqli_fetch_array($result2);
            ?>

                    <li>
                        <div class="box-image">
                            <img
                                src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82738/82738_185.jpg"
                                alt="천문">
                        </div>

                        <div class="box-content">
                            <div class="m_title">
                                <span>
                                    <?php echo $row2[0]; ?>
                                </span>
                            </div>

                            <div class="m_actors">
                                <span>출연:
                                    <?php echo $row2[1]; ?>
                                </span>
                            </div>
                        </div>
                    </li>
                    <?php
            $conn = mysqli_connect("localhost", "jegyun", "211724", "movie_theater");
            $select3 = "SELECT title,actors FROM movie_theater.movies WHERE m_idx=11";
            $result3 = mysqli_query($conn, $select3);
            $row3 = mysqli_fetch_array($result3);
            ?>
                    <li>
                        <div class="box-image">
                            <img
                                src="https://m.media-amazon.com/images/M/MV5BMGM3ZmQyMTktMWU1NS00YjVkLWIzMDMtNmRlZmQ2Y2ViNzYzXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_UY268_CR4,0,182,268_AL_.jpg"
                                alt="차일드 인 타임">
                        </div>

                        <div class="box-content">
                            <div class="m_title">
                                <span>
                                    <?php echo $row3[0]; ?></span>
                            </div>

                            <div class="m_actors">
                                <span>출연: <?php echo $row3[1]; ?></span>
                            </div>
                        </div>
                    </li>

                </ol>

                <ol class="movielist">
                    <?php
            $conn = mysqli_connect("localhost", "jegyun", "211724", "movie_theater");
            $select4 = "SELECT title,actors FROM movie_theater.movies WHERE m_idx=12";
            $result4 = mysqli_query($conn, $select4);
            $row4 = mysqli_fetch_array($result4);
            ?>
                    <li>
                        <div class="box-image">
                            <img
                                src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82531/82531_185.jpg"
                                alt="닥터 두리틀">
                        </div>

                        <div class="box-content">
                            <div class="m_title">
                                <span><?php echo $row4[0]; ?></span>
                            </div>

                            <div class="m_actors">
                                <span>
                                    출연: <?php echo $row4[1]; ?>
                                </span>
                            </div>
                        </div>
                    </li>
                    <?php
            $conn = mysqli_connect("localhost", "jegyun", "211724", "movie_theater");
            $select5 = "SELECT title,actors FROM movie_theater.movies WHERE m_idx=13";
            $result5 = mysqli_query($conn, $select5);
            $row5 = mysqli_fetch_array($result5);
            ?>
                    <li>
                        <div class="box-image">
                            <img
                                src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82537/82537_185.jpg"
                                alt="스타워즈 라이즈 오브 스카이워커">
                        </div>

                        <div class="box-content">
                            <div class="m_title">
                                <!--영화제목-->
                                <span><?php echo $row5[0]; ?></span>
                            </div>

                            <div class="m_actors">
                                <!--영화배우-->
                                <span>출연: <?php echo $row5[1]; ?>
                                </span>
                            </div>
                        </div>
                    </li>
                    <?php
                        $conn = mysqli_connect("localhost", "jegyun", "211724", "movie_theater");
                        $select6 = "SELECT title,actors FROM movie_theater.movies WHERE m_idx=14";
                        $result6 = mysqli_query($conn, $select6);
                        $row6 = mysqli_fetch_array($result6);
                    ?>
                    <li>
                        <div class="box-image">
                            <img
                                src="https://m.media-amazon.com/images/M/MV5BZjJmYmFmZGQtYWYzYS00N2UzLTkzYjktYmNkYzQ0MTJlN2M4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
                                alt="버즈 오브 프레이">
                        </div>

                        <div class="box-content">
                            <div class="m_title">
                                <span>
                                    <?php echo $row6[0]; ?>
                                </span>
                            </div>

                            <div class="m_actors">
                                <span>
                                    출연: <?php echo $row6[1]; ?>
                                </span>
                            </div>
                        </div>
                    </li>
                    <?php
            $conn = mysqli_connect("localhost", "jegyun", "211724", "movie_theater");
            $select7 = "SELECT title,actors FROM movie_theater.movies WHERE m_idx=15";
            $result7 = mysqli_query($conn, $select7);
            $row7 = mysqli_fetch_array($result7);
            ?>
                    <li>
                        <div class="box-image">
                            <img
                                src="https://m.media-amazon.com/images/M/MV5BNTkyZWFjY2YtMTg1ZC00YThjLWE4YTEtZjFjOTJiMTRlYjg3XkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX182_CR0,0,182,268_AL_.jpg"
                                alt="007 노 타임 투 다이">
                        </div>

                        <div class="box-content">
                            <div class="m_title">
                                <span>
                                    <?php echo $row7[0]; ?>
                                </span>
                            </div>

                            <div class="m_actors">
                                <span>출연:
                                    <?php echo $row7[1]; ?>
                                </span>
                            </div>
                        </div>
                    </li>

                </ol>

            </div>
        </div>
        <?php mysqli_close($conn); ?>

        <div class="row">
            <div class="col-lg-8 mb-4"></div>

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

</body>

</html>
