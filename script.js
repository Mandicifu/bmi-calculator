window.onload = start;

function start () {
  var btnCalculate = document.getElementById("btnCalculate");
  btnCalculate.addEventListener("click", clickBtnCalculate);
}

function clickBtnCalculate() {
	var txtWeight = document.getElementById("txtWeight");
	var weight = txtWeight.value;

	var txtHeight = document.getElementById("txtHeight");
	var height = txtHeight.value;


var imc = weight / (height * height);
alert("Your BMI is: " + imc);
}
