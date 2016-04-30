import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.min.css';
import router from 'angular-ui-router';


import componentsModule from './components/components.js';
import appRoutes from './app-routes.js';

angular.module('app', [router, ngSanitize, ngMaterial, componentsModule])
  .config(appRoutes);
