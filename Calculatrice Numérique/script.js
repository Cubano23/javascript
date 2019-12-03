/*JS1.2 - Calculatrice Numérique
Énoncé
L'utilisateur saisit deux nombres ainsi que l'opération mathématique souhaitée, le résultat de cette opération s'affiche en HTML.

Les opérations mathématiques acceptées sont :

L'addition : a + b
La soustraction : a - b
La multiplication : a * b
La division : a / b
La puissance : a ^ b (exemple : 3 ^ 2 = 9)
Détails
Il faut afficher une erreur en cas d'opération mathématique inconnue.
Les nombres saisis peuvent être à virgule.
L'utilisateur doit pouvoir autant saisir le nom de l'opération que l'opérateur correspondant : + - * / ^
Il faut répéter le moins de code possible, notamment le code d'affichage du résultat.
Rappels
La division par zéro n'existe pas, il faut donc gérer ce cas...*/

//declaration de variable

var numero_1;
var numero_2;
var operateur;
var total;



numero_1 = parseFloat(prompt("Entre un valeur:"));
operateur = prompt("Veuillez choisir un operateur: +, -, /, * ou ^:");
numero_2 = parseFloat(prompt("Entre un deuxieme valeur: "));

if(numero_2 == 0 && operateur == "/" && operateur == "diviser"){

	alert("Atention vous pouvez pas diviser par 0!")
}
else{

switch(operateur){

	case "+":
	case "plus":
		total = numero_1 + numero_2;
		break;


	case "-":
	case "moin":
		total = numero_1 - numero_2;
		break;


	case "/":
	case "diviser":
		total = numero_1 / numero_2;
		break;


	case "*":
	case "multipliquer":
		total = numero_1 * numero_2;
		break;

		case "^":
	case "puissance":
		total = Math.pow(numero_1,numero_2);
		break;

		default:
		alert("erreur d'operateur");




	
}

document.write("<br><br> Total: " + total);	
}