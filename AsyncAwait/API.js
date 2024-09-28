// https://www.freecodecamp.org/news/javascript-async-await/

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.log(error));


// In the code above, the fetch() function returns a Promise,
// which we handle using the then() method. Inside the first then() method, 
// we accept the response from the request and convert it into an object using the json() method.

// In the second then() method,
// we receive the returned json data from the call to the json() method,
// then log that data to the console.

// We also add the catch() method to handle any error that might happen when running the request.

// The code is really not hard to understand, 
// but we can make it even prettier by removing the .then() and .catch() chains, 
// which also removes the callback functions.

// The Await Keyword
// The await keyword basically makes JavaScript wait until the Promise object is resolved or rejected.
//  Instead of having to use the callback pattern inside the then() method,
//   you can assign the fulfilled promise into a variable like this:

// const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// const json = await response.json();
// console.log(json);

// Now if you run the code above, you might get an error like this:
// SyntaxError: await is only valid in async functions and the top level bodies of modules
// This error occurs because the await keyword must be used inside an asynchronous function or a module.

// The Async Keyword
// To create an asynchronous function, 
// you need to add the async keyword before your function name. 
// Take a look at line 1 in the example below:

// async function runProcess() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const json = await response.json();
//   console.log(json)
// }

// runProcess();


// How to Handle Errors in Async/Await
// To handle an error that might occur from the async/await syntax, 
// you can use the try/catch block to catch any rejection from your promise.

// async function runProcess() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// }

// runProcess();

// How to Use Async/Await in IIFE and Arrow Functions
// An Immediately Invoked Function Expression (IIFE) is a technique used
//  to execute a function immediately as soon as you define it.

// Unlike regular functions and variables, IIFEs will be removed
//  from the running process once they are executed.

// Aside from the standard function, you can also make an asynchronous IIFE.
//  This is useful when you need to run the asynchronous function only once:

(async function () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
})();
