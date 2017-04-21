var myApp = angular.module('app', ['menu',
'oc.lazyLoad',
'ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {  
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('main', {
            url: '/',
            views: {
                mainContainer: {
                    controller: 'mainController',
                    templateUrl: 'app/angular1/main/main.html'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                     return $ocLazyLoad.load('app/angular1/main/main.ctrl.js');
                }]
            }
        }).state('form', {
            url: '/form',
            views: {
                mainContainer: {
                    controller: 'formController',
                    templateUrl: 'app/angular1/form/form.html'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/angular1/form/form.ctrl.js');
                            }]
            }
        }).state('json', {
            url: '/json',
            views: {
                mainContainer: {
                    controller: 'jsonController',
                    templateUrl: 'app/angular1/json/json.html'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/angular1/json/json.ctrl.js');
                                }]
            }
        }).state('calculator', {
            url: '/calc',
            views: {
                mainContainer: {
                    controller: 'CalculatorController',
                    templateUrl: 'app/angular1/calculator/calculator.html'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/angular1/service/service.js').then(function () {
                        $ocLazyLoad.load('app/angular1/calculator/calculator.ctrl.js');
                    });
                                        }]
            }
        }).state('hello', {
            url: '/hello',
            views: {
                mainContainer: {
                    template: '<hello>Loading hello...</hello>'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/angular2/components/hello/hello.js');
                                        }]
            }
        })
});

