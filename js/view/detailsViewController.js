var DetailsViewController = function(mainCtrl, view, model) {

	// Functions
	this.update = function() {
		loadDynamic();
	}

	var loadDynamic = function() {
		view.container.find('#backToSelectDish').click(function() {
			mainCtrl.detailsToSelect();
		});
		
		view.container.find('#confirmDish').click(function() {
			model.addDishToMenu(model.getDishId());
		});
	}

	// Function calls
	model.addObserver(this);
}
