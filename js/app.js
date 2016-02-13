$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var costView = new CostView($('#costView'), model);
	var selectView = new SelectView($('#selectView'), model);

	$('#createNewDinner').click(function(){
		$('#homeScreen').toggleClass('hidden');
		$('body').toggleClass('hideBackgroundImage');
		$('#dinnerScreen').toggleClass('hidden');
	});
});
