(function($) {
    if ($('#bxslider-home4').length > 0) {
        var slider = $('#bxslider-home4').bxSlider({
            nextText: '<i class="icon-angle-right"></i>',
            prevText: '<i class="icon-angle-left"></i>',
            auto: true,
            pause: 4000,
            onSliderLoad: function(currentIndex) {
                $('#bxslider-home4 li').find('.caption').each(function(i) {
                    $(this).show().addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                    function() {
                        $(this).removeClass('fadeInRight animated')
                    })
                })
            },
            onSlideBefore: function(slideElement, oldIndex, newIndex) {
                slideElement.find('.caption').each(function() {
                    $(this).hide().removeClass('animated fadeInRight')
                })
            },
            onSlideAfter: function(slideElement, oldIndex, newIndex) {
                setTimeout(function() {
                    slideElement.find('.caption').each(function() {
                        $(this).show().addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                        function() {
                            $(this).removeClass('fadeInRight animated')
                        })
                    })
                },
                500)
            }
        })
    }
})(jQuery);