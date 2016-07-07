angular.module('RESTServices')
.service('TestResultsRest', ['$http', '$window', function($http, $window){
    
   
    var apiurl = 'https://tktest2-bdowlatshahiessf.c9users.io/api/TestResults/';
    var TestResultsRest = this;
    
   
  
    TestResultsRest.save = function(test){
        return $http({
            url:apiurl,
            method:'POST',
            data:test,
            headers: {
                  'Authorization': test
              }
            
        });
    };
    TestResultsRest.recall = function(token, userID){
        return $http({
            url:'https://tktest2-bdowlatshahiessf.c9users.io/api/TestResults?filter[where][userID]=' + $window.localStorage.userID,
            method:'GET',
             headers: {
            'Authorization': token
        }
            
        });
    };
    
    TestResultsRest.reQuestions = function(token){
        return $http({
            url:"https://tktest2-bdowlatshahiessf.c9users.io/api/Questions/",
            method:'GET',
             headers: {
            'Authorization': token
        }
           
        });
    };
    
    
}]);