(function() {

    var inputEl = $('input');
    if($.trim($('input').val()) !== '')
        inputEl.addClass('input--filled');

    // events:
    $('input').focus(onInputFocus);
    $('input').blur(onInputBlur);

    function onInputFocus() {
        inputEl.add('input--filled');
    }

    function onInputBlur(ev) {
        if($.trim(inputEl.val()) === '' )
            inputEl.removeClass('input--filled');
    }
})();
