import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {
  msg = '';

  constructor() { }

  ngOnInit(): void {
  }

  checkUser(loginRef: any): void {
    // console.log('Event Generated...');
    console.log(loginRef);
    const user = loginRef.user;
    const pass = loginRef.pass;
    if (user === 'Ajay' && pass === '123'){
      this.msg = 'succes';
    } else {
      this.msg = 'failed';
    }
  }

}
