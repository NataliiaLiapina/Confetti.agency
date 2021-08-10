<?php
$to = "lyapina.natalya@ukr.net";
$subject = "Заказ с сайта";
$message = "Наименование:".$_POST['name-dev']."
Имя: ".$_POST['fio']."
Телефон: ".$_POST['tel']."
E-mail: ".$_POST['email'];
$header = "Content-type:text/plain; charset = UTF-8\r\nReply-To:\r\nFrom: <contact>";
if (mail($to, $subject, $message, $header)) {
  echo ('Спасибо, данные отправлены! Мы с Вами свяжемся в ближайшее время');
  echo ('<br/><br/><br/><img src="images/svg/ok-black.svg" alt="" />');
 }
else {
  echo ('Ошибка! Попробуйте снова');
}
?>