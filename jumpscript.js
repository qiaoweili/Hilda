let value=0;
function setup(){
  let cnv = createCanvas(100, 300);
  cnv.parent('myContainer');
  background(255,value,0);

  // rect(200,100,50,150,1,3);
}
let h = 0;
let a=0
let yspeed = 5.0;
// let ydirection = 1;
function draw() {
  background(255,0,0);
  fill(255,255,0);
  noStroke();
  rect(0,height-60,width,20);

  if (keyIsPressed === true) {

    if (key === 'j') {
      console.log("j pressed");
      fill(0);
      rect(0, height-h, width, h);
      h+=yspeed;
      console.log("h",h);
      if (h>=height || h<=0) {
        yspeed *= -1;
        console.log("h",h);
      }
    }


  }else if (keyIsPressed === false && (40<=h) && (h<=60)) {
      background(255,0,255);

  }//keyIsPressed==true


}//draw

// function keyReleased(){
//     console.log("stop");
//     console.log("h",h);
//     if (40<= h<= 60) {
//       // value=255;
//       background(255,255,0);
//
//     }
//
// }
