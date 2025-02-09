angular.module('myApp')
.controller('LoginController', function($scope, $http) {
    $scope.login = {
        username: '',
        password: ''
    };
    console.log(sessionStorage.user)

    $scope.login = function() {
        const userData = {
            username: $scope.user.username,
            password: $scope.user.password
        };

        $http.post('http://localhost:3000/login', userData)
        .then(function(response) {
            debugger;
            console.log("**************"+response.data);
            $scope.loggedIn = true;
            $scope.user =  JSON.stringify(response.data);
            sessionStorage.user = JSON.stringify(response.data);
            console.log(sessionStorage.user + "-------------");
        })
        .catch(function(error) {
            console.error('Hata:', error);
        });
    };
});
