angular.module('assessment').directive('product', function(){
  return {
    restrict:'AE',
    templateUrl:'./views/product-tmpl.html',
    scope : {
      // take in the product and show the details
      AlertProduct:'&'

    },
    controller: function($scope, myService){
      myService.getProducts().then(function(response){
        $scope.products = response;
      })
    }
  }
})
