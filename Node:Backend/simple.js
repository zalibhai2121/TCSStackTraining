// module.exports.a  = "Welcome to Node JS Module example";
// module.exports.b = "Another one";
// module.exports.dis = function(){
//     return "This is a function export";
// }
// exports.add = function(a,b){
//     return a +b;
//     }

let sayHello = (name) => "Welcome " + name;
class Employee {
    display(){
        console.log("display class")
    }
}
module.exports = {sayHello, Employee}