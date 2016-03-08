dinnerPlannerApp.controller('SearchCtrl', function ($scope,Dinner) {
    
    $scope.dishes = null;
    $scope.status = null;

    $scope.search = function(query) {
        console.log(query);
        $scope.status = "Searching...";
        Dinner.DishSearch.get({title_kw:query},function(data){
            console.log(data);
            $scope.dishes=data.Results;
            $scope.status = "Showing " + data.Results.length + " results";
        },function(data){
            $scope.status = "There was an error";
        });
    }
});
