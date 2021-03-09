let soundfiles = [
	["rain", "fa-cloud-showers-heavy"],
	["scissors", "fa-volume-up"],
	["wind", "fa-volume-up"],
	["thunder", "fa-volume-up"],
	["tapping", "fa-volume-up"],
	["wind", "fa-volume-up"],
	["thunder", "fa-volume-up"],
	["tapping", "fa-volume-up"]
];

function addsounds() {
	$(document).ready(function () {
		for (sound in soundfiles) {
			$("#soundpanel").append(temp("soundstencil", {
				icon: soundfiles[sound][1]
			}));
		}
	});
}