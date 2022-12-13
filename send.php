<?php
/* Здесь проверяется существование переменных */
if (isset($_POST['name'])) {$phone = $_POST['name'];}
if (isset($_POST['phone'])) {$name = $_POST['phone'];}
if (isset($_POST['email'])) {$name = $_POST['email'];}
if (isset($_POST['message'])) {$name = $_POST['message'];}

/* Сюда впишите свою эл. почту */
$myaddres  = "i-say@yandex.ru";

/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "На сайте meddenta-klin.ru была оформлена новая заявка – запись на консультацию.\nИмя: $name\nТелефон: $phone\nE-mail: $email\nСообщение: $message\n";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Запись на консультацию. Заявка с сайта meddenta-klin.ru'; // Тема письма
$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="refresh" content="3; url=index.html">
<title>Спасибо!</title>
<meta name="generator">
<script type="text/javascript">
setTimeout('location.replace("/index.html")', 5000);
</script>
</head>
<body>
<h1>Спасибо! Мы свяжемся с вами!</h1>
</body>
</html>