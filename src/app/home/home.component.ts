import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickCount: number = 0;
  tasks: object;
  name: string = '';

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.myMethod();
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
