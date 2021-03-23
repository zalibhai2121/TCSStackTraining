import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
  flag = false;
  b1 = 'show';
  stdNames: Array<string> = ['RM', 'Jin', 'Suga', 'JK', 'Jhope', 'Jimin', 'V'];
  skillNames: Array<string> = new Array();
  emp: Employee = new Employee(100, 'Ravi', 20000);
  employees: Array<Employee> = new Array();
  constructor() {
    const emp1 = new Employee(101, 'Raj', 324344);
    const emp2 = new Employee(102, 'Reeta', 324344);
    const emp3 = new Employee(103, 'Meeta', 324344);
    const emp4 = new Employee(104, 'Heeta', 324344);
    this.employees.push(emp4);
    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);
  }

  ngOnInit(): void {
  }
  change(): void {
    this.flag = !this.flag;
    if (this.b1 === 'show'){
      this.b1 = 'hide';
    } else {
      this.b1 = 'show';
    }
  }
  // tslint:disable-next-line:typedef
  addSkillName(name: any){
    this.skillNames.push(name);
  }
}
