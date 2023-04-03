<?php
session_start();
include_once "config.php";
//print_r($_POST['d']);
$temp=array();
$i=$_POST['d']*1;
//print_r(array_splice($_SESSION['task'],$i,1));
array_push($_SESSION['completed'],$_POST['task']['d']);
//print_r($temp);

// if($temp!="")
// {
//     array_push($_SESSION['completed'],$temp);
// }
// //session_destroy();
// print_r($_SESSION['completed']);

// session_unset();
//     session_destroy();

?>