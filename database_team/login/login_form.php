<?php
    session_start();
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="../css/login.css">
<link rel="stylesheet" type="text/css" href="../css/member.css">


</head>
<body>
    <div id="wrap">
        <div id="header">
            <?php include "../lib/top_login2.php" ?>
        </div>
        <div id="menu">
            <?php include "../lib/top_menu2.php" ?>
        </div>
        <div id="content">
            <div id="col1">
                <div id="left_menu">
                </div>
            </div>
            <div id="col2">
            <form name="login_form" method="post" action="login_result.php">
                <div id="title">
                    <img src="../img/title_login.gif">
                </div>
                <div id="login_form">
                    <img src="../img/login_msg.gif" id="login_msg">
                <div class="clear"></div>
                    <div id="login1">
                        <img src="../img/login_key.gif">
                    </div>
                    <div id="login2">
                        <div id="id_input_button">
                            <div id="ud_pw_title">
                                <ul>
                                    <li><img src="../img/id_title.gif"></li>
                                    <li><img src="../img/pw_title.gif"></li>
                                </ul>
                            </div>
                            <div id="id_pw_input">
                                <ul>
                                    <li><input type="text" name="id" class="login_input" required</li>
                                    <li><input type="password" name="pass" class="login_input" required</li>

                                </ul>
                            </div>
                            <div id="login_button">
                                <input type="image" src="../img/login_button.gif" onclick= "document.member_form.submit()">
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div id="login_line"></div>
                        <div id="join_button">
                            <img src="../img/no_join.gif">&nbsp;&nbsp; &nbsp;&nbsp; <a href="../member/insertForm.php"> <img src="../img/join_button.gif"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
