(function (){
    'use strict';
    
    angular.module('LunchCheck',[])
    
    .controller('LunchCheckController',LunchCheckController);
    
    LunchCheckController.$inject=['$scope'];
    
    function LunchCheckController($scope) {
        
        $scope.lunchMenu="";
        
        $scope.message = "Message Report:";
        
        console.log(($scope.lunchMenu).length);


        $scope.checkLunchMenu= function (){
            
            if($scope.lunchMenu.length > 0){
            
            console.log("Lunch:"+$scope.lunchMenu.length);
                
                var itemsLunch = $scope.lunchMenu.split(',');
          
                console.log(itemsLunch);  
            
            } 
            
            //Check if the textbox is empty
            if(itemsLunch.length == 0){
                $scope.message="Please enter data first";
            }
            else {
                if(itemsLunch.length<=3){
                    $scope.message="Enjoy!";

                }
                else{
                    $scope.message="Too much!";

                }
            }
        }
    }
    
})();