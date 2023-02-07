// // Biggie Size
// // Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

var arr = [-1, 3, 5, -5];

function makeItBig(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = "big";
    }
  }
  return arr;
}

console.log(makeItBig(arr));

// Print Low, Return High
// Create a function that takes an array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr) {
  var low = arr[0];
  var high = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < low) {
      low = arr[i];
    }
    if (arr[i] > high) {
      high = arr[i];
    }
  }
  console.log(low);
  return high;
}

console.log(printLowReturnHigh([1, 2, 3, 4, 5]));

// Print One, Return Another
// Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return the first odd value in the array.

function printOneReturnAnother(arr) {
  console.log(arr[arr.length - 2]);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      return arr[i];
    }
  }
}

console.log(printOneReturnAnother([1, 2, 3, 4, 5]));

// Double Vision
// Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function double(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}

console.log(double([1, 2, 3]));

// Count Positives
// Given an array of numbers, create a function to replace the last value with the number of positive values found in the array. Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  arr[arr.length - 1] = count;
  return arr;
}

console.log(countPositives([-1, 1, 1, 1]));

// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!". Every time the array has three evens in a row, print "Even more so!"

function evenOdd(arr) {
  let oddCount = 0;
  let evenCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      oddCount = 0;
      evenCount++;
      if (evenCount === 3) {
        console.log("Even more so!");
        evenCount = 0;
      }
    } else {
      evenCount = 0;
      oddCount++;
      if (oddCount === 3) {
        console.log("That's odd!");
        oddCount = 0;
      }
    }
  }
}

// Increment the Seconds
// Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.

function incrementSeconds(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      arr[i]++;
    }
    console.log(arr[i]);
  }
  return arr;
}

console.log(incrementSeconds([1, 2, 3, 4, 5]));

// Previous Lengths
// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.

function previousLengths(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i - 1].length;
  }
  return arr;
}

console.log(previousLengths(["hello", "dojo", "awesome"]));
console.log(previousLengths(["hello", "dojo", "awesome", "coding"]));
console.log(previousLengths(["hello", "dojo", "awesome", "coding", "is"]));
console.log(previousLengths(["hello", "dojo", "awesome", "coding", "is", "fun"]));
console.log(previousLengths(["hello", "dojo", "awesome", "coding", "is", "fun", "and"]));
console.log(previousLengths(["hello", "dojo", "awesome", "coding", "is", "fun", "and", "challenging"]));

// Add Seven to Most
// Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

function addSevenToMost(arr) {
  var newArr = [];
  for (var i = 1; i < arr.length; i++) {
    newArr.push(arr[i] + 7);
  }
  return newArr;
}

console.log(addSevenToMost([1, 2, 3, 4, 5]));

// Reverse Array
// Given an array, write a function that reverses values, in-place. Example: reverse([3,1,6,4,2]) returns the same array, containing [2,4,6,1,3].

function reverse(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(reverse([3, 1, 6, 4, 2]));

// Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function negative(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i] * -1);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(negative([1, -3, 5]));

// Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.

function alwaysHungry(arr) {
  let foundFood = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "food") {
      console.log("yummy");
      foundFood = true;
    }
  }
  if (!foundFood) {
    console.log("I'm hungry");
  }
}

alwaysHungry(["food", "food", "object", "food", "food"]);

// Swap Toward the Center
// Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]. Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function swapTowardCenter(arr) {
  for (let i = 0; i < arr.length / 2; i += 2) {
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
  }
  return arr;
}

console.log(swapTowardCenter([true, 42, "Ada", 2, "pizza"]));
console.log(swapTowardCenter([1, 2, 3, 4, 5, 6]));

// Scale the Array
// Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr. For example, scaleArray([1,2,3], 3) should return [3,6,9]..

function scaleArray(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= num;
  }
  return arr;
}

console.log(scaleArray([1, 2, 3], 3));




