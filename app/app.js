import angular from 'angular';
import 'angular-sanitize';
import 'angular-material';
import 'angular-material/angular-material.min.css';
import router from 'angular-ui-router';


import HomeModule from './components/home/home.js';
import appRoutes from './app-routes.js';

angular.module('octo', [router, 'ngSanitize', 'ngMaterial', HomeModule])
  .config(appRoutes);
