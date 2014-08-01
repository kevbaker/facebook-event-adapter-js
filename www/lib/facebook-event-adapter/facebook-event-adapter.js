/*
 * Facebook Event Adapter
 *
 * Provides an event broadcasting model for the
 * FacebookConnectPlugin. Each FacebookConnectPlugin method
 * will broadcast an event with the asynchronous response.
 *
 * TODO: This is a working prototype. This code should be moved
 * into a module to follow best practices for library distribution.
 */


// Login
window.loginFacebook = function () {
  var permissions = ["email","user_about_me","user_location"];
  facebookConnectPlugin.login( permissions,
    function (response) {
      var event = new CustomEvent("FACEBOOK_LOGIN_COMPLETE",
        { detail: { response: response },
          bubbles: true, cancelable: true
        });
      window.dispatchEvent(event);
    },
    function (response) {
      var event = new CustomEvent("FACEBOOK_LOGIN_ERROR",
        { detail: { response: response },
          bubbles: true, cancelable: true
        });
      window.dispatchEvent(event);
    });
  };

// Logout
window.logoutFacebook = function () {
  facebookConnectPlugin.logout(
      function (response) { alert(JSON.stringify(response)) },
      function (response) { alert(JSON.stringify(response)) }
    );
  };

