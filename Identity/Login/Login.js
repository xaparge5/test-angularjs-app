angular.module('myApp')
.controller('LoginController', function($scope, $http) {
    $scope.login = {
        username: '',
        password: ''
    };

    $scope.login = function() {
        alert('login')
    };
});
