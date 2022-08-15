// Question 1 Return the Sum of Two Numbers

// Create a function that takes two arguments as functions and return their sum.

function addition(num1, num2) {
    return num1 + num2
}

console.log(addition(3, 5))

// Question 2 Convert Hours into Seconds

// Create a function that converts hours into seconds

function hoursIntoSeconds(hour) {
    return hour * 3600;
}

console.log(hoursIntoSeconds(2))

// Question 3 Calculate the Perimeter of a Rectange

// Create a function that takes length and width of a rectange and return it's perimeter.

function calcPerimeter(length, width) {
    return length * 2 + width * 2;
}

console.log(calcPerimeter(6, 7))

// Question 4 Calculate the Area of a Triangle

// Write a function that takes the base and height of a triangle and return its area

function calcTriangleArea(base, height) {
    return 0.5 * base * height;
}

console.log(calcTriangleArea(20,20))

// Question 5 Extend a String

// Write a function that accepts a string and adds 'Frontend' onto the end of it

function appendFrontend (string) {
    return string + 'Frontend'
}

console.log(appendFrontend('Apple'))

// Question 6 Greater than 100?

// Given two numbers, return true if the sum of both numbers is greater than 100. Otherwise, return false.

function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100
}

console.log(sumGreaterThan100(50, 51))

// Question 7 Less than or Equal to Zero?

// Write a function that accepts a number and returns true if it is less than or equal to zero, otherwise returns false.

function lessThanOrEqualToZero(num) {
    return num <= 0
}

console.log(lessThanOrEqualToZero(-2))

// Question 8 Opposite Boolean

// Given a boolean (true or false), return the opposite boolean

function oppositeBoolean(bool) {
    return !bool;
}

console.log(oppositeBoolean(true))

// Question 9 Is not the number 0

// Given Any element, return true if it is not the number 0

function isNotZero(num) {
 return num !== 0
}

console.log(isNotZero(1))

// Question 10 Calculate the remainder

// Given two numbers, return their remainder when divided by eachother

function calcRemainder(num1, num2) {
    return num1 % num2
}

console.log(calcRemainder(9, 8))

// Question 11 Is the number odd?

// Guveb two numbers, return true if the number is odd

function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(1))