
            var burger = document.getElementById("burger");
           
            burger.addEventListener("click", function (event) {
                event.preventDefault();
                burger.style.display = "none";
                $("#hidden-menu").css('display', 'block'); 
                $('body,html').animate({scrollTop:0});
            });
        

            var close_menu = document.querySelector(".hidden-menu-close");
           
            close_menu.addEventListener("click", function (event) {
                event.preventDefault();
                $("#hidden-menu").css('display', 'none'); 
                $("#burger").css('display', 'block'); 
            });



            var div_top = document.querySelector(".top");

            div_top.addEventListener("click", function (event) {
                event.preventDefault();
                $('body,html').animate({ scrollTop: 0 });
            });



            var popup_show = document.getElementById("popup-btn1");
            var popup_block = document.getElementById("popup1");
            var popup_close = document.querySelector(".popup-close");
            var popup_input = document.getElementById("popup-input");
            var popup_form = document.getElementById("popup-form");
            var popup_form_close = document.querySelector(".popup-form-close");
            var burger = document.getElementById("burger");

            popup_show.addEventListener("click", function (event) {
                event.preventDefault();
                popup_block.style.display = "block";
                burger.style.display = "none";
            });
            popup_close.addEventListener("click", function (event) {
                event.preventDefault();
                popup_block.style.display = "none";
                if (window.matchMedia("(max-width: 960px)").matches) {
                    burger.style.display = "block";
                }
            });
            popup_input.addEventListener("click", function (event) {
                event.preventDefault();
                popup_form.style.display = "block";
                document.getElementById("hidden").value = document.getElementById("name-id").outerText;
                popup_block.style.display = "none";
                burger.style.display = "none";
            });
            popup_form_close.addEventListener("click", function (event) {
                event.preventDefault();
                popup_form.style.display = "none";
                popup_block.style.display = "none";
                if (window.matchMedia("(max-width: 960px)").matches) {
                    burger.style.display = "block";
                }
            });


            var popup_show2 = document.getElementById("popup-btn2");
            var popup_block2 = document.getElementById("popup2");
            var popup_close2 = document.querySelector(".popup-close2");
            var popup_input2 = document.getElementById("popup-input2");
            popup_show2.addEventListener("click", function (event) {
                event.preventDefault();
                popup_block2.style.display = "block";
                burger.style.display = "none";
            });
            popup_close2.addEventListener("click", function (event) {
                event.preventDefault();
                popup_block2.style.display = "none";
                burger.style.display = "block";
            });
            popup_input2.addEventListener("click", function (event) {
                event.preventDefault();
                popup_form.style.display = "block";
                document.getElementById("hidden").value = document.getElementById("name-id2").outerText;
                popup_block2.style.display = "none";
                burger.style.display = "none";
            });


            var popup_show3 = document.getElementById("popup-btn3");
            var popup_block3 = document.getElementById("popup3");
            var popup_close3 = document.querySelector(".popup-close3");
            var popup_input3 = document.getElementById("popup-input3");
            popup_show3.addEventListener("click", function (event) {
                event.preventDefault();
                popup_block3.style.display = "block";
                burger.style.display = "none";
            });
            popup_close3.addEventListener("click", function (event) {
                event.preventDefault();
                popup_block3.style.display = "none";
                burger.style.display = "block";
            });
            popup_input3.addEventListener("click", function (event) {
                event.preventDefault();
                popup_form.style.display = "block";
                document.getElementById("hidden").value = document.getElementById("name-id3").outerText;
                popup_block3.style.display = "none";
                burger.style.display = "none";
            });


            var popup_show4 = document.getElementById("popup-btn4");
            var popup_block4 = document.getElementById("popup4");
            var popup_close4 = document.querySelector(".popup-close4");
            var popup_input4 = document.getElementById("popup-input4");
            popup_show4.addEventListener("click", function (event) {
                event.preventDefault();
                popup_block4.style.display = "block";
                burger.style.display = "none";
            });
            popup_close4.addEventListener("click", function (event) {
                event.preventDefault();
                popup_block4.style.display = "none";
                burger.style.display = "block";
            });
            popup_input4.addEventListener("click", function (event) {
                event.preventDefault();
                popup_form.style.display = "block";
                document.getElementById("hidden").value = document.getElementById("name-id4").outerText;
                popup_block4.style.display = "none";
                burger.style.display = "none";
            });


            var popup_show5 = document.getElementById("popup-btn5");
            var popup_block5 = document.getElementById("popup5");
            var popup_close5 = document.querySelector(".popup-close5");
            var popup_input5 = document.getElementById("popup-input5");
            popup_show5.addEventListener("click", function (event) {
                event.preventDefault();
                popup_block5.style.display = "block";
                burger.style.display = "none";
            });
            popup_close5.addEventListener("click", function (event) {
                event.preventDefault();
                popup_block5.style.display = "none";
                burger.style.display = "block";
            });
            popup_input5.addEventListener("click", function (event) {
                event.preventDefault();
                popup_form.style.display = "block";
                document.getElementById("hidden").value = document.getElementById("name-id5").outerText;
                popup_block5.style.display = "none";
                burger.style.display = "none";
            });


            var popup_show6 = document.getElementById("popup-btn6");
            var popup_block6 = document.getElementById("popup6");
            var popup_close6 = document.querySelector(".popup-close6");
            var popup_input6 = document.getElementById("popup-input6");
            popup_show6.addEventListener("click", function (event) {
                event.preventDefault();
                popup_block6.style.display = "block";
                burger.style.display = "none";
            });
            popup_close6.addEventListener("click", function (event) {
                event.preventDefault();
                popup_block6.style.display = "none";
                burger.style.display = "block";
            });
            popup_input6.addEventListener("click", function (event) {
                event.preventDefault();
                popup_form.style.display = "block";
                document.getElementById("hidden").value = document.getElementById("name-id6").outerText;
                popup_block6.style.display = "none";
                burger.style.display = "none";
            });

            function popupmessage() {
                $('.popup-message').css('visibility', 'visible');
            }
            


           


            

            