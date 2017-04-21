System.register(["angular2/upgrade", "angular2/http", "rxjs/add/operator/map", "./components/hello/hello", "./components/list/list", "./components/tasks/tasks.data.srv"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var upgrade_1, http_1, hello_1, list_1, tasks_data_srv_1;
    var adapter;
    return {
        setters:[
            function (upgrade_1_1) {
                upgrade_1 = upgrade_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (hello_1_1) {
                hello_1 = hello_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (tasks_data_srv_1_1) {
                tasks_data_srv_1 = tasks_data_srv_1_1;
            }],
        execute: function() {
            // Create a new upgrade adapter
            adapter = new upgrade_1.UpgradeAdapter();
            // Downgrade Angular 2 component as a directive
            angular.module("app").directive("hello", adapter.downgradeNg2Component(hello_1.Hello));
            angular.module("app").directive("list", adapter.downgradeNg2Component(list_1.List));
            adapter.addProvider(tasks_data_srv_1.TasksDataService);
            angular.module("app").factory("TasksDataService", adapter.downgradeNg2Provider(tasks_data_srv_1.TasksDataService));
            adapter.addProvider(http_1.HTTP_PROVIDERS);
            // Bootstrap the Angular 1 app
            adapter.bootstrap(document.body, ["app"]);
        }
    }
});
//# sourceMappingURL=app.js.map