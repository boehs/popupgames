var myIndex = 0;
function show(n) {
	var x = document.getElementById(n);
	x.style.visibility = "visible";
}

function hide(n) {
	var x = document.getElementById(n);
	x.style.visibility = "visible";
}

function none() {
	var i;
	var x = document.getElementsByClassName("bgimg");
	for (i = 0; i < x.length; i++) {
		x[i].style.visibility = "hidden";
	}
}

window.onload = function () {
	none();
};

document.body.onkeyup = function (e) {
	if (e.keyCode == 32) {
		show("ocean");
		var w = window.innerWidth;
		var h = window.innerHeight;
		var x = window.screen.width;
		var y = window.screen.height;

		var woffset = x - w;
		var hoffset = y - h;
		var thiswindow = window.open(
			"/menu/tree",
			"tree one",
			`width=215,height=287`
		);
		thiswindow.moveTo(woffset + 10, hoffset - 10);
		thiswindow.resizeTo(220, 298 + 35);

		var thiswindow2 = window.open(
			"/menu/tree",
			"tree two",
			`toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=215,height=287`
		);
		thiswindow2.moveTo(window.screen.width - 225, window.screen.height - 450);
		thiswindow2.resizeTo(220, 298 + 35);
	}
};
