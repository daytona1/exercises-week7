/**
 * Here's where our JavaScript goes
 */

// define variables here
// var varName = "";

var people = [];
var maxPeople = 3;

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

    for(var i = 0; i < maxPeople; i++) {
      people[i] = createPerson();
    }

    // this is where we can modify the data


    for(var i = 0; i < maxPeople; i++) {
      sketch.createDiv(personSentence(people[i]))
    }
  }

  sketch.draw = function() {

  }
});
