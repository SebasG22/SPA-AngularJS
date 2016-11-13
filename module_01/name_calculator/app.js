(function () {
  'use strict';

  angular.module('nameCaculator',[])

  .controller('nameCaculatorController',function ($scope) {
$scope.name="Sebastian";
$scope.sayHello= function () {
  return "Hello Sebas !";
}

  });

})();
