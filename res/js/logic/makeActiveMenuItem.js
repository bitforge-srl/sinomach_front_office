makeActiveMenuItem();

function getQueryParam(item) {
  var svalue = window.location.search.match(new RegExp('[\?\&]' + item + '=([^\&]*)(\&?)', 'i'));
  return svalue ? svalue[1] : svalue;
}

function makeActiveMenuItem(){
    var page = getQueryParam("page");

    var foundClasses = document.getElementsByClassName("nav-item");

    switch(page){
        case "main":
            foundClasses[0].setAttribute("class","nav-item active");
            break;
        case "products":
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
        default:
            foundClasses[0].setAttribute("class","nav-item active");

    }
}


