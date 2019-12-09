
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


    $sql = "select * from movie_theater.staff";
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


  <!-- Page Content -->
  <div class="container">

      <div class="ing_list">
          <table>
              <caption>직원목록</caption>
              <thead>
              <tr>
                <th scope="col">직원 코드</th>
                <th scope="col">직급</th>
                <th scope="col">지점</th>
                <th scope="col">이름</th>
                <th scope="col">급여</th>
                <th scope="col">전화번호</th>
                <th scope="col">정보수정</th>
              </tr>
              </thead>
              <tbody>
                  <?php
                  for($i=1;$i<count($yourArray)+1;$i++){
                  ?>
                  <tr>
                      <td data-label="staff_code"><?=$yourArray[$i]["staff_code"]?></td>
                      <td data-label="staff_rank"><?=$yourArray[$i]["staff_rank"]?></td>
                      <td data-label="branch"><?=$yourArray[$i]["branch_name"]?></td>
                      <td data-label="staff_name"><?=$yourArray[$i]["staff_name"]?></td>
                      <td data-label="sarary"><?=$yourArray[$i]["salary"]?></td>
                      <td data-label="staff_phone"><?=$yourArray[$i]["staff_phone"]?></td>
                      <td data-lable ="staffmod"><button id="go_staffmod_page" onclick="location.href= 'staffmod.php?staff_code=<?=$yourArray[$i]["staff_code"]?>' "type="button" title="스테프관리페이지로 이동">정보 수정/추가</button></td>
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
