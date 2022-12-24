<?php
$conn=mysql_connect("127.0.0.1","root","");
mysql_select_db("comment_blog");


$id=$_GET['rn'];

$query="update comments set likes=likes+1 where id='$id'";
$r=(mysql_query($query));
if($r)
{ 
   header('location:blog-detail.php');
//       <META HTTP-EQUIV="Refresh" CONTENT="0;URL=http://localhost/comment-blog/comment.php">
    }
else '<script>alert("error")</script>';
?>