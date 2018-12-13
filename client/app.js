

var app = angular.module('MyMovieDBApp', []);

app.controller('MyMoviesController', ['$scope', '$http', function ($scope, $http) {
        $scope.movies = [];

        $scope.load = function () {
            $http.get("movies.json").then(function (response) {
                $scope.movies = response.data;
            });
        };
        $scope.load();
    }]);