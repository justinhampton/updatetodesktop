// // // Q1 Falsy or Truthy

// // // Given two values, return the first one if it is falsy, otherwise return the second one.

// // function falsyOrTruthy(elem1, elem2) {
// //     return (!elem1) ? elem1 : elem2;
// // }

// // console.log(falsyOrTruthy(0, 5));

// // // Q2 Return the length of any given array

// // function arrLength(arr) {
// //  return arr.length;
// // }

// // console.log(arrLength([]))

// // // Q3 Get the last element of an array

// // function arrLast(arr) {
// //     return arr[arr.length - 1];
// //    }
   
// //    console.log(arrLast([1, 2, 3, 7]))

// // // Q4 Find the sum of an array

// // function arrSum(arr) {
// //     let sum = 0
// //     for (let i = 0; i < arr.length; ++i) {
// //         sum = sum + arr[i]
// //     }
// //     return sum;
// // }

// // console.log(arrSum([2, 2, 2, 5, 6]))

// // // Q5 Add up the numbers from a single number

// // // Given a number, add up all the numbers from one to the number that is given.
// // // EG An input of 4 will give you 1 + 2 + 3 + 4, which equals 10

// // function progressiveSum(num) {
// //     let progressive = 0;
// //     for (let i = 1; i <= num; ++i) {
// //         progressive = progressive + i;
// //     }
// //     return progressive;
// // }

// // console.log(progressiveSum(3))

// // // Q6 Calculate the time

// // // Given a number in seconds, return thus number in mm:ss format

// // function calcTime(seconds) {
// //     let timerMinutes = Math.floor(seconds / 60);
// //     let timerSeconds = seconds % 60;

// //     if (timerMinutes.toString().length === 1) {
// //         timerMinutes = '0' + timerMinutes
// //     }

// //     return timerMinutes + ':' + timerSeconds;
// // }

// // console.log(calcTime(500))

// // Q7 Find the largest number

// // Given an array of numbers, return the largest number of that array

// function getMax(arr){
//     let max = arr[0]
//     for (let i = 1; i < arr.length; ++i) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max;
// }

// console.log(getMax([1000, 3, 500]))

// // Q8 Reverse a string

// // Given a string return the reversed string

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('abc'))

// // Q9 Turn every element in an array into 0

// // Given an array of elements, return the same length array filled with 0's

// // function convertToZeros(arr) {
// //     let newArr = [];
// //     for (let i = 0; i < arr.length; ++i) {
// //         newArr[i] = 0
// //     }
// //     return newArr;    
// // }

// // function convertToZeros(arr) {
// //     return new Array(arr.length).fill(0);
// // }

// // function convertToZeros(arr) {
// //     return new Array(arr.length).fill(0);
// // }

// function convertToZeros(arr) {
//     return arr.map(elem => 0);
// }

// console.log(convertToZeros([5, 100, 2, 1, 5]));

// // Q10 Filter out alll the apples

// // Given an array of fruits, if it is an apple remove it from the array

// // function removeApples(arr) {
// //     let noApples = []
// //     for (let i = 0; i < arr.length; ++i) {
// //         if (arr[i] !== 'Apple') {
// //             noApples.push(arr[i])
// //         } 
// //     }
// //     return noApples;
// // }

// function removeApples(arr) {
//     return arr.filter(elem => elem !== 'Apple')
// }

// console.log(removeApples(['Banana', 'Apple', 'Orange']))

// // Q11 Filter out all the falsy values

// // Given an array of values, filter out all the falsy values and only return the truthy values

// // function filterOutFalsy(arr) {
// //     let truthyArr = [];
// //     for (let i = 0; i < arr.length; ++1) {
// //         if (!!arr[i] === true) {
// //             truthyArr.push(arr[i]);
// //         }
// //     }
// //     return truthyArr;
// // }

// function filterOutFalsy(arr) {
//     return arr.filter(elem => !!elem === true)
// }

// console.log(filterOutFalsy(['banana', 'apple', 'orange', false, 0]))

// // Q12 Truth to true, falsy to false

// // Given an array of truthy and falsy values, return the same array of elements into its boolean value

// function convertToBoolean(arr) {
//     return arr.map(elem => !!elem )
// }

// console.log(convertToBoolean(['banana', 'apple', 'orange', false, 0, 1]))

//Q1

function falsyOrTruthy(elem1, elem2) {
    return !elem1 ? elem1 : elem2;
}

console.log(falsyOrTruthy(200, 500))

//q2

function arrLength(arr) {
    return arr.length
}
console.log(arrLength([1, 2, 3, 6, 7]))

function lastElem(arr) {
    return (arr[arr.length - 1])
}

console.log(lastElem([3, 2, 0, 6, 2, 4 ]))

function arrSum(arr) {
    for (let i = 0; i <= arr.length; ++i);
    return arr[]
}

console.log(arrSum([2, 2, 2]))