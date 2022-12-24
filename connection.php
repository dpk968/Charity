<?php
$conn=mysql_connect("127.0.0.1","root","");
mysql_select_db("comment_blog");
$name=$_POST['name'];
$comment=$_POST['comment'];
$comment_length=strlen($comment);
if($comment_length>100)
{
header('location:blog-detail.php?error=1');
}
else
{
    mysql_query("INSERT INTO comments(id,name,comment) VALUES('','$name','$comment')");
header('location:blog-detail.php'); 
}
?>