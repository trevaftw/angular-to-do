import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'click-game',
  templateUrl: './click-game.component.html',
  styleUrls: ['./click-game.component.css']
})
export class ClickGameComponent implements OnInit {

  clickCount: number;

  constructor() { }

  ngOnInit() {
    this.clickCount = 0;

  }

  countClick() {
    this.clickCount++
  }

  setClass() {
    let myClass = {
      notActive: this.clickCount < 5,
      five: this.clickCount > 4 && this.clickCount < 10,
      ten: this.clickCount > 9 && this.clickCount < 25,
      twentyFive: this.clickCount > 24 && this.clickCount < 50,
      fifty: this.clickCount > 49 && this.clickCount < 100,
      hundred: this.clickCount > 99,
    }
    return myClass;
  }

}
