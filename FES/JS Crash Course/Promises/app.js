// // (fetch("https://jsonplaceholder.typicode.com/users/1"))

// const emailRef = document.querySelector(".email");

// // to unlock data from the backend API you can either --
// // 1. Then
// // console.log(1)
// // fetch("https://jsonplaceholder.typicode.com/users/1")
// //   .then((response) => {
// //     return response.json();
// //   })
// //   .then((data) => {
// //     console.log(2);
// //     emailRef.innerHTML = data.email
// //   });
// //   console.log(3)

// // 2. Async/Await (best practice in most cases)
// async function main() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   const data = await response.json();
//   emailRef.innerHTML = data.email;
// }

// main();

// const statusRef = document.querySelector('.status')

// function getSubscriptionStatus() {
//     return new Promise((resolve, reject) => {
//         resolve("VIP")
//     })
// }

// // 1. Then
// // getSubscriptionStatus().then(response => console.log(response))

// // 2. Async/Await
// async function main() {
//     const status = (await getSubscriptionStatus())
//     statusRef.innerHTML = status
// }

// main();

const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video");


function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("show video")
    } 
    else if (subscriptionStatus === "FREE") {
      resolve("show trailer")
    } 
    else {
      reject("no video")
    }
  })
}

async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
  console.log(await getVideo(status));
}
