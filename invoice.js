var counter = 0;
arrayOfTotalPrice = [];
var add_panel = new AddPanel();

function addInform() {
	counter++;
	var answerRow = document.createElement("div");
	answerRow.setAttribute('class', 'answerRow');
	answerRow.setAttribute('id', 'row' + counter);
	
	var numberField = document.createElement("div");
	numberField.setAttribute('class', 'numberField');
	numberField.setAttribute('id', 'numberFieldDigit');
	answerRow.appendChild(numberField);
	var wrapper = document.getElementById("wrapper");
	wrapper.appendChild(answerRow);
	updateNumbers();
		
	var answerProductName = document.createElement("div");
	answerProductName.setAttribute('id', 'answerProductName');
	answerProductName.innerHTML = add_panel.getProductName();
	answerRow.appendChild(answerProductName);
	
	var answerUnits = document.createElement("div");
	answerUnits.setAttribute('id', 'answerUnits');
	answerUnits.innerHTML = add_panel.getUnits();
	answerRow.appendChild(answerUnits);
	//wrapper.appendChild(answerRow);
	
	var answerQuantity = document.createElement('div');
	answerQuantity.setAttribute('id', 'answerQuantity');
	answerQuantity.innerHTML = add_panel.getQuantity();
	answerRow.appendChild(answerQuantity);
	//wrapper.appendChild(answerRow); 
	
	var answerPrice = document.createElement("div");
	answerPrice.setAttribute('id', 'answerPrice');
	answerPrice.innerHTML = add_panel.getPrice();
	answerRow.appendChild(answerPrice);
	
	var totalAmmount = document.createElement("div");
	totalAmmount.setAttribute('class', 'totalAmmount');
	answerRow.appendChild(totalAmmount);
	var rowTotal = found_total_ammount(add_panel.getQuantity(), add_panel.getPrice());
	totalAmmount.innerHTML = rowTotal;
	
	var action_cell = document.createElement("div");
	action_cell.setAttribute('class', 'action_cell');
	action_cell.setAttribute('id', 'action_cell' + counter);
	answerRow.appendChild(action_cell);	
	var image_pencil = document.createElement("img");
	image_pencil.setAttribute('src', 'pencil.png');
	image_pencil.setAttribute('id', 'pencil' + counter);
	image_pencil.setAttribute('class', 'pencil');
	image_pencil.setAttribute('onclick', 'change_image(this.getAttribute("id"));');
	action_cell.appendChild(image_pencil);
	var image_trash = document.createElement("img");
	image_trash.setAttribute('src', 'trash.png');
	image_trash.setAttribute('id', 'trash' + counter);
	image_trash.setAttribute('class', 'trash');
	image_trash.setAttribute('onclick', 'deleteRow(this.getAttribute("id"));');
	action_cell.appendChild(image_trash);
	
	updateTotalPrice();
	add_panel.clearInputs();
}

function change_image(pencil_id) {
	var image_accept = document.getElementById(pencil_id);
	
	//var action_cell = document.getElementById("action_cell");
	//var image_accept = action_cell.children[0];
	image_accept.setAttribute('src', 'accept.png');
	image_accept.setAttribute('id', 'accept_img');
	
	var image_cancel = image_accept.nextSibling;
	image_cancel.setAttribute('src', 'cancel.png');
	image_cancel.setAttribute('id', 'cancel_image');
	
	editRow();
}

function editRow() {
	//change_image();
	//var image_accept = document.getElementsByClassName("trash");
	//image_accept.setAttribute('src', 'accept.png');
	//image_accept.setAttribute('id', 'accept_img');
	
	var answerProductName = document.getElementById("answerProductName");
	var editProductNameCell = document.createElement("input");
	editProductNameCell.setAttribute('type', 'text');
	editProductNameCell.setAttribute('id', 'editProductNameCell');
	editProductNameCell.value = answerProductName.innerText;
	answerProductName.innerHTML = "";
	answerProductName.appendChild(editProductNameCell);
	answerProductName.style.backgroundColor = "#F5E399";
	
	
	var answerUnits = document.getElementById("answerUnits");
	var editUnitsCell = document.createElement("select");
	editUnitsCell.setAttribute('type', 'text');
	editUnitsCell.setAttribute('id', 'editUnitsCell');
	editUnitsCell.value = answerUnits.innerText;
	answerUnits.innerHTML = "";
	answerUnits.appendChild(editUnitsCell);
	answerUnits.style.backgroundColor = "#F5E399";
	
	var answerQuantity = document.getElementById("answerQuantity");
	var editQuantityCell = document.createElement("input");
	editQuantityCell.setAttribute('type', 'text');
	editQuantityCell.setAttribute('id', 'editQuantityCell');
	editQuantityCell.value = answerQuantity.innerText;
	answerQuantity.innerHTML = "";
	answerQuantity.appendChild(editQuantityCell);
	answerQuantity.style.backgroundColor = "#F5E399";	
	
	var answerPrice = document.getElementById("answerPrice");
	var editPriceCell = document.createElement("input");
	editPriceCell.setAttribute('type', 'text');
	editPriceCell.setAttribute('id', 'editPriceCell');
	editPriceCell.value = answerPrice.innerText;
	answerPrice.innerHTML = "";
	answerPrice.appendChild(editPriceCell);
	answerPrice.style.backgroundColor = "#F5E399";
	
}

function checkInputs() {
	add_panel.makeInputsWhite();
	var err = false;
	if (add_panel.getProductName().length < 3) {
		add_panel.makeProductRed();
		err = true;
	}	
	if (isNaN(add_panel.getQuantity()) ){
		add_panel.makeQuantityRed();
		err = true;
	}
	if (isNaN(add_panel.getPrice())) {
		add_panel.makePriceRed();
		err = true;
	}
	if (!err) {
	 	addInform(); 	
	}	
}


function updateNumbers() {
	var arrayOfNumbers = document.getElementsByClassName("numberField");
	for (i=0; i<arrayOfNumbers.length; i++) {
		arrayOfNumbers[i].innerHTML = i + 1;
	}
}

function updateTotalPrice() {
	var arrayOfTotals = document.getElementsByClassName('totalAmmount');
	var sum = 0;
	for (i=0; i<arrayOfTotals.length; i++) {
		sum = sum + parseFloat(arrayOfTotals[i].innerHTML);
	}
	var totalPrice = document.getElementById("totalPrice");
	totalPrice.innerHTML = sum;
}

function found_total_ammount(quantity, price) {
	return quantity * price;
}

function deleteRow(image_id) {
	var wrapper = document.getElementById("wrapper");
	var image = document.getElementById(image_id);
	var row = image.parentNode;
	var deleteRow = row.parentNode;
	wrapper.removeChild(deleteRow);
	updateTotalPrice();
	
	updateNumbers();
	//var numberFieldDigit = document.getElementById(numberFieldDigit_id); 
//	numberFieldDigit.innerHTML = getNumber();
}
