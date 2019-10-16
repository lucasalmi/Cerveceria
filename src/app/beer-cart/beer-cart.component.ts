import { Component, OnInit } from '@angular/core';
import {Carrito} from './carrito';
import {CartDataService} from '../service/cart-data.service';
import {CartService} from '../service/cart.service';


@Component({
  selector: 'app-beer-cart',
  templateUrl: './beer-cart.component.html',
  styleUrls: ['./beer-cart.component.css']
})

export class BeerCartComponent implements OnInit {

  public titulos: any = {
    name: 'Nombre',
    price: 'Precio por unidad',
    cantidad: 'Cantidad',
    total: 'Total',
    };
  public carrito: Carrito[];
  
  constructor(private cartDataService: CartDataService, private CartService: CartService ) { };

  calculartotal(carro){
    carro.total = carro.price * carro.cantidad;
  };

  ngOnInit() {
    this.cartDataService.getCart().subscribe(response => {this.carrito = [];
      for (const key in response){
        const element = response[key];
        this.carrito.push(element);}
   });
   this.CartService.items.subscribe(data => {
     this.carrito = data;
   });
 }
}
