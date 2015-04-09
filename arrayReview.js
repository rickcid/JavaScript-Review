var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
var last = function(array) {
  return array[array.length - 1];
};
 
alert(last(threeItems));

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

//MY CODE //
var remove_odd_numbers = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if((arr[i] % 2) !== 0) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

alert(remove_odd_numbers(evenArray));

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. 
//Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. 
//If it is, alert true, if it's not, alert false

var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
};
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var random_number = function(arr) {
  var random = getRandomArbitrary();
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === random) {
      return (random + " true"); 
    }
  }
   return (random + " false ");
};

random_number(randomArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, 
//first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

//MY CODE//
var copyArray = function(array) {
  second = [];
  for (var i = 0; i < array.length; i++) {
    second.push(array[i]);
  }
  second.push(6, 7);
  return second;
}
copyArray(first);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is jljlkdjljj the best"

//MY CODE //
var longest = function(text) {
  var myArray = [];
  myArray = text.split(' ');
  
  var stringHolder = '';

  for(var i = 0; i < myArray.length; i++) {
    if (myArray[i].length > stringHolder.length) {
      stringHolder = myArray[i];
    }
  }
  return stringHolder;
};

longest(sentence);
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

//MY CODE//
var myPoem = 'What is a jQuery but a misunderstood object?'

var capitalize = function(string) {
  var myArray = [];
  myArray = string.split(' ');
    
  for (var i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1).toLowerCase();   
  }
  return myArray.join(' ');
}

capitalize(myPoem);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
//MY CODE//
var vowelCounter = function(string) {
  var counter = 0;
  var stringArray = [];

  stringArray = string.split('');
  
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === "a" || stringArray[i] === "e" || stringArray[i] === "i" || stringArray[i] === "o" || stringArray[i] === "u" || stringArray[i] === "y"){
      counter = counter + 1;
    }
  }
  return counter;
};

vowelCounter(theOdyssey);

//OR//
//MY CODE/// Alternative Solution using match//

var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

var vowelCounter = function(string) {
  var stringArray = string.match(/a|e|i|o|u|y/ig);
  return stringArray.length
};

vowelCounter(theOdyssey);








