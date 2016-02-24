var CostView = function(container, model) {

	// Variables
	this.plusButton = container.find('#plusGuest');
	this.minusButton = container.find('#minusGuest');
	var numberOfGuests = container.find('#numberOfGuests');

	// Functions
	this.update = function() {
		numberOfGuests.html(model.getNumberOfGuests());
	}

	// Function calls
	model.addObserver(this);
	numberOfGuests.html(model.getNumberOfGuests());
}
