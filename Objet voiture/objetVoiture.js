/*Énoncé
Créer puis afficher en HTML un objet représentant une voiture :

La marque de la voiture
Son année de fabrication
Sa date d'achat
La liste des passagers (au moins 2), avec le prénom de chacun des passagers*/

//declaration de variable

var voiture = new Object();
voiture.passagers = Array();
voiture.marque = "renault";
voiture.annee = "2017";
voiture.dateAchat = new Date("2017-05-13") ;
voiture.passagers[0] = "Soares";
voiture.passagers[1] = "Pati";

var afficheVoiture = document.write("<p> Marque:  " + voiture.marque +"</p>" + "<p >Année:  " + voiture.annee +"</p>"
	+ "<p >Date d'achat:  " + voiture.dateAchat.toDateString() +"</p>" + "<p >Passager 1 :  " + voiture.passagers[0] +"</p>" + "<p> Passager 2 :  " + voiture.passagers[1] +"</p>")





