// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource) {
    var menu = [];

    var numberOfGuest = 4;
    
    this.getFullMenu = function() {
        return menu;
    }

    this.getDishPrice = function(dish) {
        var priceOut = 0;
        for (var i = 0; i < dish.ingredients.length; i++) {
            priceOut += dish.ingredients[i].Quantity;
        }
        return priceOut; 
    }

    this.getAllIngredients = function () {
        var ingredientsOut = [];
        for (var i = 0; i < menu.length; i++) {
            if (menu[i] != null) {
                ingredientsOut = ingredientsOut.concat(menu[i].Ingredients);
            }
        }
        return ingredientsOut;
    }

    this.getTotalMenuPrice = function() {
        var priceOut = 0;
        var ingredients = this.getAllIngredients();
        for (var i = 0; i < ingredients.length; i++) {
            priceOut += ingredients[i].Quantity;
        }
        return priceOut * this.getNumberOfGuests();    
    }

    this.addDishToMenu = function(dish) {
        menu.push(dish);
    }
    
    this.setNumberOfGuests = function(num) {
        if (num >= 1) {
        numberOfGuest = num;
        }
    }

    this.getNumberOfGuests = function() {
        return numberOfGuest;
    }

    this.getFullMenu = function() {
        return menu;
    }
  
    this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:'r02x0R09O76JMCMc4nuM0PJXawUHpBUL'});
    this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'r02x0R09O76JMCMc4nuM0PJXawUHpBUL'}); 

  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details





  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
    return this;

});
