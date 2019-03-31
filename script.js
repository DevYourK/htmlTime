var eco_switch = false;

function zeroPlus(num) {
	return ((num <= 9) ? '0' + num : num);
}

function time() {
	var cn = new Date(),
		cal = cn.getFullYear() + '-' + (cn.getMonth() + 1) + "-" + cn.getDate(),
		ch_calc = cn.getHours(),
		am_pm = ((ch_calc >= 12) ? 'PM' : 'AM'),
		ch = ((ch_calc > 12) ? zeroPlus(ch_calc - 12): zeroPlus(ch_calc)),
		cm = zeroPlus(cn.getMinutes()),
		cs = zeroPlus(cn.getSeconds());

		switch(eco_switch) {
			case true:
				var eco = "[50%] " ; document.getElementById("block").style.opacity = "0.5";
			break;
			case false:
				if(ch_calc >= 2 && ch_calc <= 7) {
					if(ch_calc >= 3 && ch_calc <= 6) {
						var eco = '[3%] ';
						document.getElementById("block").style.opacity = "0.03";
						} else {
							var eco = '[15%] ';
							document.getElementById("block").style.opacity = "0.15";
					}
				} else {
					var eco = ''; document.getElementById("block").style.opacity = "1";
				}
			break;
		}

		document.getElementById("cyear").innerHTML = eco + cal;
		document.getElementById("ctime").innerHTML = am_pm + '&nbsp;&nbsp;' + ch + ' : ' + cm + ' : ' + cs;
		setTimeout("time()", 100);
}

function showMenu() {
	document.getElementById("menu").style.height = "100%";
}
function closeMenu() {
	document.getElementById("menu").style.height = "0px";
}

function backgroundPlus() {
	document.getElementById("block").classList.add("image");
}
function backgroundMinus() {
	document.getElementById("block").classList.remove("image");
}

function ecoOn() {
	eco_switch = true;
}
function ecoOff() {
	eco_switch = false;
}
