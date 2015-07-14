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
        $.each($('button'), function(index, btn){
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


    point($("#worldcup"), null, function() {
        $("#worldcup table.free").addClass("animated fadeInRightSmall");
        setTimeout(function(){
            $("#worldcup table.pro").addClass("animated fadeInRightSmall");
        }, 300);
        setTimeout(function(){
            if(!$('#video').length)
                $("#whatis > .wrapper").append('<iframe id="video" width="100%" height="515" src="//www.youtube.com/embed/Gc2en3nHxA4?rel=0" frameborder="0" allowfullscreen></iframe>');
        }, 800);
    });

});
