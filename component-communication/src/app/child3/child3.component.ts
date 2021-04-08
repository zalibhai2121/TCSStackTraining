import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  // names: Array<string> = new Array();
  constructor(public ser: SharedService) { }

  ngOnInit(): void {
  }
  add(name: any): void {
    this.ser.setNames(name);
  }

}
