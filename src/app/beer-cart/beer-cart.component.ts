import { Component, OnInit } from '@angular/core';
import {Carrito} from './carrito';
import {CARRITO} from './mocks';
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
  
  constructor() { };

  calculartotal(carro){
    carro.total = carro.price * carro.cantidad;
  };
  ngOnInit() {
  this.carrito = CARRITO;
  };

}
