
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
                                  </li>
                                </ol>
                             </li>`);

    var productId = getQueryParam("product_id");

    var url = HOST+"/api/similar_product/"+ productId;

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
            var urlImage = HOST+"/api/image/get/" +response.similarProductsInfo[i].imgId;
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

        var swiperContainer = document.getElementById("swiperContainer");
        swiperContainer.innerHTML = '<div class="swiper-wrapper"></div>'; // Очистите содержимое контейнера карусели

        var swiperWrapper = swiperContainer.querySelector(".swiper-wrapper");

        // Вставьте сгенерированные элементы в контейнер карусели
        swiperWrapper.insertAdjacentHTML('beforeEnd', similarProducts);

        // Инициализируйте Swiper
        var mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 4, // Количество отображаемых слайдов
            spaceBetween: 20, // Расстояние между слайдами
            autoplay: {
                delay: 3000, // Задержка между переключениями в миллисекундах (например, 5000 для 5 секунд)
                disableOnInteraction: false, // Отключает автопрокрутку при взаимодействии пользователя с каруселью
            },
        });

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