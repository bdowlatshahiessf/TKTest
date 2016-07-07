angular.module('starter.controllers')
.controller('questionsCtrl',['$scope', '$stateParams', 'testInfo', 'TKanswersService', '$state', '$ionicHistory','TKresultsButtonService', '$window',
function($scope, $stateParams, testInfo, TKanswersService, $state, $ionicHistory, TKresultsButtonService, $window) {
    $scope.qNumber = $stateParams.questionID;
    
    testInfo.forEach(function(infoDict) {
     if(infoDict.Answer_ID === "A")
          $scope.questionA = infoDict;
     if(infoDict.Answer_ID === "B")
          $scope.questionB = infoDict;
});

$scope.buttonClicked = function ( option ) {
        var category = $scope["question" + option].Style;
        TKanswersService.saveAnswer(category);
       
        if($scope.qNumber == 30) {
           performRequest();
        }
        else {
          var nextqNumber = Number($scope.qNumber) + 1;
          $state.go('question', {questionID: nextqNumber});
        }
};
   
   $scope.goBack = function() {
      if($scope.qNumber >1)
        TKanswersService.eraseLastAnswer();
      $ionicHistory.goBack();
 };
 
 
 function performRequest()
{
    var answersDict = angular.copy(TKanswersService.getAnswers());
    var date = new Date();
    answersDict["createDate"] = date.toUTCString();
    TKanswersService.saveTest(answersDict);
    TKresultsButtonService.setShouldShowMenuButton(true);
    $ionicHistory.nextViewOptions({
         historyRoot: true
    });
    $state.go('results');
}
   
    
    
}]); 