<?php
  $to = 'npofopr@gmail.com';
  // $subject = ''.$_POST['subject'].'';
  $subject = 'ФОРМА';
  $message = '
  <html>
    <head>
      <title>' . $subject . '</title>
    </head>
    <body>
      <p>Заявка: '.$_POST['subject'].'</p>
      <p>Телефон: '.$_POST['tel'].'</p>
      <p>Email: '.$_POST['email'].'</p>
    </body>
  </html>';

  $header = "Content-Type: text/html; charset=utf-8 \r\n";
  $header = "From: Отправитель <".$to.">\r\n";

  mail($to, $subject, $message, $header);
?>
