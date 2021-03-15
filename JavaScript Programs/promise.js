// promis is a predefined a object to handle asynch opperation and handels error
/* 
1. Fulfilled: when promise is success
2. Rejected: promise is failure
3. Pending: promise in pending state
4. settled: promise is completed
*/

var option = prompt("Enter your prompt")

//User defined promise:
var obj = new Promise(function(resolve, reject){
    if(option == "yes"){
        resolve("Successfully done the task!");
    }else {reject("Failure -- Error Generated");}
});
//Asynch execute only if promise resolve else catch execute
obj.then(data => document.write(data)).catch(error => document.write(error));