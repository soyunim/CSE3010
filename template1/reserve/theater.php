<?php
include 'dbconnect.php';
extract($_POST);
$date = $_POST['date'];

$sql = "SELECT * FROM showing_info";
$result = mysqli_query($dbconn, $sql);
while ($R = mysqli_fetch_array($result)) {
    $schedule[] = array(0 => $R['title'],1 => $R['movie_date'], 2 => $R['branch_name']);
}
for ($i = 0; $i < count($schedule); $i++) {
    // echo "<img src=".$schedule[$i][2].">"; 이미지 넣어볼라고 했는데 그냥 안 넣을래요
    echo "<div><li id='theater$i' onclick=movies('".$schedule[$i][2]."','$i',".count($schedule).")>".$schedule[$i][2]."</li></div>";
}
?>
