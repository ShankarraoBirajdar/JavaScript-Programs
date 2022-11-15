
let str="";
let num=10;
let isTrue =true;
try{
    
    console.log(typeof null);
    console.log(typeof undefined);
    console.log(typeof NaN); 
console.log(typeof abc)
console.log(typeof num)
console.log(typeof isTrue)
console.log(typeof [1,2,3,4]      )        // Returns "object"
console.log(typeof {name:'John', age:34})  // Returns "object"
console.log(typeof new Date()     )        // Returns "object"
console.log(typeof function () {})
}
catch(err){

console.log("Error name is ==> "+err.name);
}
finally{
    console.log("this is finally block");
}