function getRandomNumber() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      console.log(`Random Number is ${randomNumber} is greater than equals to 0.5 ${randomNumber >= 0.5}`);
      if (randomNumber >= 0.5) {
        resolve(randomNumber);//passing random number
      } else {
        reject(new Error('Random number less than 0.5'));
      }
    });
  }
  
  getRandomNumber()
    .then(result => {
      console.log('then()');
      console.log('Success:', result);
    })
    .catch(error => {
      console.log('catch()');
      console.error('Error:', error.message);
    });



// Explanation:

// getRandomNumber function:
// Creates a new promise.
// Generates a random number using Math.random().
// If the number is greater than or equal to 0.5, the promise is resolved with the number.
// Otherwise, the promise is rejected with an error.

// then method:
// If the promise is resolved, the callback function within then is executed, logging the random number.

// catch method:
// If the promise is rejected, the callback function within catch is executed, logging the error message.