angular.module('starter.controllers')
 .controller('loginCtrl', ['$scope', '$state', 'SSFUsersRest', '$window',
  function($scope, $state, SSFUsersRest, $window) {


   $scope.user = {};
   $scope.aForm = function(form) {
    if (form.$invalid) {
     return alert("Please complete the form before proceeding.");
    }

    SSFUsersRest.login($scope.user).then(function(response) {
     if (response.status == 200) {
      $window.localStorage.token = response.data.id;
      $window.localStorage.userID = response.data.userId;
      $state.go("lobby");
      console.log(response);

     }
    }, function(error) {
     if  (error.status == 404) {
      alert("server not found");
     }
     return ("Please try again later");


    });
 
};
                 
                }]);