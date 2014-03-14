define(function() {
    var app = angular.module('app',
        ['ngRoute', 'routeResolver', 'oc.lazyLoad']
    );

    app.config(
        function(
            $routeProvider,
            routeResolverProvider,
            $controllerProvider,
            $compileProvider,
            $filterProvider,
            $provide,
            $ocLazyLoadProvider
        ) {
                $ocLazyLoadProvider.config({
                    asyncLoader: require
                });

                app.controller = $controllerProvider.register;
                app.service = $provide.service;
                app.factory = $provide.factory;
                app.filter = $filterProvider.register;
                app.directive = $compileProvider.directive;

                var route = routeResolverProvider.route;

                $routeProvider
                    .when('/', route.resolve('index', ['example']));
        }
    );

    return app;
});
