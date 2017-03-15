"use strict";

angular.module("portfolioApp")

    .controller("infoController", ['$scope', 'dataService', function($scope, dataService) {
        $scope.courses = dataService.getCourses();
        $scope.certifications = dataService.getCertifications();

    }]);