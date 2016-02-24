$(function() {

	// Init model, views and controllers
	var model = new DinnerModel();
	
	var costView = new CostView($('#costView'), model);
	var selectView = new SelectView($('#selectView'), model);
	var detailsView = new DetailsView($('#detailsView'), model);
	var overviewView = new OverviewView($('#overviewView'), model);

	var costViewController = CostViewController(costView, model);	
	var selectViewController = SelectViewController(selectView, model);
	var detailsViewController = DetailsViewController(detailsView, model);
	var overviewViewController = OverviewViewController(overviewView, model);

	// Controller stuff
	$('#createNewDinner').click(function(){
		$('#homeScreen').toggleClass('hidden');
		$('body').toggleClass('hiddenBackgroundImage');
		$('#dinnerScreen').toggleClass('hidden');
	});

	$('#icecreamDetails').click(function(){
		$('#selectView').toggleClass('hidden');
		$('#detailsView').toggleClass('hidden');
	});

	$('#confirmDinnerBtn').click(function(){
		$('#dinnerScreen').toggleClass('hidden');
		$('#overviewScreen').toggleClass('hidden');
	});

	$('#printBtn').click(function(){
		$('#overviewContainer').toggleClass('hidden');
		$('#instructionsContainer').toggleClass('hidden');
	});
});
