var bright=100;

function zeroPlus(num) {
	return ((num <= 9) ? '0' + num : num);
}

function time() {
	let cn = new Date();
	document.getElementById("block").style.opacity = bright/100;

	document.getElementById("cyear").innerHTML = ((bright>=100) ? '' : "["+bright+"%]&nbsp;") + cn.getFullYear() + '-' + zeroPlus(cn.getMonth() + 1) + "-" + zeroPlus(cn.getDate());
	document.getElementById("ctime").innerHTML = ((cn.getHours() >= 12) ? 'PM' : 'AM') + '&nbsp;' + ((cn.getHours() > 12) ? zeroPlus(cn.getHours() - 12): zeroPlus(cn.getHours())) + ':' + zeroPlus(cn.getMinutes()) + ':' + zeroPlus(cn.getSeconds());
	setTimeout("time()", 100);
}

function shoM() {
	document.getElementById("menu").style.height = "100%";
}
function clsM() {
	document.getElementById("menu").style.height = "0px";
}

function iO() {
	document.getElementById("block").classList.add("image");
}
function iD() {
	document.getElementById("block").classList.remove("image");
}

function bP() {
	if(bright<100) bright+=10;
}
function bM() {
	if(bright>=30) bright-=10;
}
