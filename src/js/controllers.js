"use strict";

angular.module("portfolioApp")

    .controller("infoController", ['$scope', 'dataService', function($scope, dataService) {
		$scope.modalTitle = "";
		$scope.modalContent = "";
		$scope.academics = dataService.getAcademics();
        $scope.courses = dataService.getCourses();
        $scope.certifications = dataService.getCertifications();

    }]);