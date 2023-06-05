
function getQueryParam(item) {
  var svalue = window.location.search.match(new RegExp('[\?\&]' + item + '=([^\&]*)(\&?)', 'i'));
  return svalue ? svalue[1] : svalue;
}

var page = getQueryParam("page") || "main";
var productId = getQueryParam("product_id");
var url = "https://cn-sinomach.md/api/product_page/"+ productId;

var contentElement = document.getElementById("container");
var contentProduct = (`<div class="js-gallery-wrap">
                     <div itemscope itemtype="http://schema.org/Product">
                         <div itemprop="description">
                           <div class="">
                              <div id="quicknav">
                                 <div>
                                    <ul class="nobg">
                                       <img src="res/images/icon.png">
                                       <li><a href="final.html?page=main">Главная</a></li>
                                       <li><a href="final.html?page=products">Продукция</a></li>
                                       <li><a href="final.html?page=products&typeId={{TYPE_ID}}">{{TYPE}}</a></li>
                                       <li>{{NAME}}</li>
                                    </ul>
                                 </div>
                              </div>
                              <div class="clearfix"></div>
                              <div class="content pt-5 pb-5 clearfix">
                                 <div class="row pt-1">
                                    <div class="col-12 col-md-7 pt-2">
                                       <h2 itemprop="name"><span>{{TYPE}}</span>{{NAME}}</h2>
                                       <p>{{FULL_DESCRIPTION}}
                                       </p>
                                       <ul class="item2">
                                          {{SHORT_SPECIFICATION}}
                                       </ul>
                                         <div class="clearfix"></div>
                                           <ul class="item1">
                                              {{ADD_DESCRIPTION}}
                                           </ul>
                                       <div class="clearfix"></div>

                                    </div>
                                    <div class="col-12 col-md-5 order-first order-md-last">
                                       <div class="left_pic show_pro_video">
                                          <div class="video_icon" data-video-path="en/guojizhonggong/wheel-loader-1_en">
                                             <span class="youtube-play"></span> Видео
                                          </div>
                                          <div class="left_pics">
                                             <figure><a href="product_image"><img
                                                itemprop="image" src={{PRODUCT_IMG}}
                                                alt="Колесный погрузчик ZL18H"></a></figure>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="clearfix"></div>
                              </div>


                              <div class="nav-page" id="a1">

                                 {{CONTENT}}

                              <div class="nav-page nav-page1">
                                 <div class="content">
                                    <div class="etw_hometitle"><em>Схожая продукция</em></div>
                                    <div class="swiper_box">
                                       <div class="swiper related_pro ">
                                          <ul class="swiper-wrapper" id = "similarProducts">
                                            <!-- Add SimilarProducts -->
                                          </ul>
                                          <!-- Add Pagination -->
                                          <div class="swiper-button-next"></div>
                                          <div class="swiper-button-prev"></div>
                                          <div class="swiper-pagination"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              <div class="why_us">
                                 <div class="content">
                                    <div class="etw_hometitle small_font text-center">ПОЧЕМУ КЛИЕНТЫ
                                       <span>ВЫБИРАЮТ SINOMACH</span>
                                    </div>
                                    <ul>
                                       <li>
                                          <figure><img src="res/images/why_icon_01.png"></figure>
                                          <div class="text">
                                             <em>Международная сеть обслуживания</em>
                                             <p>По мере нашего развития на зарубежных рынках штат нашей сервисной службы
                                                постоянно увеличивается. На сегодняшний день и мы обслуживаем клиентов в
                                                более чем 50 странах.
                                             </p>
                                          </div>
                                       </li>
                                       <li>
                                          <figure><img src="res/images/why_icon_02.png"></figure>
                                          <div class="text">
                                             <em>Качественные технологии на международном уровне</em>
                                             <p>SINOMACH-HI основала совместные предприятия со всемирно известными
                                                компаниями в области строительной техники.
                                             </p>
                                          </div>
                                       </li>
                                       <li>
                                          <figure><img src="res/images/why_icon_03.png"></figure>
                                          <div class="text">
                                             <em>Высококвалифицированная международная команда специалистов, на которую
                                             всегда можно положиться.</em>
                                             <p>Наша компания владеет единственным национальным научно-исследовательским
                                                институтом строительной техники в Китае. Мы обладаем 60-летним опытом
                                                производства и 30-летним опытом экспорта продукции.
                                             </p>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div class="nav-page nav-page2">
                                 <div class="content">
                                    <div class="etw_hometitle"><em>Другие продукты</em></div>
                                    <div class="bottom_pro">
                                       <ul>
                                          <li>
                                             <ol>
                                                <li class="product_img"><a href="final.html?page=products&typeId=13"><img
                                                   src="res/images/typeImg/pro_02.png" alt="Excavator"></a></li>
                                                <li class="product_con"><a href="final.html?page=products&typeId=13">Экскаватор</a></li>
                                             </ol>
                                          </li>
                                          <li>
                                             <ol>
                                                <li class="product_img"><a href="final.html?page=products&typeId=7"><img
                                                   src="res/images/typeImg/pro_03.png" alt="Автогрейдер "></a></li>
                                                <li class="product_con"><a href="final.html?page=products&typeId=7">Автогрейдер</a>
                                                </li>
                                             </ol>
                                          </li>
                                          <li>
                                             <ol>
                                                <li class="product_img"><a href="final.html?page=products&typeId=3"><img
                                                   src="res/images/typeImg/pro_04.png" alt="Дорожный каток "></a></li>
                                                <li class="product_con"><a href="final.html?page=products&typeId=3">Дорожный каток</a>
                                                </li>
                                             </ol>
                                          </li>
                                          <li>
                                             <ol>
                                                <li class="product_img"><a href="final.html?page=products&typeId=4"><img
                                                   src="res/images/typeImg/pro_05.png" alt="Bulldozer"></a></li>
                                                <li class="product_con"><a href="final.html?page=products&typeId=4">Бульдозер</a></li>
                                             </ol>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div class="nav-page">
                                 <div class="content">
                                    <div class="etw_hometitle">ПОДДЕРЖКА ВАШЕГО <span>БИЗНЕСА</span></div>
                                    <div class="service_content pt-0">
                                       <ul>
                                          <li>
                                             <a href="final.html?page=service" class="images"><img
                                                src="res/images/service_03.jpg"></a>
                                             <div class="text">
                                                <a href="final.html?page=service" class="title">Международное
                                                обслуживание</a>
                                             </div>
                                          </li>
                                          <li>
                                             <a href="final.html?page=service" class="images"><img
                                                src="res/images/service_01.jpg"></a>
                                             <div class="text">
                                                <a href="final.html?page=service" class="title">Обслуживание</a>
                                             </div>
                                          </li>
                                          <li>
                                             <a href="final.html?page=parts" class="images"><img src="res/images/service_02.jpg"></a>
                                             <div class="text">
                                                <a href="final.html?page=parts" class="title">Запчасти</a>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>`);
