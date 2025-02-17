const CELLSIZE = 50;
const COLOURS = ["#330019", "#660033", "#99004C", "#CC0066", "#FF007F", "#FF3399", "#FF66B2", "#FF99CC", "#FFCCE5"];


function setup() {
  createCanvas(700, 500);
  frameRate(6);

  rectMode(CENTER)
}

function draw() {
  background(0);

  // draw tv 
  for (let y = 0; y < height; y += 10) {
    for (let x = 0; x < width; x += 10) {
      // tv screen
      fill(random(70));
      noStroke();
      rect(x, y, 10, 10);
    }
  }


  // draw grid
  for (let y = 0; y < height; y += CELLSIZE) {
    for (let x = 0; x < width; x += CELLSIZE) {


      // set fill color
      fill(random(COLOURS));
      noStroke();

      // calculate the center of the current heart
      let centerX = x + CELLSIZE / 2;
      let centerY = y + CELLSIZE / 2;

      // calculate distance from heart center to mouse position
      let mouseDistance = dist(centerX, centerY, mouseX, mouseY);

      // scale cell size based on distance (closer = larger, farther = smaller)
      let scaledSize = map(mouseDistance, 0, width / 2, CELLSIZE * 1.5, CELLSIZE * 0.5);
      scaledSize = constrain(scaledSize, CELLSIZE * 0.5, CELLSIZE * 1.5);

      // drawing the heart
      let heartWidth = scaledSize;
      let heartHeight = scaledSize * 0.6;

      arc(centerX - heartWidth / 4, centerY - heartHeight / 4, heartWidth / 2, heartHeight / 2, PI, 0);
      arc(centerX + heartWidth / 4, centerY - heartHeight / 4, heartWidth / 2, heartHeight / 2, PI, 0);
      triangle(centerX - heartWidth / 2, centerY - heartHeight / 4, centerX + heartWidth / 2, centerY - heartHeight / 4, centerX, centerY + heartHeight / 2);

    }

    noFill();
    stroke(200);
    strokeWeight(20);
    rect(350, 250, 700, 500, 20);
  }
}