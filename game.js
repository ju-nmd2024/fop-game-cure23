function setup() {
  createCanvas(600, 600);
}

let characterX = 0;
let characterY = 0;
let velocityY = 1;
let acceleration = 0.2;

let gameState = "Not Started";

function gameBackground() {
  fill(0);
  rect(50, 492, 100, 108);
  rect(450, 492, 100, 108);
  ellipse(170, 480, 20);
  ellipse(430, 480, 20);
  rect(420, 490, 20, 7);
  rect(160, 490, 20, 7);

  push();
  translate(80, 160);
  arc(0, 0, 30, 30, HALF_PI, 0);
  pop();

  push();
  translate(380, 160);
  rotate(HALF_PI);
  arc(0, 0, 30, 30, HALF_PI, 0);

  translate(200, 0);
  rotate(HALF_PI);
  arc(0, 0, 30, 30, HALF_PI, 0);

  translate(300, 0);
  rotate(HALF_PI);
  arc(0, 0, 30, 30, HALF_PI, 0);
  pop();

  push();
  noFill();
  strokeWeight(6);
  stroke(0);
  rect(50, 420, 100, 65);
  rect(450, 420, 100, 65);

  arc(300, 500, 260, 50, 0, PI);
  arc(40, 500, 260, 50, 0, PI);
  arc(560, 500, 260, 50, 0, PI);
  strokeWeight(15);
  rect(80, 160, 300, 200);
  line(170, 500, 170, 600);
  line(430, 500, 430, 600);
  ellipse(550, 270, 110, 150);

  strokeWeight(2);
  triangle(230, 120, 210, 160, 250, 160);
  triangle(550, 140, 535, 200, 565, 200);
  rect(400, 330, 30, 20);

  pop();
}

function diamond() {
  fill(220, 220, 220);
  rect(250, 550, 100, 50);

  push();
  noFill();
  strokeWeight(6);
  stroke(180, 245, 245);
  rect(250, 470, 100, 70);
  pop();

  noStroke();
  fill(200, 0, 0);
  rect(272.5, 485, 55, 15);
  triangle(300, 530, 340, 500, 260, 500);
  fill(250, 50, 50);
  triangle(260, 500, 285, 500, 272.5, 485);
  triangle(285, 500, 315, 500, 300, 485);
  triangle(315, 500, 340, 500, 327.5, 485);
  fill(255, 150, 120);
  triangle(300, 530, 315, 500, 285, 500);
}

