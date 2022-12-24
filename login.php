<html>
    <head>
        <title> Welcome to login page</title>
        <link rel="stylesheet" href="logcss.css">
    </head>
    <body>
        <a href="index.php" style="float:right;"><img src="images/cross.png" heigh="100px" width="50px"></a>
        <div class="box">
            <h3>ADMIN</h3>
            <form action="validation.php" method="post">
                <div class="inputBox">
                    <label>Username</label><br>
                    <input type="text" name="username">
                </div>
                <div class="inputBox">
                     <label>Password</label><br>
                    <input type="password" name="password">
                   </div>
                <center>
                    <input style="align-content: center;"  type="submit" value="login" class="submit">
                </center>
                <!--<a href="signup.php"><input  type="submit" value="signup"></a>-->
                <br>
            </form>
        </div>
        <br><br>
        
    </body>
</html>




