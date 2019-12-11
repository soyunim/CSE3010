<?php
// error_reporting(E_ALL);
// ini_set("display_errors", 1);
$thisyear = date('Y'); // 4자리 연도
$thismonth = date('n'); // 0을 포함하지 않는 월
$today = date('j'); // 0을 포함하지 않는 일
$cellh = 30;

// $year, $month 값이 없으면 현재 날짜
$year = isset($_GET['year']) ? $_GET['year'] : $thisyear;
$month = isset($_GET['month']) ? $_GET['month'] : $thismonth;
$day = isset($_GET['day']) ? $_GET['day'] : $today;

$last_day = date('t', mktime(0, 0, 0, $month, 1, $year)); // 해당월의 총일수 구하기

if ($thismonth == $month && $thisyear == $year) {
    $prevmonth = $month;
}
else {
    $prevmonth = $month - 1;
}
$nextmonth = $month + 1;
$prevyear = $nextyear = $year;
if ($month == 1) {
    $prevmonth = 12;
    $prevyear = $year - 1;
} elseif ($month == 12) {
    $nextmonth = 1;
    $nextyear = $year + 1;
}
$pre_year = $year - 1;
$next_year = $year + 1;

include_once 'reserve/holiday.php';  //양력.음력 변환 인클루드
session_start();
?>


<!DOCTYPE html>
<html lang="ko">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="jeongGyu">
    <meta name="author" content="jeongGyu">

    <!-- title은 똑같이 가져가는게 낫지 않을까? -->
    <title>국민영화관</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap_services.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/modern-business.css" rel="stylesheet">
    <link href="css/services.css" rel="stylesheet">
    <!-- <script src="reserve/seat.js"></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>

