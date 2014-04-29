(function() {

    $("#gallery-slide1").css("display", "none");
    $("#gallery-slide2").css("display", "none");

    $("#control-circle1").click(function() {
        showPic("#gallery-slide1", 400);
    });

    $("#control-circle2").click(function() {
        showPic("#gallery-slide2", 400);
    });

    $("#control-circle3").click(function() {
        showPic("#gallery-slide3", 400);
    });

    function showPic(pic, t) {
        $(".gallery-slides").children().addClass("gallery-slide").stop(true, true);
        $(pic).removeClass("gallery-slide");
        $(".gallery-slide").fadeOut(t);
        $(pic).fadeIn(t);
        if (t == 400) {
            clearInterval(interval);
            interval = setInterval(carousel, 7500);
        }
    }

    var interval = setInterval(carousel, 7500);

    carousel();

    function carousel() {

        showPic("#gallery-slide3", 1200);
        setTimeout(function() {
            showPic("#gallery-slide2", 1200);
        }, 2500);
        setTimeout(function() {
            showPic("#gallery-slide1", 1200);
        }, 5000);

    }

})();
