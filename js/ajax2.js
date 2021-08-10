$('#my_form_email2').submit(function(){
    $.post(
        'send2.php', // адрес обработчика
         $("#my_form_email2").serialize(), // отправляемые данные          
  
        function(msg) { // получен ответ сервера  
            $('#my_form_email2').hide('slow');
            $('#my_message_email2').html(msg);
        }
    );
    
    return false;
});
