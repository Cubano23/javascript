var resulta;
var random;
var ordinateur;
var user = prompt("Entre pierre, feuille ou ciseau");


var choices = ["pierre", "feuille", "ciseau"];
ordinateur = choices[Math.floor(Math.random()*3)];
random = Math.floor(Math.random()*3);
ordinateur = choices[random];





if(ordinateur == user)
{
    document.write('<p>Vous avez choisi la même chose : égalité !</p>');
}
else
{
    // Le joueur et l'ordinateur n'ont pas choisi la même chose, la bataille commence !

    switch(ordinateur)
    {
        case 'ciseau':
        if(user == 'pierre')
        {
            document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
        }
        else // player == 'feuille'
        {
            document.write('<p>La feuille est découpée par le ciseau : vous perdez !</p>');
        }
        break;

        case 'feuille':
        if(user == 'pierre')
        {
            document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
        }
        else // player == 'ciseau'
        {
            document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>');
        }
        break;

        case 'pierre':
        if(user == 'feuille')
        {
            document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
        }
        else // player == 'ciseau'
        {
            document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
        }
        break;
    }
}
