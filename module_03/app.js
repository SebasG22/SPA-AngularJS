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
      items: '<'
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

  NarrowItDownController.$inject=['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
      
      var menuDescription = this;
      
      var origTitle = "# Items Founded";
      menuDescription.title = origTitle;   
      
      
      
      menuDescription.validateInput = function (termSearch){
          if(termSearch!=undefined && termSearch.length > 0 ){
             var a =  MenuSearchService.getMatchedMenuItems(termSearch);
             a.then(function(data) {
                 if(data.length!=0){
                 menuDescription.menuDescInputShow = false;
                 menuDescription.getItems = data ;
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
                  menuDescription.menuDescInputShow = true;
                  menuDescription.getItems=[];
                 }
                 
            })
          }
          else {
              menuDescription.menuDescInputShow = true;
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