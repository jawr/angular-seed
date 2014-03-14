define(['app'], function(app) {
    app.service('example', function() {
        this.getMessage = function() { return 'Hello'; };
    });
});
