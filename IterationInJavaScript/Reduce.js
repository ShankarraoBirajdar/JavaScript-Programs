let array = [0,1,2,3,4,5,6,7,8,9];

//Reduce
//it returns only one value
//its accept two parameter 


let newArray2 = array.reduce((value1, value2) => {
    return value1 + value2;//accpet Boolean Condition and return New Array
   
});

console.log("Original Array "+array+" New Array Return By reduce "+newArray2);