
function getQueryParam(item) {
  var svalue = window.location.search.match(new RegExp('[\?\&]' + item + '=([^\&]*)(\&?)', 'i'));
  return svalue ? svalue[1] : svalue;
}

var page = getQueryParam("page") || "main";
var productId = getQueryParam("product_id");
var url = "http://127.0.0.1:8080/api/product_page/"+ productId;

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
                                       <li><a href="1wheel_loader.html">{{TYPE}}</a></li>
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
                                       <div class="sendinquiry" onClick="openwindow('');return false">
                                          <span>Запрос от</span>
                                       </div>
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
                              <div class="page-nav-box js-page-nav-box">
                                 <div class="page-nav js-page-nav">
                                    <div class="content">
                                       <ul class="list">
                                          <li class="pnav-item current">
                                             <a href="javascript:;" data-href="#a1" class="pnav-link">Технические
                                             характеристики</a>
                                          </li>
                                          <li class="pnav-item">
                                             <a href="javascript:;" data-href="#a2" class="pnav-link">Общие сведения</a>
                                          </li>
                                          <li class="pnav-item">
                                             <a href="javascript:;" data-href="#a3" class="pnav-link">Видео</a>
                                          </li>
                                          <li class="pnav-item">
                                             <a href="javascript:;" data-href="#a4" class="pnav-link">Отправить
                                             запрос</a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div class="nav-page" id="a1">
                                 {{CONTENT}}

                              <!--div class="nav-page" id="a2">
                                 <div class="content">
                                    <div class="etw_hometitle"><em>Общие сведения</em></div>
                                    <ul class="fea_list">
                                       <li>
                                          <figure><a href="upload/3545/o/13_1_Wheel_Loader_918_01.jpg"><img
                                             src="res/images/13_1_Wheel_Loader_918_01m.jpg"
                                             alt="Колесный погрузчик ZL18H"></a></figure>
                                          <div class="wrap">
                                             <p>Фронтальный погрузчик оснащен отечественным двигателем YUNNEI, который
                                                обеспечивает высокую производительность при высокой мощности и низкой
                                                частоте отказов. Благодаря гидравлическому преобразователю крутящего
                                                момента, оптимальному весу кузова и соотношению скоростей, колесный
                                                погрузчик обладает как большим тяговым усилием, так и высоким усилием
                                                отрыва. Таким образом, погрузчик имеет идеальную скорость движения при
                                                меньшем расходе топлива.
                                             </p>
                                          </div>
                                       </li>
                                       <li>
                                          <figure><a href="upload/3545/o/13_1_Wheel_Loader_918_02.jpg"><img
                                             src="res/images/13_1_Wheel_Loader_918_02m.jpg"
                                             alt="Колесный погрузчик ZL18H"></a></figure>
                                          <div class="wrap">
                                             <p>Фронтальный погрузчик оснащен двухосным приводом, механизмом бокового
                                                торможения, поворотным задним мостом и шинами большого размера.
                                                Фронтальный погрузчик обладает хорошими внедорожными характеристиками и
                                                компактной конструкцией трансмиссии.
                                             </p>
                                          </div>
                                       </li>
                                       <li>
                                          <figure><a href="upload/3545/o/13_1_Wheel_Loader_918_03.jpg"><img
                                             src="res/images/13_1_Wheel_Loader_918_03m.jpg"
                                             alt="Колесный погрузчик ZL18H"></a></figure>
                                          <div class="wrap">
                                             <p>Колесный погрузчик с шарнирно-сочлененной рамой позволяет легко загружать
                                                и разгружать материалы. Кроме того, конструкция с малым радиусом
                                                поворота делает его гибким и маневренным.
                                             </p>
                                          </div>
                                       </li>
                                       <li>
                                          <figure><a href="upload/3545/o/13_1_Wheel_Loader_918_04.jpg"><img
                                             src="res/images/13_1_Wheel_Loader_918_04m.jpg"
                                             alt="Колесный погрузчик ZL18H"></a></figure>
                                          <div class="wrap">
                                             <p>Колесный погрузчик оснащен одной стрелой, высокой точкой поворота,
                                                короткой рулевой тягой, новой Z-образной стрелой погрузчика для
                                                обеспечения высокой способности копания. Прочность стрелы погрузчика
                                                увеличена, чтобы обеспечить достаточную силу для захвата, погрузки и
                                                разгрузки материалов. Навесное оборудование обладают достаточной
                                                прочностью, чтобы противостоять высоким ударным нагрузкам.
                                             </p>
                                          </div>
                                       </li>
                                       <li>
                                          <figure><a href="upload/3545/o/13_1_Wheel_Loader_918_05.jpg"><img
                                             src="res/images/13_1_Wheel_Loader_918_05m.jpg"
                                             alt="Колесный погрузчик ZL18H"></a></figure>
                                          <div class="wrap">
                                             <p>Колесный погрузчик оснащен трансмиссией с разделением мощности, имеющей
                                                одноступенчатый однофазный трехэлементный преобразователь крутящего
                                                момента и редуктор с параллельными валами, что обеспечивает высокую
                                                эффективность, а также удобство обслуживания. Двухступенчатая
                                                гидравлическая система переключения передач обеспечивает плавное
                                                переключение без необходимости отключения питания. Поскольку
                                                гидравлическая трансмиссия может адаптироваться к изменению внешнего
                                                сопротивления в определенном диапазоне, нет необходимости часто
                                                переключать передачи, благодаря чему достигается высокий КПД.
                                             </p>
                                          </div>
                                       </li>
                                       <li>
                                          <figure><a href="upload/3545/o/13_1_Wheel_Loader_918_06.jpg"><img
                                             src="res/images/13_1_Wheel_Loader_918_06m.jpg"
                                             alt="Колесный погрузчик ZL18H"></a></figure>
                                          <div class="wrap">
                                             <p>Колесный погрузчик оснащен чувствительной к нагрузке гидравлической
                                                системой, отличающейся компактной конструкцией, небольшими размерами,
                                                простотой обслуживания, сниженным потреблением энергии и меньшей
                                                трудоемкостью.
                                             </p>
                                          </div>
                                       </li>
                                       <li>
                                          <figure><a href="upload/3545/o/13_1_Wheel_Loader_918_07.jpg"><img
                                             src="res/images/13_1_Wheel_Loader_918_07m.jpg"
                                             alt="Колесный погрузчик ZL18H"></a></figure>
                                          <div class="wrap">
                                             <p>Навесное оборудование колесного погрузчика, такое как гидравлический
                                                молот, удлинитель стрелы или захват для бревен, может быть установлено
                                                по мере необходимости.
                                             </p>
                                          </div>
                                       </li>
                                       <li>
                                          <figure><a href="upload/3545/o/13_1_Wheel_Loader_918_08.jpg"><img
                                             src="res/images/13_1_Wheel_Loader_918_08m.jpg"
                                             alt="Колесный погрузчик ZL18H"></a></figure>
                                          <div class="wrap">
                                             <p>Колесный погрузчик имеет удобную герметичную кабину с улучшенным передним
                                                обзором до 47%. Усиленный навес для защиты от опрокидывания может быть
                                                оборудован по мере необходимости, чтобы гарантировать безопасность
                                                операторов.
                                             </p>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div-->

                              <div class="nav-page" id="a3">
                                 <div class="content">
                                    <div class="etw_hometitle"><em>Видео</em></div>
                                    <div class="videoall">
                                       <ul>
                                          <li><a class="video_box" href="#"
                                             data-video-path="en/guojizhonggong/wheel-loader-1_en"><span><img
                                             src="res/images/video01.jpg"></span></a></li>
                                          <li><a class="video_box" href="#"
                                             data-video-path="en/guojizhonggong/wheel-loader-2_en"><span><img
                                             src="res/images/video02.jpg"></span></a></li>
                                          <li><a class="video_box" href="#"
                                             data-video-path="en/guojizhonggong/wheel-loader-3_en"><span><img
                                             src="res/images/video03.jpg"></span></a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>

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
                              <div class="nav-page" id="a4">
                                 <div class="content">
                                    <div class="etw_hometitle"><em>Отправить запрос</em></div>
                                    <div id="etw_set_feedback_form">
                                       <div id="floatchatiframe2011"></div>
                                    </div>
                                    <div class="big_probanner_box">
                                       <a href="1wheel_loader.html">
                                          <img src="res/images/typeImgBanner/inner_banner_колесный_погрузчик.jpg" alt="Wheel Loaders">
                                          <div class="bigpro_des">
                                             <h3>Колесные погрузчики</h3>
                                             <p>Подробнее об ассортименте колесных погрузчиков CHANGLIN
                                             </p>
                                             <span class="etw_deiscover">Подробнее о машинах</span>
                                          </div>
                                       </a>
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
                                                <li class="product_img"><a href="9excavator.html"><img
                                                   src="res/images/typeImg/pro_02.png" alt="Excavator"></a></li>
                                                <li class="product_con"><a href="9excavator.html">Экскаватор</a></li>
                                             </ol>
                                          </li>
                                          <li>
                                             <ol>
                                                <li class="product_img"><a href="2motor_grader.html"><img
                                                   src="res/images/typeImg/pro_03.png" alt="Автогрейдер "></a></li>
                                                <li class="product_con"><a href="2motor_grader.html">Автогрейдер</a>
                                                </li>
                                             </ol>
                                          </li>
                                          <li>
                                             <ol>
                                                <li class="product_img"><a href="3road_roller.html"><img
                                                   src="res/images/typeImg/pro_04.png" alt="Дорожный каток "></a></li>
                                                <li class="product_con"><a href="3road_roller.html">Дорожный каток</a>
                                                </li>
                                             </ol>
                                          </li>
                                          <li>
                                             <ol>
                                                <li class="product_img"><a href="10-bulldozer.html"><img
                                                   src="res/images/typeImg/pro_05.png" alt="Bulldozer"></a></li>
                                                <li class="product_con"><a href="10-bulldozer.html">Бульдозер</a></li>
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
                                             <a href="overseas_service.html" class="images"><img
                                                src="res/images/service_03.jpg"></a>
                                             <div class="text">
                                                <a href="overseas_service.html" class="title">Международное
                                                обслуживание</a>
                                             </div>
                                          </li>
                                          <li>
                                             <a href="overseas_service.html" class="images"><img
                                                src="res/images/service_01.jpg"></a>
                                             <div class="text">
                                                <a href="overseas_service.html" class="title">Обслуживание</a>
                                             </div>
                                          </li>
                                          <li>
                                             <a href="parts.html" class="images"><img src="res/images/service_02.jpg"></a>
                                             <div class="text">
                                                <a href="parts.html" class="title">Запчасти</a>
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
                                <div class="etw_hometitle">Наши продукции</div>
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
                                         <a href="./9excavator.html">
                                         <img src="./res/images/typeImg/pro_02.png" alt="Excavator">
                                         </a>
                                      </li>
                                      <li class="product_con">
                                         <a href="./9excavator.html">Экскаватор</a>
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
                    <div class="industry">
                       <div class="content">
                          <div class="etw_hometitle">
                             <em>Наши <span>работы</span>
                             </em>
                          </div>
                          <ul id="app_new_pro_home" style="">
                             <li>
                                <a href="./news-cl.html?id=35667" class="images ind_newimg">
                                <img src="./res/images/2023031711500884838.jpg" alt="{{val.p_name}}">
                                </a>
                                <a href="./news-cl.html?id=35667" class="newname">Great start?SINOMACH devices have gone overseas in
                                batches</a>
                             </li>
                             <li>
                                <a href="./news-cl.html?id=35589" class="images ind_newimg">
                                <img src="./res/images/202301091055210.png" alt="{{val.p_name}}">
                                </a>
                                <a href="./news-cl.html?id=35589" class="newname">With gratitude.We meet in 2023!</a>
                             </li>
                             <li>
                                <a href="./news-cl.html?id=35365" class="images ind_newimg">
                                <img src="./res/images/2022122818014540077.jpg" alt="{{val.p_name}}">
                                </a>
                                <a href="./news-cl.html?id=35365" class="newname">Sinomach-Hi International Equipment Company's
                                agent in a Middle East country held a successful product exhibition</a>
                             </li>
                             <li>
                                <a href="./news-cl.html?id=35149" class="images ind_newimg">
                                <img src="./res/images/2022112517535884866.jpg" alt="{{val.p_name}}">
                                </a>
                                <a href="./news-cl.html?id=35149" class="newname">Sinomach-Hi International Equipment Company
                                shipped bulk excavators</a>
                             </li>
                          </ul>
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
                    <div class="service_content">
                       <div class="content">
                          <div class="etw_hometitle">ПОДДЕРЖКА ВАШЕГО <span>БИЗНЕСА</span>
                          </div>
                          <div class="title_bg">
                             <img src="./res/images/title.png">
                          </div>
                          <ul>
                       <!--      <li>
                                <a href="./overseas_service.html" class="images">
                                <img src="./res/images/service_03.jpg">
                                </a>
                                <div class="text">
                                   <a href="./overseas_service.html" class="title">Международное обслуживание</a>
                                </div>
                             </li>  -->
                             <li>
                                <a href="./final.html?page=service" class="images">
                                <img src="./res/images/service_01.jpg">
                                </a>
                                <div class="text">
                                   <a href="final.html?page=service" class="title">Обслуживание</a>
                                </div>
                             </li>
                             <li>
                                <a href="./final.html?page=parts" class="images">
                                <img src="./res/images/service_02.jpg">
                                </a>
                                <div class="text">
                                   <a href="./final.html?page=parts" class="title">Запчасти</a>
                                </div>
                             </li>
                          </ul>
                       </div>
                    </div>`);
var contentParts = (`
СТРАНИЦА В РАЗРАБОТКЕ

`)
var contentIntroduction = (`
СТРАНИЦА В РАЗРАБОТКЕ

`)
var contentContacts = (`
СТРАНИЦА В РАЗРАБОТКЕ

`)
var contentService = (`
СТРАНИЦА В РАЗРАБОТКЕ

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
              .replace(/{{TYPE}}/g, type.name);

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