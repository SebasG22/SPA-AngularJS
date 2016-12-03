(function(){
    
 'use strict';
 angular.module("ShoppingListCheckOff",[])
 .controller("ToBuyController",ToBuyController)
 .controller("AlreadyBoughtController")
 .service("ShoppingListCheckOffService",ShoppingListCheckOffService);
 
 ToBuyController.$inject=['ShoppingListCheckOffService'];
 
 function ToBuyController(ShoppingListCheckOffService) {
     var itemAdder = this;
     
     itemAdder.itemName = "";
     itemAdder.itemQuantity = "";
     
     itemAdder.addItem = function(){
         ShoppingListCheckOffService.addItem(itemAdder.itemName,itemAdder.itemQuantity);
     }
 }
 
 AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
 
function AlreadyBoughtController (ShoppingListCheckOffService){
    
}
 
    
    
})();