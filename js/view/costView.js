var CostView = function(container, model) {

	// Variables
	this.plusGuest = container.find('#plusGuest');
	this.minusGuest = container.find('#minusGuest');
	this.confirmDinner = container.find('#confirmDinner');
	var numberOfGuests = container.find('#numberOfGuests');

	// Functions
	this.update = function () {
		numberOfGuests.html(model.getNumberOfGuests());
		var costList = container.find('#costList');
		var costSum = container.find('#costSum');
		costList.html(getCostListHTML());
		costSum.html('SEK ' + model.getMenuPrice().toFixed(2));
	}

	var getCostListHTML = function() {
		var menu = model.getMenu();
		var html = '';
		for (var i = 0; i < menu.length; i++) {
			html += '<div class="col-md-6"><p>' + menu[i].name + '</p></div>';
			html += '<div class="col-md-6"><p align="right">' + model.getDishPrice(menu[i]).toFixed(2) + '</p></div>';
		}
		return html;
	}

	// Function calls
	model.addObserver(this);
	numberOfGuests.html(model.getNumberOfGuests());
}
