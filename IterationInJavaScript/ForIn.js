let array = [10, 20, 30, 40, 50];

for(let i in array){
    console.log(i);
}

for(let i of array){
    console.log(i);
}

array.forEach((value, index, array)=>{
    console.log("i=" + value + " j=" + index + " k=" + array);
});