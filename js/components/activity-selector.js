angular.module('main')
    .component('activitySelector', {
        templateUrl: 'views/activity-selector.tpl.html',
        bindings: { list: '=', onSelect: '&' }
    });