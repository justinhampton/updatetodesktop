// Redoing the challenges for extra practice

//q1

function addition (num1, num2){
    return num1 + num2;
}

console.log(addition(3,2))

//q2

function hoursIntoSeconds(hours){
 return hours * 3600;
}

console.log(hoursIntoSeconds(24))

//q3

function calcPerimeter(length, width){
 return (length * 2) + (width * 2);
}

console.log(calcPerimeter(6,7))

//q4

function calcTriangleArea(base, height){
    return 0.5 * base * height;
}

console.log(calcTriangleArea(10,10))

//q5

function appendFrontend(string){
    return string + 'Frontend'
}
console.log(appendFrontend('Apple'))

//q6

function sumGreaterThan100(num1, num2){
    return (num1 + num2) > 100;
}
console.log(sumGreaterThan100(50,51))

//q7

function lessThanOrEqualToZero(num) {
    return num <= 0;
}
console.log(lessThanOrEqualToZero(-2))

//q8

function oppositeBoolean(bool){
    return !bool;
}
console.log(oppositeBoolean(false))

//q9

function isNotZero(element){
 return element !== 0;
}

console.log(isNotZero('kitty'))

//q10

function calcRemainder(num1, num2){
    return num1 % num2;
}

console.log(calcRemainder(9,8))

//q11

function isOdd(num){
    return num % 2 !== 0;
}

console.log(isOdd(3))

//q12

function booleanInteger(num){
    return num % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(5))

//q13

function isLoggedInAndSubscribed(loggedin, subscribed){
 return (loggedin == 'LOGGED_IN') && (subscribed == 'SUBSCRIBED');
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))