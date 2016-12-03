(function(){
    
 'use strict';
 angular.module("ShoppingListCheckOff",[])
 .controller("ToBuyController",ToBuyController)
 .controller("AlreadyBoughtController",AlreadyBoughtController)
 .service("ShoppingListCheckOffService",ShoppingListCheckOffService);
 
 ToBuyController.$inject=['ShoppingListCheckOffService'];
 
 function ToBuyController(ShoppingListCheckOffService) {
     var itemAdder = this;
     
     itemAdder.itemsPre = [
         {
         name:"Cookies",
         quantity:5
         },
         {
         name:"Tomatoes",
         quantity:2
         },
         {
         name:"Lettuce",
         quantity:3
         },
         {
         name:"Butter",
         quantity:1
         },
         {
         name:"Suggar",
         quantity:4
         },
         {
         name:"Carrots",
         quantity:2
         }
         
     ];
     
     itemAdder.addItem = function(item){
         ShoppingListCheckOffService.addItem(item);
         itemAdder.itemsPre.splice(itemAdder.itemsPre.indexOf(item),1);
     }
 }
 
 AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
 
function AlreadyBoughtController (ShoppingListCheckOffService){
    
    var listBought= this;
    
    listBought.items= ShoppingListCheckOffService.getItems();
}

function ShoppingListCheckOffService(){
    
    var service = this;
    
    var items=[];
    
    service.addItem = function (item) {
        items.push(item);
    }
    
    service.getItems = function(){
    return items;       
    }
}
})();