function returnInt(){
	return 16;

}
function multiply(nombre){
	return nombre*3;

}


function addZ(chaine){
	return chaine+"Z";

}

function biggest(n1,n2){
	if(n1 > n2){
		return n1;
	}
	else{
		return n2;
	}
}

function bigWord(chaine1,chaine2) {
	if(chaine1.length == chaine2.length){
		return chaine1;
	}
	else if(chaine1.length > chaine2.length){
		return chaine1;
	}
	else
		return chaine2;
	
}



function prime(salaire,booleen){
	if(booleen == true){
		return "£"+ (salaire*10)

	}
	else
		return "£"+salaire;
}

function populate(nombre){
	tableau = new Array();
	for(var i = 0; i <nombre; i++){
		tableau[i] = i;
	}
	return tableau;
}

function  nbDiviseur (nombre){
	

}


