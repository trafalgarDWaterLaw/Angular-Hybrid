var main = angular.module('main', []);

main.controller('mainController', function() {

  var vm = this;

  vm.message = 'Angular 1.x';

  vm.number = 10;

  vm.increment = function(){
    vm.number += 1;
  };

});
