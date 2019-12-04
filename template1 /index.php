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

  <header>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <!-- Slide 1 - 영화 이미지1 -->
        <div class="carousel-item active" style="background-image: url('https://movie-phinf.pstatic.net/20191113_80/1573623348905z7KuN_JPEG/movie_image.jpg?type=m665_443_2')">
          <div class="carousel-caption d-none d-md-block moviebig">
            <h3>신의 한 수: 귀수편</h3>
            <p>사활을 건 대결!
              신의 한 수를 다시 두시겠습니까?</p>
          </div>
        </div>
        <!-- Slide2 - 영화,이벤트,멤버쉽 이미지2 -->
        <div class="carousel-item" style="background-image: url('https://movie-phinf.pstatic.net/20191028_26/1572238531492Nvy9I_JPEG/movie_image.jpg?type=m665_443_2')">
          <div class="carousel-caption d-none d-md-block moviebig">
            <h3>겨울왕국2</h3>
            <p> 두려움을 깨고 새로운 운명을 만나다!</p>
          </div>
        </div>
        <!-- Slide 3 - 이미지3 -->
        <div class="carousel-item" style="background-image: url('data:image/jpeg;base64,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'); background-size:cover;">
          <div class="carousel-caption d-none d-md-block moviebig">
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
          <div class="card-body" style="background-image:url(img/frozen.jpg); background-size:cover;">
            <div class="whatmovie">
              <button type="button"><img src="img/good.png" style="width:50px;"></button>
              <button type="button"><img src="img/bad.png" style="width:50px;"></button>
            </div>
          </div>
          <div class="card-footer">
            <h4 class="card-header"><a href="#">겨울왕국2</a></h4>
            <div>
              <?php
              if(!isset($_SESSION['id'])){
              ?><a href="./movieinfo/frozen2.php" class="btn">상세정보</a><a href="services.php" class="btn">예매하기</a><?php
              }
              else{
                ?><a href="./movieinfo/frozen2.php" class="btn">상세정보</a><a href="" OnClick="alert('로그인이 필요합니다.');" class="btn">예매하기</a><?php
              }
              ?>
            </div>
          </div>
        </div>
      </div>
      <?php 
        $id = $_SESSION['id']
      
      ?>
      
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-body" style="background-image:url(img/blackmoney.jpg); background-size:cover;">
          <div class="whatmovie">
              <button type="button"><img src="img/good.png" style="width:50px;"></button>
              <button type="button"><img src="img/bad.png" style="width:50px;"></button>
            </div>
          </div>
          <div class="card-footer">
            <h4 class="card-header"><a href="#">블랙머니</a></h4>
            <div>
              <?php
              if(!isset($_SESSION['id'])){
              ?><a href="./movieinfo/blackmoney.php" class="btn">상세정보</a><a href="services.php" class="btn">예매하기</a><?php
              }
              else{
                ?><a href="./movieinfo/blackmoney.php" class="btn">상세정보</a><a href="" OnClick="alert('로그인이 필요합니다.');" class="btn">예매하기</a><?php
              }
              ?>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-body" style="background-image:url('https://movie-phinf.pstatic.net/20191029_52/15723135180872xOKy_JPEG/movie_image.jpg'); background-size:cover;">
          <div class="whatmovie">
              <button type="button"><img src="img/good.png" style="width:50px;"></button>
              <button type="button"><img src="img/bad.png" style="width:50px;"></button>
            </div>
          </div>
          <div class="card-footer">
            <h4 class="card-header"><a href="#">신의 한 수: 귀수편</a></h4>
            <div>
              <?php
              if(!isset($_SESSION['id'])){
              ?><a href="./movieinfo/divinemove2.php" class="btn">상세정보</a><a href="services.php" class="btn">예매하기</a><?php
              }
              else{
                ?><a href="./movieinfo/divinemove2.php" class="btn">상세정보</a><a href="" OnClick="alert('로그인이 필요합니다.');" class="btn">예매하기</a><?php
              }
              ?>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-body" style="background-image:url('https://movie-phinf.pstatic.net/20191024_215/1571900079078PNazL_JPEG/movie_image.jpg'); background-size:cover;">
          <div class="whatmovie">
              <button type="button"><img src="img/good.png" style="width:50px;"></button>
              <button type="button"><img src="img/bad.png" style="width:50px;"></button>
            </div>
          </div>
          <div class="card-footer">
            <h4 class="card-header"><a href="#">82년생 김지영</a></h4>
            <div>
              <?php
              if(!isset($_SESSION['id'])){
              ?><a href="./movieinfo/kimjiyoung.php" class="btn">상세정보</a><a href="services.php" class="btn">예매하기</a><?php
              }
              else{
                ?><a href="./movieinfo/kimjiyoung.php" class="btn">상세정보</a><a href="" OnClick="alert('로그인이 필요합니다.');" class="btn">예매하기</a><?php
              }
              ?>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="event">
      <h1>EVENT</h1>
      <div class="eventbox">
        <div id = "event1">
          <div class="top1" OnClick="location.href='#'" style="background-image:url('https://i.ytimg.com/vi/eSEs4B4H-EA/maxresdefault.jpg'); background-size:cover;"></div>
          <div class="bottom">
            <div class="bottom1" OnClick="location.href='#'" style="background-image:url('http://img.sbs.co.kr/newsnet/etv/upload/2019/02/14/30000622955_700.jpg'); background-size:cover;"></div>
            <div class="bottom2" OnClick="location.href='#'" style="background-image:url('http://img.hani.co.kr/imgdb/resize/2018/1017/00501957_20181017.JPG'); background-size:cover;"></div>
          </div>
        </div>
      <div id="event2" OnClick="location.href='#'" style="background-image:url('http://image2.megabox.co.kr//mop/frontbanner/2019/7D/13229E-CA52-4BF9-8971-823CFAFF1613.jpg'); background-size:cover;"></div>
      </div>
      <!--eventbox-->

    </div>
    <!--event-->
  </div>
  <!--Movie chart & event -->


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
