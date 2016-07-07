angular.module('starter.controllers')
.controller('historyCtrl', ['$scope', '$window', '$state', 'tests', 'TKanswersService','TKresultsButtonService',
function($scope, $window, $state, tests, TKanswersService, TKresultsButtonService) {
    $scope.tests = tests === undefined ? [] : tests;
    
        $scope.goToResult = function(test)
    
    {
        var answers = {
            "competing": test.competing,
            "collaborating": test.collaborating,
            "compromising": test.compromising,
            "avoiding": test.avoiding,
            "accommodating": test.accommodating
        };
        TKanswersService.setAnswers(answers);
      
        TKresultsButtonService.setShouldShowMenuButton(false);
        $state.go('results');
    };
    
    
    
}]);