angular.module('assessment').controller('mainCtrl', function($scope,$stateParams,myService){
  $scope.message = 'working'
  myService.getProducts().then(function(response){
    $scope.products = response
  })
  // $scope.passId= function(id){
  //   console.log(id)
  //   myService.getProducts().then(function(response){
  //     var products = response;
  //   $scope.product =  products.filter(product => {
  //       if (product.id === id){
  //         console.log('weve found a match',id);
  //         var product = product;
  //         console.log(product)
  //         $scope.chosenProduct = product;
  //       }
  //
  //     })
  //
  //
  //   })
  //
  // }
  // $scope.params = $stateParams.id;
  // $scope.products.forEach(product => {
  //   if(product.id === $scope.params){
  //     console.log(product);
  //   }
  //   else {
  //     console.log('no Match');
  //   }
  // })

})
