<?php
session_start();
include_once "config.php";
$str="";
$i=0;

foreach($_SESSION['completed'] as $key=>$value)
{
    foreach($value as $keyn => $sub)
    {
        // print_r($sub);
        print_r($_SESSION['completed'][$sub]);
    }
    
}
// echo "<pre>";
// print_r($_SESSION['completed']);
// echo "</pre>";
//  $str .= "<li><input type='checkbox'checked name='checkme'  
//     id=$i onclick='incomplete_to_complete(this.id)'><label>$value</label><input type='text'>
//     <button class='delete'id=$i onclick='deletetask(this.id)'>Delete</button></li>";
//     $i++;
   
   
    

//  echo ($str);


?>