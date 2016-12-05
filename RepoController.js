(function() {

  var app = angular.module("githubViewer");

  var RepoController = function($scope, github, $http, $routeParams, $log) {

    var onError = function(reason) {
      $scope.error = reason.status;
    };

    var doContributors = function(data) {
      $scope.contributors = data;
    };

    var onComplete = function(data) {
      $scope.issues = data.open_issues_count;
      github.getContributors(data.contributors_url)
      .then(doContributors, onError);
    };

    github.getRepo($routeParams.username, $routeParams.reponame)
      .then(onComplete, onError);
  };

  app.controller("RepoCtrl", RepoController);
}());