(function(){

var propScroll = {
	posicion: window.pageYOffset,
	scrollSuave: document.getElementsByClassName('scroll-suave'),
	destino: null,
	distancia: null,
	intervalo: null
}

var metScroll = {
	inicio: function(){
		for (var i = 0; i < propScroll.scrollSuave.length; i++) {
			propScroll.scrollSuave[i].addEventListener('click', metScroll.moverse);
		}
	},
	moverse: function(e){
		e.preventDefault();
		clearInterval(propScroll.intervalo);
		propScroll.destino = this.getAttribute('href');
		propScroll.distancia = document.querySelector(propScroll.destino).offsetTop;
		propScroll.posicion = window.pageYOffset;
		propScroll.intervalo = setInterval(function(){
			if(propScroll.posicion < propScroll.distancia){
				propScroll.posicion += 25;
				if(propScroll.posicion >= propScroll.distancia){
					clearInterval(propScroll.intervalo);
				}
			}else if(propScroll.posicion > propScroll.distancia){
				propScroll.posicion -= 25;
				if(propScroll.posicion <= propScroll.distancia){
					clearInterval(propScroll.intervalo);
				}
			}else{
				return;
			}
			window.scrollTo(0, propScroll.posicion);
		}, 15);
	}
}

window.addEventListener('load', function(){
	metScroll.inicio();
});

}());