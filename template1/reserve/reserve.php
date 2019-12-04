<?php
include 'dbconnect.php';
extract($_POST);
<<<<<<< HEAD
$id = $_POST['id'];
=======
$id = $_POST["id"];
>>>>>>> b3eb5ec1cde6a10ccdb81432e54364a3862ee4f8
$date = $_POST['date'];
$name = $_POST['name'];
$title = $_POST['title'];
$time = $_POST['time'];
$seat = $_POST['seat'];
$seat_num = count($seat);
$seat_val = "";
foreach ($seat as $value) {
    $seat_val = $value.",".$seat_val;
}

<<<<<<< HEAD
$sql = "INSERT INTO reservation_info (branch_name,id,title,movie_date,movie_time,seat,number,screen) VALUES ('".$name."' ,'".$id."','".$title."','".$date."','".$time."','".$seat_val."',$seat_num,'1관')";
=======
$sql = "INSERT INTO reservation_info (id,branch_name,title,movie_date,movie_time,seat,number,screen) VALUES ('".$id."','".$name."' ,'".$title."','".$date."','".$time."','".$seat_val."',$seat_num,'1관')";
>>>>>>> b3eb5ec1cde6a10ccdb81432e54364a3862ee4f8
$result = mysqli_query($dbconn, $sql);
if($result){
    echo 1;
} else {
    echo 0;
}
?>
