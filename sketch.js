// Further Reading:
// https://natureofcode.com/vectors/
// https://p5js.org/reference/p5/p5.Vector/


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // positions of the two eyes
  let eyeRadius = width/8;     // size of the eyeball  
  let pupilRadius = eyeRadius / 6;   // size of the pupil
  let maxOffset = eyeRadius - pupilRadius - 8; // keep pupil within eyeball  
  let eye1 = createVector(width/2 - (eyeRadius * 1.2), height/2);
  let eye2 = createVector(width/2 + (eyeRadius * 1.2), height/2);


  drawEye(eye1, eyeRadius, pupilRadius, maxOffset);
  drawEye(eye2, eyeRadius, pupilRadius, maxOffset);
}

function drawEye(center, eyeRadius, pupilRadius, maxOffset) {
  // draw eyeball
  fill(255);
  stroke(0);
  push();
    strokeWeight(4);
    ellipse(center.x, center.y, eyeRadius*2, eyeRadius*2);
  pop();

  // vector from eye center to mouse
  let dir = createVector(mouseX - center.x, mouseY - center.y);

  // limit the movement
  if (dir.mag() > maxOffset) {
    dir.setMag(maxOffset);
  }

  // some visualisations:
  // center to mouse
  line(center.x, center.y, mouseX, mouseY)
  let pointOnCircle = createVector(mouseX - center.x, mouseY - center.y);
  pointOnCircle.setMag(eyeRadius)
  let pointOnCirclePos = p5.Vector.add(center, pointOnCircle);
  fill(255,0,0)
  ellipse(pointOnCirclePos.x, pointOnCirclePos.y, 5);
  ellipse(center.x, center.y, 5);
  ellipse(mouseX, mouseY, 5);

  // pupil position
  let pupilPos = p5.Vector.add(center, dir);

  // draw pupil
  noStroke();
  fill(0);
  ellipse(pupilPos.x, pupilPos.y, pupilRadius*2, pupilRadius*2);
}