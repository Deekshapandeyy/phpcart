<?php
session_start();
include_once "config.php";
 include_once "addtask.php";
 $str="";
 $i=0;
echo $str;
foreach($_SESSION['completed'] as $key=>$value)
{
    
    $str .= "<li><input type='checkbox'checked id=$i onclick='incompletetask(this.id)'>
    <label>$value</label><input type='text'>
    <button class='delete'id=$i onclick='deletetask(this.id)'>Delete</button></li>";
    $i++;
   
    
}
 echo ($str);
include "delete.php";
?>