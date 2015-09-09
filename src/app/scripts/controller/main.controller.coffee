# @ngInject
MainController = ($scope, currencyCalculateService, ValueService) ->
  vm = undefined
  vm = $scope
  vm.value = 0
  vm.currentValue = 0
  vm.each = currencyCalculateService.originalValue()

  vm.convertMe = (valueIn) ->
    vm.currentValue = ValueService.parseValue(valueIn.toString())
    if vm.currentValue
      vm.each = currencyCalculateService.actualValue(vm.currentValue)
    else
#      vm.each = currencyCalculateService.originalValue()
      vm.currentValue = 0
      vm.value = 0
    console.log vm.currentValue

MainController.$inject = ['$scope', 'currencyCalculateService', 'ValueService' ]
angular.module('sterlingConvert').controller 'MainController', MainController
