angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'homeCtrl'
    })
    .state('work', {
        url: '/work',
        templateUrl: 'work/work.html',
        controller: 'workCtrl'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'about/about.html',
        controller: 'aboutCtrl'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'contact/contact.html',
        controller: 'contactCtrl'
    });



});
