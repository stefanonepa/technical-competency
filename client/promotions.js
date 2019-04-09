var app = angular.module("promotions", []);

app.controller("MyPromotionsController", ["$scope", "$http", function ($scope, $http) {
    $scope.paidPromotions = [];
    $scope.paidPromotion = {
        title: "",
        imageUrl: ""
    };

    $scope.load = function () {
        $http.get("paid-promotions.json")
            .then(function (response) {
                $scope.paidPromotions = response.data;
            })
            .then(function () {
                var randomIndex = Math.floor(Math.random() * $scope.paidPromotions.length);
                var paidPromotion = $scope.paidPromotions[randomIndex];

                $scope.paidPromotion.title = paidPromotion.title;
                $scope.paidPromotion.imageUrl = "images/posters/" + paidPromotion.image;
            });
    };

    $scope.load();
}]);