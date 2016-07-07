// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'TKTestQuestions', 'starter.controllers', 'TKTestAnswers', 'chart.js',
'TKresultsButton', 'RESTServices'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  
  .state('landing', {
    url: '/',
    templateUrl: 'templates/landing.html',
    controller: 'landingCtrl',
  })
  .state('lobby', {
    url: '/lobby',
    templateUrl: 'templates/lobby.html',
    controller: 'lobbyCtrl',
  })
  .state('question', {
    url: '/question:questionID',
    templateUrl: 'templates/questions.html',
    controller: 'questionsCtrl',
    resolve: {
      testInfo: function($stateParams, TKTestQuestionService) {
       
        return TKTestQuestionService.getQuestion($stateParams.questionID);
      }
    }
})
  .state('results', {
    url: '/results',
    templateUrl: 'templates/results.html',
    controller:'resultsCtrl',
    cache: 'false',
  })

  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller:'registerCtrl',
    cache: 'false',
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller:'loginCtrl',
    cache: 'false',
  })
  
  .state('history', {
    url: '/history',
    templateUrl: 'templates/history.html',
    controller: 'historyCtrl',
    resolve: {
      tests: ['TKanswersService','$window','$state', function(TKanswersService, $window, $state) {
        return TKanswersService.getTests($window.localStorage.userID, $window.localStorage.token)
        .then(function(res){
           console.log(res);
           return res.data;
       },  function(error){
  if (error.status == 404) {
   alert("server not found");
  }
           console.log(error);
            return ("Please try again later");
           
       });
      }]
    }
  });
});
