$(window).scroll(function() {
    if ($(this).scrollTop() > 15)
        $('.head__row').addClass("head__alt");
    else
        $('.head__row').removeClass("head__alt");
});
