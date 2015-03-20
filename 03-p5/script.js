/**
 * Here's where our JavaScript goes
 */


var mySketch = new p5(function(sketch){

  sketch.setup = function() {

      // we are creating a p5 canvas that takes up the entire width/height
      // of the screen. again, remember that all of our p5 functions are
      // under the `sketch` object now!
      //
      // createCanvas: http://p5js.org/reference/#/p5/createCanvas
      // windowWidth: http://p5js.org/reference/#/p5/windowWidth
      // windowHeight: http://p5js.org/reference/#/p5/windowHeight
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);

      // OPTIONAL: output information about our canvas size to the console
      console.log("Created canvas "+sketch.windowWidth+" wide and "+sketch.windowHeight+ " tall");
  }

  sketch.draw = function() {
    // now since we're animating we are using the `draw` function!

    // use the p5 color functon to create colors based on RGB values
    // http://p5js.org/reference/#/p5/color
    // blue for the background
    var bgColor = sketch.color(0,0,255);
    // yellow for the foreground
    var circleColor = sketch.color(255,255,0);

    // we're simply setting the circle `x` using our frame count. this works
    // until the circle leaves the screen, at which point it just keeps moving
    // off forever
    // http://p5js.org/reference/#/p5/frameCount
    var circleX = sketch.frameCount;

    // setting the `y` value is much simpler. we are just using half of our
    // canvas height
    var circleY = (sketch.height/2);

    // setting the height and width of our circle
    var circleWidth = 50;
    var circleHeight = 50;

    // set the background of our entire canvas using our color `bgColor`
    // http://p5js.org/reference/#/p5/background
    sketch.background(bgColor);

    // set the fill color before we draw our circle
    sketch.fill(circleColor);

    // OPTIONAL: output some information on our circle position to the console
    console.log("Circle X is "+circleX);
    console.log("Circle Y is "+circleY);

    // draw the circle using the p5 `ellipse` function
    // http://p5js.org/reference/#/p5/ellipse
    sketch.ellipse(circleX, circleY, circleWidth, circleHeight);


  }
});
