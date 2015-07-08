$(document).ready(function() {
    // portable
    //enquire.register("screen and (max-width: 1023px)", {
    //    match : function() {
    //    }
    //});

    // desktop
    enquire.register("screen and (min-width: 1024px)", {
        match : function() {
            require(["./assets/script/dots.js"]);
        }
    });
});
