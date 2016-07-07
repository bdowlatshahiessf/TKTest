angular.module('starter.controllers')
.controller('lobbyCtrl',['$scope','$state','TKanswersService', 'TKTestQuestionService',
function($scope, $state, TKanswersService, TKTestQuestionService) {

 TKTestQuestionService.all();
 

 

$scope.goToTest = function()
   {
        TKanswersService.resetAnswers();
           $state.go('question',{ 
               questionID: 1});
   }; 

}]);
 