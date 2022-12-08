let array = [10, 20, 30, 40, 50];

//map
array.map((value, index, list) => {
    console.log("i=" + value + " j=" + index + " k=" + list);
   
});

let newArray = array.map((value, index) => {
    return value + index;//Perform Opertion on each Value and return New Array
   
});
console.log("Original Array "+array+" New Array Return By Map "+newArray);

let newArray2 = array.map((value, index) => {
    return value > 10;//Perform Opertion on each Value and return New Array
   
});

console.log("Original Array "+array+" New Array Return By Map "+newArray2);