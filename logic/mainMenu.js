generateMenu();


function generateMenu(){
    var jqxhr = $.get( "http://127.0.0.1:8080/api/type/all", function(data) {
      var elem = document.getElementById("navleftgenerated");
      for(i=0; i < data.length; i++){
            console.log(data[i].name)
              var tmp = " <li> <a href=\"./1wheel_loader.html\" class=\"lidq\">" + data[i].name +"</a> </li>";
              elem.insertAdjacentHTML("beforeend",  tmp);
      }
    })
      .done(function() {
         console.log( "menu generated" );
      })
      .fail(function() {
         console.log( "error generate menu" );
      })
      .always(function() {
         console.log( "finished generate menu" );
      });
}