let array = [10, 20, 30, 40, 50];

//Filter  By Boolean Condition
array.filter((value, index, list) => {
    console.log("i=" + value + " j=" + index + " k=" + list);
   
});

let newArray = array.filter((value, index) => {
    return value > 10;//accpet Boolean Condition and return New Array
   
});

console.log("Original Array "+array+" New Array Return By Filter "+newArray);

let newArray2 = array.filter((value, index) => {
    return value + index;//accpet Boolean Condition and return New Array
   
});

console.log("Original Array "+array+" New Array Return By Filter "+newArray2);