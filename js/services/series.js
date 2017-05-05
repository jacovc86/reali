angular.module('main')
    .service('SeriesService', function($http) {
        this.getSeries = function() {
            return $http.get('http://tvdb.reali.com/series').then(res => res.data);
        };
        this.getEpisodes = function(series) {
            return $http.get('http://tvdb.reali.com/series/' + series.id).then(res => res.data);
        };
    });