<?php
session_start();
include_once "config.php";
$text=$_POST['d'];
$editid=$_POST['globalid'];
foreach($_SESSION['task'] as $key => $value)
{
    if($key==$editid)
    {
        $_SESSION['task'][$key]=$text;

    }
}


?>