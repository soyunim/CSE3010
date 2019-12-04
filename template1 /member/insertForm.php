<?php
    session_start();
 ?>
 <!DOCTYPE html>
 <html>
     <head>
        <meta charset="utf-8">
        <link href="../css/modern-business.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="../css/login.css">
        <link rel="stylesheet" type="text/css" href="../css/member.css">
        <script>

            function check_id(){

                window.open("check_id.php?id="+document.member_form.id.value ,"IDcheck","left=200,top=200,width=200,height=60,scrollbars=no, resizable=yes");
            }


            function check_input(){

                if(!document.member_form.hp2.value || !document.member_form.hp3.value ){
                    alert("휴대폰 번호를 입력하세요");
                    document.member_form.nick.focus();
                    return;
                }


                if(document.member_form.pass.value != document.member_form.pass_confirm.value){

                    alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");
                    document.member_form.pass.focus();
                    document.member_form.pass.select();
                    return;
                }

                document.member_form.submit();
            }
            function reset_form(){
                document.member_form.id.value = "";
                document.member_form.pass.value = "";
                document.member_form.pass_confirm.value = "";
                document.member_form.name.value = "";
                document.member_form.birthday.value = "";
                document.member_form.hp2.value = "";
                document.member_form.hp3.value = "";
                document.member_form.email1.value = "";
                document.member_form.email2.value = "";

                document.member_form.id.focus();

                return;
            }

        </script>
    </head>
    <body>
        <div id="wrap">

            <div id="header">

                <?php include "../lib/top_login2.php"; ?>

            </div> <!-- end of header -->



            <div id="content">
                <div id="col1">
                    <div id="left_menu">

                        <!--<?php include "../lib/left_menu.php"; ?>--> <!--왼쪽메뉴 새로 만들자-->

                    </div>
                </div> <!-- end of col1 -->
                <div id="col2">

                    <form name="member_form" method="post" action="insertPro.php">

                        <div id="title">

                            <img src="../img/title_join.gif">

                        </div> <!-- end of title -->

                        <div id="form_join">

                            <div id="join1">

                                <ul>
                                    <li>* 아이디</li>
                                    <li>* 비밀번호</li>
                                    <li>* 비밀번호 확인</li>
                                    <li>* 이름</li>
                                    <li>* 생년월일 (6자리)</li>
                                    <li>* 휴대폰</li>
                                    <li>&nbsp;&nbsp;&nbsp;이메일</li>
                                </ul>

                            </div>
                            <div id="join2">

                                <ul>

                                    <li><div id="id1"><input type="text" name="id"required></div>
                                    <div id="id2"><a href="#"><img src="../img/check_id.gif"
                                    onclick="check_id()"></a></div> <div id="id3">4~12자의 영문 소문자,숫자와 특수기호(_)만 사용할 수 있습니다.</div></li>

                                    <li><input type="password" name="pass" required></li>

                                    <li><input type="password" name="pass_confirm" required></li>

                                    <li><input type="text" name="name" required ></li>

                                    <li><input type="text" name="birthday" required ></li>

                                    <li><input type="text" class="hp" name="hp1" value="010"> - <input type="text" class="hp" name="hp2"> - <input type="text" class="hp" name="hp3"></li>

                                    <li><input type="text" id="email1" name="email1"> @ <input type="text" id ="email2" name="email2"></li>

                                </ul>

                             </div>

                             <div class="clear"></div>

                             <div id="must"> * 는 필수 입력항목입니다.^^</div>

                         </div>

                         <div id="button"><a href="#"><img src="../img/button_save.gif"
                             onclick="check_input()"></a>&nbsp;&nbsp;
                             <a href="../index.php"><img src="../img/button_reset.gif" onclick="reset_form()"></a>

                         </div>

                    </form>

                </div> <!-- end of col2 -->

            </div> <!-- end of content -->

        </div> <!-- end of wrap -->



    </body>

</html>
