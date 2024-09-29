// A closure in JavaScript is a function that has access to variables in its parent scope,
//  even after the parent function has returned.

function createCounter() {
    let count = 0;
  
    return function() {
      count++;
      return count;
    };
  }
  
  const counter = createCounter();
  
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  console.log(counter()); // Output: 3

  for(let i=0;i<=10;i++){
    console.log(counter());
  }


// Explanation:

// createCounter() function:
// Initializes a variable count to 0.
// Returns an inner function that increments count and returns its value.

// Closure:
// The inner function forms a closure because it has access to the count variable from its outer scope (the createCounter() function).
// Even after createCounter() finishes executing, the inner function retains access to count.

// Usage:
// We assign the result of calling createCounter() to the variable counter. This essentially stores the inner function.
// Every time we call counter(), it increments and returns the updated value of count.