var OverviewView = function(container, model) {

	// Variables
	this.goBackAndEditDinner = container.find('#goBackAndEditDinner');
	this.container = container;

	// Functions
	this.update = function() {
		var overviewPeople = container.find('#overviewPeople');
		var overviewContainer = container.find('#overviewContainer');
		var instructionsContainer = container.find('#instructionsContainer');
		overviewPeople.html(model.getNumberOfGuests());
		overviewContainer.html(getDishesHTML() + '<h3>Total:<br>' + model.getTotalMenuPrice() + ' SEK</h3>' + 
			'<div class="col-md-12"><hr></div>' +
        	'<div class="col-md-4"></div>' +
        	'<div class="col-md-4">' +
          		'<button id="printFullRecipe" class="btn btn-warning btn-block" align="center">Print Full Recipe</button>' +
        	'</div>');
		instructionsContainer.html(getInstructionsHTML());
	}

	var getDishesHTML = function() {
		var fullMenu = model.getFullMenu();
		var dishes = '';
		for (var i = 0; i < fullMenu.length; i++) {
			dishes += getDishHTML(fullMenu[i]);
		}
		return dishes;
	}

	var getDishHTML = function(dish) {
		return '' +
		'<div class="col-md-2">' +
			'<img src="images/' + dish.image + '" width="100%">' +
			'<button id="icecreamDetails" class="btn btn-default btn-block">' + dish.name + '</button>' +
			'<p align="right">' + model.getDishPrice(dish) + ' SEK </p>' +
		'</div>';
	}

	var getInstructionsHTML = function() {
		var fullMenu = model.getFullMenu();
		var instructions = '';
		for (var i = 0; i < fullMenu.length; i++) {
			instructions += getInstructionHTML(fullMenu[i]);
		}
		return instructions;
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
	model.addObserver(this);
}
