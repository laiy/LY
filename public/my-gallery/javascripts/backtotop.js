(function() {

    setInterval(controlTheButton, 100);

    function controlTheButton() {
        if ($('body').scrollTop() > 200) {
            $('#backtotop').css("opacity", "0.7");
        } else {
            $('#backtotop').css("opacity", "0");
        }
    }

})();