'use strict';

var appContext = angular.module('appContext', ['ngRoute'])
				.config(function ($routeProvider, $locationProvider) {
					
					//RestangularProvider.setBaseUrl('http://localhost:8080/pointy-api');
//					RestangularProvider.setBaseUrl("${RestEndpoint}");
					
//					RestangularProvider.setResponseExtractor(function(response, operation, what, url) {
//					  var newResponse = response.payload;
//					  if (angular.isArray(newResponse)) {
//						    angular.forEach(newResponse, function(value, key) {
//						    	if (newResponse[key] != undefined){
//						    		newResponse[key].originalElement = angular.copy(value);
//						    	}
//						    });
//					  } else {
//						  if (newResponse != undefined) {
//							  newResponse.originalElement = angular.copy(newResponse);
//					  	  }
//					  }
//					  return newResponse;
//
//				    });

//				    $routeProvider.otherwise({redirectTo: '/index'});
                    $routeProvider.when('app/index', {templateUrl: 'views/IndexView.html', controller: 'IndexController'});
//        $routeProvider.otherwise({redirectTo: '/view1'});
				    $locationProvider.html5Mode(true);
});