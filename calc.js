var addOne = document.getElementById("add-one");
var addTwo = document.getElementById("add-two");

var subOne = document.getElementById("sub-one");
var subTwo = document.getElementById("sub-two");

var multOne = document.getElementById("mult-one");
var multTwo = document.getElementById("mult-two");

var divOne = document.getElementById("div-one");
var divTwo = document.getElementById("div-two");

var addSum = document.getElementById("add-sum");
var subSum = document.getElementById("sub-sum");
var multSum = document.getElementById("mult-sum");
var divSum = document.getElementById("div-sum");

addOne.addEventListener("input", add);
addTwo.addEventListener("input", add);

subOne.addEventListener("input", subtract);
subTwo.addEventListener("input", subtract);

multOne.addEventListener("input", multiply);
multTwo.addEventListener("input", multiply);

divOne.addEventListener("input", div);
divTwo.addEventListener("input", div);
	
	function add() {
	var one = parseFloat(addOne.value) || 0;
	var two = parseFloat(addTwo.value) || 0;
	addSum.innerHTML = one+two;
}

function subtract() {
	var one = parseFloat(subOne.value) || 0;
	var two = parseFloat(subTwo.value) || 0;
	subSum.innerHTML = one-two;
}

function multiply() {
	var one = parseFloat(multOne.value) || 0;
	var two = parseFloat(multTwo.value) || 0;
	multSum.innerHTML = one*two;
}

function div() {
	var one = parseFloat(divOne.value) || 0;
	var two = parseFloat(divTwo.value) || 0;
	divSum.innerHTML = one/two;
}