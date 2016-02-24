var SelectView = function(container, model) {

	// Variables
	this.dishes = container.find('#dishes');

	// Functions
	var getDishes = function() {
		var dishes = '';
		var allDishes = model.getAllDishes('starter');
		console.log(allDishes);
		for (var i = 0; i < allDishes.length; i++) {
			dishes += getDishHTML(allDishes[i]);
		}
		return dishes;
	}

	var getDishHTML = function(dish) {
		return '' +
		'<div class="col-md-3">' +
			'<img src="images/' + dish.image + '" width="100%">' +
			'<button id="icecreamDetails" class="btn btn-default btn-block">' + dish.name + '</button>' +
			'<p>' + model.getDummyText() + '</p>' +
		'</div>';
	}

	// Function calls
	this.dishes.html(getDishes(model));
}
