const tva =20;

var montantHT = prompt("Entre un montant d'achat:");

montantHT = parseInt(montantHT); 

var montantTVA = montantHT * tva / 100;

var montantTTC = montantHT + montantTVA;

document.write
(
    '<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>'
);
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');