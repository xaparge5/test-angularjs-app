var app = angular.module('myApp', ['ngRoute']); // ngRoute modülünü dahil ediyoruz

// Menü bar direktifi
angular.module('myApp').directive('menubar', function() {
    return {
        restrict: 'E',
        templateUrl: 'Menu/MenuBar.html' // Menü bar'ı HTML'den alıyoruz
    };
});

// Home sayfası direktifi
angular.module('myApp').directive('home', function() {
    return {
        restrict: 'E',
        templateUrl: 'Home/Home.html',
        controller : 'HomeController' // Ana sayfa içeriğini alıyoruz
    };
});

// Sayfa yönlendirme yapılandırması
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {  // Ana sayfa
            templateUrl: 'Home/Home.html', // Home.html içeriğini yükle
            controller: 'HomeController'  // HomeController controller'ı,
        })
        .when('/create-user', {  // create-user sayfası
            templateUrl: 'Identity/CreateUser/CreateUser.html', // CreateUser.html içeriğini yükle
            controller: 'CreateUserController'  // CreateUserController controller'ı
        })
        .otherwise({
            redirectTo: '/'  // Varsayılan olarak ana sayfaya yönlendir
        });
}); 

    


