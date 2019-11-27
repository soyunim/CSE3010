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
        <a class="navbar-brand" href="index.php">국민영화관</a><!---영화관이름 -->
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
                  <a class="dropdown-item" href="staffmanage.html">직원 관리</a>
                  <a class="dropdown-item" href="salesmanage.html">매출 관리</a>
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
    require_once("./lib/MYDB.php");
    $pdo = db_connect();
    $sql = "SELECT title FROM movie_theater.movies WHERE m_idx = 8 ";
    $stmh = $pdo->prepare($sql);
    $stmh->execute();
    $row=$stmh->fetch(PDO::FETCH_ASSOC);
    
    ?>
    
    <!-- Content Row -->
    <div class="row">
    
      <!-- Movie List -->
      <div class="col-lg-4 mb-4">
        <h4><a href="movieinfo.php">현재 상영작</a>/<strong>개봉 예정작</strong></h4>
        <ol class = "movielist"> 
            <li>
                
                <div class = "box_rank">
                    <span><strong>1위</strong></span>
                </div>

                <div class = "box-image">
                    <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82014/82014_185.jpg" alt="겨울왕국2">
                </div>

                <div class = "box-content">
                    <div class = "m_title"> 
                        <span><?php echo $row[0]    ?>   </span>
                    </div>

                    <div class = "m_actors">
                        <span>   </span>
                    </div>

                </div>
            </li>

            <li>
                <div class = "box_rank">
                    <span><strong>2위</strong></span>
                </div>
                <div class = "box-image">
                    <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82481/82481_185.jpg" alt="블랙머니">
                </div>

                <div class = "box-content">
                    <div class = "m_title">
                        <span>    </span>
                    </div>

                    <div class = "m_actors">
                        <span>   </span>
                    </div>

                    <div class ="m_ratings">
                        <span> </span>
                    </div>

                    <div class = "m_grade">
                        <span>   </span>
                    <div>

                </div>
            </li>

            <li>
            <div class = "box_rank">
                    <span><strong>3위</strong></span>
                </div>
                <div class = "box-image">
                    <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82463/82463_185.jpg" alt="신의 한 수">
                </div>

                <div class = "box-content">
                    <div class = "m_title">
                        <span>  </span>
                    </div>

                    <div class = "m_actors">
                        <span>   </span>
                    </div>

                    <div class ="m_ratings">
                        <span>   </span>
                    </div>

                    <div class = "m_grade">
                        <span>   </span>
                    <div>

                </div>
            </li>

            <li>
            <div class = "box_rank">
                    <span><strong>4위</strong></span>
                </div>
                <div class = "box-image">
                    <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82427/82427_185.jpg" alt="82년생 김지영">
                </div>

                <div class = "box-content">
                    <div class = "m_title">
                        <span> </span>
                    </div>

                    <div class = "m_actors">
                        <span>  </span>
                    </div>

                    <div class ="m_ratings">
                        <span>   </span>
                    </div>

                    <div class = "m_grade">
                        <span>   </span>
                    <div>

                </div>
            </li>

        </ol>

        <ol class = "movielist">

            <li>
                <div class = "box_rank">
                    <span><strong>5위</strong></span>
                </div>

                <div class = "box-image">
                    <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82379/82379_185.jpg" alt="윤희에게">
                </div>

                <div class = "box-content">
                    <div class = "m_title">
                        <span></span>
                    </div>

                    <div class = "m_actors">
                        <span>  </span>
                    </div>

                    <div class ="m_ratings">
                        <span> </span>
                    </div>

                    <div class = "m_grade">
                        <span> </span>
                    <div>
                </div>
            </li>

            <li>
                <div class = "box_rank">
                    <span><strong>6위</strong></span>
                </div>

                <div class = "box-image">
                    <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81895/81895_185.jpg" alt="터미네이터 : 다크 페이트">
                </div>

                <div class = "box-content">
                    <div class = "m_title">  <!--영화제목-->
                        <span></span>
                    </div>

                    <div class = "m_actors">  <!--영화배우-->
                        <span> </span>
                    </div>

                    <div class ="m_ratings">   <!--관람가-->
                        <span></span>
                    </div>

                    <div class = "m_grade">     <!--평점-->
                        <span>    </span>
                    <div>
                </div>
            </li>

            <li>
                <div class = "box_rank">
                    <span><strong>7위</strong></span>
                </div>

                <div class = "box-image">
                    <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82530/82530_185.jpg" alt="좀비랜드">
                </div>

                <div class = "box-content">
                    <div class = "m_title">
                        <span>              </span>
                    </div>

                    <div class = "m_actors">
                        <span>                       </span>
                    </div>

                    <div class ="m_ratings">
                        <span>   </span>
                    </div>

                    <div class = "m_grade">
                        <span>      </span>
                    <div>
                </div>
            </li>

            <li>
                <div class = "box_rank">
                    <span><strong>7위</strong></span>
                </div>

                <div class = "box-image">
                    <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82530/82530_185.jpg" alt="좀비랜드">
                </div>

                <div class = "box-content">
                    <div class = "m_title">
                        <span>              </span>
                    </div>

                    <div class = "m_actors">
                        <span>                       </span>
                    </div>

                    <div class ="m_ratings">
                        <span>   </span>
                    </div>

                    <div class = "m_grade">
                        <span>      </span>
                    <div>
                </div>
            </li>


           
        </ol>

      </div>
    </div>
    <?php mysqli_close($conn); ?>
    
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

  

</body>

</html>
