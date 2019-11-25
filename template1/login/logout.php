<?php
    session_start();
    unset($_SESSION["userid"]);
    unset($_SESSION["name"]);
    unset($_SESSION["membership_rating"]);
    header("Location:http://localhost:6563/template1/index.php");
 ?>
