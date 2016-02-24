var CostViewController = function(mainCtrl, view, model) {
 
 	// Function calls
	view.plusGuest.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});

	view.minusGuest.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});

	view.confirmDinner.click(function() {
		if (model.getMenu().length !== 0) {
			mainCtrl.dinnerToOverview();
		}
	});
}
