angular.module('starter.controllers')
    .controller('resultsCtrl', ['$scope', 'TKanswersService', '$ionicHistory', 'TKresultsButtonService', '$state',
            function($scope, TKanswersService, $ionicHistory, TKresultsButtonService, $state) {

                $scope.shouldShowButton = TKresultsButtonService.getShouldShowMenuButton();

               $scope.menuButtonTapped = function()
    {
        $ionicHistory.nextViewOptions({
            historyRoot: true,
            disableBack: true
        });
        $state.go('lobby');
    }; 
                $scope.labels = ["Competing", "Collaborating", "Compromising", "Avoiding", "Accommodating"];

                var answersInfo = TKanswersService.getAnswers();

                function returnPercentage(value) {
                    return (value / 12) * 100;
                        }

                    
                        $scope.data = [
                            [returnPercentage(answersInfo["competing"]), returnPercentage(answersInfo["collaborating"]),
                                returnPercentage(answersInfo["compromising"]), returnPercentage(answersInfo["avoiding"]), returnPercentage(answersInfo["accommodating"])
                            ]
                        ];
                        
                        $scope.options = {
        scaleIntegersOnly: true,
        animation: false,
        responsive:true,
        maintainAspectRatio: false,
        scaleOverride: true,
        scaleSteps: 4,
        scaleStepWidth: 25,
        scaleStartValue: 0,
        scaleLabel: "<%=value%>"+"%",
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value.toFixed(0) %>"+"%",
    };
    
    $scope.colours = [{
       fillColor: "rgba(100,17,205,0.2)",
       strokeColor: "red",
       pointColor: "gold",
       pointStrokeColor: "#fff",
       pointHighlightFill: "#fff",
       pointHighlightStroke: "rgba(151,187,205,0.8)"
}];
    
                        
                        
            }]);