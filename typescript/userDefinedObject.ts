//ES5 style
function Employee(){
    this.fname = "ZZZZ"
    this.disEmpInfo = function(){
        console.log("Employee class function");
        console.log("name is "+ this.fname);
    }

}
let emp1 = new Employee();
emp1.disEmpInfo();

//ES6
class Person {
    fname: string = "ZAINAB "
    disPersonInfo():void{
        console.log("person class function");
        console.log("NAme is "+ this.fname);
    }

}
let p1 = new Person();
p1.disPersonInfo();