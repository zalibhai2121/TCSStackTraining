import { Component, OnInit } from '@angular/core';
import { Fake } from '../fake.model';
import { FakeService } from '../fake.service';
import { MyService } from '../mycustom.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  // providers: [FakeService] //register on component level
})
export class FirstComponent implements OnInit {
  msg = '';
  msg1 = '';

  constructor(public service: FakeService) { }

  fakeData: Array<Fake> = [];
  ngOnInit(): void { // this is life cycle method of component it calls only once automatically
    this.service.loadFakeData().subscribe(data => this.fakeData = data);
  }
  fun(): void {
    const obj = new MyService();
    this.msg = obj.sayHello();
  }
  display(): void{
    this.msg1 = this.service.sayHello();
  }
  callFakeService(): void {
    // this.service.loadFakeData().subscribe(data => this.fakeData = data);
  }

}
