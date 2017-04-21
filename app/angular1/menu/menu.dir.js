angular.module('menu', []).directive('menu', function ($state) {
    return {
        restrict: 'E',
        templateUrl: 'app/angular1/menu/menu.html',
    };
});
