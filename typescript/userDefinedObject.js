//ES5 style
function Employee() {
    this.fname = "ZZZZ";
    this.disEmpInfo = function () {
        console.log("Employee class function");
        console.log("name is " + this.fname);
    };
}
var emp1 = new Employee();
emp1.disEmpInfo();
//ES6
var Person = /** @class */ (function () {
    function Person() {
        this.fname = "ZAINAB ";
    }
    Person.prototype.disPersonInfo = function () {
        console.log("person class function");
        console.log("NAme is " + this.fname);
    };
    return Person;
}());
var p1 = new Person();
p1.disPersonInfo();
