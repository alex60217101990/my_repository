"use strict";
document.forms[0].addEventListener("submit", validateForm);
function validateForm(e) {
	let messageDiv = document.querySelector('.message');
	let messText = "";
	for(let i=0; i<this.elements.length; i++){
		if(this.elements[i].value == ""){
			messText += "Поле "+ this.elements[i].name + " не должно быть пустым<br>";
		}
	}
	if(this.elements['password'].value.length < 6){
		messText += "Поле "+ this.elements['password'].name + " должно быть более 6 симвлов<br>";
	}
	if(this.elements['password'].value.length < 6){
		messText += "Поле "+ this.elements['password'].name + " должно быть более 6 симвлов<br>";
	}
	if(this.elements['password'].value === this.elements['Password Confirmation'].value ){
		messText += "Поле "+ this.elements['password'].name + " должно быть более 6 симвлов<br>";
	}

	if(messText.length > 0){
		messageDiv.innerHTML = messText;

		e.preventDefault();

	}
}