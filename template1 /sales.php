
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
  <link href="vendor/bootstrap/css/staff.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="css/modern-business.css" rel="stylesheet">

</head>
<?php
    $id = $_REQUEST["id"];

    require_once("./lib/MYDB.php");
    $pdo = db_connect();


    $sql = "select * from movie_theater.branch";
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
                  <a class="dropdown-item" href="sales.php">매출 관리</a>
                  </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  <!-- Page Content -->
  <div class="container">

      <div class="ing_list">
          <table>
              <caption>지점목록</caption>
              <thead>
              <tr>
                <th scope="col">지점명</th>
                <th scope="col">당일매점매출</th>
                <th scope="col">당일매표매출</th>
                <th scope="col">당일총매출</th>
                <th scope="col">누적매점매출</th>
                <th scope="col">누적매표매출</th>
                <th scope="col">총누적매출</th>
                <th scope="col">수정</th>

              </tr>
              </thead>
              <tbody>
                  <?php
                  for($i=1;$i<count($yourArray)+1;$i++){
                  ?>
                  <tr>
                      <td data-label="branch_name"><?=$yourArray[$i]["branch_name"]?></td>
                      <td data-label="con"><?=$yourArray[$i]["con"]?></td>
                      <td data-label="box"><?=$yourArray[$i]["box"]?></td>
                      <td data-label="daytotal"><?=$yourArray[$i]["daytotal"]?></td>
                      <td data-label="acon"><?=$yourArray[$i]["acon"]?></td>
                      <td data-label="abox"><?=$yourArray[$i]["abox"]?></td>
                      <td data-label="atotal"><?=$yourArray[$i]["atotal"]?></td>
                      
                      <td data-lable ="salesmod"><button id="go_salesmod_page" onclick="location.href='salesmod.php?branch_name=<?=$yourArray[$i]['branch_name']?>'"  type="button" title="매출관리페이지로 이동">수정/추가</button></td>
                  </tr>
                  <?php
                  }
                  ?>



              </tbody>
          </table>
      </div>

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
