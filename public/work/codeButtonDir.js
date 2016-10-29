angular.module('app')
.directive('codebuttonDir', function() {

    return {
        templateUrl: '<a href="{{project.code}}" target="_blank"><div class="codeButton"><span class="codeButtonText">{{project.codeText}}</span></div></a>',
        restrict: 'AE',
        controller: function($scope, workSvc) {
            $scope.projects = workSvc.getProjects();
        }
    };



});