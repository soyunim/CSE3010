<?php
include 'dbconnect.php';
extract($_POST);
$date = $_POST['date'];
$name = $_POST['name'];
$title = $_POST['title'];
$time = date("H:i");
$now = strtotime(date("H:i" , strtotime($day."+9 hours")));


$sql = "SELECT title,time_format(movie_start_time,'%H:%i'),time_format(movie_end_time,'%H:%i'),branch_name FROM showing_info where branch_name='$name' and movie_date='$date' and title='$title' group by title,movie_start_time,movie_end_time,branch_name";
$result = mysqli_query($dbconn, $sql);
// echo "$result";
while ($R = mysqli_fetch_array($result)) {
    $movie_time = $R["time_format(movie_start_time,'%H:%i')"].'~'.$R["time_format(movie_end_time,'%H:%i')"];
    $test = strtotime($R["time_format(movie_start_time,'%H:%i')"]);
    if($now < $test){
        $schedule[] = array(0 => $R['title'],1 => $movie_time, 2 => $R['branch_name'], 3=> $R["time_format(movie_start_time,'%H:%i')"]);
    }
}
for ($i = 0; $i < count($schedule); $i++) {
    echo "<div><p id='time$i' onclick=seat('".$schedule[$i][0]."','".$schedule[$i][1]."','".$schedule[$i][2]."',$i,".count($schedule).")>".$schedule[$i][1]."</li></p>";
}

?>
