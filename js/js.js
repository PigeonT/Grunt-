var app = angular.module('app', []);
app.controller('controller', ['$scope', function($scope) {
    
    $scope.buttonClick = function() {
        window.alert('really exciting!');
    };
}]);
