

let myArray = Array(6);
myArray = new Array(10, 20, 30, 40, 50, 60);
console.log("myArray " + myArray);

let marks = new Array(10, 20, 30, 40, 50);
console.log("marks " + marks);

let array = [10, 20, 30, 40, 50];
console.log("array " + array);
//Add 
array.push(60);
console.log("array push " + array);

//Remove
array.pop();
console.log("array pop " + array);

//unshift
array.unshift(5);
console.log("array unshift " + array);

//indexOf
console.log("array index " + array.indexOf(20));

//Search
console.log("array includes " + array.includes(10));
console.log("array includes " + array.includes(100));

//Substring
console.log("array Slice " + array.slice(2, 5));

//reverse
console.log(array.reverse());

//sort
console.log(array.sort());

//lastIndexOf
console.log(array.lastIndexOf(20));

//map
array.map((value, index, list) => {
    console.log("i=" + value + " j=" + index + " k=" + list);

});

//filter
array.filter((value, index, list) => {
    console.log("i=" + value + " j=" + index + " k=" + list);

});

console.log("==============");
//reduce
array.reduce((i, value, index) => {
    console.log("i=" + i + " value=" + value + " index=" + index);

});