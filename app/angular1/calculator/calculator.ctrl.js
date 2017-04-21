var calcu = angular.module("calc", [])
calcu.controller('CalculatorController', function (Calculator) {
    var vm = this;
    vm.findSquare = function () {
        vm.answer = Calculator.square(vm.number);
    }
});
