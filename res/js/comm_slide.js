// JavaScript Document
jQuery(function ($) {
    $.get("res/menu-items.txt", function (data) {
        var links = $(data);
        var dqlink = window.location.href;
        dqdocu = dqlink.replace("http://", "").replace("https://", "").replace(window.location.host, "").replace("/", "").replace("2018/", "");
		dqdocu = dqdocu.replace("web/113/changlin239/", "");
        if (dqdocu != "") {
            var dqls = links.find("a[href='" + dqdocu + "']");
			dqls.addClass("active");
            if (dqls.length > 0) {
                var index = 0;
                if ($("#quicknav li").length > 3) {
					if(dqls.parent().parent().parent().find("ul").length == 0){
						dqls.parent().parent().parent().addClass("lidq");
                        index = dqls.parent().parent().parent().index();
					}
					else{
						dqls.parent().parent().addClass("lidq");
                        index = dqls.parent().parent().index();
					}
					
                }
                else {
                    index = dqls.parent().index();
                }
                links.find(".navleft li").eq(index).find("a").addClass("lidq");
                links.find(".navright ul").removeClass("shownavpro");
                links.find(".navright ul").eq(index).addClass("shownavpro");
            }
            else {
                links.find(".navleft li").eq(0).find("a").addClass("lidq");
                links.find(".navright ul").eq(0).addClass("shownavpro");
            }
        }
        else {
            links.find(".navleft li").eq(0).find("a").addClass("lidq");
            links.find(".navright ul").eq(0).addClass("shownavpro");
        }
        links.appendTo($("#menu-items"));
    })

    menulist();
    jQuery(window).resize(function () {
        menulist();
    });
    function menulist() {
        var w = jQuery(window).width();
        var header_w = $("#header .headerin").width() + 2;
        var header_h = $("#header").height() - 65;
        for (var i = 0; i < $(".top-nav .row").length; i++) {
            if (w > 767) {
                var paddingleft = (w - header_w) / 2;
                var left = $(".top-nav .row").eq(i).parent().offset().left - paddingleft;
                $(".top-nav .row").eq(i).css("top", header_h + "px");
                $(".top-nav .row").eq(i).css("width", header_w + "px");
                $(".top-nav .row .navproinfo").eq(i).css("width", header_w + "px");
                $(".top-nav .row").eq(i).css("left", -left);
            }
            else {
                $(".top-nav .row").eq(i).removeAttr("style");
                $(".top-nav .row .navproinfo").eq(i).removeAttr("style");
            }
        }
    }

    $("body").on("mousemove", ".top-nav .navleft li", function () {
        var index = $(this).index();
        $(this).parent().find("li a").removeClass("lidq");
        $(this).find("a").addClass("lidq");
        $(".navright ul").removeClass("shownavpro");
        $(".navright ul").eq(index).addClass("shownavpro");
    });
});

