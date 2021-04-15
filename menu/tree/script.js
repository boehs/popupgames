const TICK_LENGTH = 900;

function hover() {
	var i = 0;
	window.setInterval(() => {
		if (i > 5) {
			window.moveBy(0, -4);
			i++;
			console.log(i);
			if (i == 12) {
				i = 0;
			}
		} else {
			window.moveBy(0, 4);
			i++;
		}
	}, TICK_LENGTH);
}
hover();
