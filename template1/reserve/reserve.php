<?php
include 'dbconnect.php';
extract($_POST);
<<<<<<< HEAD
$id = $_POST["id"];
=======
>>>>>>> bc1ab63bb94f62076b259d752ba7f025fdfdeb05
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

<<<<<<< HEAD
$sql = "INSERT INTO reservation_info (id,branch_name,title,movie_date,movie_time,seat,number,screen) VALUES ('".$id."','".$name."' ,'".$title."','".$date."','".$time."','".$seat_val."',$seat_num,'1관')";
=======
$sql = "INSERT INTO reservation_info (branch_name,title,movie_date,movie_time,seat,number,screen) VALUES ('".$name."' ,'".$title."','".$date."','".$time."','".$seat_val."',$seat_num,'1관')";
>>>>>>> bc1ab63bb94f62076b259d752ba7f025fdfdeb05
$result = mysqli_query($dbconn, $sql);
if($result){
    echo 1;
} else {
    echo 0;
}
?>
