'use strict';   // Mode strict du JavaScript
/*///DONNEES////////*/
var barreUtils;
var nav;
var back;
var play;
var next;
var random;
var diapoRandom;
var ordinateur;
var i = 0;
var temps;
var ImageCnt = 0;
var mesImages = new Array("images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg");


/*///////////////Functions/////////////////////////*/
function onClickLink(){	nav.classList.toggle('hide');}


function onClickPrecedent(){

	clearTimeout(temps);//pour arreter le play ****
	ImageCnt=ImageCnt-1;
		if(ImageCnt < 0)
		{	
		    ImageCnt=5;
			document.getElementById("carre-slider").src = mesImages[ImageCnt];
			console.log(mesImages[ImageCnt]);
	}	
		else{
					
    		document.getElementById("carre-slider").src = mesImages[ImageCnt];
    		console.log(mesImages[ImageCnt]);
    }
}



function onClickPlay(){   	 

     document.getElementById('carre-slider').src = mesImages[i];
     i++;
     temps = setTimeout(onClickPlay,1000); //1000 pour changer d'images toutes les 1 secondes.

     if(i > 6)
     {
     	i = 0;
     	document.getElementById("carre-slider").src = mesImages[i];
     	
     }
 
}



function onClickSuivant(){

		clearTimeout(temps);//pour arreter le diaporama ****
		ImageCnt++;
		if(ImageCnt>5)
		{
			 ImageCnt=0;
			 document.getElementById("carre-slider").src = mesImages[ImageCnt];
			
		}
		else
		{
	
    		document.getElementById("carre-slider").src = mesImages[ImageCnt];
   	    }
    	
		
	
}


function onClickRandom(){

	clearTimeout(temps);//pour arreter le play ****
	ordinateur = mesImages[Math.floor(Math.random()*6)];
	diapoRandom = Math.floor(Math.random()*6);
	ordinateur = mesImages[diapoRandom];
	 document.getElementById('carre-slider').src = mesImages[diapoRandom];
    
     temps = setTimeout(onClickPlay,1000); //1000 pour changer d'images toutes les 1 secondes.

  
}





/*/////CODE PRINCIPAL*/

barreUtils = document.getElementById('cacher-afficher-utils');
barreUtils.addEventListener('click', onClickLink);
nav = document.querySelector('.nav-bar');

back = document.getElementById('back');
back.addEventListener('click', onClickPrecedent);

play = document.getElementById('play');
play.addEventListener('click', onClickPlay);

next = document.getElementById('next');
next.addEventListener('click', onClickSuivant);

random = document.getElementById('random');
random.addEventListener('click', onClickRandom);






