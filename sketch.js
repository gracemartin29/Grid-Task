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

  noFill();
  stroke(200);
  strokeWeight(20);
  rect(350, 250, 700, 500, 20);

  // grid loops
  for (let y = 0; y < height; y += CELLSIZE) {
    for (let x = 0; x < width; x += CELLSIZE) {

      // set colour
      fill(random(COLOURS));
      noStroke();

      // calculate center of heart
      let centerX = x + CELLSIZE / 2;
      let centerY = y + CELLSIZE / 2;

      // calculate disatnce from heart center to mouse position
      let mouseDistance = dist(centerX, centerY, mouseX, mouseY);

      // scale CELLSIZE based on mouseDistance
      let scaledSize = map(mouseDistance, 0, width / 2, CELLSIZE * 1.5, CELLSIZE / 2);

      let heartWidth = scaledSize;
      let heartHeight = scaledSize / 2;

      // draws heart shapes
      arc(centerX - heartWidth / 4, centerY - heartHeight / 4, heartWidth / 2, heartHeight / 2, PI, 0);
      arc(centerX + heartWidth / 4, centerY - heartHeight / 4, heartWidth / 2, heartHeight / 2, PI, 0);
      triangle(centerX - heartWidth / 2, centerY - heartHeight / 4, centerX + heartWidth / 2, centerY - heartHeight / 4, centerX, centerY + heartHeight / 2);

    }
  }

}