angular.module('myApp').controller('EditProductController', function($scope, $routeParams, ProductService) {
    var productId = $routeParams.id; 
    $scope.product = {
        id: "",
        ProductName: "",
        StockQuantity: "",
        Price: ""
    };

    // Ürün bilgilerini almak
    ProductService.getProduct(productId).then(function(response) {
        $scope.product = response.data;
        console.log("Ürün verisi başarıyla alındı:", $scope.product);
    }).catch(function(error) {
        console.error('Ürün yüklenirken hata oluştu:', error);
        $scope.product = null;
    });

    // Ürün düzenleme işlemi
    $scope.createProduct = function() {
        // Ürünün verilerini formdan alıyoruz
        if ($scope.product.ProductName && $scope.product.StockQuantity && $scope.product.Price) {
            ProductService.updateProduct($scope.product)
                .then(function(response) {
                    alert("Ürün başarıyla güncellendi!");
                    console.log(response);
                    window.location.href = "/#!/products";  // Liste sayfasına yönlendir
                })
                .catch(function(error) {
                    alert("Ürün güncellenirken bir hata oluştu.");
                    console.error(error);
                });
        } else {
            alert("Lütfen tüm alanları doldurun!");
        }
    };
});
