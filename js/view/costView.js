var CostView = function(container, model) {

	// Variables
	this.plusGuest = container.find('#plusGuest');
	this.minusGuest = container.find('#minusGuest');
	this.confirmDinner = container.find('#confirmDinner');
	var numberOfGuests = container.find('#numberOfGuests');

	// Functions
	this.update = function () {
		numberOfGuests.html(model.getNumberOfGuests());
		if (model.getFullMenu().length !== 0) {
			var costList = container.find('#costList');
			var costSum = container.find('#costSum');
			costList.html(getCostListHTML());
			costSum.html('SEK ' + model.getTotalMenuPrice());
		}
	}

	var getCostListHTML = function() {
		var fullMenu = model.getFullMenu();
		var html = '';
		for (var i = 0; i < fullMenu.length; i++) {
			html += '<div class="col-md-6"><p>' + fullMenu[i].name + '</p></div>';
			html += '<div class="col-md-6"><p align="right">' + model.getDishPrice(fullMenu[i]) + '</p></div>';
		}
		return html;
	}

	// Function calls
	model.addObserver(this);
	numberOfGuests.html(model.getNumberOfGuests());
}
