angular.module('starter.controllers')
.controller('registerCtrl',['$scope','$state','SSFUsersRest','$window',
function($scope, $state, SSFUsersRest, $window) {


 $scope.user = {};
                $scope.signupForm = function(form) {
         if(form.$invalid){
          return alert("Please complete the form before proceeding.");
         } 

  SSFUsersRest.post($scope.user).then(function(response) {
  if (response.status == 200) {
    $window.localStorage.token = response.data.token;
    $window.localStorage.userID = response.data.id;
   $state.go("lobby");
   console.log(response);
  
 }}, function(error) {
  if (error.status == 422) {
   alert("email exits");
  }
  else if (error.status == 404) {
   alert("server not found");
  }
  return ("Please try again later");
 
 });
 
};
                 
                }]);
 