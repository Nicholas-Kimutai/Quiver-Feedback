<?php

$servername = "localhost";
$username = "maralinks1_quiverAdmin";
$password = "Quiver2022";


$conn=mysqli_connect($servername,$username,$password); 
$db=mysqli_select_db($conn,'maralinks1_feedbackDB');



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