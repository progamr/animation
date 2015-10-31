(function () {
    var app = angular.module('animations', [
        'ngRoute',
        'ngAnimate',
        'ui.bootstrap',
    ]);

    app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.otherwise('/dashboard');

    }]);
}());