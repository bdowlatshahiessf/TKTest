angular.module('starter.controllers')
.controller('landingCtrl',['$scope','$state','TKanswersService', 'TKTestQuestionService',
function($scope, $state, TKanswersService, TKTestQuestionService) {

 $scope.user = {};
                $scope.signupForm = function(registerForm) 
   {
         if(registerForm.$invalid) return alert("Please complete the form before proceeding.");
};

}]);
 
 