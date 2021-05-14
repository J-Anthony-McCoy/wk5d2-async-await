// Write function called getRandomNumber that returns a promise
// In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
// Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
// Invoke your async function

const promise = function getRandomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let random = Math.floor(Math.random() * 1001);
      if (random % 2 === 0) {
        resolve("Success! Number is even. Your number was " + random);
      } else {
        reject("Failed! Number is odd. Your number was " + random);
      }
    }, 0.5 * 1000);
  });
};

promise()
  .then((message) => {
    console.log("This is 'then' telling you... " + message);
  })
  .catch((message) => {
    console.log("This is 'catch' telling you... " + message);
  });
