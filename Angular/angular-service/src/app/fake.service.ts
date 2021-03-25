import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FakeService {
    constructor(public http: HttpClient){} // DI for HttpClient
    sayHello(): string {
        return 'Welcome DI user defined service';
    }

    loadFakeData(): void {
        this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(data => console.log(data));
    }
}
