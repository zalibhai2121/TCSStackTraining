import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  fname: string = 'Zainab';
  lname = 'Alibhai';
  age = 21;
  // tslint:disable-next-line:no-inferrable-types
  skillInfo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  fun(): void {
    console.log('event fired....');
  }
  changeAge(): void{
    this.age = 25;
  }
  // tslint:disable-next-line:typedef
  addSkill(skill: any){
    console.log(skill);
    this.skillInfo = skill;
  }

}
