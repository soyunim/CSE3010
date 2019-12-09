<?php
include '../dbconnect.php';
extract($_POST);
$seat = $_POST['seat'];

for($i=0; $i<count($seat); $i++){
    $sql = "UPDATE seat_info set seat_class=0 where seat='$seat[$i]'";
    $result = mysqli_query($dbconn, $sql);
}

if($result){
    echo 1;
} else {
    echo 0;
}
?>
