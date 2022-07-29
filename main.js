function preload() {
}
  
function setup() {
    canvas = createCanvas(400, 325);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
  
function draw() {
    image(video, 0, 0, 400, 325)
}

function take_snapshot(){
    save('myFliteredImage.png')
}