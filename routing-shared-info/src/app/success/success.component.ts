import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(public activated: ActivatedRoute) { }
  user?: string;

  ngOnInit(): void {
    this.activated.params.subscribe(v => this.user = v.user);
  }

}
