'use strict';

// Pour communiquer avec l'extérieur une fonction peut aussi avoir des arguments en entrée...
function sayHello(firstName, lastName)
{
    document.write('<p>Bonjour ' + firstName + ' ' + lastName + ' !</p>');
}

function votreAge(age){

	document.write("Vous avez " + age + " ans");
}



// (...)

// Appel de la fonction en indiquant autant de paramètres que la fonction possède.
sayHello('Marie', 'MAYERS');

// Nouvel appel de la fonction.
sayHello('Ailton', 'CHRISTIAN');

votreAge(39);