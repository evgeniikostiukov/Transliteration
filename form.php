<?php

$text_msg = $_POST['textfield'];
$count_msg = $_POST['count'];
$db_host = 'localhost';
$db_user = 'root';
$db_password = 'root';
$db_base = 'form';
$db_table = 'example';
$mysqli = new mysqli($db_host, $db_user, $db_password, $db_base);
if ($mysqli->connect_error) {
    die('Ошибка : (' .$mysqli->connect_errno .') '.$mysqli->connect_error);
}
$query = $mysqli->query("INSERT INTO ".$db_table." (txt_msg, count_msg) VALUES ('$text_msg', '$count_msg')");
if ($query == true){
    echo "Информация занесена в базу данных";
}else{
    echo "Информация не занесена в базу данных \n";
    echo $mysqli->error;
    echo $text_msg;
    echo $count_msg;

}

