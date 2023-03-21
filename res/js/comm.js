(function($,window,undefined){
	var $allDropdowns = $();
	$.fn.dropdownHover = function(options) {
		$allDropdowns = $allDropdowns.add(this.parent());   
		return this.each(function() {
			var $this = $(this).parent(),   
				defaults = {
					delay: 50, 
					instantlyCloseOthers: true 
				}, 
				data = {delay: $(this).data('delay'), instantlyCloseOthers: $(this).data('close-others')},  
				options = $.extend(true, {}, defaults, options, data),
				timeout;    
			$this.hover(function() {    
				if(options.instantlyCloseOthers === true){
					$allDropdowns.removeClass('show'); 
					window.clearTimeout(timeout); 
					$(this).addClass('show');
					$this.find(".dropdown-menu").addClass("show");
				}
			}, function() { 
				console.log(options.delay);
				timeout = window.setTimeout(function() {    
					$this.removeClass('show');  
					$this.find(".dropdown-menu").removeClass("show");
				}, options.delay);  
			}); 
		}); 
	};  
})(jQuery, this);
if($(window).width()>992)
{
    $('.dropdown-toggle').dropdownHover(); 
}
$("a.dropdown-toggle").click(function(e) {
    if ($(window).width() > 992) {
        e.preventDefault();
        location.href = $(this).attr("href");
    } else {
        e.preventDefault();
        var classname = e.target["className"];
        if (classname == "pro_icon") {
            var parent_id = $(this).parent();
            var parentclass = parent_id.attr("class");
            if (parentclass.indexOf("show") >= 0) {
                parent_id.removeClass("show");
                parent_id.find("ul.dropdown-menu").removeClass("show");
                parent_id.find("span.pro_icon").html("+");
            } else {
                parent_id.addClass("show");
                parent_id.find("ul.dropdown-menu").addClass("show");
                parent_id.find("span.pro_icon").html("-");
            }
        } else {
            location.href = $(this).attr("href");
        }
    }
    return false;
});
jQuery(function($) {
	jQuery(".js-gallery-wrap").magnificPopup({
        delegate: "figure  a",
        type: "image",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });	
	jQuery(".wechat").magnificPopup({
        delegate:"a",
        type:"image",
        gallery:{
            enabled:false,
            navigateByImgClick:false,
            preload:[ 0, 0 ]
        }
    });		
	$("body").on("mousemove", ".related_pic img", function() {
        var th = $(this);
		$(".related_pic a").removeClass("imgdq");
		th.parent().addClass("imgdq");
		
        var src = th.attr("src");
		src = src.replace("m.jpg", ".jpg");
		src = src.replace("s.jpg", ".jpg");
        var href = th.attr("href");
		var thiss =  $(this).parent().parent().parent().parent().parent().parent();
        var imgpro = thiss.find(".left_pics img");
        imgpro.attr("src", src);
        src = src.replace("b.jpg", ".jpg");
        thiss.find(".left_pics a").attr("href", src);
    });
	$("body").on("click", ".etw_language>ul>li>a", function() {             
        if ($(window).width() <=992) {
   			$(".etw_language>ul>li>ol").toggle();
  		}
     	return false;
    });
 	$(window).resize(function() {
     	if ($(window).width() >992) {
    		$("body").find(".etw_language>ul>li>ol").removeAttr("style","");
   		}
    });
	$("body").on("click",".showdown .shoemore",function() {
		
		var div = $(this).parent();
        var hidden = $(this).attr("data-hidden");
        if(hidden ==undefined)
        {
        	hidden = '';
        }
		if(hidden == ""){
          div.find(".showpro").show();
          $(this).attr("data-hidden","0");
		  $(this).find("i").addClass("icon-angle-up");
		  $(this).find("i").removeClass("icon-angle-down");
       }else{
           div.find(".showpro").hide();
           $(this).attr("data-hidden","");
		   $(this).find("i").addClass("icon-angle-down");
		   $(this).find("i").removeClass("icon-angle-up");
       }
    });
	$(".tableinq").each(function(i, ele) {
		var tb=$(this);
        var th=$(this).find("tr");
		th.each(function(index,el){
			var ts=$(this);
			if(index>0 && !ts.hasClass("top"))
			{
				var col=ts.attr("data-col");
				if(col==undefined)
				{
					col=tb.attr("data-col");
				}
				col=col==undefined?0:col;  
				var td=ts.find("td").eq(col);
				ts.append('<td><inquiry title="'+td.text()+'"></inquiry></td>');
			}
			else
			{
				ts.append("<td></td>")
			}
		});
    });
	 
	 $(".tableinq1").each(function(i, ele) {
		var tb=$(this);
		var col=tb.attr("data-col");
		col=col==undefined?1:col;
        var td=$(this).find("tr").eq(0).find("td");
		var newtr="<tr>";
		td.each(function(ind,el){
			var td=$(this);
			var val=$.trim(td.text());
			var colspan=td.attr("colspan");
			var inq="";
			if(ind>(col-1))
			{
				inq="<inquiry title=\""+val+"\"></inquiry>";
			}
			if(colspan!=undefined)
			{
				newtr+="<td colspan=\""+colspan+"\">"+inq+"</td>";
			}
			else
			{
				newtr+="<td>"+inq+"</td>";
			}
			
		});
		newtr+="</tr>";
		tb.append(newtr);
    });
		function init()
	 {
		if($(window).width()>767)
	 	{
			if($("#etw_top").length==0)
			{
		 		$("body").append('<div id="etw_top"><a class="icon-chevron-up"></a></div>');
		 	}
			$(document).scroll(function(){
				var scrollTop=$(document).scrollTop();
				if(scrollTop>100)
		 		{
					$("#etw_top").show();
					$('.header-top').stop().animate({height:0},30);    
				}
				else
				{
					$("#etw_top").hide();  
					$('.header-top').stop().animate({height:43},25);
				}
	 		});
		}
	 }
	 init();
	 $("body").on("click","#etw_top",function(){
		 $('html,body').animate({scrollTop:'0px'},800);
	 });
	 if ($(".owl-carousel").length > 0) {
       $(".owl-carousel").owlCarousel({
            loop:true,
            margin:20,
            autoplay:true,
            autoplayTimeout:5000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
      });
    } 
    var navEl = $("#header");
    $(window).scroll(function (event) {
        var scrollTop = $(window).scrollTop();
        var bodyScrollHeight = document.body.scrollHeight;//body高度
        if (scrollTop >= 100) {
            // && bodyScrollHeight >= 500
            navEl.addClass("nav-fixed");
        } else {
            navEl.removeClass("nav-fixed");
        }
    }).trigger("scroll");;// 事件立即执行一次

});


