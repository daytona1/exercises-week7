/**
 * Here's where our JavaScript goes
 */

// define variables here
// var varName = "";
var maxFrames = 500;
var thePerson;

/**
 * Create a person object based on prompted input
 */
function createPerson() {
  var person = {};

  // get our name
  person.name = prompt("What's your name?");
  // age
  person.age = prompt("What's your age?");
  // height
  person.height = prompt("What's your height?");

  return person;
}

function personSentence(person) {
  // form everything into a sentence
  var sentence = person.name + " is " + person.age + " years old and " + person.height + " tall.";

  return sentence;
}

var mySketch = new p5(function(sketch){

  sketch.setup = function() {
    thePerson = createPerson();
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
  }

  sketch.draw = function() {
    var bgColor = sketch.color(0,0,255);
    var circleColor = sketch.color(255,255,0);
    var circleX = sketch.frameCount % sketch.windowWidth;
    var circleY = (sketch.height/2);
    var circleWidth = 50*sketch.sin(sketch.frameCount/50);
    var circleHeight = 50*sketch.tan(sketch.frameCount/50);

    var textSize = sketch.floor(50*sketch.sin(sketch.frameCount/50)+50);

    sketch.background(bgColor);

    sketch.fill(circleColor);


    console.log(textSize);

    sketch.noStroke();
    sketch.textSize(textSize);
    sketch.text(personSentence(thePerson), circleX, circleY);

    // sketch.ellipse(circleX, circleY, circleWidth, circleHeight);
  }


  sketch.mousePressed = function() {
    console.log("Mouse pressed");
    thePerson = createPerson();
  }


  sketch.keyPressed = function() {
    console.log("Key pressed");
    thePerson.age = parseInt(thePerson.age) + 1;
  }
});
