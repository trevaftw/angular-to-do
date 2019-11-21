import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  myMethod(){
    return console.log('You looked in the console! This message was loaded onInit from a service file')
  }

  getRandomMagicCard(){
    return this.http.get('https://api.scryfall.com/cards/random')
  }


}
