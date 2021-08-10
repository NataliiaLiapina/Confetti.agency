
<?php
$to = "lyapina.natalya@ukr.net";
$subject = "Заказ консультации по аренде оборудования";
$message = "Имя: ".$_POST['fio']."
Телефон: ".$_POST['tel'];
$header = "Content-type:text/plain; charset = UTF-8\r\nReply-To:\r\nFrom: <contact>";
if (mail($to, $subject, $message, $header)) {
  echo ('Спасибо, данные отправлены! Мы с Вами свяжемся в ближайшее время');
   echo ('<br/><br/><br/><img src="images/svg/ok.svg" alt="" />');
}
else {
  echo ('Ошибка! Попробуйте снова');
}
?>