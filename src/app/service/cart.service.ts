import { Injectable } from '@angular/core';
import {Carrito} from '../beer-cart/carrito';
import {BehaviorSubject, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _items: Carrito[] = [];
  private _itemsSubject: BehaviorSubject<Carrito[]> = new BehaviorSubject(this._items);
  public items: Observable <Carrito[]> = this._itemsSubject.asObservable();

  constructor() { }
    
  addToCart (cart: Carrito) {
    let newBeer = Object.assign ({},cart);
    let alreadyInCart = false;
    this._items.forEach((b: Carrito) => {
      if (b.name == newBeer.name){
        alreadyInCart = true;
        b.cantidad += newBeer.cantidad;
      }
    });
    if (!alreadyInCart){
      this._items.push(newBeer);
    }
    this._itemsSubject.next(this._items);
  }
}
