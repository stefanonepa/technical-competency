describe('As a Movie Reviewer I want to submit my review. Given I have a Movie Review Service', function () {
  describe('when submitting a review and I provide a callback function', function (){
    it('should call the provided callback with confirmation that the submit was successful', function (done) {
      var reviewService = new MovieReview.MovieReviewService();
      reviewService.submit(reviews_test_data, function(success) {
        expect(success).toEqual(true);
        done();
      });
    });

    it("should call the provided callback with the 'this' object set to the instance of the review service", function (done) {
      var reviewService = new MovieReview.MovieReviewService();
      reviewService.submit(reviews_test_data, function() {
        expect(this).toEqual(reviewService);
        done();
      });
    });

    it("should add the review to the submitted array", function (done) {
      var reviewService = new MovieReview.MovieReviewService();
      reviewService.submit(reviews_test_data, function() {
        expect(this.submitted).toContain(reviews_test_data);
        done();
      });
    });
  });

  var reviews_test_data = {
    name: "A Reviewer",
    comment: "I like this movie.",
    email: "a@example.com",
    score: 0.6,
    movie: {
      title: 'Movie A',
      releaseDate: new Date('2013-01-01'),
      cast: [],
      crew: [
        { credit: 'Director', name: 'Michelle S. Smith' }
      ]
    }
  };
});

describe('As someone who is interested in movie reviews I want to see a summary of reviews for a given movie, Given I have a Movie Review Service with many different review already submitted', function () {
  describe('when finding a review summary for a specific movie', function () {
    it('should provide a summary of the reviews for that movie.', function () {
      var reviewService = createPopulatedReviewService();
      var reviewsForMovies = [reviews_test_data[0], reviews_test_data[1]];
      var expected = new MovieReview.ReviewSummary(reviewsForMovies);

      expect(reviewService.find(movie_test_data[0])).toEqual(expected);
    });
  });

  var movie_test_data = [
    {
      title: 'Movie A',
      releaseDate: new Date('2013-01-01'),
      cast: [],
      crew: [
        { credit: 'Director', name: 'Michelle S. Smith' }
      ]
    },
    {
      title: 'Movie B',
      releaseDate: new Date('2013-02-01'),
      cast: [],
      crew: [
        { credit: 'Director', name: 'Ian C. Sandstrom' }
      ]
    },
    {
      title: 'Movie C',
      releaseDate: new Date('2013-03-01'),
      cast: [],
      crew: [
        { credit: 'Director', name: 'Michelle S. Smith' }
      ]
    },
    {
      title: 'Movie D',
      releaseDate: new Date('2013-01-01'),
      cast: [],
      crew: [
        { credit: 'Director', name: 'John K. Quirk' }
      ]
    },
  ];

  var reviews_test_data = [
    {
      name: "A Reviewer",
      comment: "I like this movie.",
      email: "a@example.com",
      score: 0.6,
      movie: movie_test_data[0]
    },
    {
      name: "A Reviewer 2",
      comment: "I dislike this movie.",
      email: "a2@example.com",
      score: 0.3,
      movie: movie_test_data[0]
    },
    {
      name: "B Reviewer",
      comment: "I like this movie.",
      email: "b@example.com",
      score: 0.8,
      movie: movie_test_data[1]
    },
    {
      name: "C Reviewer",
      comment: "I like this movie.",
      email: "c@example.com",
      score: 0.5,
      movie: movie_test_data[2]
    },
    {
      name: "D Reviewer",
      comment: "I dislike this movie.",
      email: "d@example.com",
      score: 0.1,
      movie: movie_test_data[3]
    }
  ];

  function createPopulatedReviewService() {
    var reviewService = new MovieReview.MovieReviewService();
    reviews_test_data.forEach(function (review) {
      reviewService.submit(review);
    });
    return reviewService;
  }

});





