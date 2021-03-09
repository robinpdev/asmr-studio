let started = false;
let shouldstart = false;

function setup(){
    if(!started && shouldstart){
        started = true;
        console.log("app started");

        addsounds();

        var canvasparent = $("#canvaspanel");
        var canvas = createCanvas(canvasparent.width(), canvasparent.height());
        canvas.parent("canvaspanel");

        var thecanvas = $("#defaultCanvas0");
        thecanvas.css("position", "absolute");
    }
}

function draw(){
    background(0);
}


function windowResized() {
    var canvasparent = $("#canvaspanel");
    console.log(canvasparent.width());
    resizeCanvas(canvasparent.width(), canvasparent.height())
}