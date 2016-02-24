var SelectView = function(container, model) {

	// Variables
	this.mainType = container.find('#mainType');
	this.starterType = container.find('#starterType');
	this.dessertType = container.find('#dessertType');
	this.search = container.find('#search');
	this.container = container;

	// Functions
	this.update = function() {
		loadView();
	}

	var loadView = function() {
		var dishes = container.find('#dishes');
		var dishType = container.find('#dishType');
		dishes.html(getDishesHTML());
		dishType.html(capitalizeFirstLetter(model.getDishType()));
	}

	var capitalizeFirstLetter = function(string) {
    	return string.charAt(0).toUpperCase() + string.slice(1);
	}

	var getDishesHTML = function() {
		var dishes = '';
		var allDishes = model.getAllDishes(model.getDishType(), model.getDishFilter());
		for (var i = 0; i < allDishes.length; i++) {
			dishes += getDishHTML(allDishes[i]);
		}
		return dishes;
	}

	var getDishHTML = function(dish) {
		return '' +
		'<div class="col-md-3">' +
			'<img src="images/' + dish.image + '" width="100%" height="150px">' +
			'<button id="' + dish.id + '" class="btn btn-default btn-block dish-btn">' + dish.name + '</button>' +
			'<p>' + model.getDummyText() + '</p>' +
		'</div>';
	}

	// Function calls
	model.addObserver(this);
	loadView();
}
