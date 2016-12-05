// Code goes here
(function() {
  var app = angular.module("githubViewer");

  var MainController = function($scope, $interval, $location) {

    var countdownInterval = null;

    var startCountdown = function() {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };

    var decrementCountdown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    var onSearch = function(username) {
      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      $location.path("/user/" + username);
    };

    $scope.search = onSearch;

    $scope.username = "angular";
    $scope.countdown = 5;
    startCountdown();

  };

  app.controller("MainCtrl", MainController);
}());