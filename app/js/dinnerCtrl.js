dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

    $scope.numberOfGuests = Dinner.getNumberOfGuests();

    $scope.setNumberOfGuest = function(number){
        Dinner.setNumberOfGuests(number);
    }

    $scope.getNumberOfGuests = function() {
        return Dinner.getNumberOfGuests();
    }

    $scope.getFullMenu = function() {
        return Dinner.getFullMenu();
    }

    $scope.getTotalMenuPrice = function() {
        return Dinner.getTotalMenuPrice();
    }
});
