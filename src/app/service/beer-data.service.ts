import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(private http: HttpClient) { }

  getBeers (){
    return this.http.get('https://cerveceria-94ea5.firebaseio.com/beers.json');
  }
}
