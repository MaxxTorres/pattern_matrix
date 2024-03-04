var purple;
var gold;
var black;
var option = 1;
var x_pattern1 = 0;
var y_pattern1 = 0;
var rotate_pattern1 = 0; 
var angle_inc_pattern1 = 0;
var dir_pattern1 = 1;
var scale_pattern2 = 1.5;
var dir_pattern2 = 1;
var scale_pattern3 = 0.3;
var angle_pattern3 = 0;

//INSTRUCTIONS:
//Use number keys to browse through patterns
//Press mouse to interact

function setup() {
  createCanvas(800, 800);
  background(0);
  strokeWeight(3);
  purple = color(141, 62, 158);
  gold = color(219, 196, 101);
  black = color(0);
  frameRate(30);
}

function draw() {
  if (option == 1) {
    background(0);
    if (mouseIsPressed) {
      if (x_pattern1 <= 80 && dir_pattern1 == 1) {
        x_pattern1 += 5;
        y_pattern1 += 5;
        if (x_pattern1 == 80) {
          dir_pattern1 = 0;
        }
      }
      else if (dir_pattern1 == 0) {
        x_pattern1 -= 5;
        y_pattern1 -= 5;
        if (x_pattern1 == 0) {
          dir_pattern1 = 1;
        }
      }
      angle_inc_pattern1 = 0.5;
    }
    else {
      angle_inc_pattern1 = 0;
    }
    for (let i=100; i<800; i+=200) {
      for (let j=100; j<800; j+=200) {
        push();
          translate(j,i);
          circleClusterV1();
        pop();  
      }
    }
  }
  else if (option == 2) {
    background(0);
    scale(0.4);
    for (let i=50; i<1800; i+=200) {
      for (let j=50; j<1800; j+=200) {
        if ( ((j+100) <= ((mouseX/0.4)+50)) && ((j+100) >= (mouseX/0.4)-100) && 
            ((i+50) <= ((mouseY/0.4)+50)) && ((i+50) >= (mouseY/0.4)-100) ) {
          shrinkGrowStamp(j,i);
        }
        else if (mouseIsPressed && (((j+100) <= ((mouseX/0.4)+50)) && ((j+100) >= (mouseX/0.4)-100) || 
                ((i+50) <= ((mouseY/0.4)+50)) && ((i+50) >= (mouseY/0.4)-100))) {
          shrinkGrowStamp(j,i);
              }
        else {
          push();
            translate(j,i);
            stamp(0, 0, purple, gold, purple, gold, purple);
          pop();  
        }
      }
    }
  }
  else if (option == 3) {
    translate(350,350);
    noFill();
    stroke(255);
    strokeWeight(30);
    ellipse(0,0,450,450);
    strokeWeight(5);
    push();
      if (mouseIsPressed) {
        fill(black);
        noStroke();
        ellipse(0,0,400,400);
        angle_pattern3 = Math.atan2(mouseY-350, mouseX-350);
      }
      angle_pattern3 += 0.1;
      rotate(angle_pattern3);
      stamp(-50, -50, purple, gold, purple, gold, purple);
    pop();
  }
}

function circleClusterV1() {
  scale(0.3);
  rotate_pattern1 += angle_inc_pattern1;
  rotate(radians(rotate_pattern1));
  for(let j=0; j<8; j++) {
    rotate(radians(45));
    stamp(x_pattern1, y_pattern1, purple, gold, purple, gold, purple);
  }
}

function stamp(x, y, a, b, c, d, e) {
  noFill();
  strokeWeight(3);
  stroke(a);
  triangle(50+x, 100+y, 50+x, 150+y, 150+x, 125+y);
  triangle(70+x, 80+y, 140+x, 100+y, 140+x, 60+y);
  stroke(b);
  triangle(110+x, 155+y, 150+x, 145+y, 150+x, 165+y);
  strokeCap(ROUND);
  strokeWeight(3);
  line(85+x, 95+y, 120+x, 105+y);
  line(150+x, 65+y, 150+x, 90+y);
  line(80+x, 62+y, 125+x, 50+y);
  noStroke();
  fill(c);
  triangle(190+x, 65+y, 170+x, 105+y, 210+x, 105+y);
  fill(d);
  triangle(170+x, 105+y, 210+x, 105+y, 190+x, 145+y);
  fill(0);
  triangle(190+x, 65+5+y, 170+5+x, 105+y, 210-5+x, 105+y);
  triangle(170+5+x, 105+y, 210-5+x, 105+y, 190+x, 145-5+y);
  stroke(e);
  line(190+x, 30+y, 190+x, 180+y);
}

function keyTyped() {
  background(0);
  if (key=="1") {
    option = 1;
  }
  else if (key=="2") {
    option = 2;
  }
  else if (key=="3") {
    option = 3;
  }
}

function shrinkGrowStamp(j,i) {
  push();
    if (scale_pattern2 <= 2.3 && dir_pattern2 == 1) {
      scale_pattern2 += 0.1;
      if (scale_pattern2 >= 2.3) {
        dir_pattern2 = 0;
      }
    }
    else if (dir_pattern2 == 0) {
      scale_pattern2 -= 0.1;
      if (scale_pattern2 == 1.5) {
        dir_pattern2 = 1;
      }
    }
    translate(j-40*scale_pattern2,i-60*scale_pattern2);
    scale(scale_pattern2);
    stamp(0, 0, gold, purple, black, black, black);
  pop();   
}