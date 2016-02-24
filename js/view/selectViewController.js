var SelectViewController = function(mainCtrl, view, model) {

	// Functions
	this.update = function() {
		loadDynamic();
	}

	var loadDynamic = function() {
		view.container.find('.dish-btn').click(function() {
			model.setDishId(this.id);
			mainCtrl.selectToDetails();
		});
	}

	// Function calls
	model.addObserver(this);
	loadDynamic();

	view.mainType.click(function(){
		model.setDishType('main dish');
		model.setDishFilter('');
	});

	view.starterType.click(function(){
		model.setDishType('starter');
		model.setDishFilter('');
	});

	view.dessertType.click(function(){
		model.setDishType('dessert');
		model.setDishFilter('');
	});

	view.search.click(function(){
		var query = view.container.find('#searchForm').val();
		model.setDishFilter(query);
	});
}
