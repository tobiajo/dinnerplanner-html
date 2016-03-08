// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource, $cookieStore) {

    

    var numberOfGuest = 4
    var menu = [];
    var dishIds = [];
    
    this.getFullMenu = function() {
        return menu;
    }

    this.getDishPrice = function(dish) {
        var priceOut = 0;
        if (dish != null) {
            for (var i = 0; i < dish.Ingredients.length; i++) {
                priceOut += dish.Ingredients[i].Quantity;
            }
        }
        return priceOut; 
    }

    this.getAllIngredients = function () {
        var IngredientsOut = [];
        for (var i = 0; i < menu.length; i++) {
            if (menu[i] != null) {
                IngredientsOut = IngredientsOut.concat(menu[i].Ingredients);
            }
        }
        return IngredientsOut;
    }

    this.getTotalMenuPrice = function() {
        var priceOut = 0;
        var Ingredients = this.getAllIngredients();
        for (var i = 0; i < Ingredients.length; i++) {
            priceOut += Ingredients[i].Quantity;
        }
        return priceOut * this.getNumberOfGuests();    
    }

    this.addDishToMenu = function(dish) {
        var isInMenu = false;
        for (var i = 0; i < menu.length; i++) {
            if (menu[i] === dish) {
                isInMenu = true;
            }
        }

        if (!isInMenu) {
            menu.push(dish);
            dishIds.push(dish.RecipeID);
            $cookieStore.put('dishIds', dishIds);
        }
    }
    
    this.setNumberOfGuests = function(num) {
        if (num >= 1) {
            numberOfGuest = num;
            $cookieStore.put('numberOfGuest', numberOfGuest);
        }
    }

    this.getNumberOfGuests = function() {
        return numberOfGuest;
    }

    this.getFullMenu = function() {
        return menu;
    }
  
<<<<<<< Updated upstream
    this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:'66J8l00npnHHZcCNLRhxkfW1OHxbojy4'});
    this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'66J8l00npnHHZcCNLRhxkfW1OHxbojy4'});

  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details
=======
    this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:'sV1fPGQKrO0b6oUYb6w9kLI8BORLiWox'});
    this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'sV1fPGQKrO0b6oUYb6w9kLI8BORLiWox'});
>>>>>>> Stashed changes

    // Init from cookie

    var getDish = this.Dish.get;
    var getDishPrice = this.getDishPrice;

    (function() {
        if ($cookieStore.get('numberOfGuest') !== undefined) {
            numberOfGuest = $cookieStore.get('numberOfGuest');
        }

        if ($cookieStore.get('dishIds') !== undefined) {
            dishIds = $cookieStore.get('dishIds');
            for (var i = 0; i < dishIds.length;i ++) {
                console.log(dishIds[i]);
                getDish({id:dishIds[i]}, function(dish){
                    dish.Price = getDishPrice(dish);
                    menu.push(dish);
                },function(data){
                    console.log("There was an error");
                });
            }
        }
    })();

    return this;

});
