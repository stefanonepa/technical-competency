"use strict";

angular.
    module("movieList").
    component("movieList", {
        templateUrl: "movie-list/movie-list.template.html",
        controller: ["Movie", function MovieListController(Movie) {
            var self = this;

            this.movies = Movie.query();
            this.selectedGenres = [];
            this.genres = [
                { name: "Science Fiction", enabled: false },
                { name: "Action", enabled: false },
                { name: "Adventure", enabled: false },
                { name: "Biography", enabled: false },
                { name: "Drama", enabled: false },
                { name: "Comedy", enabled: false },
                { name: "Horror", enabled: false },
                { name: "Crime", enabled: false },
                { name: "Thriller", enabled: false },
            ];
            this.numberToDisplay = 20;

            this.showGenre = function (movie) {
                var filteredGenres = self.genres.filter(function (genre) { return genre.enabled; });

                if (!filteredGenres || !filteredGenres.length) { return true; }
                if (!movie.genres.length) { return false; }

                return !!movie.genres.find(function (genre) {
                    return !!filteredGenres.find(function (filteredGenre) {
                        return filteredGenre.name === genre;
                    });
                });
            };

            this.loadMore = function () {
                self.numberToDisplay = Math.min(self.numberToDisplay + 5, self.movies.length);
            };
        }]
    });