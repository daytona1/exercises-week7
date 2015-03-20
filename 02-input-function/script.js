/**
 * Here's where our JavaScript goes
 */

// define variables here

// now we are using an array to store our list of people
var people = [];

// setting a limit to how many people we will include
var maxPeople = 3;

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


var mySketch = new p5(function(sketch){

  sketch.setup = function() {

    // we are using a for loop to only run `maxPeople` number of times (3)
    // http://www.w3schools.com/js/js_loop_for.asp
    for(var i = 0; i < maxPeople; i++) {

      // call the `createPerson` function and add a new person to the
      // array at index `i`
      people[i] = createPerson();
    }

    // now we have an array of person objects, our data source. if we want to we
    // can modify the data here, or use it to make further calculateions.
    // for instance, we could calculate the average age and height for
    // all of our people

    // again, using a for loop
    for(var i = 0; i < maxPeople; i++) {

      // now we are using our custom `personSentence` function to create our
      // sentence with a person at the given array index (`i`), then outputting
      // it using the p5 `createDiv` function.
      //
      // REMEMBER! Now we are putting `sketch.` in front of all p5 functions
      // so that they are namespaced and readable
      //
      // A step-by-step way to write the same thing would be:
      //
      // var person = people[i];
      // var sentence = personSentence(person);
      // sketch.createDiv(sentence);
      //
      sketch.createDiv(personSentence(people[i]));
    }
  }

  sketch.draw = function() {
    // we're still doing everythin in the `setup` function, since we're not
    // drawing continually but just doing it once
  }
});
