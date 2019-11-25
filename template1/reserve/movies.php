<?php
include 'dbconnect.php';
extract($_POST);
$test1 = $_POST['year'];
$test2 = $_POST['month'];
$test3 = $_POST['day'];
$test4 = $_POST['num'];


$sql = "SELECT * FROM movies where id=$test4 and date='$test1-$test2-$test3'";
$result = mysqli_query($dbconn, $sql);
while ($R = mysqli_fetch_array($result)) {
    $schedule[] = array(0 => $R['title'],1 => $R['date'],2 => $R['id']);
}
$i = 0;
for ($i = 0; $i < count($schedule); $i++) {
    // echo "<img src=".$schedule[$i][2].">"; 이미지 넣어볼라고 했는데 그냥 안 넣을래요
    echo "<div onclick=time(".$schedule[$i][0].",".$schedule[$i][1].",".$schedule[$i][2].")><li>".$schedule[$i][0]."</li></div>";
}
?>
