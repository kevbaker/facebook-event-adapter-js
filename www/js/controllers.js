angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopup) {

  // Scope variable used to test scope in the event callback function below
  $scope.controllerName = "AppCtrl";

  // Handle Facebook Login Complete event
  window.addEventListener('FACEBOOK_LOGIN_COMPLETE',
    function(e) {
      var msg = $scope.controllerName +" "+JSON.stringify(e.detail);

        $ionicPopup.alert({
           title: 'FACEBOOK_LOGIN_COMPLETE',
           template: msg
         });

      }, false);

  // Login to Facebook
  $scope.doFacebookLogin = function() {
    window.loginFacebook();
  };

  // Logout of Facebook
  $scope.logout = function(){
    window.logoutFacebook();
  };

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/facebook_login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
