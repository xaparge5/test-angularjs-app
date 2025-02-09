angular.module('myApp')
.controller('MenuBarController', function($scope) {
    
    if (sessionStorage != null) {
        $scope.isLoggedIn = true;
        $scope.username = user.username;
    } else {
        $scope.isLoggedIn = false;
    }

    // Kullanıcı çıkış yaparsa sessionStorage temizlenebilir
    $scope.logout = function() {
        sessionStorage.clear(); // Kullanıcı bilgisi silinir
        $scope.isLoggedIn = false; // Menüdeki değişiklikler yapılır
    };
});
