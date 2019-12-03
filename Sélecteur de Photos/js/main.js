
'use strict';
// récupération d'un tableau de tout les li
var selectedPhoto = document.querySelectorAll('.li-default li');
var affiche = document.getElementById('p');


// fais une boucle sur ce tableau et un addEventListener a chaque element du tableau
for(var i = 0; i < selectedPhoto.length; i++ ){

selectedPhoto[i].addEventListener('click',function (){
	this.classList.toggle('li-selected');
	

var controle = document.querySelectorAll('.li-selected').length;
affiche.innerHTML = ("Vous avez selectione " + "<span>"+controle+"</span>"+" photo(s).")

});


}







