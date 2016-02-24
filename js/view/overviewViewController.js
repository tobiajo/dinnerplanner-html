var OverviewViewController = function(mainCtrl, view, model) {

	// Functions
	this.update = function() {
		loadDynamic();
	}

	var loadDynamic = function() {
		view.container.find('#printFullRecipe').click(function() {
			mainCtrl.overviewToInstructions();
		});
	}

	// Function calls
	model.addObserver(this);

	view.goBackAndEditDinner.click(function() {
		mainCtrl.overviewToDinner();
	});
}
