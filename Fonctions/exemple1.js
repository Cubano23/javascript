'use strict';

/*
 * Lorsque le code devient trop long et répétitif il est possible de l'organiser en petites unités
 * que l'on appelle des fonctions, qui vont s'occuper d'une tâche précise ou de réaliser un calcul.
 */
function sayHello()
{
    document.write('<p>Bonjour à toutes et à tous !</p>');
}
function nomPrenom(){
	document.write("Bonjour je m'appelle 'Bruno'");
}



// (...)

// Appel de la fonction.
sayHello();

// Nouvel appel de la fonction.
sayHello();

//appel de la fonction nomPrenom()
nomPrenom();