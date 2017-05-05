angular.module('main')
    .component('watchArea', {
        templateUrl: 'views/watch-area.tpl.html',
        bindings: { movie: '=' }
    });