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