(function () {
"use strict";

angular.module('newsletter')
.service('UserService', UserService);


function UserService() {
  var service = this;
  service.userInfo = null;

  service.getUserInfo = function () {
	  return service.userInfo;
  };

  service.setUserInfo = function (userInfo) {
	  service.userInfo=userInfo;
  };

}



})();