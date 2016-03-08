// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case

  	var dishConfirmed = false;

	$scope.status = null;
	$scope.dish = null;

	$scope.getDish = function() {
	  	$scope.status = "Searching...";
	  	Dinner.Dish.get({id:$routeParams.dishId},function(data){
	  		$scope.status = data.Title;
	  		$scope.dish = data;
	  	},function(data){
	  		$scope.status = "There was an error";
	  	});
	}

	$scope.getDishPrice = function() {
		var ingredients = $scope.dish.Ingredients;
        var price = 0;
        for (var i = 0; i < ingredients.length; i++) {
            price += ingredients[i].Quantity;
        }
        return price;
	}

	$scope.addToMenu = function() {
		if (!dishConfirmed) {
			Dinner.addDishToMenu($scope.dish);
		}
	}
});
