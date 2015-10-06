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

    savvior.init('#grid', {
        "screen and (max-width: 400px)": { columns: 1 },
        "screen and (min-width: 400px) and (max-width: 640px)": { columns: 2 },
        "screen and (min-width: 640px) and (max-width: 1024px)": { columns: 3 },
        "screen and (min-width: 1024px) and (max-width: 1440px)": { columns: 4 },
        "screen and (min-width: 1440px)": { columns: 6 }
    });
    // desktop
    enquire.register("screen and (min-width: 1024px)", {
        match : function() {
            require(["assets/script/dots.js"]);
        }
    });
});
