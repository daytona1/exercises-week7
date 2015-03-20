/**
 * Here's where our JavaScript goes
 */

// define variables here


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

    // use the p5 color functon to create colors based on RGB values
    // http://p5js.org/reference/#/p5/color
    // blue for the background
    var bgColor = sketch.color(0,0,255);
    // yellow for the foreground
    var circleColor = sketch.color(255,255,0);

    // now our circle will always wrap around to the beginning, pac-man style.
    //
    // this is a bit confusing at first, but remember that the `%` operator
    // will always return the REMAINDER of a division operation
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_(.25)
    //
    // because the remainder can never be greater than the devisor (the second
    // number in the division expression), our `x` value will never be greater
    // than the window width
    var circleX = sketch.frameCount % sketch.windowWidth;
    // OPTIONAL: output information about the circleX `%` operation
    console.log(sketch.frameCount+" % "+sketch.windowWidth+" = "+circleX);

    // setting the `y` value is much simpler. we are just using half of our
    // canvas height
    var circleY = (sketch.height/2);

    // now we're making things more interesting by using `sin` and `cos` to change
    // our circle width based on the frame count. running `sin` or `cos` on any number
    // will return a value between -1 and 1, so as our frame count changes
    // the value will change to create a sine wave.
    // http://p5js.org/reference/#/p5/sin
    //
    // we are reducing our frame count by a few decimal point so that
    // the output from our trig functions (`sin` or `cos`) will change
    // more slowly (try messing with this number to see the effect)
    var frameCountDecimal = sketch.frameCount * 0.01;
    // for both of these, we're getting our value between 1 and -1 by
    // running the `sin` trig function on our decimal frame count,
    // then multiplying it by our original width/height (50)
    var circleWidth = 50*sketch.sin(frameCountDecimal);
    var circleHeight = 50*sketch.sin(frameCountDecimal);
    // OPTIONAL: output elements from our trig operations to see what's
    // going on here
    console.log("Frame "+sketch.frameCount+" reduced to "+frameCountDecimal);
    console.log("sin of "+frameCountDecimal+" = "+sketch.sin(frameCountDecimal));
    console.log("50 x "+sketch.sin(frameCountDecimal)+" = "+circleWidth);

    // set the background of our entire canvas using our color `bgColor`
    // http://p5js.org/reference/#/p5/background
    sketch.background(bgColor);

    // set the fill color before we draw our circle
    sketch.fill(circleColor);

    // OPTIONAL: output some information on our circle position to the console
    console.log("Circle width is "+circleWidth);
    console.log("Circle height is "+circleHeight);
    console.log("Circle X is "+circleX);
    console.log("Circle Y is "+circleY);

    // draw the circle using the p5 `ellipse` function
    // http://p5js.org/reference/#/p5/ellipse
    sketch.ellipse(circleX, circleY, circleWidth, circleHeight)

  }
});
