<?php
include 'dbconnect.php';
extract($_POST);
$date = $_POST['date'];
$name = $_POST['name'];


$sql = "SELECT title,branch_name FROM showing_info where branch_name='$name' and movie_date='$date' group by title,branch_name";
$result = mysqli_query($dbconn, $sql);
while ($R = mysqli_fetch_array($result)) {
    $schedule[] = array(0 => $R['title'],1 => $R['branch_name']);
}
$i = 0;
for ($i = 0; $i < count($schedule); $i++) {

    echo "<div><p id='movie$i' onclick=time('".$schedule[$i][0]."','".$schedule[$i][1]."','$i',".count($schedule).")>".$schedule[$i][0]."</p></div>";
}
?>
