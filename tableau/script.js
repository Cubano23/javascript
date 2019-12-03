var nombre;
var x;
var y;

nombre = parseInt(prompt("Veuillez entre un nombre:"));
// table
document.write("<table class='tableau' >")
for(x = 1; x <= nombre; x++ ){
	// <tr>
	document.write("<tr class='tableau'>") 
	for(y = 1; y <= nombre; y++){
		// a la place des div, <td>

		document.write("<td  class='tableau'> "  + x*y + "</td>");
	}
	// a la place du br, </tr>
	document.write("</tr>");
}

// /table
document.write("</table>")
