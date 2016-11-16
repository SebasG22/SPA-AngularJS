(function (){
    'use strict';
    
    angular.module('LunchCheck',[])
    
    .controller('LunchCheckController',LunchCheckController);
    
    LunchCheckController.$inject=['$scope'];
    
    function LunchCheckController($scope) {
        
        $scope.lunchMenu;
        
        $scope.message = "Message Report: Blank";
        
        $scope.style={color:'black'};
        console.log(($scope.lunchMenu));


        $scope.checkLunchMenu= function (){
            
            console.log($scope.lunchMenu);
            if($scope.lunchMenu != undefined && $scope.lunchMenu !=""){
            
            //console.log("Lunch:"+$scope.lunchMenu.length);
                
                var itemsLunch = $scope.lunchMenu.split(',');
          
                console.log(itemsLunch);  
                
                                if(itemsLunch.length<=3){
                    $scope.message="Enjoy!";
                            $scope.style={color:'green'};


                }
                else{
                    
                    $scope.message="Too much!";
                                                $scope.style={color:'green'};


                }
            
            } 
            else{
                $scope.message = "Message Report: Please enter data first";
                                            $scope.style={color:'red'};

            }
            

    
            
        }
    }
    
})();