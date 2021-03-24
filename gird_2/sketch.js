let w = 200;
let count = 2;
let grid = 20;
let x, y, z;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // let mX = map(mouseX, 
  
  noFill();
  stroke(255);
  strokeWeight(1);
  smooth();
}

function draw() {
  background(0);
  
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // mobile
    // let mX = map(x, -5, 5, -20, 20);
    // let mY = map(y, -5, 5, -20, 20);
    // let mX = map(mouseX, 0, width, width/100, -width/100);
    // let mY = map(mouseY, 0, width, height/100, -height/100);
    camera(mX,mY,500, 0,0,0,0,1,0);
    console.log(x);
    // camera(x,y,500, 0,0,0,0,1,0);
  } else{
    // desktop
    let mX = map(mouseX, 0, width, width/100, -width/100);
    let mY = map(mouseY, 0, width, height/100, -height/100);
    camera(mX,mY,500, 0,0,0,0,1,0);
    console.log("h0");
  }

  // // x y z
  // beginShape(LINES);
  // vertex(0, 0);
  // vertex(100, 0,0);
  // vertex(0, 0,0);
  // vertex(0, 100,0);
  // vertex(0,0,0);
  // vertex(0,0,100);
  // endShape();
  
  push();
  for (let i = 0; i <= 200/count; i += count){
    one(count * i);
  }
  for (let i = 0; i <= 600/count; i += count * 2){
    two(count * i);
    three(count *i);
  }
  pop();
  rotate(PI/2)
  push();
  for (let i = 0; i <= 200/count; i += count){
    one(count * i);
  }
  for (let i = 0; i <= 600/count; i += count * 2){
    two(count * i);
    three(count * i);
  }
  pop();

  
  
  // box(200,200);
}

function one(offs){
  let v1 = createVector(w/2,w/2, w*3);
  let v2 = createVector(w/2,w/2, 0);
  let v3 = createVector(w/2, -w/2, 0);
  let v4 = createVector(w/2, -w/2, w*3);
  
  beginShape(LINES);
  vertex(v1.x - offs,v1.y, v1.z);
  vertex(v2.x - offs,v2.y,v2.z);
  vertex(v2.x - offs,v2.y,v2.z);
  vertex(v3.x - offs,v3.y,v3.z);
  vertex(v3.x - offs,v3.y,v3.z);
  vertex(v4.x - offs,v4.y,v4.z);
  endShape();
}
function two(offs){
  let v1 = createVector(w/2,w/2, w*3);
  let v2 = createVector(w/2,w/2, 0);
  let v3 = createVector(w/2, -w/2, 0);
  let v4 = createVector(w/2, -w/2, w*3);
  
  beginShape(LINES);
  vertex(v1.x, v1.y, v1.z - offs);
  vertex(v4.x, v4.y, v4.z - offs);
  endShape();
}
function three(offs){
  let v1 = createVector(-w/2,-w/2, 0);
  let v4 = createVector(-w/2, w/2, 0);
  
  beginShape(LINES);
  vertex(v1.x, v1.y, v1.z + offs);
  vertex(v4.x, v4.y, v4.z + offs);
  endShape();
}

// accelerometer Data
function deviceMoved() {
 mX = map(accelerationX, -90, 90, 20, 20);
 mY = map(accelerationY, -90, 90, 20, 20)
}