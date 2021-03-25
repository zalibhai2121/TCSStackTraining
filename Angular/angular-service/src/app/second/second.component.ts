import { Component, OnInit } from '@angular/core';
import { FakeService } from '../fake.service';
import { MyService } from '../mycustom.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  // providers: [FakeService]
})
export class SecondComponent implements OnInit {
  msg = '';
  msg1 = '';

  constructor(public service: FakeService) { }

  ngOnInit(): void {
  }
  fun(): void {
    const obj = new MyService();
    this.msg = obj.sayHello();
  }
  display(): void{
    this.msg1 = this.service.sayHello();
  }
}
