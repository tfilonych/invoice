(function() {
  angular.module("Invoice", []).controller("ApplicationController", ["$scope", "ValidationService", "$http", "ProductQuery",
  function($scope, ValidationService, $http, ProductQuery) {
    this.product = {};
    var appCtrl = this;
    $scope.products = [];
    $scope.numPattern = /\d/;
    this.validation = new ValidationService($scope);

    this.save = function() {
      $scope.appForm.submitted = false;
      if ($scope.appForm.$valid) {
        $http.post('/products', this.product).success(function(data) {
          appCtrl.product = {};
          $scope.appForm.submitted = false;
          $scope.appForm.$setPristine();
          $scope.updatePage();
        });
      } else {
        $scope.appForm.submitted = true;
      }
    };

    $scope.totalSum = function() {
      var sum = 0;
      for ( i = 0; i < $scope.products.length; i++) {
        sum = sum + ($scope.products[i].quantity * $scope.products[i].price);
      }
      return sum;
    };

    $scope.$on("product_deleted", function(event, data) {
      $scope.updatePage();
    });

    $scope.$on("product_updated", function(event, data) {
      $scope.updatePage();
    });

    $http.get('/products').success(function(data) {
      $scope.products = data;
    });

    $scope.updatePage = function() {
      ProductQuery.getProducts().success(function(data) {
        $scope.products = data;
      });
    };

  }])

  .controller("tableRowCtrl", ["$scope", "$http", "ProductQuery",
    function($scope, $http, ProductQuery) {
      $scope.products = [];
      $scope.newproduct = {};
      this.editable = false;

      $http.get('/products').success(function(data) {
        $scope.products = data;
      });

      $scope.$on("product_added", function(event, data) {
        $scope.products = data;
      });

      this.cancel = function(id) {
        angular.copy($scope.newproduct, this.product);
        console.log($scope.newproduct);
        this.editable = false;

        console.log($scope.newproduct);
      };

      this.edit = function(id) {
        this.editable = true;
        for (i in $scope.products) {
          if ($scope.products[i].id == id) {
            $scope.newproduct = angular.copy($scope.products[i]);
          }
        }
      };

      this.save = function(id) {
        $http.put('/product/' + $scope.product.id, $scope.product).
          success(function(data) {
            $scope.$emit("product_updated");
        });
        this.editable = false;
      };

      this.delete = function(id) {
        $http.delete('/product/' + id).success(function(data) {
          $scope.$emit("product_deleted", data);
        });
      };

      this.cancel = function(id) {
        angular.copy($scope.newproduct, this.product);
        this.editable = false;
      };

  }])
  .directive("tableRow", ["ProductService",
  function(ProductService) {
    return {
      restrict : "E",
      templateUrl : "templates/table-row.html",
      controller : "tableRowCtrl",
      controllerAs : "rowCtrl"
    };
  }]);

})();
