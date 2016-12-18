(function(){
  
  'use strict';
  
  angular.module("MenuApp",["ui.router","data"]).
  controller("menuAppController",menuAppController);
  
  menuAppController.$inject=['MenuSearchService','$filter'];

  function menuAppController(MenuSearchService,$filter){
    
   var ctrl = this;
   
   ctrl.categories = [];
  
   ctrl.getCategories = function (){
     
        var data= MenuSearchService.getAllCategories();
       
       data.then(function (answer)
       {
         ctrl.categories = answer;
       })
   };
   
  }

})();