(function(){
  
  'use strict';
  
  angular.module("MenuApp").
  controller("menuAppCategoriesController",menuAppCategoriesController);
  
  menuAppCategoriesController.$inject=['$filter','categories'];

  function menuAppCategoriesController($filter,categories){
    
   var ctrl = this;
   
   ctrl.categories = categories;
   
  }

})();