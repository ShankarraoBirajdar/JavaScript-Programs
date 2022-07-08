const fs = require('fs');
/* Read a File */
fs.readFile('../resources/work.txt', 'utf8', (err,data)=>{
    if(err){
        console.error(err)
        return;
    }
    console.log(data);
});

/* Write a File */
const content = "My name is Shankarrao Birajdar ";
// fs.writeFileFile
fs.appendFile('../resources/work.txt',content,err=>{
    if(err){
        console.error(err)
        return;
    }
});