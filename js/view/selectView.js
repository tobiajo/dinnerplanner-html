var SelectView = function(container, model) {
	this.dishes = container.find('#dishes');

	this.dishes.html(getDishes(model));
}

var getDishes = function(model) {
	var dishes = '';
	for (var i = 0; i < 10; i++) {
		dishes += getDishHTML(model.getDish(200), model);
	}
	return dishes;
}

var getDishHTML = function(dish, model) {
	return '' +
	'<div class="col-md-3">' +
		'<img src="images/' + dish.image + '" width="100%">' +
		'<button id="icecreamDetails" class="btn btn-default btn-block">' + dish.name + '</button>' +
		'<p>' + model.getDummyText() + '</p>' +
	'</div>';
}
