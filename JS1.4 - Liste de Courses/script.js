var courses = [];
var produit;
var index;


function addProduit(nom_du_produit)
{

	courses.push(nom_du_produit);
}

function suppTout(){

	courses = [];
	document.write("<h1> liste effacée !!!!! </h1>");

}
function deleteOne(nom_du_produit){

	index = courses.indexOf(nom_du_produit);
	courses.splice(index,1);
}



/*for(var i = 0; i < 4 ;i++){

produit = prompt("veuillez entre un produit");
addProduit(produit);


}
*/
addProduit("cafe");
addProduit("riz");

deleteOne("riz");





document.write("<table>")
document.write("<tr>");

for(var i = 0; i < courses.length; i++){

	document.write("<td>")
	document.write(courses[i] + "<br>");
	document.write("</td>");
}
document.write("</tr>");
document.write("</table>");


