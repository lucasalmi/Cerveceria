import { Component, OnInit } from '@angular/core';
import {Beer} from './beer';
import {BeerDataService } from '../service/beer-data.service';


@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

	public titulos: any = {
	name: 'Nombre',
	description: 'Descripcion',
	price: 'Precio',
	imagen: 'Imagen',
	stock: 'Stock',
  carrito: 'Al carrito',
  alcohol: 'Alcohol',
  ibu: 'Ibu',
  color: 'Color',
  og: 'Og',
  amargor: 'Amargor',
  };

  public beers: Beer [];

  constructor(private beerDataService : BeerDataService) {

  }

  masCerveza (beer){
    beer.stock++;
  }
  menosCerveza (beer){
    beer.stock--;
  }
  solonumeros (event){
    if (event.key < "0" || event.key > "9"){
      event.preventDefault();
    }
  }

  ngOnInit() {
  this.beerDataService.getBeers().subscribe(response => {this.beers = [];
     for (const key in response){
      const element = response[key];
      this.beers.push(element);}

    });
  }
}  