var num = [100, 200, 300, 400, 500, 600];
console.log("Classical loop: ");
for (var i_1 = 0; i_1 < num.length; i_1++) {
    console.log(num[i_1]);
}
console.log("For in loop: ");
for (var i_2 in num) {
    console.log("Index " + i_2 + "is " + num[i_2]);
}
console.log("using of loop --- use most in angular");
for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
    var n_1 = num_1[_i];
    console.log("Value " + n_1);
}
