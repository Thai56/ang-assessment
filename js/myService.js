angular.module('assessment').service('myService', function($http){
  this.getProducts = function(){
    return $http({
      method:'GET',
      url:'https://practiceapi.devmounta.in/products'
    }).then(function(response){
      return response.data;
    })
  }
})
