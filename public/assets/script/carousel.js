(function($, document){
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
          margin:20
        , responsiveClass:true
        , responsive: {
          0: {
              items:1
            , stagePadding: 20
          }
          , 600: {
              items: 3
          }
          , 1000: {
              items:5
          }
        }
      });
    });
})(jQuery, document);
