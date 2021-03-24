import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {
  loginRef = new FormGroup({
    user: new FormControl(),
    pass: new FormControl()
  });
  msg = '';
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(): void {
    const user1 = this.loginRef.value.user;
    const pass = this.loginRef.value.pass;
    this.msg = `This is username ${user1} and password ${pass}`;

    console.log(this.loginRef.value);
  }
}
