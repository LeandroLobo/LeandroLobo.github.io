(function(){

var propMenu = {
	posicion: window.pageYOffset,
	btn: document.getElementById('btn-menu'),
	enlaces: null,
	lista: document.getElementById('lista-menu'),
	limite: document.getElementById('portafolio').offsetTop
}

var metMenu = {
	inicio: function(){
		window.addEventListener('scroll', metMenu.ocultar);
		propMenu.btn.addEventListener('click', metMenu.abrir);
		propMenu.lista = document.querySelector('#lista-menu');
		propMenu.enlaces = propMenu.lista.querySelectorAll('a');
		propMenu.enlaces.forEach(x=>{
			x.addEventListener('click', metMenu.cerrar);
		})
	},
	ocultar: function(){
		propMenu.posicion = window.pageYOffset;
		if(propMenu.posicion >= propMenu.limite-40){
			propMenu.btn.style.visibility = 'visible';
			propMenu.btn.className = 'btn-normal';
		}else{
			propMenu.btn.style.visibility = 'hidden';
			propMenu.btn.className = 'btn-oculto';
		}
	},
	abrir: function(){
		propMenu.lista.className = 'lista-visible';
		propMenu.btn.className = 'btn-oculto';
		window.removeEventListener('scroll', metMenu.ocultar);
	},
	cerrar: function(){
		propMenu.lista.className = 'lista-oculta';
		propMenu.btn.className = 'btn-normal';
		window.addEventListener('scroll', metMenu.ocultar);
		propMenu.posicion = window.pageYOffset;
		if(propMenu.posicion < propMenu.limite-40){
			propMenu.btn.style.visibility = 'hidden';
			propMenu.btn.className = 'btn-oculto';
		}
	}
}

window.addEventListener('load', function(){
	metMenu.inicio();
});

}());