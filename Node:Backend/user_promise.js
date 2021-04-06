var obj = new Promise((resolve, reject) => {
    resolve("promise resolved ...");
    reject("Error generated...");
});
obj.then(res => console.log("Resolved")).catch(error => console.log("Rejected"));