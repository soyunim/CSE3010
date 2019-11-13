    <div id="logo"><a href="./index.php"><img src="./img/cgv.gif" border="0" width ="100px" ></a></div>
	<div id="top_login">
<?php
    if(!isset($_SESSION["userid"]))
	{
?>
          <a href="./login/login_form.php">로그인</a> | <a href="./member/insertForm.php">회원가입</a>
<?php
	}
	else
	{
?>
		<?=$_SESSION["nick"]?> (level:<?=$_SESSION["level"]?>) |
		<a href="./login/logout.php">로그아웃</a> | <a href="./member/updateForm.php?id=<?=$_SESSION["userid"]?>">정보수정</a>
<?php
	}
?>
	 </div>
