//DetailsView Object constructor
var DetailsView = function(container, model) {
	this.overview = container.find('#detailsOverview');
	this.ingredients = container.find('#detailsIngredients');
	this.prep = container.find('#detailsPrep');

	var dish = model.getDish(200);

	this.overview.html('<h1>' + dish.name.toUpperCase() + '</h1>' + '<img src="images/' + dish.image + '" width="100%">' +
		model.getDummyText() + '<br><button id="backBtn" class="btn btn-warning">Back to Select Dish</button>');
	this.ingredients.html('<div class="col-md-12"><h3>INGREDIENTS FOR 4 PEOPLE</h3><hr></div>' + 
		getIngredientListHTML(dish.ingredients) + 
		'<div class="col-md-12"><hr></div>' + 
		'<div class="col-md-8"><button id="confirmDishBtn" class="btn btn-warning">Confirm Dish</button></div><div class="col-md-2">' + 
		'SEK</div><div class="col-md-2">' + getTotalPrice(dish.ingredients) + '</div>'
	);
	this.prep.html(dish.description);
}

var getTotalPrice = function(ingredients) {
	var price = 0;
	for (var i = 0; i < ingredients.length; i++) {
		price += ingredients[i].price;
	}
	return price;
}

var getIngredientListHTML = function(ingredients) {
	var ingredientListHTML = '';
	for (var i = 0; i < ingredients.length; i++) {
		ingredientListHTML += getIngredientHTML(ingredients[i]);
	}
	return ingredientListHTML;
}

var getIngredientHTML = function(ingredient) {
	return '' +
	'<div class="col-md-3">' +
		ingredient.quantity + ' ' + ingredient.unit +
	'</div>' +
	'<div class="col-md-5">' +
		ingredient.name +
	'</div>' +
	'<div class="col-md-2">' +
		'SEK' +
	'</div>' +
	'<div class="col-md-2">' +
		ingredient.price +
	'</div>';
}
