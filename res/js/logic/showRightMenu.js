function showRightMenu(typesId){

    var leftMenu = document.getElementById("navleftgenerated");
    for (var i=0; i<leftMenu.childElementCount; i++){
        leftMenu.children[i].children[0].setAttribute("class","");
    }

    var rightMenu = document.getElementById("navrightgenerated");
    for (var i=0; i<rightMenu.childElementCount; i++){
        rightMenu.children[i].setAttribute("class","");
    }

    leftMenu.children[typesId].children[0].setAttribute("class","lidq");
    rightMenu.children[typesId].setAttribute("class","shownavpro");
}