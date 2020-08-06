// Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

// There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

// Write your code here
let reverseArray = (arr) => {
  let newArray = []
  for (let i = arr.length - 1; i >=0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

// The greeting should take the following format:
// “Oh powerful [stringElement], we humans offer our unconditional surrender!”

function greetAliens(arr) {
  for (let i = 0; i < arr.length; i++) {
        console.log('Oh powerful ' + arr[i] + ', we humans offer our unconditional surrender!');
  }
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

// Alternate solutions:

// Using string interpolation
const greetAliens = arr
for (let i = 0; i<arr.length; i++){
    console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
}

// As a function declaration:
function greetAliens(arr) {
for (let i = 0; i<arr.length; i++){
    console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////


// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

const convertToBaby = arr => {
  let babyArray = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    babyArray.push('baby ' + arr[i]);
  }
  return babyArray;
}

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));

// As a function declaration:
function convertToBaby(arr) {
  const babyArray = [];
  for (let i = 0; i < arr.length; i++) {
        babyArray.push('baby ' + arr[i]);
  }
  return babyArray
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

// We wrote a function, smallestPowerOfTwo(), which takes in an array.

// Within our function, we create a new array results. We loop through the argument array and push in the smallest power of two which is greater than the current element.

// It’s not doing what we want. Can you fix our code, please?

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];
    let j = 1;
    while (j < number) {
      j = j * 2;
    }
    results.push(j);
  }
  return results
}

console.log(smallestPowerOfTwo(numbers));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////