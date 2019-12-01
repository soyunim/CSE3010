<?php
include 'dbconnect.php';
extract($_POST);
$date1 = $_POST['year'];
$date2 = $_POST['month'];
$date3 = $_POST['day'];
$id = $_POST['id'];
$title = $_POST['title'];
$time = $_POST['time'];
$seat = $_POST['seat'];
$seat_num = count($seat);
$seat_val = "";
foreach ($seat as $value) {
    $seat_val = $seat_val.",".$value;
}
$date = "$date1-$date2-$date3";

$sql = "INSERT INTO reserve (id,ddate,title,ttime,seat,seat_num) VALUES ('".$id."' ,'".$date."','".$title."','".$time."','".$seat_val."',$seat_num)";
$result = mysqli_query($dbconn, $sql);
if($result){
    echo 1;
} else {
    echo 0;
}
?>
