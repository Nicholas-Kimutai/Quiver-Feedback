<?php
$conn=mysqli_connect("127.0.0.1","root","",); 
$db=mysqli_select_db($conn,'quiver');


if(isset($_POST['feedsub']))
{
    $name=$_POST["name"];
    $phone=$_POST["phone"];
    $category=$_POST["category"];
    $message=$_POST["message"];

    $query = "INSERT INTO feedback VALUES(0, '$name', '$phone', '$category', '$message')";
    $query_run=mysqli_query($conn, $query);

    if($query_run)
    {
       
       header('Location:confirmation.php');
       
    }

    else{

        die("Connection failed: " . $conn->connect_error);
    }

}

?>