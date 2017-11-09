/**
 * Created by Александр on 13.09.2017.
 */
 'use strict';
 class Category {
 	constructor(catId, name){
 		this.Id=catId;
 		this.name=name;
 	}
 	get Id(nomber) {
 		return this.Id;
 	}
 	get name(nomber) {
 		return this.name;
 	}
 	set Id(newValue) {
 		this.Id=newValue;
 	}
 	set name(newValue) {
 		this.name=newValue;
 	}
 };