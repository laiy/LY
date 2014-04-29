document.getElementById("comment-submit").addEventListener('click', list);
var count = 1;
function list() {

	var text = document.getElementById("comment-text");
	var commentList = document.getElementById("comments-list-ul");
	var li = document.createElement("li");
	var p = document.createElement("p");
	var inputText = document.createTextNode(text.value);

	if (inputText.length < 4) {
		alert("输入的内容少于4个字符，不允许发布。");
	} else {
		p.appendChild(inputText);
		li.appendChild(p);
		li.className = 'comment-item';
		commentList.appendChild(li);
		text.value = "";
		count++;
		counter.innerHTML = count;
	}

}
