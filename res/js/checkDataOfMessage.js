function checkDataOfMessage(){

    var email = $('#email').val();
    var reg1 = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    var tel = $('#telephone').val();
    var reg2 = /^[\d\+][\d\(\)\ -]{5,14}\d$/;

        if(reg1.test(email)||reg2.test(tel)){
            document.getElementById('sendmessagebutton').disabled = false;
              $("#email").addClass("valid");
              $("#telephone").addClass("valid");
        }


}