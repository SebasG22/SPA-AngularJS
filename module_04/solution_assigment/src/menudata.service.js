(function (){
    
    'use strict';
    
    angular.module("data")
      .service("MenuSearchService",MenuSearchService)
      .constant('basePath', "https://davids-restaurant.herokuapp.com");

     
    MenuSearchService.$inject = ['$http', 'basePath'];

     function MenuSearchService ($http,basePath){
         var service= this ;
         
         service.getAllCategories= function (){
         
         return $http({
                method: "GET",
                url: (basePath + "/categories.json")
                })
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function (error) {
                        console.log("Something went terribly wrong."+error);
                    });
      }
      
      
      service.getCategory= function (categoryShortName){
         
         return $http({
                method: "GET",
                url: (basePath + "/menu_items.json"),
                params:{
             	 category: categoryShortName
                }
                })
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function (error) {
                        console.log("Something went terribly wrong."+error);
                    });
      }
         
     }

})();