// Code goes here
(function() {
  var app = angular.module("githubViewer");

  var UserController = function($scope, github, $routeParams, $location) {

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user)
        .then(onRepos, onError);
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch data";
    };

    var onRepos = function(data) {
      $scope.repos = data;
    };

    var openRepo = function(username, repo) {
      $location.path('/repo/'+ username +'/' + repo);
    };

    $scope.openRepo = openRepo;
    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($scope.username).then(onUserComplete, onError);

  };

  app.controller("UserCtrl", UserController);
}());