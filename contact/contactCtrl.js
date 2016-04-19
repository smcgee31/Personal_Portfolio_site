angular.module('app')
.controller('contactCtrl', function($scope) {

    $scope.visible  = false;
    $scope.thanks = true;

    $scope.toggle = function() {
        $scope.visible = !$scope.visible;
    };

    $scope.thanks = function() {
        $scope.visible = !$scope.visible;
        $scope.thanks = !$scope.thanks;
    };



});
