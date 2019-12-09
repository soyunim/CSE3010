<?php
include 'dbconnect.php';
extract($_POST);
$reserve_code = $_POST['code'];


$sql = "DELETE FROM reservation_info where reserve_code = $reserve_code";
$result = mysqli_query($dbconn, $sql);

mysqli_close($dbconn);

if($result){
    echo 1;
}
else {
    echo 0;
}
?>
