(function () {
  'use strict';

  angular.module('myFirstApp',[])

  .controller('myFirstController',function ($scope) {
$scope.name="Sebastian";
$scope.sayHello= function () {
  return "Hello Sebas !";
}

  });

})();
