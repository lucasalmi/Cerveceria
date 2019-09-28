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
		imagen: 'https://http2.mlstatic.com/caja-x6-cerveza-artesanal-porter-antares-500-ml-12-canillas-D_NQ_NP_692506-MLA31900359222_082019-F.jpg',
		stock: 10,
	},{
		name: 'Barley Wine',
		alcohol: '10',
		ibu: 53,
		color: 'Bronce',
		og: 1090,
		amargor: 'Medio',
		price: 130,
		imagen: 'https://http2.mlstatic.com/cerveza-artesanal-antares-barley-wine-x-und-nunez-D_NQ_NP_768430-MLA31352400657_072019-F.jpg',
		stock: 20,
	},{
		name : 'Honey',
		alcohol: '7,5',
		ibu: 22,
		color: 'Ambar intenso',
		og: 1062,
		amargor: 'Bajo',
		price : 100,
		imagen : 'https://http2.mlstatic.com/cerveza-artesanal-antares-honey-x-und-nunez-D_NQ_NP_938260-MLA31131374234_062019-F.jpg',
		stock: 15,
	}];