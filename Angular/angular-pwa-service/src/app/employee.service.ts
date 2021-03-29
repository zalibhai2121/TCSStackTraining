import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { }
  storeEmployee(emp: any): void {
    this.http.post('http://localhost:3000/emp', emp)
    .subscribe(result => console.log(result), error => console.log(error));
  }
}
