// функция вызова окна
function show_popap(id_popap) {
  var id = "#" + id_popap;
  $(id).addClass('active');
  document.getElementById('sendmessagebutton').disabled=true
  $(".message").hide();
}

// функция закрытия окна
$(".close_popap").click( function(){

    $("#email").val("");
    $("#telephone").val("");
    $("#message").val("");
    $("#contacter").val("")
    $("#telephone").removeClass("valid")

  $(".overlay").removeClass("active");
});
