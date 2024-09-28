let promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if (x === y) {
        resolve("Success");
    } else {
        reject("Error");
    }
});

promise.
    then(function (result) {
        console.log('You are a GEEK --> ',result);
    }).
    catch(function (error) {
        console.log('Some error has occurred --> ',error);
    }); 
