'use strict';

var angular;
angular.module('fantasyApp.controllers.nfl', ['fantasyApp.services.nfl'])
  .controller('NFLController', ['$scope', '$routeParams', 'NFL', function($scope, $routeParams, NFL) {
    $scope.nflTeams = NFL.teams;
    $scope.nflTeam = NFL.teams[$routeParams['nflTeamId']];
  }]);
