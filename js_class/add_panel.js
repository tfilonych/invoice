/**
 * @author Tanya Filonych
 */

function AddPanel() {}

AddPanel.prototype.getProductName = function(){
	return this.productInput().value;
};

AddPanel.prototype.getUnits = function(){
	return this.unitsSelect().value;
};

AddPanel.prototype.getQuantity = function(){
	return parseFloat(this.quantityInput().value);
};

AddPanel.prototype.getPrice = function(){
	return parseFloat(this.priceInput().value);
};

AddPanel.prototype.makeInputsWhite = function(){
	this.productInput().style.backgroundColor = "white";
	this.quantityInput().style.backgroundColor = "white";
	this.priceInput().style.backgroundColor = "white";
};

AddPanel.prototype.makeProductRed = function(){
	this.productInput().style.backgroundColor = "red";
};

AddPanel.prototype.makeQuantityRed = function(){
	this.quantityInput().style.backgroundColor = "red";
};

AddPanel.prototype.makePriceRed = function(){
	this.priceInput().style.backgroundColor = "red";
};

AddPanel.prototype.clearInputs = function(){
	this.productInput().value = "";
	this.unitsSelect().value = "pcs";
	this.quantityInput().value = "";
	this.priceInput().value = "";
};

AddPanel.prototype.productInput = function(){
	return document.getElementById("valueOfProductName");
};

AddPanel.prototype.unitsSelect = function(){
	return document.getElementById("valueOfUnits");
};

AddPanel.prototype.quantityInput = function(){
	return document.getElementById("valueOfQuantity");
};

AddPanel.prototype.priceInput = function(){
	return document.getElementById("valueOfPrice");
};
