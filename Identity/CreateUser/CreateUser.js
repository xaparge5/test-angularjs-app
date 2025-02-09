// app.js
var app = angular.module('CreateUser', []);

app.controller('CreateUserController', function($scope) {
    $scope.user = {
        username: '',
        email: ''
    };

    $scope.createUser = function() {
        alert('User created: ' + $scope.user.username + ' (' + $scope.user.email + ')');
        // Burada kullanıcıyı kaydetme işlemleri yapılabilir
        
    };
});