<body>

    <!-- Navigation -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand serv_margin" href="index.php"><!---영화관이름 -->국민영화관</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item fontupup"> <!---메뉴바---->
                <?php include "./lib/login_success.php" ?>
            </li>
            <li class="nav-item fontupup"> <!---메뉴바---->
                <?php include "./lib/top_login1.php" ?><!--로그인 화면-->
            </li>
            <li class="nav-item fontupup">
                <?php include "./lib/top_signup.php" ?></a> <!--회원가입화면-->
            </li>
            <li class="nav-item">
            <?php
                  if(!isset($_SESSION["userid"])){
                  ?><a class="nav-link fontupup" href="" OnClick="alert('로그인이 필요합니다.');">MYPAGE</a><?php   //<!--마이페이지-->
                  }
                  else{
                    ?><a class="nav-link fontupup" href="./mypage.php">MYPAGE</a><?php
                  }
                  ?>
            </li>
            <li class="nav-item">
            <?php
              if(!isset($_SESSION["userid"])){
              ?><a class="nav-link fontupup" href="" OnClick="alert('로그인이 필요합니다.');">예매</a><?php
              }
              else{
                ?><a class="nav-link fontupup" href="services.php">예매</a><?php
              }
              ?><!--영화예매페이지-->
            </li>
            <li class="nav-item">
                <a class="nav-link fontupup" href="movieinfo.php">영화</a> <!--영화정보페이지-->
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle fontupup" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
            예매하기
        </h1>


        <!-- Image Header -->
        <!-- <img class="img-fluid rounded mb-4" src="http://placehold.it/1200x300" alt=""> -->

        <!-- Marketing Icons Section -->
        <div class="row">
            <div class="col-lg-3 mb-4">
                <div class="card h-100">
                    <h4 class="card-header">날짜</h4>
                    <div class="card-body">
                        <!-- <?php
                        $today = date('j');
                        $thismonth = date('m');
                        $thisyear = date('Y');
                        $last_day = date('t', mktime(0, 0, 0, $thismonth, 1, $thisyear));
                        $last_day_2 = date('t', mktime(0, 0, 0, $thismonth+1, 1, $thisyear));
                        echo "$last_day";
                        $dd = 30;
                        for($i=0 ; $i<30 ;$i++){
                            if($last_day-$dd >= 0){
                                echo "<li>$dd</li>";
                            }
                            else {
                                $dd = 1;
                                echo "<li>$dd</li>";
                            }
                            $dd = $dd+1;
                        }
                         ?> -->


                        <div align="center">
                        <table>
                          <tr align="center" >
                            <td height="40">
                                <a href=<?php echo 'services.php?year='.$prevyear.'&month='.$prevmonth . '&day=1'; ?>>◀</a>
                            </td>
                            <td height="40" bgcolor="#FFFFFF" colspan="5">
                                <a class="main" href=<?php echo 'services.php?year=' . $thisyear . '&month=' . $thismonth . '&day=1'; ?>>
                                <?php echo "&nbsp;&nbsp;" . $year . '년 ' . $month . '월 ' . "&nbsp;&nbsp;"; ?></a>
                            </td>
                            <td>
                                <a href=<?php echo 'services.php?year='.$nextyear.'&month='.$nextmonth.'&day=1'; ?>>▶</a>
                            </td>
                          </tr>
                          <tr class="info">
                            <th style="width:14%;text-align:center;color:red;">일</th>
                            <th style="width:14%;text-align:center;">월</th>
                            <th style="width:14%;text-align:center;">화</th>
                            <th style="width:14%;text-align:center;">수</th>
                            <th style="width:14%;text-align:center;">목</th>
                            <th style="width:14%;text-align:center;">금</th>
                            <th style="width:14%;text-align:center;color:blue;">토</th>
                          </tr>
                          <tr height=<?php echo $cellh;?>>

                        <?php
                            $date = 1;
                            $offset = 0;
                            $ck_row = 0;
                            //프레임 사이즈 조절을 위한 체크인자

                            while ($date <= $last_day) {
                                $mday = $date;

                                if ($date == '1') {
                        			// 시작 요일 구하기 : date("w", strtotime($year."-".$month."-01"));
                                    $offset = date('w', mktime(0, 0, 0, $month, $date, $year)); // 0: 일요일, 6: 토요일
                                    SkipOffset($offset, mktime(0, 0, 0, $month, $date, $year),''); // 앞에 날짜
                                }
                                if ($offset == 0)
                                    $style = "holy"; // 토요일 빨간색 또는 파란색
                        		else if($offset == 6)
                                    $style = "blue"; // 토요일 빨간색 또는 파란색
                                else{
                                    $style = "black";
                                }
                                if($thismonth == $month){
                                    if($date < $today){
                                        $style = "gray";
                                    }
                                }

                                // 법적 공휴일
                        		for ($i = 0; $i < count($Holidays); $i++) {
                                    if ($Holidays[$i][0] == "$month-$date") {
                                        $style = "holy";
                                        $mday = "$date";
                                        $holidata = $Holidays[$i][1];
                                        break;
                                    }
                                }


                                if ($date == $today && $year == $thisyear && $month == $thismonth) { ?>
                                    <td align=center class=<?php echo "$style"?> id=<?php echo "$year-$month-$mday"?>>
                                <?php } else {?>
                                    <td align=center class=<?php echo "$style"?> id=<?php echo "$year-$month-$mday"?>>
                        		<?php }
                        			CalendarPrint($mday);
                        			echo "</td>\n";
                                ?>
                                <script>
                                    var tdGroup = []; // td의 id값을 저장
                                    var tabnum = <?php echo $last_day ?>;
                                    $(document).ready(function() {
                                        tdGroup[<?php echo $mday-1 ?>] = document.getElementById("<?php echo "$year\-$month\-$mday"?>");
                                    });
                                </script>
                                <?php
                                $date++; // 날짜 증가
                                $offset++;
                                if ($offset == 7) {
                                    echo "</tr>";
                                    if ($date <= $last_day) {
                                        echo "<tr height=$cellh>";
                                        $ck_row++;
                                    }
                                    $offset = 0;
                                }

                            }// end of while

                            if ($offset != 0) {
                                SkipOffset((7 - $offset), '', mktime(0, 0, 0, $month + 1, 1, $year));
                                echo "</tr>\n";
                            }
                            echo("</td>\n");

                        	function CalendarPrint($mday){
                        		echo "$mday<br/>";
                        	}

                        	function SkipOffset($no, $sdate = '', $edate = '') {
                        		for ($i = 1; $i <= $no; $i++) {
                        			$ck = $no - $i + 1;
                        			if ($sdate)
                        				$num = date('j', $sdate - (3600 * 24) * $ck);

                        			if ($edate)
                        				$num = date('j', $edate + (3600 * 24) * ($i - 1));

                        			echo "<td align=center><font class=gray>$num</font></td>";
                        		}
                        	}

                        ?>
                            </tr>
                        </table>
                        </div>
                        <script>
                        $(document).ready(function() {
                            <?php if($thismonth == $month && $thisyear == $year){ ?>
                                var i = <?php echo $today-1 ?>;
                            <?php }
                            else { ?>
                                var i = 0;
                            <?php } ?>
                            for(i; i<tabnum; i++){ //click하면 changeToday로 넘어간다.
                                tdGroup[i].addEventListener('click', changeToday);
                            }
                            function changeToday(e){
                                for(let i = 0; i < tabnum; i++){
                                    if(tdGroup[i].classList.contains('active')){ //tdGroup에 active한 classList가 있다면 remove한다.
                                        tdGroup[i].classList.remove('active');
                                    }
                                }
                                clickedDate1 = e.currentTarget;
                                clickedDate1.className = 'active';
                                theater(clickedDate1);
                            }
                        });
                        </script>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 mb-4" id="home">
                <div class="card h-100">
                    <h4 class="card-header">극장</h4>
                    <div class="card-body">
                        <!-- theater함수 -->
                        <div id="test"></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 mb-4">
                <div class="card h-100">
                    <h4 class="card-header">영화</h4>
                    <div class="card-body">
                        <!-- movies 함수 -->
                        <div id="test2"></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 mb-4">
                <div class="card h-100">
                    <h4 class="card-header">시간</h4>
                    <div class="card-body">
                        <!-- time함수 -->
                        <p id="test3"></p>
                    </div>
                </div>
            </div>
            <div class="choice col-lg-12">
                <button type="button" name="button" id="choice_seat" class="seatshit">좌석선택</button>
            </div>
        </div>
        <!-- /.row -->

        <div id="test_model_overlay" class="model_overlay">
        </div>

        <div id="js-model-holder" class="model-holder">
            <div id="js-model" class="model">
                <div class="button-close">
                    <button id="close" class="close-x" type="button" name="button">X</button>
                </div>
                    <div class="seatSelection col-lg-12">
                        <div class="seatsChart col-lg-offset-6">
                            <div id="test4" class="seats">
                            </div>

                        <div class="seatsReceipt" style="overflow:scroll;">
                            <p class="print_seat"><strong>선택 좌석 : <span class="seatsAmount">0</span></strong></p><button id="btnClear" class="btn btn_clear">Clear</button>
                            <ul id="seatsList" class="nav nav-stacked"></ul>
                        </div>
                            <!-- </div> -->

                        <div class="seatsFinal">
                            <div class="in">
                                <span>총 가격 : </span><span class="txtSubTotal">0</span><span>원</span>
                                <br />
                                <button id="btnCheckout" name="btnCheckout" class="btn btn-primary"> 결제 선택 </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div id="test2_model_overlay" class="model_overlay">
        </div>

        <div id="js2-model-holder" class="model-holder">
            <div id="js2-model" class="model">
                <div class="button-close">
                    <button id="close2" class="close-x" type="button" name="button">X</button>
                </div>
                <div class="in2">
                <p class="stack">결제 방법을 선택하여 주세요.</p>
                <div class="select_way">
                    <form>
                        <input type="radio" name="chk_info" value="card">CARD
                        <input type="radio" name="chk_info" value="coupon">COUPON
                      <br>
                      <br>
                      <p>결제 정보</p>
                      <ul>
                          <li id="branch_name">지점 : </li>
                          <li id="title">제목 : </li>
                          <li id="date">예매일자 :</li>
                          <li id="seat">상영관/좌석 :</li>
                          <li id="price">총 금액 :</li>
                          <li>멤버쉽등급 : <?=$_SESSION["membership_rating"]?></li>
                          <li>멤버쉽등급 할인률 :<?php
                            if ($_SESSION["membership_rating"] == "Bronze") {
                                $discount =10;
                            }
                            else if ($_SESSION["membership_rating"] == "Silver") {
                                $discount = 20;
                            }
                            else if ($_SESSION["membership_rating"] == "Gold") {
                                $discount = 30;
                            }
                            echo "$discount%";
                          ?></li>
                          <li id="realPrice">실 결제 금액 : </li>
                          <div id="final">
                            <a href="#" class="submit">결제하기</a>
                          </div>

                      </ul>



                  </form>
                </div>
            </div>
            </div>
        </div>


    </div>
    <!-- /.container -->
    <div style="clear:both;" class="bnt_foot"></div>
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
    <script>
    function theater(clickeddate) {
        var date = clickeddate.getAttribute('id');
        $.ajax({
            url: 'reserve/theater.php',
            type: 'POST',
            data: {
                date: date
            },
            success: function(data) {
                document.getElementById('test2').innerHTML = "";
                document.getElementById('test3').innerHTML = "";
                document.getElementById('test').innerHTML = data;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("arjax error : " + textStatus + "\n" + errorThrown);
            }
        });
    }

    function movies(name, th, length) {
        var cgroup = [];
        for (let i = 0; i < length; i++) {
            cgroup[i] = document.getElementById(`theater${i}`);
        }
        for (let i = 0; i < length; i++) {
            if (cgroup[i].classList.contains('li_active')) {
                cgroup[i].classList.remove('li_active');
            }
        }
        cgroup[th].className = 'li_active';
        for (let i = 0; i < tabnum; i++) {
            if (tdGroup[i].classList.contains('active')) { //tdGroup에 active한 classList가 있다면 remove한다.
                var date = tdGroup[i].getAttribute('id');
            }
        }

        $.ajax({
            url: 'reserve/movies.php',
            type: 'POST',
            data: {
                date: date,
                name: name
            },
            success: function(data) {
                document.getElementById('test3').innerHTML = "";
                document.getElementById('test2').innerHTML = data;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("arjax error : " + textStatus + "\n" + errorThrown);
            }
        });
    }

    function time(title, name, th, length) {
        var cgroup = [];
        for (let i = 0; i < length; i++) {
            cgroup[i] = document.getElementById(`movie${i}`);
        }
        for (let i = 0; i < length; i++) {
            if (cgroup[i].classList.contains('li_active')) {
                cgroup[i].classList.remove('li_active');
            }
        }
        cgroup[th].className = 'li_active';
        for (let i = 0; i < tabnum; i++) {
            if (tdGroup[i].classList.contains('active')) { //tdGroup에 active한 classList가 있다면 remove한다.
                var date = tdGroup[i].getAttribute('id');
            }
        }
        $.ajax({
            url: 'reserve/time.php',
            type: 'POST',
            data: {
                date: date,
                name: name,
                title: title
            },
            success: function(data) {
                document.getElementById('test3').innerHTML = data;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("arjax error : " + textStatus + "\n" + errorThrown);
            }
        });
    }

    function seat(title, time, name, th, length) {
        var cgroup = [];
        for (let i = 0; i < length; i++) {
            cgroup[i] = document.getElementById(`time${i}`);
        }
        for (let i = 0; i < length; i++) {
            if (cgroup[i].classList.contains('li_active')) {
                cgroup[i].classList.remove('li_active');
            }
        }
        cgroup[th].className = 'li_active';

        for (let i = 0; i < tabnum; i++) {
            if (tdGroup[i].classList.contains('active')) { //tdGroup에 active한 classList가 있다면 remove한다.
                var date = tdGroup[i].getAttribute('id');
            }
        }

        var user_id = '<?=$_SESSION["userid"]?>'; //user_id값을 받는다.
        var membership_rating = '<?=$_SESSION["membership_rating"]?>';

        var choice_button = document.getElementById("choice_seat");
        choice_button.style.backgroundColor = "rgb(213, 63, 63)";
        choice_button.style.color = "rgb(255, 255, 255)";

        $("#choice_seat").click(
            function() {
                if(!user_id){
                    alert("로그인 후 이용해주시길 바랍니다.");
                    window.location.href='login/login_form.php';
                }
                else {
                var test_model = document.getElementById("test_model_overlay");
                test_model.style.opacity = 1;
                test_model.style.display = 'block';
                var model = document.getElementById("js-model");
                model.style.display = "block";
                var js_model = document.getElementById("js-model-holder");
                js_model.style.display = "block";

                $.ajax({
                    url: 'reserve/seat/seatInfo.php',
                    type: 'POST',

                    data: {
                        date: date,
                        name: name,
                        title: title,
                        time: time
                    },
                    success: function(data) {
                        document.getElementById('test4').innerHTML = data;
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        alert("arjax error : " + textStatus + "\n" + errorThrown);
                    }
                });
                }
            }
        );
        $("#close").click(
            function() {
                var test_model = document.getElementById("test_model_overlay");
                test_model.style.opacity = 0;
                test_model.style.display = 'none';
                var model = document.getElementById("js-model");
                model.style.display = 'none';
                var js_model = document.getElementById("js-model-holder");
                js_model.style.display = 'none';
            }
        )
        $("#btnCheckout").click(
            function() {
                var idlist = new Array;
                $("div[class='seatNumber seatSelected']").each(function(i) {
                    var sel_seat = $(this).attr('id');
                    // unavailable 좌석
                    $(this).removeClass("seatSelected");
                    $(this).addClass("seatUnavailable");

                    idlist.push(sel_seat);

                });
                // 좌석선택 페이지 숨기기
                var test_model = document.getElementById("test_model_overlay");
                test_model.style.opacity = 0;
                test_model.style.display = 'none';
                var model = document.getElementById("js-model");
                model.style.display = 'none';
                var js_model = document.getElementById("js-model-holder");
                js_model.style.display = 'none';
                // 결제페이지 띄우기
                var test2_model = document.getElementById("test2_model_overlay");
                test2_model.style.opacity = 1;
                test2_model.style.display = 'block';
                var model2 = document.getElementById("js2-model");
                model2.style.display = "block";
                var js2_model = document.getElementById("js2-model-holder");
                js2_model.style.display = "block";

                // 멤버십 가격 할인
                var realprice = num;
                if(membership_rating == 'Bronze'){
                    realprice = num - num*0.1;
                } else if(membership_rating == 'Silver'){
                    realprice = num - num*0.2;
                } else if(membership_rating == 'Gold'){
                    realprice = num - num*0.3;
                }

                document.getElementById('branch_name').innerHTML += "<span>"+name+"</span>";
                document.getElementById('title').innerHTML += "<span>"+title+"</span>";
                document.getElementById('date').innerHTML += "<span>"+date +", "+ time + "</span>";
                document.getElementById('seat').innerHTML += "<span>"+ "1관" + "/" + idlist + "</span>";
                document.getElementById('price').innerHTML += "<span>" + num + "</span>";
                document.getElementById('realPrice').innerHTML += "<span>" + realprice + "</span>";
                $("#close2").click(
                    function() {
                        var test2_model = document.getElementById("test2_model_overlay");
                        test2_model.style.opacity = 0;
                        test2_model.style.display = 'none';
                        var model2 = document.getElementById("js2-model");
                        model2.style.display = 'none';
                        var js_model2 = document.getElementById("js2-model-holder");
                        js2_model.style.display = 'none';
                    }
                );

                $("#final").click(
                    function(){
                        var chk_info = $('input[name="chk_info"]:checked').val();
                        $.ajax({
                            url: 'reserve/seat/seatchange.php',
                            type: 'POST',
                            data: {seat : idlist},
                            success: function(data) {

                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                alert("arjax error : " + textStatus + "\n" + errorThrown);
                            }
                        });


                        $.ajax({
                            url: 'reserve/reserve.php',
                            type : 'POST',
                            data : {
                                id : user_id,
                                date : date,
                                name : name,
                                title : title,
                                time : time,
                                seat : idlist,
                                price : realprice,
                                chk_info:chk_info
                            },
                            success: function(data) {
                                alert("결제가 완료되었습니다.");
                                location.href='index.php';
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                alert("arjax error : " + textStatus + "\n" + errorThrown);
                            }
                        });
                    }
                );

            }
        );


        $(document).on("click",".seatNumber",function(){
                if (!$(this).hasClass("seatUnavailable")) {
                    // If selected, unselect it
                    if ($(this).hasClass("seatSelected")) {
                        var thisId = $(this).attr('id');
                        price = $('#seatsList .' + thisId).val();
                        $(this).removeClass("seatSelected");
                        $('#seatsList .' + thisId).remove();
                        // Calling functions to update checkout total and seat counter.
                        removeFromCheckout(price);
                        refreshCounter();
                    } else {
                        // else, select it
                        // getting values from Seat
                        var thisId = $(this).attr('id');
                        price = $(this).attr('value');


                        var freeSeats = parseInt($('.freeSeats').first().text());
                        var selectedSeats = parseInt($(".seatSelected").length);

                        // If you have free seats available the price of this one will be 0.
                        if (selectedSeats < freeSeats) {
                            price = 0;
                        }

                        // Adding this seat to the list
                        var seatDetails1 = "좌석 : " + thisId;
                        $("#seatsList").append('<p value=' + price + ' class= stack' + '>' + seatDetails1 + '<br></p>');
                        $(this).addClass("seatSelected");

                        addToCheckout(price);
                        refreshCounter();
                    }
                }
            }
        );


        $(document).on('click', ".removeSeat", function() {
            // Getting the Id of the Seat
            var id = $(this).attr('id').split(":");
            price = $(this).attr('value')
            $('#seatsList .' + id[1]).remove();
            $("#" + id[1] + ".seatNumber").removeClass("seatSelected");
            removeFromCheckout(price);
            refreshCounter();
        });

        $(".seatNumber").hover(
            function() {
                if (!$(this).hasClass("seatUnavailable")) {
                    var id = $(this).attr('id');
                    var id = id.split("_");
                    price = $(this).attr('value');
                    var tooltip = "Row: " + id[0] + " Seat:" + id[1] + " Price:CA$:" + price;

                    $(this).prop('title', tooltip);
                } else {
                    $(this).prop('title', "Seat unavailable");
                }
            }
        );
        // Function to refresh seats counter
        function refreshCounter() {
            $(".seatsAmount").text($(".seatSelected").length);
        }
        // Add seat to checkout
        function addToCheckout(thisSeat) {
            var seatPrice = parseInt(thisSeat);
            num = parseInt($('.txtSubTotal').text());
            num += seatPrice;
            num = num.toString();
            $('.txtSubTotal').text(num);
        }
        // Remove seat from checkout
        function removeFromCheckout(thisSeat) {
            var seatPrice = parseInt(thisSeat);
            num = parseInt($('.txtSubTotal').text());
            num -= seatPrice;
            num = num.toString();
            $('.txtSubTotal').text(num);
        }

        // Clear seats.
        $(document).on('click', "#btnClear", function() {
                $('.txtSubTotal').text(0);
                $(".seatsAmount").text(0);
                $('.seatSelected').removeClass('seatSelected');
                $('#seatsList p').remove();
            }
        );

    }
    </script>
</body>

</html>
