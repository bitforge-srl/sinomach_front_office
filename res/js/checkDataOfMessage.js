function checkDataOfMessage(){

    var email = $('#email').val();
    var reg1 = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if(reg1.test(email) == false) {
          $('#email').val('Введите корректный e-mail');
       }

    var tel = $('#telephone').val();
    var reg2 = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
         if(reg2.test(tel) == false) {
               $('#telephone').val('Введите корректный номер');
            }
}