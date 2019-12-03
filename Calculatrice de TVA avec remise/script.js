/*Énoncé
L'utilisateur saisit un montant HT et s'il le souhaite une remise, le résultat TTC s'affiche en HTML.

Détails
L'utilisateur doit pouvoir répondre oui ou yes à la demande de remise.
La saisie de la remise se fait en pourcentage, un nombre à virgule donc, et elle s'applique sur le montant HT autrement il y a fraude à la TVA ;-)
Si une remise est appliquée, il faut à la fin réafficher le pourcentage de remise
S'il n'y a pas de remise il faut à la fin afficher "Aucune remise n'a été appliquée"
Il faut répéter le moins de code possible, notamment il ne faut pas répéter le calcul du montant TTC final.*/


const tva = 20;
var montantRemise
var montantHT = prompt("Entre un montant d'achat:");
var remise = prompt("Est ce que voullez vous une remise? oui ou non?");

montantHT = parseInt(montantHT); 


if(remise == "oui" || remise == "yes" ){

montantRemise = montantHT * 0.2;
montantHT = montantHT - montantRemise;



document.write("vous avez une remise de :" + montantRemise );

var montantTVA = montantHT * tva / 100;
var montantTTC = montantHT + montantTVA;

document.write("</br>"+montantHT);

document.write("</br>"+montantTVA);

document.write("</br>"+montantTTC );

}
if(remise == 'oui' || remise == 'yes')
{
    document.write('<p>Une remise de ' + montantRemise + '% a été appliquée sur le montant HT.</p>');
}
else
{
    document.write("<p>Aucune remise n'a été appliquée.</p>");
}