var contentMain = (`
                <div class="clearfix"></div>
                    <div class="homeabout">
                       <div class="content">
                          <div class="about_left">
                             <div class="etw_hometitle">SINOMACH-HI International</div>
                             <div class="small_title">Китайский лидер в производстве дорожно-строительной техники</div>
                             <p>SINOMACH HI International Equipment CO. находится в городе Чанчжоу, провинция Цзянсу, Китай. Компания
                                является дочерней компанией группы SINOMACH - предприятия из списка Fortune 500. SINOMACH является
                                одним из крупнейших экспортеров строительной техники. SINOMACH HI International владеет двумя
                                брендами SINOMACH и CHANGLIN. С 1961 года мы занимаемся разработкой и производством строительной
                                техники. В 1991 году мы разработали первый погрузчик бревен в Китае.
                             </p>
                          </div>
                          <div class="about_right">
                             <figure>
                                <img src="./res/images/about_us.jpg">
                             </figure>
                             <p>В конце прошлого века мы основали два совместных предприятия с Komatsu и Hyundai. Кроме того, мы
                                начали поставлять OEM-запчасти для TEREX, ATLAS и других международных компаний.
                             </p>
                             <p>С 1986 года мы экспортируем строительную технику на зарубежные рынки, в том числе землеройную
                                технику, уплотняющую технику, а также другую технику. Кроме того, мы открыли несколько зарубежных
                                офисов и дочерних компаний, чтобы лучше и более профессионально обслуживать наших клиентов.
                             </p>
                          </div>
                       </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="mainpro">
                       <div class="content">
                          <div class="pro_top">
                             <div class="pro_text">
                                <div class="etw_hometitle">Наша продукция</div>
                                <p>CHANGLIN является ведущим производителем и поставщиком строительного инженерного оборудования в
                                   Китае. Компания начала свою деятельность в 1961 году, обладает более чем 60-летним опытом
                                   производства тяжелого оборудования.
                                </p>
                             </div>
                             <ul>
                                <li>
                                   <ol>
                                      <li class="product_img">
                                         <a href="final.html?page=products&typeId=11">
                                         <img src="./res/images/typeImg/pro_01.png" alt="Колесный погрузчик">
                                         </a>
                                      </li>
                                      <li class="product_con">
                                         <a href="final.html?page=products&typeId=11">Колесный погрузчик</a>
                                      </li>
                                   </ol>
                                </li>
                                <li>
                                   <ol>
                                      <li class="product_img">
                                         <a href="final.html?page=products&typeId=13">
                                         <img src="./res/images/typeImg/pro_02.png" alt="Excavator">
                                         </a>
                                      </li>
                                      <li class="product_con">
                                         <a href="final.html?page=products&typeId=13">Экскаватор</a>
                                      </li>
                                   </ol>
                                </li>
                             </ul>
                          </div>
                          <div class="bottom_pro">
                             <ul>
                                <li>
                                   <ol>
                                      <li class="product_img">
                                         <a href="final.html?page=products&typeId=11">
                                         <img src="./res/images/typeImg/pro_01.png" alt="Колесный погрузчик">
                                         </a>
                                      </li>
                                      <li class="product_con">
                                         <a href="final.html?page=products&typeId=11">Колесный погрузчик</a>
                                      </li>
                                   </ol>
                                </li>
                                <li>
                                   <ol>
                                      <li class="product_img">
                                         <a href="final.html?page=products&typeId=13">
                                         <img src="./res/images/typeImg/pro_02.png" alt="Excavator">
                                         </a>
                                      </li>
                                      <li class="product_con">
                                         <a href="final.html?page=products&typeId=13">Экскаватор</a>
                                      </li>
                                   </ol>
                                </li>
                                <li>
                                   <ol>
                                      <li class="product_img">
                                         <a href="final.html?page=products&typeId=7">
                                         <img src="./res/images/typeImg/pro_03.png" alt="Автогрейдер">
                                         </a>
                                      </li>
                                      <li class="product_con">
                                         <a href="final.html?page=products&typeId=7">Автогрейдер</a>
                                      </li>
                                   </ol>
                                </li>
                                <li>
                                   <ol>
                                      <li class="product_img">
                                         <a href="final.html?page=products&typeId=3">
                                         <img src="./res/images/typeImg/pro_04.png" alt="Excavator">
                                         </a>
                                      </li>
                                      <li class="product_con">
                                         <a href="final.html?page=products&typeId=3">Дорожный каток</a>
                                      </li>
                                   </ol>
                                </li>
                                <li>
                                   <ol>
                                      <li class="product_img">
                                         <a href="final.html?page=products&typeId=4">
                                         <img src="./res/images/typeImg/pro_05.png" alt="Excavator">
                                         </a>
                                      </li>
                                      <li class="product_con">
                                         <a href="final.html?page=products&typeId=4">Бульдозер</a>
                                      </li>
                                   </ol>
                                </li>
                                <li>
                                   <ol>
                                      <li class="product_img">
                                         <a href="final.html?page=products&typeId=8">
                                         <img src="./res/images/typeImg/pro_06.png" alt="Excavator">
                                         </a>
                                      </li>
                                      <li class="product_con">
                                         <a href="final.html?page=products&typeId=8">Экскаватор-погрузчик</a>
                                      </li>
                                   </ol>
                                </li>
                                <li>
                                   <ol>
                                      <li class="product_img">
                                         <a href="final.html?page=products&typeId=10">
                                         <img src="./res/images/typeImg/pro_07.png" alt="Excavator">
                                         </a>
                                      </li>
                                      <li class="product_con">
                                         <a href="final.html?page=products&typeId=10">Погрузчик с бортовым поворотом</a>
                                      </li>
                                   </ol>
                                </li>
                                <li>
                                   <ol>
                                      <li class="product_img">
                                         <a href="final.html?page=product&product_id=102">
                                         <img src="./res/images/typeImg/pro_08.png" alt="Колесный экскаватор">
                                         </a>
                                      </li>
                                      <li class="product_con">
                                         <a href="final.html?page=product&product_id=102">Колесный экскаватор</a>
                                      </li>
                                   </ol>
                                </li>
                                <li>
                                   <ol>
                                      <li class="product_img">
                                         <a href="final.html?page=products&typeId=5">
                                         <img src="./res/images/typeImg/pro_09.png" alt="Excavator">
                                         </a>
                                      </li>
                                      <li class="product_con">
                                         <a href="final.html?page=products&typeId=5">Асфальтоукладчик</a>
                                      </li>
                                   </ol>
                                </li>
                                <li>
                                   <ol>
                                      <li class="product_img">
                                         <a href="final.html?page=products&typeId=12">
                                         <img src="./res/images/typeImg/pro_10.png" alt="Excavator">
                                         </a>
                                      </li>
                                      <li class="product_con">
                                         <a href="final.html?page=products&typeId=12">Вилочный погрузчик</a>
                                      </li>
                                   </ol>
                                </li>
                             </ul>
                          </div>
                       </div>
                    </div>

                    <div class="why_us">
                       <div class="content">
                          <div class="etw_hometitle">ПОЧЕМУ КЛИЕНТЫ <span>ВЫБИРАЮТ SINOMACH</span>
                          </div>
                          <ul>
                             <li>
                                <figure>
                                   <img src="./res/images/why_icon_01.png" alt="Международная сеть обслуживания">
                                </figure>
                                <div class="text">
                                   <em>Международная сеть обслуживания</em>
                                   <p>По мере нашего развития на зарубежных рынках штат нашей сервисной службы постоянно
                                      увеличивается. На сегодняшний день и мы обслуживаем клиентов в более чем 50 странах.
                                   </p>
                                </div>
                             </li>
                             <li>
                                <figure>
                                   <img src="./res/images/why_icon_02.png" alt="Качественные технологии на международном уровне">
                                </figure>
                                <div class="text">
                                   <em>Качественные технологии на международном уровне</em>
                                   <p>SINOMACH-HI основала совместные предприятия со всемирно известными компаниями в области
                                      строительной техники.
                                   </p>
                                </div>
                             </li>
                             <li>
                                <figure>
                                   <img src="./res/images/why_icon_03.png"
                                      alt="Высококвалифицированная международная команда специалистов, на которую всегда можно положиться.">
                                </figure>
                                <div class="text">
                                   <em>Высококвалифицированная международная команда специалистов, на которую всегда можно
                                   положиться.</em>
                                   <p>Наша компания владеет единственным национальным научно-исследовательским институтом
                                      строительной техники в Китае. Мы обладаем 60-летним опытом производства и 30-летним опытом
                                      экспорта продукции.
                                   </p>
                                </div>
                             </li>
                          </ul>
                       </div>
                    </div>
                    `);
