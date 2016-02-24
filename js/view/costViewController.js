var CostViewController = function(mainCtrl, view, model) {
 
 	// Function calls
	view.plusGuest.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});

	view.minusGuest.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});

	view.confirmDinner.click(function() {
		mainCtrl.dinnerToOverview();
	});
}
