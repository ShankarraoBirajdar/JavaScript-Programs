"use strict";
exports.__esModule = true;
var emp = require("./resources/employee.json");
// 👇️ "JAMES DOE"
console.log(emp.name.toUpperCase());
// 👇️ [2022, 2023, 2024]
console.log(emp.years);
// let array1: any=[10,20,30,40,50];
// console.log("==forEach()==");
// array1.forEach((item: any, index: any, list: any)=> {
//     console.log(item+" "+index+" "+list);
// });
// console.log("filter()");
// array1.filter((item: any, index: any, list: any)=>{
//     console.log(item+" "+index+" "+list);
// });
// console.log("map()");
// array1.map((item: any, index: any, list: any)=>{
//     console.log(item+" "+index+" "+list);
// });
// console.log("reduce()");
// array1.reduce((previousValue: any, currentValue: any, CurrentIndex: any, list: any)=>{
//     console.log(currentValue+" "+CurrentIndex+" "+list);
// });
