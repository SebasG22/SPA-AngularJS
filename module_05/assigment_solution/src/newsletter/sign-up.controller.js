(function () {
"use strict";

angular.module('newsletter')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
  var noItem = 'none';
  var $ctrl = this;
  $ctrl.foundItem = {};
  $ctrl.completed = false;

  $ctrl.submit = function () {
    $ctrl.foundItem.name=noItem;
    $ctrl.completed = false;
      var promise = MenuService.getMenuItem($ctrl.user.mealid);
      promise.then(function (response) {
        $ctrl.foundItem.name=response.name;
        $ctrl.completed = true;
        // User info
        $ctrl.user.mealName=response.name;
        if (!response.description || response.description.length === 0){
          $ctrl.user.mealDescription='No description of this meal is available';
        } else {
          $ctrl.user.mealDescription=response.description;          
        }
        $ctrl.user.mealImage=getImage(response.short_name);
        console.log($ctrl.user.mealImage);
        UserService.setUserInfo($ctrl.user);
      })
      .catch(function (error) {
      $ctrl.foundItem.name=noItem;
          console.log("no such id:" + error);
      })
  };

  function getImage(shortName){
    return shortName.replace(/[^A-Z]+/g, '');
  }

}

})();