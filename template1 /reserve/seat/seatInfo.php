<?php
include '../dbconnect.php';
extract($_POST);
$branch_name = $_POST['name'];
$title = $_POST['title'];
$movie_start_time = $_POST['time'];
$movie_date = $_POST['date'];

 // WHERE branch_name = '$branch_name' and title = '$title' and movie_start_time = '$movie_start_time' and movie_date = '$movie_date'
$sql = "SELECT * FROM `seat_info` ORDER BY `seat_info`.`seat` ASC";
$result = mysqli_query($dbconn, $sql);
while ($R = mysqli_fetch_array($result)) {
    $seats[] = array(0 => $R['seat'],1 => $R['seat_class']);
}
// print_r($seats);
$k = 0;
$alphabet = array("A","B","C","D","E");
for($i =0; $i < 5; $i++){
    echo "<div class='seatRow'>
        <div class='seatRowNumber'>
            $alphabet[$i]
        </div>";
    for($j = 1; $j<9;$j++,$k++){
        $a = $seats[$k][0];
        if($seats[$k][1] == 0){
            echo "<div id='$a' name='seat' role='checkbox' value='5000' aria-checked='false' focusable='true' tabindex='-1' class='seatNumber seatUnavailable'>$j</div>";
        } else{
            echo "<div id='$a' name='seat' role='checkbox' value='5000' aria-checked='false' focusable='true' tabindex='-1' class='seatNumber'>$j</div>";
        }
    }
    echo "</div>";
}
?>
