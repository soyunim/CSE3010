<div id="top_login">
<?php
if(!isset($_SESSION["userid"]))
{
?>
	  <a class="nav-link" href="../login/login_form.php">Login</a>
<?php
}
else
{
?>
	<a class="nav-link" href="../login/logout.php">Logout</a>
<?php
}
?>
 </div>
