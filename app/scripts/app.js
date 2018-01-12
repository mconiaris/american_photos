'use strict';

/**
 * @ngdoc overview
 * @name americanPhotosApp
 * @description
 * # americanPhotosApp
 *
 * Main module of the application.
 */
angular
  .module('americanPhotosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
