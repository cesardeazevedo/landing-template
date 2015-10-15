$(document).ready(function() {
    // portable
    enquire.register("screen and (max-width: 1023px)", {
        match : function() {
            $('.head-btn').on('click', function(e) {
                var that = $(this),
                    nav = $('.head-nav');

                nav.toggleClass('head-nav--open');

                e.preventDefault();
            });
        }
    });
});
