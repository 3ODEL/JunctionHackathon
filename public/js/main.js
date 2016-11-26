var app = angular.module('myApp', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'pages/login.html',
            controller  : 'loginCtrl'
        })

        .when('/signup', {
            templateUrl : 'pages/signup.html',
            controller  : 'signupCtrl'
        })

        .when('/home', {
            templateUrl : 'pages/home.html',
            controller  : 'homeCtrl'
        })

        .when('/3dPlayer', {
            templateUrl : 'pages/3dPlayer.html',
            controller  : '3dPlayerCtrl'
        })

});

app.controller('mainCtrl', function($scope) {

});

app.controller('loginCtrl', function($scope) {
  $scope.user = {
    email: "",
    password: ""
  }
  $scope.login = function () {

  }
});

app.controller('signupCtrl', function($scope) {
  $scope.user = {
    email: "",
    password: ""
  }
  $scope.register = function () {

  }
});

app.controller('homeCtrl', function($scope) {

});

app.controller('3dPlayerCtrl', function($scope) {

});
