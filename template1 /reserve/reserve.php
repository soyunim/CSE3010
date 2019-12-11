<?php
include 'dbconnect.php';
extract($_POST);
$id = $_POST['id'];
$date = $_POST['date'];
$name = $_POST['name'];
$title = $_POST['title'];
$time = $_POST['time'];
$seat = $_POST['seat'];
$price = $_POST['price'];
$seat_num = count($seat);
$seat_val = "";
foreach ($seat as $value) {
    $seat_val = $value.",".$seat_val;
}
// $sql = "SELECT * from reservation_info";
// $sql = "INSERT INTO refund_info values(1,'1','1')";
$sql = "INSERT INTO reservation_info (branch_name,id,title,movie_date,movie_time,seat,number,screen,price) VALUES ('".$name."' ,'".$id."','".$title."','".$date."','".$time."','".$seat_val."',$seat_num,'1관',$price)";
$result = mysqli_query($dbconn, $sql);
$sql = "UPDATE member SET history = history +$price WHERE id = '$id'";
$result = mysqli_query($dbconn, $sql);
if($result){
    echo 1;
} else {
    echo 0;
}

?>
