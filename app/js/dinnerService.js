dinnerPlannerApp.factory('Dinner',function ($resource, $cookieStore) {

    var numberOfGuest = 4
    var menu = [];
    var dishIds = [];

    // Getters
    this.getNumberOfGuests = function() {
        return numberOfGuest;
    }

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
        return Math.round(priceOut);
    }

    this.getTotalMenuPrice = function() {
        var priceOut = 0;
        for (var i = 0; i < menu.length; i++) {
            priceOut += menu[i].Price;
        }
        return priceOut * this.getNumberOfGuests();
    }

    // Setters
    this.addDishToMenu = function(dish) {
        var isInMenu = false;
        for (var i = 0; i < menu.length; i++) {
            if (menu[i].RecipeID === dish.RecipeID) {
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

    // BigOven API
    this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:'sV1fPGQKrO0b6oUYb6w9kLI8BORLiWox'});
    this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'sV1fPGQKrO0b6oUYb6w9kLI8BORLiWox'});

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

    // Return self reference
    return this;
});
