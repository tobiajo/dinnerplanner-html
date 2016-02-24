$(function() {

	// Init model, views and controllers
	var model = new DinnerModel();
	
	var costView = new CostView($('#costView'), model);
	var selectView = new SelectView($('#selectView'), model);
	var detailsView = new DetailsView($('#detailsView'), model);
	var overviewView = new OverviewView($('#overviewView'), model);

	var costViewController = new CostViewController(this, costView, model);
	var selectViewController = new SelectViewController(this, selectView, model);
	var detailsViewController = new DetailsViewController(this, detailsView, model);
	var overviewViewController = new OverviewViewController(this, overviewView, model);

	$('#createNewDinner').click(function(){
		$('#homeScreen').toggleClass('hidden');
		$('body').toggleClass('hiddenBackgroundImage');
		$('#dinnerScreen').toggleClass('hidden');
	});	

	this.selectToDetails = function() {
		$('#selectView').toggleClass('hidden');
		$('#detailsView').toggleClass('hidden');
	}

	this.detailsToSelect = function() {
		$('#detailsView').toggleClass('hidden');
		$('#selectView').toggleClass('hidden');
	}

	this.dinnerToOverview = function() {
		$('#dinnerScreen').toggleClass('hidden');
		$('#overviewScreen').toggleClass('hidden');
	};

	this.overviewToDinner = function() {
		$('#overviewScreen').toggleClass('hidden');
		$('#overviewContainer').removeClass('hidden');
		$('#instructionsContainer').addClass('hidden');
		$('#dinnerScreen').toggleClass('hidden');
	};

	this.overviewToInstructions = function() {
		$('#overviewContainer').toggleClass('hidden');
		$('#instructionsContainer').toggleClass('hidden');
	};
});
