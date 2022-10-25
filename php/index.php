<?php
     $firstName= $_POST['fname'];
     $lastName= $_POST['lname'];
     $phoneNumber= $_POST['phone'];
     $feedbackCategory= $_POST['category'];
     $feedbackMessage= $_POST['message'];


     //Database connection
     $servername="localhost";
     $username="maralinks1_quiverAdmin";
     $pass="Quiver2022";
     $dbname="maralinks1_quiverDB";
     $conn =mysqli_connect($servername,$username, $pass,$dbname);
     if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
     }else{
        $stmt=$conn->prepare("insert into customer_feedback(firstName, lastName, phoneNumber, feedbackCategory, feedbackMessage)
        values(?,?,?,?,?)");
        $stmt->bind_param("ssiss",$firstName,$lastName,$phoneNumber,$feedbackCategory,$feedbackMessage);
        $stmt->execute();
        echo "Feedback submitted successfuly....";
        $stmt->close();
        $conn->close();
     }


?>