(function(){
  'use strict';
  angular
  .module('myApp', ['appRoutes','ngMaterial'])
  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange');
});//red, pink, purple, deep-purple, indigo, blue, light-blue, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey
})();

//https://material.angularjs.org/latest/Theming/03_configuring_a_theme
