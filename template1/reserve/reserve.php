<?php
include 'dbconnect.php';
extract($_POST);
$id = $_POST["id"];
$date = $_POST['date'];
$name = $_POST['name'];
$title = $_POST['title'];
$time = $_POST['time'];
$seat = $_POST['seat'];
$seat_num = count($seat);
$seat_val = "";
foreach ($seat as $value) {
    $seat_val = $seat_val.",".$value;
}

$sql = "INSERT INTO reservation_info (id,branch_name,title,movie_date,movie_time,seat,number,screen) VALUES ('".$id."','".$name."' ,'".$title."','".$date."','".$time."','".$seat_val."',$seat_num,'1관')";
$result = mysqli_query($dbconn, $sql);
if($result){
    echo 1;
} else {
    echo 0;
}
?>
