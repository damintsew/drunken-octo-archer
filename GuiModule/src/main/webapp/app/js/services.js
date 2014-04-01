'use strict';

/* Services */

myApp.factory('MyService', ['$http', function($http){
        return {
            test : function() {
                return 'xyu suka bl9';
            },

            getDataFromServer : function() {
                return $http.get("/api/image");
            }
        }
    }]);
