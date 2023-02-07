// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function countdown(num) {
    var arr = [];
    for (var i = num; i >= 0; i--) {
        arr.push(i);
    }
    return arr;
}

console.log(countdown(5));

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.

function printAndReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}

console.log(printAndReturn([1, 2]));

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(arr) {
    return arr[0] + arr.length;
}

console.log(firstPlusLength([1, 2, 3, 4, 5]));

// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

function valuesGreaterThanSecond(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            console.log(arr[i]);
            count++;
        }
    }
    return count;
}

console.log(valuesGreaterThanSecond([1, 3, 5, 7, 9, 13]));

// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

function valuesGreaterThanSecondGeneralized(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(valuesGreaterThanSecondGeneralized([1, 3, 5, 7, 9, 13]));

// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

function thisLengthThatValue(num1, num2) {
    var arr = [];
    for (var i = 0; i < num1; i++) {
        arr.push(num2);
    }
    if (num1 == num2) {
        console.log("Jinx!");
    }
    return arr;
}

console.log(thisLengthThatValue(3, 3));

// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

function fitTheFirstValue(arr) {
    if (arr[0] > arr.length) {
        console.log("Too big!");
    } else if (arr[0] < arr.length) {
        console.log("Too small!");
    } else {
        console.log("Just right!");
    }
}

fitTheFirstValue([1, 2, 3, 4, 5]);
fitTheFirstValue([5, 2, 3, 4, 5]);
fitTheFirstValue([3, 2, 3, 4, 5]);

// Fahrenheit to Celsius

function fahrenheitToCelsius(fDegrees) {
    return (fDegrees - 32) * 5 / 9;
}

console.log(fahrenheitToCelsius(100));

// Celsius to Fahrenheit

function celsiusToFahrenheit(cDegrees) {
    return cDegrees * 9 / 5 + 32;
}

console.log(celsiusToFahrenheit(100));

// (Optional): Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.

function fahrenheitToCelsius(fDegrees) {
    return (fDegrees - 32) * 5 / 9;
}

function celsiusToFahrenheit(cDegrees) {
    return cDegrees * 9 / 5 + 32;
}

for (var i = 200; i >= 0; i--) {
    if (celsiusToFahrenheit(i) == i) {
        console.log(i);
    }
}
