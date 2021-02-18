(function(){

var propIconos = {
	play: document.getElementsByClassName('icono-play'),
	close: document.getElementsByClassName('icono-close'),
	github: document.getElementsByClassName('icono-github'),
	whatsapp: document.getElementsByClassName('icono-whatsapp'),
	linkedin: document.getElementsByClassName('icono-linkedin'),
	mail: document.getElementsByClassName('icono-mail')
}

var metIconos = {
	inicio: function(){
		for(i=0; i<propIconos.play.length; i++){
			propIconos.play[i].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 21.2617 20.3008 L 21.2617 35.6523 C 21.2617 36.7305 22.4335 37.1992 23.4648 36.5898 L 36.0039 29.1836 C 36.9179 28.6211 36.8944 27.3320 36.0039 26.8164 L 23.4648 19.3633 C 22.5039 18.8008 21.2617 19.2461 21.2617 20.3008 Z"/></svg>';
		}
		for(i=0; i<propIconos.github.length; i++){
			propIconos.github[i].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 56 56"><path fill="#161514" fill-rule="evenodd" d="M0,25.0007674 C0,36.0462261 7.1625894,45.4157586 17.0969029,48.7215691 C18.3477086,48.9517788 18.8035237,48.1798091 18.8035237,47.5168053 C18.8035237,46.9243992 18.7820375,45.3512999 18.7697597,43.2656005 C11.8158937,44.7757758 10.3486909,39.9137481 10.3486909,39.9137481 C9.21145523,37.0253845 7.57236256,36.2564842 7.57236256,36.2564842 C5.30249547,34.706406 7.74425243,34.7371006 7.74425243,34.7371006 C10.2535376,34.9135946 11.5734062,37.3139139 11.5734062,37.3139139 C13.8033703,41.1338592 17.4253353,40.0303877 18.8495657,39.3904049 C19.0767059,37.7758679 19.7228276,36.6739311 20.4364775,36.0492956 C14.8853556,35.4185211 9.04877375,33.2729672 9.04877375,23.6931766 C9.04877375,20.9644249 10.0233279,18.7313914 11.6225176,16.9848676 C11.3646828,16.3525584 10.5067682,13.8095092 11.8680745,10.3686424 C11.8680745,10.3686424 13.9660518,9.69643022 18.7421345,12.9316431 C20.73575,12.3760705 22.875165,12.0998189 25.0007674,12.0890758 C27.124835,12.0998189 29.2627152,12.3760705 31.2594002,12.9316431 C36.0324135,9.69643022 38.1273213,10.3686424 38.1273213,10.3686424 C39.4916971,13.8095092 38.6337825,16.3525584 38.3774824,16.9848676 C39.9797416,18.7313914 40.9466221,20.9644249 40.9466221,23.6931766 C40.9466221,33.2975229 35.1008318,35.4108475 29.5328279,36.0293441 C30.4291108,36.8013137 31.2287056,38.3268363 31.2287056,40.6596274 C31.2287056,44.0007367 31.198011,46.697259 31.198011,47.5168053 C31.198011,48.185948 31.6492219,48.9640566 32.9169097,48.7200344 C42.8435495,45.4065502 50,36.0431566 50,25.0007674 C50,11.1927929 38.8056724,0 24.9976979,0 C11.1943276,0 0,11.1927929 0,25.0007674 Z" transform="translate(3 3)"/></svg>';
		}
		for(i=0; i<propIconos.close.length; i++){
			propIconos.close[i].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 18.1913 35.9336 C 18.1913 36.9649 19.0117 37.8086 20.0429 37.8086 C 20.5585 37.8086 21.0273 37.6211 21.3554 37.2696 L 27.9882 30.6133 L 34.6444 37.2696 C 34.9726 37.5977 35.4179 37.8086 35.9335 37.8086 C 36.9648 37.8086 37.8085 36.9649 37.8085 35.9336 C 37.8085 35.3945 37.5976 34.9727 37.2460 34.6211 L 30.6366 27.9883 L 37.2695 21.3320 C 37.6444 20.9571 37.8320 20.5352 37.8320 20.0430 C 37.8320 19.0118 37.0117 18.1680 35.9570 18.1680 C 35.4882 18.1680 35.0898 18.3555 34.7148 18.7305 L 27.9882 25.4102 L 21.3085 18.7539 C 20.9570 18.4258 20.5585 18.2149 20.0429 18.2149 C 19.0351 18.2149 18.1913 19.0352 18.1913 20.0664 C 18.1913 20.5586 18.4023 21.0039 18.7304 21.3555 L 25.3632 27.9883 L 18.7304 34.6445 C 18.4023 34.9961 18.1913 35.4180 18.1913 35.9336 Z"/></svg>'
		}
		for(i=0; i<propIconos.whatsapp.length; i++){
			propIconos.whatsapp[i].innerHTML = '<svg height="22pt" viewBox="0 0 512 512" width="22pt" xmlns="http://www.w3.org/2000/svg"><path d="m435.921875 74.351562c-48.097656-47.917968-112.082031-74.3242182-180.179687-74.351562-67.945313 0-132.03125 26.382812-180.445313 74.289062-48.5 47.988282-75.234375 111.761719-75.296875 179.339844v.078125.046875c.0078125 40.902344 10.753906 82.164063 31.152344 119.828125l-30.453125 138.417969 140.011719-31.847656c35.460937 17.871094 75.027343 27.292968 114.933593 27.308594h.101563c67.933594 0 132.019531-26.386719 180.441406-74.296876 48.542969-48.027343 75.289062-111.71875 75.320312-179.339843.019532-67.144531-26.820312-130.882813-75.585937-179.472657zm-180.179687 393.148438h-.089844c-35.832032-.015625-71.335938-9.011719-102.667969-26.023438l-6.621094-3.59375-93.101562 21.175782 20.222656-91.90625-3.898437-6.722656c-19.382813-33.425782-29.625-70.324219-29.625-106.71875.074218-117.800782 96.863281-213.75 215.773437-213.75 57.445313.023437 111.421875 22.292968 151.984375 62.699218 41.175781 41.03125 63.84375 94.710938 63.824219 151.152344-.046875 117.828125-96.855469 213.6875-215.800781 213.6875zm0 0"/><path d="m186.152344 141.863281h-11.210938c-3.902344 0-10.238281 1.460938-15.597656 7.292969-5.363281 5.835938-20.476562 19.941406-20.476562 48.628906s20.964843 56.40625 23.886718 60.300782c2.925782 3.890624 40.46875 64.640624 99.929688 88.011718 49.417968 19.421875 59.476562 15.558594 70.199218 14.585938 10.726563-.96875 34.613282-14.101563 39.488282-27.714844s4.875-25.285156 3.414062-27.722656c-1.464844-2.429688-5.367187-3.886719-11.214844-6.800782-5.851562-2.917968-34.523437-17.261718-39.886718-19.210937-5.363282-1.941406-9.261719-2.914063-13.164063 2.925781-3.902343 5.828125-15.390625 19.3125-18.804687 23.203125-3.410156 3.894531-6.824219 4.382813-12.675782 1.464844-5.851562-2.925781-24.5-9.191406-46.847656-29.050781-17.394531-15.457032-29.464844-35.167969-32.878906-41.003906-3.410156-5.832032-.363281-8.988282 2.570312-11.898438 2.628907-2.609375 6.179688-6.179688 9.105469-9.582031 2.921875-3.40625 3.753907-5.835938 5.707031-9.726563 1.949219-3.890625.972657-7.296875-.488281-10.210937-1.464843-2.917969-12.691406-31.75-17.894531-43.28125h.003906c-4.382812-9.710938-8.996094-10.039063-13.164062-10.210938zm0 0"/></svg>';
		}
		for(i=0; i<propIconos.linkedin.length; i++){
			propIconos.linkedin[i].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 56 56"><path fill="#1A1919" fill-rule="evenodd" d="M42.608128,42.6067391 L35.1926442,42.6067391 L35.1926442,31.0022501 C35.1926442,28.2355065 35.1454207,24.6756854 31.3397594,24.6756854 C27.47993,24.6756854 26.8910248,27.691047 26.8910248,30.8050224 L26.8910248,42.6067391 L19.4838746,42.6067391 L19.4838746,18.7449651 L26.5924053,18.7449651 L26.5924053,22.0075558 L26.695186,22.0075558 C27.6841023,20.1311148 30.103614,18.153282 33.7106586,18.153282 C41.2205895,18.153282 42.608128,23.093697 42.608128,29.5202645 L42.608128,42.6067391 L42.608128,42.6067391 Z M11.1225312,15.4851524 C8.74052057,15.4851524 6.81963388,13.55871 6.81963388,11.183644 C6.81963388,8.80996694 8.74052057,6.88352454 11.1225312,6.88352454 C13.4948193,6.88352454 15.4198728,8.80996694 15.4198728,11.183644 C15.4198728,13.55871 13.4948193,15.4851524 11.1225312,15.4851524 L11.1225312,15.4851524 Z M7.40853913,42.6067391 L14.8323565,42.6067391 L14.8323565,18.7449651 L7.40853913,18.7449651 L7.40853913,42.6067391 Z M46.3012861,0 L3.68760243,0 C1.65282369,0 0,1.61393372 0,3.60565571 L0,46.3929554 C0,48.3846774 1.65282369,50.0013889 3.68760243,50.0013889 L46.3012861,50.0013889 C48.3402317,50.0013889 50,48.3846774 50,46.3929554 L50,3.60565571 C50,1.61393372 48.3402317,0 46.3012861,0 L46.3012861,0 Z" transform="translate(3 3)"/></svg>';
		}
		for(i=0; i<propIconos.mail.length; i++){
			propIconos.mail[i].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 56 56"><path d="M 9.4843 48.1914 L 47.2184 48.1914 C 51.4376 48.1914 53.8751 45.7539 53.8751 40.9258 L 53.8751 15.0508 C 53.8751 10.2461 51.4141 7.8086 46.5157 7.8086 L 8.7812 7.8086 C 4.5858 7.8086 2.1249 10.2227 2.1249 15.0508 L 2.1249 40.9258 C 2.1249 45.7773 4.6093 48.1914 9.4843 48.1914 Z M 25.2109 29.1836 L 7.5155 11.7227 C 8.0312 11.5117 8.6405 11.3945 9.3671 11.3945 L 46.6564 11.3945 C 47.3826 11.3945 48.0157 11.5117 48.5548 11.7696 L 30.8827 29.1836 C 29.8749 30.1914 28.9843 30.6367 28.0468 30.6367 C 27.1093 30.6367 26.2187 30.1914 25.2109 29.1836 Z M 5.7109 40.9258 L 5.7109 15.0508 C 5.7109 14.8867 5.7109 14.9570 5.7109 14.8164 L 19.1874 28.0352 L 5.7343 41.3242 C 5.7109 41.2070 5.7109 41.0664 5.7109 40.9258 Z M 50.2890 15.0742 L 50.2890 40.9492 C 50.2890 41.0430 50.2890 41.1602 50.2890 41.2539 L 36.9062 28.0352 L 50.2890 14.8867 C 50.2890 15.0742 50.2890 15.0742 50.2890 15.0742 Z M 9.3671 44.6055 C 8.6874 44.6055 8.1249 44.5117 7.6327 44.3008 L 21.6484 30.4492 L 23.1718 31.9492 C 24.8124 33.5664 26.3827 34.2461 28.0468 34.2461 C 29.6874 34.2461 31.2812 33.5664 32.9218 31.9492 L 34.4452 30.4492 L 48.4376 44.2773 C 47.9452 44.5117 47.3360 44.6055 46.6564 44.6055 Z"/></svg>';
		}
	},
}

window.addEventListener('load', function(){
	metIconos.inicio();
});

}());