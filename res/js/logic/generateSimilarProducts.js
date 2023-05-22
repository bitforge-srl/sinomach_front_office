
function generateSimilarProducts(productId){
    var template = (`<li class="swiper-slide">
                        <ol>
                           <li class="product_img"><a href="final.html?page=product&product_id={{PRODUCT_ID}}"><img
                              src={{PRODUCT_IMG}}
                              alt="{{TYPE}} {{NAME}}"></a>
                           </li>
                          <li class="product_con">
                            <a href="final.html?page=product&product_id={{PRODUCT_ID}}">{{TYPE}} <span>{{NAME}}</span></a>
                             <div class="text">
                                  {{SHORT_SPECIFICATION}}
                             </div>
                                  <a href="final.html?page=product&product_id={{PRODUCT_ID}}" class="more">
                                    <img src="res/images/more1.png">
                                  </a>
                          </li>
                        </ol>
                      </li>`);

    var productId = getQueryParam("product_id");

    var url = "http://173.212.205.35:8080/api/similar_product/"+ productId;

    var contentElement = document.getElementById("similarProducts");

    var jqxhr = $.get( url, function(response) {

         if (response.success == false){
             return;
         }
         console.log(response);

        var similarProducts = "";

        for(i=0; i<response.similarProductsInfo.length; i++){
            var name = response.similarProductsInfo[i].name;
            var id = response.similarProductsInfo[i].id;
            var type = response.similarProductsInfo[i].type.name;
            var urlImage = response.similarProductsInfo[i].img;

            var shortSpecification = "";
            var shortSpecs = JSON.parse(response.similarProductsInfo[i].shortSpecification);
            var keys = Object.keys(shortSpecs);

            for(j=0; j<keys.length; j++){
                shortSpecification = shortSpecification +
                "<span>" + keys[j] + "<em>"+ shortSpecs[keys[j]] +"</em></span>"
            }

            var tmp = template.replaceAll("{{NAME}}", name)
               .replaceAll("{{PRODUCT_ID}}", id)
               .replaceAll("{{TYPE}}", type)
               .replaceAll("{{PRODUCT_IMG}}", urlImage)
               .replaceAll("{{SHORT_SPECIFICATION}}", shortSpecification)

            similarProducts = similarProducts + tmp;
        }

        contentElement.insertAdjacentHTML('beforeEnd', similarProducts);

    }).done(function() {
        console.log("similarProduct generated");
    })
     .fail(function() {
         console.log("error generate similarProduct");
    })
    .always(function() {
         console.log("finished generate similarProduct");
    });

}