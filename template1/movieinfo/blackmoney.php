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
  <link href="../css/review.css" rel="stylesheet">
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
        $select = "SELECT * FROM movie_theater.movies WHERE m_idx=2";
        $result = mysqli_query($conn, $select);
        $row = mysqli_fetch_array($result);
        $_SESSION["title"] = $row[1];
        $a = $_SESSION["title"];

        $sql = "SELECT * FROM movie_theater.review WHERE title = '$a'";
        $result1 = mysqli_query($conn, $sql);
        $yourArray = array(); // make a new array to hold all your data


        $index = 0;
        while($row1 = mysqli_fetch_array($result1)){

            $yourArray[$index] = $row1;
            $index++;
        }

    ?>

  <!-- Page Content -->
  <div class="container">

    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">
        <?php echo $row[1]; ?>
    </h1>

    <hr>
    <div class = "box-image">
            <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82481/82481_185.jpg" alt="블랙머니">
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
    <div class="reviewbox">
      <?php
        // define variables and set to empty values
        $score = $comment ="";

        if ($_SERVER["REQUEST_METHOD"] == "POST") {

          if (empty($_POST["comment"])) {
            $comment = "";
          }
          else {
            $comment = test_input($_POST["comment"]);
          }

          if (empty($_POST["score"])) {
            $scoreErr = "score is required";
          }
          else {
            $score = test_input($_POST["score"]);
          }
        }

        function test_input($data) {
          $data = trim($data);
          $data = stripslashes($data);
          $data = htmlspecialchars($data);
          return $data;
        }
      ?>
      <br>
      
      <hr>
      <h2>Review</h2>
      
      <table>
          <caption>다른고객들이 작성한 리뷰</caption>
          <thead>
          <tr>
            <th scope="col">제목</th>
            <th scope="col">아이디</th>
            <th scope="col">평점</th>
            <th scope="col">리뷰작성시간</th>
            <th scope="col">리뷰내용</th>
          </tr>
          </thead>
          <tbody>
              <?php
              for($i=0;$i<count($yourArray);$i++){
              ?>
              <tr>
                  <td data-label="title"><?=$yourArray[$i]["title"]?></td>
                  <td data-label="id"><?=$yourArray[$i]["id"]?></td>
                  <td data-label="grade"><?=$yourArray[$i]["grade"]?></td>
                  <td data-label="time"><?=$yourArray[$i]["review_time"]?></td>
                  <td data-label="review_contents"><?=$yourArray[$i]["review_contents"]?></td>

              </tr>
              <?php
              }
              ?>
          </tbody>
      </table>
      

      <br>
      <form action=reviewPro.php method=post>
        <div class="review">
          <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <input type="radio" name="score" <?php if (isset($score) && $score=="1") echo "checked";?> value="1점">1
            <input type="radio" name="score" <?php if (isset($score) && $score=="2") echo "checked";?> value="2점">2
            <input type="radio" name="score" <?php if (isset($score) && $score=="3") echo "checked";?> value="3점">3
            <input type="radio" name="score" <?php if (isset($score) && $score=="4") echo "checked";?> value="4점">4
            <input type="radio" name="score" <?php if (isset($score) && $score=="5") echo "checked";?> value="5점">5
            <br><br>
            <div>
              <input type="text" name="comment" id="comment">
              <input type="submit" name="submit" value="Submit">
            </div>

          </form>
          </div>
      </form>
      <br>
      <hr>
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
