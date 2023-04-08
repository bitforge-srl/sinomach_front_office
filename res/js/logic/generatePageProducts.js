function generatePageProducts(contentElement) {

    function getQueryParam(item) {
      var svalue = window.location.search.match(new RegExp('[\?\&]' + item + '=([^\&]*)(\&?)', 'i'));
      return svalue ? svalue[1] : svalue;
    }

    var typeId = getQueryParam("typeId")

    var contentProducts = (`
                              <div class="clearfix"></div>
                              <div class="mainbody">
                              <div class="content pt-4 pb-4" id="pageProducts">

                              </div>
                              </div>

                           `);
    var navigation = (` <div id="quicknav">
                           <div>
                               <ul>
                                   <img src="res/images/icon.png">
                                   <li><a href="final.html?page=main">Главная</a></li>
                                   <li>Продукция</li>
                               </ul>
                           </div>
                        </div>`)

    contentElement.insertAdjacentHTML('beforeEnd', navigation);
    contentElement.insertAdjacentHTML('beforeEnd', contentProducts);

    var templateType = (`<div class="contentbg mb-2 " id="{{TYPE_ID}}">
                            <div class="pro_text protext">
                               <div class="etw_hometitle"><a>{{TYPE}}</a> </div>
                               <p>{{SHORT_TYPE_DESCRIPTION}}</p>
                            </div>
                         </div>
                         <div class="etw_producthub" >
                             <ul  id="typeId={{TYPE_ID}}">
                                 <!-- insert allProductsOfTypeOrSybType -->
                             <ul>
                         </div>
                         `);

    var templateSubType = (`<div class="small_title" ><a>{{SUB_TYPE}}</a></div>
                            <div class="etw_producthub">
                                <ul  id="subTypeId={{SUB_TYPE_ID}}">
                                    <!-- insert allProductsOfTypeOrSybType -->
                                <ul>
                            </div>`);

    var templateProduct = (`
        <li>
           <ol>
              <li class="product_img"><a href="final.html?page=product&product_id={{PRODUCT_ID}}"><img
                 src={{PRODUCT_IMG}}
                 alt={{TYPE}} {{NAME}}></a>
              </li>
              <li class="product_con">
                 <a href="final.html?page=product&product_id={{PRODUCT_ID}}"> {{TYPE}} <span>{{NAME}}</span></a>
                 <div class="wrap">
                    <ul class="advlist">
                       {{SHORT_SPECIFICATION}}
                    </ul>
                 </div>
              </li>
           </ol>
           <div class="more">
               <a href="final.html?page=product&product_id={{PRODUCT_ID}}">"ЧИТАТЬ ДАЛЕЕ </a>
           </div>
        </li>
    `)

    var allProducts = "";

    var url = "http://127.0.0.1:8080/api/type/all";

    var contentElementInner = document.getElementById("pageProducts");

    var jqxhr = $.get( url, function(response) {

             if (response.success == false){
                 return;
             }

            for (i=0; i<response.length; i++){
                var nameType = response[i].name;
                var tmpType = templateType.replaceAll("{{TYPE}}", nameType)
                .replaceAll("{{TYPE_ID}}", response[i].id)
                .replaceAll("{{SHORT_TYPE_DESCRIPTION}}", response[i].shortDescription);
                contentElementInner.insertAdjacentHTML('beforeEnd', tmpType);

                var contentInnerType = document.getElementById("typeId="+response[i].id);

                for(j=0; j < response[i].subTypes.length; j++){
                    if(response[i].subTypes[j].name =="default"){
                        var nameSubType = "";
                    }else{
                        nameSubType = response[i].subTypes[j].name;
                    }
                    var tmpSubType = templateSubType.replaceAll("{{SUB_TYPE}}",nameSubType)
                    .replaceAll("{{SUB_TYPE_ID}}", response[i].subTypes[j].id);
                    contentInnerType.insertAdjacentHTML('beforeEnd', tmpSubType);

                var contentInnerSubType = document.getElementById("subTypeId="+ response[i].subTypes[j].id);

                    for(k=0; k< response[i].subTypes[j].products.length; k++){

                        var shortSpecification = "";
                        var shortSpecs = JSON.parse(response[i].subTypes[j].products[k].shortSpecification);
                        var keys = Object.keys(shortSpecs);

                        for(h=0; h<keys.length; h++){
                            shortSpecification = shortSpecification +
                            "<li>" + keys[h]+ "<span>" + shortSpecs[keys[h]] +"</span></li>"
                        }

                        var tmpProduct = templateProduct.replaceAll("{{NAME}}",response[i].subTypes[j].products[k].name)
                        .replaceAll("{{PRODUCT_IMG}}", response[i].subTypes[j].products[k].img)
                        .replaceAll("{{PRODUCT_ID}}", response[i].subTypes[j].products[k].id)
                        .replaceAll("{{TYPE}}", nameType)
                        .replaceAll("{{SHORT_SPECIFICATION}}",shortSpecification );

                        contentInnerSubType.insertAdjacentHTML('beforeEnd', tmpProduct);

                    }
                }
            }

            if(typeId>0){
                const element = document.getElementById(typeId);
                element.scrollIntoView({block: "start", inline: "nearest"});
                window.scrollBy(0,-63);
            }


        }).done(function() {
            console.log("PageProducts generated");
        })
         .fail(function() {
             console.log("error generate PageProducts");
        })
        .always(function() {
             console.log("finished generate PageProducts");
        });

}