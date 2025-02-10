angular.module('myApp').controller('EditProductController', function($scope, $routeParams, ProductService) {
    var productId = $routeParams.id; 

    ProductService.getProduct(productId).then(function(response) {
        
        $scope.product = response.data;

        $scope.ProductName = $scope.product.ProductName;
        $scope.StockQuantity = $scope.product.StockQuantity;
        $scope.Price = $scope.product.Price;
    }).catch(function(error) {
        console.error('Ürün yüklenirken hata oluştu:', error);
        $scope.product = null; 
    });
});
