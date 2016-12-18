(function(){
  
  'use strict';
  
  angular.module("MenuApp").
  controller("menuAppCategoriesDetailController",menuAppCategoriesDetailController);
  
  menuAppCategoriesDetailController.$inject=['plates'];

  function menuAppCategoriesDetailController(plates){
    
   var categoryDetail = this;
   categoryDetail.plates = plates ;

    /*itemDetail.name = category.name;
    itemDetail.description = category.description;
    itemDetail.price = category.price_large;
    */

    
  }

})();