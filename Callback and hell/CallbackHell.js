//callback hell - nested call back
function getData(data, getNextData){

    setTimeout(()=>{
        console.log("data:: ",data);
        if(getNextData)
        {
            getNextData();
        }
    },2000);
    }
    
    getData(2,()=>{
        console.log("getting data3....");
        getData(3,()=>{
            console.log("getting data4....");
            getData(4,()=>{
                console.log("getting data5....");
                getData(5);
            });
        });
    });