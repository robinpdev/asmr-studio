let soundfiles = [
	"rain",
	"scissors",
	"wind",
	"thunder",
	"tapping",
	"wind",
	"thunder",
	"tapping"
];

console.log("running");
$(document).ready(function () {
	for (sound in soundfiles) {
		$("#soundpanel").append(temp("soundstencil", {}));
	}
});