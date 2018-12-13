describe('As a Movie Reviewer I want to be able to find movies by release date, director or possibly all available movies. Given I have a Movie Locator Service and its been initialised with a list of movies', function () {
  describe('when finding all movies', function () {
    it('should provide the list of movies it was initialised with.', function (){
      var locatorService = new MovieReview.MovieLocatorService(movie_test_data);

      expect(locatorService.find()).toEqual(movie_test_data);
    });
  });

  describe('when finding all movies by release date', function () {
    it('should provide the list of movies it was initialised with in release date ascending order.', function() {
      var locatorService = new MovieReview.MovieLocatorService(movie_test_data);
      var expectedResult = [movie_test_data[0], movie_test_data[3], movie_test_data[1], movie_test_data[2]];

      expect(locatorService.find({ orderBy: 'releaseDate' })).toEqual(expectedResult);
    });
  });

  describe('when finding a movie by directors name', function () {
    it('should provide a list of movies for that director.', function() {
      var locatorService = new MovieReview.MovieLocatorService(movie_test_data);
      var expectedResult = [movie_test_data[0], movie_test_data[2]];
      
      expect(locatorService.findByDirector('Michelle S. Smith')).toEqual(expectedResult);
    });
  });



  var movie_test_data = [
    {
      title: 'Movie A',
      releaseDate: new Date('2013-01-01'),
      cast: [],
      crew: [
        { credit: 'Director', name: 'Michelle S. Smith' },
        { credit: 'Producer', name: 'Kate Hensley' }
      ]
    },
    {
      title: 'Movie B',
      releaseDate: new Date('2013-02-01'),
      cast: [],
      crew: [
        { credit: 'Director', name: 'Ian C. Sandstrom' },
        { credit: 'Producer', name: 'Doug Foster' }
      ]
    },
    {
      title: 'Movie C',
      releaseDate: new Date('2013-03-01'),
      cast: [],
      crew: [
        { credit: 'Director', name: 'Michelle S. Smith' },
        { credit: 'Producer', name: 'Lewis M. Moore' }
      ]
    },
    {
      title: 'Movie D',
      releaseDate: new Date('2013-01-01'),
      cast: [],
      crew: [
        { credit: 'Director', name: 'John K. Quirk' },
        { credit: 'Producer', name: 'Ryan Elliot' }
      ]
    },
  ];

});