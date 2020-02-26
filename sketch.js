let img;
let brightness;
let recharge;
let on;

function preload() {
  img = loadImage('images/ForestBirds.jpg');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // img.resize(width, height);
  pixelDensity(1);
  img.loadPixels();
  loadPixels();
  on = true;
  brightness = 120;
  recharge = 0;
}

function mousePressed(){
  on = !on
  brightness = recharge;
}

function draw() {
  if (on === true){
    brightness = brightness - .4;
    if (brightness <= 1) {
      brightness = 1;
    }
  }
  else {
    brightness = 0;
    // recharge = recharge + 2.5;
    if (recharge >= 100){
      recharge = 100;
    }
  }


  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let loc = (x + y * img.width) * 4;
      let r, g, b;
      r = img.pixels[loc];
      let maxdist = brightness;
      let d = dist(x, y, mouseX, mouseY);
      let adjustbrightness = (255 * (maxdist - d)) / maxdist;
      r += adjustbrightness;
      r = constrain(r, 0, 255);
      let pixloc = (y * width + x) * 4;
      pixels[pixloc] = r;
      pixels[pixloc + 1] = r;
      pixels[pixloc + 2] = r;
      pixels[pixloc + 3] = 255;
    }
  }
  updatePixels();
  console.log(recharge);
}

function keyPressed() {
  if (keyCode === 'a') {
    recharge = recharge + 2.5;
}
