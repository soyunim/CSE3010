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
            <a class="nav-link" href="services.html">예매</a> <!--영화예매페이지-->
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
        <h4>현재 상영작</h4>
        <ol class = "movielist"> <!-- 1위~4위 -->
            <li>
                <div class = "box_rank">
                    <span><strong>1</strong></span>
                </div>
                
                <div class = "box-image">
                    <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82014/82014_185.jpg" alt="겨울왕국">
                </div>

                <div class = "box-content">
                    <div class = "m_title">
                        <span>겨울왕국2</span>
                    </div>  
                    
                    <div class = "m_actors">
                        <span>출연 : 크리스틴 벨, 이디나 멘젤, 조시 게드</span>
                    </div>
                    
                    <div class ="m_ratings">
                        <span>전체 관람가</span>
                    </div>
                    
                    <div class = "m_grade">
                        <span>??? / 10</span>
                    <div>
                </div>
            </li>

            <li>
                <div class = "box_rank">
                    <span><strong>2</strong></span>
                </div>
                <div class = "box-image">
                    <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82481/82481_185.jpg" alt="신의한수">
                </div>
                
                <div class = "box-content">
                    <div class = "m_title">
                        <span>블랙머니</span>
                    </div>  
                    
                    <div class = "m_actors">
                        <span>출연 : 조진웅, 이하늬, 이경영</span>
                    </div>
                    
                    <div class ="m_ratings">
                        <span>12세 관람가</span>
                    </div>
                    
                    <div class = "m_grade">
                        <span>9.11 / 10</span>
                    <div>

                </div>
            </li>

            <li>
            <div class = "box_rank">
                    <span><strong>3</strong></span>
                </div>
                <div class = "box-image">
                    <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82463/82463_185.jpg" alt="신의한수">
                </div>
                
                <div class = "box-content">
                    <div class = "m_title">
                        <span>신의 한 수 : 귀수편</span>
                    </div>  
                    
                    <div class = "m_actors">
                        <span>출연 : 권상우, 김희원, 김성균, 우도환</span>
                    </div>
                    
                    <div class ="m_ratings">
                        <span>15세 관람가</span>
                    </div>
                    
                    <div class = "m_grade">
                        <span>8.93 / 10</span>
                    <div>

                </div>
            </li>

            <li>
            <div class = "box_rank">
                    <span><strong>4</strong></span>
                </div>
                <div class = "box-image">
                    <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82427/82427_185.jpg" alt="신의한수">
                </div>
                
                <div class = "box-content">
                    <div class = "m_title">
                        <span>82년생 김지영</span>
                    </div>  
                    
                    <div class = "m_actors">
                        <span>출연 : 정유미, 공유, 김미경  </span>
                    </div>
                    
                    <div class ="m_ratings">
                        <span>12세 관람가</span>
                    </div>
                    
                    <div class = "m_grade">
                        <span>9.22 / 10</span>
                    <div>

                </div>
            </li> 

        </ol>

        <ol class = "movielist">
            
            <li>
                <div class = "box_rank">
                    <span><strong>5</strong></span>
                </div>
                
                <div class = "box-image">
                    <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81895/81895_185.jpg" alt="신의한수">
                </div>
                
                <div class = "box-content">
                    <div class = "m_title">
                        <span>터미네이터 : 다크 페이트</span>
                    </div>  
                    
                    <div class = "m_actors">
                        <span>출연 : 멕켄지 데이비스, 아놀드 슈왈제네거  </span>
                    </div>
                    
                    <div class ="m_ratings">
                        <span>15세 관람가</span>
                    </div>
                    
                    <div class = "m_grade">
                        <span>8.61 / 10</span>
                    <div>
                </div>
            </li>






        </ol>

      </div>
    </div>
    <!-- /.row -->

    
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
      <p class="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
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
