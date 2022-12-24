<?php

include("header.php");

?>



<!doctype html>
<html lang="en" class="no-js">

<!-- Mirrored from html.profilefront.com/charity/blog-detail.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 06 Jan 2021 08:42:33 GMT -->

<head>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="css/normalize.css" />
    <link rel="stylesheet" type="text/css" href="css/custom-icons.css" />
    <link rel="stylesheet" type="text/css" href="css/plugin-css.css" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="stylesheet" type="text/css" href="css/color.css" />
    <link rel="stylesheet" type="text/css" href="css/responsive.css" />
    
    
    
</head>

<body>
    <!-- LOADER -->

    <!-- Header End -->
    <!-- Sub Header Start -->
    <div class="sub-header data-bg" data-stellar-background-ratio="0.5" data-image-src="images/sub-header-bg.jpg">
        <div class="container">
            <h1 class="title">ADMIN</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">ADMIN</li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- Sub Header End -->

    <!-- Post Navigation End -->
    <!-- Comment Wrap Start -->
    <br>
    <ul type="none">
                    <li style="display:inline; padding-right:20px;color:#fb7f61;font-size:30px;margin-left:10%;">
                        <a href="show%20delete.php">Delete Comments</a>
                    </li>
                    <li style="display:inline; padding-right:20px;color:#fb7f61;font-size:30px;margin-left:35%;" >
                        <a href="show%20msg.php">Contact Messages</a>
                    </li>
    </ul>
    <br>
<?php
$conn=mysql_connect("127.0.0.1","root","");
mysql_select_db("comment_blog");
$sql=mysql_query("SELECT * FROM comments");
$sq=mysql_query("SELECT * FROM contact");
$sql2=mysql_query("SELECT count(id) FROM comments");
$id=mysql_fetch_row($sql2);

echo '<div class="comment-wrap mb-30" style="margin-right:20%;margin-left:5%; "><div class="commment_title"><h3 class="title">'.$id[0].' COMMENT</h3></div><ul class="comment-list" ';

    while($row=mysql_fetch_assoc($sql))
{   
    $name=$row['name'];
    $comment=$row['comment'];
    $likes=$row['likes'];
    $date=$row['date'];
    
        echo '<li>
            <div class="comment-box mb-30" >
                <div class="d-flex justify-content-between" style="width:100%">
                    <div class="">
                    <h6 class="title">'.$name.'</h6>
                    </div>
                    <div class="">
                    <h6 style="color:#fb7f61;" class="title">'.$date.'</h6>
                    </div>
                </div>
                
                <p>'.$comment.'</p>
                
                <div class="d-flex justify-content-between">
                   <div class="">
                        <a class="comment-reply-link" href="update.php?rn='.$row['id'].'"></a>
                    </div>
                    <div class="">
                        <a class="comment-reply-link" href="delete.php?rn='.$row['id'].'">Delete</a>
                    </div>
                    
				</div>
                
            </div>
        </li>';
}
echo '</ul></div>';
if(isset($_GET['error']))
    echo"<p>100 charecter limit";
?>
    </body>

</html>


<?php
include("footer.php");

?>