var contentParts = (`<div class="">
                         <div id="quicknav">
                           <div>
                             <ul>
                               <img src="./res/images/icon.png">
                               <li>
                                 <a href="final.html?page=main">Главная</a>
                               </li>
                               <li>Аксессуары и комплектующие</li>
                             </ul>
                           </div>
                         </div>
                         <p><center><img src="./res/images/repair_work.png" alt="Письма мастера дзен"><center></p>
                         <h4> <center> СТРАНИЦА В РАЗРАБОТКЕ <center/><h4/>
                     </div>

`)
var contentIntroduction = (`<div class="">
                                <div id="quicknav">
                                  <div>
                                    <ul>
                                      <img src="./res/images/icon.png">
                                      <li>
                                        <a href="final.html?page=main">Главная</a>
                                      </li>
                                      <li>О компании</li>
                                    </ul>
                                  </div>
                                </div>
                               <p><center><img src="./res/images/repair_work.png" alt="Письма мастера дзен"><center></p>
                               <h4> <center> СТРАНИЦА В РАЗРАБОТКЕ <center/><h4/>
                            </div>

`)
var contentContacts = (`
                      <div class="">
                        <div id="quicknav">
                          <div>
                            <ul>
                              <img src="./res/images/icon.png">
                              <li>
                                <a href="final.html?page=main">Главная</a>
                              </li>
                              <li>Контакты</li>
                            </ul>
                          </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="content">
                          <div class="contact_content">
                            <div class="row mt-4">
                              <div class="col-md-6">
                                <div class="contact_des ">
                                  <content>
                                    <img src="./res/images/bottom_logo.png" alt="SINOMACH-HI International" class="mb-4">
                                    <p>
                                      <strong> Официальные представители в Республике Молдова</strong>
                                    </p>

                                    <div class="clearfix"></div>
                                        <p>
                                            <h4>ООО "Прима-русс"</h4>
                                            <strong>Адрес:</strong> 3300, Tiraspol, Strada Șevcenco 97е
                                        </p>
                                        <p>
                                          <strong>Тел.:</strong>
                                            <a href="tel:+373-777-01-787">+373-777-01-787</a>
                                        </p>
                                        <p>
                                          <strong>Email:</strong>
                                            <a href="mailto:support@cn-sinomach.md">support@cn-sinomach.md</a>
                                        </p>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2293.860716586834!2d29.608656511029043!3d46.86582272504663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9033754a9e26f%3A0x4badbe7c343ce08e!2z0J_RgNC-0LTQsNC20LAg0YHQutC70LDQtNGB0LrQvtC5INGC0LXRhdC90LjQutC4INC4INC60L7QvNC_0LvQtdC60YLRg9GO0YnQuNGF!5e0!3m2!1sru!2s!4v1681052086901!5m2!1sru!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                    <div class="clearfix"></div>

                                    <p>
                                        <h4>SRL “Mecalux-logistic” SRL</h4>
                                        <strong>Адрес:</strong> 2023, Chisinau, str. Uzinelor, 78
                                    </p>
                                    <p>
                                        <strong>Тел.:</strong>
                                            <a href="tel:+373-60-93-33-41">+373-60-93-33-41</a>
                                        <br>
                                        <span style="margin-left:44px;">
                                            <a href="tel:+373-79-95-93-00">+373-79-95-93-00</a>
                                        </span>
                                    </p>
                                    <p>
                                  <strong>Email:</strong>
                                  <a href="mailto:support@cn-sinomach.md">support@cn-sinomach.md</a>
                                  </p>
                                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2720.930173546631!2d28.8893186!3d47.002344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97bd686db4c0d%3A0x841c86481bd8627b!2sRafturi%20Comerciale%20%2F%20Stelaje%20pentru%20depozit!5e0!3m2!1sru!2s!4v1685259584659!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                  </content>
                                  <!--code-->
                                  </div>
                                  <div class="clearfix"></div>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>

`)
var contentService = (`<div class="">
                           <div id="quicknav">
                             <div>
                               <ul>
                                 <img src="./res/images/icon.png">
                                 <li>
                                   <a href="final.html?page=main">Главная</a>
                                 </li>
                                 <li>Обслуживание</li>
                               </ul>
                             </div>
                           </div>
                           <p><center><img src="./res/images/repair_work.png" alt="Письма мастера дзен"><center></p>
                           <h4> <center> СТРАНИЦА В РАЗРАБОТКЕ <center/><h4/>
                       </div>


`)

