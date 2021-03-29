import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  msg = '';

  constructor() { }

  ngOnInit(): void {
  }

  fun(): void {
    this.msg = 'Welcome to Mat-Card action event';
  }

}
