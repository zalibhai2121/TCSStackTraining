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

// Constructors are used to create object or memory
//  class Employee {
//      //task once
//      constructor(){
//          console.log(" Object created...");
//      }
//      //task more than once
//      disInfo():void {
//          console.log(" Employee function");
//      }
//  }

//  let em1 = new Employee();
//  em1.disInfo();

// //Parameterized constructors with short cut initialization {only typescript}
// class Employee {
//     // id:number;
//     // salary:number;
//     // name: string;
//     //task once 
//     // variable with use access specifier ---> public
//     constructor(public id:number, public salary:number = 80000, private name?:string) {
//         // this.id = id;
//         // this.salary = salary;
//         // this.name = name;
//     }
//     //task more than once
//     disInfo(): void {
//         console.log("The id is: " + this.id);
//         console.log("The name is: "+ this.name);
//         console.log("The salary is: "+ this.salary);
//     }
// }

// let emp1 = new Employee(100,12000, "Zainab");
// emp1.disInfo();
// let emp2 = new Employee(101, 219300, "Ajat");
// emp2.disInfo();
// let emp3 = new Employee(101,this.salary ,"William");
// emp3.disInfo();
// let emp4 = new Employee(101,this.salary);
// emp4.disInfo();

//Inheritance example

// class Employee{ //super class --> must be generic
//     disEmp(){
//         console.log("EMP class function");
//     }
// }

// class Manager extends Employee{ //sub class: specific
//     disMgr(){
//         console.log("Manager class function");
//     }
// }
// let emp1 = new Employee();
// emp1.disEmp();
// let mgr1 = new Manager();
// mgr1.disMgr();
// mgr1.disEmp();

//Interface ex -- contaons only variables or only function
// interface Employee {
//     id: number;
//     dis():void //incomplete functions -- template
// }
// class EmpInfo implements Employee { //implements
//     id: number = 100;
//     dis():void{
//         console.log("dis function implemented by emp info class")
//     }
// }

//interface with variables ->> in ANGULAR
interface Employee {
    id:number;
    name:string;
    salary:number;
    age?:number;

}
let emp1: Employee={id:100,name:"Rave", salary:12000}; //objeect liteereal style
let emp2: Employee={id:100,name:"Raven",salary:1020093 };
let emp3: Employee={id:342, name: "Meghan",salary: 23000, age: 21};

//interface with function
//interface is used to achieve abstraction

interface Bike{ //what you need mandatory -->specification
    speed():void;
}
class Honda implements Bike { //--> implementation
    speed():void{
        console.log("60km/h");
    }
}
class Pulser implements Bike {
    speed():void{
        console.log("180km/h");
    }
}
let hh = new Honda();
let pu = new Pulser();
hh.speed();
pu.speed();
