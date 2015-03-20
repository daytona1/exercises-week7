/**
 * Here's where our JavaScript goes
 */

// define variables here
// var varName = "";

var person = {};

var mySketch = new p5(function(sketch){

  sketch.setup = function() {
    // get our name
    person.name = prompt("What's your name?");
    // age
    person.age = prompt("What's your age?");
    // height
    person.height = prompt("What's your height?");

    // form everything into a sentence
    var sentence = person.name + " is " + person.age + " years old and " + person.height + " tall.";

    // output the sentence
    console.log(sentence);
  }

  sketch.draw = function() {

  }
});
