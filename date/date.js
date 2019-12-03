// Déclaration de  variables.


var jourSemaine = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");


var tMois = new Array("Janvier", "fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre",
	"Octobre", "Novembre", "Decembre");

var date = new Date();
var nJour = date.getDate();
var jour = date.getDay();
var jourMois = date.getMonth();
var an = date.getFullYear();

//Affiche la date

document.write("Aujourd'hui est :" +" " + jourSemaine[jour] + " " + nJour + " " +tMois[jourMois] + " "+ an);













