angular.module('myApp') // Yeni modül açma! 'myApp' modülü içine ekle
.controller('CreateUserController', function($scope) {
    $scope.user = {
        username: '',
        email: ''
    };

    $scope.createUser = function() {
        alert('Kullanıcı oluşturuldu: ' + $scope.user.username + ' (' + $scope.user.email + ')');
    };
});
