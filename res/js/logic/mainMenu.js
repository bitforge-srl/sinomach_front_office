generateMenu();

function generateMenu() {
    var jqxhr = $.get("http://127.0.0.1:8080/api/type/all", function(types) {
            var leftNavElem = document.getElementById("navleftgenerated");
            var rightNavElem = document.getElementById("navrightgenerated");

            for (i = 0; i < types.length; i++) {
                var leftItem = " <li> <a href=\"final.html?page=products&typeId="+ types[i].id +"\""  + (i == 0?  "class=\"lidq\"":"") + ">" + types[i].name + "</a> </li>";
                leftNavElem.insertAdjacentHTML("beforeend", leftItem);

                var rightItem = "<ul " + (i==0? "class=\"shownavpro\"":"") + ">";

                for (subTypeIndex = 0; subTypeIndex < types[i].subTypes.length; subTypeIndex++) {
                    if (types[i].subTypes[subTypeIndex].name === "default") {
                        for (productIndex = 0; productIndex < types[i].subTypes[subTypeIndex].products.length; productIndex++) {
                            rightItem = rightItem + "<li> <a href=\"./final.html?page=product&product_id=" +
                                types[i].subTypes[subTypeIndex].products[productIndex].id +
                                "\">" +
                                types[i].name +
                                " " +
                                types[i].subTypes[subTypeIndex].products[productIndex].name +
                                "</a> </li>";
                        }
                    } else {
                        rightItem = rightItem + "<ol> <h3>" + types[i].subTypes[subTypeIndex].name + "</h3>";
                        for (productIndex = 0; productIndex < types[i].subTypes[subTypeIndex].products.length; productIndex++) {
                            rightItem = rightItem + "<li> <a href=\"./final.html?page=product&product_id=" +
                            types[i].subTypes[subTypeIndex].products[productIndex].id +
                            "\">" +
                            types[i].subTypes[subTypeIndex].name +
                            " " +
                            types[i].subTypes[subTypeIndex].products[productIndex].name +
                            "</a> </li>";
                        }
                        rightItem = rightItem + "</ol>";
                    }
                }
                rightItem = rightItem + "</ul>"
                rightNavElem.insertAdjacentHTML("beforeend", rightItem);
            }
        })
        .done(function() {
            console.log("menu generated");
        })
        .fail(function() {
            console.log("error generate menu");
        })
        .always(function() {
            console.log("finished generate menu");
        });
}