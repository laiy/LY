var pic1 = document.getElementById('gallery-slide1');
var pic2 = document.getElementById('gallery-slide2');
var pic3 = document.getElementById('gallery-slide3');
var ctrl1 = document.getElementById('control-circle1');
var ctrl2 = document.getElementById('control-circle2');
var ctrl3 = document.getElementById('control-circle3');

var fadeIn = 0;
var fadeOut = 1;
var pic = pic3;

pic1.className = "opacity-none";
pic2.className = "opacity-none";

ctrl1.addEventListener('click', function() {
    showPic(pic1);
});

ctrl2.addEventListener('click', function() {
    showPic(pic2);
});

ctrl3.addEventListener('click', function() {
    showPic(pic3);
});

function showPic(picx) {

   if (pic != picx) {
        if (fadeIn < 1) {
            fadeIn += 0.01;
            fadeOut -= 0.01;
            picx.style.opacity = fadeIn;
            pic.style.opacity = fadeOut;
            setTimeout(function() {
                showPic(picx);
            }, 3);
        } else {
            fadeIn = 0;
            fadeOut = 1;
            pic = picx;
        }
    }

}

setInterval(carousel, 7500);

carousel();

function carousel() {

    showPic(pic3);
    setTimeout(function() {
        showPic(pic2);
    }, 2500);
    setTimeout(function() {
        showPic(pic1);
    }, 5000);

}
