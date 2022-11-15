// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("oranges", 200);
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("null", null);
fruits.set("null", null);
fruits.set("abcc", NaN);
fruits.set("abccd", undefined);

//get
console.log(fruits.get("oranges"));
//print object
console.log(fruits);
//size property
console.log(fruits.size);
//delete
console.log(fruits.delete("bananas"));
//has
console.log(fruits.has("apples"));


for (const x of fruits) {
  console.log(x);
}

// List all entries
fruits.forEach (function(value, key) {
  console.log( key + ' = ' + value);
})


// List all entries
for (const x of fruits.entries()) {
  console.log(x);
}