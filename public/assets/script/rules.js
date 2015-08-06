$(document).ready(function(){
    var pageWrap = document.body;
    var pages = document.querySelector('#page-3');
    var triggerLoading = [].slice.call(pageWrap.querySelectorAll('a.link-rules'));
    var loader = new SVGLoader(document.getElementById('loader'), { speedIn : 100 });
    function init(){
        triggerLoading.forEach(function(trigger){
            trigger.addEventListener('click', function(ev){
                ev.preventDefault();
                loader.show();
                // after some time hide loader
                setTimeout(function(){
                    loader.hide();

                    $(pages).toggleClass('show');
                }, 1000);
            });
        });
    }
    init();
});
