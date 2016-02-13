var SelectView = function(container, model) {
	this.dishes = container.find('#dishes');

	this.dishes.html(getDishes());
}

var getDishes = function() {
	var dishes = '';
	for (var i = 0; i < 10; i++) {
		dishes += getDish();
	}
	return dishes;
}

var getDish = function() {
	return '' +
	'<div class="col-md-2">' +
		'<img src="images/icecream.jpg" width="100%">' +
		'<button class="btn btn-default btn-block">Icecream</button>' +
		'<p>Dummy text</p>' +
	'</div>';
}
