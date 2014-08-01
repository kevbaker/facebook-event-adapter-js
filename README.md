# Ionic Phonegap Facebook Plugin Example

A project to test integration of the Phonegap Facebook Plugin with an Ionic Framework app.

The Phonegap Facebook Plugin works with Phonegap, Cordova and Ionic projects.

## References

* [Ionic Framework Getting Started](http://ionicframework.com/getting-started/) - Setup initial Ionic project reference.
* [Phonegap Facebook Plugin](https://github.com/Wizcorp/phonegap-facebook-plugin) - The plugin used to integrate with Facebook. This provides native dialogs for Facebook integration.
* [Phonegap Facebook Plugin iOS Example App](https://github.com/Wizcorp/phonegap-facebook-plugin/tree/master/platforms/ios) - used as a reference to get the plugin working with Ionic.


## How we build this project

### Initialize Ionic App

We recommend using the `ionic` utility to create new Ionic projects that are based on this project but use a ready-made starter template.

For example, to start a new Ionic project with the default tabs interface, make sure the `ionic` utility is installed:

```bash
$ sudo npm install -g ionic
```

Then run the below command to get a seed ionic sidemenu app. NOTE: change `ionic-facebook-exampe` to your app name:

```bash
$ sudo npm install -g ionic
$ ionic start ionic-facebook-example sidemenu
```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page.

### Setup Facebook App

Facebook requires that you register your app with Facebook. This will give you the APP_ID and APP_NAME needed to initialize
your app's plugin configuration.

1. Goto [developer.facebook.com/apps](http://developers.facebook.com/apps)
* Click on the `Apps` menu and choose `Create a New App`
* Fill in the app `Display Name`, `Namespace` (optional) and choose a `Category` for your app.
* Record the `App ID` for later use.
* Choose `Settings` from the left side menu
* Click `Add Platform` button
* Choose `iOS`
  * Fill in form with your app `Bundle ID`, this is the `widget id` found in your `config.xml`
  * Skip the `iPhone Store ID` until you are ready to submit to the app store. This will later be obtained through iTunes Connect.
* Click `Add Platform` button
* Choose `Android`
  * Fill in form with your app `Package Name`, the display name of your app and the `Class Name`, the `widget id` found in your `config.xml`
* Click `Save Changes` button


### Setup Platforms on Ionic App

You must install the cordova platforms before installing the plugin. The plugin install will alter the platform configuration settings.

```bash
$ ionic platform add ios android
```

### Install Phonegap Facebook Plugin

1. Replace the <YOUR-FACEBOOK-APP-ID> with the `APP_ID` from "Setup Facebook App" above.
* Replace <YOUR-FACEBOOK-APP-NAME> with the `APP_NAME` from "Setup Facebook App" above.
* Run the below command from your project root.

```bash
cordova plugin add https://github.com/phonegap/phonegap-facebook-plugin --variable APP_ID=<YOUR-FACEBOOK-APP-ID> --variable APP_NAME=<YOUR-FACEBOOK-APP-NAME>
```

### Create facebookConnectPlugin File

Create the `facebookConnectPlugin.js` file in your `www/js` directory from the [following github source](https://raw.githubusercontent.com/Wizcorp/phonegap-facebook-plugin/master/www/js/facebookConnectPlugin.js).

### Create Facebook Event Adapter

Create the `facebook-event-adapater/facebook-event-adapater.js` in the `lib` directory. The Facebook Event Adapter JS
handles broadcasting events from the Facebook Connect Plugin for a simple interface with Javascript frameworks without
requiring deep framework integration.

### Create Facebook Login Code

Review this project's src `www/index.html`, `www/app.js`, `www/js/controllers.js`,  `www/templates/*` and `www/lib/facebook-event-adapter/facebook-event-adapter.js` files for references

## Methods

* `window.loginFacebook()` - uses Phonegap Facebook Plugin login method. Returns the `FACEBOOK_LOGIN_COMPLETE` event with Facebook auth information.
* `window.logoutFacebook()` - Uses Phonegap Facebook Plugin logout method.
 
## Events

* `FACEBOOK_LOGIN_COMPLETE` - Fired on successful login with the Facebook auth information as the event payload.
