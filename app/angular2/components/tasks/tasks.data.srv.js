System.register(["angular2/core", "angular2/http", "./task.model"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, task_model_1;
    var TasksDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (task_model_1_1) {
                task_model_1 = task_model_1_1;
            }],
        execute: function() {
            TasksDataService = (function () {
                function TasksDataService(http) {
                    this.tasksinit = [
                        new task_model_1.Task("Angular1"),
                        new task_model_1.Task("Angular2"),
                        new task_model_1.Task("Hybrid")
                    ];
                }
                Object.defineProperty(TasksDataService.prototype, "tasks", {
                    get: function () {
                        return this.tasksinit;
                    },
                    enumerable: true,
                    configurable: true
                });
                TasksDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TasksDataService);
                return TasksDataService;
            }());
            exports_1("TasksDataService", TasksDataService);
        }
    }
});
//# sourceMappingURL=tasks.data.srv.js.map