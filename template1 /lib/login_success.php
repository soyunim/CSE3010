<div id="top_login">
<?php
if(!isset($_SESSION["userid"]))
{
?>
<?php
}
else
{
?>
	<a class ="nav-link"> <?=$_SESSION["userid"]?>님 (등급:<?=$_SESSION["membership_rating"]?>)</a>
<?php
}
?>
 </div>
