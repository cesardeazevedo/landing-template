$(window).scroll(function() {
    if ($(this).scrollTop() > 15) {
        $('.head__row').addClass("head__alt");
    } else {
        $('.head__row').removeClass("head__alt");
    }
});

$(document).ready(function() {
    var scrollTo = function(to) {
        $.scrollTo(to, 1000, {easing:'easeInOutExpo', offset:0, 'axis':'y'});
    };

    $(".btn--home").click(function(e){
        scrollTo("body");

        e.preventDefault();
    });
    $(".btn--works").click(function(e){
        scrollTo("#works");

        e.preventDefault();
    });

    $('.btn--platform').click(function(e){
        scrollTo("#platform");

        e.preventDefault();
    });

    $('.btn--video').click(function(e){
        scrollTo('#video');

        e.preventDefault();
    });
});
