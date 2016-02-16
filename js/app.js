$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var costView = new CostView($('#costView'), model);
	var selectView = new SelectView($('#selectView'), model);
	var detailsView = new DetailsView($('#detailsView'), model);

	$('#createNewDinner').click(function(){
		$('#homeScreen').toggleClass('hidden');
		$('body').toggleClass('hiddenBackgroundImage');
		$('#dinnerScreen').toggleClass('hidden');
	});

	$('#icecreamDetails').click(function(){
		$('#selectView').toggleClass('hidden');
		$('#detailsView').toggleClass('hidden');
	});
});
