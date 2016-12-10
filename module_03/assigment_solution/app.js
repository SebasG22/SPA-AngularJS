(function(){
    
  'use strict';

  angular.module("NarrowItDownApp",[])
  .controller("NarrowItDownController",NarrowItDownController)
  .service("MenuSearchService",MenuSearchService)
  .constant('basePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'itemsloaderindicator.template.html',
    scope: {
      title: '@',
      items: '<',
      onRemove: '&'
    },
    controller: menuDescriptionDirectiveController,
    controllerAs: 'menuDescription',
    bindToController: true
  };

  return ddo;
}

function menuDescriptionDirectiveController() {
  var menuDescription = this;

}

  NarrowItDownController.$inject=['MenuSearchService','$filter'];
  function NarrowItDownController(MenuSearchService,$filter){
      
      var menuDescription = this;
      
      var origTitle = "Items Founded";
      menuDescription.title = "";   
      
      menuDescription.removeItem = function (itemIndex) {
          console.log("Click on Remove");
         menuDescription.getItems.splice(itemIndex,1);
               menuDescription.title = menuDescription.getItems.length + " " + origTitle;   

      }
      
      menuDescription.validateInput = function (termSearch){
          if(termSearch!=undefined && termSearch.length > 0 ){
             var a =  MenuSearchService.getMatchedMenuItems($filter('lowercase')(termSearch));
             a.then(function(data) {
                 if(data.length!=0){
                 menuDescription.getItems = data ;
                 menuDescription.title = menuDescription.getItems.length + " " + origTitle;   
                     for (var key in data) {
                            // skip loop if the property is from prototype
                            if (!data.hasOwnProperty(key)) continue;
                        
                            var obj = data[key];
                            
                            for (var prop in obj) {
                                // skip loop if the property is from prototype
                                if(!obj.hasOwnProperty(prop)) continue;
                        
                                // your code
                                console.log(prop + " = " + obj[prop]);
                            }
                       }
                 }
                 else{
                  menuDescription.getItems=[];
                  menuDescription.title = "Nothing Found";  
                  menuDescription.getItems=[];
                 }
                 
            })
          }
          else {
              menuDescription.title = "Nothing Found";   
              menuDescription.getItems=[];
          }
      }

  }
  
  MenuSearchService.$inject = ['$http', 'basePath'];
  function MenuSearchService ($http,basePath){
      var service = this;
      
      
      service.getMatchedMenuItems= function (searchTerm){
         
         return $http({
                method: "GET",
                url: (basePath + "/menu_items.json")
                })
                    .then(function (response) {
                        console.log(response);
                                 var foundItems = [];  

                        angular.forEach(response.data.menu_items,function (value,index){
                        if(value.description.includes(searchTerm)){
                            foundItems.push(value);
                        }
                        })
                        return foundItems;
                    })
                    .catch(function (error) {
                        console.log("Something went terribly wrong."+error);
                    });
      }
  }
    
})();