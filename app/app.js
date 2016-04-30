import angular from 'angular';
import 'angular-new-router';
import 'angular-sanitize';
import 'angular-material';

angular.module('octo', ['ngNewRouter', 'ngSanitize', 'ngMaterial'])
  .controller('AppController', ['$router', AppController]);

function AppController ($router) {

  $router.config([
    {path: '/', component: 'home' }
  ]);

}
