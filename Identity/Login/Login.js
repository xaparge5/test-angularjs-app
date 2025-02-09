angular.module('myApp')
.controller('LoginController', function($scope, $http) {
    $scope.login = {
        username: '',
        password: ''
    };

    $scope.login = function() {
        const userData = {
            username: $scope.user.username,
            password: $scope.user.password
        };

        $http.post('http://localhost:3000/login', userData)
        .then(function(response) {
             // Oturumu başlat
             console.log(response)
             SessionService.startSession(response.username, response.id);
             $scope.loggedIn = true;
             $scope.user = SessionService.getSession();
             console.log("*******"+SessionService.getSession())
        })
        .catch(function(error) {
            console.error('Hata:', error);
        });
    };
});
