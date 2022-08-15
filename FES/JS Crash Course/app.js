let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit)

let subscribed = true
let loggedIn = true

let str = subscribed || loggedIn ? 'show the video' : 'hide the video'
console.log(str);

// if (subscribed === true) {
//     console.log('show the video')
// } else if (loggedIn === true) {
//     console.log('tell the user to upgrade their subscription');
// }   else {
//     console.log('tell user to log into account');
// }

let cash = 20
let price = 70
let difference = cash - price

if (cash > price) {
    console.log(`You paid extra, here is ${difference} dollars`);
} else if (cash === price) {
    console.log('You paid the exact amount, have a great day');
} else if (cash < price) {
    console.log(`You did not pay enough, you owe ${difference * -1} dollars`);
}

let groceryCash = 50
let groceryPrice = 50
let isStoreOpen = true

let str2 = (groceryCash >= groceryPrice) && isStoreOpen ? 'print the receipt' : 'do not print receipt'
console.log(str2);

// if (groceryCash >= groceryPrice && isStoreOpen === true) {
//     console.log('print the receipt');
// }

let hot = true

hot ? console.log('weather is hot outside') : console.log('weather is cold')

// DRY = Don't repeat yourself
// let count = 1;

// while (count <=100){
//     console.log(count)
//     count = count + 1;
// }

// for (let i = 1; i <= 20; ++i) {
//     if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} ->Frontend Simplified`);
// }
//     else if (i % 3 === 0) {
//         console.log(`${i} ->Frontend`);
//     } else if (i % 5 === 0) {
//         console.log(`${i} ->Simplified`);
//     } else {
//         console.log(`${i} -> ${i}`);
//     }
// }

// const str3 = "Frontend Simplified"
// for (let i = 0; i < str3.length; ++i) {
//     console.log(str3[i])
// }

//DRY Don't repeat yourself
// console.log('Hello David')
// console.log('Hello Kylie')
// console.log('Hello Justin')

//Function Definition
function welcomePersonToFes(firstName, lastName) {
    console.log(`Welcome to FES, ${firstName} ${lastName}`)
}

//Call the function
welcomePersonToFes('Justin', 'Hampton');

function sumOfTwoNumbers(num1, num2) {
    return num1 / num2
}

console.log(sumOfTwoNumbers(20, 10))


// function convertCelsuisToFohrenheit(celsius2) {
//     let fahrenheit2 = celsius2 * 1.8 + 32
//     return fahrenheit2
// }

// console.log(convertCelsuisToFohrenheit(0))
// console.log(convertCelsuisToFohrenheit(10))
// console.log(convertCelsuisToFohrenheit(30))

const convertCelsuisToFohrenheit = (celsius2) => {
    return celsius2 * 1.8 + 32
}

console.log(convertCelsuisToFohrenheit(0))

let arr = [20, 30, 40, 50, 100]

// let newArr = arr.filter((element) => {
//     console.log(element)
//     if (element < 50) {
//     return true;
//     }
// }) 

let newArr = arr.filter(element => element < 50)

console.log(newArr)

let grades = ['A+', 'A', 'FAIL']
let greatGrades = []

// for (let i = 0; i < grades.length; ++i) {
//     if (grades[i] !== 'FAIL') {
//         greatGrades.push(grades[i]);
//     }
// }

// console.log(greatGrades)

let goodGrades = grades.filter(element => element !== 'FAIL')

console.log(goodGrades)

let arr2 = [1, 4, 9, 16]

let newArr2= arr2.map(element => 'dog')

console.log(newArr2)

let dollars2 = [1, 5, 10, 3];

// let cents = dollars2.map(element => element * 100)

let cents = []
for (let i = 0; i < dollars2.length; ++i) {
    cents.push(dollars2[i] * 100);
}

console.log(cents)

let userFirstName = 'David'
let userLastName = 'Bragg'
let userDiscordId = 'David Bragg#0001'
let userSubscriptionStatus = 'VIP'

let users = [{
    username: 'David',
    email: 'david@frontendsimplified.com',
    password: 'test123',
    subscriptionStatus: 'VIP',
    discordId: 'David Bragg#0001',
    lessonsCompleted: [0, 1],
},
{
    username: 'Mitri',
    email: 'mitri@frontendsimplified.com',
    password: 'mitri123',
    subscriptionStatus: 'VIP',
    discordId: 'Mitri#0001',
    lessonsCompleted: [0, 1, 2, 3]
},
{
    username: 'Zen',
    email: 'zen@frontendsimplified.com',
    password: 'zen123',
    subscriptionStatus: 'VIP',
    discordId: 'zen#0001',
    lessonsCompleted: [0, 1, 2, 3]
},
];

function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
        if (users[i].email === email) {
            console.log(users[i]);
         if (users[i].password === password) {
            console.log('log the user in - the details are correct')
        } 
        else {
            console.log('password is incorrect - try again')
        } 
        return;
    }
 } 
 console.log('could not find an email that matches')
}

login('david@frontendsimplified.com', 'test123');

function register(user) {
    users.push(user);
}

register({username: 'justin',
email: 'j-hamp@hotmail.com',
password: 'password',
subscriptionStatus: 'VIP',
discordId: 'jhamp#0001',
lessonsCompleted: [0, 1]
});

console.log(users)

// First way of accessing an element, very common, can access classes with a . or even an element itself such as 'h1'
console.log(document.querySelector('#title'));

//Second way of accessing an element, only works if it has an ID
console.log(document.getElementById('title'))

//Change HTML
document.querySelector('#title').innerHTML += 'Frontend Simplified'

// Change CSS
document.querySelector("#title").style.fontSize = '16px'

function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
}