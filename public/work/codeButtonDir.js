angular.module('app')
    .directive('codebuttonDir', function() {
    	
        return {
            templateUrl: 'work/codeButton.html',
            restrict: 'E',
            replace: true,
            controller: function($scope, workSvc) {
                $scope.projects = workSvc.getProjects();
            }
        };



    });
