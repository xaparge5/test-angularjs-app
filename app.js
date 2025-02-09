var app = angular.module('myApp', ['ngRoute']); // ngRoute modülünü dahil ediyoruz

// Menü bar direktifi
angular.module('myApp').directive('menubar', function() {
    return {
        restrict: 'E',
        templateUrl: 'Menu/MenuBar.html', // Menü bar'ı HTML'den alıyoruz
        controller: "MenuBarController"
    };
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {  
            templateUrl: 'Home/Home.html',
            controller: 'HomeController'  
        })
        .when('/create-user', {  
            templateUrl: 'Identity/CreateUser/CreateUser.html',
            controller: 'CreateUserController'  
        })
        .when('/login', {  
            templateUrl: 'Identity/Login/Login.html',
            controller: 'LoginController'  
        })
        .otherwise({
            redirectTo: '/'
        });
});
    


