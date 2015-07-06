$(window).scroll(function() {
    if ($(this).scrollTop() > 15)
        $('.head__row').addClass("head__alt");
    else
        $('.head__row').removeClass("head__alt");

});

$(document).ready(function(){
    var scrollTo = function(to){
        $.scrollTo(to, 1000, {easing:'easeInOutExpo',offset:0,'axis':'y'});
    };

    $(".btn--home").click(function(){
        scrollTo("body");
    });
    $(".btn--works").click(function(){
        scrollTo("#works");
    });

    $('.btn--platform').click(function(){
        scrollTo("#platform");
    });

    $('.btn--worldcup').click(function(){
        scrollTo('#worldcup');
    });

    $('.btn--whatis').click(function(){
        scrollTo('#whatis');
    });

    $('.btn--beta').click(function(){
        scrollTo('#beta');
    });
});
