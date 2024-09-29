// https://github.com/public-apis/public-apis
// https://github.com/public-api-lists/public-api-lists?tab=readme-ov-file#animals
// https://cat-fact.herokuapp.com/facts
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/

// Getting a resource
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//   Listing all resources
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Creating a resource
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


  (async function () {
    try {
      const response = await fetch('https://cat-fact.herokuapp.com/facts');
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  })();