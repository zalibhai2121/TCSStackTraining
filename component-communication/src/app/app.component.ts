import { Component, ViewChild } from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentName = '';
  childAge?: number;

  @ViewChild(Child2Component)
  child2?: Child2Component;
  childDesig?: string;
  products: Array<string> = new Array();

  passName(name: any): void{
    this.parentName = name;
  }
  addProduct(productName: any): void {
    this.products.push(productName);
  }
  callChild2Function(): void {
    this.child2?.child2Fun();
    this.childDesig = this.child2?.desig;
  }
}