// Fixed Link Tab
    (function fixedTab(){
        var tabBox = $('.js-page-nav-box');

        if (tabBox.length) {
            var tabTop = tabBox.offset().top;
            var tab = $('.js-page-nav');
            if (tab.length) {
                $(window).on('scroll', function(e){
                
                    var headerH = $('.header').outerHeight();
                    // console.log(headerH)
        
                    if ($(window).scrollTop() > (tabTop - headerH)) {
                        tab.addClass('fixed');
                    } else {
                        tab.removeClass('fixed');
                    }
        
        
                    $('.nav-page').each(function(){
                        var _h = $(this).offset().top - headerH - 220;
                        var _maxH = $(this).offset().top + $(this).height() - headerH - 220;
                        var _id = $(this).attr('id');
                        if ($(window).scrollTop() > _h && $(window).scrollTop() < _maxH) {
                            // console.log(_id);
                            $('.pnav-item').removeClass('current');
                            $('.pnav-link').each(function() {
                                if ($(this).attr('data-href') == '#'+_id) {
                                    $(this).parent().addClass('current');
                                }
                            });
                            // $('.js-about-tab a[href=#'+_id+']').addClass('current');
                        }
                    });
        
        
                });
            }
            

            $('.pnav-link,.header-pnav-link').on('click', function(e){
                // e.preventDefault();
                var id = $(this).attr("data-href");
                // $('.js-about-tab a').removeClass('current');
                // $(this).addClass('current');
                if (id) {
                    var bodyScroll = $(id).offset().top - $('.header').height() - 89;
                    $('html,body').stop().animate({
                            scrollTop : bodyScroll
                    }, 'slow');
                }
                
            });
        }
        

    })();
    $("body").on("click", ".tab_li li", function() {
        var index =$(this).index();
		$(".tab_li li").removeClass("dq");
		$(".tab_li li").eq(index).addClass("dq");
		var h = 91;
		if(index  > 0 && $(".tabfixed").length == 1)
		{
			h = 180;
		}
		else if($(".tabfixed").length == 0 && index >0)
		{
			h = 225;
		}
	    var height = $(".protitle4").eq(index).offset().top-h;
	    $("html,body").animate({scrollTop:height},500);
     });
	
	settab();
	$(document).scroll(function() {
		if($(window).width()>991)
		{
			settab();
		}
	});
	
	function settab()
	{
		if($(".tab_li").length >0)
		{
			var scrollTop = $(window).scrollTop();
			var height =  $(".protitle4").eq(0).offset().top-91;
			var height1 = $(".protitle4").eq(1).offset().top-190;
			var height2 = $(".protitle4").eq(2).offset().top-185;
			var height3 = 0;
			if($(".protitle4").length >=4)
			{
				 height3 = $(".protitle4").eq(3).offset().top-185
			}
			
			if(scrollTop >height)
			{
				$(".tab_li").addClass("tabfixed");
			}
			else
			{
				$(".tab_li").removeClass("tabfixed");
			}
			
			var index = 0;
			if(scrollTop >= height1 && scrollTop< height2)
			{
				index =1;
			}
			else if(scrollTop >= height2 && scrollTop< height3)
			{
				index =2;
			}
			else if(height3 == 0 && scrollTop >= height2)
			{
				index =2;
			}
			else if(height3 >0 && scrollTop >= height3)
			{
				index =3;
			}
			$(".tab_li li").removeClass("dq");
		    $(".tab_li li").eq(index).addClass("dq");
		}
	}
	
	$("body").on("click", ".history .hisli", function() {
        var index =$(this).attr("data-i");
	    var height = $(".protitle4").eq(index).offset().top-91;
	    $("html,body").animate({scrollTop:height},500);
     });
