$(document).ready(function(){

        var point = function(element, ToClass, callback) {
        var footerPoint = new Waypoint({
            element : element
          , handler : function(direction){

                element.fadeTo("fast", 1);
                if(jQuery.isFunction(callback)) {
                    callback();
                }
                if(typeof ToClass !== 'undefined') {
                        element.addClass(ToClass);
                }
            }
            , offset: '60%'
        });
    };

    point($("header"), null, function(){
        $('.banner__title').addClass("animated fadeInUp");
        setTimeout(function(){
            $('.banner__subtitle').addClass("animated fadeInUp");
        }, 700);
        var delay = 1500;
        $.each($('header button'), function(index, btn){
            setTimeout(function(){
                $(btn).addClass("animated fadeInUp");
            }, delay);
            delay += 400;
        });
    });
    point($("#works"), null, function() {
        delay = 0;
        $.each($("#works .feature-item"), function(index, value) {
            setTimeout(function() {
                $(value).addClass("animated fadeInUpSmall");
            }, delay);
            delay += 400;
        });
    });

    var cards = false;
    point($("#platform"), null, function() {
        delay = 0;
        if(!cards) {
            cards = true;
            $.each($("#platform .feature-item"), function(index, value) {
                setTimeout(function() {
                    $(value).addClass("animated fadeInUpSmall");
                    setTimeout(function(){
                        $(value).removeClass("animated fadeInUpSmall");
                        $(value).css('opacity', '1');
                    },1000);
                }, delay);
                delay += 200;
            });
        }
    });

    point($("#video"), null, function() {
        setTimeout(function(){
            if(!$('#youtube').length)
                $("#video > .wrapper").append('<iframe id="youtube" width="100%" height="515" src="//www.youtube.com/embed/h_iFxfCh2B8?rel=0" frameborder="0" allowfullscreen></iframe>');
        }, 800);
    });
});
