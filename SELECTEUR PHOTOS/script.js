'use strict'; 

var divTest = document.getElementById("div-1");
var btn = document.getElementById("btn-toggle");


btn.addEventListener('click',clickBtn)

divTest.addEventListener('mouseover',mouse);

divTest.addEventListener('dblclick',doubleClick);

divTest.addEventListener('mouseleave',out);




function clickBtn(){
	divTest.classList.toggle('hide');

}
function mouse(){
	divTest.classList.add('colorRed');
	divTest.classList.remove('colorLimegreen');
	
}

function doubleClick(){
	divTest.classList.remove('colorRed');
	divTest.classList.add('colorLimegreen');

}
function out(){
	divTest.classList.remove('colorLimegreen');
	divTest.classList.remove('colorRed');


}

