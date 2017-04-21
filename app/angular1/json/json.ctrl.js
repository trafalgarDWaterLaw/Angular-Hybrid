var json = angular.module('json', []);

json.controller('jsonController', ['TasksDataService', function(TasksDataService) {

  var jsn = this;

  console.log(TasksDataService);
  jsn.message = 'Angular 1.x view calling Angular 2 service';
  jsn.service = TasksDataService;

}]);
