<?php
    session_start();
    unset($_SESSION["userid"]);
    unset($_SESSION["name"]);
    unset($_SESSION["membership_rating"]);
    unset($_SESSION["permit"]);
    header("location:../index.php");
 ?>
