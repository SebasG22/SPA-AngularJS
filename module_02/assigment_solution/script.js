(function(){
    
 'use strict';
 angular.module("ShoppingListCheckOff",[])
 .controller("ToBuyController",ToBuyController)
 .controller("AlreadyBoughtController",AlreadyBoughtController)
 .service("ShoppingListCheckOffService",ShoppingListCheckOffService);
 
 ToBuyController.$inject=['ShoppingListCheckOffService'];
 
 function ToBuyController(ShoppingListCheckOffService) {
     var itemAdder = this;
     
     itemAdder.itemsPre = ShoppingListCheckOffService.getItemsToBuy();

     itemAdder.addItem = function(item){
         ShoppingListCheckOffService.addItem(item);
     }
 }
 
 AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
 
function AlreadyBoughtController (ShoppingListCheckOffService){
    
    var listBought= this;
    
    listBought.items= ShoppingListCheckOffService.getItemsBought();
}

function ShoppingListCheckOffService(){
    
    var service = this;
    
    var itemsBought=[];
    
    var itemsToBuy= [
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
        
    service.addItem = function (item) {
        itemsBought.push(item);
        itemsToBuy.splice(itemsToBuy.indexOf(item),1);

    }
    
    service.getItemsToBuy = function (){
    return itemsToBuy;
    }
    
    service.getItemsBought = function(){
    return itemsBought;       
    }
}
})();