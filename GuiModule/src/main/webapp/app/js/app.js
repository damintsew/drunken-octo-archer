'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp',
        [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
        'restangular'
]).
config(['$routeProvider', 'RestangularProvider', function($routeProvider, RestangularProvider) {

        RestangularProvider.setBaseUrl('http://localhost:8080/api');
        //RestangularProvider.setBaseUrl("${RestEndpoint}");

//        RestangularProvider.setResponseExtractor(function(response, operation, what, url) {
//            var newResponse = response.payload;
//            if (angular.isArray(newResponse)) {
//                angular.forEach(newResponse, function(value, key) {
//                    if (newResponse[key] != undefined){
//                        newResponse[key].originalElement = angular.copy(value);
//                    }
//                });
//            } else {
//                if (newResponse != undefined) {
//                    newResponse.originalElement = angular.copy(newResponse);
//                }
//            }
//            return newResponse;
//
//        });


  $routeProvider.when('/',
      {
          templateUrl: 'views/IndexView.html',
          controller: 'MyCtrl1'
      });
        $routeProvider.when('/mathematics',
      {
          templateUrl: 'views/Mathematics.html',
          controller: 'TopicController'
      });
        $routeProvider.when('/mathematics/test',
      {
          templateUrl: 'views/TestView.html',
          controller: 'TestController'
      });
  $routeProvider.when('/view1', {templateUrl: 'views/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'views/partial2.html', controller: 'MyCtrl2'});
//  $routeProvider.otherwise({redirectTo: '/'});
}]);
