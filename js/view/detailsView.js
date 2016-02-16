//DetailsView Object constructor
var DetailsView = function(container, model) {
	this.overview = container.find('#detailsOverview');
	this.ingredients = container.find('#detailsIngredients');

	var dish = model.getDish(200);

	//this.name.html(dish.name);
	this.overview.html('<h1>' + dish.name.toUpperCase() + '</h1>' + '<img src="images/' + dish.image + '" width="100%">' + model.getDummyText());
	this.ingredients.html('<h3>INGREDIENTS FOR 4 PEOPLE</h3><hr>' + getIngredientListHTML(dish.ingredients)) ;
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
