(function() {
  var github = function($http, $q, $log) {


    var onError = function(notFound) {
      return $q.reject("Could not find " + notFound);
    };

    var getUser = function(username) {
      return $http.get("https://api.github.com/users/" + username)
        .then(function(response) {
            return response.data;
          },
          onError(username)
        );
    };

    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
            return response.data;
          },
          onError(user.repos_url)
        );
    };

    var getRepo = function(user, reponame) {
      return $http.get("https://api.github.com/repos/" + user + "/" + reponame)
        .then(function(response) {
            return response.data;
          },
          onError("/" + user + "/" + reponame)
        );
    };

    var getContributors = function(contributors_url) {
      return $http.get(contributors_url)
        .then(function(response) {
            return response.data;
          },
          onError(contributors_url)
        );
    };

    return {
      getUser: getUser,
      getRepos: getRepos,
      getRepo: getRepo,
      getContributors: getContributors
    };

  };

  var module = angular.module("githubViewer");

  module.factory("github", github);

}());