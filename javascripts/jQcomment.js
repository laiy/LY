(function() {

    var count = 1;

    $("#comment-submit").click(function() {

        var $commentList = $("#comment-text");
        var avoidAttack = /<[^>]+>/gi;
        if ($commentList.val().length < 4) {
            alert("输入的内容少于4个字符，不允许发布。");
        } else if (avoidAttack.test($commentList.val())) {
            alert("发布内容有攻击嫌疑，不允许发布。")
        } else {
            $("#comments-list-ul").append("<li><p></p></li>");
            $("#comments-list-ul li:last-child").addClass("comment-item").children().append($commentList.val());
            $commentList.val("");
            count++;
            $("#counter").text(count);
        }

    });
     
    document.getElementById("comment-text").onkeydown = function (moz_ev) {
        var ev = null;
        if (window.event) {
            ev = window.event;
        } else {
            ev = moz_ev;
        }
        if (ev != null && ev.ctrlKey && ev.keyCode == 13) {
            $("#comment-submit").click();
        }
    }

})();
