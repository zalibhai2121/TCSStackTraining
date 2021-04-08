import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input()
  pName = '';

  @Output()
  eventRef = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

 addAge(age: any): void {
   this.eventRef.emit(age);
 }

}
