var dragon;
var chevalier;
var random;
var pvDragon = 150;
var pvChevalier = 150;
var de = [1,2,3,4,5,6];









function jouer(){



	chevalier = de[Math.floor(Math.random()*6)];
    random = Math.floor(Math.random()*6);
    chevalier = de[random];   


	dragon = de[Math.floor(Math.random()*6)];
    random = Math.floor(Math.random()*6);
    dragon = de[random];   

    if(dragon == chevalier)
    	console.log("egalite! " + dragon +" = "+chevalier);
    else if(dragon > chevalier){
    	console.log("le dragon est plus fort "+dragon);
    	document.write("<h1> Dragon gagné!</h1><br>");
		document.write("<img src='dragon.png' width=100 heigth=100><br>");
		document.write(" <button type='button' onclick='jouer();'>Jouer</button>");
    	
    	pvChevalier -= 20;
    	console.log("pv du chevalier: "+ pvChevalier);
    }
    else{
    	console.log("le chevalier est plus fort "+chevalier);
    	document.write("<h1> Chevalier gagné!</h1><br>");
		document.write("<img src='chevalier.jpg' width=100 heigth=100><br>");
		document.write(" <button type='button' onclick='jouer();'>Jouer</button>");
    	
    	pvDragon -= 20;
    	console.log("pv du dragon: "+ pvDragon);
}



}


 




