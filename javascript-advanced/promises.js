var p1 = new Promise(function(resolve, reject) {
    var randomNum = Math.random();

    if (randomNum < 0.5) {
        resolve(randomNum); // if this code is to run, go to the callback function --> then
    } else {
        reject(randomNum); // if this code is to run, go to the callback function --> catch
    }
});


p1.then(function(num){
    console.log("Success:", num);
});

p1.catch(function(num){
    console.log("Error:", num);
})