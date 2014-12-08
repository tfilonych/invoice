(function() {
  angular.module("Invoice").factory("ValidationService", function() {
    function Validation($scope) {
      this.$scope = $scope;
      this.error = {};
    }

    Validation.prototype.hasErrors = function(fieldname) {
      return  (this.$scope.appForm[fieldname].$dirty && this.$scope.appForm[fieldname].$invalid) ||
              (this.$scope.appForm.submitted && this.$scope.appForm[fieldname].$invalid);
    };

    Validation.prototype.productErr = function() {
      if (this.hasErrors("product")) {
        if (this.$scope.appForm.product.$error.required) {
          this.error.product = "Enter product name";
        } else if (this.$scope.appForm.product.$error.minlength) {
          this.error.product = "Your product is required";
        }
      } else {
        this.error.product = "";
      }
      return this.error.product;
    };

    Validation.prototype.priceErr = function() {
      if (this.hasErrors("price")) {
        if (this.$scope.appForm.price.$error.required) {
          this.error.price = "Enter price";
        } else if (this.$scope.appForm.price.$error.pattern) {
          this.error.price = "Enter number";
        }
      } else {
        this.error.price = "";
      }
      return this.error.price;
    };

    Validation.prototype.quantityErr = function() {
      if (this.hasErrors("quantity")) {
        if (this.$scope.appForm.quantity.$error.required) {
          this.error.quantity = "Enter quantity";
        } else if (this.$scope.appForm.quantity.$error.pattern) {
          this.error.quantity = "Enter number";
        }
      } else {
        this.error.quantity = "";
      }
      return this.error.quantity;
    };

    Validation.prototype.unitsErr = function() {
      if (this.hasErrors("units")) {
        if (this.$scope.appForm.units.$error.required) {
          this.error.units = "Enter units";
        } else {
          this.error.units = "";
        }
        return this.error.units;
      }
    };

    return Validation;

  })
  .factory("ProductQuery", ['$http',
  function($http) {
    return {
      getProducts : function() {
        return $http.get('/products');
      }
    };
  }]);

})();
