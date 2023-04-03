<?php
session_start();
include_once "config.php";
$id=$_POST['d'][0];
$new_input=$_SESSION['task'][$_POST['d']];
$str="";

foreach($_SESSION["task"] as $key => $value )
{
    
   
    if($key==$id)
    {
      // print_r($key);
     $str.="$value";
      
      $i++;
    }
    
     
    
}
echo $str;
//echo $id;

//include_once "update.php";
 

?>
