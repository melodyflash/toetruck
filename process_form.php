<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $petName = $_POST['petName'];
  $needs = $_POST['needs'];
  $date = $_POST['date'];

  $to = "your_email@example.com";
  $subject = "New Booking Request";
  $message = "Pet Name(s): " . $petName . "\nNeeds: " . $needs . "\nDate: " . $date;
  $headers = "From: your_website@example.com" . "\r\n" .
             "Reply-To: your_website@example.com" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  if (mail($to, $subject, $message, $headers)) {
    echo "Form data sent successfully!";
  } else {
    echo "Failed to send form data!";
  }
}
?>
