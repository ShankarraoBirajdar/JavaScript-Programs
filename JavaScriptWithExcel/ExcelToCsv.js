const XLSX = require('xlsx');

var inputFilename = '../resources/EmployeeDetails.xlsx';
var outputFilename = '../resources/Details.csv';

const workBook = XLSX.readFile(inputFilename);

XLSX.writeFile(workBook, outputFilename, { bookType: "csv" });
console.log('File Created')