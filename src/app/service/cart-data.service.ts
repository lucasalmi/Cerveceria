import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  constructor(private http: HttpClient) { }

  getCart (){
    return this.http.get('https://cerveceria-94ea5.firebaseio.com/cart.json');
  }
}
