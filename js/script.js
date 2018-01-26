

var tempBox = document.getElementById("tempBox");
var fSelector = document.getElementById("fahrenheit");
var cSelector = document.getElementById("celsius");
var submit = document.getElementById("submit");
var clear = document.getElementById("clear");
var result = document.getElementById("result");

var reset = function () {
	location.reload();
};

clear.addEventListener('click', reset, {once:true});




var input = document.forms['tempform'].elements['tempinput'].value;
var degreesFrom = parseInt(input);
console.log(degreesFrom);



var calculateFToC = function (temp) {
	var degreesTo = ((temp - 32)/1.8);
	result.innerHTML = degreesTo + "&deg;C";
	return degreesTo;
};

var calculateCToF = function (temp) {
	var newTemp = (temp * 1.8 + 32);
	return newTemp;
};



var submitTemp = function() {
	calculateFToC(degreesFrom);
};




submit.addEventListener('click', submitTemp, {once:true});





