System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Task;
    return {
        setters:[],
        execute: function() {
            Task = (function () {
                function Task(title) {
                    if (title === void 0) { title = ""; }
                    this.title = title;
                    this.status = "started";
                }
                return Task;
            }());
            exports_1("Task", Task);
        }
    }
});
//# sourceMappingURL=task.model.js.map