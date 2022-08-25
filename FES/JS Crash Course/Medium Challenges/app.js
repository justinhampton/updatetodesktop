// // Q1 Falsy or Truthy

// // Given two values, return the first one if it is falsy, otherwise return the second one.

// function falsyOrTruthy(elem1, elem2) {
//     return (!elem1) ? elem1 : elem2;
// }

// console.log(falsyOrTruthy(0, 5));

// // Q2 Return the length of any given array

// function arrLength(arr) {
//  return arr.length;
// }

// console.log(arrLength([]))

// // Q3 Get the last element of an array

// function arrLast(arr) {
//     return arr[arr.length - 1];
//    }
   
//    console.log(arrLast([1, 2, 3, 7]))

// // Q4 Find the sum of an array

// function arrSum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; ++i) {
//         sum = sum + arr[i]
//     }
//     return sum;
// }

// console.log(arrSum([2, 2, 2, 5, 6]))

// // Q5 Add up the numbers from a single number

// // Given a number, add up all the numbers from one to the number that is given.
// // EG An input of 4 will give you 1 + 2 + 3 + 4, which equals 10

// function progressiveSum(num) {
//     let progressive = 0;
//     for (let i = 1; i <= num; ++i) {
//         progressive = progressive + i;
//     }
//     return progressive;
// }

// console.log(progressiveSum(3))

// // Q6 Calculate the time

// // Given a number in seconds, return thus number in mm:ss format

// function calcTime(seconds) {
//     let timerMinutes = Math.floor(seconds / 60);
//     let timerSeconds = seconds % 60;

//     if (timerMinutes.toString().length === 1) {
//         timerMinutes = '0' + timerMinutes
//     }

//     return timerMinutes + ':' + timerSeconds;
// }

// console.log(calcTime(500))

// Q7 Find the largest number

// Given an array of numbers, return the largest number of that array

function getMax(arr){
    let max = arr[0]
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(getMax([1000, 3, 500]))

// Q8 Reverse a string

// Given a string return the reversed string

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('abc'))