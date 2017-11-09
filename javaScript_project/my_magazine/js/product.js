/**
 * Created by Александр on 13.09.2017.
 */
 'use strict';
 class Product extends Category{
	constructor(name, price, Category){
    this.name = name;
    this.price = price;
    this.catId=Category;
	}
};