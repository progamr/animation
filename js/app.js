(function () {
    var app = angular.module('animations', [
        'ngRoute',
        'ngAnimate',
        'ui.bootstrap',
    ]);

    app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/dashboard', {templateUrl : 'templates/dashStates.html'});
        $routeProvider.otherwise('/dashboard');

    }]);
}());