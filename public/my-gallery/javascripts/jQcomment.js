(function() {

    var socket = io.connect('http://172.18.182.71/');
    var count = 0;

    window.onload = function() {
        getData();
    }

    function getData() {

        $.get('/comments', function(commentText) {
            console.log(commentText);
            var i;
            if (commentText.length - count) {
                for (i = count; i < commentText.length; i++) {
                    $("#comments-list-ul").prepend("<li><p></p></li>");
                    $("#comments-list-ul li:first-child").addClass("comment-item").children().text(commentText[i].comments);
                }
                count = commentText.length;
                $("#counter").text(count + 1);
            }
        });

    }

    socket.on('allData', function(commentText) {
        console.log(commentText);
        var i;
        if (commentText.length - count) {
            for (i = count; i < commentText.length; i++) {
                $("#comments-list-ul").prepend("<li><p></p></li>");
                $("#comments-list-ul li:first-child").addClass("comment-item").children().text(commentText[i].comments);
            }
            count = commentText.length;
            $("#counter").text(count + 1);
        }
    });

    $("#comment-submit").click(function() {

        var $commentList = $("textarea.comment");
        if ($commentList.val().length < 4) {
            alert("输入的内容少于4个字符，不允许发布。");
        } else {
            $("#comments-list-ul").prepend("<li><p></p></li>");
            $("#comments-list-ul li:first-child").addClass("comment-item").children().text($commentList.val());
            var text = $("#comments-list-ul li:first-child").children().text();
            // $.post('/comment', {
            //     "comment": text
            // });
            $commentList.val("");
            count++;
            $("#counter").text(count + 1);
            socket.emit('newData', text);
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
