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

// Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

// The .forEach() function should apply politelyDecline() directly; it should NOT merely receive argument function that uses politelyDecline().

// You can test your function when you’re ready by passing in the veggies array or by making your own array!

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:

const declineEverything = (arr) => {
  arr.forEach(politelyDecline);
}

declineEverything(veggies);

// Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'

// You can use any technique you want to accomplish this task. You can test your function when you’re ready by passing in the veggies array or by making your own array!

const grudginglyAccept = (veg) => {
  console.log('Ok, I guess I will eat some ' + veg + '.');
}

const acceptEverything = (arr) => {
  arr.forEach(grudginglyAccept);
}

acceptEverything(veggies);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

// You can test your function when you’re ready by passing in the numbers array or by making your own array!

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num;

const squareNums = arr => arr.map(toSquare);

// Using an anonymous function:
const squareNums = arr => arr.map(e => e * e)

// As a function declaration plus using our named function:
function squareNums(arr) {
    return arr.map(toSquare)
};

//////////////////////////////////////////////////////////////////

// Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

// You can use any technique you want to accomplish this task.

// You can test your function when you’re ready by passing in the greetings array or by making your own array!

const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');


// As a function declaration AND using a loop:
function shoutGreetings(arr) {
    let shoutArray = []
    for(let i = 0; i<arr.length; i++){
        shoutArray.push(arr[i].toUpperCase() + '!')
    }
    return shoutArray
};

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))

////////////////////////////////////////

const sortYears = arr => arr.sort((x, y) => y - x);


// As a function declaration AND using a named function:
function sortYears(arr) {
  const checkYears = (year1, year2) => year2 - year1
  return arr.sort(checkYears)
}

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))

/////////////////////////////////////////////////////////

// Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))

function justCoolStuff(firstArray, secondArray) {
      function isInSecondArray(item){
            for(let i = 0; i<secondArray.length; i++){
                  if (secondArray[i] === item){
                        return true
                  }
            }
            return false 
      }
      return firstArray.filter(isInSecondArray)
}

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))

/////////////////////////////////////////////////

const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');

///alternate

function isTheDinnerVegan(arr) {
  const isVegan = (food) => {
        if (food.source === 'plant') {
              return true;
        }
        return false;
  }
  for(let i = 0; i<arr.length; i++){
        if (!isVegan(arr[i])){
              return false 
        }
  }
  return true
}

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))

/////////////////////////

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)

// As a function declaration AND using a named function:
function sortSpeciesByTeeth(arr) {
      const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
      return arr.sort(compareTeeth)
}

console.log(sortSpeciesByTeeth(speciesArray))

////////////////////////////////////////////////////////

const findMyKeys = arr => arr.findIndex(item => item === 'keys')

/*
// Alternate solution:
// As a function declaration using a loop:
function findMyKeys(arr) {
      let index = -1;
      for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'keys') {
                  index = i
                  break
            }
      }
      return index
}
*/
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))  

//////////////////////////////////////////

// Final solution:
const dogFactory = (name, breed, weight) => {
  return {
      _name: name,
      _breed: breed,
      _weight: weight,
      get name() {
          return this._name;
      },
      set name(newName) {
          this._name = newName;
      },
      get breed() {
          return this._breed;
      },
      set breed(newBreed) {
          this._breed = newBreed;
      },
      get weight() {
          return this._weight;
      },
      set weight(newWeight) {
          this._weight = newWeight;
      },
      bark() {
          return 'ruff! ruff!'
      },
      eatTooManyTreats() {
          this._weight++
      }
  }
}

/*
// Solution to checkpoint 1:
const dogFactory = (name, breed, weight) => {
    return {
          name: name,
          breed: breed,
          weight: weight
    }
}

// Solution to checkpoint 2:
const dogFactory = (name, breed, weight) => {
    return {
          _name: name,
          _breed: breed,
          _weight: weight,
          get name() {
                return this._name;
          },
          set name(newName) {
                this._name = newName;
          },
          get breed() {
                return this._breed;
          },
          set breed(newBreed) {
                this._breed = newBreed;
          },
          get weight() {
                return this._weight;
          },
          set weight(newWeight) {
                this._weight = newWeight;
          }
    }
}

*/