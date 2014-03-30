'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MyCtrl1', [function () {

    }])
    .controller('MyCtrl2', [function () {

    }])
    .controller('TopicController', ['$scope', function ($scope) {
        $scope.message = 'fuck you!';
    }])
    .controller('TestController', ['$scope', 'service', function ($scope, service) {
//        $scope.pidor = 'сука бля поганые вы все будете сосать!';
        $scope.pidor = service.test();
    }]);