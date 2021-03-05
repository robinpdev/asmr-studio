
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

for (sound in soundfiles){
    var stencil = document.getElementById("soundstencil").cloneNode("true");
    stencil.id = sound;

    document.getElementById("soundpanel").appendChild(stencil);
}