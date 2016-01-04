var app = angular.module('miniRouting', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateURL: 'js/home/homeTmpl.html',
      controller: 'homeCtrl'
    })

    .state('settings', {
      url: '/settings;',
      templateURL: 'js/settings/settingsTmpl.html',
      controller: 'settingsCtrl'
    })

    .state('products', {
      url: '/products/:id',
      templateURL: 'js/products/productTmpl.html',
      controller: 'productsCtrl'
    });

  $urlRouterProvider
    .otherwise('/');
});
