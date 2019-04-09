angular.
  module("MyMovieDBApp").
  config(["$routeProvider",
    function config($routeProvider) {
      $routeProvider.
        when("/movies", {
          template: "<movie-list></movie-list>"
        }).
        when("/crew/:crewName", {
          template: "<crew-details></crew-details>"
        }).
        otherwise("/movies");
    }
  ]);