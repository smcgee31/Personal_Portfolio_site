angular.module('app')
.directive('interestsDir', function() {

    return {
        templateUrl: 'about/interests.html',
        restrict: 'AE',
        // scope: {
        //
        // },
        controller: function($scope, aboutSvc) {
            $scope.interests = aboutSvc.getInterests();
        },
        // link: function(scope, element, attrs) {
        //
        // }
    };



});
