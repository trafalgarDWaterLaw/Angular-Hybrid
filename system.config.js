System.config({
    defaultJSExtensions: true,
    paths: {
        "npm:*": 'node_modules/*'
    },
    map: {
        'jquery': 'https://code.jquery.com/jquery-3.1.1',
        'tether': 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether',
        'bootstrap': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min',
        'angular': 'node_modules/angular/angular',
        'moment': 'node_modules/moment/moment',
        'ocLazyLoad': 'node_modules/ocLazyLoad/dist/ocLazyLoad',
        'angularUiRouter': 'node_modules/angular-ui-router/release/angular-ui-router',
        'angularCookies':'node_modules/angular-cookies/angular-cookies',
        'angular2': 'node_modules/angular2/bundles/angular2',
        'upgrade': 'node_modules/angular2/bundles/upgrade',
        'http': 'node_modules/angular2/bundles/http',
        'Rx': 'node_modules/rxjs/bundles/Rx',
        'app.mod': 'app/angular1/app.mod',
        "menu.dir": "app/angular1/menu/menu.dir"
     },
    meta: {
            'node_modules/ocLazyLoad/dist/ocLazyLoad': {
                format: 'global', // load this module as a global
                exports: 'angular', // the global property to take as the module value
                deps: ['angular', 'angular2']
            },
            'node_modules/angular-cookies/angular-cookies': {
                deps: ['angular' ,'angular2', 'moment']
            },
            'node_modules/angular/angular': {
                format: 'global', // load this module as a global
                exports: 'angular', // the global property to take as the module value
                deps: ['jquery']
            },
            'node_modules/moment/moment': {
                deps: ['angular', 'angular2']
            },
            'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether': {
                format: 'global', // load this module as a global
                deps: ['jquery']
            },
            'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min': {
                format: 'global', // load this module as a global
                deps: ['jquery', 'tether']
            }
        }
})
Promise.all([
    System.import('jquery'),

    System.import('tether'),
    System.import('bootstrap'),

    System.import('angular'),
    System.import('ocLazyLoad'),
    System.import('angularUiRouter'),
    System.import('angular2'),
    System.import('upgrade'),
    System.import('moment'),
    System.import('Rx'),
    System.import('http')
]).then(function () {
    
    System.import('angularCookies'),
    System.import('app/angular2/app'),
        System.import('menu.dir'),
        System.import('app.mod')
});
