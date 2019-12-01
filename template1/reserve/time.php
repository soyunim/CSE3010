<?php
include 'dbconnect.php';
extract($_POST);
$test1 = $_POST['year'];
$test2 = $_POST['month'];
$test3 = $_POST['day'];
$test4 = $_POST['num'];
$test5 = $_POST['ttitle'];


$sql = "SELECT * FROM time where id=$test4 and date='$test1-$test2-$test3' and title='$test5'";
$result = mysqli_query($dbconn, $sql);
// echo "$result";
while ($R = mysqli_fetch_array($result)) {
    $schedule[] = array(0 => $R['title'],1 => $R['date'],2 => $R['time'] ,3 => $R['id']);
}
$i = 0;
for ($i = 0; $i < count($schedule); $i++) {
    echo "<div><li id='time$i' onclick=seat('".$schedule[$i][0]."','".$schedule[$i][2]."',".$schedule[$i][3].",'$i',".count($schedule).")>".$schedule[$i][2]."</li></div>";
}
?>
