<?php
$conn=mysql_connect("127.0.0.1","root","");
mysql_select_db("comment_blog");
$name=$_POST['name'];
$mob=$_POST['mob'];
$msg=$_POST['msg'];
$q=mysql_query("INSERT INTO contact(name,mob,msg) VALUES('$name','$mob','$msg')");
if($q)
{
header('location:contact.php');
}
?>