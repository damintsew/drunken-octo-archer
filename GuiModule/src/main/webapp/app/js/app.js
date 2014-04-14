'use strict';

var myApp = angular.module('myApp',
    [
        'ngRoute',
        'restangular'
    ]).
    config(['$routeProvider', 'RestangularProvider', function ($routeProvider, RestangularProvider) {

        RestangularProvider.setBaseUrl('http://localhost:8080/api');

        $routeProvider.when('/',
            {
                templateUrl: 'views/IndexView.html',
                controller: 'MyCtrl1'
            });
        $routeProvider.when('/mathematics',
            {
                templateUrl: 'views/Mathematics.html',
                controller: 'MathController'
            });
        $routeProvider.when('/mathematics/:grade',
            {
                templateUrl: 'views/Mathematics.html',
                controller: 'MathController'
            });
        $routeProvider.when('/mathematics/:grade/test',
            {
                templateUrl: 'views/TestView.html',
                controller: 'TestController'
            });
//  $routeProvider.when('/view1', {templateUrl: 'views/partial1.html', controller: 'MyCtrl1'});
//  $routeProvider.when('/view2', {templateUrl: 'views/partial2.html', controller: 'MyCtrl2'});
//  $routeProvider.otherwise({redirectTo: '/'});
    }]);
