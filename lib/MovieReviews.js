window.MovieReview = function () {

    class Review {

        constructor (values) {
        }

    }

    class ReviewSummary  {

        constructor (reviews) {
        }

    }

    class MovieLocatorService {

        constructor (movies) {
        }

        find (options) {
        }

        findByDirector (name) {
        }

    }


    class MovieReviewService {

        constructor () {
        }

        submit (review, done) {
        }

        find (movie) {
        }

    }

    return {
        Review: Review,
        ReviewSummary: ReviewSummary,
        MovieReviewService: MovieReviewService,
        MovieLocatorService: MovieLocatorService
    }

}();