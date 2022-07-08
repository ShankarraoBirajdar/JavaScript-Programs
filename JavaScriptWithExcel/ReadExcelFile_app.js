// npm install xlsx
const XLSX = require('xlsx');
const filePath = '../resources/EmployeeDetails.xlsx';
//read a WorkBook
const workbook = XLSX.readFile(filePath);

/* List the Worksheet names in tab order */
var wsnames = workbook.SheetNames;
console.log(wsnames);

//read a WorkSheet
const worksheet = workbook.Sheets['Details'];
//Convert To Json
const arrEmployees = XLSX.utils.sheet_to_json(worksheet);

console.log(arrEmployees);
/* Convert into Json Format */
// console.log(JSON.stringify(arrEmployees) );
console.log(arrEmployees[0].Name);
console.log(arrEmployees[0].Company);
console.log(arrEmployees[0].Gender);
console.log(arrEmployees[0].City);
console.log(arrEmployees[0].Salary);

// const convertToCsv = XLSX.utils.sheet_to_csv(workSheet);
// console.log(convertToCsv);

// const convertToTxt = XLSX.utils.sheet_to_txt(workSheet);
// console.log(convertToTxt);

// const convertToHtmlTable = XLSX.utils.sheet_to_html(workSheet);
// console.log(convertToHtmlTable);

// const convertToformulae = XLSX.utils.sheet_to_formulae(workSheet);
// console.log(convertToformulae);

