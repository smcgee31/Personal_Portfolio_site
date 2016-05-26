angular.module('app')
.directive('headerDir', function() {

    return {
        templateUrl: 'public/header/header.html',
        restrict: 'AE',
        controller: function($scope) {

            $scope.visible  = false;
            $scope.thanks = false;

            $scope.toggle = function() {
                $scope.visible = !$scope.visible;
            };

            $scope.thanks = function() {
                $scope.visible = !$scope.visible;
                $scope.thanks = !$scope.thanks;
            };

            $scope.toggle = function() {
                $scope.class = !$scope.class;
            };

        }
    };




});
