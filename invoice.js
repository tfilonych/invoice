var counter;
function addInform() {
	counter++;
	var answerRow = document.createElement("div");
	answerRow.setAttribute('class', 'answerRow');
	answerRow.setAttribute('id', 'row' + counter);
	
	var valueOfProductName = document.getElementById("valueOfProductName");
	alert(enterProductName.value);
	var valueOfUnits = document.getElementById("valueOfUnits");
	var valueOfQuantity = document.getElementById("valueOfQuantity");
	var valueOfPrice = document.getElementById("valueOfPrice");
	
	var numberField = document.createElement("div");
	numberField.setAttribute('id', 'numberField');
	answerRow.appendChild(numberField);
	var wrapper = document.getElementById("wrapper");
	wrapper.appendChild(answerRow);
		
	var answerProductName = document.createElement("div");
	answerProductName.setAttribute('id', 'answerProductName');
	answerProductName.innerHTML = valueOfProductName.value;
	answerRow.appendChild(answerProductName);
	
	var answerUnits = document.createElement("div");
	answerUnits.setAttribute('id', 'answerUnits');
	answerUnits.innerHTML = valueOfUnits.value;
	answerRow.appendChild(answerUnits);
	//wrapper.appendChild(answerRow);
	
	var answerQuantity = document.createElement('div');
	answerQuantity.setAttribute('id', 'answerQuantity');
	answerQuantity.innerHTML = valueOfQuantity.value;
	answerRow.appendChild(answerQuantity);
	//wrapper.appendChild(answerRow); 
	
	var answerPrice = document.createElement("div");
	answerPrice.setAttribute('id', 'answerPrice');
	answerPrice.innerHTML = valueOfPrice.value;
	answerRow.appendChild(answerPrice);
	
	var totalAmmount = document.createElement("div");
	totalAmmount.setAttribute('id', 'totalAmmount');
	answerRow.appendChild(totalAmmount);
	//var ammount = parseInt(totalAmmount);
	totalAmmount.innerHTML = found_total_ammount(valueOfQuantity, valueOfPrice);
	
		
	
	

	
}
function found_total_ammount(a, b) {
	rez = a * b;
	return rez;
}
