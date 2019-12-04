<div id="top_login">
<?php
if(!isset($_SESSION["userid"]))
{
?>
	  <a class="nav-link" href="./member/insertForm.php">Sign up</a>
<?php
}
else
{
?>
	<a class="nav-link" href="modify.php?id=<?=$_SESSION["userid"]?>">회원정보 수정</a>
<?php
}
?>
 </div>
