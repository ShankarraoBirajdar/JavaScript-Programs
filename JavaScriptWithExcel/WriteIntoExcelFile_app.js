// npm install xlsx
const XLSX = require('xlsx');

/* File Path */
// var filename = "../resources/EmployeeAoa.xlsx";
var filename = "../resources/EmployeeJson.xlsx";
/* Array of Array */
// var data = [["Name","Age","City"],["Shankar",28,"Solapur"],["Priyanka",27,"Akkalkot"], ["Onkar",28,"Mumbai"]];

/* Json File */
var data = require('../resources/employee.json');

/* Sheet Name */
var ws_name = "EmployeeDetails";

/* Create a new Workbook */
var wb = XLSX.utils.book_new();

/* Convert Array of Array To Sheet */
// var ws = XLSX.utils.aoa_to_sheet(data);

/* Convert Json File To Sheet */
var ws = XLSX.utils.json_to_sheet(data);

/* Append a Worksheet to a Workbook */
XLSX.utils.book_append_sheet(wb, ws, ws_name);

/* Generate and attempt to save an XLSX file */
// XLSX.writeFileXLSX(workbook, filename, opts);
XLSX.writeFile(wb, filename);
console.log('Write Operation is Done');

