"use strict";

angular.
  module("core.movie").
  factory("Movie", ["$resource",
    function($resource) {
      return $resource("movies.json", {}, {
        query: {
          method: "GET",
          isArray: true
        }
      });
    }
  ]);