(function (){
    
    'use strict';
    
    angular.module("MenuApp")
    .component("listCategories", {
        templateUrl: 'src/components/menuappCategories.component.html',
        bindings:{
          categories: '<'
        }
        }).run(function(){
		console.log("list-categories-component: running");
	});
    
})();