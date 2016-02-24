var DetailsView = function(container, model) {

	// Variables
	this.container = container;

	// Functions
	this.update = function() {
		var dishId = model.getDishId();
		if (dishId !== -1) {
			loadView(model.getDish(dishId));
		}
	}

	var loadView = function(dish) {
		var detailsOverview = container.find('#detailsOverview');
		var detailsIngredients = container.find('#detailsIngredients');
		var detailsPrep = container.find('#detailsPrep');
		detailsOverview.html('<h1>' + dish.name.toUpperCase() + '</h1>' + '<img src="images/' + dish.image + '" width="100%" height="200px">' +
			model.getDummyText() + '<br><button id="backToSelectDish" class="btn btn-warning">Back to Select Dish</button>');
		detailsIngredients.html('<div class="col-md-12"><h3>INGREDIENTS FOR ' + model.getNumberOfGuests() + ' PEOPLE</h3><hr></div>' + 
		getIngredientsHTML(dish.ingredients) + 
			'<div class="col-md-12"><hr></div>' + 
			'<div class="col-md-8">' + getConfirmRemoveButton() + '</div><div class="col-md-2">' + 
			'SEK</div><div class="col-md-2">' + model.getDishPrice(dish).toFixed(2) + '</div>'
		);
		detailsPrep.html(dish.description);
	}

	var getConfirmRemoveButton = function() {
		if (!model.menuContainsDish(model.getDishId())) {
			return '<button id="confirmDish" class="btn btn-warning">Confirm Dish</button>';
		} else {
			return '<button id="removeDish" class="btn btn-warning">Remove Dish</button>';
		}
	}

	var getIngredientsHTML = function(ingredients) {
		var ingredientListHTML = '';
		for (var i = 0; i < ingredients.length; i++) {
			ingredientListHTML += getIngredientHTML(ingredients[i]);
		}
		return ingredientListHTML;
	}

	var getIngredientHTML = function(ingredient) {
		return '' +
		'<div class="col-md-3">' +
			(ingredient.quantity * model.getNumberOfGuests()).toFixed(1) + ' ' + ingredient.unit +
		'</div>' +
		'<div class="col-md-5">' + ingredient.name + '</div>' +
		'<div class="col-md-2">SEK</div>' +
		'<div class="col-md-2">' +
			(ingredient.price * model.getNumberOfGuests()).toFixed(2) +
		'</div>';
	}

	// Function calls
	model.addObserver(this);
}
