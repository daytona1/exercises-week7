/**
 * Here's where our JavaScript goes
 */

// define variables here

// add a variable to store our current person.
var thePerson;

// pasting in out functions from exercise 2 below
// so that we can re-use them!

/**
 * Function to create a person object based on prompted input
 */
function createPerson() {
  var person = {};

  // get our name
  person.name = prompt("What's your name?");
  // age. we're using `parseInt` to make sure it's a number, not a string
  person.age = parseInt(prompt("What's your age?"));
  // height
  person.height = prompt("What's your height?");

  // output our person object
  return person;
}

/**
 * Function to take a person object and form the attributes into a sentence
 * Our one paramater is a `person` object
 */
function personSentence(person) {

  // form everything into a sentence
  // should print "[name] is [age] years old and [height] tall."
  var sentence = person.name + " is " + person.age + " years old and " + person.height + " tall.";

  // output the sentence
  return sentence;
}

// now back to our sketch

var mySketch = new p5(function(sketch){

  sketch.setup = function() {

    // use our custom function to gather input and create a person object
    thePerson = createPerson();

    // we are creating a p5 canvas that takes up the entire width/height
    // of the screen. again, remember that all of our p5 functions are
    // under the `sketch` object now!
    sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
  }

  sketch.draw = function() {
    // use the p5 color functon to create colors based on RGB values
    // blue for the background
    var bgColor = sketch.color(0,0,255);
    // yellow for the foreground
    var textColor = sketch.color(255,255,0);

    // now our circle will always wrap around to the beginning, pac-man style.
    var textX = sketch.frameCount % sketch.windowWidth;

    // setting the `y` value is much simpler. we are just using half of our
    // canvas height
    var textY = (sketch.height/2);

    // we are using the same method to alter size before, but now using
    // a variable called `fontSize` to store the font size. we are also
    var fontSize = (50*sketch.sin(sketch.frameCount/50)) + 50;

    // set the background of our entire canvas using our color `bgColor`
    sketch.background(bgColor);

    // set the fill color before we draw our circle
    sketch.fill(textColor);

    // we don't want an ugly stroke around our text
    // http://p5js.org/reference/#/p5/noStroke
    sketch.noStroke();

    // set the size of our text using the `textSize` function
    // http://p5js.org/reference/#/p5/textSize
    sketch.textSize(fontSize);

    // use the `text` function to actually draw the text, using our custom
    // `personSentence` function to output as a sentence
    sketch.text(personSentence(thePerson), textX, textY);
  }

  /**
   * This is p5's built in `mousePressed` function. It will fire every time
   * the mouse is pressed within the canvas.
   * http://p5js.org/reference/#/p5/mousePressed
   */
  sketch.mousePressed = function() {
    // OPTIONAL: output to the console when mouse is pressed
    console.log("Mouse pressed");

    // create a new person, prompting user for input, and overwrite our existing
    // variable `thePerson`
    thePerson = createPerson();
  }

  /**
   * This is p5's built-in `keyPressed` function. Similar to `mousePressed`,
   * it will fire every time a key is pressed.
   */
  sketch.keyPressed = function() {
    // OPTIONAL: output to the console when key is pressed
    // we can also get the ASCII code of the key pressed
    // using `keyCode`:
    // http://p5js.org/reference/#/p5/keyCode
    console.log("Key pressed! "+sketch.keyCode);

    // if the up or down arrow is pressed, change the age accordingly
    if(sketch.keyCode == sketch.UP_ARROW) {
      thePerson.age = thePerson.age + 1;
    } else if (sketch.keyCode == sketch.DOWN_ARROW) {
      thePerson.age = thePerson.age - 1;
    }
  }
});
