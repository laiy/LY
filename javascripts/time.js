setInterval("present_time()",50);
function present_time() {
	var present, year, month, day, hour, minute, second;
	present = new Date();
	year = present.getFullYear();
	month = present.getMonth() + 1;
	day = present.getDate();
	hour = present.getHours();
	minute = present.getMinutes();
	second = present.getSeconds();
	if (minute < 10) minute = "0" + minute;
	if (second < 10) second = "0" + second;
	if (hour < 10) hour = "0" + hour;
	if (day < 10) day = "0" + day;
	if (month < 10) month = "0" + month;
	time.innerHTML = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}
