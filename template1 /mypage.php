
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
  <link href="vendor/bootstrap/css/mypage.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="css/modern-business.css" rel="stylesheet">
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="reserve/reserveCancel.js"></script>
  <?php

      require_once("./lib/MYDB.php");
      $pdo = db_connect();

      $a = $_SESSION["userid"];
      $sql = "select * from movie_theater.reservation_info where id ='$a'";
      $stmh = $pdo->prepare($sql);
      $stmh->execute();
      $yourArray = array();
      $i=1;
      $yourArray[$i] = $row;
      while($row=$stmh->fetch(PDO::FETCH_ASSOC)){

          $yourArray[$i] = $row;
          $i++;
      }


  ?>

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
                    ?><a class="nav-link" href="./mypage.php">MYPAGE</a><?php
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
<!-- 콘탠츠-->
<div class="my-info-wrap">
    <div class="sect-person-info">
        <h3> MY INFORMATION</h2>

        <div class="box-contents newtype">
            <div class="person-info">
                <img class ="profile" src="./img/profile.gif" alt="profile" width="150px">
                <ul>
                    <li>
                        <strong><?=$_SESSION["username"]?>님</strong>
                    </li>
                    <li>
                        ID:  <em><?=$_SESSION["userid"]?></em>
                    </li>
                    <li>
                        생년월일:  <?=$_SESSION["userbirthday"]?>
                    </li>
                    <li>
                        전화번호:  <?=$_SESSION["userhp"]?>
                    </li>
                    <li>
                        이메일:  <?=$_SESSION["useremail"]?>
                    </li>
                    <li>
                        <button id="go_modify_page" onclick="location.href= 'modify.php?id=<?=$_SESSION["userid"]?>' "type="button" title="새창열림">나의 정보 변경</button>
                    </li>
                </ul>
                <div class="membership-info">
                            <p>고객님은   <strong class="txt-purple"><?=$_SESSION["membership_rating"]?></strong>등급 입니다.</p>

                </div>

            </div>


        </div>
    </div>

    <div class="cols-benefit-info">
        <div class="col-my-coupon">
            <h3>MY COUPON</h3>
            <ul>
                <li>
                    <strong>사용가능한 할인쿠폰 :</strong>
                    <span><em><?=$_SESSION["usercoupon"]?>개</em></span>
                </li>
            </ul>
        </div>


            <div class="col-my-point">
            <h3>MY POINT</h3>
            <ul>
                <li>
                    <strong>국민영화관 사용가능 포인트 :</strong>
                    <span><em class="txt-maroon"><?=$_SESSION["userpoint"]?>점</em></span>
                </li>
                <li>
                    <strong>국민영화관 멤버쉽 포인트 :</strong>
                    <span><em class="txt-maroon"><?=$_SESSION["userhistory"]?>점</em></span>
                </li>
            </ul>

        </div>

    </div>

    <div class="ing_list">
        <table>
            <caption>내 예매내역</caption>
            <thead>
            <tr>
              <th scope="col">지점</th>
              <th scope="col">영화 제목</th>
              <th scope="col">예매 일자</th>
              <th scope="col">예매 시간</th>
              <th scope="col">상영관/좌석/인원수</th>
              <th scope="col">리뷰 작성</th>
              <th scope="col">예매 취소</th>
            </tr>
            </thead>
            <tbody>
                <?php
                for($i=1;$i<count($yourArray)+1;$i++){
                ?>
                <tr>
                    <td data-label="branch_name"><?=$yourArray[$i]["branch_name"]?></td>
                    <td data-label="title"><?=$yourArray[$i]["title"]?></td>
                    <td data-label="movie_date"><?=$yourArray[$i]["movie_date"]?></td>
                    <td data-label="movie_time"><?=$yourArray[$i]["movie_time"]?></td>
                    <td data-label="seat"><?=$yourArray[$i]["seat"]?></td>
                    <td data-label ="review"><button id="go_review_page" onclick="location.href= 'staffmod.php?staff_code=<?=$yourArray[$i]["staff_code"]?>' "type="button" title="스테프관리페이지로 이동">리뷰작성</button></td>
                    <td data-label ="cancel"><button id="reserve_cancel" onclick='cancel(<?=$yourArray[$i]["reserve_code"]?>)' type="button" title="예매 취소">예매취소</button></td>
                </tr>
                <?php
                }
                ?>
            </tbody>
        </table>
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


</body>

</html>
