

function firstCharUppercase(){
    let str = "Shankarrao Kedarnath Birajdar";
    str = str.toUpperCase();
    let arrayStr = Array.from(str);
    for(let i=0;i<arrayStr.length;i++){
    
    if(i==0)
    {
        arrayStr[i] = arrayStr[i].toLowerCase();
    
    }
    else if(arrayStr[i]==' ')
    {
        arrayStr[i+1] = ' '+arrayStr[i+1].toLowerCase();
    }
    }
    
    console.log(arrayStr.join(""));
}

firstCharUppercase();
