<?php
if (!isset($_SESSION['task'])) {
    $_SESSION['task'] = array();
}
if (!isset($_SESSION['completed'])) {
    $_SESSION['completed'] = array();
}
// unset($_SESSION['completed']);
// session_destroy();
?>