switch (page){
    case "product":
        var jqxhr = $.get( url, function(response) {

            console.log(response)

            if (response.success == false){
            console.log(response.success);

               contentElement.insertAdjacentHTML('beforeBegin', "Page not found");
            } else {
                id = response.id;
                var name = response.name;
                var fullDescription = response.fullDescription;
                var shortSpecification = response.shortSpecification;
                var content = response.content;
                var features = response.features;
                var type = response.type;
                var subType = response.subType;
                var product_img = response.img;
                var similarProducts = response.similarProducts;
                var additionalDescription = response.additionalDescription;
                var shortSpecification = JSON.parse(shortSpecification);
                var keys = Object.keys(shortSpecification);

                var shortSpecificationFinal = "";
                   for(i=0; i<keys.length; i++) {
                   shortSpecificationFinal = shortSpecificationFinal + "<li>" + keys[i] +"<span>"
                   + shortSpecification[keys[i]] + "</span></li>"
                   }


              var contentProductFinal = contentProduct.replace(/{{NAME}}/g, name)
              .replace(/{{FULL_DESCRIPTION}}/g,fullDescription)
              .replace(/{{CONTENT}}/g, content)
              .replace(/{{SHORT_SPECIFICATION}}/g, shortSpecificationFinal)
              .replace(/{{PRODUCT_IMG}}/g, product_img)
              .replace(/{{ADD_DESCRIPTION}}/g, additionalDescription)
              .replace(/{{TYPE}}/g, type.name)
              .replace(/{{TYPE_ID}}/g, type.id);

              contentElement.insertAdjacentHTML('beforeEnd', contentProductFinal);
              generateSimilarProducts(productId);

            }
        })
        .done(function() {
            console.log("productPage generated");
        })
        .fail(function() {
            console.log("error generate productPage");
        })
        .always(function() {
            console.log("finished generate productPage");
        });

        break;
    case "products":
        generatePageProducts(contentElement);
        break;
    case "service":
        contentElement.insertAdjacentHTML('beforeEnd', contentService);
        break;
    case "parts":
        contentElement.insertAdjacentHTML('beforeEnd', contentParts);
        break;
    case "introduction":
        contentElement.insertAdjacentHTML('beforeEnd', contentIntroduction);
        break;
    case "contacts":
        contentElement.insertAdjacentHTML('beforeEnd', contentContacts);
        break;
    case "main":
    default:
       contentElement.insertAdjacentHTML('beforeEnd', contentMain);


}