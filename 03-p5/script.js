/**
 * Here's where our JavaScript goes
 */

// define variables here
// var varName = "";
var maxFrames = 500;


var mySketch = new p5(function(sketch){

  sketch.setup = function() {
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
  }

  sketch.draw = function() {
    var bgColor = sketch.color(0,0,255);
    var circleColor = sketch.color(255,255,0);
    var circleX = sketch.frameCount % sketch.windowWidth;
    var circleY = (sketch.height/2);
    var circleWidth = 50*sketch.sin(sketch.frameCount/50);
    var circleHeight = 50*sketch.tan(sketch.frameCount/50);

    sketch.background(bgColor);

    sketch.fill(circleColor);


    console.log(circleX, circleY);
    sketch.ellipse(circleX, circleY, circleWidth, circleHeight);
  }
});
