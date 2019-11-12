<?php
	include "../db.php";
	include "../password.php";

	$userid = $_POST['userid'];
	$userpw = password_hash($_POST['userpw'], PASSWORD_DEFAULT);
	$username = $_POST['name'];
	$phone_number = $_POST['phone_number'];
	$birthday = $_POST['birthday'];
	$email = $_POST['email'].'@'.$_POST['emadress'];

$sql = mq("insert into member (id,pw,name,phone_number,birthday,email) values('".$userid."','".$userpw."','".$username."','".$phone_number."','".$birthday."','".$email."')");

?>
<meta charset="utf-8" />
<script type="text/javascript">alert('회원가입이 완료되었습니다.');</script>
<meta http-equiv="refresh" content="0 url=/">
