(function (){
    'use strict';
    
    angular.module('LunchCheck',[])
    
    .controller('LunchCheckController',LunchCheckController);
    
    LunchCheckController.$inject=['$scope'];
    
    function LunchCheckController($scope) {
        
        $scope.lunchMenu;
        
        $scope.message = "Message Report: Blank";
        
        $scope.styleMessage={color:'black'};
        
        $scope.styleBox={};

        console.log(($scope.lunchMenu));

        $scope.checkLunchMenu= function (){
            
            console.log($scope.lunchMenu);
            
            if($scope.lunchMenu != undefined && $scope.lunchMenu !=""){
            
                //console.log("Lunch:"+$scope.lunchMenu.length);
                
                var itemsLunch = $scope.lunchMenu.split(',');
          
                console.log(itemsLunch);  
                
                if(itemsLunch.length<=3){
                    $scope.message="Enjoy!";
                    $scope.styleMessage={color:'green'};
                    $scope.styleBox={border:'1px solid green'};
                }
                else{
                    $scope.message="Too much!";
                    $scope.styleMessage={color:'green'};
                    $scope.styleBox={border:'1px solid green'};
                }
            } 
            else{
                $scope.message = "Message Report: Please enter data first";
                $scope.styleMessage={color:'red'};
                $scope.styleBox={border:'1px solid red'};
            }
        }
    }
    
})();