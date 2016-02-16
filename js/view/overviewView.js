var OverviewView = function(container, model) {
	this.overviewContainer = container.find('#overviewContainer');
	this.instructionsContainer = container.find('#instructionsContainer');


	this.overviewContainer.html('<div class="col-md-3"></div>' + getDishes2(model) + '<h3>Total:<br>' + getTotalPrice2(model.getDish(200).ingredients) * 3 + ' SEK</h3>');
	this.instructionsContainer.html(getInstructionsHTML(model));
}


var getDishes2 = function(model) {
	var dishes = '';
	for (var i = 0; i < 3; i++) {
		dishes += getDishHTML2(model.getDish(200), model);
	}
	return dishes;
}

var getDishHTML2 = function(dish, model) {
	return '' +
	'<div class="col-md-2">' +
		'<img src="images/' + dish.image + '" width="100%">' +
		'<button id="icecreamDetails" class="btn btn-default btn-block">' + dish.name + '</button>' +
		'<p align="right">' + getTotalPrice(dish.ingredients) + ' SEK </p>' +
	'</div>\n';
}

var getTotalPrice2 = function(ingredients) {
	var price = 0;
	for (var i = 0; i < ingredients.length; i++) {
		price += ingredients[i].price;
	}
	return price;
}

var getInstructionsHTML = function(model) {
	return '' +
	getInstructionHTML(model, model.getDish(200)) + 
	getInstructionHTML(model, model.getDish(1)) + 
	getInstructionHTML(model, model.getDish(2));
}

var getInstructionHTML = function(model, dish) {
	return '<div class="row">' +
	'<div class="col-md-2">' +
		'<img src="images/' + dish.image + '" width="100%">' +
	'</div>' +
	'<div class="col-md-4">' +
		'<h3>' + dish.name.toUpperCase() + '</h3>' + model.getDummyText() + 
	'</div>' +
	'<div class="col-md-6">' +
		'<h5>PREPARATION</h5><br>' + dish.description + 
	'</div></div>' + 
	'<div class="row"><br></div>';
}
