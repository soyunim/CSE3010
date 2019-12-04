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
    $schedule[] = array(0 => $R['title'],1 => $R['movie_time'] ,2 => $R['branch_name']);
}
$i = 0;
for ($i = 0; $i < count($schedule); $i++) {
    echo "<div><p id='time$i' onclick=seat('".$schedule[$i][0]."','".$schedule[$i][1]."','".$schedule[$i][2]."','$i',".count($schedule).")>".$schedule[$i][1]."</li></p>";
}
?>
