var OverviewView = function(container, model) {

	// Variables
	this.overviewContainer = container.find('#overviewContainer');
	this.instructionsContainer = container.find('#instructionsContainer');

	// Functions
	var getDishes2 = function() {
		var dishes = '';
		for (var i = 0; i < 3; i++) {
			dishes += getDishHTML2(model.getDish(200));
		}
		return dishes;
	}

	var getDishHTML2 = function(dish) {
		return '' +
		'<div class="col-md-2">' +
			'<img src="images/' + dish.image + '" width="100%">' +
			'<button id="icecreamDetails" class="btn btn-default btn-block">' + dish.name + '</button>' +
			'<p align="right">' + getTotalPrice2(dish.ingredients) + ' SEK </p>' +
		'</div>\n';
	}

	var getTotalPrice2 = function(ingredients) {
		var price = 0;
		for (var i = 0; i < ingredients.length; i++) {
			price += ingredients[i].price;
		}
		return price;
	}

	var getInstructionsHTML = function() {
		return '' +
		getInstructionHTML(model.getDish(200)) + 
		getInstructionHTML(model.getDish(1)) + 
		getInstructionHTML(model.getDish(2));
	}

	var getInstructionHTML = function(dish) {
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

	// Function calls
	this.overviewContainer.html('<div class="col-md-3"></div>' + getDishes2() + '<h3>Total:<br>' + getTotalPrice2(model.getDish(200).ingredients) * 3 + ' SEK</h3>');
	this.instructionsContainer.html(getInstructionsHTML());
}
