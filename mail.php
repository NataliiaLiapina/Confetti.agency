<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['tel'])) {$email = $_POST['tel'];}

$to = "lyapina.natalya@ukr.net"; /*������� ��� ����� ������������ �����*/
$headers = "Content-type: text/plain; charset=utf-8";
$subject = "��������� � ������ �����";
$message = "��� ����������: $name \n�������: $email";
$send = mail ($to, $subject, $message, $headers);
if ($send == 'true')
{
echo "<b>������� �� �������� ������ ���������!<p>";
echo "<a href=index.html>�������,</a> ����� ��������� �� ������� ��������";
}
else
{
echo "<p><b>������. ��������� �� ����������!";
}
?>