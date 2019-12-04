<?php
include 'dbconnect.php';
extract($_POST);
$date = $_POST['date'];

$sql = "SELECT branch_name FROM showing_info group by branch_name";
$result = mysqli_query($dbconn, $sql);
while ($R = mysqli_fetch_array($result)) {
    $schedule[] = array(0 => $R['branch_name']);
}
for ($i = 0; $i < count($schedule); $i++) {
    echo "<div><p id='theater$i' onclick=movies('".$schedule[$i][0]."','$i',".count($schedule).")>".$schedule[$i][0]."</p></div>";
}
?>
