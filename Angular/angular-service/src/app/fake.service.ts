import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fake } from './fake.model';

@Injectable()
export class FakeService {
    constructor(public http: HttpClient){} // DI for HttpClient
    sayHello(): string {
        return 'Welcome DI user defined service';
    }

    // loadFakeData(): void {
    //     this.http.get('https://jsonplaceholder.typicode.com/todos')
    //     .subscribe(data => console.log(data), // value gets loaded in a server
    //     error => console.log('error'),
    //     () => console.log('completeed'));
    // }
    loadFakeData(): Observable<Fake[]> {
        return this.http.get<Fake[]>('https://jsonplaceholder.typicode.com/todos');
    }
}