function character(x, y) {
  //to get outline colour subtract dark from every fill colour
  const dark = 75;
  push();
  scale(0.6);
  //light beam
  push();
  fill(255, 255, 240, 90);
  noStroke();
  beginShape();
  vertex(450, 0);
  vertex(550, 0);
  vertex(x * 2, 1000);
  vertex(x * 2 - 1000, 1000);
  endShape(CLOSE);
  pop();

  strokeWeight(3);
  //leg and feet left
  push();
  fill(50, 50, 100);
  stroke(50 - dark, 50 - dark, 100 - dark);
  beginShape();
  vertex(x - 100, y + 40);
  bezierVertex(x - 200, y - 10, x - 190, y - 15, x - 190, y - 60);
  bezierVertex(x - 190, y - 60, x - 130, y - 60, x - 130, y - 60);
  bezierVertex(x - 130, y - 60, x - 130, y - 10, x - 50, y + 20);
  endShape();

  fill(100);
  stroke(100 - dark);
  arc(x - 160, y - 70, 40, 45, 0, PI, CHORD);

  beginShape();
  vertex(x - 180, y - 75);
  bezierVertex(x - 201, y - 150, x - 115, y - 150, x - 140, y - 75);
  bezierVertex(x - 140, y - 75, x - 180, y - 75, x - 180, y - 75);
  endShape();

  pop();

  //leg and feet right
  push();
  translate(x + 320, y);
  push();
  fill(50, 50, 100);
  stroke(50 - dark, 50 - dark, 100 - dark);
  beginShape();
  vertex(-200, +40);
  bezierVertex(-150, -10, -130, -10, -130, -60);
  bezierVertex(-130, -60, -130, -60, -190, -60);
  bezierVertex(-190, -60, -190, -15, -250, +20);
  endShape();
  pop();

  fill(100);
  stroke(100 - dark);
  arc(-160, -70, 40, 45, 0, PI, CHORD);

  beginShape();
  vertex(-180, -75);
  bezierVertex(-207, -150, -119, -150, -140, -75);
  bezierVertex(-140, -75, -180, -75, -180, -75);
  endShape();
  pop();

  //rope
  push();
  strokeWeight(10);
  stroke(200, 150, 90);
  line(500, 0, x, y);
  pop();
  //noStroke();
  fill(10, 200, 200);
  stroke(10 - dark, 200 - dark, 200 - dark);

  push();
  //arm and hand left
  push();
  translate(x - 160, y + 5);
  rotate(0.2);
  fill(255, 200, 190);
  stroke(255 - dark, 200 - dark, 190 - dark);
  ellipse(-15, 35, 50);
  line(-35, 20, -15, 24);
  line(-39, 30, -15, 34);
  line(-39, 40, -15, 44.5);
  fill(50);
  stroke(50 - dark);
  rect(0, 0, 100, 70, 10);
  pop();

  //arm and hand right
  push();
  translate(x + 175, y + 72);
  rotate(PI - 0.2);
  push();
  fill(255, 200, 190);
  stroke(255 - dark, 200 - dark, 190 - dark);
  ellipse(-15, 35, 50);
  line(-39, 28, -15, 24);
  line(-39, 38, -15, 34);
  line(-35, 48.5, -15, 44);
  fill(50);
  stroke(50 - dark);
  rect(0, 0, 100, 70, 10);
  pop();
  pop();

  //body
  fill(80);
  stroke(80 - dark);
  rect(x - 115, y + 12, 230, 80, 10);
  pop();

  //hair
  fill(70, 45, 20);
  noStroke();
  ellipse(x + 25, y - 90, 175, 70);
  ellipse(x - 80, y - 85, 75, 50);
  //droplets
  push();
  translate(x - 58, y - 110);
  rotate(-1.2);
  scale(0.3);
  beginShape();
  vertex(0, 0);
  bezierVertex(130, -70, -10, -140, 0, 0);
  endShape();
  rotate(0.8);
  translate(15, 0);
  beginShape();
  vertex(0, 0);
  bezierVertex(130, -70, -10, -140, 0, 0);
  endShape();
  pop();

  //whole face
  stroke(180, 125, 115);
  strokeWeight(2);
  fill(255, 200, 190);

  //face
  beginShape();
  vertex(x - 100, y - 75);
  bezierVertex(x - 100, y - 75, x - 100, y, x - 100, y);
  bezierVertex(x - 100, y + 70, x + 100, y + 70, x + 100, y);
  bezierVertex(x + 100, y, x + 100, y, x + 100, y - 75);
  endShape();

  //left side
  //ear left
  arc(x - 100, y - 30, 80, 70, HALF_PI, PI + HALF_PI);

  //left ear details
  line(x - 100, y - 18, x - 130, y - 33);
  push();
  fill(190, 130, 115);
  arc(x - 100, y - 18, 20, 20, HALF_PI, PI + 0.464);
  pop();

  //ear right
  push();
  translate(x + 200, y);
  arc(-100, -30, 80, 70, PI + HALF_PI, HALF_PI);
  line(-100, -18, -70, -33);
  fill(190, 130, 115);
  arc(-100, -18, 20, 20, 2 * PI - 0.464, HALF_PI);
  pop();

  //glasses left + bridge
  push();
  stroke(0, 0, 0);
  strokeWeight(8);
  arc(x, y - 75, 30, 20, PI, 0);
  fill(150);
  rect(x - 105, y - 80, 90, 55, 8);

  //glasses right
  push();
  translate(x + 120, y);
  rect(-105, -80, 90, 55, 8);
  pop();

  push();
  stroke(255);
  line(x - 95, y - 35, x - 25, y - 70);
  push();
  translate(x + 120, y);
  line(-95, -35, -25, -70);
  pop();

  pop();

  //mouth
  noFill();
  push();
  stroke(180, 125, 115);
  arc(x + 5, y + 25, 45, 35, PI + QUARTER_PI, 2 * PI - QUARTER_PI);
  pop();
  //mic
  push();
  translate(x + 55, y - 30);
  rotate(-0.4);
  arc(0, 0, 150, 100, QUARTER_PI, PI - QUARTER_PI);
  pop();
  ellipse(x + 110, y - 10, 8, 15);
  ellipse(x + 25, y + 25, 8, 5);

  pop();

  //nose
  fill(255 - dark, 200 - dark, 190 - dark);
  ellipse(x, y - 15, 20, 10);
  pop();
}

function draw() {
  background(50);

  //x = 500;
  // y = 500;

  gameBackground();
  character(characterX, characterY);
  diamond();

  if (gameState === "Not Started") {
    characterX = 500;
    characterY = 100;
    fill(0);
    rect(0, 0, 600, 600);
    noStroke();
    fill(100, 200, 10);
    textStyle(BOLD);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("click on one of the arrow keys to start the game...", 300, 300);
    if (keyIsDown(37) || keyIsDown(38) || keyIsDown(39) || keyIsDown(40)) {
      gameState = "Game On";
    }
  } else if (gameState === "Game On") {
    if (keyIsDown(38)) {
      acceleration = -0.25;
    } else {
      acceleration = 0.2;
    }

    velocityY = velocityY + acceleration;
    characterY = characterY + velocityY;

    if (keyIsDown(37)) {
      characterX = characterX - 4;
    } else if (keyIsDown(39)) {
      characterX = characterX + 4;
    }

    if (characterY > 680) {
      //console.log(velocityY);
      if (velocityY < 10) {
        gameState = "Victory";
      } else if (velocityY >= 1) {
        gameState = "Crashed";
      }
    }
  } else if (gameState === "Victory") {
    fill(0, 255, 0, 50);
    rect(0, 0, 600, 600);

    fill(255, 255, 255);
    textStyle(BOLD);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("u won :)", 300, 300);
    console.log("alive");
  } else if (gameState === "Crashed") {
    fill(255, 0, 0, 50);
    rect(0, 0, 600, 600);

    fill(255, 255, 255);
    textStyle(BOLD);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("u lost :(", 300, 300);
    console.log("die");
  }
}
