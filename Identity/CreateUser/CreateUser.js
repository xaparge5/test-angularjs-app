angular.module('myApp')
.controller('CreateUserController', function($scope, $http) {
    $scope.user = {
        username: '',
        email: '',
        password: ''
    };

    $scope.createUser = function() {
        const userData = {
            username: $scope.user.username,
            email: $scope.user.email,
            password: $scope.user.password
        };

        $http.post('http://localhost:3000/add-user', userData)
        .then(function(response) {
            console.log('Başarıyla eklendi:', response.data);
            alert('Kullanıcı eklendi!');
        })
        .catch(function(error) {
            console.error('Hata:', error);
        });
    };
});
