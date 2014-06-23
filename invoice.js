var counter = 0;
function addInform() {
	counter++;
	var answerRow = document.createElement("div");
	answerRow.setAttribute('class', 'answerRow');
	answerRow.setAttribute('id', 'row' + counter);
	
	var final = document.createElement("div");
	final.setAttribute('id', 'final');
	var finalSum = document.getElementById("finalSum");
	finalSum.appendChild(final);
	
	var productNameInput = document.getElementById("valueOfProductName");
	var unitsInput = document.getElementById("valueOfUnits");
	var quantityInput = document.getElementById("valueOfQuantity");
	var priceInput = document.getElementById("valueOfPrice");
	
	var numberField = document.createElement("div");
	numberField.setAttribute('id', 'numberField');
	numberField.innerHTML = counter;
	answerRow.appendChild(numberField);
	var wrapper = document.getElementById("wrapper");
	wrapper.appendChild(answerRow);
		
	var answerProductName = document.createElement("div");
	answerProductName.setAttribute('id', 'answerProductName');
	answerProductName.innerHTML = productNameInput.value;
	answerRow.appendChild(answerProductName);
	
	var answerUnits = document.createElement("div");
	answerUnits.setAttribute('id', 'answerUnits');
	answerUnits.innerHTML = unitsInput.value;
	answerRow.appendChild(answerUnits);
	//wrapper.appendChild(answerRow);
	
	var answerQuantity = document.createElement('div');
	answerQuantity.setAttribute('id', 'answerQuantity');
	answerQuantity.innerHTML = quantityInput.value;
	answerRow.appendChild(answerQuantity);
	//wrapper.appendChild(answerRow); 
	
	var answerPrice = document.createElement("div");
	answerPrice.setAttribute('id', 'answerPrice');
	answerPrice.innerHTML = priceInput.value;
	answerRow.appendChild(answerPrice);
	
	var totalAmmount = document.createElement("div");
	totalAmmount.setAttribute('id', 'totalAmmount');
	answerRow.appendChild(totalAmmount);
	//var ammount = parseInt(totalAmmount);
	totalAmmount.innerHTML = found_total_ammount(quantityInput.value, priceInput.value);
	
	var action_cell = document.createElement("div");
	action_cell.setAttribute('id', 'action_cell');
	answerRow.appendChild(action_cell);	
	var image_pencil = document.createElement("img");
	image_pencil.setAttribute('src', 'pencil.png');
	image_pencil.setAttribute('id', 'pencil' + counter);
	image_pencil.setAttribute('class', 'pencil');
	action_cell.appendChild(image_pencil);
	var image_trash = document.createElement("img");
	image_trash.setAttribute('src', 'trash.png');
	image_trash.setAttribute('id', 'trash' + counter);
	image_trash.setAttribute('class', 'trash');
	action_cell.appendChild(image_trash);
		
}

function found_total_ammount(quantity, price) {
	return quantity * price;
}


