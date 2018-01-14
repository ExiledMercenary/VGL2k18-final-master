<?php 
    $conn = new mysqli("localhost", "root", "root","vgl");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    
    if (isset($_POST['submit']))
    {
        $name=$_POST['name'];
        $lname=$_POST['lname'];
        $email=$_POST['email'];
        $phno=$_POST['phno'];
        $mesg=$_POST['mesg'];
        if (preg_match("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z.]{2,5}$/", $email)&&preg_match("/^[a-zA-Z]/", $name)&&preg_match("/^[a-zA-Z]/", $lname)&&preg_match("/^[a-zA-Z]/", $mesg)&&preg_match("/^[0-9]/", $phno)) {
            $query = "INSERT INTO vgl_database18(`Name`, `Lname`, `email`, `Phno`, `mesg`) VALUES ('$name','$lname','$email','$phno','$mesg')";
            if ($conn->query($query) === TRUE) {
                echo "Message Delivered Successfully";
            } else {
                echo "Error: " . $query . "<br>" . $conn->error;
            }
            
            $conn->close();
        }
    }
    else 
    {
        echo "<br> Button Not Pressed";
    }
?>
