/**
 * Here's where our JavaScript goes
 */

// define variables here

// we're using the `person` object to store info about our person
var person = {};

var mySketch = new p5(function(sketch){

  sketch.setup = function() {

    // using the JavaScript `prompt` function here to get input
    // http://www.w3schools.com/jsref/met_win_prompt.asp

    // get our name
    person.name = prompt("What's your name?");
    // age
    person.age = prompt("What's your age?");
    // height
    person.height = prompt("What's your height?");

    // form everything into a sentence
    // should print "[name] is [age] years old and [height] tall."
    var sentence = person.name + " is " + person.age + " years old and " + person.height + " tall.";

    // output the sentence
    console.log(sentence);
  }

  sketch.draw = function() {
    // right now we're not animating, so leaving this blank
  }
});
