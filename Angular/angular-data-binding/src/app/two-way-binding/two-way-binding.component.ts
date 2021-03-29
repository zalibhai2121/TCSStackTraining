import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  fname = 'Raven';
  age = 21;
  skill = 'c++';

  constructor() { }

  ngOnInit(): void {
  }

  updateSkill(skillInfo: any): void {
    this.skill = skillInfo;

  }

}
