<?php
$title = "Thank You";
?>
<?php
//Banner Page Direct Emai
if (isset($_POST['signupForm'])) {
    $from_email         = $_POST["email"];
    $recipient_email    = 'info@americanlogoartist.com';
    $subject = "Order Now | Form Query" ;
    $sender_name    = filter_var($_POST["name"], FILTER_SANITIZE_STRING); 
    $reply_to_email = filter_var($_POST["email"], FILTER_SANITIZE_STRING); 
    $contact        = filter_var($_POST["number"], FILTER_SANITIZE_STRING);
    $message        = filter_var($_POST["scomment"], FILTER_SANITIZE_STRING);
    // $ip = $_POST['ip'];
        $headers = "MIME-Version: 1.0\r\n"; 
        $headers .= "From:".$from_email."\r\n"; 
        $headers .= "Reply-To: ".$reply_to_email."" . "\r\n";
        // $headers .= "BCC: adam@foxwebguru.com,";
        $body .= "\n Name: " . $sender_name;
		$body .= "\n Email: " . $reply_to_email; 
		$body .= "\n Contact Number: " . $contact;
		$body .= "\n Message: " . $message;
        $body .= "$boundary\r\n";
    $success = @mail($recipient_email, $subject, $body, $headers);
}



if (isset($success) && $success) { 
?>


<html>
<head>
<title>Thank You</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10973222728"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
    gtag('config', 'AW-10973222728');
    </script>
</head>
<body>
	<section class="error-page onepage-screen-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="content" data-sal="slide-up" data-sal-duration="800" data-sal-delay="400">
                            <h4 class="thakyouhead"> Thank You <?php echo $sender_name; ?></h4>
                            <p>We can already envision a bright future ahead for you. Our customer support team will be in contact with you shortly. Now that you have sown the seeds of your success, we’ll ripen your fruit of prosperity.</p>
                            <a href="https://www.americanlogoartist.com/" class="axil-btn btn-fill-primary">Go Back To Home</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="thumbnail" data-sal="zoom-in" data-sal-duration="800" data-sal-delay="400">
                            <img src="thankyou.png" alt="404">
                        </div>
                    </div>
                </div>
            </div>
    </section>
<?php }
else 
{
?>
<H1>Your Request Can Not Be Submit. Please Try Again...</H1>
<?php }
?>
<style>
.thumbnail {border: 1px solid #d71a38;}.content p { font-size: 23px; line-height: 35px;}h4.thakyouhead {font-size: 30px;}.onepage-screen-area {margin-top: 0px;padding: 0px 0 50px;}a.axil-btn.btn-fill-primary {border: none;box-shadow: none;padding: 13px 28px;border-radius: 5px;outline: none;letter-spacing: 1px;text-transform: uppercase;font-size: 17px;    display: inline-block;margin: 0 auto!important;height: auto;color: #fff;font-weight: 600;background: #d71a38;text-decoration: none;}.content {overflow: inherit;}.onepage-screen-area {position: relative;z-index: 1;background: var(--gradient-primary);min-height: 500px;height: 100vh;padding: 150px 0;display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;-webkit-box-align: center;-webkit-align-items: center;-ms-flex-align: center;align-items: center;overflow: hidden;}
</style>
</body>
</html>
