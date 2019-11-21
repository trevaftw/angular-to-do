import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service'

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  constructor(private _http: HttpService) { }

  randomMagicCard: Object;

  ngOnInit() {
    this._http.getRandomMagicCard().subscribe(response => {
      this.randomMagicCard = response;
    })
  }

}
