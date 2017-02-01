angular.module('assessment').controller('detailsCtrl', function($scope,$stateParams,myService){
  $scope.params = $stateParams.id
  myService.getProducts().then(response => {
    $scope.detailsProducts = response
    $scope.detailsProducts.forEach(product => {
        if(product.id === $scope.params){
          console.log('MATCH @#$%^&*()',product);
          $scope.unqProd = product;
        }
    })

  })
  // if(!!$scope.params){
  //   console.log($scope.params);
  //   console.log($scope.detailsProducts);
  //   // $scope.detailsProducts.forEach(product => {
  //   //   // if(product.id === $scope.params){
  //   //   //   console.log(product);
  //   //   // }
  //   // })
  // }
})
