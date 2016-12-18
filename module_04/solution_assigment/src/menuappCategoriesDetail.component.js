(function(){
    'use strict';
    
    angular.module("MenuApp")
    .component("detailCategory",{
        templateUrl: 'src/components/menuappCategoriesDetail.component.html',
        bindings:{
          plates: '<'
        }
        }).run(function(){
		console.log("detail-category-component: running");
	});
    
})();