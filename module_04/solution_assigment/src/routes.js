(function (){
    
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/views/home.html',
        controller: "menuAppController as menu"
      })
      
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/views/categories.html',
        controller:"menuAppCategoriesController as menu",
        resolve: {
              categories: ['MenuSearchService', function (MenuSearchService) {
                      return MenuSearchService.getAllCategories();
                     }]
                }
      })
      
      .state('categoriesDetail', {
        url: '/detailCategories/{category}',
        templateUrl: 'src/views/detailCategories.html',
        controller:"menuAppCategoriesDetailController as detail",
        resolve: {
              plates: ['$stateParams', 'MenuSearchService',
                      function ($stateParams, MenuSearchService) {
                        return MenuSearchService.getCategory($stateParams.category)
                        .then(function (items) {
                              return items;
                });
            }]
    }
      })
    
      
    }
})();