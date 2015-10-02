document.addEventListener("DOMContentLoaded", init);  

var lr = null;
var sr = null;

function init(){
	lr = document.querySelector('.long-rect');
	sr = document.querySelector('.short-rect');
	lr.addEventListener("mouseover",mouseoverfunc);
	lr.addEventListener("mouseout",mouseoutfunc);
}
	
function mouseoverfunc(){
	sr.innerHTML = "mouse is over";
}

function mouseoutfunc(){
	sr.innerHTML = "mouse out";
	sr.addEventListener("click",openboxfunc);
}

function openboxfunc(){
alert("click");	
}