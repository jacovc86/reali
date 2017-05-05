angular.module('main')
    .component('watchSeries', {
        templateUrl: 'views/watch-series.tpl.html',
        controller: function(SeriesService) {
            var vm = this;
            vm.$onInit = function() {
                SeriesService.getSeries().then(function(series) {
                    vm.seriesList = series;
                }).catch(console.log);
            };
            vm.selectSeries = function(series) {
                //If series already have episodes it will show them immediately, but also tries to fetch new list from the server and update the list
                SeriesService.getEpisodes(series).then(function(episodes) {
                    series.episodes = episodes;
                });
                vm.selectedSeries = series;
            };
            vm.watch = function(episode) {
                vm.selectedEpisode = episode;
            };

        }
    });