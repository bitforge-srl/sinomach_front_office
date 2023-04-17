function sendMessage(){

              function getQueryParam(item) {
                var svalue = window.location.search.match(new RegExp('[\?\&]' + item + '=([^\&]*)(\&?)', 'i'));
                return svalue ? svalue[1] : svalue;
              }
              var productIdMessage = getQueryParam("product_id");

              var emailCont = $("#email").val();
              var telephone = $("#telephone").val();
              var messageContent = $("#message").val();
              var contacter = $("#contacter").val();

              var reg1 = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
              var reg2 = /^[\d\+][\d\(\)\ -]{5,14}\d$/;

                  if(reg1.test(emailCont)||reg2.test(telephone)){

                       const dataSend = {
                             email: emailCont,
                             name: contacter,
                             phone: telephone,
                             comment: messageContent,
                             productId: productIdMessage,
                            };

                       fetch("http://127.0.0.1:8080/api/feedback/insert", {
                         method: 'POST',
                         headers: {
                           'Content-Type': 'application/json',
                         },
                         body: JSON.stringify(dataSend),
                       })
                       .then((response) => response.json())
                       .then((data) => {
                           console.log('Success:', data);
                           console.log(data.error);

                           if(data.error == "ok"){
                               messageContent = document.getElementById("messageSend");
                               messageContent.insertAdjacentHTML('beforeEnd', "<p>Ваше сообщение отправлено </p>");
                               $("#messageSend").show();
                           }else{
                               messageContent = document.getElementById("messageSend");
                               messageContent.insertAdjacentHTML('beforeEnd', data.error);
                               $("#messageSend").show();
                               }
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