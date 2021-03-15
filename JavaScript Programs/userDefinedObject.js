// object: any real world entity
// holds property(what they have: variable/field) and behavior(what they do(function/method))
//ES5
function Employee(id, name){

    this.id = id;
    this.name = name;

    this.display = function(){
        document.write("<br/> Id is " + this.id);
        document.write("<br/> Name is " + this.name);
    }
    //normal function to access emp id
    //can't access within normal function 
    // if you want to access use keyword
    var that = this;
    function dis(){
        document.write("<br/> ID is " + that.id);
    }
    dis();
    //can use this keyword
    var dis1=()=>document.write("<br/> Id in arrow function " + this.id );
    dis1();
}   
var emp1 = new Employee(197,"Zainab");
emp1.display();
Employee.prototype.age = 21;
Employee.prototype.info = function(){
    document.write("<br/> THis run time behavior added ...")
    }
document.write("<br/> After Adding age property");
document.write("<br/> id is " + emp1.id);
document.write("<br/> name is " + emp1.name);
document.write("<br/> age is " + emp1.age);