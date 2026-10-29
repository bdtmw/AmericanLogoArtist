<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
   
    $message = 'Client Name: ' . $_POST["name"]. "\n";
    $message .= 'Client Phone: ' . $_POST["number"]. "\n";
    $message .= 'Client Email: ' . $_POST["email"]. "\n";
    $message .= 'Client Message: ' . $_POST["scomment"]. "\n";

    // Replace with your G Suite email address
    $to = "info@americanlogoartist.com";
    $subject = "Order Now Form Query";
    $headers = "From: $email\r\n";
   
    if (mail($to, $subject, $message, $headers)) {
        // header('Location: thankyou.php');
        // exit;
        echo "done";
    } else {
        echo "error";
        // header('Location: index.php');
        // exit;
    }
}
?>