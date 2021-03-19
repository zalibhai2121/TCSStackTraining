// class concepts
//class Employee{
//     id:number = 100;
//     name: string = "Zainab Alibhai";
//     salary:number = 69000;
//     empInfo():void {
//         console.log("The id is: " + this.id);
//         console.log("The name is: "+ this.name);
//         console.log("The salary is: "+ this.salary);
//     }
// }
// let emp1 = new Employee();
// emp1.empInfo();
// let emp2 = new Employee();
// emp2.empInfo();
var emp1 = { id: 100, name: "Rave", salary: 12000 }; //objeect liteereal style
var emp2 = { id: 100, name: "Raven", salary: 1020093 };
var emp3 = { id: 342, name: "Meghan", salary: 23000, age: 21 };
var Honda = /** @class */ (function () {
    function Honda() {
    }
    Honda.prototype.speed = function () {
        console.log("60km/h");
    };
    return Honda;
}());
var Pulser = /** @class */ (function () {
    function Pulser() {
    }
    Pulser.prototype.speed = function () {
        console.log("180km/h");
    };
    return Pulser;
}());
var hh = new Honda();
var pu = new Pulser();
hh.speed();
pu.speed();
