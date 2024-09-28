function sum(a,b){
    console.log("sum: ",a+b)
}

//  callback meant for - function is pass as a argument
function calculator(a,b,sumCallback){
    sum(a,b);
}

calculator(1,3,sum);