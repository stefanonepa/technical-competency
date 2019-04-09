window.MovieReview = function () {

    class Review {

        constructor (values) {
            this.validate(values);
    
            this.name = values.name;
            this.comment = values.comment;
            this.email = values.email;
            this.score = values.score;
            this.movie = values.movie;
        }

        validate (values) {
            if (!values.name || values.name === "") {
                throw Error("The name is not valid");
            }

            if (!values.email || !values.email.match((/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))){
                throw Error("The email is not valid");
            }

            if (!values.movie) {
                throw Error("The movie is missing");
            }

            if (values.score === undefined || values.score < 0 || values.score > 1) {
                throw Error("The score is invalid");
            }
        }

    }

    class ReviewSummary  {

        constructor (reviews) {
            var sum = reviews.reduce(this.sumScoreReducer, 0);
            var average = sum / reviews.length;

            this.averageScore = Number(average.toFixed(1));
            this.title = reviews[0].movie.title;
        }

        sumScoreReducer (reviewSum, currentReview) {
            return reviewSum + currentReview.score;
        }
    }

    class MovieLocatorService {

        constructor (movies) {
            this.movies = movies;
        }

        find (options) {
            if (!options) { return this.movies; }

            return this.movies.sort(this.sortBy(options.orderBy));
        }

        sortBy (orderBy) {
            return (a, b)=> {
                if(a[orderBy] > b[orderBy]) { return 1; }
                if(a[orderBy] < b[orderBy]) { return -1; }
                return 0;
            };
        }

        findByDirector (name) {
            return this.movies.filter(this.hasMovieCrewWithDirectorName(name));
        }

        hasMovieCrewWithDirectorName (name) {
            return (movie) => {
                return !!movie
                            .crew
                            .find(this.hasDirectorCrewName(name));
            }
        }

        hasDirectorCrewName (name) {
            return (crew) => {
                return crew.credit === "Director" && crew.name === name;
            }
        }

    }


    class MovieReviewService {

        constructor () {
            this.submitted = [];
        }

        submit (review, done) {
            this.submitted.push(review);

            if(done) { done.call(this, true); }
        }

        find (movie) {
            let filteredReviews = this.submitted.filter(this.reviewHasMovie(movie));
            if (!filteredReviews) { return null; }

            return new MovieReview.ReviewSummary(filteredReviews);
        }

        reviewHasMovie (movie) {
            return (review) => {
                return review.movie === movie;
            }
        }

    }

    return {
        Review: Review,
        ReviewSummary: ReviewSummary,
        MovieReviewService: MovieReviewService,
        MovieLocatorService: MovieLocatorService
    }

}();