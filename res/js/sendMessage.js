function sendMessage(){

              var emailCont = $("#email").val();
              var telephone = $("#telephone").val();
              var messageCont = $("#message").val();
              var contacter = $("#contacter").val();

              var reg1 = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
              var reg2 = /^[\d\+][\d\(\)\ -]{5,14}\d$/;

                  if(reg1.test(emailCont)||reg2.test(telephone)){
                       const data = {
                             email: emailCont,
                             name: contacter,
                             phone: telephone,
                             comment: messageCont,
                            };

                       fetch("http://127.0.0.1:8080/api/feedback/insert", {
                         method: 'POST',
                         headers: {
                           'Content-Type': 'application/json',
                         },
                         body: JSON.stringify(data),
                       })
                       .then((response) => response.json())
                       .then((data) => {
                           console.log('Success:', data);
                           $("#messageSend").show();
                        })
                        .catch((error) => {
                           console.error('Error:', error);
                           $("#messageNoSend").show();
                         });

                       $("#email").val("");
                       $("#telephone").val("");
                       $("#message").val("");
                       $("#contacter").val("");

                       $("#email").removeClass("valid")
                       $("#telephone").removeClass("valid")

                       document.getElementById('sendmessagebutton').disabled=true


                  }

//              $(".overlay").removeClass("active");

 }