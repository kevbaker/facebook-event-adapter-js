angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, Facebook) {
  // Facebook Setup Begin ----------

  $scope.facebookReady = Facebook.isReady();
  $scope.$watch(function() {
    return Facebook.isReady(); // This is for convenience, to notify if Facebook is loaded and ready to go.
  }, function(newVal) {
    $scope.facebookReady = newVal; // You might want to use this to disable/show/hide buttons and else
  });

  $scope.logout = function(){
    window.logout();
  };

  /**
   * Login for lib/angular-facebook/lib/angular-facebook.js
   */
  window.addEventListener('FACEBOOK_LOGIN_COMPLETE',
    function(e) {
        alert("controller.FACEBOOK_LOGIN_COMPLETE: "+JSON.stringify(e.detail));
      }, false);

   $scope.doFacebookLogin = function() {
     //window.doAlert("doFacebookLogin call");
     /*
     window.addEventListener('FACEBOOK_LOGIN_COMPLETE',
        function(response) {
          alert("FACEBOOK_LOGIN_COMPLETE: "+JSON.stringify(response));
          }, false);
          */
     window.login();
      /*
     Facebook.login(function(response) {
      console.log("Facebook Login");
      console.log(response);
      alert("login response:"+JSON.stringify(response));
      if (response.status == 'connected') {
        $scope.logged = true;
        //$scope.me();
        alert("logged in:"+JSON.stringify(response));
        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
          $scope.closeLogin();
        }, 500);
      }
    });
    */
   };

  // Facebook Setup End -------------



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

  // Perform the login action when the user submits the login form
  $scope.doFacebookLoginOld = function() {
    console.log('Doing login', $scope.loginData);

    /* NOTE: Not working because no access to the facebookConnectPlugin var
    // check if running in a browser
    if (!window.cordova) {
      var appId = "341560645995685"; //prompt("Enter FB Application ID", "");
      facebookConnectPlugin.browserInit(appId);
    }
    facebookConnectPlugin.login( ["email"],
      function (response) { alert(JSON.stringify(response)) },
      function (response) { alert(JSON.stringify(response)) });
    */

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 500);
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
