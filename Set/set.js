// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");//duplicates are not allowed
letters.add(null);
letters.add(NaN);
letters.add(undefined);


console.log(letters);
//size property
console.log(letters.size);
//delete
console.log(letters.delete("c"));
//has
console.log(letters.has("a"));

// List all Elements
letters.forEach (function(value) {
  console.log(value) ;
})


// List all Elements
for (const x of letters.values()) {
    console.log(x);
}



