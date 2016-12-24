(function() {
'use strict';

angular.module('newsletter').config(routeConfig);

routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('newsletter', {
    	abstract: true,
        templateUrl: 'src/newsletter/newsletter.html'
    })
    .state('newsletter.my-info', {
        url: '/my-info',
        templateUrl: 'src/newsletter/my-info.html',
        controller: 'MyInfoController',
        controllerAs: 'myInfoCtrl'
    })
    .state('newsletter.sign-up', {
        url: '/sign-up',
        templateUrl: 'src/newsletter/sign-up.html',
        controller: 'SignUpController',
        controllerAs: 'signUpCtrl'
    });
}
})();