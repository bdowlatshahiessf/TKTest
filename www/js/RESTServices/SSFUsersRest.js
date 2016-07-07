  angular.module("RESTServices", [])
   .service('SSFUsersRest', function($http) {
    var SSFUsersRest = this;
    SSFUsersRest.post = function(newUserData) {
     return $http({
      url: "https://tktest2-bdowlatshahiessf.c9users.io/api/SSFUsers",
      method: 'POST',
      data: newUserData
     });
    };

SSFUsersRest.login = function(data) {
     return $http({
      url: "https://tktest2-bdowlatshahiessf.c9users.io/api/SSFUsers/login",
      method: 'POST',
      data: data
     });
    };

   });