'use strict';

/* Controllers */

myApp.controller('MyCtrl1', [function () {

    }])
    .controller('MyCtrl2', [function () {

    }])
    .controller('TopicController', ['$scope', 'MyService', function ($scope, MyService) {
//        $scope.message = 'fuck you!';
//        myService.getDataFromServer().get().then(function(data){
//            $scope.message = data;
//        });
         MyService.getDataFromServer().success(function(response){
             console.log(response);
             console.log(response.data);
             $scope.message = response;
         });
    }])
    .controller('TestController', ['$scope', 'MyService', function ($scope, MyService) {
//        $scope.pidor = 'сука бля поганые вы все будете сосать!';
        $scope.pidor = MyService.test();
    }]);