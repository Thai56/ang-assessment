angular.module('assessment').directive('productDir', function(){
  return {
    restrict:'AE',
    templateUrl:'./views/product-tmpl.html',
    scope : {
      // take in the product and show the details
      product:'='

    }
  
  }
})
