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