require.config({
    paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular.min',
        'routeResolver': 'lib/routeResolver',
        'ocLazyLoad': 'lib/ocLazyLoad',
        'ngRoute': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-route.min',
        'ngResource': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-resource.min',
        'uiRouter': '//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.8/angular-ui-router.min',
        'app': 'app/main'
    }
});

require(['jquery', 'angular', 'routeResolver', 'ocLazyLoad', 'ngRoute', 'ngResource', 'uiRouter', 'app'],
    function() {
        angular.bootstrap(document, ['app']);
    }
);
