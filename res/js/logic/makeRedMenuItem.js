function getQueryParam(item) {
  var svalue = window.location.search.match(new RegExp('[\?\&]' + item + '=([^\&]*)(\&?)', 'i'));
  return svalue ? svalue[1] : svalue;
}

var makeToActive = getQueryParam("page");

console.log(makeToActive);

var foundClasses = document.getElementsByClassName("nav-item");
for(var i=0; i<foundClasses.childElementCount; i++){
    var nameClass = foundClasses[i].getAttribute("class");
    if(nameClass == "nav-item active"){
        foundClasses[i].setAttribute("class","nav-item");
    }else
        if(nameClass == "nav-item dropdown active"){
              foundClasses[i].setAttribute("class","nav-item dropdown");
        }
}

switch(makeToActive){
    case "main":
        foundClasses[0].setAttribute("class","nav-item active");
        break;
    case "products":
        foundClasses[1].setAttribute("class","nav-item dropdown active");
        break;
    case "product":
        foundClasses[1].setAttribute("class","nav-item dropdown active");
        break;
    case "service":
        foundClasses[2].setAttribute("class","nav-item active");
        break;
    case "parts":
        foundClasses[3].setAttribute("class","nav-item active");
        break;
    case "introduction":
        foundClasses[4].setAttribute("class","nav-item active");
        break;
    case "contacts":
        foundClasses[5].setAttribute("class","nav-item active");
        break;
}

