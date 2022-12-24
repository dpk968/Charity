<?php
$conn=mysql_connect("127.0.0.1","root","");
mysql_select_db("comment_blog");


$i=$_GET['rn'];
$query="delete from comments where id='$i'";
$r=(mysql_query($query));
if($r)
{ 
   header('location:show delete.php');
//       <META HTTP-EQUIV="Refresh" CONTENT="0;URL=http://localhost/comment-blog/comment.php">
    }
else '<script>alert("error")</script>';
?>