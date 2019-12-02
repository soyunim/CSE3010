<?php
include 'dbconnect.php';
extract($_POST);
$date = $_POST['date'];
$name = $_POST['name'];
$title = $_POST['title'];


$sql = "SELECT * FROM showing_info where branch_name='$name' and movie_date='$date' and title='$title'";
$result = mysqli_query($dbconn, $sql);
// echo "$result";
while ($R = mysqli_fetch_array($result)) {
    $schedule[] = array(0 => $R['title'],1 => $R['movie_date'],2 => $R['movie_time'] ,3 => $R['branch_name']);
}
$i = 0;
for ($i = 0; $i < count($schedule); $i++) {
    echo "<div><li id='time$i' onclick=seat('".$schedule[$i][0]."','".$schedule[$i][2]."','".$schedule[$i][3]."','$i',".count($schedule).")>".$schedule[$i][2]."</li></div>";
}
?>
