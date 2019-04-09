"use strict";

angular.
    module("crewDetails").
    component("crewDetails", {
        templateUrl: "crew-details/crew-details.template.html",
        controller: ["$routeParams", "Movie", function MovieDetailsController($routeParams, Movie) {
            var self = this;

            this.movies = Movie.query();
            this.crewName = $routeParams.crewName.replace("_", " ");
            this.numberToDisplay = 20;

            this.showRelatedCrew = function (movie) {
                return !!movie.cast.find(function (crewName) {
                    return self.crewName === crewName;
                })
            };

            this.loadMore = function () {
                self.numberToDisplay = Math.min(self.numberToDisplay + 5, self.movies.length);
            };
        }]
    });