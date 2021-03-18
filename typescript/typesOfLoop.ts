let num:Array<number> = [100,200,300,400,500,600];
console.log("Classical loop: ");
for(let i = 0; i<num.length; i++){
    console.log(num[i]);
}

console.log("For in loop: ");
for(let i in num){
    console.log("Index "+ i+ "is " + num[i]);
}

console.log("using of loop --- use most in angular");
for(let n of num){
    console.log("Value "+n);
}