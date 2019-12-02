<?php
include 'dbconnect.php';
extract($_POST);
$date = $_POST['date'];
$name = $_POST['name'];


$sql = "SELECT * FROM showing_info where branch_name='$name' and movie_date='$date'";
$result = mysqli_query($dbconn, $sql);
while ($R = mysqli_fetch_array($result)) {
    $schedule[] = array(0 => $R['title'],1 => $R['movie_date'],2 => $R['branch_name']);
}
$i = 0;
for ($i = 0; $i < count($schedule); $i++) {
    // echo "<img src=".$schedule[$i][2].">"; 이미지 넣어볼라고 했는데 그냥 안 넣을래요
    echo "<div><li id='movie$i' onclick=time('".$schedule[$i][0]."','".$schedule[$i][2]."','$i',".count($schedule).")>".$schedule[$i][0]."</li></div>";
}
?>
