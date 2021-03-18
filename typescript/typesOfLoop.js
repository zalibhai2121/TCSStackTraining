var num = [100, 200, 300, 400, 500, 600];
console.log("Classical loop: ");
for (var i = 0; i < num.length; i++) {
    console.log(num[i]);
}
console.log("For in loop: ");
for (var i in num) {
    console.log("Index " + i + "is " + num[i]);
}
console.log("using of loop --- use most in angular");
for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
    var n = num_1[_i];
    console.log("Value " + n);
}
