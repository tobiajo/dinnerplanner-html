$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var costView = new CostView($("#costView"), model);
	var selectView = new SelectView($("#selectView"), model);

	$("#homeButton").click(function(){
		$("#homeScreen").toggleClass('hidden');
		$("#dinnerScreen").toggleClass('hidden');
	});

	$("#searchButton").click(function(){
		
	});
});
