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
  <link href="css/home.css" rel="stylesheet">
  <!-- Custom styles for this template -->
  <link href="css/modern-business.css" rel="stylesheet">

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
                <a class="dropdown-item" href="portfolio-1-col.html">직원 관리</a>
                <a class="dropdown-item" href="portfolio-2-col.html">매출 관리</a>
                </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <!-- Slide 1 - 영화 이미지1 -->
        <div class="carousel-item active" style="background-image: url('https://movie-phinf.pstatic.net/20190924_235/1569291518626H2Nq5_JPEG/movie_image.jpg?type=m665_443_2')">
          <div class="carousel-caption d-none d-md-block">
            <h3>신의 한 수: 귀수편</h3>
            <p>사활을 건 대결!
              신의 한 수를 다시 두시겠습니까?</p>
          </div>
        </div>
        <!-- Slide2 - 영화,이벤트,멤버쉽 이미지2 -->
        <div class="carousel-item" style="background-image: url()">
          <div class="carousel-caption d-none d-md-block">
            <h3>Second Slide</h3>
            <p>This is a description for the second slide.</p>
          </div>
        </div>
        <!-- Slide 3 - 이미지3 -->
        <div class="carousel-item" style="background-image: url('http://placehold.it/1900x1080')">
          <div class="carousel-caption d-none d-md-block">
            <h3>Third Slide</h3>
            <p>This is a description for the third slide.</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </header>

  <!-- Page Content -->
  <div class="container mande">

    <h1 class="my-4">MOVIE CHART</h1>
    <div class="row info_movie">
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-body" style="background-image:url(frozen.jpg); background-size:cover;">
            <div class="whatmovie">
              <button type="button"><img src="img/good.png" style="width:50px;"></button>
              <button type="button"><img src="img/bad.png" style="width:50px;"></button>
            </div>
          </div>
          <div class="card-footer">
            <h4 class="card-header"><a href="#">겨울왕국2</a></h4>
            <div>
              <a href="#" class="btn">상세정보</a><a href="#" class="btn">예매하기</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-body" style="background-image:url(blackmoney.jpg); background-size:cover;">
          <div class="whatmovie">
              <button type="button"><img src="img/good.png" style="width:50px;"></button>
              <button type="button"><img src="img/bad.png" style="width:50px;"></button>
            </div>
          </div>
          <div class="card-footer">
            <h4 class="card-header"><a href="#">블랙머니</a></h4>
            <div>
              <a href="#" class="btn">상세정보</a><a href="#" class="btn">예매하기</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-body" style="background-image:url(blackmoney.jpg); background-size:cover;">
          <div class="whatmovie">
              <button type="button"><img src="img/good.png" style="width:50px;"></button>
              <button type="button"><img src="img/bad.png" style="width:50px;"></button>
            </div>
          </div>
          <div class="card-footer">
            <h4 class="card-header"><a href="#">영화3</a></h4>
            <div>
              <a href="#" class="btn">상세정보</a><a href="#" class="btn">예매하기</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-body" style="background-image:url(blackmoney.jpg); background-size:cover;">
          <div class="whatmovie">
              <button type="button"><img src="img/good.png" style="width:50px;"></button>
              <button type="button"><img src="img/bad.png" style="width:50px;"></button>
            </div>
          </div>
          <div class="card-footer">
            <h4 class="card-header"><a href="#">영화4</a></h4>
            <div>
              <a href="#" class="btn">상세정보</a><a href="#" class="btn">예매하기</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  <div class="event">
      <h1>EVENT</h1>
      <div id = "A">
      </div>


      <div id="B">
        <h4>등급별 혜택</h4>
        <ul class="mem_event">
          <li class="membership">
            <a href="#" title="멤버십등급 할인 상세페이지">
              <img src="img/bronze.png">
              <p>
                <strong>브론즈</strong><br>
                <span>
                  영화 할인?
                  포인트적립?
                  <br>
                  (1일 1매)
                </span>
              </p>
            </a>
          </li>

          <li class="membership">
            <a href="#" title="멤버십등급 할인 상세페이지">
              <img src="img/silver.png">
              <p>
                <strong>실버</strong><br>
                <span>
                  혜택이 뭐였죠
                  <br>
                  (1일 1매)
                </span>
              </p>
            </a>
          </li>

          <li class="membership">
            <a href="#" title="멤버십등급 할인 상세페이지">
              <img src="img/gold.png">
              <p>
                <strong>골드</strong><br>
                <span>
                  기억이,,안나요,,
                  <br>
                  (1일 1매)
                </span>
              </p>
            </a>
          </li>
          
        </ul>
      </div>
    </div>

  </div>
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
