(function(){

var propForm = {
	formulario: document.formularioContacto,
	elementos: document.formularioContacto.elements,
	error: null,
	textoError: null
}

var metForm = {
	inicio: function(){
		for(var i=0; i<propForm.elementos.length; i++){
			if(propForm.elementos[i].type == 'text' || propForm.elementos[i].type == 'email' || propForm.elementos[i].nodeName.toLowerCase() == 'textarea'){
				propForm.elementos[i].addEventListener('focus', metForm.focusInput);
				propForm.elementos[i].addEventListener('blur', metForm.focusBlur);
			}
		}
		propForm.formulario.addEventListener('submit', metForm.validar);
	},
	focusInput: function(){
		console.log('on focus');
		this.parentElement.children[1].className = 'label active';
	},
	focusBlur: function(){
		console.log('on blur');
		if(this.value == ''){
			this.parentElement.children[1].className = 'label';
		}
	},
	validar: function(e){
		for (var i = 0; i < propForm.elementos.length; i++) {
			if(propForm.elementos[i].value == ''){
				e.preventDefault();
				if(propForm.elementos[i].parentElement.children.length < 3){
					propForm.error = document.createElement('p');
					propForm.error.append('Por favor llena el campo con tu '+ propForm.elementos[i].name);
					propForm.error.className = 'error';
					propForm.elementos[i].parentElement.appendChild(propForm.error);
				}
			}else{
				if(propForm.elementos[i].parentElement.children.length >= 3){
					propForm.error = propForm.elementos[i].parentElement.getElementsByTagName('p')[0];
					propForm.elementos[i].parentElement.removeChild(propForm.error);
				}
			}
		}
	}
}

window.addEventListener('load', function(){
	metForm.inicio();
});
	
}());