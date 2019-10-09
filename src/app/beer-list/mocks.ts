import {Beer} from './beer';

export const BEERS: Beer[] = [
	{
		name: 'Porter',
		alcohol: '5,5',
		ibu: 27,
		color: 'Chocolate',
		og: 1052,
		amargor: 'Moderado',
		price: 110,
		imagen: './assets/img/porter.png',
		stock: 10,
		ofert: true,
	},{
		name: 'Barley Wine',
		alcohol: '10',
		ibu: 53,
		color: 'Bronce',
		og: 1090,
		amargor: 'Medio',
		price: 130,
		imagen: './assets/img/barley.png',
		stock: 20,
		ofert: false,
	},{
		name : 'Honey',
		alcohol: '7,5',
		ibu: 22,
		color: 'Ambar intenso',
		og: 1062,
		amargor: 'Bajo',
		price : 100,
		imagen : './assets/img/honey.png',
		stock: 15,
		ofert: false,
	}];