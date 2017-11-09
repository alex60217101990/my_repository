"use strict";
document.forms[0].addEventListener("submit", validateForm);
function validateForm(e) {
	let messageDiv = document.querySelector('.message');
	let messText = "";
	for(let i=0; i<this.elements.length-1; i++){
		if(this.elements[i].value == "" || this.elements[i].valu ){
			messText += "Поле "+ this.elements[i].name +" не должно быть пустым<br>";
		}	
	}
	if(this.elements['Password'].value.length<6){
		messText += '<span style="color: red;">Поле '+ this.elements['Password'].name 
	+" должно быть больше 6 символов</span><br>";}
	if (this.elements['Password'].value!==this.elements['Password_Confirmation'].value) {
		messText += '<span style="color: blue;">Поле '+ this.elements['Password'].name + ' поле '+
		 this.elements['Password_Confirmation'].name + " не совпадают.</span><br>"; }
	if (this.elements['Phone'].value.length!=13){
		messText += '<span style="color: grey;">Поле '+ this.elements['Phone'].name 
	+" недостаточной длинны.</span><br>";
	}
	if(this.elements['Phone'].value[0]!='+' ||
		this.elements['Phone'].value[1]!='3' || this.elements['Phone'].value[2]!='8' ||
		this.elements['Phone'].value[3]!=0) {
		messText += '<span style="color: green;">Поле '+ this.elements['Phone'].name 
	+" введено с ошибками.</span><br>";
	}
	if(messText.length > 0){
		messageDiv.innerHTML = messText;

		e.preventDefault();

	}
}
	console.dir(document.forms[0]);

	
