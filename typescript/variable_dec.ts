var a = 10;
var a = 20; //redeclaration
console.log(a);
console.log(a);

let b = 30;
// let b = 20; // re-assign not possible

for(var i = 0; i<100;i++){

} console.log(i);
for(let j = 0; j<100; j++){
    console.log(j); // cant declare outside
}

const c = 100; //constant value 
// c = 39; // can't assign